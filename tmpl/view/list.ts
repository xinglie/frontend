/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import Magix from '../lib/magix';
import Bridge from './bridget';
let bodyStyle = document.body.style;
export default Magix.View.extend({
    tmpl: '@list.html',
    init() {
        let render = this.render.bind(this);
        Bridge.on('@{when.c.change}', render);
        this.on('destroy', () => {
            Bridge.off('@{when.c.change}', render);
        });
    },
    render() {
        let tab = Bridge["@{get.c.id}"]();
        bodyStyle.cursor = 'wait';
        let latestMarker = Magix.mark(this, '@{render}');
        Magix.use(`@../data/${tab}`, list => {
            if (latestMarker()) {
                this.digest({
                    list: list || []
                });
                bodyStyle.cursor = 'default';
            } else {
                console.log('ignore');
            }
        });
    }
});