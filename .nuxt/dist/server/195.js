exports.ids = [195];
exports.modules = {

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderOnepage.vue?vue&type=template&id=bd774070&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FixedHeader',[_c('header',{staticClass:"br_header header-default one-page-header light-logo-version headroom--sticky clearfix"},[_c('div',{staticClass:"header-wrapper"},[_c('div',{staticClass:"header-left-wrapper"},[_c('div',{staticClass:"branding"},[_c('div',{staticClass:"logo"},[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/simple-light-logo.png","alt":"brook logo"}})])],1)]),_vm._v(" "),_c('div',{staticClass:"header-left-inner"},[_c('div',{staticClass:"header-page-menu-style-2 d-none d-xl-block"},[_c('div',{staticClass:"manu-hamber-2 hamberger-trigger",on:{"click":function($event){return _vm.togglePopupMenu('addClass', 'is-visiable')}}},[_c('div',[_c('i')])])]),_vm._v(" "),_c('div',{staticClass:"header-page-menu-style-2 d-block d-xl-none"},[_c('div',{staticClass:"manu-hamber-2 popup-mobile-click",on:{"click":function($event){return _vm.mobiletoggleClass('addClass', 'show-mobile-menu')}}},[_c('div',[_c('i')])])])])]),_vm._v(" "),_c('div',{staticClass:"header-right-wrapper d-none d-sm-block"},[_c('div',{staticClass:"header-text text-right"},[_c('h5',{staticClass:"heading heading-h5 font-20 text-white"},[_c('span',{staticClass:"fa fa-heart"}),_vm._v(" \n                        Hello, we are brook studio\n                    ")])])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderOnepage.vue?vue&type=template&id=bd774070&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(58);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderOnepage.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HeaderOnepagevue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a
  },
  methods: {
    // popup fullscreen menu
    togglePopupMenu(addRemoveClass, className) {
      const el = document.querySelector('#popup-fullscreen-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    // offcanvas mobilemenu open
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HeaderOnepage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderOnepagevue_type_script_lang_js_ = (HeaderOnepagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderOnepage.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderOnepagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "659800ce"
  
)

/* harmony default export */ var HeaderOnepage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=195.js.map