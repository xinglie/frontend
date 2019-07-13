/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import Magix from '../lib/magix';
import { List, ListMap } from '../data/list';
import Bridge from './bridget';
export default Magix.View.extend({
    tmpl: '@tab.html',
    init() {
        let hash = Magix.config('hash');
        if (hash) {
            this.observeLocation('c');
        }
        this.set({
            list: List
        });
    },
    render() {
        let hash = Magix.config('hash'),
            tab;
        if (hash) {
            let { params } = Magix.Router.parse();
            tab = params.c;
        } else {
            tab = Bridge["@{get.c.id}"]();
        }
        if (!ListMap[tab]) {
            tab = List[0].key;
        }
        Bridge["@{save.c.id}"](tab);
        this.digest({
            active: tab
        });
    },
    '@{change.tab}<click>'(e) {
        let hash = Magix.config('hash');
        if (hash) {
            window.scrollTo(0, 0);
            Magix.Router.to('/nav/' + e.params.tab);
        } else {
            let n = Magix.node(Magix.config('scrollId'));
            n.scrollTop = 0;
            Bridge["@{save.c.id}"](e.params.tab);
            this.render();
        }
    }
});