"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-header */ \"./components/layout/main-header.js\");\n/* harmony import */ var _components_layout_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/sidebar */ \"./components/layout/sidebar.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Layout(props) {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    console.log(\"\\uD83D\\uDE80 ~ file: layout.js:9 ~ Layout ~ session:\", session);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"authenticated\" && session) {\n            setIsLoggedIn(true);\n        }\n    }, [\n        status,\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Finalproject\\\\project\\\\components\\\\layout\\\\layout.js\",\n                lineNumber: 21,\n                columnNumber: 22\n            }, this),\n            !isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Finalproject\\\\project\\\\components\\\\layout\\\\layout.js\",\n                lineNumber: 22,\n                columnNumber: 23\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"D:\\\\Finalproject\\\\project\\\\components\\\\layout\\\\layout.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Finalproject\\\\project\\\\components\\\\layout\\\\layout.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"S4MrIMmbvOIfqfBH1kHQV9kCBtE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTTtBQUNlO0FBQ1Q7QUFDRDtBQUU3QixTQUFTTSxPQUFPQyxLQUFLOztJQUNsQyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdQLDJEQUFVQTtJQUM1Q1EsUUFBUUMsR0FBRyxDQUFDLHdEQUE4Q0g7SUFDMUQsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlNLFdBQVcsbUJBQW1CRCxTQUFTO1lBQ3pDSyxjQUFjO1FBQ2hCO0lBQ0YsR0FBRztRQUFDSjtRQUFRRDtLQUFRO0lBRXBCLHFCQUNFLDhEQUFDVCwyQ0FBUUE7O1lBRU5hLDRCQUFjLDhEQUFDWCxrRUFBT0E7Ozs7O1lBQ3RCLENBQUNXLDRCQUFjLDhEQUFDWixvREFBVUE7Ozs7OzBCQUMzQiw4REFBQ2M7MEJBQU1SLE1BQU1TLFFBQVE7Ozs7Ozs7Ozs7OztBQUkzQjtHQXBCd0JWOztRQUNZSCx1REFBVUE7OztLQUR0QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzP2NiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSBcIi4vbWFpbi1oZWFkZXJcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBsYXlvdXQuanM6OSB+IExheW91dCB+IHNlc3Npb246XCIsIHNlc3Npb24pO1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiICYmIHNlc3Npb24pIHtcclxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbc3RhdHVzLCBzZXNzaW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAqL31cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgPFNpZGViYXIgLz59XHJcbiAgICAgIHshaXNMb2dnZWRJbiAmJiA8TWFpbkhlYWRlciAvPn1cclxuICAgICAgPG1haW4+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJNYWluSGVhZGVyIiwiU2lkZWJhciIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsInByb3BzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJtYWluIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n"));

/***/ })

});