/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
!function(e){"use strict";var t,a,n,i,s,r;e.matchMedia=e.matchMedia||(t=e.document,n=t.documentElement,i=n.firstElementChild||n.firstChild,s=t.createElement("body"),(r=t.createElement("div")).id="mq-test-1",r.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,i),a=42===r.offsetWidth,n.removeChild(s),{matches:a,media:e}})}(this),
/*! Respond.js v1.4.0: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
function(e){"use strict";var t={};e.respond=t,t.update=function(){};var a=[],n=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(a){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),ajax=function(e,t){var a=n();a&&(a.open("GET",e,!0),a.onreadystatechange=function(){4!==a.readyState||200!==a.status&&304!==a.status||t(a.responseText)},4!==a.readyState&&a.send(null))};if(t.ajax=ajax,t.queue=a,t.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},t.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!t.mediaQueriesSupported){var i,s,r,l=e.document,o=l.documentElement,d=[],m=[],h=[],c={},u=l.getElementsByTagName("head")[0]||o,f=l.getElementsByTagName("base")[0],p=u.getElementsByTagName("link"),getEmValue=function(){var e,t=l.createElement("div"),a=l.body,n=o.style.fontSize,i=a&&a.style.fontSize,s=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",a||((a=s=l.createElement("body")).style.background="none"),o.style.fontSize="100%",a.style.fontSize="100%",a.appendChild(t),s&&o.insertBefore(a,o.firstChild),e=t.offsetWidth,s?o.removeChild(a):a.removeChild(t),o.style.fontSize=n,i&&(a.style.fontSize=i),e=r=parseFloat(e)},applyMedia=function(t){var a=o.clientWidth,n="CSS1Compat"===l.compatMode&&a||l.body.clientWidth||a,c={},f=p[p.length-1],y=(new Date).getTime();if(t&&i&&y-i<30)return e.clearTimeout(s),void(s=e.setTimeout(applyMedia,30));for(var g in i=y,d)if(d.hasOwnProperty(g)){var x=d[g],v=x.minw,E=x.maxw,w=null===v,S=null===E;v&&(v=parseFloat(v)*(v.indexOf("em")>-1?r||getEmValue():1)),E&&(E=parseFloat(E)*(E.indexOf("em")>-1?r||getEmValue():1)),x.hasquery&&(w&&S||!(w||n>=v)||!(S||n<=E))||(c[x.media]||(c[x.media]=[]),c[x.media].push(m[x.rules]))}for(var T in h)h.hasOwnProperty(T)&&h[T]&&h[T].parentNode===u&&u.removeChild(h[T]);for(var C in h.length=0,c)if(c.hasOwnProperty(C)){var b=l.createElement("style"),M=c[C].join("\n");b.type="text/css",b.media=C,u.insertBefore(b,f.nextSibling),b.styleSheet?b.styleSheet.cssText=M:b.appendChild(l.createTextNode(M)),h.push(b)}},translate=function(e,a,n){var i=e.replace(t.regex.keyframes,"").match(t.regex.media),s=i&&i.length||0,repUrls=function(e){return e.replace(t.regex.urls,"$1"+a+"$2$3")},r=!s&&n;(a=a.substring(0,a.lastIndexOf("/"))).length&&(a+="/"),r&&(s=1);for(var l=0;l<s;l++){var o,h,c,u;r?(o=n,m.push(repUrls(e))):(o=i[l].match(t.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&repUrls(RegExp.$2))),u=(c=o.split(",")).length;for(var f=0;f<u;f++)h=c[f],d.push({media:h.split("(")[0].match(t.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:h.indexOf("(")>-1,minw:h.match(t.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:h.match(t.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}applyMedia()},makeRequests=function(){if(a.length){var t=a.shift();ajax(t.href,(function(a){translate(a,t.href,t.media),c[t.href]=!0,e.setTimeout((function(){makeRequests()}),0)}))}},ripCSS=function(){for(var t=0;t<p.length;t++){var n=p[t],i=n.href,s=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&r&&!c[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(translate(n.styleSheet.rawCssText,i,s),c[i]=!0):(/^([a-zA-Z:]*\/\/)/.test(i)||f)&&i.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===i.substring(0,2)&&(i=e.location.protocol+i),a.push({href:i,media:s})))}makeRequests()};ripCSS(),t.update=ripCSS,t.getEmValue=getEmValue,e.addEventListener?e.addEventListener("resize",callMedia,!1):e.attachEvent&&e.attachEvent("onresize",callMedia)}function callMedia(){applyMedia(!0)}}(this);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2020-02-04T15:00:30 UTC
 * Commit:   68976695d61ccc3db336b04685aa8cc4d6417950
 */