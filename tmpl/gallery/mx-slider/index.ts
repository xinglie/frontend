/*
    author:xinglie.lkf@alibaba-inc.com
*/
import Magix, { Magix5 } from '../../lib/magix';
import Dragdrop from '../mx-dragdrop/index';
Magix.applyStyle('@index.less');
export default Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dragdrop],
    init(data) {
        this.assign(data);
    },
    assign(data) {
        if (isNaN(data.value)) {
            data.value = 0;
        }
        if (data.buffer && isNaN(data.bufferValue)) {
            data.bufferValue = 0;
        }
        this.set(data);
        return true;
    },
    render() {
        this.digest();
    },
    '@{update.range}<click>'(e: Magix5.MagixMouseEvent) {
        let bound = e.eventTarget.getBoundingClientRect();
        let p = (e.pageX - bound.left) / bound.width;
        this.digest({
            value: p
        });
        Magix.dispatch(this.root, 'change', {
            percent: p
        });
    },
    '@{start.drag}<mousedown>'(e: Magix5.MagixMouseEvent) {
        let bound = Magix.node('t_' + this.id).getBoundingClientRect();
        let v = this.get('value') || 0;
        this['@{drag.drop}'](e, (ev) => {
            let diff = ev.pageX - e.pageX;
            let p = diff / bound.width + v;
            if (p > 1) p = 1;
            else if (p < 0) p = 0;
            this.digest({
                value: p
            });
            Magix.dispatch(this.root, 'update', {
                percent: p
            });
        }, () => {
            Magix.dispatch(this.root, 'change', {
                percent: this.get('value')
            });
        });
    }
});