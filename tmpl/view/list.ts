/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import Magix from '../lib/magix.js';
import { List, ListMap } from '../data/list.js';
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
        Magix.use(`../data/${tab}`, this.wrapAsync(list => {
            this.digest({
                list: list || []
            });
            bodyStyle.cursor = 'default';
        }));
    }
});