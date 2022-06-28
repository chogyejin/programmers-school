"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/chogyejin/Files/programmers-school/TIL/220627/pages/posts/[id].tsx\";\n\n\n\nconst PostPage = ({\n  post\n}) => {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: post.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  const postId = context.query.id;\n\n  try {\n    const {\n      data: post\n    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get( // `https://jsonplaceholder.typicode.com/posts/${postId}`\n    `http://localhost:3000/api/posts/${postId}`);\n    return {\n      props: {\n        post\n      }\n    };\n  } catch (error) {\n    var _error$response;\n\n    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error) && ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 404) {\n      return {\n        notFound: true\n      };\n    } // 404 에러 아니어서 notFound 보여주는 거 아니면 home으로 redirect\n\n\n    return {\n      redirect: {\n        destination: \"/\",\n        permanent: false\n      }\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQVFBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUE2QjtBQUM1QyxTQUNFO0FBQUEsZUFDRTtBQUFBLGdCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUEsZ0JBQU1ELElBQUksQ0FBQ0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTTyxNQUFNQyxrQkFBa0IsR0FBRyxNQUFPQyxPQUFQLElBQW9DO0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEVBQTdCOztBQUVBLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBLElBQUksRUFBRVI7QUFBUixRQUFpQixNQUFNRixnREFBQSxFQUMzQjtBQUNDLHVDQUFrQ08sTUFBTyxFQUZmLENBQTdCO0FBS0EsV0FBTztBQUNMSyxNQUFBQSxLQUFLLEVBQUU7QUFBRVYsUUFBQUE7QUFBRjtBQURGLEtBQVA7QUFHRCxHQVRELENBU0UsT0FBT1csS0FBUCxFQUFjO0FBQUE7O0FBQ2QsUUFBSWIseURBQUEsQ0FBbUJhLEtBQW5CLEtBQTZCLG9CQUFBQSxLQUFLLENBQUNFLFFBQU4sb0VBQWdCQyxNQUFoQixNQUEyQixHQUE1RCxFQUFpRTtBQUMvRCxhQUFPO0FBQ0xDLFFBQUFBLFFBQVEsRUFBRTtBQURMLE9BQVA7QUFHRCxLQUxhLENBT2Q7OztBQUNBLFdBQU87QUFDTEMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLFdBQVcsRUFBRSxHQURMO0FBRVJDLFFBQUFBLFNBQVMsRUFBRTtBQUZIO0FBREwsS0FBUDtBQU1EO0FBQ0YsQ0EzQk07QUE2QlAsaUVBQWVuQixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMjIwNjI3Ly4vcGFnZXMvcG9zdHMvW2lkXS50c3g/MjFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5cbmludGVyZmFjZSBQb3N0UGFnZVByb3BzIHtcbiAgcG9zdDogUG9zdDtcbn1cblxuY29uc3QgUG9zdFBhZ2UgPSAoeyBwb3N0IH06IFBvc3RQYWdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2Pntwb3N0LmJvZHl9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xuICBjb25zdCBwb3N0SWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhOiBwb3N0IH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAvLyBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdElkfWBcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzLyR7cG9zdElkfWBcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHBvc3QgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpICYmIGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIDQwNCDsl5Drn6wg7JWE64uI7Ja07IScIG5vdEZvdW5kIOuztOyXrOyjvOuKlCDqsbAg7JWE64uI66m0IGhvbWXsnLzroZwgcmVkaXJlY3RcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlBvc3RQYWdlIiwicG9zdCIsInRpdGxlIiwiYm9keSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwiZGF0YSIsImdldCIsInByb3BzIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIm5vdEZvdW5kIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();