exports.ids = [129];
exports.modules = {

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-list.vue?vue&type=template&id=5b3afe1f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('HeaderAbout'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('SearchPopup'),_vm._ssrNode(" <div class=\"brook-breadcrumb-area pt--130 pb--170 bg_color--1 breadcrumb-title-bar\"><div class=\"container-fluid plr--150 plr_md--50 plr_sm--50\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcrumb-inner text-left\"><h1 class=\"heading heading-h1 line-height-1-5\">We <span class=\"theme-color\">design &amp; build</span><br> brands and digital projects<br> for businesses.</h1></div></div></div></div></div> <div class=\"brook-service-list-area\">"+(_vm._ssrList((_vm.data.serviceList),function(service){return ("<div class=\"bk-service-list d-block d-md-flex mb--70 align-items-center wow move-up\"><div class=\"thumb\"><img"+(_vm._ssrAttr("src",service.image))+(_vm._ssrAttr("alt",service.alt))+" class=\"w--100\"></div> <div class=\"content plr--130 plr_md--50 plr_sm--40\"><h3 class=\"heading heading-h3\">"+_vm._ssrEscape(_vm._s(service.title))+"</h3> <div class=\"bkseparator--35\"></div> <p class=\"bk_pra\">"+_vm._ssrEscape(_vm._s(service.desc))+"</p></div></div>")}))+"</div> "),_c('CallToAction'),_vm._ssrNode(" "),_c('FooterTwo')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/services-list.vue?vue&type=template&id=5b3afe1f&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services-list.vue?vue&type=script&lang=js&
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

/* harmony default export */ var services_listvue_type_script_lang_js_ = ({
  components: {
    HeaderAbout: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 240)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 242)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 244)),
    CallToAction: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 383)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 258))
  },

  data() {
    return {
      data: service
    };
  },

  head() {
    return {
      title: 'Brook || Service List'
    };
  }

});
// CONCATENATED MODULE: ./pages/services-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_services_listvue_type_script_lang_js_ = (services_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/services-list.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_services_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "319e8739"
  
)

/* harmony default export */ var services_list = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[{\"id\":1,\"icon\":\"ion-ios-eye-outline\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":2,\"icon\":\"ion-ios-bookmarks-outline\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":3,\"icon\":\"ion-ios-browsers-outline\",\"heading\":\"SEO marketing\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":4,\"icon\":\"ion-ios-bell-outline\",\"heading\":\"Resource use\",\"desc\":\"We participate in knowledge and technology transfers in resource use.\"},{\"id\":5,\"icon\":\"ion-ios-infinite-outline\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":6,\"icon\":\"ion-ios-cloudy-outline\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":7,\"icon\":\"/img/service/home-creative-agency-box-image-01.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":8,\"icon\":\"/img/service/home-creative-agency-box-image-02.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":9,\"icon\":\"/img/service/home-creative-agency-box-image-03.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":10,\"icon\":\"/img/service/icon-box/icon-1.png\",\"heading\":\"Modern Design\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":11,\"icon\":\"/img/service/icon-box/icon-2.png\",\"heading\":\"Multi-purpose Use\",\"desc\":\"Brook embraces a modern look with various enhanced pre-defined page elements.\"},{\"id\":12,\"icon\":\"/img/service/icon-box/icon-3.png\",\"heading\":\"Responsive Layouts\",\"desc\":\"Brook is highly responsive thanks to built-in WP Bakery Page Builder & Slider Revolution.\"},{\"id\":13,\"image\":\"/img/service/service-3/service-1.jpg\",\"heading\":\"Resource Use\",\"desc\":\"We participate in knowledge and technology transfers to promote the resource use.\"},{\"id\":14,\"image\":\"/img/service/service-3/service-2.jpg\",\"heading\":\"UI/UX designs\",\"desc\":\"We successfully implemented numerous UI/UX projects for both global & local clients.\"},{\"id\":15,\"image\":\"/img/service/service-3/service-3.jpg\",\"heading\":\"Digital Marketing\",\"desc\":\"We conduct the marketing of products & services using latest digital technologies.\"},{\"id\":16,\"image\":\"/img/service/service-3/service-4.jpg\",\"heading\":\"SEO Marketing\",\"desc\":\"Our approach is to focus on growing visibility in organic search engine results.\"}],\"serviceList\":[{\"image\":\"/img/service/modern/service-list-1.jpg\",\"alt\":\"service image\",\"title\":\"Creative services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-2.jpg\",\"alt\":\"service image\",\"title\":\"Agency services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-3.jpg\",\"alt\":\"service image\",\"title\":\"Digital services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"}]}");

/***/ })

};;
//# sourceMappingURL=services-list.js.map