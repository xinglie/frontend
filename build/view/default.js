/*!1.0.2 kooboy_li@163.com*/
import"./header.js";import"./tab.js";import"./list.js";let e,i,t;import o from"../lib/magix.js";o.applyStyle("fea","body,html{scroll-behavior:smooth}.fe-f{background:#45b6f7;height:40px;line-height:40px;color:#fff;padding:0 10px;font-size:16px}.fe-g{padding:0 26px;background:#fafafa;color:#333;height:28px;line-height:28px;position:-webkit-sticky;position:sticky;top:0;transition:box-shadow .25s ease-out}.fe-h{box-shadow:0 2px 4px 0 rgba(0,0,0,.08)}.fe-i{float:left;padding:0 5px;cursor:pointer}.fe-i:hover{background:hsla(0,0%,100%,.6)}.fe-j,.fe-j:hover{background:#fff}.fe-k{min-height:300px}.fe-l{height:90px;width:200px;background:#fafafa;margin:10px;transition:all .25s ease-out;float:left;border-radius:4px;padding:15px;cursor:default}.fe-l:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.fe-m{font-size:14px;font-weight:700;margin-bottom:5px}.fe-n{font-size:12px;color:#aaa;height:38px;overflow:hidden}.fe-o{text-align:center;color:#bbb;height:30px;line-height:30px}.fe-p,.fe-p:active,.fe-p:hover,.fe-p:visited{color:#fff}.fe-q{font-size:14px}");let f=(e,i)=>{i=i||150;let t,o=Date.now();return(...f)=>{let a=Date.now();clearTimeout(t),a-o>i?(o=a,e.apply(this,f)):t=setTimeout(()=>{e.apply(this,f)},i-(a-o))}};export default o.View.extend({tmpl:(o,f,a)=>{let p,s,h=[],{header:r,active:l}=o;return r&&(p=e?[e]:[e=f("div",{_:"_",class:"fe-f","mx-view":"~fe/view/header"})],h.push(...p)),s="fe-g",l&&(s+=" fe-h"),h.push(f("div",{"mx-view":"~fe/view/tab",class:s})),i?h.push(i):h.push(i=f("div",{_:"a",class:"fe-k fe-d","mx-view":"~fe/view/list"})),t?h.push(t):(p=[f(0,0,"\xa92019-xinglie")],h.push(t=f("div",{_:"b",class:"fe-o"},p))),f(a,0,h)},render(){this.digest({header:o.config("logo")}),this.__=f(()=>{this.digest({active:window.pageYOffset>40})},50)},"$win<scroll>"(){this.__()}});