/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import Magix from '../lib/magix.js';
export default Magix.View.extend({
    tmpl: '@header.html',
    render() {
        this.digest();
    }
});