/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./index.less';
import Magix, { Magix5 } from '../../lib/magix';
import Player from './player';
let lineReg = /((?:\[[0-9:\.]+\])+)([^\r\n]*)/g;
let timeSpaceReg = /\][\r\n\s]*\[/g;
let offsetReg = /\[offset\s*:\s*(\d+)\]/;
let timeReg = /\[([0-9\.:]+)\]/g;
let Sort = (a, b) => a.time - b.time;
let NoLyric = [{ text: '加载中...' }];
let ErrorLyric = [{
    time: 0,
    text: '获取歌词失败'
}];
let ParseLyric = lyric => {
    let offset = 0;
    let lyrics = [];
    lyric.replace(timeSpaceReg, '][')
        .replace(offsetReg, (m, time) => {
            offset = parseFloat(time) / 1000;
        }).replace(lineReg, (m, g, c) => {
            g.replace(timeReg, (_, time) => {
                time = time.split(':');
                let t = 0, max = time.length;
                for (let i = 0, f; i < max; i++) {
                    f = (max - i - 1);
                    if (f > 0) {
                        f *= 60;
                    } else {
                        f = 1;
                    }
                    t += time[i] * f;
                }
                t += offset;
                if (!isNaN(t)) {
                    lyrics.push({
                        time: t,
                        text: c
                    });
                }
            });
        });
    lyrics = lyrics.sort(Sort);
    return lyrics;
};
export default Magix.View.extend({
    tmpl: '@lyric.html',
    init() {
        Player.on('@{when.history.change}', e => {
            this['@{update.lyric}'](e.song.sid);
        });
        Player.on('@{when.song.time.update}', e => {
            this['@{scroll.lyric}'](e.current);
        });
    },
    async '@{update.lyric}'(sId) {
        delete this['@{lyrics}'];
        delete this['@{lyric.start}'];
        delete this['@{lyric.end}'];
        delete this['@{lyric.active}'];
        this['@{scroll.lyric}'](0);
        let marker = this.getMarker(true);
        try {
            let { lyric } = await Player["@{fetch.song.lyric}"](sId);
            if (marker()) {
                this['@{lyrics}'] = ParseLyric(lyric);
            }
        } catch{
            this['@{lyrics}'] = ErrorLyric;
        }
    },
    '@{scroll.lyric}'(time) {
        let lyrics = this['@{lyrics}'];
        if (lyrics) {
            let idx = 0;
            let lines = [];
            for (; idx < lyrics.length; idx++) {
                let line = lyrics[idx];
                if (line.time > time) {
                    break;
                }
            }
            let start = Math.max(idx - 2, 0);
            let end = Math.min(lyrics.length, idx + 1);
            if (start == 0 &&
                lyrics.length > 2 &&
                (end - start) < 3) {
                end++;
            }
            if (end == lyrics.length &&
                lyrics.length > 2 &&
                (end - start) < 3) {
                start--;
            }
            idx -= 1;
            if (idx < 0) idx = 0;
            if (this['@{lyric.end}'] != end ||
                this['@{lyric.start}'] != start ||
                this['@{lyric.active}'] != idx) {
                this['@{lyric.end}'] = end;
                this['@{lyric.start}'] = start;
                this['@{lyric.active}'] = idx;
                for (let i = start; i < end; i++) {
                    lines.push({
                        text: lyrics[i].text,
                        active: i == idx
                    });
                }
                this.digest({
                    lyrics: lines
                });
            }
        } else {
            this.digest({
                lyrics: NoLyric
            });
        }
    },
    render() {
        this.digest({
            lyrics: NoLyric
        });
    }
});