/*!1.0.2 kooboy_li@163.com*/
let e={class:"fe-l"},t={class:"fe-n"};import r from"../lib/magix.js";import{List as l,ListMap as s}from"../data/list.js";let a=document.body.style;export default r.View.extend({tmpl:(r,l,s,a)=>{let i,o,n,d=[],{list:f}=r;for(let r=0,s=f,m=s.length;r<m;r++){let f=s[r];n=[l(0,0,a(f.name))],o=[l("a",{href:a(f.link),title:a(f.link),class:"fe-m",target:"_blank",rel:"noopener noreferrer"},n)],n=[l(0,0,a(f.desc))],o.push(l("div",t,n)),i=[l("div",e,o)],d.push(...i)}return l(s,0,d)},init(){this.observeLocation("c")},render(){let{params:e}=r.Router.parse(),t=e.c;s[t]||(t=l[0].key),a.cursor="wait";let i=r.mark(this,"_a");r.use(`~fe/data/${t}`,e=>{i()&&(this.digest({list:e||[]}),a.cursor="default")})}});