/*!1.0.2 kooboy_li@163.com*/
import"./channels.js";import"../../gallery/mx-slider/index.js";import"./time.js";import"./lyric.js";let e,t,i={class:"feD fed"},s={class:"feB"},l={class:"feF",scrollamount:"2"},o={class:"feG"},f={class:"fed feI"},r={class:"feJ"},a={class:"fed feO"};import p from"../../lib/magix.js";import n from"./player.js";p.applyStyle("fec",".few{position:relative;color:#fff;height:60px;top:60px;transition:top .3s}.fex{position:absolute;top:-240px;background:rgba(60,64,73,.8);height:240px;width:100%;transition:all .3s;overflow:auto}.fey{top:0}.fez{width:120px;float:left;height:120px;text-align:center;padding-top:14px;cursor:pointer}.fez:hover{opacity:.6}.feA{width:70px;height:70px}.feB{float:left;width:220px}.feC{width:56px;height:56px;border:1px solid #777;margin:2px;float:left}.feD{height:100%;background:#333;position:relative;z-index:2;overflow:hidden}.feE,.feF{margin:5px 10px 0;float:left;width:140px}.feE{cursor:pointer}.feE:hover{opacity:.6}.feG{float:left;padding:4px;width:480px}.feH{float:right;width:300px;text-align:center}.feI{height:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.feJ{font-size:12px;display:inline-block;margin:5px 5px 0}.feK{font-size:22px;float:left;padding:2px;border:1px solid transparent}.feK:hover{opacity:.6;border-color:#fff;cursor:pointer;border-radius:4px}.feL{cursor:not-allowed;color:#8a8a8a}.feL:hover{border-color:transparent}.feM{width:390px;float:left;margin-top:10px}.feN{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.feO{float:right;margin-right:90px}.feP{width:100px;margin:13px 0 0 5px;float:left}.feQ{font-size:12px;margin-left:10px}.feR{font-size:12px;opacity:.6;line-height:20px;color:#afafaf;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:20px;overflow:hidden}.feS{font-weight:700;font-size:14px;opacity:1;color:#fff}.feT{margin-left:15px}");export default p.View.extend({tmpl:(p,n,c,h,d,x,m)=>{let g,_,u,v,w,y,k,b,z,K,C=[],{active:q,cshow:E,song:j,undo:H,ptip:I,play:D,ntip:F,mode:G,error:J,volume:B}=p;return g="fex",q&&!E&&(g+=" fey"),_=[n("div",{"mx-view":"~fe/view/mp/channels","mx-change":c+"\x1e_p()",class:g})],u=[],q&&(w=[n("img",{class:"feC",src:h(j.picture)},0,1)],y=[n(0,0,"\u5206\u7c7b\uff1a"+h(q.name))],w.push(n("div",{class:"feE","mx-click":c+"\x1e_G()"},y)),y=[n(0,0,h(j.title)+"-"+h(j.artist))],w.push(n("marquee",l,y)),v=[n("div",s,w)],b=[n(0,0,"\ue600")],g="fee feK feN",H||(g+=" feL"),y=[n("i",{"mx-click":H&&c+"\x1e_H()",title:h(I),class:g},b)],k="",b=[n(0,0,k+=D?" \ue62d ":" \ue6aa ")],z="\u70b9\u51fb",z+=D?"\u6682\u505c":"\u64ad\u653e",y.push(n("i",{class:"fee feK","mx-click":c+"\x1e_F()",title:z},b)),b=[n(0,0,"\ue600")],y.push(n("i",{class:"fee feK","mx-click":c+"\x1e_q()",title:h(F)},b)),k="",b=[n(0,0,k+="rdm"==G?" \ue6cd ":" \ue61e ")],z="\u6b63\u5728",z+="rdm"==G?"\u968f\u673a\u64ad\u653e":"\u5355\u66f2\u5faa\u73af",y.push(n("i",{class:"fee feK feT","mx-click":c+"\x1e_K()",title:z},b)),k="",J?k+=" "+h(J)+" ":D||(k+=" \u70b9\u51fb\u64ad\u653e\u6309\u94ae\u7ee7\u7eed "),b=[n(0,0,k)],y.push(n("span",r,b)),K=[n(0,0,"\ue829")],b=[n("i",{_:"_",class:"fee feK fe_","mx-click":c+"\x1e_J()"},K),n("div",{$:"volume",class:"feP","mx-update":c+"\x1e_E()","mx-change":c+"\x1e_E()","mx-view":"~fe/gallery/mx-slider/index?value="+m(x,B,"\x1eb")})],y.push(n("div",a,b)),w=[n("div",f,y)],e?w.push(e):w.push(e=n("div",{_:"a","mx-view":"~fe/view/mp/time",class:"fed"})),v.push(n("div",o,w)),t?v.push(t):v.push(t=n("div",{_:"b","mx-view":"~fe/view/mp/lyric",class:"feH"})),u.push(...v)),_.push(n("div",i,u)),g="few",q&&(g+=" fey"),C.push(n("div",{class:g},_)),n(c,0,C)},init(){let e=()=>{if("rdm"==this.get("mode")){let e=this.get("active");n._q(e.channel_id)}else n._r()};n.on("_s",e),n.on("_t",e),n.on("_u",e=>{this.digest({play:e.play})}),n.on("_v",this.render.bind(this)),n.on("_w",e=>{this.digest({song:e.song})}),this.set({cshow:!1,volume:1,mode:"rdm"})},render(){this.digest({ptip:n._x(),ntip:n._y(),undo:n._z()})},_C(){this.get("play")?n._A():n._B()},"_p<change>"(e){this.set({active:e.channel}),n._q(e.channel.channel_id,!0)},"_E<update,change>"(e){n._D(e.percent)},"_F<click>"(){this._C()},"_G<click>"(){this.digest({cshow:!this.get("cshow")})},"_q<click>"(){let e=this.get("active");n._q(e.channel_id)},"_H<click>"(){n._H()},"_J<click>"(){if(p.has(this,"_I")){let e=this._I;delete this._I,this.digest({volume:e}),n._D(e)}else{this._I=this.get("volume");let e=0;this.digest({volume:e}),n._D(e)}},"_K<click>"(){"rdm"==this.get("mode")?this.digest({mode:"circle"}):this.digest({mode:"rdm"})},"$doc<keyup>"(e){let t=this.get("active");t&&(13==e.keyCode?this._C():80==e.keyCode?n._H():78==e.keyCode&&n._q(t.channel_id))}});