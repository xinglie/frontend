/*!1.0.2 kooboy_li@163.com*/
import"./header.js";import"./tab.js";import"./list.js";let e,i,t;import o from"../lib/magix.js";o.applyStyle("fea","body,html{scroll-behavior:smooth}.fef{background:#45b6f7;height:40px;line-height:40px;color:#fff;padding:0 10px;font-size:16px}.feg{padding:0 26px;background:#fafafa;color:#333;height:28px;line-height:28px;position:-webkit-sticky;position:sticky;top:0;transition:box-shadow .25s ease-out}.feh{box-shadow:0 2px 4px 0 rgba(0,0,0,.08)}.fei{float:left;padding:0 5px;cursor:pointer}.fei:hover{background:hsla(0,0%,100%,.6)}.fej,.fej:hover{background:#fff}.fek{min-height:300px}.fel{height:90px;width:200px;background:#fafafa;margin:10px;transition:all .25s ease-out;float:left;border-radius:4px;padding:15px;cursor:default}.fel:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.fem{font-size:14px;font-weight:700;margin-bottom:5px}.fen{font-size:12px;color:#aaa;height:38px;overflow:hidden}.feo{text-align:center;color:#bbb;height:30px;line-height:30px}.fep,.fep:active,.fep:hover,.fep:visited{color:#fff}.feq{font-size:14px}");let f=(e,i)=>{i=i||150;let t,o=Date.now();return(...f)=>{let a=Date.now();clearTimeout(t),a-o>i?(o=a,e.apply(this,f)):t=setTimeout(()=>{e.apply(this,f)},i-(a-o))}};export default o.View.extend({tmpl:(o,f,a)=>{let s,p,h=[],{active:r}=o;return e?h.push(e):h.push(e=f("div",{mxs:"fe_:_",class:"fef","mx-view":"view/header"})),s="feg",r&&(s+=" feh"),h.push(f("div",{"mx-view":"view/tab",class:s})),i?h.push(i):h.push(i=f("div",{mxs:"fe_:a",class:"fek fed","mx-view":"view/list"})),t?h.push(t):(p=[f(0,0,"\xa92019-xinglie")],h.push(t=f("div",{mxs:"fe_:b",class:"feo"},p))),f(a,0,h)},render(){this.digest(),this.__=f(()=>{this.digest({active:window.pageYOffset>40})},50)},"$win<scroll>"(){this.__()}});