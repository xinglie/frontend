import Magix from '../lib/magix';
import ZH from './zh-cn';
let I18n = {
    'zh-cn': ZH,
    zh: ZH
};
let DefaultLang = 'zh-cn';
let Has = Magix.has;
let Reg = /\{(\d+)\}/g;
export default (key: string, ...args: any[]) => {
    let lang = (Magix.config('lang') || navigator.language).toLowerCase();
    if (!Has(I18n, lang)) {
        lang = DefaultLang;
    }
    let l = I18n[lang];
    let res = Has(l, key) ? l[key] : key;
    if (args.length) {
        res = res.replace(Reg, (m, i, k) => {
            i |= 0;
            if (args.length > i) {
                k = args[i];
                return Has(l, k) ? l[k] : k;
            }
            return m;
        });
    }
    return res;
};