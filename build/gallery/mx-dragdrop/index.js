/*!1.0.2 kooboy_li@163.com*/
let e=window.getComputedStyle,t=e=>{(e=window.getSelection)&&e().removeAllRanges()},o=e=>{e.preventDefault()},n=["mousemove","touchmove"],r=["mouseup","pointercancel","touchcancel"],d=["keydown","mousewheel","DOMMouseScroll","fullscreenchange"];export default{ctor(){let e=this;e.on("destroy",()=>{e.__()})},__(e){let t=this,_=t._a;if(_){let l;for(l of(delete t._a,n))document.removeEventListener(l,t._b);for(l of r)document.removeEventListener(l,t._c);for(l of d)document.removeEventListener(l,o);window.removeEventListener("blur",t._c);let i=_._d;_._e&&i(e)}},_g(e,_,l){let i=this;if(i.__(),e){t(),i._a={_d:l,_e:!!l};let e,m=!!_;for(e of(i._f=0,i._c=(e=>{i._f=1,i.__(e)}),i._b=(e=>{m&&_(e)}),n))document.addEventListener(e,i._b);for(e of r)document.addEventListener(e,i._c);for(e of d)document.addEventListener(e,o,{passive:!1});window.addEventListener("blur",i._c)}},_j(t,n){let r=null;if(document.elementFromPoint)for(!o._h&&e&&(o._h=!0,o._i=null!==document.elementFromPoint(-1,-1)),o._i&&(t+=window.pageXOffset,n+=window.pageYOffset),r=document.elementFromPoint(t,n);r&&3==r.nodeType;)r=r.parentNode;return r},_k:t};