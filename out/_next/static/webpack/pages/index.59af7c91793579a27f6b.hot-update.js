webpackHotUpdate_N_E("pages/index",{

/***/ "./util/getEmail.ts":
/*!**************************!*\
  !*** ./util/getEmail.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {function getEmail(id) {\n  var svg = \"\\n<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n  width=\\\"24\\\" height=\\\"24\\\"\\n  viewBox=\\\"0 0 24 24\\\"\\n  fill=\\\"none\\\" stroke=\\\"currentColor\\\"\\n  stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"\\n  class=\\\"feather feather-mail\\\">\\n  <path d=\\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\\"></path>\\n  <polyline points=\\\"22,6 12,13 2,6\\\"></polyline>\\n</svg>\\n \";\n  var myEmailAlias = \"hello.bartosz\";\n  var placement = document.getElementById(id);\n  placement.innerHTML = \"\\n\".concat(svg, \"   \\n<a href=\\\"mailto:\").concat(myEmailAlias, \"@gmail.com\\\">\").concat(myEmailAlias, \"@gmail.com</a>\\n  \");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getEmail);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9nZXRFbWFpbC50cz80YjdjIl0sIm5hbWVzIjpbImdldEVtYWlsIiwiaWQiLCJzdmciLCJteUVtYWlsQWxpYXMiLCJwbGFjZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLHVEQUFTQSxRQUFULENBQWtCQyxFQUFsQixFQUE4QjtBQUM1QixNQUFNQyxHQUFXLDZaQUFqQjtBQVdBLE1BQU1DLFlBQW9CLEdBQUcsZUFBN0I7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkwsRUFBeEIsQ0FBbEI7QUFDQUcsV0FBUyxDQUFDRyxTQUFWLGVBQ0FMLEdBREEsbUNBRWlCQyxZQUZqQiwwQkFFOENBLFlBRjlDO0FBSUQ7O0FBRWNILHVFQUFmIiwiZmlsZSI6Ii4vdXRpbC9nZXRFbWFpbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEVtYWlsKGlkOiBzdHJpbmcpIHtcbiAgY29uc3Qgc3ZnOiBzdHJpbmcgPSBgXG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIlxuICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItbWFpbFwiPlxuICA8cGF0aCBkPVwiTTQgNGgxNmMxLjEgMCAyIC45IDIgMnYxMmMwIDEuMS0uOSAyLTIgMkg0Yy0xLjEgMC0yLS45LTItMlY2YzAtMS4xLjktMiAyLTJ6XCI+PC9wYXRoPlxuICA8cG9seWxpbmUgcG9pbnRzPVwiMjIsNiAxMiwxMyAyLDZcIj48L3BvbHlsaW5lPlxuPC9zdmc+XG4gYFxuICBjb25zdCBteUVtYWlsQWxpYXM6IHN0cmluZyA9IFwiaGVsbG8uYmFydG9zelwiXG4gIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICBwbGFjZW1lbnQuaW5uZXJIVE1MID0gYFxuJHtzdmd9ICAgXG48YSBocmVmPVwibWFpbHRvOiR7IG15RW1haWxBbGlhcyB9QGdtYWlsLmNvbVwiPiR7IG15RW1haWxBbGlhcyB9QGdtYWlsLmNvbTwvYT5cbiAgYFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRFbWFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/getEmail.ts\n");

/***/ })

})