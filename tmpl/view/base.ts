import Magix from 'https://xinglie.github.io/build/lib/magix.js';
import I18n from '../i18n/index';
export default Magix.View.extend({
    ctor() {
        this.set({
            i18n: I18n
        });
    }
});