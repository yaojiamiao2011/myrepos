(function(){var m=!0,o=null,p=!1,q=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return r.apply(o,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var ea=document,fa=window;var s=function(a,b){this.width=a;this.height=b};s.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function v(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var w=function(a,b,c){a.addEventListener?a.addEventListener(b,c,p):a.attachEvent&&a.attachEvent("on"+b,c)},x=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,p):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(){var a=y;try{return!!a.location.href||""===a.location.href}catch(b){return p}};var ga=!!window.google_async_iframe_id,y=ga&&window.parent||window,A=function(){if(ga&&!z()){for(var a="."+ea.domain;2<a.split(".").length&&!z();)ea.domain=a=a.substr(a.indexOf(".")+1),y=window.parent;z()||(y=window)}return y};var B=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};var C,D,G,ha,ia,ja=function(){return q.navigator?q.navigator.userAgent:o};ia=ha=G=D=C=p;var H;if(H=ja()){var ka=q.navigator;C=0==H.indexOf("Opera");D=!C&&-1!=H.indexOf("MSIE");ha=(G=!C&&-1!=H.indexOf("WebKit"))&&-1!=H.indexOf("Mobile");ia=!C&&!G&&"Gecko"==ka.product}var la=C,I=D,J=ia,K=G,ma=ha,na;
a:{var L="",M;if(la&&q.opera)var qa=q.opera.version,L="function"==typeof qa?qa():qa;else if(J?M=/rv\:([^\);]+)(\)|;)/:I?M=/MSIE\s+([^\);]+)(\)|;)/:K&&(M=/WebKit\/(\S+)/),M)var ra=M.exec(ja()),L=ra?ra[1]:"";if(I){var sa,ta=q.document;sa=ta?ta.documentMode:void 0;if(sa>parseFloat(L)){na=""+sa;break a}}na=L}
var ua=na,va={},wa=function(a){if(!va[a]){for(var b=0,c=(""+ua).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",i=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var k=i.exec(g)||["","",""],j=u.exec(h)||["","",""];if(0==k[0].length&&0==j[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==j[1].length?0:parseInt(j[1],10))?-1:(0==k[1].length?0:parseInt(k[1],
10))>(0==j[1].length?0:parseInt(j[1],10))?1:0)||((0==k[2].length)<(0==j[2].length)?-1:(0==k[2].length)>(0==j[2].length)?1:0)||(k[2]<j[2]?-1:k[2]>j[2]?1:0)}while(0==b)}va[a]=0<=b}},xa={},N=function(a){return xa[a]||(xa[a]=I&&!!document.documentMode&&document.documentMode>=a)};var ya;!I||N(9);!J&&!I||I&&N(9)||J&&wa("1.9.1");I&&wa("9");var P=function(a){return a?new za(O(a)):ya||(ya=new za)},O=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},za=function(a){this.p=a||q.document||document};za.prototype.createElement=function(a){return this.p.createElement(a)};var Aa=function(a){var b=a.p,a=!K&&"CSS1Compat"==b.compatMode?b.documentElement:b.body,b=b.parentWindow||b.defaultView;return new B(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var Q=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};var R=function(a){var b;a:{b=O(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,o))){b=b.position||b.getPropertyValue("position")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.position:o)||a.style&&a.style.position},Ba=function(a){if(ma&&K){var b=a.ownerDocument.defaultView;if(b!=b.top)return p}return!!a.getBoundingClientRect},Ca=function(a){var b=a.getBoundingClientRect();I&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,
b.top-=a.documentElement.clientTop+a.body.clientTop);return b},Da=function(a){if(I&&!N(8))return a.offsetParent;for(var b=O(a),c=R(a),d="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=R(a),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return o},Ea=function(a){var b,c=O(a),d=R(a),f=J&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&
(0>b.screenX||0>b.screenY),e=new B(0,0),g;b=c?O(c):document;if(g=I)if(g=!N(9))g="CSS1Compat"!=P(b).p.compatMode;g=g?b.body:b.documentElement;if(a==g)return e;if(Ba(a))b=Ca(a),a=Aa(P(c)),e.x=b.left+a.x,e.y=b.top+a.y;else if(c.getBoxObjectFor&&!f)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),e.x=b.screenX-a.screenX,e.y=b.screenY-a.screenY;else{f=a;do{e.x+=f.offsetLeft;e.y+=f.offsetTop;f!=a&&(e.x+=f.clientLeft||0,e.y+=f.clientTop||0);if(K&&"fixed"==R(f)){e.x+=c.body.scrollLeft;e.y+=c.body.scrollTop;
break}f=f.offsetParent}while(f&&f!=a);if(la||K&&"absolute"==d)e.y-=c.body.offsetTop;for(f=a;(f=Da(f))&&f!=c.body&&f!=g;)if(e.x-=f.scrollLeft,!la||"TR"!=f.tagName)e.y-=f.scrollTop}return e};var S=function(a,b,c,d,f,e){this.i=a;this.v=(a.bottom-a.top)*(a.right-a.left);this.q=this.f=-1;this.a=[0,0,0,0,0];this.j=[0,0,0,0,0];this.d=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.k="";this.c=o;this.u=m;this.w=c;this.h=this.b=-1;this.m=b;this.e=0;this.n=d;this.r=f||"";this.s=e||"";this.t=function(){};this.element=o;this.l=0;this.g=-1},Fa=new Q(0,0,0,0);
S.prototype.update=function(a,b,c){var d=this.i,f=a-this.w||1;this.w=a;var e=Math.max(d.top,b.top),g=Math.min(d.bottom,b.bottom),h=-1,i=-1;if(e<=g){var u=Math.max(d.left,b.left),d=Math.min(d.right,b.right);if(u<=d&&(e=(g-e)*(d-u)/this.v,h=1<=e?0:0.75<=e?1:0.5<=e?2:0.25<=e?3:4,0>this.f&&(this.f=a),this.q=a,0.5<=e))i=100*this.v/((b.bottom-b.top)*(b.right-b.left)),i=20<=i?0:10<=i?1:5<=i?2:2.5<=i?3:4}-1!=this.b&&(this.a[this.b]+=f,2>=this.b&&-1!=this.h&&(this.zoom[this.h]+=f));for(a=this.b;0<=a&&4>=a;a++)if(this.d[a]+=
f,c||-1==h||a<h)this.d[a]>this.j[a]&&(this.j[a]=this.d[a]),this.d[a]=0;this.b=h;this.h=i;this.t(this,b)};S.prototype.z=function(a){this.g=a()};S.prototype.o=function(a){this.l+=a()-this.g;this.g=-1};var Ia=function(a){var b=fa;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new s(-1,-1);else{var d=(b||window).document,f="CSS1Compat"==d.compatMode?d.documentElement:d.body;c=new s(f.clientWidth,f.clientHeight)}return c}catch(e){return new s(-12245933,-12245933)}};var Ja=function(a,b){w(a,"unload",b)},Ka=function(a,b){w(a,"scroll",T);w(a,"resize",T);if(b)for(var c,d=0;d<U.length;++d){c=U[d];var f=r(c.z,c,V);w(c.element,"mouseover",f);f=r(c.o,c,V);w(c.element,"mouseout",f)}},T=function(){La(U,p)},La=function(a,b){if(!(Ma||0==a.length)){var c=Ia(m);Na=c;if(!(-1==c.width||-1==c.height||-12245933==c.width||-12245933==c.height)){var d=o;try{d=Aa(P((window.top||q||window).document))}catch(f){return}for(var c=new Q(d.y,d.x+c.width,d.y+c.height,d.x),d=V(),e=0;e<a.length;e++)a[e].update(d,
c,b);Oa+=V()-d;Pa++}}},U=[],Ma=p,Qa=(new Date).getTime(),Y=-1,Na=o,V=function(){return(new Date).getTime()-Qa},Ra=0,Sa=0,Oa=0,Pa=0,Ta=0,Ua=function(){var a=A().document;return!a.body||!a.body.getBoundingClientRect?p:m};var Z,Va=function(){if(2==Z.getOseId())return m;for(var a=U,b=0;b<a.length;b++)if(a[b].c)return m;return p},Za=function(){try{var a=A(),b=V();Y=b;Na=Ia(m);var c;!Ua()||"function"!=typeof Goog_AdSense_getAdAdapterInstance?c=p:(Z=Goog_AdSense_getAdAdapterInstance(),c=m);if(c){Ra=Z.numBlocks();var d=[];Sa=0;Z.getBlocks(function(a,c,e){Sa++;var f=a.getBoundingClientRect();try{var k=window.top,j=new B(0,0),n=O(a)?O(a).parentWindow||O(a).defaultView:window,E=a;do{var W;if(n==k)W=Ea(E);else{var l=E,t=new B;
if(l.nodeType==1)if(Ba(l)){var oa=Ca(l);t.x=oa.left;t.y=oa.top}else{var Ga=Aa(P(l)),Ha=Ea(l);t.x=Ha.x-Ga.x;t.y=Ha.y-Ga.y}else{var $a=aa(l.A)=="function",X=l;l.targetTouches?X=l.targetTouches[0]:$a&&l.A().targetTouches&&(X=l.A().targetTouches[0]);t.x=X.clientX;t.y=X.clientY}W=t}l=W;j.x=j.x+l.x;j.y=j.y+l.y}while(n&&n!=k&&(E=n.frameElement)&&(n=n.parent));var ab=new Q(Math.round(j.y),Math.round(f.right-f.left+j.x),Math.round(f.bottom-f.top+j.y),Math.round(j.x)),F=new S(ab,c,b,e);F.c=a;F.element=a;F.t=
Wa;F.k=Xa(Ya,c);var pa=c.match(/[&\?](?:adk)=([0-9]+)/);F.e=pa&&pa.length==2?parseInt(pa[1],10):0;d.push(F)}catch(gb){d.push(new S(Fa,c,b,e))}});U=d;La(d,p);Ja(a,function(){$("u")});var f=2==Z.getOseId();Ka(a,f);window.setTimeout(function(){$("t")},36E5);Ta=V()-b}else $("c")}catch(e){U=[],$("x")}},$=function(a){var b=A(),c=b.document;if(!Ma){if(3!=Z.getOseId()){var d;d||(d="http");d=[[d,"://pagead2.googlesyndication.com/pagead/gen_204?id=osd"].join("")];try{var f=0<=Y?V()-Y:-1,e=U;if(0<e.length){La(e,
m);for(c=0;c<e.length;c++)if(0<e[c].e){0<e[c].g&&e[c].o(V);var g=e[c],h=g.i,i=["p:",h.top,h.left,h.bottom,h.right];i.push("tos:",g.a.join(","));i.push("mtos:",g.j.join(","));i.push("rs:",g.n);5!=g.n&&(i.push("zoom:",g.zoom.join(",")),i.push("ht:",g.l));0<=g.f&&i.push("tfs:",g.f,"tls:",g.q);g.k&&i.push("fp:",g.k);5==g.n&&(g.s&&i.push("ord:",g.s),g.r&&i.push("amd:",g.r,";"),g.m&&i.push("req:",v(g.m).substring(0,500),";"));d.push("adk"+e[c].e+"="+v(i.join(",")))}g=m;h=Na;d.push("bs="+h.width+","+h.height);
var u;h=fa;g&&h.top!=h&&(h=h.top);try{var k=h.document;u=!h.scrollY&&"CSS1Compat"!=k.compatMode?new Q(0,k.body.scrollWidth,k.body.scrollHeight,0):new Q(0,k.body.offsetWidth,k.body.offsetHeight,0)}catch(j){u=new Q(0,-12245933,-12245933,0)}d.push("ps="+u.right+","+u.bottom);d.push("ss="+screen.width+","+screen.height);var n=Xa(bb,e[0].m);if(n&&("&"==n.charAt(0)||"?"==n.charAt(0)))n=n.slice(1);d.push("fp="+v(n))}else d.push("url="+v(b.location.href)),c.referrer&&d.push("referrer="+v(c.referrer)),Z&&
(d.push("correlator="+Z.getCorrelator()),d.push("eid="+Z.getOseExpId()),d.push("oid="+Z.getOseId()));d.push("tt="+f);d.push("pt="+Y);d.push("deb="+v([1,Ra,Sa,Oa,Pa,Ta].join("-")));d.push("r="+a);if(b.top!=b){d.push("iframe_loc="+v(b.location.href));var E=Ia(p);d.push("is="+E.width+","+E.height)}}catch(W){d.push("error")}try{var l=d.join("&");b.google_image_requests||(b.google_image_requests=[]);var t=b.document.createElement("img");t.src=l;b.google_image_requests.push(t)}catch(oa){}}Ma=m}},Ya=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,
bb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,Xa=function(a,b){var c=b.match(a);return c?c.join(""):""},cb=function(a,b){if(b){a(b);var c=b.frames;if(c){var d=c.length,f;for(f=0;f<d;++f)cb(a,c[f])}}},db=function(a,b){try{b.postMessage(a,"*")}catch(c){}},Wa=function(a,b){if(a&&a.c){var c=1E3<=a.a[2]+a.a[1]+a.a[0];if(c||a.u){var d=c?"1":"0";a.u=p;var f=Z.getCorrelator(),e=a.i,g=a.c.contentWindow;cb(da(db,["{vi:",d,",cl:",f,",adk:",a.e,",pl:",e.left,",pr:",e.right,",pt:",e.top,",pb:",e.bottom,
",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",b.bottom,"}"].join("")),g);if(c&&(a.c=o,!Va()&&(c=2==Z.getOseId(),d=A(),x(d,"scroll",T),x(d,"resize",T),c)))for(d=0;d<U.length;++d)c=U[d],f=r(c.z,c,V),x(c.element,"mouseover",f),f=r(c.o,c,V),x(c.element,"mouseout",f)}}};var eb=A();if("complete"==eb.document.readyState||eb.google_onload_fired)Za();else{var fb=A();w(fb,"load",function(){window.setTimeout(Za,100)})};})();
