(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(147);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(141),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(143),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var l=a(32);a.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Brad Wray"}}}}},145:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},146:function(e,t,a){},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(150),s=a.n(u),d=a(142);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"Brad Wray",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l;var p="1025518380"},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Brad Wray",description:"ideas nerd, psych & comp sci teacher, creator of http://xamplr.com , ReactJS developer, edTech entrepreneur, gardener, musician, dad.",author:"@bradwray"}}}}},149:function(e,t,a){"use strict";var n=a(144),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(142),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#c0deed",marginBottom:"1.45rem",color:"#333"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var d=s,l=(a(146),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});l.propTypes={children:c.a.node.isRequired};t.a=l}}]);
//# sourceMappingURL=component---src-pages-404-js-0d91f74e6a7ca5202fdd.js.map