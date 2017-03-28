webpackJsonp([5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_es__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Root__ = __webpack_require__(113);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






var routes = {
  component: __WEBPACK_IMPORTED_MODULE_2__Root__["a" /* default */],
  childRoutes: [{
    path: '/',
    getComponent: function getComponent(location, cb) {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 240)).then(function (module) {
        return cb(null, module.default);
      }).catch(cb);
    }
  }, {
    path: 'about',
    getComponent: function getComponent(location, cb) {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 237)).then(function (module) {
        return cb(null, module.default);
      }).catch(cb);
    }
  }, {
    path: 'artists',
    getComponent: function getComponent(location, cb) {
      return Promise.all([__webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 239)), __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 112))]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            module = _ref2[0],
            data = _ref2[1];

        return cb(null, module.default({ artists: data }));
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }, {
    path: 'artist/:name',
    getComponent: function getComponent(location, cb) {
      return Promise.all([__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 238)), __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 112))]).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            module = _ref4[0],
            data = _ref4[1];

        return [module, data.filter(function (a) {
          return a.name.toLowerCase() === location.params.name.toLowerCase();
        }).pop()];
      }).then(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            module = _ref6[0],
            data = _ref6[1];

        return cb(null, module.default({ artist: data }));
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }]
};

/* harmony default export */ __webpack_exports__["a"] = function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_es__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router_es__["browserHistory"], routes: routes });
};

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_es__ = __webpack_require__(42);



/* harmony default export */ __webpack_exports__["a"] = function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_es__["Link"],
            { to: '/' },
            'Home'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_es__["Link"],
            { to: '/about' },
            'About'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router_es__["Link"],
            { to: '/artists' },
            'Artists'
          )
        )
      )
    ),
    children
  );
};

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_jsx__ = __webpack_require__(111);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes_jsx__["a" /* default */], null), document.getElementById('app'));

/***/ })

},[235]);
//# sourceMappingURL=main.5106ad1809a16d466649.js.map