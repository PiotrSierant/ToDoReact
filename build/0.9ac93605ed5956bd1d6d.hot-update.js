"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
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

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Operations": () => (/* binding */ Operations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Operations(_ref) {
  var taskID = _ref.taskID,
      form = _ref.form,
      setForm = _ref.setForm,
      operations = _ref.operations,
      setOperations = _ref.setOperations,
      status = _ref.status;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      operationDescription = _useState2[0],
      setOperationDescription = _useState2[1];

  var handleNewOperation = function handleNewOperation(e) {
    e.preventDefault();
    var operation = {
      description: operationDescription,
      timeSpent: 0
    };
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_2__.createOperation)(taskID, operation, function (data) {
      setOperations(function (prevState) {
        return [data].concat(_toConsumableArray(prevState));
      });
      setForm(false);
      setOperationDescription("");
    });
  };

  var handleRemoveOperation = function handleRemoveOperation(id) {
    setOperations(function (prevState) {
      return prevState.filter(function (operation) {
        return operation.id !== id;
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, form && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleNewOperation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Operation description",
    value: operationDescription,
    onChange: function onChange(e) {
      return setOperationDescription(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "info",
    icon: "fas fa-plus-circle"
  }, "Add"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, operations.map(function (operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operation__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: operation.id
    }, operation, {
      onRemoveOperation: handleRemoveOperation,
      status: status
    }));
  })));
}

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Task(_ref) {
  var title = _ref.title,
      description = _ref.description,
      id = _ref.id,
      _status = _ref.status,
      onRemoveTask = _ref.onRemoveTask;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_status),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      operations = _useState4[0],
      setOperations = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      operationForm = _useState6[0],
      setOperationForm = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_4__.getOperations)(id, setOperations);
  }, []);

  var toggleOperationForm = function toggleOperationForm() {
    setOperationForm(function (prevState) {
      return !prevState;
    });
  };

  var handleFinish = function handleFinish() {
    var task = {
      title: title,
      description: description,
      status: "closed"
    };
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.updateTask)(id, task, function () {
      setStatus("closed");
    });
  };

  var handleRemove = function handleRemove() {
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_3__.removeTask)(id, function () {
      onRemoveTask(id);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "fas fa-plus-circle",
    color: "info",
    small: true,
    onClick: toggleOperationForm,
    className: "mr-2"
  }, "Add operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "fas fa-archive",
    color: "dark",
    small: true,
    onClick: handleFinish
  }, "Finish")), operations.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "fas fa-trash",
    color: "danger",
    outline: true,
    size: "sm",
    onClick: handleRemove,
    className: "ml-2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__.Operations, {
    taskID: id,
    form: operationForm,
    setForm: setOperationForm,
    operations: operations,
    setOperations: setOperations,
    status: status
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5bfe0235f339d1f802a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWI7SUFDUSxLQUFLLEVBQUMsTUFEZDtJQUVRLEtBQUssTUFGYjtJQUdRLE9BQU8sRUFBRTJCLG1CQUhqQjtJQUlRLFNBQVMsRUFBQztFQUpsQixtQkFERixlQVNFLDJEQUFDLDJDQUFEO0lBQVEsSUFBSSxFQUFDLGdCQUFiO0lBQ1EsS0FBSyxFQUFDLE1BRGQ7SUFFUSxLQUFLLE1BRmI7SUFHUSxPQUFPLEVBQUVDO0VBSGpCLFlBVEYsQ0FGSixFQW1CRzlCLFVBQVUsQ0FBQ2lDLE1BQVgsS0FBc0IsQ0FBdEIsaUJBQ0QsMkRBQUMsMkNBQUQ7SUFBUSxJQUFJLEVBQUUsY0FBZDtJQUE4QixLQUFLLEVBQUUsUUFBckM7SUFBK0MsT0FBTyxNQUF0RDtJQUF1RCxJQUFJLEVBQUUsSUFBN0Q7SUFBbUUsT0FBTyxFQUFFRCxZQUE1RTtJQUNRLFNBQVMsRUFBQztFQURsQixFQXBCRixDQVBGLENBREYsZUFpQ0UsMkRBQUMsbURBQUQ7SUFBWSxNQUFNLEVBQUVsQixFQUFwQjtJQUNZLElBQUksRUFBRWEsYUFEbEI7SUFFWSxPQUFPLEVBQUVDLGdCQUZyQjtJQUdZLFVBQVUsRUFBRTVCLFVBSHhCO0lBSVksYUFBYSxFQUFFQyxhQUozQjtJQUtZLE1BQU0sRUFBRUM7RUFMcEIsRUFqQ0YsQ0FERjtBQTBDRDs7QUFFRCxpRUFBZW9CLElBQWY7Ozs7Ozs7O1VDL0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3JlYWN0Ly4vanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL3RvZG9yZWFjdC8uL2pzL2NvbXBvbmVudHMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe2NoaWxkcmVuLCBjb2xvciA9IFwicHJpbWFyeVwiLCBjbGFzc05hbWUgPSBmYWxzZSwgc21hbGwgPSBmYWxzZSwgb3V0bGluZSA9IGZhbHNlLCBpY29uLCBvbkNsaWNrfSkge1xyXG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBbXHJcbiAgICBcImJ0blwiLFxyXG4gICAgb3V0bGluZSA/IGBidG4tb3V0bGluZS0ke2NvbG9yfWAgOiBgYnRuLSR7Y29sb3J9YCxcclxuICAgIHNtYWxsICYmIFwiYnRuLXNtXCIsXHJcbiAgICBjbGFzc05hbWVcclxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcclxuXHJcbiAgY29uc3QgaWNvbkNsYXNzZXMgPSBbXHJcbiAgICBpY29uLFxyXG4gICAgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiBcIm1sLTFcIlxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0bkNsYXNzZXN9IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7aWNvbiAmJiA8aSBjbGFzc05hbWU9e2ljb25DbGFzc2VzfS8+fVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi9PcGVyYXRpb25cIjtcclxuaW1wb3J0IHtjcmVhdGVPcGVyYXRpb259IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9wZXJhdGlvbnMoe3Rhc2tJRCwgZm9ybSwgc2V0Rm9ybSwgb3BlcmF0aW9ucywgc2V0T3BlcmF0aW9ucywgc3RhdHVzfSkge1xyXG4gIGNvbnN0IFtvcGVyYXRpb25EZXNjcmlwdGlvbiwgc2V0T3BlcmF0aW9uRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlTmV3T3BlcmF0aW9uID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvcGVyYXRpb24gPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvcGVyYXRpb25EZXNjcmlwdGlvbixcclxuICAgICAgdGltZVNwZW50OiAwXHJcbiAgICB9O1xyXG4gICAgY3JlYXRlT3BlcmF0aW9uKHRhc2tJRCwgb3BlcmF0aW9uLCBkYXRhID0+IHtcclxuICAgICAgc2V0T3BlcmF0aW9ucyhwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgLi4ucHJldlN0YXRlXHJcbiAgICAgICAgXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEZvcm0oZmFsc2UpO1xyXG4gICAgICBzZXRPcGVyYXRpb25EZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZU9wZXJhdGlvbiA9IGlkID0+IHtcclxuICAgIHNldE9wZXJhdGlvbnMocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIob3BlcmF0aW9uID0+IG9wZXJhdGlvbi5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2Zvcm0gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3T3BlcmF0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wZXJhdGlvbkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e1wiaW5mb1wifSBpY29uPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgIHtvcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gKFxyXG4gICAgICAgICAgPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH0gey4uLm9wZXJhdGlvbn0gb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0gc3RhdHVzPXtzdGF0dXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3BlcmF0aW9ucyB9IGZyb20gXCIuL09wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7cmVtb3ZlVGFzaywgdXBkYXRlVGFza30gZnJvbSBcIi4uL2FwaS90YXNrc1wiO1xyXG5pbXBvcnQge2dldE9wZXJhdGlvbnN9IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gVGFzayh7dGl0bGUsIGRlc2NyaXB0aW9uLCBpZCwgc3RhdHVzOiBfc3RhdHVzLCBvblJlbW92ZVRhc2t9KSB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKF9zdGF0dXMpO1xyXG4gIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3BlcmF0aW9uRm9ybSwgc2V0T3BlcmF0aW9uRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRPcGVyYXRpb25zKGlkLCBzZXRPcGVyYXRpb25zKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wZXJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVyYXRpb25Gb3JtKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGaW5pc2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHN0YXR1czogXCJjbG9zZWRcIlxyXG4gICAgfTtcclxuICAgIHVwZGF0ZVRhc2soaWQsIHRhc2ssICgpID0+IHtcclxuICAgICAgc2V0U3RhdHVzKFwiY2xvc2VkXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVUYXNrKGlkLCAoKSA9PiB7XHJcbiAgICAgIG9uUmVtb3ZlVGFzayhpZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzdGF0dXMgPT09IFwib3BlblwiICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJmYXMgZmEtcGx1cy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJmYXMgZmEtYXJjaGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbmlzaH0+XHJcbiAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge29wZXJhdGlvbnMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8QnV0dG9uIGljb249e1wiZmFzIGZhLXRyYXNoXCJ9IGNvbG9yPXtcImRhbmdlclwifSBvdXRsaW5lIHNpemU9e1wic21cIn0gb25DbGljaz17aGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCIvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8T3BlcmF0aW9ucyB0YXNrSUQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtPXtvcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICBzZXRGb3JtPXtzZXRPcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb25zPXtvcGVyYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzZXRPcGVyYXRpb25zPXtzZXRPcGVyYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM9e3N0YXR1c30vPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWJmZTAyMzVmMzM5ZDFmODAyYTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJjaGlsZHJlbiIsImNvbG9yIiwiY2xhc3NOYW1lIiwic21hbGwiLCJvdXRsaW5lIiwiaWNvbiIsIm9uQ2xpY2siLCJidG5DbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJpY29uQ2xhc3NlcyIsInVuZGVmaW5lZCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uIiwiY3JlYXRlT3BlcmF0aW9uIiwiT3BlcmF0aW9ucyIsInRhc2tJRCIsImZvcm0iLCJzZXRGb3JtIiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJzdGF0dXMiLCJvcGVyYXRpb25EZXNjcmlwdGlvbiIsInNldE9wZXJhdGlvbkRlc2NyaXB0aW9uIiwiaGFuZGxlTmV3T3BlcmF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3BlcmF0aW9uIiwiZGVzY3JpcHRpb24iLCJ0aW1lU3BlbnQiLCJkYXRhIiwicHJldlN0YXRlIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInVzZUVmZmVjdCIsInJlbW92ZVRhc2siLCJ1cGRhdGVUYXNrIiwiZ2V0T3BlcmF0aW9ucyIsIlRhc2siLCJ0aXRsZSIsIl9zdGF0dXMiLCJvblJlbW92ZVRhc2siLCJzZXRTdGF0dXMiLCJvcGVyYXRpb25Gb3JtIiwic2V0T3BlcmF0aW9uRm9ybSIsInRvZ2dsZU9wZXJhdGlvbkZvcm0iLCJoYW5kbGVGaW5pc2giLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==