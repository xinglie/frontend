/*!1.0.2 kooboy_li@163.com*/
import e from"../../lib/magix.js";import t from"../mx-dragdrop/index.js";e.applyStyle("fea",'[mx-view*="/mx-slider/index"]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fef{height:4px;border-radius:2px}.feg,.fef{background:#fff;cursor:pointer}.feg{width:8px;height:8px;border-radius:50%;position:absolute;top:-2px;margin-left:-4px;box-shadow:0 0 0 2px hsla(0,0%,100%,.4)}.feh{background:#88cbfb;position:absolute;top:0}.fei,.feh{height:4px;border-radius:2px}.fei{background:#999}');export default e.View.extend({tmpl:(e,t,i,s)=>{let o,r,d=[],{id:n,buffer:l,bufferValue:a,value:h}=e;return o=[],l&&(r=[t("div",{class:"fei",style:"width:"+s(100*a)+"%"})],o.push(...r)),o.push(t("div",{class:"feh",style:"width:"+s(100*h)+"%"})),d.push(t("div",{class:"fef",id:"t_"+s(n),"mx-click":i+"\x1e_l()"},o),t("div",{class:"feg",style:"left:"+s(100*h)+"%","mx-mousedown":i+"\x1e_m()"})),t(i,0,d)},mixins:[t],init(e){this.assign(e)},assign(e){return this.set(e),!0},render(){this.digest()},"_l<click>"(t){let i=t.eventTarget.getBoundingClientRect(),s=(t.pageX-i.left)/i.width;this.digest({value:s}),e.dispatch(this.root,"change",{percent:s})},"_m<mousedown>"(t){let i=e.node("t_"+this.id).getBoundingClientRect(),s=this.get("value")||0;this._g(t,o=>{let r=(o.pageX-t.pageX)/i.width+s;r>1?r=1:r<0&&(r=0),this.digest({value:r}),e.dispatch(this.root,"update",{percent:r})},()=>{e.dispatch(this.root,"change",{percent:this.get("value")})})}});