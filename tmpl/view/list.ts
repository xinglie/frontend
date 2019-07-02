/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import Magix from '../lib/magix';
import { List, ListMap } from '../data/list';
let bodyStyle = document.body.style;
export default Magix.View.extend({
    tmpl: '@list.html',
    init() {
        this.observeLocation('c');
    },
    render() {
        let { params } = Magix.Router.parse();
        let tab = params.c;
        if (!ListMap[tab]) {
            tab = List[0].key;
        }
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