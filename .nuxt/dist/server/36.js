exports.ids = [36];
exports.modules = {

/***/ 155:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"image\":\"/img/instagram/instagram-md-1.jpg\",\"like\":\"1K\",\"comment\":\"8\"},{\"id\":2,\"image\":\"/img/instagram/instagram-md-2.jpg\",\"like\":\"6K\",\"comment\":\"9\"},{\"id\":3,\"image\":\"/img/instagram/instagram-md-3.jpg\",\"like\":\"3K\",\"comment\":\"4\"},{\"id\":4,\"image\":\"/img/instagram/instagram-md-4.jpg\",\"like\":\"1K\",\"comment\":\"3\"},{\"id\":5,\"image\":\"/img/instagram/instagram-md-5.jpg\",\"like\":\"2K\",\"comment\":\"7\"},{\"id\":6,\"image\":\"/img/instagram/instagram-md-6.jpg\",\"like\":\"1K\",\"comment\":\"8\"}]");

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPost.vue?vue&type=template&id=88d96e58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"instagram-grid-wrap",class:_vm.addClass},_vm._l((_vm.data),function(instagram){return _vm._ssrNode("<div class=\"item-grid grid-style--1\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":instagram.image,"alt":"instagram images"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item-info\">","</div>",[_vm._ssrNode("<div class=\"inner\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('i',{staticClass:"fas fa-heart"}),_vm._v(_vm._s(instagram.like))]),_vm._ssrNode(" "),_c('n-link',{attrs:{"to":""}},[_c('i',{staticClass:"fas fa-comment-dots"}),_vm._v(_vm._s(instagram.comment))])],2)])],2)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstagramPost.vue?vue&type=template&id=88d96e58&

// EXTERNAL MODULE: ./data/instagram.json
var instagram = __webpack_require__(155);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPost.vue?vue&type=script&lang=js&
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

/* harmony default export */ var InstagramPostvue_type_script_lang_js_ = ({
  props: ['addClass'],

  data() {
    return {
      data: instagram
    };
  }

});
// CONCATENATED MODULE: ./components/InstagramPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstagramPostvue_type_script_lang_js_ = (InstagramPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/InstagramPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstagramPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf2a46d0"
  
)

/* harmony default export */ var InstagramPost = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=36.js.map