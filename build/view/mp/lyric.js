/*!1.0.2 kooboy_li@163.com*/
import t from"../../lib/magix.js";import e from"./player.js";let i=/(\[[0-9:\.]+\][\r\n]*)+([^\r\n]*)/g,s=/\[offset\s*:\s*(\d+)\]/,l=/\[([0-9\.:]+)\]/g,r=(t,e)=>t.time-e.time,h=[{text:"\u52a0\u8f7d\u4e2d..."}],a=[{time:0,text:"\u83b7\u53d6\u6b4c\u8bcd\u5931\u8d25"}];export default t.View.extend({tmpl:(t,e,i,s)=>{let l,r,h,a=[],{lyrics:_}=t;for(let t=0,i=_,n=i.length;t<n;t++){let _=i[t];h=[e(0,0,s(_.text))],r="feR",_.active&&(r+=" feS"),l=[e("div",{title:s(_.text),class:r},h)],a.push(...l)}return e(i,0,a)},init(){e.on("_v",t=>{this._L(t.song.sid)}),e.on("_M",t=>{this._N(t.current)})},async _L(t){delete this._O,delete this._P,delete this._Q,delete this._R,this._N(0);let h=this.getMarker(!0);try{let{lyric:_}=await e._S(t);h()&&(this._O=(t=>{let e=0,h=[];return t.replace(s,(t,i)=>{e=parseFloat(i)/1e3}).replace(i,(t,i,s)=>{i.replace(l,(t,i)=>{let l=0,r=(i=i.split(":")).length;for(let t,e=0;e<r;e++)(t=r-e-1)>0?t*=60:t=1,l+=i[e]*t;l+=e,isNaN(l)||h.push({time:l,text:s})})}),h=h.sort(r)})(_))}catch(t){this._O=a}},_N(t){let e=this._O;if(e){let i=0,s=[];for(;i<e.length;i++){if(e[i].time>t)break}let l=Math.max(i-2,0),r=Math.min(e.length,i+1);if(0==l&&e.length>2&&r-l<3&&r++,r==e.length&&e.length>2&&r-l<3&&l--,(i-=1)<0&&(i=0),this._Q!=r||this._P!=l||this._R!=i){this._Q=r,this._P=l,this._R=i;for(let t=l;t<r;t++)s.push({text:e[t].text,active:t==i});this.digest({lyrics:s})}}else this.digest({lyrics:h})},render(){this.digest({lyrics:h})}});