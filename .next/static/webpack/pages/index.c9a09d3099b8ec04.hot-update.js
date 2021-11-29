/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_section__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar Page = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                borderRadius: \"lg\",\n                bg: \"red\",\n                p: 3,\n                mb: 6,\n                align: \"center\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Hello, I'm a frontend-developer based on Ukraine\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: {\n                    md: 'flex'\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        flexGrow: 1,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                as: \"h2\",\n                                variant: \"page-title\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                                    lineNumber: 11,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"PetrSasha\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        flexShrink: 0,\n                        mt: {\n                            base: 4,\n                            md: 0\n                        },\n                        ml: {\n                            md: 6\n                        },\n                        textAlign: \"center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            borderColor: \"whiteAlpha.800\",\n                            borderWidth: 2,\n                            borderStyle: \"solid\",\n                            maxWidth: \"100px\",\n                            display: \"inline-block\",\n                            borderRadius: \"full\",\n                            src: \"images/Sasha.jpg\",\n                            alt: \"Profile image\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_section__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\petrov.o.s\\\\Documents\\\\GitHub\\\\portf\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRTtBQUN2Qjs7QUFDM0MsR0FBSyxDQUFDSyxJQUFJLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDaEIsTUFBTSx1RUFDREwsdURBQVM7Ozs7Ozs7O2lGQUNMQyxpREFBRztnQkFBQ0ssWUFBWSxFQUFDLENBQUk7Z0JBQUNDLEVBQUUsRUFBQyxDQUFLO2dCQUFDQyxDQUFDLEVBQUUsQ0FBQztnQkFBRUMsRUFBRSxFQUFFLENBQUM7Z0JBQUVDLEtBQUssRUFBQyxDQUFROzs7Ozs7OzBCQUFDLENBRTVEOztrRkFDQ1QsaURBQUc7Z0JBQUNVLE9BQU8sRUFBRSxDQUFDQztvQkFBQUEsRUFBRSxFQUFDLENBQU07Z0JBQUEsQ0FBQzs7Ozs7Ozs7MEZBQ3BCWCxpREFBRzt3QkFBQ1ksUUFBUSxFQUFFLENBQUM7Ozs7Ozs7O2lHQUNYWCxxREFBTztnQ0FBQ1ksRUFBRSxFQUFDLENBQUk7Z0NBQUNDLE9BQU8sRUFBQyxDQUFZOzs7Ozs7OzBDQUFDLENBRXRDOztpR0FDQ1AsQ0FBQzs7Ozs7Ozs7Ozt5RkFFTFAsaURBQUc7d0JBQ0FlLFVBQVUsRUFBRSxDQUFDO3dCQUNiQyxFQUFFLEVBQUUsQ0FBQ0M7NEJBQUFBLElBQUksRUFBQyxDQUFDOzRCQUFFTixFQUFFLEVBQUMsQ0FBQzt3QkFBQSxDQUFDO3dCQUNsQk8sRUFBRSxFQUFFLENBQUNQOzRCQUFBQSxFQUFFLEVBQUMsQ0FBQzt3QkFBQSxDQUFDO3dCQUFFUSxTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozt1R0FFN0JqQixtREFBSzs0QkFDRmtCLFdBQVcsRUFBQyxDQUFnQjs0QkFDNUJDLFdBQVcsRUFBRSxDQUFDOzRCQUNkQyxXQUFXLEVBQUMsQ0FBTzs0QkFDbkJDLFFBQVEsRUFBQyxDQUFPOzRCQUNoQmIsT0FBTyxFQUFDLENBQWM7NEJBQ3RCTCxZQUFZLEVBQUMsQ0FBTTs0QkFDbkJtQixHQUFHLEVBQUMsQ0FBa0I7NEJBQ3RCQyxHQUFHLEVBQUMsQ0FBZTs7Ozs7Ozs7Ozs7aUZBSTlCdEIsNERBQU87Ozs7Ozs7Ozs7QUFNcEIsQ0FBQztLQXBDS0MsSUFBSTtBQXNDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyLCBCb3ggLCBIZWFkaW5nLCBJbWFnZSwgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgPlxyXG4gICAgICAgICAgICA8Qm94IGJvcmRlclJhZGl1cz0nbGcnIGJnPSdyZWQnIHA9ezN9IG1iPXs2fSBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgSGVsbG8sIEkmYXBvczttIGEgZnJvbnRlbmQtZGV2ZWxvcGVyIGJhc2VkIG9uIFVrcmFpbmVcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT17e21kOidmbGV4J319PlxyXG4gICAgICAgICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gyJyB2YXJpYW50PSdwYWdlLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGV0clNhc2hhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIG10PXt7YmFzZTo0LCBtZDowfX1cclxuICAgICAgICAgICAgICAgICAgICBtbD17e21kOjZ9fSB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPSd3aGl0ZUFscGhhLjgwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlPSdzb2xpZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9JzEwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PSdpbmxpbmUtYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz0nZnVsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdpbWFnZXMvU2FzaGEuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8U2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiQm94IiwiSGVhZGluZyIsIkltYWdlIiwiU2VjdGlvbiIsIlBhZ2UiLCJib3JkZXJSYWRpdXMiLCJiZyIsInAiLCJtYiIsImFsaWduIiwiZGlzcGxheSIsIm1kIiwiZmxleEdyb3ciLCJhcyIsInZhcmlhbnQiLCJmbGV4U2hyaW5rIiwibXQiLCJiYXNlIiwibWwiLCJ0ZXh0QWxpZ24iLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJtYXhXaWR0aCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});