exports.ids = [191];
exports.modules = {

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSliderFive.vue?vue&type=template&id=e958ca70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexableimage__wrapper"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.sliders),function(slide){return _c('div',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"flexale-image"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":slide.image,"alt":"image"}})])])])}),0),_vm._ssrNode(" <button class=\"swiper-btn swiper-btn-prev\"><i class=\"fas fa-angle-left\"></i></button> <button class=\"swiper-btn swiper-btn-next\"><i class=\"fas fa-angle-right\"></i></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FlexibleSliderFive.vue?vue&type=template&id=e958ca70&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlexibleSliderFive.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FlexibleSliderFivevue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        speed: 1500,
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          992: {
            slidesPerView: 2,
            centeredSlides: true
          },
          768: {
            centeredSlides: false
          },
          576: {
            slidesPerView: 2,
            centeredSlides: false
          },
          300: {
            slidesPerView: 1,
            centeredSlides: false
          }
        }
      },
      sliders: [{
        id: 1,
        image: "/img/flexable-image-slide/flexable-2/flexable-1.png"
      }, {
        id: 2,
        image: "/img/flexable-image-slide/flexable-2/flexable-2.png"
      }, {
        id: 3,
        image: "/img/flexable-image-slide/flexable-2/flexable-3.png"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FlexibleSliderFive.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FlexibleSliderFivevue_type_script_lang_js_ = (FlexibleSliderFivevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FlexibleSliderFive.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FlexibleSliderFivevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d921e3b0"
  
)

/* harmony default export */ var FlexibleSliderFive = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=191.js.map