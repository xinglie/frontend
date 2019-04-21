import Magix from '../lib/magix.js';
let list = [{
    key: 'fe',
    text: '@{lang#data.fe}'
}, {
    key: 'icon',
    text: '@{lang#data.icon}'
}, {
    key: 'tool',
    text: '@{lang#data.tool}'
}, {
    key: 'color',
    text: '@{lang#data.color}'
}, {
    key: 'fw',
    text: '@{lang#data.fw}'
}, {
    key: 'plugin',
    text: '@{lang#data.plugin}'
}, {
    key: 'ux',
    text: '@{lang#data.ux}'
}];

export let List = list;
export let ListMap = Magix.toMap(list, 'key');