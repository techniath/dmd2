exports.ids = [139,215];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemOne.vue?vue&type=template&id=cd4daa40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"service service--1 text-center mt--30"},[_vm._ssrNode("<div class=\"icons\"><i"+(_vm._ssrClass(null,_vm.service.icon))+"></i></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h4>"+_vm._ssrEscape(_vm._s(_vm.service.heading))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.service.desc))+"</p> "),_c('n-link',{staticClass:"service-btn",attrs:{"to":"/"}},[_c('span',[_vm._v("More details")]),_vm._v(" "),_c('i',{staticClass:"fa fa-arrow-right"})])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItemOne.vue?vue&type=template&id=cd4daa40&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemOne.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ServiceItemOnevue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItemOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemOnevue_type_script_lang_js_ = (ServiceItemOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ServiceItemOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ab3cf0b0"
  
)

/* harmony default export */ var ServiceItemOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceOne.vue?vue&type=template&id=422aa540&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-service-area section-ptb-xl bg_image--2 test-bg"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"section-title text-center wow move-up\"><h3>WHAT WE DO</h3> <h2>We design &amp; build brands, campaigns &amp; digital projects for businesses large &amp; small.</h2></div></div></div> "),_vm._ssrNode("<div class=\"row mt--70 mt_sm--20 mt_md--30\">","</div>",_vm._l((_vm.data.services.slice(0, 3)),function(service){return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 wow move-up\">","</div>",[_c('ServiceItemOne',{attrs:{"service":service}})],1)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/ServiceOne.vue?vue&type=template&id=422aa540&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(62);

// EXTERNAL MODULE: ./components/ServiceItemOne.vue + 4 modules
var ServiceItemOne = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceOne.vue?vue&type=script&lang=js&
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


/* harmony default export */ var ServiceOnevue_type_script_lang_js_ = ({
  components: {
    ServiceItemOne: ServiceItemOne["default"]
  },

  data() {
    return {
      data: service
    };
  }

});
// CONCATENATED MODULE: ./components/sections/ServiceOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_ServiceOnevue_type_script_lang_js_ = (ServiceOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/ServiceOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_ServiceOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8b835b76"
  
)

/* harmony default export */ var ServiceOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[{\"id\":1,\"icon\":\"ion-ios-eye-outline\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":2,\"icon\":\"ion-ios-bookmarks-outline\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":3,\"icon\":\"ion-ios-browsers-outline\",\"heading\":\"SEO marketing\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":4,\"icon\":\"ion-ios-bell-outline\",\"heading\":\"Resource use\",\"desc\":\"We participate in knowledge and technology transfers in resource use.\"},{\"id\":5,\"icon\":\"ion-ios-infinite-outline\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":6,\"icon\":\"ion-ios-cloudy-outline\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":7,\"icon\":\"/img/service/home-creative-agency-box-image-01.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":8,\"icon\":\"/img/service/home-creative-agency-box-image-02.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":9,\"icon\":\"/img/service/home-creative-agency-box-image-03.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":10,\"icon\":\"/img/service/icon-box/icon-1.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":11,\"icon\":\"/img/service/icon-box/icon-2.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":12,\"icon\":\"/img/service/icon-box/icon-3.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":13,\"image\":\"/img/service/service-3/service-1.jpg\",\"heading\":\"Resource Use\",\"desc\":\"We participate in knowledge and technology transfers to promote the resource use.\"},{\"id\":14,\"image\":\"/img/service/service-3/service-2.jpg\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":15,\"image\":\"/img/service/service-3/service-3.jpg\",\"heading\":\"Digital Marketing\",\"desc\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":16,\"image\":\"/img/service/service-3/service-4.jpg\",\"heading\":\"SEO Marketing\",\"desc\":\"Our approach is to focus on growing visibility in organic search engine results.\"}],\"serviceList\":[{\"image\":\"/img/service/modern/service-list-1.jpg\",\"alt\":\"service image\",\"title\":\"Creative services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-2.jpg\",\"alt\":\"service image\",\"title\":\"Agency services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-3.jpg\",\"alt\":\"service image\",\"title\":\"Digital services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"}]}");

/***/ })

};;
//# sourceMappingURL=139.js.map