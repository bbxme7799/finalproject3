"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./components/AuthCheck.js":
/*!*********************************!*\
  !*** ./components/AuthCheck.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthCheck; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AuthCheck() {\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    console.log(\"\\uD83D\\uDE80 ~ file: layout.js:9 ~ Layout ~ session:\", session);\n    const [isLoggedIn, setIsLoggedIn] = useState(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"authenticated\" && session) {\n            setIsLoggedIn(true);\n        } else {\n            router.push(\"/users/login\");\n        }\n    }, [\n        status,\n        session,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Finalproject\\\\project\\\\components\\\\AuthCheck.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthCheck, \"m/zPmt0QRfxSMWUL/7maNWPs2io=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthCheck;\nvar _c;\n$RefreshReg$(_c, \"AuthCheck\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhDaGVjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNNO0FBQ0s7QUFFOUIsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR0osMkRBQVVBO0lBQzVDSyxRQUFRQyxHQUFHLENBQUMsd0RBQThDSDtJQUMxRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0MsU0FBUztJQUM3QyxNQUFNQyxTQUFTWCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sV0FBVyxtQkFBbUJELFNBQVM7WUFDekNLLGNBQWM7UUFDaEIsT0FBTztZQUNMRSxPQUFPQyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ1A7UUFBUUQ7UUFBU087S0FBTztJQUU1QixxQkFDRSw4REFBQ0U7UUFBSUMsT0FBTTs7Ozs7O0FBSWY7R0FuQndCWjs7UUFDWUQsdURBQVVBO1FBRzdCRCxrREFBU0E7OztLQUpGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dGhDaGVjay5qcz80ODkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhDaGVjaygpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGxheW91dC5qczo5IH4gTGF5b3V0IH4gc2Vzc2lvbjpcIiwgc2Vzc2lvbik7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIgJiYgc2Vzc2lvbikge1xyXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvdXNlcnMvbG9naW5cIik7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1cywgc2Vzc2lvbiwgcm91dGVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgZmxleC1hdXRvIGZsZXgtc2hyaW5rLTAgYW50aWFsaWFzZWQgYmctZ3JheS01MCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgIHsvKiDguYDguJnguLfguYnguK3guKvguLLguK3guLfguYjguJkg4LmGICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlU2Vzc2lvbiIsIkF1dGhDaGVjayIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJwdXNoIiwiZGl2IiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AuthCheck.js\n"));

/***/ })

});