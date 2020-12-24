exports.ids = [148];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroMinimalAgency_vue_vue_type_style_index_0_id_f45f6e98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroMinimalAgency_vue_vue_type_style_index_0_id_f45f6e98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroMinimalAgency_vue_vue_type_style_index_0_id_f45f6e98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroMinimalAgency_vue_vue_type_style_index_0_id_f45f6e98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroMinimalAgency_vue_vue_type_style_index_0_id_f45f6e98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroMinimalAgency.vue?vue&type=template&id=f45f6e98&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-minimal-agency"},[_vm._ssrNode("<div class=\"container\" data-v-f45f6e98>","</div>",[_vm._ssrNode("<div class=\"row align-items-center\" data-v-f45f6e98>","</div>",[_vm._ssrNode("<div class=\"col-12 number-dot\" data-v-f45f6e98>","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.sliders),function(slider){return _c('div',{key:slider.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"hero-content"},[_c('div',{staticClass:"hero-content__image text-center"},[_c('img',{staticClass:"animation_images",attrs:{"src":slider.image,"alt":slider.alt}})]),_vm._v(" "),_c('div',{staticClass:"hero-content__text"},[_c('h6',{staticClass:"sub-heading"},[_vm._v(_vm._s(slider.subHeading))]),_vm._v(" "),_c('h1',{staticClass:"heading"},[_vm._v(_vm._s(slider.heading))])])])])}),0),_vm._ssrNode(" <div class=\"swiper-pagination minimal-agency\" data-v-f45f6e98></div>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroMinimalAgency.vue?vue&type=template&id=f45f6e98&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroMinimalAgency.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeroMinimalAgencyvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      },
      sliders: [{
        id: 1,
        subHeading: "art direction",
        heading: "Nouvelle Histories",
        image: "/img/slider/minimal-agency-slide-01.jpg",
        alt: "slider image"
      }, {
        id: 2,
        subHeading: "art direction",
        heading: "Isometric building",
        image: "/img/slider/minimal-agency-slide-02.jpg",
        alt: "slider image"
      }, {
        id: 3,
        subHeading: "art direction",
        heading: "Lighting",
        image: "/img/slider/minimal-agency-slide-03.jpg",
        alt: "slider image"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/HeroMinimalAgency.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroMinimalAgencyvue_type_script_lang_js_ = (HeroMinimalAgencyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroMinimalAgency.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroMinimalAgencyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f45f6e98",
  "5afe675c"
  
)

/* harmony default export */ var HeroMinimalAgency = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ })

};;
//# sourceMappingURL=148.js.map