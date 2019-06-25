/*
    author:xinglie.lkf@taobao.com
 */
let IsW3C = window.getComputedStyle;
let ClearSelection = (t?: () => Selection) => {
    if ((t = window.getSelection)) {
        t().removeAllRanges();
    }
};
let DragPrevent = (e) => {
    console.log(e);
    e.preventDefault();
};
let DragMoveEvent = ['mousemove', 'touchmove'];
let DragEndEvent = ['mouseup', 'pointercancel', 'touchcancel'];
let DragPreventEvent = ['keydown', 'mousewheel', 'DOMMouseScroll', 'fullscreenchange'];

export default {
    ctor() {
        let me = this;
        me.on('destroy', () => {
            me['@{dd&drag.end}']();
        });
    },
    '@{dd&drag.end}'(e) {
        let me = this;
        let info = me['@{dd&drag.object}'];
        if (info) {
            delete me['@{dd&drag.object}'];
            let fn;
            for (fn of DragMoveEvent) {
                document.removeEventListener(fn, me['@{dd&move.proxy}']);
            }
            for (fn of DragEndEvent) {
                document.removeEventListener(fn, me['@{dd&stop.proxy}']);
            }
            for (fn of DragPreventEvent) {
                document.removeEventListener(fn, DragPrevent);
            }
            window.removeEventListener('blur', me['@{dd&stop.proxy}']);
            //let node = info['@{dd&node}'];
            let stop = info['@{dd&stop}'];
            let iStop = info['@{dd&stop.is.function}'];
            // if (node.releaseCapture) {
            //     node.releaseCapture();
            // } else if (node.releasePointerCapture && e.pointerId) {
            //     node.releasePointerCapture(e.pointerId);
            // }
            if (iStop) {
                stop(e);
            }
        }
    },
    '@{drag.drop}'(e, moveCallback, endCallback) {
        let me = this;
        me['@{dd&drag.end}']();
        if (e) {
            ClearSelection();
            //let node = e.eventTarget || e.target;
            // if (node.setCapture) {
            //     //node.setCapture();
            // } else if (node.setPointerCapture && e.pointerId) {
            //     node.setPointerCapture(e.pointerId);
            // }
            me['@{dd&drag.object}'] = {
                '@{dd&stop}': endCallback,
                //'@{dd&node}': node,
                '@{dd&stop.is.function}': !!endCallback
            };
            let moveIsFunction = !!moveCallback;
            me['@{dd&drag.finished}'] = 0;
            me['@{dd&stop.proxy}'] = e => {
                me['@{dd&drag.finished}'] = 1;
                me['@{dd&drag.end}'](e);
            };
            me['@{dd&move.proxy}'] = e => {
                if (moveIsFunction) {
                    moveCallback(e);
                }
            };
            let fn;
            for (fn of DragMoveEvent) {
                document.addEventListener(fn, me['@{dd&move.proxy}']);
            }
            for (fn of DragEndEvent) {
                document.addEventListener(fn, me['@{dd&stop.proxy}']);
            }
            for (fn of DragPreventEvent) {
                document.addEventListener(fn, DragPrevent, {
                    passive: false
                });
            }
            window.addEventListener('blur', me['@{dd&stop.proxy}']);
        }
    },
    '@{from.point}'(x, y) {
        let node = null;
        if (document.elementFromPoint) {
            if (!DragPrevent['@{dd&fixed}'] && IsW3C) {
                DragPrevent['@{dd&fixed}'] = true;
                DragPrevent['@{dd&add.scroll}'] = document.elementFromPoint(-1, -1) !== null;
            }
            if (DragPrevent['@{dd&add.scroll}']) {
                x += window.pageXOffset;
                y += window.pageYOffset;
            }
            node = document.elementFromPoint(x, y);
            while (node && node.nodeType == 3) node = node.parentNode;
        }
        return node;
    },
    '@{clear.selection}': ClearSelection
};