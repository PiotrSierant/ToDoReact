"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Operation": () => (/* binding */ Operation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Operation(_ref) {
  var description = _ref.description,
      id = _ref.id,
      onRemoveOperation = _ref.onRemoveOperation,
      _timeSpent = _ref.timeSpent,
      status = _ref.status;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      timeSpentForm = _useState2[0],
      setTimeSpentForm = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_timeSpent),
      _useState4 = _slicedToArray(_useState3, 2),
      timeSpent = _useState4[0],
      setTimeSpent = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      timeSpentInput = _useState6[0],
      setTimeSpentInput = _useState6[1];

  var handleTimeSave = function handleTimeSave(e) {
    e.preventDefault();

    if (isNaN(parseInt(timeSpentInput)) || timeSpentInput < 0) {
      return;
    }

    var operation = {
      description: description,
      timeSpent: parseInt(timeSpent) + parseInt(timeSpentInput)
    };
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.updateOperation)(id, operation, function (data) {
      setTimeSpent(data.timeSpent);
      setTimeSpentForm(false);
      setTimeSpentInput("");
    });
  };

  var handleRemove = function handleRemove() {
    (0,_api_operations__WEBPACK_IMPORTED_MODULE_1__.removeOperation)(id, function () {
      onRemoveOperation(id);
    });
  };

  var hours = Math.floor(timeSpent / 60);
  var minutes = timeSpent % 60;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, description, timeSpent > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, hours, "h ", minutes, "m")), timeSpentForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleTimeSave
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    value: timeSpentInput,
    style: {
      width: "12rem"
    },
    onChange: function onChange(e) {
      return setTimeSpentInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    color: "success",
    outline: true,
    icon: "fas fa-save"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    color: "dark",
    outline: true,
    icon: "fas fa-times",
    onClick: function onClick() {
      return setTimeSpentForm(false);
    }
  })))), !timeSpentForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "fas fa-clock",
    color: "success",
    outline: true,
    small: true,
    className: "mr-2",
    onClick: function onClick() {
      return setTimeSpentForm(true);
    }
  }, "Add time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "fas fa-trash",
    color: "danger",
    outline: true,
    small: true,
    onClick: handleRemove
  })));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    color: "info",
    icon: "fas fa-plus-circle"
  }, "Add"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, operations.map(function (operation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operation__WEBPACK_IMPORTED_MODULE_1__.Operation, _extends({
      key: operation.id
    }, operation, {
      onRemoveOperation: handleRemoveOperation,
      status: status
    }));
  })));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f79275efea5988d250ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtJQUFJLFNBQVMsRUFBQztFQUFkLEdBQ0dNLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUF2QixTQUFTO0lBQUEsb0JBQ3ZCLDJEQUFDLGlEQUFEO01BQVcsR0FBRyxFQUFFQSxTQUFTLENBQUNmO0lBQTFCLEdBQWtDZSxTQUFsQztNQUE2QyxpQkFBaUIsRUFBRXFCLHFCQUFoRTtNQUF1RixNQUFNLEVBQUVoQztJQUEvRixHQUR1QjtFQUFBLENBQXhCLENBREgsQ0FuQkYsQ0FERjtBQTJCRDs7Ozs7Ozs7VUN4REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cmVtb3ZlT3BlcmF0aW9uLCB1cGRhdGVPcGVyYXRpb259IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPcGVyYXRpb24oe2Rlc2NyaXB0aW9uLCBpZCwgb25SZW1vdmVPcGVyYXRpb24sIHRpbWVTcGVudDogX3RpbWVTcGVudCwgc3RhdHVzfSkge1xyXG4gIGNvbnN0IFt0aW1lU3BlbnRGb3JtLCBzZXRUaW1lU3BlbnRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGltZVNwZW50LCBzZXRUaW1lU3BlbnRdID0gdXNlU3RhdGUoX3RpbWVTcGVudCk7XHJcbiAgY29uc3QgW3RpbWVTcGVudElucHV0LCBzZXRUaW1lU3BlbnRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGltZVNhdmUgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoaXNOYU4ocGFyc2VJbnQodGltZVNwZW50SW5wdXQpKSB8fCB0aW1lU3BlbnRJbnB1dCA8IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IHtcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHRpbWVTcGVudDogcGFyc2VJbnQodGltZVNwZW50KSArIHBhcnNlSW50KHRpbWVTcGVudElucHV0KVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVPcGVyYXRpb24oaWQsIG9wZXJhdGlvbiwgZGF0YSA9PiB7XHJcbiAgICAgIHNldFRpbWVTcGVudChkYXRhLnRpbWVTcGVudCk7XHJcbiAgICAgIHNldFRpbWVTcGVudEZvcm0oZmFsc2UpO1xyXG4gICAgICBzZXRUaW1lU3BlbnRJbnB1dChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcclxuICAgIHJlbW92ZU9wZXJhdGlvbihpZCwgKCkgPT4ge1xyXG4gICAgICBvblJlbW92ZU9wZXJhdGlvbihpZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodGltZVNwZW50IC8gNjApO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSB0aW1lU3BlbnQgJSA2MDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICB7dGltZVNwZW50ID4gMCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICB7aG91cnN9aCB7bWludXRlc31tXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAge3RpbWVTcGVudEZvcm0gJiYgKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVUaW1lU2F2ZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZVNwZW50SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEycmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGltZVNwZW50SW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17XCJzdWNjZXNzXCJ9IG91dGxpbmUgaWNvbj17XCJmYXMgZmEtc2F2ZVwifS8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17XCJkYXJrXCJ9IG91dGxpbmUgaWNvbj17XCJmYXMgZmEtdGltZXNcIn0gb25DbGljaz17KCkgPT4gc2V0VGltZVNwZW50Rm9ybShmYWxzZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7IXRpbWVTcGVudEZvcm0gJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c3RhdHVzID09PSBcIm9wZW5cIiAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBpY29uPXtcImZhcyBmYS1jbG9ja1wifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcInN1Y2Nlc3NcIn1cclxuICAgICAgICAgICAgICBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibXItMlwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRpbWVTcGVudEZvcm0odHJ1ZSl9PlxyXG4gICAgICAgICAgICAgIEFkZCB0aW1lXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxCdXR0b24gaWNvbj17XCJmYXMgZmEtdHJhc2hcIn0gY29sb3I9e1wiZGFuZ2VyXCJ9IG91dGxpbmUgc21hbGwgb25DbGljaz17aGFuZGxlUmVtb3ZlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdGlvbiB9IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPcGVyYXRpb25zKHt0YXNrSUQsIGZvcm0sIHNldEZvcm0sIG9wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnMsIHN0YXR1c30pIHtcclxuICBjb25zdCBbb3BlcmF0aW9uRGVzY3JpcHRpb24sIHNldE9wZXJhdGlvbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZU5ld09wZXJhdGlvbiA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgb3BlcmF0aW9uID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogb3BlcmF0aW9uRGVzY3JpcHRpb24sXHJcbiAgICAgIHRpbWVTcGVudDogMFxyXG4gICAgfTtcclxuICAgIGNyZWF0ZU9wZXJhdGlvbih0YXNrSUQsIG9wZXJhdGlvbiwgZGF0YSA9PiB7XHJcbiAgICAgIHNldE9wZXJhdGlvbnMocHJldlN0YXRlID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIC4uLnByZXZTdGF0ZVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRGb3JtKGZhbHNlKTtcclxuICAgICAgc2V0T3BlcmF0aW9uRGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVPcGVyYXRpb24gPSBpZCA9PiB7XHJcbiAgICBzZXRPcGVyYXRpb25zKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKG9wZXJhdGlvbiA9PiBvcGVyYXRpb24uaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtmb3JtICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld09wZXJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0T3BlcmF0aW9uRGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfS8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtcImluZm9cIn0gaWNvbj1cImZhcyBmYS1wbHVzLWNpcmNsZVwiPkFkZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICB7b3BlcmF0aW9ucy5tYXAob3BlcmF0aW9uID0+IChcclxuICAgICAgICAgIDxPcGVyYXRpb24ga2V5PXtvcGVyYXRpb24uaWR9IHsuLi5vcGVyYXRpb259IG9uUmVtb3ZlT3BlcmF0aW9uPXtoYW5kbGVSZW1vdmVPcGVyYXRpb259IHN0YXR1cz17c3RhdHVzfS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjc5Mjc1ZWZlYTU5ODhkMjUwZWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInJlbW92ZU9wZXJhdGlvbiIsInVwZGF0ZU9wZXJhdGlvbiIsIkJ1dHRvbiIsIk9wZXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiaWQiLCJvblJlbW92ZU9wZXJhdGlvbiIsIl90aW1lU3BlbnQiLCJ0aW1lU3BlbnQiLCJzdGF0dXMiLCJ0aW1lU3BlbnRGb3JtIiwic2V0VGltZVNwZW50Rm9ybSIsInNldFRpbWVTcGVudCIsInRpbWVTcGVudElucHV0Iiwic2V0VGltZVNwZW50SW5wdXQiLCJoYW5kbGVUaW1lU2F2ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzTmFOIiwicGFyc2VJbnQiLCJvcGVyYXRpb24iLCJkYXRhIiwiaGFuZGxlUmVtb3ZlIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwid2lkdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZU9wZXJhdGlvbiIsIk9wZXJhdGlvbnMiLCJ0YXNrSUQiLCJmb3JtIiwic2V0Rm9ybSIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwib3BlcmF0aW9uRGVzY3JpcHRpb24iLCJzZXRPcGVyYXRpb25EZXNjcmlwdGlvbiIsImhhbmRsZU5ld09wZXJhdGlvbiIsInByZXZTdGF0ZSIsImhhbmRsZVJlbW92ZU9wZXJhdGlvbiIsImZpbHRlciIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=