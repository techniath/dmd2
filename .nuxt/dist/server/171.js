exports.ids = [171];
exports.modules = {

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TestimonialOne.vue?vue&type=template&id=9ea048ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-testimonial-area section-ptb-xl pt-0 bg_color--5 poss_relative pt_sm--0"},[_vm._ssrNode("<div class=\"container section-pt-xl\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"section-title text-center wow move-up\"><h3 class=\"theme-color\">"+_vm._ssrEscape(_vm._s(_vm.data.sectionSubTitle))+"</h3> <h2>"+_vm._ssrEscape(_vm._s(_vm.data.sectionTitle))+"</h2></div></div></div></div> "),_vm._ssrNode("<div class=\"testimonial-wrapper testimonial--horizontal testimonial--horizontal--active pagination-style-01 mt--80 wow move-up\">","</div>",[_vm._ssrNode("<div class=\"testimonial-container\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.data.testimonials),function(testimonial){return _c('div',{key:testimonial.id,staticClass:"swiper-slide"},[_c('TestimonialItem',{attrs:{"testimonial":testimonial}})],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination swiper-pagination-custom\"></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/TestimonialOne.vue?vue&type=template&id=9ea048ae&

// EXTERNAL MODULE: ./data/testimonial.json
var testimonial = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TestimonialOne.vue?vue&type=script&lang=js&
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

/* harmony default export */ var TestimonialOnevue_type_script_lang_js_ = ({
  components: {
    TestimonialItem: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 257))
  },

  data() {
    return {
      data: testimonial,
      swiperOption: {
        spaceBetween: 20,
        autoplay: false,
        loop: true,
        loopedSlides: 9,
        autoplayDisableOnInteraction: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (e, t, i) {
            var a = 100 / i * t;
            return a = a.toFixed(6), '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + '"></div></div>';
          }
        },
        breakpoints: {
          1499: {
            slidesPerView: 5
          },
          992: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 2
          },
          300: {
            slidesPerView: 1
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/sections/TestimonialOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TestimonialOnevue_type_script_lang_js_ = (TestimonialOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sections/TestimonialOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_TestimonialOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fc4ec9ca"
  
)

/* harmony default export */ var TestimonialOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"Feedback from our clients.\",\"sectionSubTitle\":\"Testimonials\",\"testimonials\":[{\"id\":1,\"name\":\"Yeasin Rony\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-1.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":2,\"name\":\"Tasnim Akter\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-2.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":3,\"name\":\"Uzzal Hossain\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-3.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":4,\"name\":\"Maria\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-4.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":5,\"name\":\"Bindu\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-5.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":6,\"name\":\"Raju\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-6.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"},{\"id\":7,\"name\":\"Harley Mills\",\"position\":\"PR Officer\",\"thumb\":\"/img/testimonial/clint-1/clint-7.jpg\",\"alt\":\"client image\",\"text\":\"“Theme is <span>@initiative</span> to use. Even for a WordPress beginner like me, Brook offers all the functions and features with simple instructions”\"}]}");

/***/ })

};;
//# sourceMappingURL=171.js.map