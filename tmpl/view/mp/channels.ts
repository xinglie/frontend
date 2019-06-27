/*
    author:xinglie.lkf@alibaba-inc.com
*/
'ref@./index.less';
import Magix, { Magix5 } from '../../lib/magix';
import Player from './player';
export default Magix.View.extend({
    tmpl: '@channels.html',
    async render() {
        let marker = this.getMarker('@{render}');
        try {
            let data = await Player["@{get.channels.with.active}"]();
            if (marker()) {
                this.digest(data);
            }
        } catch{
            if (marker()) {
                this.digest({
                    error: '获取分类失败，请刷新重试'
                });
            }
        }
    },
    '@{update.channel}<click>'(e: Magix5.MagixMouseEvent) {
        let { channel } = e.params;
        Magix.dispatch(this.root, 'change', {
            channel
        });
        this.digest({
            channel
        });
    }
});