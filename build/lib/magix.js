/*!1.0.2 kooboy_li@163.com*/
let e=0,t="",r=[],i=window,n=void 0,o=document,a=i.setTimeout,f=encodeURIComponent;function l(){}let s=JSON.stringify,h=o.body,d=i.performance,u=d.now.bind(d),c="prototype",p="params",b="path",m=Object[c].toString,g=e=>m.call(e).slice(8,-1),w=e=>"Object"==g(e),v=Array.isArray,y=t=>(t||"_")+e++,k=e=>o.getElementById(e),x=(e,t)=>e.innerHTML=t,V=y(),$={rootId:y(),defaultView:V,error(e){throw e}},j=e=>!e||"object"!=typeof e,I=(e,t,r)=>{if(e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:O,keys:E,hasOwnProperty:U}=Object,A=o.head,C=h.getAttribute,N=(e,t)=>C.call(e,t),T=(e,t,r)=>{t&&!T[e]&&(T[e]=1,r=o.createElement("style"),x(r,t),A.appendChild(r))},S=(e,t,i,n,o)=>{for(o of(v(e)||(e=[e]),v(t)||(t=t&&[t]||r),e))try{n=o&&o.apply(i,t)}catch(e){$.error(e)}return n},Z=(e,t)=>e&&U.call(e,t),_=(e,r)=>{let i,n;if(j(r))"\x1e"==(i=r+t)[0]&&(r=e[i]);else for(i in r)n=r[i],n=_(e,n),r[i]=n;return r},B=(e,t)=>t.a-e.a||t.b-e.b;function L(e,t,r,i){(i=this).a=[],i.b=t||5,i.c=i.b+(e||20),i.d=r}O(L[c],{get(t){let r=this.a["\x1e"+t];return r&&(r.a++,r.b=e++,r=r.c),r},set(t,r){let i=this,n=i.a,o="\x1e"+t,a=n[o],f=i.b;if(!a){if(n.length>=i.c)for(n.sort(B);f--;)(a=n.pop()).a>0&&i.del(a.o);a={d:t},n.push(a),n[o]=a}a.c=r,a.a=1,a.b=e++},del(e){e="\x1e"+e;let r=this.a,i=r[e],n=this.d;i&&(i.a=-1,i.c=t,delete r[e],n&&S(n,i.d))},has(e){return Z(this.a,"\x1e"+e)}});let q,H={bubbles:!0,cancelable:!0},M=[],P=(e,t,r,i,n,o)=>{let a={a:i,b:r,c:t,d:e,e(e){i?S(r,e,o):r(e)}};M.push(a),e.addEventListener(t,a.e,n)},R=(e,t,r,i,n)=>{for(let o,a=M.length;a--;)if((o=M[a]).c==t&&o.a==i&&o.d==e&&o.b===r){M.splice(a,1),e.removeEventListener(t,o.e,n);break}},W=new L,D=e=>{let r,i,n,o,a,f=W.get(e);if(!f){if(o={},-1==(a=e.indexOf("?")))r=e;else if(r=e.substring(0,a),e=e.substring(a+1))for(a of e.split("&"))[i,n]=a.split("="),o[i]=decodeURIComponent(n||t);W.set(e,f={a:r,b:o})}return{path:f.a,params:O({},f.b)}},F=(e,r,i)=>{let n,o,a,l=[];for(o in r)n=r[o]+t,(!i||n||Z(i,o))&&(n=f(n),l.push(a=o+"="+n));return a&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+l.join("&")),e},J=new L,Q=(e,t,r)=>(J.has(e)?r=J.get(e):(r=S(Function(`return ${e}`)),e.indexOf("\x1e")>-1?_(t,r):J.set(e,r)),r),z=0,G=[],K=()=>{let e,t=u();for(;;){if(!(e=G[z-1])){G.length=z=0;break}if(e.apply(G[z],G[z+1]),z+=3,u()-t>32&&G.length>z){a(K);break}}},X=(e,t,r)=>{G.push(e,r,t),z||(z=1,a(K))},Y=(e,t)=>{if(e)if(V==e)q||(q=mt.extend()),t(q);else{v(e)||(e=[e]);let r,i,n,o=[],a=[],f=$.paths;for(r of e)(i=r.indexOf("/"))>-1&&!r.startsWith(".")&&(n=r.slice(0,i),r=r.slice(i+1),r=f[n]+r),r.endsWith(".js")||(r+=".js"),o.push(import(r));Promise.all(o).then(e=>{for(r of e)a.push(r.default);X(t,a)})}else t()};function ee(){}let te=(e,t,r,i,n)=>(ee[c]=t[c],n=new ee,O(n,r),O(e,i),n.constructor=e,e[c]=n,e),re=e=>e;let ie,ne,oe,ae,fe,le,se={fire(e,r){let i,n,o=this,a=o["\x1e"+e],f=0;if(r||(r={}),r.type=e,a)for(i=a.length;f<i;f++)(n=a[f]).f?(n.x=1,S(n.f,r,o),n.x=t):n.x||(a.splice(f--,1),i--);return(a=o[`on${e}`])&&S(a,r,o),o},on(e,t){let r="\x1e"+e;return(this[r]||(this[r]=[])).push({f:t}),this},off(e,r){let i,n="\x1e"+e,o=this,a=o[n];if(r){if(a)for(i of a)if(i.f==r){i.f=t;break}}else delete o[n],delete o[`on${e}`];return o}},he=(e,t,r,i,n,o)=>{(e=F(e,t,o))!=r.srcHash&&(pe=n,((e,t)=>{e!=ce.hash&&(t?ce.replace("#"+e):ce.hash=e)})(e,i))},de=new L,ue=new L,ce=location,pe=0,be={query:{},[p]:{},href:t},me=/(?:^.*\/\/[^\/]+|#.*$)/gi,ge=/^[^#]*#?/;function we(e,r){return this[p][e]||r!==n&&r||t}let ve,ye=e=>{e=e||ce.href;let r,i,n,o,a,f=de.get(e);return f||(r=e.replace(me,t),i=e.replace(ge,t),f={get:we,href:e,srcQuery:r,srcHash:i,query:n=D(r),hash:o=D(i),params:a=O({},n[p],o[p])},gt&&(((e,t)=>{if(ne||(ne=$.routes||{},oe=$.unmatchView,ae=$.defaultView,fe=D($.defaultPath||"/"),le=$.rewrite),!e.view){let r=e.hash.path;r||(r=fe.path,O(e[p],fe[p])),le&&(r=le(r,e[p],ne)),t=ne[r]||oe||ae,e.path=r,e.view=t,w(t)&&O(e,t)}})(f),de.set(e,f))),f},ke=()=>{let e=ye(),t=((e,t)=>{let r=e.href,i=r+"\x1e"+t.href,n=ue.get(i);if(!n){let o,a;n={params:a={},force:!r};let f,l=e[p],s=t[p],h=E(l).concat(E(s)),d=e=>{let t=l[e],r=s[e];t!=r&&(a[e]={from:t,to:r},o=1)};for(f of h)d(f);l=e,s=t,a=n,d(b),d("view"),ue.set(i,n={a:o,b:n})}return n})(be,be=e);return!pe&&t.a&&((ie=t.b).path&&(e=e.title||$.title)&&(o.title=e),xe.fire("changed",ie)),pe=0,ie},xe=O({parse:ye,diff:ke,to(e,r,i,n){!r&&w(e)&&(r=e,e=t);let o=D(e),a=o[p],f=o.path,l=be.path,s=be[p],h=be.query[p];if(O(a,r),f)for(l in h)Z(a,l)||(a[l]=t);else s&&(f=l,a=O({},s,a));he(f,a,be,i,n,h)}},se),Ve=0,$e=(e,t,r,i)=>{if(e&&e.a!=Ve&&(t=e.b)&&t.b>1)for(i of((e=>{let t,r,i,n=e.a;if(n.a&&(n.b&&(t=ie.path),!t&&n.c))for(r of(i=ie[p],n.c))if(t=Z(i,r))break;return t})(t)&&t.c(),e.children()))X($e,[Ie[i]])},je=(t,r,i)=>{r=Ee(),(i=t.view)?r.mountView(i.to):(Ve=e++,$e(r))},Ie={},Oe=(e,t,r,i)=>{t.indexOf("\x1e")>0&&(i=Ie[e])&&_(i.b.d,r)},Ee=(e,t)=>(ve||(e=$.rootId,(t=k(e))||(t=h),ve=new Ne(t)),ve),Ue=(e,t)=>{Z(Ie,e)||(Ie[e]=t,Ne.fire("add",{vframe:t}))},Ae=(e,t,r)=>{for(t=e.d;t.length;)(r=t.shift()).r||X(e.invoke,[r.n,r.a],e),delete t[r.k]},Ce=e=>e.b||(e.b=y());function Ne(e,t){let r=this,i=Ce(e);r.id=i,r.root=e,r.e=1,r.c={},r.pId=t,r.d=[],Ue(i,r)}O(Ne,{all:()=>Ie,byId:e=>Ie[e],byNode:e=>Ie[e.b]},se),O(Ne[c],{mountView(e,t){let r,i,n,o,a,f=this,{id:l,root:s,pId:h}=f;!f.f&&s&&(f.f=1,f.g=s.innerHTML),f.unmountView(),s&&e&&(r=D(e),n=r.path,f.path=e,o=r[p],Oe(h,e,o),f.h=n,O(o,t),i=f.e,Y(n,e=>{if(i==f.e){if(!e)return $.error(Error(`${l} cannot load:${n}`));a=bt(e),n=new e(l,s,f,o,a),f.b=n,f.a=Ve,dt(n),S(n.init,o,n),X(()=>{n.c(),n.tmpl||(f.f=0,n.h||n.endUpdate())})}}))},unmountView(){let e=this,{b:t,root:r}=e;e.d=[],t&&(e.unmountZone(),e.b=0,t.b>0&&(t.b=0,t.fire("destroy"),dt(t,1),t.owner=t.root=null),t.b--,r&&e.f&&x(r,e.g)),e.e++},mountVframe(e,t,r){let i,n=this,o=n.id,a=n.c,f=Ce(e);return(i=Ie[f])||(Z(a,f)||(n.i=0),a[f]=f,i=new Ne(e,o)),i.mountView(t,r),i},mountZone(e){let t,r=this,i=(e=e||r.root).querySelectorAll("[mx-view]");for(t of i)t.a||(t.a=1,r.mountVframe(t,N(t,"mx-view")))},unmountVframe(e,t){let r,i;var n,o;e=e?this.c[t?e:e.b]:this.id,(r=Ie[e])&&(r.unmountView(),i=r.pId,(o=Ie[n=e])&&(delete Ie[n],o.root.a=0,Ne.fire("remove",{vframe:o}),o.id=o.root=o.pId=o.c=null),(r=Ie[i])&&Z(r.c,e)&&(delete r.c[e],r.i=0))},unmountZone(e){let t,r,i,n=this;for(t in n.c)(i=e?(r=Ie[t])&&I(r.root,e):1)&&n.unmountVframe(t,1)},children(e){return(e=this).i||(e.i=E(e.c))}});let Te=new L(30,10),Se=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Ze={},_e={},Be={};let Le=(e,t)=>{let i,n,o,a,f,l,s,d,u=[],c=e,p=N(e,`mx-${t}`),b=0;if(p&&((f=Te.get(p))||(f={v:(f=p.match(Se)||r)[1],n:f[2],i:f[3]},Te.set(p,f)),f=O({},f,{r:p})),f&&!f.v||_e[t]){if(!(d=c.c)){for(s=[c];c!=h&&(c=c.parentNode);){if(Ie[n=c.b]||(n=c.c)){d=n;break}s.push(c)}if(d)for(p of s)p.c=d}if(d){c=e.b,Ie[c]&&(b=d=c);do{if((i=Ie[d])&&(l=i.b)){if(a=(o=l.i)[t])for(c=a.length;c--;)o={r:n=a[c],v:d,n:n},n?!b&&e.matches(n)&&u.push(o):b&&u.unshift(o);if(l.tmpl&&!b)break;b=0}}while(i&&(d=i.pId))}}return f&&u.push(f),u},qe=e=>{let t,r,i,n,o,a,f,l,{target:s,type:d}=e,u=[];for(;s!=h&&!(e.cancelBubble||(r=s.d)&&r[d]);){if(u.push(s),(t=Le(s,d)).length){u=[];for(let{v:r,r:h,n:u,i:c}of t){if(f!=r){if(f&&e.cancelBubble)break;f=r}if(!(n=(i=Ie[r])&&i.b))break;n.h&&(a=n[o=u+"\x1e"+d])&&(e.eventTarget=s,l=c?Q(c,n.d):Be,e[p]=l,S(a,e,n))}}s=s.parentNode||h}for(f of u)(r=f.d||(f.d={}))[d]=1},He=(e,t,r)=>{let i=0|Ze[e],n=r?-1:1;i&&r!==i||(r?R:P)(h,e,qe),Ze[e]=i+n,t&&(_e[e]=(0|_e[e])+n)};let Me={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","`":"&#96;"},Pe=/[&<>"'\`]/g,Re=e=>null==e?t:t+e,We=e=>Me[e],De=e=>Re(e).replace(Pe,We),Fe={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},Je=e=>Fe[e],Qe=/[!')(*]/g,ze=e=>f(Re(e)).replace(Qe,Je),Ge=/[\\'"]/g,Ke=e=>Re(e).replace(Ge,"\\$&"),Xe=(e,t,r)=>(e[r]=t,r),Ye=(e,t)=>{if(e.b>0&&(t=e.tmpl)){let i,n=e.j,o=e.id,a=Ie[o],f={a:[]},l=e.f,s=e.d;for(i of(e.k=0,e.j={},e.fire("dompatch"),i=t(l,et,o,Re,ze,s,Xe,Ke,v),at(e.root,e.l,i,f,a,n),e.l=i,t=f.b||!e.h,f.a))X(i.c,r,i);t&&e.endUpdate(),e.fire("domready")}},et=(e,r,i,n)=>{let o;if(e){r=r||{};let a,f,l,s,h,d,u=t,c={},p="<"+e,b=t,m=[];if(i)for(s of i)l=s.a,s.b==it&&(l=l?De(l):" "),b+=l,d&&s.b==it&&d.b==it?d.a+=s.a:(s.d&&(c[s.d]=(c[s.d]||0)+1),s.e&&(a=1),d=s,m.push(s));for(f in r)!1!==(l=r[f])&&null!=l?(!0===l&&(r[f]=l=t),"id"==f?u=l:"mx-view"==f&&l&&!u?u=D(l).path:"_"!=f||u?"$"==f&&(a=1):u=l,"value"==f&&"textarea"==e?b=l:Z(rt,f)||(p+=` ${f}="${l&&De(l)}"`)):delete r[f];h=p,o={a:p+=n?"/>":`>${b}</${e}>`,c:b,d:u,b:e,e:a||Z(tt,e),f:h,g:r,h:m,i:c,j:n}}else o={b:r?"\x1e":it,a:i+t};return o},tt={input:{value:1,checked:1},textarea:{value:1},option:{selected:1}},rt={_:1,$:1};let it=e;let nt=(e,r,i,n)=>{let o,a,f=0,l=tt[r.b],s=i.g,h=r.g;if(n){if(r)for(o in h)Z(l,o)||Z(s,o)||(f=1,e.removeAttribute(o));for(o in s)Z(l,o)||Z(rt,o)||(a=s[o],r&&h[o]===a||(f=1,e.setAttribute(o,a)))}for(o in l)a=Z(s,o)?"value"!=o||s[o]:"value"==o&&t,e[o]!=a&&(f=1,e[o]=a);return f&&delete e.d,f},ot=(e,t)=>{let r,i=e.b;return i==it?r=o.createTextNode(e.a):(r=o.createElementNS(t.namespaceURI,i),nt(r,0,e,1),x(r,e.c)),r},at=(e,t,r,i,n,o)=>{if(t){if(t.e||t.c!=r.c){let a,f,l,s,h,d,u=t.h,c=r.h,p=u.length,b=c.length,m=r.i,g=e.childNodes,w={},v=0;for(a=p;a--;)(h=(l=u[a]).d)&&(h=w[h]||(w[h]=[])).push(g[a]);for(a=0;a<b;a++)if(s=c[a],l=u[v++],(h=w[s.d])&&(h=h.pop())){if(h!=g[a]){for(f=v,d=1;f<p;f++,d++)if((l=u[f])&&g[a+d]==h){u.splice(f,1),v--;break}e.insertBefore(h,g[a])}m[l.d]&&m[l.d]--,ft(h,e,l,s,i,n,o)}else l?w[l.d]&&m[l.d]?(p++,i.b=1,e.insertBefore(ot(s,e),g[a]),v--):ft(g[a],e,l,s,i,n,o):("\x1e"==s.b?x(e,s.a):e.appendChild(ot(s,e)),i.b=1);for(a=b;a<p;a++)1==(f=g[b]).nodeType&&n.unmountZone(f),e.removeChild(f)}}else i.b=1,x(e,r.c)},ft=(e,t,r,i,n,o,a)=>{let f=r.g,l=i.g,s=r.b;if(r.e||r.a!=i.a)if("\x1e"==s)n.b=1,x(t,i.a);else if(s==i.b){if(s==it)n.b=1,e.nodeValue=i.a;else if(!f._||f._!=l._){let t,h,d,u,c,b,m,g=l["mx-view"],w=i.c,v=r.f!=i.f,y=Z(tt,s)||v,k=Ie[e.b],x=g&&D(g);if(y&&(y=nt(e,r,i,v))&&(n.b=1),g&&k&&k.h==x.path&&(u=k.b)){if(b=w!=r.c,m=g!=k.path,d=f.$,!b&&!m&&d)for(d of c=d.split(","))if("#"==d||Z(a,d)){m=1;break}(m||b||y)&&((d=u.h&&u.m)?(c=x[p],Oe(k.pId,g,c),k.path=g,S(d,c,u)&&(u.n++,n.a.push(u)),t=!u.tmpl):(h=1,t=1))}else t=1,h=k;h&&(n.b=1,k.unmountVframe()),t&&!i.j&&at(e,r,i,n,o,a)}}else n.b=1,o.unmountZone(e),t.replaceChild(ot(i,t),e)},lt=/^(\$?)([^<]*)<([^>]+)>(?:&(.+))?$/,st=(e,t,r)=>(e.a?r=e:((r=function(e){S(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),ht=(e,t,r,i,n)=>{e[t]!=e[r]&&(i=e[t],e[t]=e[r]=function(...e){(n=this).n&&n.n--,n.b>0&&!n.n&&(n.b++,n.fire("rendercall"),S(i,e,n))})},dt=(e,t)=>{let r,{o:i,i:n,p:o,id:a}=e;for(r in i)He(r,n[r],t);for(r of(i=t?R:P,o))i(r.a,r.b,r.c,a,r.d,e)},ut={win:i,doc:o},ct=(e,t,r)=>{let i,n,o,a,f={};for(n of e)for(i in n)o=n[i],a=f[i],"ctor"!=i?(lt.test(i)&&(a?o=st(a,o):o.b=1),f[i]=o):r.push(o);for(i in f)Z(t,i)||(t[i]=f[i])};function pt(...e){let t=this.a||(this.a=[]);return ct(e,this[c],t),this}let bt=e=>{if(!e["\x1e"]){e["\x1e"]=[];let t,r,i,n,o,a,f,l,s,h,d,u=e[c],p={},b=[],m={};for(f in(r=u.mixins)&&ct(r,u,e["\x1e"]),u)if(t=u[f],r=f.match(lt)){if([,a,i,n,d]=r,h={},d)for(l of d=d.split(","))h[l]=!0;for(l of n=n.split(",")){if(o=ut[i],s=1,a){if(o){b.push({c:t,a:o,b:l,d:h});continue}s=2,(o=m[l])||(o=m[l]=[]),o[i]||(o[i]=1,o.push(i))}p[l]=p[l]|s,(o=u[l=i+"\x1e"+l])?o.b&&(t.b?u[l]=st(t,o):Z(u,f)&&(u[l]=t)):u[l]=t}}ht(u,"render","c"),u.o=p,u.p=b,u.i=m,u.m=u.assign}return e["\x1e"]};function mt(e,t,r,i,n){(n=this).root=t,n.owner=r,n.id=e,n.a={c:[]},n.b=1,n.k=1,n.f={id:e},n.d={},n.j={},n.n=0,(e=mt.a)&&S(e,i,n)}O(mt,{merge:pt,extend:function e(t,r){let i=this,n=(t=t||{}).ctor,o=[];function a(e,t,r,n,f,l,s,h){i.call(h=this,e,t,r,n,f),(l=a.a)&&S(l,n,h),(s=o.concat(f)).length&&S(s,n,h)}return n&&o.push(n),a.merge=pt,a.extend=e,te(a,i,t,r)}}),O(mt[c],se,{init:l,render:l,endUpdate(e,t,r,i){(t=this).b>0&&(i=t.h,t.h=1,(r=t.owner).mountZone(e),i||a(Ae,0,r))},getMarker(e){let t=this,r=e?++t.b:t.b;return()=>r>0&&r==t.b},observeLocation(e,r){let i;(i=this.a).a=1,w(e)&&(r=e.path,e=e[p]),i.b=r,e&&(i.c=(e+t).split(","))},get(e,t){return t=this.f,e&&(t=t[e]),t},set(e,t){let r,i,n,o=this,a=o.f,f=o.j,l=o.k;for(n in e)r=e[n],i=a[n],j(r)&&i===r||Z(t,n)||(f[n]=1,l=1),a[n]=r;return o.k=l,o},digest(e,t){let r=this.set(e,t);r.k&&Ye(r)},snapshot(){return this.r=s(this.f),this},altered(){let e=this;if(e.r)return e.r!=s(e.f)},parse(e){return Q(e,this.d)}});let gt=0;export default{config:(e,t)=>(t=$,e&&(t=w(e)?O(t,e):t[e]),t),boot(e){O($,e),xe.on("changed",je),gt=1,P(i,"hashchange",ke),ke()},toMap:(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},toTry:S,toUrl:F,parseUrl:D,guid:y,use:Y,dispatch:(e,t,r)=>{let i=new Event(t,H);O(i,r),e.dispatchEvent(i)},guard:re,type:g,has:Z,inside:I,applyStyle:T,Cache:L,View:mt,Vframe:Ne,Event:se,Router:xe,node:k,task:X};