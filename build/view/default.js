/*!1.0.2 kooboy_li@163.com*/
import"./header.js";import"./tab.js";import"./list.js";let e,t,i;import o from"../lib/magix.js";o.applyStyle("fea","body,html{scroll-behavior:smooth}.fe-f{background:#45b6f7;height:40px;line-height:40px;color:#fff;padding:0 10px;font-size:16px}.fe-g{padding:0 26px;background:#fafafa;color:#333;height:28px;line-height:28px;position:-webkit-sticky;position:sticky;top:0;-webkit-transition:box-shadow .25s ease-out;transition:box-shadow .25s ease-out}.fe-h{box-shadow:0 2px 4px 0 rgba(0,0,0,.08)}.fe-i{float:left;padding:0 5px;cursor:pointer}.fe-i:hover{background:hsla(0,0%,100%,.6)}.fe-j,.fe-j:hover{background:#fff}.fe-k{min-height:300px}.fe-l{height:90px;width:200px;background:#fafafa;margin:10px;-webkit-transition:all .25s ease-out;transition:all .25s ease-out;float:left;border-radius:4px;padding:15px;cursor:default}.fe-l:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.fe-m{font-size:14px;font-weight:700;margin-bottom:5px}.fe-n{font-size:12px;color:#aaa;height:38px;overflow:hidden}.fe-o{text-align:center;color:#bbb;height:30px;line-height:30px}.fe-p,.fe-p:active,.fe-p:hover,.fe-p:visited{color:#fff}.fe-q{font-size:14px}");let a=(e,t)=>{t=t||150;let i,o=Date.now();return(...a)=>{let s=Date.now();clearTimeout(i),s-o>t?(o=s,e.apply(this,a)):i=setTimeout(()=>{e.apply(this,a)},t-(s-o))}};export default o.View.extend({tmpl:(o,a,s)=>{let f,p,r=[],{header:h,active:l}=o;return h&&(f=e?[e]:[e=a("div",{_:"_",class:"fe-f","mx-view":"~fe/view/header"})],r.push(...f)),p="fe-g",l&&(p+=" fe-h"),r.push(a("div",{"mx-view":"~fe/view/tab",class:p})),t?r.push(t):r.push(t=a("div",{_:"a",class:"fe-k fe-d","mx-view":"~fe/view/list"})),i?r.push(i):(f=[a(0,0,"\xa92019-xinglie")],r.push(i=a("div",{_:"b",class:"fe-o"},f))),a(s,0,r)},render(){let e=o.Router.parse();this.digest({header:"xl"!=e.get("from")}),this.__=a(()=>{this.digest({active:window.pageYOffset>40})},50)},"$win<scroll>"(){this.__()}});