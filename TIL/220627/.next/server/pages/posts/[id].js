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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/chogyejin/Files/programmers-school/TIL/220627/pages/posts/[id].tsx\";\n\n\n\nconst PostPage = ({\n  post\n}) => {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: post.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  const postId = context.query.id;\n\n  try {\n    const {\n      data: post\n    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://jsonplaceholder.typicode.com/posts/${postId}`);\n    return {\n      props: {\n        post\n      }\n    };\n  } catch (error) {\n    var _error$response;\n\n    if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error) && ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 404) {\n      return {\n        notFound: true\n      };\n    } // 404 에러 아니어서 notFound 보여주는 거 아니면 home으로 redirect\n\n\n    return {\n      redirect: {\n        destination: \"/\",\n        permanent: false\n      }\n    };\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQVFBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUE2QjtBQUM1QyxTQUNFO0FBQUEsZUFDRTtBQUFBLGdCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUEsZ0JBQU1ELElBQUksQ0FBQ0U7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTTyxNQUFNQyxrQkFBa0IsR0FBRyxNQUFPQyxPQUFQLElBQW9DO0FBQ3BFLFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEVBQTdCOztBQUVBLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBLElBQUksRUFBRVI7QUFBUixRQUFpQixNQUFNRixnREFBQSxDQUMxQiw4Q0FBNkNPLE1BQU8sRUFEMUIsQ0FBN0I7QUFJQSxXQUFPO0FBQ0xLLE1BQUFBLEtBQUssRUFBRTtBQUFFVixRQUFBQTtBQUFGO0FBREYsS0FBUDtBQUdELEdBUkQsQ0FRRSxPQUFPVyxLQUFQLEVBQWM7QUFBQTs7QUFDZCxRQUFJYix5REFBQSxDQUFtQmEsS0FBbkIsS0FBNkIsb0JBQUFBLEtBQUssQ0FBQ0UsUUFBTixvRUFBZ0JDLE1BQWhCLE1BQTJCLEdBQTVELEVBQWlFO0FBQy9ELGFBQU87QUFDTEMsUUFBQUEsUUFBUSxFQUFFO0FBREwsT0FBUDtBQUdELEtBTGEsQ0FPZDs7O0FBQ0EsV0FBTztBQUNMQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkMsUUFBQUEsV0FBVyxFQUFFLEdBREw7QUFFUkMsUUFBQUEsU0FBUyxFQUFFO0FBRkg7QUFETCxLQUFQO0FBTUQ7QUFDRixDQTFCTTtBQTRCUCxpRUFBZW5CLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yMjA2MjcvLi9wYWdlcy9wb3N0cy9baWRdLnRzeD8yMWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcblxuaW50ZXJmYWNlIFBvc3RQYWdlUHJvcHMge1xuICBwb3N0OiBQb3N0O1xufVxuXG5jb25zdCBQb3N0UGFnZSA9ICh7IHBvc3QgfTogUG9zdFBhZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDxkaXY+e3Bvc3QuYm9keX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucXVlcnkuaWQ7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGE6IHBvc3QgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwb3N0SWR9YFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgcG9zdCB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikgJiYgZXJyb3IucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gNDA0IOyXkOufrCDslYTri4jslrTshJwgbm90Rm91bmQg67O07Jes7KO864qUIOqxsCDslYTri4jrqbQgaG9tZeycvOuhnCByZWRpcmVjdFxuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUG9zdFBhZ2UiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiZ2V0IiwicHJvcHMiLCJlcnJvciIsImlzQXhpb3NFcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwibm90Rm91bmQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

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