(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{235:function(t){t.exports=JSON.parse('{"portfolios":[{"heading":"header 01","image":"/img/portfolio/portfolio-1/portfolio-1.jpg"}],"portfolioFeaturd":[{"id":1,"image":"/img/portfolio/portfolio-2/portfolio-01.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"},{"id":2,"image":"/img/portfolio/portfolio-2/portfolio-02.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Photography"},{"id":3,"image":"/img/portfolio/portfolio-2/portfolio-03.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Design"},{"id":4,"image":"/img/portfolio/portfolio-2/portfolio-04.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Marketing"},{"id":5,"image":"/img/portfolio/portfolio-2/portfolio-05.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"SEO"},{"id":6,"image":"/img/portfolio/portfolio-2/portfolio-06.jpg","alt":"Portfolio Image","title":"Digital Marketing Basics","category":"Digital"}],"portfolioItems":[{"id":1,"image":"/img/portfolio/grid/caption-1.jpg","heading":"The Language of Designs","category":"Design","filterClass":"creative digital"},{"id":2,"image":"/img/portfolio/grid/caption-2.jpg","heading":"B-sharp High-end Audio","category":"Marketing","filterClass":"photography design"},{"id":3,"image":"/img/portfolio/grid/caption-3.jpg","heading":"Smart Sound System","category":"Photography","filterClass":"photography creative"},{"id":4,"image":"/img/portfolio/grid/caption-4.jpg","heading":"Awe-inspiring Projects","category":"Life Style","filterClass":"design"},{"id":5,"image":"/img/portfolio/grid/caption-5.jpg","heading":"Gifts for Photography","category":"Design","filterClass":"creative"},{"id":6,"image":"/img/portfolio/grid/caption-6.jpg","heading":"Enchanting Portrait Hacks","category":"Photography","filterClass":"digital"},{"id":7,"image":"/img/portfolio/grid/caption-7.jpg","heading":"Digital Marketing Basics","category":"Design"},{"id":8,"image":"/img/portfolio/grid/caption-8.jpg","heading":"Measure Digital Progress","filterClass":"digital design"},{"id":9,"image":"/img/portfolio/grid/caption-9.jpg","heading":"B-sharp High-end Audio","category":"Design","filterClass":"digital"}]}')},313:function(t,o,e){"use strict";var r=e(12),l=e(314),n=e(155),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*c,"String",{padStart:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},314:function(t,o,e){var r=e(28),l=e(156),n=e(31);t.exports=function(t,o,e,c){var d=String(n(t)),f=d.length,v=void 0===e?" ":String(e),m=r(o);if(m<=f||""==v)return d;var h=m-f,y=l.call(v,Math.ceil(h/v.length));return y.length>h&&(y=y.slice(0,h)),c?y+d:d+y}},456:function(t,o,e){"use strict";e.r(o);e(313),e(19),e(20),e(2);var r=e(235),l={data:function(){return{data:r,swiperOption:{slidesPerView:"auto",spaceBetween:30,autoplay:!1,loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(t,o,i){var a=100/i*o,e=o.toString(),s=i.toString();return'<div class="fraction"><span class="current">'+(e=e.padStart(2,"0"))+'</span><span class="separator"> / </span><span class="total">'+(s=s.padStart(2,"0"))+'</span></div><div class="progressbar"><div class="filled" data-width="'+a+'" style="width: '+a+'% "></div></div>'}}}}}},n=e(16),component=Object(n.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"bk-portfolio-area creative-portfolio section-pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"section-title--between wow move-up"},[t._m(0),t._v(" "),e("div",{staticClass:"section-btn mt_mobile--30"},[e("n-link",{staticClass:"button-text",attrs:{to:"/"}},[e("span",[t._v("View all projects")]),t._v(" "),e("i",{staticClass:"fa fa-arrow-right"})])],1)])])])]),t._v(" "),e("div",{staticClass:"portfolio-wrapper mt--40 wow move-up"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"porfolio-swip-horizontal",staticStyle:{overflow:"hidden"}},[e("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.portfolioFeaturd,(function(o){return e("div",{key:o.i,staticClass:"portfolio portfolio_style--2 mt--30 swiper-slide"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:o.image,alt:o.alt}})]),t._v(" "),e("div",{staticClass:"portfolio-overlay"}),t._v(" "),e("div",{staticClass:"port-overlay-info"},[e("div",{staticClass:"content"},[e("h3",{staticClass:"port-title"},[t._v(t._s(o.title))]),t._v(" "),e("div",{staticClass:"category"},[t._v(t._s(o.category))])])])])})),0),t._v(" "),e("div",{staticClass:"swiper-pagination"})],1)])])])])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"title"},[o("h3",{staticClass:"theme-creative"},[this._v(" Featured "),o("span",[this._v("Projects")])])])}],!1,null,null,null);o.default=component.exports}}]);