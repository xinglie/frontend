import Magix from './lib/magix';
import I18n from './i18n/index';
Magix.applyStyle('@scoped.style');
let boot = Magix.node('boot') as HTMLScriptElement;
let src = boot.src.replace(/[^/]+$/, '');

let lang = navigator.language.toLowerCase();
try {
    let store = window.localStorage;
    if (store) {
        lang = store.getItem('fe.lang') || lang;
    }
} catch{

}
document.title = I18n('@{lang#site.name}');
Magix.View.merge({
    ctor() {
        this.set({
            i18n: I18n
        });
    }
});
Magix.boot({
    lang,
    paths: {
        view: src + 'view/'
    },
    rootId: 'app',
    defaultPath: '/nav',
    defaultView: 'view/default',
    rewrite(path, params) {
        let reg = /^\/nav\/(.+)$/;
        let m = path.match(reg);
        if (m) {
            params.c = m[1];
            return '/nav';
        }
        return path;
    }
});