/*!1.0.2 kooboy_li@163.com*/
import t from"./lib/magix.js";import e from"./i18n/index.js";t.applyStyle("fe_",'body,ul{margin:0;padding:0}ul{list-style-type:none;list-style-image:none}a{background-color:transparent}a:active,a:hover{outline-width:0}a:focus{outline:1px dotted}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;font-size:62.5%}body{font-size:14px;line-height:1.5;font-family:helvetica neue,arial,hiragino sans gb,stheiti,wenquanyi micro hei,sans-serif}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}a:focus{outline:none;resize:none}a{color:#45b6f7;text-decoration:none}a:focus,a:hover{color:#42a5df}a:active,a:focus,a:hover,a:visited{outline:0;text-decoration:none}::-ms-clear{display:none}.fe_{margin-right:5px}.fea{margin-right:10px}.feb{float:left}.fec{float:right}.fed:after,.fed:before{content:" ";display:table}.fed:after{clear:both}@font-face{font-family:fe_;src:url(//at.alicdn.com/t/font_1153910_u8e65rv3nvg.eot);src:url(//at.alicdn.com/t/font_1153910_u8e65rv3nvg.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_1153910_u8e65rv3nvg.woff2) format("woff2"),url(//at.alicdn.com/t/font_1153910_u8e65rv3nvg.woff) format("woff"),url(//at.alicdn.com/t/font_1153910_u8e65rv3nvg.ttf) format("truetype"),url(//at.alicdn.com/t/font_1153910_u8e65rv3nvg.svg#iconfont) format("svg");font-display:swap}.fee{font-family:fe_;line-height:1;font-size:16px;font-style:normal;font-weight:400;font-variant:normal;display:inline-block;speak:none;position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}');let o=t.node("boot").src.replace(/[^\/]+$/,""),a=navigator.language.toLowerCase();try{let t=window.localStorage;t&&(a=t.getItem("fe.lang")||a)}catch(t){}document.title=e("g"),t.View.merge({ctor(){this.set({i18n:e})}}),t.boot({lang:a,paths:{view:o+"view/",data:o+"data/"},rootId:"app",defaultPath:"/nav",defaultView:"view/default",rewrite(t,e){let o=t.match(/^\/nav\/(.+)$/);return o?(e.c=o[1],"/nav"):t}});