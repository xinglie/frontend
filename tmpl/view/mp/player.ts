import Magix from '../../lib/magix';
let APIHost = 'https://jirenguapi.applinzi.com/fm';
let MAX_HISTORY = 50;
interface SongDesc {
    artist: string
    lrc: string
    picture: string
    sid: number
    title: string
    url: string
}
let RedoList: SongDesc[] = [];
let UndoList: SongDesc[] = [];
export default Object.assign({
    '@{fetch.channels}'() {
        return fetch(`${APIHost}/getChannels.php`).then(r => r.json());
    },
    '@{fetch.random.song}'(channelId) {
        return fetch(`${APIHost}/getSong.php?channel=${channelId}`).then(r => r.json());
    },
    '@{fetch.song.lyric}'(songId) {
        return fetch(`${APIHost}/getLyric.php?sid=${songId}`).then(r => r.json());
    },
    async '@{get.channels.with.active}'() {
        let { channels } = await this['@{fetch.channels}']();
        let active = channels[0];
        return {
            active,
            channels
        }
    },
    '@{init.audio}'() {
        if (!this['@{core.audio}']) {
            let audio = new Audio();
            let timer;
            audio.onerror = () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    this.fire('@{when.song.error}');
                }, 2e3);
            };
            audio.onended = () => {
                this.fire('@{when.song.end}');
            };
            audio.ontimeupdate = () => {
                let buffered = audio.buffered;
                let p = 0;
                if (buffered.length) {
                    p = buffered.end(buffered.length - 1) / audio.duration;
                }
                this.fire('@{when.song.time.update}', {
                    duration: audio.duration,
                    current: audio.currentTime,
                    buffered: p
                });
            };
            audio.onplay = () => {
                this.fire('@{when.status.change}', {
                    play: true
                });
            };
            audio.onpause = () => {
                this.fire('@{when.status.change}', {
                    play: audio.ended
                });
            };
            audio.onloadedmetadata = () => {
                let current = this['@{song.info}'] as SongDesc;
                let find = false;
                for (let s of UndoList) {
                    if (s.sid == current.sid) {
                        find = true;
                        break;
                    }
                }
                if (!find) {
                    for (let s of RedoList) {
                        if (s.sid == current.sid) {
                            find = true;
                            break;
                        }
                    }
                }
                if (!find) {
                    UndoList.push(current);
                }
                if (UndoList.length > MAX_HISTORY) {
                    UndoList.shift();
                }
                this.fire('@{when.history.change}', {
                    song: current
                });
            };
            this['@{core.audio}'] = audio;
        }
    },
    '@{play.song}'(song: SongDesc) {
        this['@{init.audio}']();
        this['@{core.audio}'].src = song.url;
        let p = this['@{core.audio}'].play();
        p.catch(e => {
            console.log('click play button');
        });
        this['@{song.info}'] = song;
    },
    '@{seek.time}'(time) {
        let seekable = this['@{core.audio}'].seekable;
        let len = seekable.length;
        if (len) {
            let start = seekable.start(0);
            let end = seekable.end(len - 1);
            if (time >= start && time <= end) {
                this['@{core.audio}'].currentTime = time;
            }
        } else {
            let buffered = this['@{core.audio}'].buffered;
            if (buffered.length) {
                let max = buffered.end(buffered.length - 1);
                this['@{core.audio}'].currentTime = max;
            }
        }
    },
    async '@{next.song}'(channelId, forceRandom?: boolean) {
        if (!forceRandom) {
            forceRandom = RedoList.length == 0;
        }
        if (forceRandom) {
            try {
                let { song } = await this["@{fetch.random.song}"](channelId);
                this['@{play.song}'](song[0]);
                this.fire('@{when.song.change}', {
                    song: song[0]
                });
            } catch{
                this['@{next.song}'](channelId, forceRandom);
            }
        } else {
            let song = RedoList.pop();
            UndoList.push(song);
            this['@{play.song}'](song);
            this.fire('@{when.song.change}', {
                song
            });
        }
    },
    '@{pre.song}'() {
        if (UndoList.length > 1) {
            let song = UndoList.pop();
            RedoList.push(song);
            song = UndoList[UndoList.length - 1];
            this['@{play.song}'](song);
            this.fire('@{when.song.change}', {
                song
            });
        }
    },
    '@{can.undo}'() {
        return UndoList.length > 1;
    },
    '@{set.volume}'(v) {
        this['@{core.audio}'].volume = v;
    },
    '@{set.pause}'() {
        this['@{core.audio}'].pause();
    },
    '@{set.play}'() {
        this['@{core.audio}'].play();
    },
    '@{replay}'() {
        this['@{core.audio}'].currentTime = 0;
        this['@{core.audio}'].play();
    },
    '@{get.pre.tip}'() {
        if (UndoList.length > 1) {
            let song = UndoList[UndoList.length - 2];
            return '上一首：' + song.title + '-' + song.artist;
        }
        return '上一首：暂无历史歌曲';
    },
    '@{get.next.tip}'() {
        if (RedoList.length) {
            let song = RedoList[RedoList.length - 1];
            return '下一首：' + song.title + '-' + song.artist;
        }
        return '下一首：随机歌曲';
    }
}, Magix.Event);