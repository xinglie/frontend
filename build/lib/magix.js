/*!1.0.2 kooboy_li@163.com*/
let e=0,t="",r=[],i=window,n=void 0,o=document,a=i.setTimeout,f=encodeURIComponent;function l(){}let s=JSON.stringify,h=o.body,u=i.performance,d=u.now.bind(u),c="\x1e",p="prototype",b="params",m="path",g=Object[p].toString,w=e=>g.call(e).slice(8,-1),v=e=>"Object"==w(e),y=Array.isArray,x=t=>(t||"_")+e++,j=e=>o.getElementById(e),k=(e,t)=>e.innerHTML=t,V=x(),$={rootId:x(),defaultView:V,error(e){throw e}},I=e=>!e||"object"!=typeof e,O=(e,t,r)=>{if(e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},E=e=>{e[c+"b"]=0,e[c+"a"]=1},{assign:T,keys:U,hasOwnProperty:q}=Object,A=o.head,C=h.getAttribute,N=(e,t)=>C.call(e,t),S=(e,t,r)=>{t&&!S[e]&&(S[e]=1,r=o.createElement("style"),k(r,t),A.appendChild(r))},Z=(e,t,i,n,o)=>{for(o of(y(e)||(e=[e]),y(t)||(t=t&&[t]||r),e))try{n=o&&o.apply(i,t)}catch(e){$.error(e)}return n},_=(e,t)=>e&&q.call(e,t),B=(e,r)=>{let i,n;if(I(r))(i=r+t)[0]==c&&(r=e[i]);else for(i in r)n=r[i],n=B(e,n),r[i]=n;return r},L=(e,t)=>t.a-e.a;function H(e,t,r){(r=this).a=[],r.b=t||5,r.c=r.b+(e||20)}T(H[p],{get(e){let t=this.a[c+e];return t&&(t.a++,t=t.c),t},set(e,t){let r=this,i=r.a,n=c+e,o=i[n],a=r.b;if(!o){if(i.length>=r.c)for(i.sort(L);a--;)(o=i.pop()).a>0&&r.del(o.o);o={d:e},i.push(o),i[n]=o}o.c=t,o.a=1},del(e){e=c+e;let r=this.a,i=r[e];i&&(i.a=-1,i.c=t,delete r[e])},has(e){return _(this.a,c+e)}});let P,R={bubbles:!0,cancelable:!0},M=[],W=(e,t,r,i,n,o)=>{let a={a:i,b:r,c:t,d:e,e(e){i?Z(r,e,o):r(e)}};M.push(a),e.addEventListener(t,a.e,n)},D=(e,t,r,i,n)=>{for(let o,a=M.length;a--;)if((o=M[a]).c==t&&o.a==i&&o.d==e&&o.b===r){M.splice(a,1),e.removeEventListener(t,o.e,n);break}},F=new H,J=e=>{let r,i,n,o,a,f=F.get(e);if(!f){if(o={},-1==(a=e.indexOf("?")))r=e;else if(r=e.substring(0,a),e=e.substring(a+1))for(a of e.split("&"))[i,n]=a.split("="),o[i]=decodeURIComponent(n||t);F.set(e,f={a:r,b:o})}return{path:f.a,params:T({},f.b)}},Q=(e,r,i)=>{let n,o,a,l=[];for(o in r)n=r[o]+t,(!i||n||_(i,o))&&(n=f(n),l.push(a=o+"="+n));return a&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+l.join("&")),e},z=new H,G=(e,t,r)=>(z.has(e)?r=z.get(e):(r=Z(Function(`return ${e}`)),e.indexOf(c)>-1?B(t,r):z.set(e,r)),r),K=0,X=[],Y=()=>{let e,t=d();for(;;){if(!(e=X[K-1])){X.length=K=0;break}if(e.apply(X[K],X[K+1]),K+=3,d()-t>32&&X.length>K){a(Y);break}}},ee=(e,t,r)=>{X.push(e,r,t),K||(K=1,a(Y))},te={},re=(e,t)=>{if(e)if(V==e)P||(P=vt.extend()),t(P);else{y(e)||(e=[e]);let r,i,n,o=[],a=[],f=$.paths;for(r of e)(i=r.indexOf("/"))>-1&&!r.startsWith(".")&&(n=r.slice(0,i),r=r.slice(i+1),r=f[n]+r),r.endsWith(".js")||(r+=".js"),te[r]||(te[r]=import(r)),o.push(te[r]);Promise.all(o).then(e=>{for(r of e)a.push(r.default);ee(t,a)})}else t()};function ie(){}let ne=(e,t,r,i,n)=>(ie[p]=t[p],n=new ie,T(n,r),T(e,i),n.constructor=e,e[p]=n,e),oe=e=>e;let ae,fe,le,se,he,ue,de={fire(e,r){let i,n,o=this,a=o[c+e],f=0;if(r||(r={}),r.type=e,a)for(i=a.length;f<i;f++)(n=a[f]).f?(n.x=1,Z(n.f,r,o),n.x=t):n.x||(a.splice(f--,1),i--);return(a=o[`on${e}`])&&Z(a,r,o),o},on(e,t){let r=c+e;return(this[r]||(this[r]=[])).push({f:t}),this},off(e,r){let i,n=c+e,o=this,a=o[n];if(r){if(a)for(i of a)if(i.f==r){i.f=t;break}}else delete o[n],delete o[`on${e}`];return o}},ce=(e,t,r,i,n,o)=>{(e=Q(e,t,o))!=r.srcHash&&(ge=n,((e,t)=>{me[t?"replace":"assign"]("#"+e)})(e,i))},pe=new H,be=new H,me=location,ge=0,we={query:{},[b]:{},href:t},ve=we,ye=/(?:^.*\/\/[^\/]+|#.*$)/gi,xe=/^[^#]*#?/;function je(e,r){return this[b][e]||r!==n&&r||t}let ke,Ve=e=>{e=e||me.href;let r,i,n,o,a,f=pe.get(e);return f||(r=e.replace(ye,t),i=e.replace(xe,t),f={get:je,href:e,srcQuery:r,srcHash:i,query:n=J(r),hash:o=J(i),params:a=T({},n[b],o[b])},yt&&(((e,t)=>{if(fe||(fe=$.routes||{},le=$.unmatchView,se=$.defaultView,he=J($.defaultPath||"/"),ue=$.rewrite),!e.view){let r=e.hash.path;r||(r=he.path,T(e[b],he[b])),ue&&(r=ue(r,e[b],fe)),t=fe[r]||le||se,e.path=r,e.view=t,v(t)&&T(e,t)}})(f),pe.set(e,f))),f},$e=()=>{let e=Ve(),t=((e,t)=>{let r=e.href,i=t.href,n=r+c+i,o=be.get(n);if(!o){let i,a;o={params:a={},force:!r};let f,l=e[b],s=t[b],h=U(l).concat(U(s)),u=e=>{let t=l[e],r=s[e];t!=r&&(a[e]={from:t,to:r},i=1)};for(f of h)u(f);l=e,s=t,a=o,u(m),u("view"),be.set(n,o={a:i,b:o})}return o})(ve,ve=e);return!ge&&t.a&&((ae=t.b).path&&(e=e.title||$.title)&&(o.title=e),Ie.fire("changed",ae)),ge=0,ae},Ie=T({parse:Ve,diff:$e,to(e,r,i,n){!r&&v(e)&&(r=e,e=t);let o=J(e),a=o[b],f=o.path,l=ve.path,s=ve[b],h=ve.query[b];if(T(a,r),f)for(l in h)_(a,l)||(a[l]=t);else s&&(f=l,a=T({},s,a));ce(f,a,ve,i,n,h)}},de),Oe=0,Ee=(e,t,r,i)=>{if(e&&e.a!=Oe&&(t=e.b)&&t.b)for(i of((e=>{let t,r,i,n=e.a;if(n.a&&(n.b&&(t=ae.path),!t&&n.c))for(r of(i=ae[b],n.c))if(t=_(i,r))break;return t})(t)&&t.c(),e.children()))ee(Ee,[Ue[i]])},Te=(t,r,i)=>{r=Ae(),(i=t.view)?r.mountView(i.to):(Oe=e++,Ee(r))},Ue={},qe=(e,t,r,i)=>{t.indexOf(c)>0&&(i=Ue[e])&&B(i.c,r)},Ae=(e,t)=>(ke||(e=$.rootId,(t=j(e))||(t=h),ke=new Se(t)),ke),Ce=(e,t)=>{_(Ue,e)||(Ue[e]=t,Se.fire("add",{vframe:t}))},Ne=e=>e.b||(e.b=x());function Se(e,t){let r=this,i=Ne(e);r.id=i,r.root=e,r.e=1,r.d={},r.pId=t,r.c={},Ce(i,r)}T(Se,{root:()=>ke,all:()=>Ue,byId:e=>Ue[e],byNode:e=>Ue[e.b]},de),T(Se[p],{mountView(e,t){let r,i,n,o,a,f=this,{id:l,root:s,pId:h}=f;!f.f&&s&&(f.f=1,f.g=s.innerHTML),f.unmountView(),s&&e&&(r=J(e),n=r.path,f.path=e,o=r[b],qe(h,e,o),f.h=n,T(o,t),i=f.e,re(n,e=>{if(i==f.e){if(!e)return $.error(Error(`${l} cannot load:${n}`));a=wt(e),n=new e(l,s,f,o,a),f.b=n,f.a=Oe,pt(n),Z(n.init,o,n),ee(()=>{n.c(),n.tmpl||(f.f=0,n.g||n.endUpdate())})}}))},unmountView(){let e=this,{b:t,root:r}=e;e.i=[],t&&(e.unmountZone(),e.b=0,t.b&&(E(t),t.b=0,t.fire("destroy"),pt(t,1),t.owner=t.root=null),r&&e.f&&k(r,e.g)),e.e++},mountVframe(e,t,r){let i,n=this,o=n.id,a=n.d,f=Ne(e);return(i=Ue[f])||(_(a,f)||(n.j=0),a[f]=f,i=new Se(e,o)),i.mountView(t,r),i},mountZone(e){let t,r=this,i=(e=e||r.root).querySelectorAll("[mx-view]");for(t of i)t.a||(t.a=1,r.mountVframe(t,N(t,"mx-view")))},unmountVframe(e,t){let r,i;var n,o;e=e?this.d[t?e:e.b]:this.id,(r=Ue[e])&&(r.unmountView(),i=r.pId,(o=Ue[n=e])&&(delete Ue[n],o.root.a=0,Se.fire("remove",{vframe:o}),o.id=o.root=o.pId=o.d=null),(r=Ue[i])&&_(r.d,e)&&(delete r.d[e],r.j=0))},unmountZone(e){let t,r,i,n=this;for(t in n.d)(i=e?(r=Ue[t])&&O(r.root,e):1)&&n.unmountVframe(t,1)},children(e){return(e=this).j||(e.j=U(e.d))}});let Ze=new H(30,10),_e=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Be={},Le={},He={};let Pe=(e,t)=>{let i,n,o,a,f,l,s,u,d=[],c=e,p=N(e,`mx-${t}`),b=0;if(p&&((f=Ze.get(p))||(f={v:(f=p.match(_e)||r)[1],n:f[2],i:f[3]},Ze.set(p,f)),f=T({},f,{r:p})),f&&!f.v||Le[t]){if(!(u=c.c)){for(s=[c];c!=h&&(c=c.parentNode);){if(Ue[n=c.b]||(n=c.c)){u=n;break}s.push(c)}if(u)for(p of s)p.c=u}if(u){c=e.b,Ue[c]&&(b=u=c);do{if((i=Ue[u])&&(l=i.b)){if(a=(o=l.h)[t])for(c=a.length;c--;)o={r:n=a[c],v:u,n:n},n?!b&&e.matches(n)&&d.push(o):b&&d.unshift(o);if(l.tmpl&&!b)break;b=0}}while(i&&(u=i.pId))}}return f&&d.push(f),d},Re=e=>{let t,r,i,n,o,a,f,l,{target:s,type:h}=e,u=[];for(;s&&1==s.nodeType&&!(e.cancelBubble||(r=s.d)&&r[h]);){if(u.push(s),(t=Pe(s,h)).length){u=[];for(let{v:r,r:u,n:d,i:p}of t){if(f!=r){if(f&&e.cancelBubble)break;f=r}if(!(n=(i=Ue[r])&&i.b))break;n.g&&(a=n[o=d+c+h])&&(e.eventTarget=s,l=p?G(p,i.c):He,e[b]=l,Z(a,e,n))}}s=s.parentNode}for(f of u)(r=f.d||(f.d={}))[h]=1},Me=(e,t,r)=>{let i=0|Be[e],n=r?-1:1;i&&r!==i||(r?D:W)(h,e,Re),Be[e]=i+n,t&&(Le[e]=(0|Le[e])+n)};let We={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","`":"&#96;"},De=/[&<>"'\`]/g,Fe=e=>null==e?t:t+e,Je=e=>We[e],Qe=e=>Fe(e).replace(De,Je),ze={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},Ge=e=>ze[e],Ke=/[!')(*]/g,Xe=e=>f(Fe(e)).replace(Ke,Ge),Ye=/[\\'"]/g,et=e=>Fe(e).replace(Ye,"\\$&"),tt=(e,t,r)=>(e[r]=t,r),rt=(e,t)=>{if(e.b&&(t=e.tmpl)){let r,i=e.i,n=e.id,o=Ue[n],a={a:[]},f=e.e,l=o.c;for(r of(e.j=0,e.i={},e.fire("dompatch"),r=t(f,it,n,Fe,Xe,l,tt,et,y),st(e.root,e.k,r,a,o,i),e.k=r,t=a.b||!e.g,a.a))ee(ct,[r]);t&&e.endUpdate(),e.fire("domready")}},it=(e,r,i,n)=>{let o;if(e){r=r||{};let a,f,l,s,h,u,d=t,c={},p="<"+e,b=t,m=[];if(i)for(s of i)l=s.a,s.b==at&&(l=l?Qe(l):" "),b+=l,u&&s.b==at&&u.b==at?u.a+=s.a:(s.d&&(c[s.d]=(c[s.d]||0)+1),s.e&&(a=1),u=s,m.push(s));for(f in r)!1!==(l=r[f])&&null!=l?(!0===l&&(r[f]=l=t),"id"==f?d=l:"mx-view"==f&&l&&!d?d=J(l).path:"_"!=f||d?"$"==f&&(a=1):d=l,"value"==f&&"textarea"==e?b=l:_(ot,f)||(p+=` ${f}="${l&&Qe(l)}"`)):delete r[f];h=p,o={a:p+=n?"/>":`>${b}</${e}>`,c:b,d:d,b:e,e:a||_(nt,e),f:h,g:r,h:m,i:c,j:n}}else o={b:r?c:at,a:i+t};return o},nt={input:{value:1,checked:1},textarea:{value:1},option:{selected:1}},ot={_:1,$:1};let at=e;let ft=(e,r,i,n)=>{let o,a,f=0,l=nt[r.b],s=i.g,h=r.g;if(n){if(r)for(o in h)_(l,o)||_(s,o)||(f=1,e.removeAttribute(o));for(o in s)_(l,o)||_(ot,o)||(a=s[o],r&&h[o]===a||(f=1,e.setAttribute(o,a)))}for(o in l)a=_(s,o)?"value"!=o||s[o]:"value"==o&&t,e[o]!=a&&(f=1,e[o]=a);return f&&delete e.d,f},lt=(e,t)=>{let r,i=e.b;return i==at?r=o.createTextNode(e.a):(r=o.createElementNS(t.namespaceURI,i),ft(r,0,e,1),k(r,e.c)),r},st=(e,t,r,i,n,o)=>{if(t){if(t.e||t.c!=r.c){let a,f,l,s,h,u,d=t.h,p=r.h,b=d.length,m=p.length,g=r.i,w=e.childNodes,v={},y=0;for(a=b;a--;)(h=(l=d[a]).d)&&(h=v[h]||(v[h]=[])).push(w[a]);for(a=0;a<m;a++)if(s=p[a],l=d[y++],(h=v[s.d])&&(h=h.pop())){if(h!=w[a]){for(f=y,u=1;f<b;f++,u++)if((l=d[f])&&w[a+u]==h){d.splice(f,1),y--;break}e.insertBefore(h,w[a])}g[l.d]&&g[l.d]--,ht(h,e,l,s,i,n,o)}else l?v[l.d]&&g[l.d]?(b++,i.b=1,e.insertBefore(lt(s,e),w[a]),y--):ht(w[a],e,l,s,i,n,o):(s.b==c?k(e,s.a):e.appendChild(lt(s,e)),i.b=1);for(a=m;a<b;a++)1==(f=w[m]).nodeType&&n.unmountZone(f),e.removeChild(f)}}else i.b=1,k(e,r.c)},ht=(e,t,r,i,n,o,a)=>{let f=r.g,l=i.g,s=r.b;if(r.e||r.a!=i.a)if(s==c)n.b=1,k(t,i.a);else if(s==i.b){if(s==at)n.b=1,e.nodeValue=i.a;else if(!f._||f._!=l._){let t,h,u,d,c,p,m,g=l["mx-view"],w=i.c,v=r.f!=i.f,y=_(nt,s)||v,x=Ue[e.b],j=g&&J(g);if(y&&(y=ft(e,r,i,v))&&(n.b=1),g&&x&&x.h==j.path&&(d=x.b)){if(p=w!=r.c,m=g!=x.path,u=f.$,!p&&!m&&u)for(u of c=u.split(","))if("#"==u||_(a,u)){m=1;break}(m||p)&&((u=d.g&&d.l)?(c=j[b],qe(x.pId,g,c),x.path=g,Z(u,c,d)&&(d.m++,n.a.push(d)),t=!d.tmpl):(h=1,t=1))}else t=1,h=x;h&&(n.b=1,x.unmountVframe()),t&&!i.j&&st(e,r,i,n,o,a)}}else n.b=1,o.unmountZone(e),t.replaceChild(lt(i,t),e)},ut=/^(\$?)([^<]*)<([^>]+)>(?:&(.+))?$/,dt=(e,t,r)=>(e.a?r=e:((r=function(e){Z(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),ct=e=>{e.m&&e.m--,e.b&&!e.m&&Z(e.c,r,e)},pt=(e,t)=>{let r,{n:i,h:n,o:o,id:a}=e;for(r in i)Me(r,n[r],t);for(r of(i=t?D:W,o))i(r.a,r.b,r.c,a,r.d,e)},bt={win:i,doc:o},mt=(e,t,r)=>{let i,n,o,a,f={};for(n of e)for(i in n)o=n[i],a=f[i],"ctor"!=i?(ut.test(i)&&(a?o=dt(a,o):o.b=1),f[i]=o):r.push(o);for(i in f)_(t,i)||(t[i]=f[i])};function gt(...e){let t=this.a||(this.a=[]);return mt(e,this[p],t),this}let wt=e=>{if(!e[c]){e[c]=[];let t,r,i,n,o,a,f,l,s,h,u,d=e[p],b={},m=[],g={};for(f in(r=d.mixins)&&mt(r,d,e[c]),d)if(t=d[f],r=f.match(ut)){if([,a,i,n,u]=r,h={},u)for(l of u=u.split(","))h[l]=!0;for(l of n=n.split(",")){if(o=bt[i],s=1,a){if(o){m.push({c:t,a:o,b:l,d:h});continue}s=2,(o=g[l])||(o=g[l]=[]),o[i]||(o[i]=1,o.push(i))}b[l]=b[l]|s,(o=d[l=i+c+l])?o.b&&(t.b?d[l]=dt(t,o):_(d,f)&&(d[l]=t)):d[l]=t}}d.c=d.render,d.n=b,d.o=m,d.h=g,d.l=d.assign}return e[c]};function vt(e,t,r,i,n){(n=this).root=t,n.owner=r,n.id=e,n[c]=e,n.a={c:[]},n.b=1,n.j=1,n.e={id:e},n.i={},n.m=0,(e=vt.a)&&Z(e,i,n)}T(vt,{merge:gt,extend:function e(t,r){let i=this,n=(t=t||{}).ctor,o=[];function a(e,t,r,n,f,l,s,h){i.call(h=this,e,t,r,n,f),(l=a.a)&&Z(l,n,h),(s=o.concat(f)).length&&Z(s,n,h)}return n&&o.push(n),a.merge=gt,a.extend=e,ne(a,i,t,r)}}),T(vt[p],de,{init:l,render:l,endUpdate(e,t){(t=this).b&&(t.g=1,t.owner.mountZone(e))},observeLocation(e,r){let i;(i=this.a).a=1,v(e)&&(r=e.path,e=e[b]),i.b=r,e&&(i.c=(e+t).split(","))},get(e,t){return t=this.e,e&&(t=t[e]),t},set(e,t){let r,i,n,o=this,a=o.e,f=o.i,l=o.j;for(n in e)r=e[n],i=a[n],I(r)&&i==r||_(t,n)||(f[n]=1,l=1),a[n]=r;return o.j=l,o},digest(e,t){let r=this.set(e,t);r.j&&rt(r)},snapshot(){return this.q=s(this.e),this},altered(){let e=this;if(e.q)return e.q!=s(e.e)},parse(e){return G(e,this.owner.c)}});let yt=0;export default{config:(e,t)=>(t=$,e&&(t=v(e)?T(t,e):t[e]),t),boot(e){T($,e),Ie.on("changed",Te),yt=1,W(i,"hashchange",$e),$e()},unboot(){yt=0,Ie.off("changed",Te),D(i,"hashchange",$e),ve=we,ke&&(ke.unmountVframe(),ke=null)},toMap:(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},toTry:Z,toUrl:Q,parseUrl:J,guid:x,use:re,dispatch:(e,t,r)=>{let i=new Event(t,R);T(i,r),e.dispatchEvent(i)},guard:oe,type:w,has:_,inside:O,applyStyle:S,Cache:H,View:vt,Vframe:Se,Event:de,Router:Ie,mark:(e,t,r,i,n)=>(e[n=c+"a"]||(r=e[n=c+"b"]||(e[n]={}),_(r,t)||(r[t]=0),i=++r[t]),r=>(r=e[n],r&&i===r[t])),unmark:E,node:j,task:ee};