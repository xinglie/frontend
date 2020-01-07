/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import View from './base';
import Magix from 'magix5';
import Bridge from './bridget';
let bodyStyle = document.body.style;
export default View.extend({
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
        let current = this['@{current.tab}'];
        if (tab && current != tab) {
            bodyStyle.cursor = 'wait';
            this['@{current.tab}'] = tab;
            let latestMarker = Magix.mark(this, '@{render}');
            Magix.use(`@mx:../data/${tab}`, list => {
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
    }
});