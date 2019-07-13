import Magix from './lib/magix';
import I18n from './i18n/index';
let url = import.meta.url;
let Starter = {
    config(rootId, options) {
        Magix.applyStyle('@scoped.style');
        let src = url.replace(/[^/]+$/, '');

        let lang = navigator.language.toLowerCase(),
            scrollId = options.scrollId;
        try {
            let store = window.localStorage;
            if (store) {
                lang = store.getItem('fe.lang') || lang;
            }
        } catch{

        }
        if (options.hash) {
            document.title = I18n('@{lang#site.name}');
        }
        Magix.View.merge({
            ctor() {
                this.set({
                    i18n: I18n
                });
            }
        });

        Magix.config({
            lang,
            paths: {
                '~fe': src
            },
            logo: options.logo,
            hash: options.hash,
            scrollId,
            rootId: rootId,
            defaultPath: '/nav',
            defaultView: '~fe/view/default',
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
    },
    boot() {
        Magix.boot();
    },
    unboot() {
        Magix.unboot();
    }
}
export default Starter;