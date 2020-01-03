import Magix from 'https://xinglie.github.io/build/lib/magix.js';
export default Object.assign({
    '@{save.c.id}'(cId) {
        if (cId != this['@{c.id}']) {
            this['@{c.id}'] = cId;
            this.fire('@{when.c.change}');
        }
    },
    '@{get.c.id}'() {
        return this['@{c.id}'];
    }
}, Magix.Event);