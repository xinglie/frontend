import Magix from 'magix5';
import I18n from '../i18n/index';
export default Magix.View.extend({
    ctor() {
        this.set({
            i18n: I18n
        });
    }
});