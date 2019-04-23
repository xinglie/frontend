/*
    author:xinglie.lkf@alibaba-inc.com
*/
import Magix from '../lib/magix';
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
export default Magix.View.extend({
    tmpl: '@default.html',
    render() {
        this.digest();
        this['@{update}'] = Throttle(() => {
            this.digest({
                active: window.pageYOffset > 40
            });
        }, 50);
    },
    '$win<scroll>'() {
        this['@{update}']();
    }
});