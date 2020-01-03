/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./default.less';
import View from './base';
export default View.extend({
    tmpl: '@header.html',
    render() {
        this.digest();
    }
});