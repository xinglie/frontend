/*!1.0.2 kooboy_li@163.com*/
let e={class:"feo"},t={class:"feq"};import r from"../lib/magix.js";import{List as s,ListMap as l}from"../data/list.js";let i=document.body.style;export default r.View.extend({tmpl:(r,s,l,i)=>{let a,o,n,d=[],{list:f}=r;for(let r=0,l=f,c=l.length;r<c;r++){let f=l[r];n=[s(0,0,i(f.name))],o=[s("a",{href:i(f.link),title:i(f.link),class:"fep",target:"_blank",rel:"noopener noreferrer"},n)],n=[s(0,0,i(f.desc))],o.push(s("div",t,n)),a=[s("div",e,o)],d.push(...a)}return s(l,0,d)},init(){this.observeLocation("c")},render(){let{params:e}=r.Router.parse(),t=e.c;l[t]||(t=s[0].key),i.cursor="wait";let a=this.getMarker();r.use(`~fe/data/${t}`,e=>{a()&&(this.digest({list:e||[]}),i.cursor="default")})}});