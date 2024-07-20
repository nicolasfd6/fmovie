import{_ as M,r as te,R as I}from"./index-a72de424.js";var W={exports:{}},re="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ne=re,oe=ne;function z(){}function V(){}V.resetWarningCache=z;var ae=function(){function t(r,o,a,s,i,u){if(u!==oe){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:V,resetWarningCache:z};return n.PropTypes=n,n};W.exports=ae();var ie=W.exports;const m=M(ie);function ue(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var X=te,ce=ue(X);function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var fe=!!(typeof window<"u"&&window.document&&window.document.createElement);function le(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],i;function u(){i=t(s.map(function(f){return f.props})),c.canUseDOM?e(i):n&&(i=n(i))}var c=function(f){se(p,f);function p(){return f.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=i;return i=void 0,s=[],y};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){s.push(this),u()},d.componentDidUpdate=function(){u()},d.componentWillUnmount=function(){var y=s.indexOf(this);s.splice(y,1),u()},d.render=function(){return ce.createElement(a,this.props)},p}(X.PureComponent);return U(c,"displayName","SideEffect("+r(a)+")"),U(c,"canUseDOM",fe),c}}var pe=le;const de=M(pe);var Te=typeof Element<"u",me=typeof Map=="function",he=typeof Set=="function",ve=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function j(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!j(t[r],e[r]))return!1;return!0}var a;if(me&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!j(r.value[1],e.get(r.value[0])))return!1;return!0}if(he&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ve&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(Te&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!j(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var ye=function(e,n){try{return j(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const ge=M(ye);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var B=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;function be(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Oe(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Se=Oe()?Object.assign:function(t,e){for(var n,r=be(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)Ee.call(n,s)&&(r[s]=n[s]);if(B){o=B(n);for(var i=0;i<o.length;i++)Ae.call(n,o[i])&&(r[o[i]]=n[o[i]])}}return r};const Ce=M(Se);var S={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(l).map(function(t){return l[t]});var h={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Pe=Object.keys(N).reduce(function(t,e){return t[N[e]]=e,t},{}),we=[l.NOSCRIPT,l.SCRIPT,l.STYLE],g="data-react-helmet",Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ie=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Le=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},q=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},je=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},x=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ne=function(e){var n=P(e,l.TITLE),r=P(e,L.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=P(e,L.DEFAULT_TITLE);return n||o||void 0},Me=function(e){return P(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},H=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return v({},r,o)},{})},He=function(e,n){return n.filter(function(r){return typeof r[l.BASE]<"u"}).map(function(r){return r[l.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),s=0;s<a.length;s++){var i=a[s],u=i.toLowerCase();if(e.indexOf(u)!==-1&&o[u])return r.concat(o)}return r},[])},R=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&ke("Helmet: "+e+' should be of type "Array". Instead found type "'+Re(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,s){var i={};s.filter(function(d){for(var T=void 0,y=Object.keys(d),E=0;E<y.length;E++){var A=y[E],b=A.toLowerCase();n.indexOf(b)!==-1&&!(T===h.REL&&d[T].toLowerCase()==="canonical")&&!(b===h.REL&&d[b].toLowerCase()==="stylesheet")&&(T=b),n.indexOf(A)!==-1&&(A===h.INNER_HTML||A===h.CSS_TEXT||A===h.ITEM_PROP)&&(T=A)}if(!T||!d[T])return!1;var w=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var u=Object.keys(i),c=0;c<u.length;c++){var f=u[c],p=Ce({},o[f],i[f]);o[f]=p}return a},[]).reverse()},P=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},xe=function(e){return{baseTag:He([h.HREF,h.TARGET],e),bodyAttributes:H(S.BODY,e),defer:P(e,L.DEFER),encode:P(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:H(S.HTML,e),linkTags:R(l.LINK,[h.REL,h.HREF],e),metaTags:R(l.META,[h.NAME,h.CHARSET,h.HTTPEQUIV,h.PROPERTY,h.ITEM_PROP],e),noscriptTags:R(l.NOSCRIPT,[h.INNER_HTML],e),onChangeClientState:Me(e),scriptTags:R(l.SCRIPT,[h.SRC,h.INNER_HTML],e),styleTags:R(l.STYLE,[h.CSS_TEXT],e),title:Ne(e),titleAttributes:H(S.TITLE,e)}},F=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){F(e)},0)}}(),Y=function(e){return clearTimeout(e)},Fe=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||F:global.requestAnimationFrame||F,De=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Y:global.cancelAnimationFrame||Y,ke=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},_=null,Ue=function(e){_&&De(_),e.defer?_=Fe(function(){$(e,function(){_=null})}):($(e),_=null)},$=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,f=e.scriptTags,p=e.styleTags,d=e.title,T=e.titleAttributes;D(l.BODY,o),D(l.HTML,a),Be(d,T);var y={baseTag:C(l.BASE,r),linkTags:C(l.LINK,s),metaTags:C(l.META,i),noscriptTags:C(l.NOSCRIPT,u),scriptTags:C(l.SCRIPT,f),styleTags:C(l.STYLE,p)},E={},A={};Object.keys(y).forEach(function(b){var w=y[b],k=w.newTags,ee=w.oldTags;k.length&&(E[b]=k),ee.length&&(A[b]=y[b].oldTags)}),n&&n(),c(e,E,A)},Q=function(e){return Array.isArray(e)?e.join(""):e},Be=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=Q(e)),D(l.TITLE,n)},D=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(g),a=o?o.split(","):[],s=[].concat(a),i=Object.keys(n),u=0;u<i.length;u++){var c=i[u],f=n[c]||"";r.getAttribute(c)!==f&&r.setAttribute(c,f),a.indexOf(c)===-1&&a.push(c);var p=s.indexOf(c);p!==-1&&s.splice(p,1)}for(var d=s.length-1;d>=0;d--)r.removeAttribute(s[d]);a.length===s.length?r.removeAttribute(g):r.getAttribute(g)!==i.join(",")&&r.setAttribute(g,i.join(","))}},C=function(e,n){var r=document.head||document.querySelector(l.HEAD),o=r.querySelectorAll(e+"["+g+"]"),a=Array.prototype.slice.call(o),s=[],i=void 0;return n&&n.length&&n.forEach(function(u){var c=document.createElement(e);for(var f in u)if(u.hasOwnProperty(f))if(f===h.INNER_HTML)c.innerHTML=u.innerHTML;else if(f===h.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=u.cssText:c.appendChild(document.createTextNode(u.cssText));else{var p=typeof u[f]>"u"?"":u[f];c.setAttribute(f,p)}c.setAttribute(g,"true"),a.some(function(d,T){return i=T,c.isEqualNode(d)})?a.splice(i,1):s.push(c)}),a.forEach(function(u){return u.parentNode.removeChild(u)}),s.forEach(function(u){return r.appendChild(u)}),{oldTags:a,newTags:s}},J=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},qe=function(e,n,r,o){var a=J(r),s=Q(n);return a?"<"+e+" "+g+'="true" '+a+">"+x(s,o)+"</"+e+">":"<"+e+" "+g+'="true">'+x(s,o)+"</"+e+">"},Ye=function(e,n,r){return n.reduce(function(o,a){var s=Object.keys(a).filter(function(c){return!(c===h.INNER_HTML||c===h.CSS_TEXT)}).reduce(function(c,f){var p=typeof a[f]>"u"?f:f+'="'+x(a[f],r)+'"';return c?c+" "+p:p},""),i=a.innerHTML||a.cssText||"",u=we.indexOf(e)===-1;return o+"<"+e+" "+g+'="true" '+s+(u?"/>":">"+i+"</"+e+">")},"")},Z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[N[o]||o]=e[o],r},n)},$e=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[Pe[o]||o]=e[o],r},n)},Ge=function(e,n,r){var o,a=(o={key:n},o[g]=!0,o),s=Z(r,a);return[I.createElement(l.TITLE,s,n)]},We=function(e,n){return n.map(function(r,o){var a,s=(a={key:o},a[g]=!0,a);return Object.keys(r).forEach(function(i){var u=N[i]||i;if(u===h.INNER_HTML||u===h.CSS_TEXT){var c=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[u]=r[i]}),I.createElement(e,s)})},O=function(e,n,r){switch(e){case l.TITLE:return{toComponent:function(){return Ge(e,n.title,n.titleAttributes)},toString:function(){return qe(e,n.title,n.titleAttributes,r)}};case S.BODY:case S.HTML:return{toComponent:function(){return Z(n)},toString:function(){return J(n)}};default:return{toComponent:function(){return We(e,n)},toString:function(){return Ye(e,n,r)}}}},K=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,f=e.styleTags,p=e.title,d=p===void 0?"":p,T=e.titleAttributes;return{base:O(l.BASE,n,o),bodyAttributes:O(S.BODY,r,o),htmlAttributes:O(S.HTML,a,o),link:O(l.LINK,s,o),meta:O(l.META,i,o),noscript:O(l.NOSCRIPT,u,o),script:O(l.SCRIPT,c,o),style:O(l.STYLE,f,o),title:O(l.TITLE,{title:d,titleAttributes:T},o)}},ze=function(e){var n,r;return r=n=function(o){Le(a,o);function a(){return _e(this,a),je(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!ge(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,u){if(!u)return null;switch(i.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:u};case l.STYLE:return{cssText:u}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var u,c=i.child,f=i.arrayTypeChildren,p=i.newChildProps,d=i.nestedChildren;return v({},f,(u={},u[c.type]=[].concat(f[c.type]||[],[v({},p,this.mapNestedChildrenToProps(c,d))]),u))},a.prototype.mapObjectTypeChildren=function(i){var u,c,f=i.child,p=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(f.type){case l.TITLE:return v({},p,(u={},u[f.type]=T,u.titleAttributes=v({},d),u));case l.BODY:return v({},p,{bodyAttributes:v({},d)});case l.HTML:return v({},p,{htmlAttributes:v({},d)})}return v({},p,(c={},c[f.type]=v({},d),c))},a.prototype.mapArrayTypeChildrenToProps=function(i,u){var c=v({},u);return Object.keys(i).forEach(function(f){var p;c=v({},c,(p={},p[f]=i[f],p))}),c},a.prototype.warnOnInvalidChildren=function(i,u){return!0},a.prototype.mapChildrenToProps=function(i,u){var c=this,f={};return I.Children.forEach(i,function(p){if(!(!p||!p.props)){var d=p.props,T=d.children,y=q(d,["children"]),E=$e(y);switch(c.warnOnInvalidChildren(p,T),p.type){case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:f=c.flattenArrayTypeChildren({child:p,arrayTypeChildren:f,newChildProps:E,nestedChildren:T});break;default:u=c.mapObjectTypeChildren({child:p,newProps:u,newChildProps:E,nestedChildren:T});break}}}),u=this.mapArrayTypeChildrenToProps(f,u),u},a.prototype.render=function(){var i=this.props,u=i.children,c=q(i,["children"]),f=v({},c);return u&&(f=this.mapChildrenToProps(u,f)),I.createElement(e,f)},Ie(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(I.Component),n.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Ve=function(){return null},Xe=de(xe,Ue,K)(Ve),G=ze(Xe);G.renderStatic=G.rewind;export{G as H};
