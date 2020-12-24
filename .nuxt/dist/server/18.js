exports.ids = [18];
exports.modules = {

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderVerticalOffcanvas.vue?vue&type=template&id=1eb2a060&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"br_header-sidebar"},[_vm._ssrNode("<div class=\"side-header-inner\">","</div>",[_vm._ssrNode("<div class=\"header-wrap\">","</div>",[_vm._ssrNode("<div class=\"header-top\">","</div>",[_vm._ssrNode("<div class=\"branding\">","</div>",[_c('n-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":"/img/logo/simple-dark-logo.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <div id=\"popop-open-menu\" class=\"popop-open-menu hamberger-trigger\"><div class=\"menu-icon\"><i></i></div></div>")],2),_vm._ssrNode(" <div class=\"header-center\"><div class=\"header-social-neworks\"><div class=\"inner\"><a href=\"https://www.facebook.com/\"><span>Facebook</span></a> <a href=\"https://twitter.com/\"><span>Twitter</span></a> <a href=\"https://www.instagram.com/\"><span>Instagram</span></a></div></div></div> <div class=\"header-bottom\"><div class=\"popup-search-wrap pr_lg--30 pr_md--30 pr_sm--30\"><button class=\"btn-search-click\"><i class=\"fa fa-search\"></i></button></div> <div class=\"manu-hamber popup-mobile-click d-block d-xl-none gray-version d-block d-xl-none\"><div><i></i></div></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderVerticalOffcanvas.vue?vue&type=template&id=1eb2a060&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderVerticalOffcanvas.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeaderVerticalOffcanvasvue_type_script_lang_js_ = ({
  methods: {
    //offcanvas search 
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

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
// CONCATENATED MODULE: ./components/HeaderVerticalOffcanvas.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderVerticalOffcanvasvue_type_script_lang_js_ = (HeaderVerticalOffcanvasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderVerticalOffcanvas.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderVerticalOffcanvasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d09e84a"
  
)

/* harmony default export */ var HeaderVerticalOffcanvas = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=18.js.map