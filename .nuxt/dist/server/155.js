exports.ids = [155];
exports.modules = {

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/BlogOne.vue?vue&type=template&id=30201806&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-blog-area"},[_vm._ssrNode("<div class=\"black-bg-wrapper bg_image--4 section-pt-xl pb--320\""+(_vm._ssrStyle(null,{ backgroundImage: "url('/img/bg/bg-image-4.jpg')" }, null))+"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"section-title text-center white-text wow move-up\"><h3 class=\"text-white\">"+_vm._ssrEscape(_vm._s(_vm.data.sectionSubTitle))+"</h3> <h2>"+_vm._ssrEscape(_vm._s(_vm.data.sectionTitle))+"</h2></div></div></div></div></div> "),_vm._ssrNode("<div class=\"blog-wrapper pl--230 pr--230 pr_lp--100 pl_lp--100 pl_lg--100 pr_lg--100 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30 section-pb-xl\">","</div>",[_vm._ssrNode("<div class=\"row row--0 space_dec--250\">","</div>",_vm._l((_vm.data.blogs.slice(0, 3)),function(blog){return _vm._ssrNode("<div class=\"col-xl-4 col-md-6 wow move-up mt_sm--40\">","</div>",[_c('BlogPost',{attrs:{"blog":blog}})],1)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/BlogOne.vue?vue&type=template&id=30201806&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=template&id=01cb7ea9&
var BlogPostvue_type_template_id_01cb7ea9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog blog-style--1"},[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_c('img',{attrs:{"src":_vm.blog.image,"alt":_vm.blog.alt}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-content blog-position--bottom\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<ul class=\"meta\"><li>"+_vm._ssrEscape(_vm._s(_vm.blog.date))+"</li> <li>"+_vm._ssrEscape(_vm._s(_vm.blog.category))+"</li></ul> "),_vm._ssrNode("<h3 class=\"the-title\">","</h3>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_vm._v(_vm._s(_vm.blog.title))])],1)],2)])],2)}
var BlogPostvue_type_template_id_01cb7ea9_staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=template&id=01cb7ea9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BlogPostvue_type_script_lang_js_ = ({
  props: ['blog']
});
// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogPostvue_type_script_lang_js_ = (BlogPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostvue_type_script_lang_js_,
  BlogPostvue_type_template_id_01cb7ea9_render,
  BlogPostvue_type_template_id_01cb7ea9_staticRenderFns,
  false,
  null,
  null,
  "5558f6a8"
  
)

/* harmony default export */ var BlogPost = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/BlogOne.vue?vue&type=script&lang=js&
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


/* harmony default export */ var BlogOnevue_type_script_lang_js_ = ({
  components: {
    BlogPost: BlogPost
  },

  data() {
    return {
      data: blog
    };
  }

});
// CONCATENATED MODULE: ./components/sections/BlogOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_BlogOnevue_type_script_lang_js_ = (BlogOnevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/sections/BlogOne.vue





/* normalize component */

var BlogOne_component = Object(componentNormalizer["a" /* default */])(
  sections_BlogOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "389afcc0"
  
)

/* harmony default export */ var BlogOne = __webpack_exports__["default"] = (BlogOne_component.exports);

/***/ }),

/***/ 59:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionSubTitle\":\"LATEST NEWS\",\"sectionTitle\":\"From our blogs\",\"blogs\":[{\"id\":1,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"January 7, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/blog-1/blog-01.jpg\",\"alt\":\"blog image\"},{\"id\":2,\"title\":\"1950s up to now Pop Music Defined\",\"date\":\"February 14, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/blog-1/blog-02.jpg\",\"alt\":\"blog image\"},{\"id\":3,\"title\":\"The Most Underrated ’90 s Bands\",\"date\":\"March 26, 2020\",\"category\":\"Digital\",\"image\":\"/img/blog/blog-1/blog-03.jpg\",\"alt\":\"blog image\"},{\"id\":4,\"title\":\"Niche Blogs for Rising Metal Bands\",\"date\":\"March 26, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/grid-1.jpg\",\"alt\":\"blog image\"},{\"id\":5,\"title\":\"Digital Photography Tips & Essentials\",\"date\":\"June 15, 2018\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/grid-2.jpg\",\"alt\":\"blog image\"},{\"id\":6,\"title\":\"What Motivates You to Work?\",\"date\":\"July 08, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/grid-3.jpg\",\"alt\":\"blog image\"},{\"id\":7,\"title\":\"Brave Lifestyle from Ancient Lessons\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-4.jpg\",\"alt\":\"blog image\"},{\"id\":8,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"March 26, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/grid-5.jpg\",\"alt\":\"blog image\"},{\"id\":9,\"title\":\"Digital Photography Tips & Essentials\",\"date\":\"June 15, 2018\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/grid-6.jpg\",\"alt\":\"blog image\"},{\"id\":10,\"title\":\"1950s up to now Pop Music Defined\",\"date\":\"July 08, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/grid-7.jpg\",\"alt\":\"blog image\"},{\"id\":11,\"title\":\"The Most Underrated ’90 s Bands\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-8.jpg\",\"alt\":\"blog image\"},{\"id\":12,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-9.jpg\",\"alt\":\"blog image\"},{\"id\":13,\"title\":\"Digital Photography Tips & Essentials\",\"date\":\"June 15, 2018\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/grid-10.jpg\",\"alt\":\"blog image\"},{\"id\":14,\"title\":\"Niche Blogs for Rising Metal Bands\",\"date\":\"July 08, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/grid-11.jpg\",\"alt\":\"blog image\"},{\"id\":15,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-12.jpg\",\"alt\":\"blog image\"},{\"id\":16,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"September 16, 2019\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/grid-13.jpg\",\"alt\":\"blog image\"},{\"id\":17,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-1.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":18,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-2.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":19,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-3.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":20,\"date\":\"May 16, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/creative-4.jpg\",\"alt\":\"blog image\",\"title\":\"Digital Photography Tips & Essentials\",\"details\":\"Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image, although…\"},{\"id\":21,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"June 19, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/mesonry-1.jpg\",\"alt\":\"blog image\"},{\"id\":22,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"March 17, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/mesonry-2.jpg\",\"alt\":\"blog image\"},{\"id\":23,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"August 15, 2020\",\"category\":\"Marketing\",\"image\":\"/img/blog/grid/mesonry-3.jpg\",\"alt\":\"blog image\"},{\"id\":24,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"July 18, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/mesonry-4.jpg\",\"alt\":\"blog image\"},{\"id\":25,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"June 15, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/mesonry-5.jpg\",\"alt\":\"blog image\"},{\"id\":26,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"April 14, 2020\",\"category\":\"Digital\",\"image\":\"/img/blog/grid/mesonry-6.jpg\",\"alt\":\"blog image\"},{\"id\":27,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"March 10, 2020\",\"category\":\"Interior\",\"image\":\"/img/blog/grid/mesonry-7.jpg\",\"alt\":\"blog image\"},{\"id\":28,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"January 07, 2020\",\"category\":\"Life Style\",\"image\":\"/img/blog/grid/mesonry-8.jpg\",\"alt\":\"blog image\"},{\"id\":29,\"title\":\"Career Tips For Emerging Photographers\",\"date\":\"February 02, 2020\",\"category\":\"Photography\",\"image\":\"/img/blog/grid/mesonry-9.jpg\",\"alt\":\"blog image\"},{\"id\":30,\"title\":\"5 Signs That It Is Time to Cut Out Your Menu Item\",\"date\":\"February 02, 2020\",\"category\":\"Food\",\"image\":\"/img/restaurant/restaurant-recipe-01.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\"},{\"id\":31,\"title\":\"5 Unexpected Food Trends For This Summer\",\"date\":\"March 02, 2019\",\"category\":\"Life Style\",\"image\":\"/img/restaurant/restaurant-recipe-02.jpg\",\"alt\":\"blog image\",\"author\":\"Uzzal Hossain\"},{\"id\":32,\"title\":\"Healthy Eating With Fruit And Vegetables\",\"date\":\"January 02, 2020\",\"category\":\"Food\",\"image\":\"/img/restaurant/restaurant-recipe-03.jpg\",\"alt\":\"blog image\",\"author\":\"Owen Christ\"}],\"tags\":[\"Business\",\"Architecture\",\"Format\",\"Musician\",\"Marketing\"]}");

/***/ })

};;
//# sourceMappingURL=155.js.map