/*!1.0.2 kooboy_li@163.com*/
import"./header.js";import"./tab.js";import"./list.js";let e,i,t;import o from"../lib/magix.js";o.applyStyle("fea","body,html{scroll-behavior:smooth}.fe-g{background:#45b6f7;height:40px;line-height:40px;color:#fff;padding:0 10px;font-size:16px}.fe-h{padding:0 26px;background:#fafafa;color:#333;height:28px;line-height:28px;position:-webkit-sticky;position:sticky;top:0;transition:box-shadow .25s ease-out}.fe-i{box-shadow:0 2px 4px 0 rgba(0,0,0,.08)}.fe-j{float:left;padding:0 5px;cursor:pointer}.fe-j:hover{background:hsla(0,0%,100%,.6)}.fe-k,.fe-k:hover{background:#fff}.fe-l{min-height:300px}.fe-m{height:90px;width:200px;background:#fafafa;margin:10px;transition:all .25s ease-out;float:left;border-radius:4px;padding:15px;cursor:default}.fe-m:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.fe-n{font-size:14px;font-weight:700;margin-bottom:5px}.fe-o{font-size:12px;color:#aaa;height:38px;overflow:hidden}.fe-p{text-align:center;color:#bbb;height:30px;line-height:30px}.fe-q,.fe-q:active,.fe-q:hover,.fe-q:visited{color:#fff}.fe-r{font-size:14px}");let a=(e,i)=>{i=i||150;let t,o=Date.now();return(...a)=>{let f=Date.now();clearTimeout(t),f-o>i?(o=f,e.apply(this,a)):t=setTimeout(()=>{e.apply(this,a)},i-(f-o))}};export default o.View.extend({tmpl:(o,a,f)=>{let s,p,r=[],{header:h,active:l}=o;return h&&(s=e?[e]:[e=a("div",{_:"_",class:"fe-g","mx-view":"~fe/view/header"})],r.push(...s)),p="fe-h",l&&(p+=" fe-i"),r.push(a("div",{"mx-view":"~fe/view/tab",class:p})),i?r.push(i):r.push(i=a("div",{_:"a",class:"fe-l fe-e","mx-view":"~fe/view/list"})),t?r.push(t):(s=[a(0,0,"\xa92019-xinglie")],r.push(t=a("div",{_:"b",class:"fe-p"},s))),a(f,0,r)},render(){this.digest({header:o.config("logo")}),this._d=a(()=>{let e=o.config("hash"),i=o.config("scrollId"),t=e?window.pageYOffset:o.node(i).scrollTop;this.digest({active:t>40})},50)},"$doc<scroll>&capture"(e){let i=o.config("hash"),t=o.config("scrollId");(i||e.target.id==t)&&this._d()}});