(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/core/services/store/breadcrumbs.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/advance-table/Widget2.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/advance-table/Widget3.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/mixed/Widget1.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget1.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget3.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget4.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget8.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget9.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/stats/Widget7.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/stats/Widget12.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/stats/Widget13.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "dashboard",
  components: {
    AdvancedTableWidget2: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/advance-table/Widget2.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    AdvancedTableWidget3: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/advance-table/Widget3.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    MixedWidget1: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/mixed/Widget1.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ListWidget1: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget1.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ListWidget3: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget3.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ListWidget4: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget4.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ListWidget8: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget8.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    ListWidget9: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/list/Widget9.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    StatsWidget7: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/stats/Widget7.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    StatsWidget12: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/stats/Widget12.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    StatsWidget13: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/view/content/widgets/stats/Widget13.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  mounted: function mounted() {
    this.$store.dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/core/services/store/breadcrumbs.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), [{
      title: "Dashboard"
    }]);
  },
  methods: {
    setActiveTab1: function setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2: function setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },

    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      // get all tab links
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll(".nav-link"); // remove active tab links

      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      } // set current active tab


      event.target.classList.add("active"); // set clicked tab index to bootstrap tab

      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-xxl-4"
};
var _hoisted_3 = {
  "class": "col-xxl-4"
};
var _hoisted_4 = {
  "class": "col-xxl-4"
};
var _hoisted_5 = {
  "class": "col-xxl-4 order-1 order-xxl-1"
};
var _hoisted_6 = {
  "class": "col-xxl-8 order-2 order-xxl-1"
};
var _hoisted_7 = {
  "class": "col-xxl-4 order-1 order-xxl-2"
};
var _hoisted_8 = {
  "class": "col-xxl-4 order-1 order-xxl-2"
};
var _hoisted_9 = {
  "class": "col-lg-12 col-xxl-4 order-1 order-xxl-2"
};
var _hoisted_10 = {
  "class": "col-xxl-4 order-1 order-xxl-2"
};
var _hoisted_11 = {
  "class": "col-xxl-8 order-1 order-xxl-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MixedWidget1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MixedWidget1");

  var _component_ListWidget9 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListWidget9");

  var _component_StatsWidget7 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StatsWidget7");

  var _component_StatsWidget12 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StatsWidget12");

  var _component_ListWidget1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListWidget1");

  var _component_AdvancedTableWidget2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdvancedTableWidget2");

  var _component_ListWidget3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListWidget3");

  var _component_ListWidget4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListWidget4");

  var _component_ListWidget8 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListWidget8");

  var _component_StatsWidget13 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StatsWidget13");

  var _component_AdvancedTableWidget3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AdvancedTableWidget3");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Dashboard"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MixedWidget1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListWidget9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StatsWidget7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StatsWidget12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListWidget1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdvancedTableWidget2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListWidget3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListWidget4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListWidget8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StatsWidget13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AdvancedTableWidget3)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Dashboard")]);
}

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_82704d4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=82704d4a */ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js");



_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Dashboard_vue_vue_type_template_id_82704d4a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/pages/Dashboard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_82704d4a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_82704d4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=82704d4a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a");


/***/ })

}]);