/*
    author:xinglie.lkf@alibaba-inc.com
*/
import Magix from 'https://xinglie.github.io/build/lib/magix.js';
import View from './base';
Magix.applyStyle('@default.less');
let Throttle = (fn: () => void, timespan: number) => {
    timespan = timespan || 150;
    let last = Date.now();
    let timer;
    return (...args) => {
        let now = Date.now();
        clearTimeout(timer);
        if (now - last > timespan) {
            last = now;
            fn.apply(this, args);
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, timespan - (now - last));
        }
    };
}
export default View.extend({
    tmpl: '@default.html',
    render() {
        this.digest({
            header: Magix.config('fe.logo')
        });
        this['@{update}'] = Throttle(() => {
            let hash = Magix.config('fe.hash');
            let sId = Magix.config('fe.scrollId');
            let sTop = hash ? window.pageYOffset : Magix.node(sId).scrollTop;
            this.digest({
                active: sTop > 40
            });
        }, 50);
    },
    '$doc<scroll>&{capture:true}'(e) {
        let hash = Magix.config('fe.hash');
        let sId = Magix.config('fe.scrollId');
        if (hash || e.target.id == sId) {
            this['@{update}']();
        }
    }
});