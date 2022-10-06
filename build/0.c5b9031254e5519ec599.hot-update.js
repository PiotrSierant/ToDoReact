"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Button(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? false : _ref$className,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$outline = _ref.outline,
      outline = _ref$outline === void 0 ? false : _ref$outline,
      icon = _ref.icon,
      onClick = _ref.onClick;
  var btnClasses = ["btn", outline ? "btn-outline-".concat(color) : "btn-".concat(color), small && "btn-sm", className].filter(Boolean).join(" ");
  var iconClasses = [icon, children !== undefined && "ml-1"].filter(Boolean).join(" ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnClasses,
    type: "submit",
    onClick: onClick
  }, children, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: iconClasses
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04b31e52edf87ffc8bc9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNWI5MDMxMjU0ZTU1MTllYzU5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLE1BQVQsT0FBaUg7RUFBQSxJQUFoR0MsUUFBZ0csUUFBaEdBLFFBQWdHO0VBQUEsc0JBQXRGQyxLQUFzRjtFQUFBLElBQXRGQSxLQUFzRiwyQkFBOUUsU0FBOEU7RUFBQSwwQkFBbkVDLFNBQW1FO0VBQUEsSUFBbkVBLFNBQW1FLCtCQUF2RCxLQUF1RDtFQUFBLHNCQUFoREMsS0FBZ0Q7RUFBQSxJQUFoREEsS0FBZ0QsMkJBQXhDLEtBQXdDO0VBQUEsd0JBQWpDQyxPQUFpQztFQUFBLElBQWpDQSxPQUFpQyw2QkFBdkIsS0FBdUI7RUFBQSxJQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0VBQUEsSUFBVkMsT0FBVSxRQUFWQSxPQUFVO0VBQy9HLElBQU1DLFVBQVUsR0FBRyxDQUNqQixLQURpQixFQUVqQkgsT0FBTyx5QkFBa0JILEtBQWxCLGtCQUFtQ0EsS0FBbkMsQ0FGVSxFQUdqQkUsS0FBSyxJQUFJLFFBSFEsRUFJakJELFNBSmlCLEVBS2pCTSxNQUxpQixDQUtWQyxPQUxVLEVBS0RDLElBTEMsQ0FLSSxHQUxKLENBQW5CO0VBT0EsSUFBTUMsV0FBVyxHQUFHLENBQ2xCTixJQURrQixFQUVsQkwsUUFBUSxLQUFLWSxTQUFiLElBQTBCLE1BRlIsRUFHbEJKLE1BSGtCLENBR1hDLE9BSFcsRUFHRkMsSUFIRSxDQUdHLEdBSEgsQ0FBcEI7RUFLQSxvQkFDRTtJQUFRLFNBQVMsRUFBRUgsVUFBbkI7SUFBK0IsSUFBSSxFQUFDLFFBQXBDO0lBQTZDLE9BQU8sRUFBRUQ7RUFBdEQsR0FDR04sUUFESCxFQUVHSyxJQUFJLGlCQUFJO0lBQUcsU0FBUyxFQUFFTTtFQUFkLEVBRlgsQ0FERjtBQU1EOztBQUVELGlFQUFlWixNQUFmOzs7Ozs7OztVQ3ZCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9yZWFjdC8uL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHtjaGlsZHJlbiwgY29sb3IgPSBcInByaW1hcnlcIiwgY2xhc3NOYW1lID0gZmFsc2UsIHNtYWxsID0gZmFsc2UsIG91dGxpbmUgPSBmYWxzZSwgaWNvbiwgb25DbGlja30pIHtcclxuICBjb25zdCBidG5DbGFzc2VzID0gW1xyXG4gICAgXCJidG5cIixcclxuICAgIG91dGxpbmUgPyBgYnRuLW91dGxpbmUtJHtjb2xvcn1gIDogYGJ0bi0ke2NvbG9yfWAsXHJcbiAgICBzbWFsbCAmJiBcImJ0bi1zbVwiLFxyXG4gICAgY2xhc3NOYW1lXHJcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XHJcblxyXG4gIGNvbnN0IGljb25DbGFzc2VzID0gW1xyXG4gICAgaWNvbixcclxuICAgIGNoaWxkcmVuICE9PSB1bmRlZmluZWQgJiYgXCJtbC0xXCJcclxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbGFzc2VzfSB0eXBlPVwic3VibWl0XCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge2ljb24gJiYgPGkgY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30vPn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNGIzMWU1MmVkZjg3ZmZjOGJjOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiY29sb3IiLCJjbGFzc05hbWUiLCJzbWFsbCIsIm91dGxpbmUiLCJpY29uIiwib25DbGljayIsImJ0bkNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImljb25DbGFzc2VzIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==