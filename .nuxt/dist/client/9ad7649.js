/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31,22],{236:function(t,n,e){"use strict";e.r(n),e.d(n,"__extends",(function(){return l})),e.d(n,"__assign",(function(){return r})),e.d(n,"__rest",(function(){return c})),e.d(n,"__decorate",(function(){return d})),e.d(n,"__param",(function(){return v})),e.d(n,"__metadata",(function(){return _})),e.d(n,"__awaiter",(function(){return f})),e.d(n,"__generator",(function(){return m})),e.d(n,"__exportStar",(function(){return h})),e.d(n,"__values",(function(){return x})),e.d(n,"__read",(function(){return y})),e.d(n,"__spread",(function(){return k})),e.d(n,"__spreadArrays",(function(){return C})),e.d(n,"__await",(function(){return S})),e.d(n,"__asyncGenerator",(function(){return w})),e.d(n,"__asyncDelegator",(function(){return P})),e.d(n,"__asyncValues",(function(){return O})),e.d(n,"__makeTemplateObject",(function(){return E})),e.d(n,"__importStar",(function(){return L})),e.d(n,"__importDefault",(function(){return M}));var o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)};function l(t,b){function n(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}var r=function(){return(r=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};function c(s,t){var n={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&t.indexOf(p)<0&&(n[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)t.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(n[p[i]]=s[p[i]])}return n}function d(t,n,e,desc){var o,l=arguments.length,r=l<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(n,e,r):o(n,e))||r);return l>3&&r&&Object.defineProperty(n,e,r),r}function v(t,n){return function(e,o){n(e,o,t)}}function _(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)}function f(t,n,e,o){return new(e||(e=Promise))((function(l,r){function c(t){try{v(o.next(t))}catch(t){r(t)}}function d(t){try{v(o.throw(t))}catch(t){r(t)}}function v(t){t.done?l(t.value):new e((function(n){n(t.value)})).then(c,d)}v((o=o.apply(t,n||[])).next())}))}function m(t,body){var n,e,o,g,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return g={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function r(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,e&&(o=2&r[0]?e.return:r[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,r[1])).done)return o;switch(e=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,e=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){l=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){l.label=r[1];break}if(6===r[0]&&l.label<o[1]){l.label=o[1],o=r;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(r);break}o[2]&&l.ops.pop(),l.trys.pop();continue}r=body.call(t,l)}catch(t){r=[6,t],e=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}}function h(t,n){for(var p in t)n.hasOwnProperty(p)||(n[p]=t[p])}function x(t){var n="function"==typeof Symbol&&t[Symbol.iterator],i=0;return n?n.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}}function y(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,l,i=e.call(t),r=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)r.push(o.value)}catch(t){l={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(l)throw l.error}}return r}function k(){for(var t=[],i=0;i<arguments.length;i++)t=t.concat(y(arguments[i]));return t}function C(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var n=Array(s),e=0;for(i=0;i<t;i++)for(var a=arguments[i],o=0,l=a.length;o<l;o++,e++)n[e]=a[o];return n}function S(t){return this instanceof S?(this.v=t,this):new S(t)}function w(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,g=e.apply(t,n||[]),q=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(t){g[t]&&(i[t]=function(n){return new Promise((function(a,b){q.push([t,n,a,b])>1||l(t,n)}))})}function l(t,n){try{(e=g[t](n)).value instanceof S?Promise.resolve(e.value.v).then(r,c):d(q[0][2],e)}catch(t){d(q[0][3],t)}var e}function r(t){l("next",t)}function c(t){l("throw",t)}function d(t,n){t(n),q.shift(),q.length&&l(q[0][0],q[0][1])}}function P(t){var i,p;return i={},n("next"),n("throw",(function(t){throw t})),n("return"),i[Symbol.iterator]=function(){return this},i;function n(n,e){i[n]=t[n]?function(o){return(p=!p)?{value:S(t[n](o)),done:"return"===n}:e?e(o):o}:e}}function O(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,n=t[Symbol.asyncIterator];return n?n.call(t):(t=x(t),i={},e("next"),e("throw"),e("return"),i[Symbol.asyncIterator]=function(){return this},i);function e(n){i[n]=t[n]&&function(e){return new Promise((function(o,l){(function(t,n,e,o){Promise.resolve(o).then((function(n){t({value:n,done:e})}),n)})(o,l,(e=t[n](e)).done,e.value)}))}}}function E(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}function L(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function M(t){return t&&t.__esModule?t:{default:t}}},237:function(t,n,e){},239:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(236).__importDefault(e(240));n.default=o.default},240:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(236),l=o.__importDefault(e(8));n.default=l.default.extend({props:{threshold:{required:!1,type:Number,default:0},headerClass:{required:!1,type:String,default:"vue-fixed-header"},fixedClass:{required:!1,type:String,default:"vue-fixed-header--isFixed"},hideScrollUp:{required:!1,type:Boolean,default:!1}},data:function(){return{check:null,isFixed:!1,lastScrollTop:0}},mounted:function(){this.main(),this.registerEvent()},beforeDestroy:function(){this.removeEvent()},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop},main:function(){var t=this;this.lastScrollTop=this.getScrollTop(),this.check=function(){var n=t,e=n.threshold,o=n.hideScrollUp,l=t.getScrollTop(),r=l>e,c=(l>=t.lastScrollTop||!o)&&r;t.lastScrollTop=l,t.isFixed!==c&&(t.isFixed=c,t.$emit("change",t.isFixed))}},registerEvent:function(){window.addEventListener("scroll",this.check)},removeEvent:function(){window.removeEventListener("scroll",this.check)}},render:function(t){var n,e=this.$slots.default;if(!e||!o.__spreadArrays(e)[0])return t();var l=o.__spreadArrays(e)[0],r=t(l.tag,l.data,l.children||l.text);return r.data=r.data||{class:""},"string"==typeof r.data.class&&(r.data.class=r.data.class.split(" ")),Array.isArray(r.data.class)&&(r.data.class=o.__spreadArrays(r.data.class).reduce((function(a,b){var t;return o.__assign(o.__assign({},a),((t={})[b]=!0,t))}),{})),r.data.class=o.__assign(o.__assign({},r.data.class),((n={})[this.headerClass]=!0,n[this.fixedClass]=!!this.isFixed,n)),r.data.class=Object.entries(r.data.class).map((function(t){var n=t[0];return t[1]?n:null})).filter((function(t){return t})).join(" "),r}})},241:function(t,n,e){"use strict";e(237)},242:function(t,n,e){"use strict";e.r(n);e(241);var o=e(16),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"page_nav"},[e("ul",{staticClass:"mainmenu"},[e("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[e("n-link",{attrs:{to:"/"}},[e("span",{staticStyle:{color:"#463d9c"}},[t._v("Home")])]),t._v(" "),e("ul",{staticClass:"mega__width--fullscreen"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mega__list"},[e("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 01\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[e("span",[t._v("Home Business")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-creative-agency"}},[e("span",[t._v("Home Creative Agency")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-design-studio"}},[e("span",[t._v("Home Design Studio")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-digital-agency"}},[e("span",[t._v("Home Digital Agency")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-authentic-studio"}},[e("span",[t._v("Home Authentic Studio")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-minimal-agency"}},[e("span",[t._v("Home Minimal Agency")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 02\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/home-start-up"}},[e("span",[t._v("Home Start Ups")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-freelancer"}},[e("span",[t._v("Home Freelancer")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-product-landing"}},[e("span",[t._v("Home Product Landing")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-restaurant"}},[e("span",[t._v("Home Restaurant")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-photo-slider-gallery"}},[e("span",[t._v("Home Photo Slider Gallery")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-onepage"}},[e("span",[t._v("Home Onepage")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 03\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/home-landing"}},[e("span",[t._v("Home Landing")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-service"}},[e("span",[t._v("Home Service")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-vertical-menu"}},[e("span",[t._v("Home Vertical Menu")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-corona"}},[e("span",[t._v("Home Corona")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-essential"}},[e("span",[t._v("Home Essential")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-indie-musician"}},[e("span",[t._v("Indie Musician")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            HOME SAMPLES 04\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/home-creative-portfolio"}},[e("span",[t._v("Home Creative Portfolio")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-minimal-portfolio"}},[e("span",[t._v("Home Minimal Portfolio")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-portfolio-slide"}},[e("span",[t._v("Home Portfolio Slide")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-fullscreen-slider-left-vertical-header"}},[e("span",[t._v("Portfolio Fullscreen Slider")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-blog-grid"}},[e("span",[t._v("Home Blog Grid")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-masonry-gallery"}},[e("span",[t._v("Home Masonry Gallery")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/home-minimal-metro-grid"}},[e("span",[t._v("Home Minimal Metro Grid")])])],1)])])])])])],1),t._v(" "),e("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[e("n-link",{attrs:{to:"/about-us-01"}},[e("span",{staticStyle:{color:"#463d9c"}},[t._v("Pages")])]),t._v(" "),e("ul",{staticClass:"mega__width--fullscreen"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mega__list"},[e("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 01\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/about-us-01"}},[e("span",[t._v("About Us 01")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/about-us-03"}},[e("span",[t._v("About Us 03")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/about-us-04"}},[e("span",[t._v("About Us 04")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 02\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/services-classic"}},[e("span",[t._v("Services Classic")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/services-modern"}},[e("span",[t._v("Services Modern")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/services-list"}},[e("span",[t._v("Services List")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 03\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/team-grid"}},[e("span",[t._v("Team Grid")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/team-carousel-01"}},[e("span",[t._v("Our Team Carousel 01")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/team-carousel-02"}},[e("span",[t._v("Our Team Carousel 02")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            SAMPLE PAGES 04\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/contact-us-modern"}},[e("span",[t._v("Contact Us Modern")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/contact-us-with-map"}},[e("span",[t._v("Contact Us With Map")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/pricing-plans"}},[e("span",[t._v("Pricing Plans")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/career"}},[e("span",[t._v("Career")])])],1)])])])])])],1),t._v(" "),e("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[e("n-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[e("span",{staticStyle:{color:"#463d9c"}},[t._v("Portfolio")])]),t._v(" "),e("ul",{staticClass:"mega__width--fullscreen"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mega__list"},[e("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO SAMPLES 01\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-boxed"}},[e("span",[t._v("Portfolio Grid Boxed")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-wide"}},[e("span",[t._v("Portfolio Grid Wide")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-with-caption"}},[e("span",[t._v("Portfolio With Caption")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO SAMPLES 02\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-01"}},[e("span",[t._v("Portfolio Grid Metro 01")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-metro-03"}},[e("span",[t._v("Portfolio Grid Metro 03")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-ajax-filter"}},[e("span",[t._v("Portfolio Ajax Filter")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO DETAILS 01\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-grid-filter"}},[e("span",[t._v("portfolio-grid-filter")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-details"}},[e("span",[t._v("Portfolio Details")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right"}},[e("span",[t._v("Portfolio Details Right")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            PORTFOLIO DETAILS 02\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-left-wide"}},[e("span",[t._v("Left Details - Wide")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-right-wide"}},[e("span",[t._v("Right Details - Wide")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/portfolio/portfolio-details-image-with-caption"}},[e("span",[t._v("Image With Caption")])])],1)])])])])])],1),t._v(" "),e("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[e("n-link",{attrs:{to:""}},[e("span",{staticStyle:{color:"#463d9c"}},[t._v("Elements")])]),t._v(" "),e("ul",{staticClass:"mega__width--fullscreen"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mega__list"},[e("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 01\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/element/team"}},[e("span",[t._v("Team")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/testimonial"}},[e("span",[t._v("Testimonial")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/pricing-box"}},[e("span",[t._v("Pricing Box")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/dividers"}},[e("span",[t._v("Dividers")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 02\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/element/brand-logo"}},[e("span",[t._v("Brand Logo Carousel")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/flexible-image-slider"}},[e("span",[t._v("Flexible Image Slider")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/carousel-slider"}},[e("span",[t._v("Carousel Slider")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/call-to-action-banner"}},[e("span",[t._v("Call To Action Banner")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 03\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/element/tab"}},[e("span",[t._v("Tab")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/gradation"}},[e("span",[t._v("Gradation")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/message-box"}},[e("span",[t._v("message-box")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/instagram"}},[e("span",[t._v("Instagram")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            ELEMENT GROUP 04\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/element/icon-boxes"}},[e("span",[t._v("icon-boxes")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/lists"}},[e("span",[t._v("Lists")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/accordion"}},[e("span",[t._v("Accordion")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/element/contact-subscribe"}},[e("span",[t._v("Contact & subscribe forms")])])],1)])])])])])],1),t._v(" "),e("li",{staticClass:"lavel-1 with--drop slide--megamenu"},[e("n-link",{attrs:{to:"/blog/blog-creative"}},[e("span",{staticStyle:{color:"#463d9c"}},[t._v("Blog")])]),t._v(" "),e("ul",{staticClass:"mega__width--fullscreen"},[e("div",{staticClass:"container"},[e("div",{staticClass:"mega__list"},[e("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 01\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-creative"}},[e("span",[t._v("Blog Creative")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-standard-list"}},[e("span",[t._v("Blog Standard List")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-classic"}},[e("span",[t._v("Blog Grid Classic")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 02\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-classic-sidebar"}},[e("span",[t._v("Blog Grid Classic Sidebar")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-standard"}},[e("span",[t._v("Blog Grid Standard")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-simple"}},[e("span",[t._v("Blog Grid Simple")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 03\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-modern"}},[e("span",[t._v("Blog Grid Modern")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal"}},[e("span",[t._v("Blog Grid Minimal")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-minimal-outline"}},[e("span",[t._v("Blog Grid Minimal Outline")])])],1)])]),t._v(" "),e("li",{staticClass:"mega--title"},[t._v("\n                            BLOG SAMPLE 04\n                            "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-grid-mesonry"}},[e("span",[t._v("Blog Grid Masonry")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-details"}},[e("span",[t._v("Blog Details")])])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/blog/blog-details-modern-layout"}},[e("span",[t._v("Blog Details Modern Layout")])])],1)])])])])])],1)])])}),[],!1,null,null,null);n.default=component.exports},278:function(t,n,e){},326:function(t,n,e){"use strict";e(278)},486:function(t,n,e){"use strict";e.r(n);var o=e(239),l=e.n(o),r=e(242),c={components:{FixedHeader:l.a,Navigation:r.default},props:["addClass"],methods:{toggleClass:function(t,n){var e=document.querySelector("#search-popup");"addClass"===t?e.classList.add(n):e.classList.remove(n)},togglePopupMenu:function(t,n){var e=document.querySelector("#popup-fullscreen-menu");"addClass"===t?e.classList.add(n):e.classList.remove(n)},mobiletoggleClass:function(t,n){var e=document.querySelector("#offcanvas-menu");"addClass"===t?e.classList.add(n):e.classList.remove(n)}}},d=(e(326),e(16)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("fixed-header",[e("header",{staticClass:"br_header header-default header-bar position-from--top black-logo--version haeder-fixed-width haeder-fixed-150 headroom--sticky header-mega-menu clearfix",class:t.addClass},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"header__wrapper"},[e("div",{staticClass:"header-left"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:""}},[e("img",{attrs:{src:"/img/logo/brook-black.png",alt:"Brook Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"header-right"},[e("div",{staticClass:"popup-search-wrap"},[e("a",{staticClass:"btn-search-click",attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.toggleClass("addClass","search-popup-open")}}},[e("i",{staticClass:"fa fa-search"})])]),t._v(" "),e("div",{staticClass:"manu-hamber hamberger-trigger black-version d-none d-xl-block",on:{click:function(n){return t.togglePopupMenu("addClass","is-visiable")}}},[e("div",[e("i")])]),t._v(" "),e("div",{staticClass:"manu-hamber popup-mobile-click d-block black-version d-block d-xl-none",on:{click:function(n){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("div",[e("i")])])])])])])])])])}),[],!1,null,"dedce460",null);n.default=component.exports}}]);