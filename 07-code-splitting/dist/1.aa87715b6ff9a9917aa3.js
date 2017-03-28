webpackJsonp([1],{

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Release__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Artist__ = __webpack_require__(241);




/* harmony default export */ __webpack_exports__["default"] = function (_ref) {
  var artist = _ref.artist;
  return function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__shared_Artist__["a" /* default */], artist),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        null,
        artist.releases.map(function (release) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: release.name },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Release__["a" /* default */], release)
          );
        })
      )
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

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = function (_ref) {
  var name = _ref.name,
      cover = _ref.cover,
      year = _ref.year;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "figure",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: cover, alt: name, width: "250px" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "figcaption",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "dl",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dt",
          null,
          "Release:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dd",
          null,
          name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dt",
          null,
          "Year:"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "dd",
          null,
          year
        )
      )
    )
  );
};

/***/ })

});
//# sourceMappingURL=1.aa87715b6ff9a9917aa3.js.map