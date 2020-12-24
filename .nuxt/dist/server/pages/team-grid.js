exports.ids = [133];
exports.modules = {

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/team-grid.vue?vue&type=template&id=076d3698&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('HeaderAbout'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('SearchPopup'),_vm._ssrNode(" <div class=\"brook-breadcrumb-area pt--130 pb--145 bg_color--1 breadcrumb-title-bar\"><div class=\"container-fluid plr--150 plr_md--50 plr_sm--20\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcrumb-inner text-center\"><h1 class=\"heading heading-h1 line-height-1-5\">The A-team of <span class=\"theme-color\">awesomeness</span><br> &amp; creative people</h1></div></div></div></div></div> "),_vm._ssrNode("<div class=\"brook-team-area bg_color--1\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row row--30 mtn--40\">","</div>",_vm._l((_vm.data.teamMembers.slice(7, 10)),function(teamMember){return _vm._ssrNode("<div class=\"col-md-4 col-sm-6 mt--40\">","</div>",[_c('TeamMemberThree',{attrs:{"teamMember":teamMember}})],1)}),0)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12 col-12\">","</div>",[_vm._ssrNode("<div class=\"call-content vertical-call-toaction text-center\">","</div>",[_vm._ssrNode("<h3 class=\"heading heading-h3\">Start working together?</h3> <div class=\"spacing\"></div> "),_vm._ssrNode("<div class=\"call-btn text-center\">","</div>",[_c('n-link',{staticClass:"brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded",attrs:{"to":"/"}},[_vm._v("Find out more")])],1)],2)])])])]),_vm._ssrNode(" "),_c('FooterTwo')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/team-grid.vue?vue&type=template&id=076d3698&

// EXTERNAL MODULE: ./data/team.json
var team = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/team-grid.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

/* harmony default export */ var team_gridvue_type_script_lang_js_ = ({
  components: {
    HeaderAbout: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 240)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 242)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 244)),
    TeamMemberThree: () => __webpack_require__.e(/* import() */ 50).then(__webpack_require__.bind(null, 113)),
    FooterTwo: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 258))
  },

  data() {
    return {
      data: team
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },

  head() {
    return {
      title: 'Brook || Team Grid'
    };
  }

});
// CONCATENATED MODULE: ./pages/team-grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_team_gridvue_type_script_lang_js_ = (team_gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/team-grid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_team_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02e9c4c2"
  
)

/* harmony default export */ var team_grid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module) {

module.exports = JSON.parse("{\"teamMembers\":[{\"id\":1,\"image\":\"/img/team/team-1/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":2,\"image\":\"/img/team/team-1/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":3,\"image\":\"/img/team/team-1/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"},{\"id\":4,\"image\":\"/img/team/team-1/team-4.jpg\",\"name\":\"Peter Parker\",\"position\":\"Marketing\"},{\"id\":5,\"image\":\"/img/team/team-3/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":6,\"image\":\"/img/team/team-3/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":7,\"image\":\"/img/team/team-3/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"},{\"id\":8,\"image\":\"/img/team/team-2/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":9,\"image\":\"/img/team/team-2/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":10,\"image\":\"/img/team/team-2/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"}]}");

/***/ })

};;
//# sourceMappingURL=team-grid.js.map