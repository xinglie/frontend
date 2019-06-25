/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./index.less';
import Magix, { Magix5 } from '../../lib/magix';
import Player from './player';
let FastStep = 5;
let TimeCache = new Magix.Cache(500, 100);
let FormatTime = time => {
    time = time | 0;
    if (TimeCache.has(time)) {
        return TimeCache.get(time);
    }
    let m = (time / 60) | 0;
    let s = time - m * 60;
    let r = ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
    TimeCache.set(time, r);
    return r;
};
export default Magix.View.extend({
    tmpl: '@time.html',
    init() {
        this.set({
            duration: 0,
            current: 0,
            buffered: 0,
            format: FormatTime
        });
        Player.on('@{when.song.time.update}', e => {
            if (!this.get('stop')) {
                this.digest({
                    duration: e.duration,
                    current: e.current,
                    buffered: e.buffered
                });
            }
        });
    },
    render() {
        this.digest();
    },
    '@{stop.update}<update>'(e) {
        this.digest({
            stop: true,
            current: this.get('duration') * e.percent
        });
    },
    '@{update.time}<change>'(e) {
        this.set({
            stop: false
        });
        let time = this.get('duration') * e.percent;
        Player["@{seek.time}"](time);
    },
    '$doc<keydown>'(e: KeyboardEvent) {
        //37 left  39 right
        let { duration, current } = this.get();
        if (e.keyCode == 37) {
            current -= FastStep;
        } else if (e.keyCode == 39) {
            current += FastStep;
        }
        if (current < 0) current = 0;
        else if (current > duration) current = duration;
        Player["@{seek.time}"](current);
    }
});