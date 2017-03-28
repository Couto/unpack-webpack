webpackJsonp([2],{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_es__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Artist__ = __webpack_require__(241);




/* harmony default export */ __webpack_exports__["default"] = function (_ref) {
  var artists = _ref.artists;
  return function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      artists.map(function (artist) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: artist.name },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_es__["Link"],
            { to: '/artist/' + artist.name },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__shared_Artist__["a" /* default */], artist)
          )
        );
      })
    );
  };
};

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = function (_ref) {
  var name = _ref.name,
      photo = _ref.photo;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "figure",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: photo.src, alt: name, width: "250" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "figcaption",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "dl",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dt",
          null,
          "Artist:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dd",
          null,
          name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dt",
          null,
          "Attribution:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dd",
          null,
          photo.attribution
        )
      )
    )
  );
};

/***/ })

});
//# sourceMappingURL=2.18defe24e49a67415472.js.map