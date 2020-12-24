exports.ids = [24];
exports.modules = {

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamCarouselFull.vue?vue&type=template&id=75e51e27&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid p-0"},[_vm._ssrNode("<div class=\"row no-gutters\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"brook-element-carousel swiper-custom-arrow swiper-arrow-hover\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.data.teamMembers.slice(4, 7)),function(teamMember){return _c('div',{key:teamMember.id,staticClass:"swiper-slide"},[_c('TeamMemberThree',{attrs:{"teamMember":teamMember}})],1)}),0),_vm._ssrNode(" <button class=\"swiper-btn swiper-btn-prev\"><i class=\"ion ion-ios-arrow-back\"></i></button> <button class=\"swiper-btn swiper-btn-next\"><i class=\"ion ion-ios-arrow-forward\"></i></button>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamCarouselFull.vue?vue&type=template&id=75e51e27&

// EXTERNAL MODULE: ./data/team.json
var team = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamCarouselFull.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TeamCarouselFullvue_type_script_lang_js_ = ({
  components: {
    TeamMemberThree: () => __webpack_require__.e(/* import() */ 50).then(__webpack_require__.bind(null, 113))
  },

  data() {
    return {
      data: team,
      swiperOption: {
        spaceBetween: 60,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/TeamCarouselFull.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamCarouselFullvue_type_script_lang_js_ = (TeamCarouselFullvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TeamCarouselFull.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamCarouselFullvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e6c6d56"
  
)

/* harmony default export */ var TeamCarouselFull = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module) {

module.exports = JSON.parse("{\"teamMembers\":[{\"id\":1,\"image\":\"/img/team/team-1/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":2,\"image\":\"/img/team/team-1/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":3,\"image\":\"/img/team/team-1/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"},{\"id\":4,\"image\":\"/img/team/team-1/team-4.jpg\",\"name\":\"Peter Parker\",\"position\":\"Marketing\"},{\"id\":5,\"image\":\"/img/team/team-3/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":6,\"image\":\"/img/team/team-3/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":7,\"image\":\"/img/team/team-3/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"},{\"id\":8,\"image\":\"/img/team/team-2/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":9,\"image\":\"/img/team/team-2/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":10,\"image\":\"/img/team/team-2/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"}]}");

/***/ })

};;
//# sourceMappingURL=24.js.map