/*
    author:xinglie.lkf@alibaba-inc.com
*/
import Magix from '../../lib/magix';
import Player from './player';
Magix.applyStyle('@index.less');
export default Magix.View.extend({
    tmpl: '@index.html',
    init() {
        Player.on('@{when.song.end}', () => {
            if (this.get('mode') == 'rdm') {
                let active = this.get('active');
                Player["@{next.song}"](active.channel_id);
            } else {
                Player["@{replay}"]();
            }
        });
        Player.on('@{when.status.change}', (e) => {
            let state = {} as {
                play: boolean
                buffer: boolean
            };
            console.log(e);
            if (Magix.has(e, 'play')) {
                state.play = e.play;
            }
            if (Magix.has(e, 'buffer')) {
                state.buffer = e.buffer;
            }
            this.digest(state);
        });
        Player.on('@{when.history.change}', this.render.bind(this));
        Player.on('@{when.song.change}', e => {
            this.digest({
                song: e.song
            });
        })
        this.set({
            cshow: false,
            volume: 1,
            mode: 'rdm'
        });
    },
    render() {
        this.digest({
            ptip: Player["@{get.pre.tip}"](),
            ntip: Player["@{get.next.tip}"](),
            undo: Player["@{can.undo}"]()
        });
    },
    '@{toggle.play.state}'() {
        let play = this.get('play');
        if (play) {
            Player["@{set.pause}"]();
        } else {
            Player["@{set.play}"]();
        }
    },
    '@{update.channel}<change>'(e) {
        this.set({
            active: e.channel
        });
        Player["@{next.song}"](e.channel.channel_id, true);
    },
    '@{update.volume}<update,change>'(e) {
        Player["@{set.volume}"](e.percent);
    },
    '@{update.status}<click>'() {
        this['@{toggle.play.state}']();
    },
    '@{toggle.channels}<click>'() {
        this.digest({
            cshow: !this.get('cshow')
        });
    },
    '@{next.song}<click>'() {
        let active = this.get('active');
        Player["@{next.song}"](active.channel_id);
    },
    '@{pre.song}<click>'() {
        Player["@{pre.song}"]();
    },
    '@{toggle.mute}<click>'() {
        if (Magix.has(this, '@{bak.volume}')) {
            let v = this['@{bak.volume}'];
            delete this['@{bak.volume}'];
            this.digest({
                volume: v
            });
            Player["@{set.volume}"](v);
        } else {
            this['@{bak.volume}'] = this.get('volume');
            let v = 0;
            this.digest({
                volume: v
            });
            Player["@{set.volume}"](v);
        }
    },
    '@{update.mode}<click>'() {
        let mode = this.get('mode');
        if (mode == 'rdm') {
            this.digest({
                mode: 'circle'
            });
        } else {
            this.digest({
                mode: 'rdm'
            });
        }
    },
    '$doc<keyup>'(e: KeyboardEvent) {
        let active = this.get('active');
        if (active) {
            if (e.keyCode == 13) {//enter
                this['@{toggle.play.state}']();
            } else if (e.keyCode == 80) {//p
                Player["@{pre.song}"]();
            } else if (e.keyCode == 78) {//n
                Player["@{next.song}"](active.channel_id);
            } else if (e.keyCode == 67) {//c
                this.digest({
                    cshow: !this.get('cshow')
                });
            }
        }
    }
});