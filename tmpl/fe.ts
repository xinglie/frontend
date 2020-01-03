import Magix from 'https://xinglie.github.io/build/lib/magix.js';
import I18n from './i18n/index';
Magix.applyStyle('@scoped.style');
let url = import.meta.url;
let src = url.replace(/[^/]+$/, '');
let inited = 0;
let initFrontend = options => {
    if (!options) return;
    if (!inited) {
        inited = 1;
        let lang = navigator.language.toLowerCase(),
            scrollId = options.scrollId;
        try {
            let store = window.localStorage;
            if (store) {
                lang = store.getItem('fe.lang') || lang;
            }
        } catch{

        }
        lang = Magix.config('lang') || lang;
        Magix.config({
            'fe.lang': lang,
            'fe.logo': options.logo,
            'fe.hash': options.hash,
            'fe.scrollId': scrollId
        });
        if (options.hash) {
            Magix.config({
                paths: {
                    '~fe': src
                },
                rewrite(path, params) {
                    let reg = /^\/nav\/(.+)$/;
                    let m = path.match(reg);
                    if (m) {
                        params.c = m[1];
                        return '/nav';
                    }
                    return path;
                }
            })
        }
    }
};
export default {
    mount(rootId, options) {
        initFrontend(options);
        if (options && options.hash) {
            document.title = I18n('@{lang#site.name}');
            Magix.boot({
                defaultPath: '/nav',
                defaultView: '~fe/view/default',
                rootId
            });
        } else {
            let root = Magix.Vframe.root();
            let node = Magix.node(rootId);
            if (node) {
                root.mountVframe(node, '~fe/view/default');
            }
        }
    },
    unmount(rootId) {
        let hash = Magix.config('fe.hash');
        if (hash) {
            Magix.unboot();
        } else {
            let root = Magix.Vframe.root();
            let node = Magix.node(rootId);
            if (node) {
                root.unmountVframe(node);
            }
        }
    }
};