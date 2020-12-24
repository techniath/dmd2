exports.ids = [65];
exports.modules = {

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-grid-minimal.vue?vue&type=template&id=0e109635&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('HeaderBlack',{attrs:{"addClass":"header-transparent"}}),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('SearchPopup'),_vm._ssrNode(" <div class=\"breadcrumb-area pt--260 pb--80 pt_md--200 pt_sm--150 bg_color--5 breadcrumb-title-bar\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcrumb-inner text-center\"><h1 class=\"heading heading-h1\">Creative List</h1></div></div></div></div></div> "),_vm._ssrNode("<div class=\"blog-creative-area bg_color--5 pt--70 pb--100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8 mtn--60\">","</div>",[_vm._ssrNode("<div class=\"row row--30\">","</div>",_vm._l((_vm.data.blogs.slice(3, 15)),function(blog){return _vm._ssrNode("<div class=\"col-sm-6 move-up wow mt--60\">","</div>",[_vm._ssrNode("<div class=\"blog-grid-minimal\">","</div>",[_vm._ssrNode("<div class=\"grid-overlay\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (blog.image) + ")") }, null))+"></div> "),_vm._ssrNode("<div class=\"post-content\">","</div>",[_vm._ssrNode("<h5 class=\"heading\">","</h5>",[_c('n-link',{attrs:{"to":("/blog/" + (blog.id))}},[_vm._v("\n                                            "+_vm._s(blog.title)+"\n                                        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-meta\">","</div>",[_vm._ssrNode("<div class=\"post-date\">"+_vm._ssrEscape(_vm._s(blog.date))+"</div> "),_vm._ssrNode("<div class=\"post-category\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (blog.id))}},[_vm._v("\n                                                "+_vm._s(blog.category)+"\n                                            ")])],1)],2)],2)],2)])}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"brook-pagination-wrapper text-center pt--80\">","</div>",[_c('paginate',{attrs:{"page-count":4,"page-range":3,"margin-pages":2,"prev-text":'Prev',"next-text":'Next',"container-class":'brook-pagination',"page-class":'page-item'}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-4 mt_md--40 mt_sm--40\">","</div>",[_c('BlogSidebar')],1)],2)])]),_vm._ssrNode(" "),_c('FooterTwo')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/blog-grid-minimal.vue?vue&type=template&id=0e109635&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-grid-minimal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blog_grid_minimalvue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 301)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 242)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 244)),
    BlogPostFour: () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 299)),
    BlogSidebar: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 302)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 258))
  },

  data() {
    return {
      data: blog
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },

  head() {
    return {
      title: 'Blog Grid Minimal'
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/blog-grid-minimal.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blog_grid_minimalvue_type_script_lang_js_ = (blog_grid_minimalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/blog-grid-minimal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blog_grid_minimalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14f0dc62"
  
)

/* harmony default export */ var blog_grid_minimal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionSubTitle\":\"LATEST NEWS\",\"sectionTitle\":\"From our blogs\",\"blogs\":[{\"id\":1,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"January 7, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/blog-1/blog-01.jpg\",\"alt\":\"blog image\"},{\"id\":2,\"title\":\"1950s up to now Pop Music Defined\",\"date\":\"February 14, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/blog-1/blog-02.jpg\",\"alt\":\"blog image\"},{\"id\":3,\"title\":\"The Most Underrated ’90 s Bands\",\"date\":\"March 26, 2020\",\"category\":\"Digital\",\"image\":\"/img/blog/blog-1/blog-03.jpg\",\"alt\":\"blog image\"},{\"id\":4,\"title\":\"Niche Blogs for Rising Metal Bands\",\"date\":\"March 26, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/grid-1.jpg\",\"alt\":\"blog image\"},{\"id\":5,\"title\":\"Digital Photography Tips & Essentials\",\"date\":\"June 15, 2018\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/grid-2.jpg\",\"alt\":\"blog image\"},{\"id\":6,\"title\":\"What Motivates You to Work?\",\"date\":\"July 08, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/grid-3.jpg\",\"alt\":\"blog image\"},{\"id\":7,\"title\":\"Brave Lifestyle from Ancient Lessons\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-4.jpg\",\"alt\":\"blog image\"},{\"id\":8,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"March 26, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/grid-5.jpg\",\"alt\":\"blog image\"},{\"id\":9,\"title\":\"Digital Photography Tips & Essentials\",\"date\":\"June 15, 2018\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/grid-6.jpg\",\"alt\":\"blog image\"},{\"id\":10,\"title\":\"1950s up to now Pop Music Defined\",\"date\":\"July 08, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/grid-7.jpg\",\"alt\":\"blog image\"},{\"id\":11,\"title\":\"The Most Underrated ’90 s Bands\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-8.jpg\",\"alt\":\"blog image\"},{\"id\":12,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-9.jpg\",\"alt\":\"blog image\"},{\"id\":13,\"title\":\"Digital Photography Tips & Essentials\",\"date\":\"June 15, 2018\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/grid-10.jpg\",\"alt\":\"blog image\"},{\"id\":14,\"title\":\"Niche Blogs for Rising Metal Bands\",\"date\":\"July 08, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/grid-11.jpg\",\"alt\":\"blog image\"},{\"id\":15,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-12.jpg\",\"alt\":\"blog image\"},{\"id\":16,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-13.jpg\",\"alt\":\"blog image\"},{\"id\":17,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-1.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":18,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-2.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":19,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-3.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":20,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-4.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":21,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"June 19, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/mesonry-1.jpg\",\"alt\":\"blog image\"},{\"id\":22,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"March 17, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/mesonry-2.jpg\",\"alt\":\"blog image\"},{\"id\":23,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"August 15, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/mesonry-3.jpg\",\"alt\":\"blog image\"},{\"id\":24,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"July 18, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/mesonry-4.jpg\",\"alt\":\"blog image\"},{\"id\":25,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"June 15, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/mesonry-5.jpg\",\"alt\":\"blog image\"},{\"id\":26,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"April 14, 2020\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/mesonry-6.jpg\",\"alt\":\"blog image\"},{\"id\":27,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"March 10, 2020\",\"category\":\"Interior\",\"image\":\"/img/blog/grid/mesonry-7.jpg\",\"alt\":\"blog image\"},{\"id\":28,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"January 07, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/mesonry-8.jpg\",\"alt\":\"blog image\"},{\"id\":29,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"February 02, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/mesonry-9.jpg\",\"alt\":\"blog image\"},{\"id\":30,\"title\":\"5 Signs That It Is Time to Cut Out Your Menu Item\",\"date\":\"February 02, 2020\",\"category\":\"Food\",\"image\":\"/img/restaurant/restaurant-recipe-01.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\"},{\"id\":31,\"title\":\"5 Unexpected Food Trends For This Summer\",\"date\":\"March 02, 2019\",\"category\":\"Life Style\",\"image\":\"/img/restaurant/restaurant-recipe-02.jpg\",\"alt\":\"blog image\",\"author\":\"Uzzal Hossain\"},{\"id\":32,\"title\":\"Healthy Eating With Fruit And Vegetables\",\"date\":\"January 02, 2020\",\"category\":\"Food\",\"image\":\"/img/restaurant/restaurant-recipe-03.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\"}],\"tags\":[\"Business\",\"Architecture\",\"Format\",\"Musician\",\"Marketing\"]}");

/***/ })

};;
//# sourceMappingURL=blog-grid-minimal.js.map