webpackJsonp([96961042003272],{204:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(3),r=l(n),s=a(11),u=l(s),d=a(5),f=l(d),o=function(e){var t=e.prevPath,a=e.nextPath,l=e.page,n=e.pagesSum;return r.default.createElement("header",{className:"header extra-pagination inner text-center"},r.default.createElement("nav",{className:"pagination",role:"navigation"},t?r.default.createElement(u.default,{className:"newer-posts",to:t},r.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"):r.default.createElement("div",{className:"newer-posts"},"No more pages"),r.default.createElement("span",{className:"page-number"},"Page "+l+" of "+n),a?r.default.createElement(u.default,{className:"older-posts",to:a},"Older Posts ",r.default.createElement("span",{"aria-hidden":"true"},"→")):r.default.createElement("div",{className:"older-posts"},"No more pages")))};o.propTypes={prevPath:f.default.string,nextPath:f.default.string,page:f.default.number,pagesSum:f.default.number},t.default=o,e.exports=t.default},213:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.pathContext,a=e.data,l=a.site.siteMetadata,n=l.description,r=l.siteUrl,u=t.posts,d=t.page,f=t.pagesSum,c=t.prevPath,m=t.nextPath;return s.default.createElement("section",{className:"main-content"},s.default.createElement(v.default,{title:"Page "+d,path:"/page/"+d,siteUrl:r,tags:"webdev, programming, javascript",description:n,noIndex:!1}),s.default.createElement(E.default,null),s.default.createElement("section",{className:"blog container"},s.default.createElement("div",{className:"medium-8 medium-offset-2 large-10 large-offset-1"},s.default.createElement("div",{className:"posts"},s.default.createElement(o.default,{page:d,pagesSum:f,prevPath:c,nextPath:m}),s.default.createElement(i.default,null),s.default.createElement(p.default,{posts:u}),s.default.createElement(i.default,null),s.default.createElement(o.default,{page:d,pagesSum:f,prevPath:c,nextPath:m})))))}t.__esModule=!0,t.pagesQuery=void 0,t.default=n;var r=a(3),s=l(r),u=a(5),d=l(u),f=a(204),o=l(f),c=a(57),p=l(c),m=a(22),i=l(m),g=a(21),E=l(g),h=a(26),v=l(h);n.propTypes={pathContext:d.default.object,data:d.default.object};t.pagesQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-js-b5945e4e1128ecf78ec3.js.map