"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function NewTask(_ref) {
  var onNewTask = _ref.onNewTask;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var handleAddTask = function handleAddTask(e) {
    e.preventDefault();
    var task = {
      title: title,
      description: description,
      status: "open"
    };
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(task, onNewTask);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-title"
  }, "New task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleAddTask
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "title",
    placeholder: "Title",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "description",
    placeholder: "Description",
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "info",
    icon: "fas fa-plus-circle"
  }, "Add task"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);

/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "success",
    outline: true,
    icon: "fas fa-save"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "dark",
    outline: true,
    icon: "fas fa-times",
    onClick: function onClick() {
      return setTimeSpentForm(false);
    }
  })))), !timeSpentForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "fas fa-clock",
    color: "success",
    outline: true,
    small: true,
    className: "mr-2",
    onClick: function onClick() {
      return setTimeSpentForm(true);
    }
  }, "Add time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "fas fa-trash",
    color: "danger",
    outline: true,
    small: true,
    onClick: handleRemove
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("738deb75abf1b499721f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxrQkFBQTVCLENBQUM7TUFBQSxPQUFJaUIsaUJBQWlCLENBQUNqQixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtJQUFBO0VBTGxCLEVBREYsZUFPRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLDJEQUFDLCtDQUFEO0lBQVEsS0FBSyxFQUFFLFNBQWY7SUFBMEIsT0FBTyxNQUFqQztJQUFrQyxJQUFJLEVBQUU7RUFBeEMsRUFERixlQUVFLDJEQUFDLCtDQUFEO0lBQVEsS0FBSyxFQUFFLE1BQWY7SUFBdUIsT0FBTyxNQUE5QjtJQUErQixJQUFJLEVBQUUsY0FBckM7SUFBcUQsT0FBTyxFQUFFO01BQUEsT0FBTVMsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtJQUFBO0VBQTlELEVBRkYsQ0FQRixDQURGLENBWkosRUE0QkcsQ0FBQ0QsYUFBRCxpQkFDQyx3RUFDR1YsTUFBTSxLQUFLLE1BQVgsaUJBQ0MsMkRBQUMsK0NBQUQ7SUFDRSxJQUFJLEVBQUUsY0FEUjtJQUVFLEtBQUssRUFBRSxTQUZUO0lBR0UsT0FBTyxNQUhUO0lBSUUsS0FBSyxNQUpQO0lBS0UsU0FBUyxFQUFFLE1BTGI7SUFNRSxPQUFPLEVBQUU7TUFBQSxPQUFNVyxnQkFBZ0IsQ0FBQyxJQUFELENBQXRCO0lBQUE7RUFOWCxjQUZKLGVBWUUsMkRBQUMsK0NBQUQ7SUFBUSxJQUFJLEVBQUUsY0FBZDtJQUE4QixLQUFLLEVBQUUsUUFBckM7SUFBK0MsT0FBTyxNQUF0RDtJQUF1RCxLQUFLLE1BQTVEO0lBQTZELE9BQU8sRUFBRVM7RUFBdEUsRUFaRixDQTdCSixDQURGO0FBK0NEOztBQUVELGlFQUFlZixTQUFmOzs7Ozs7OztVQ3RGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9yZWFjdC8uL2pzL2NvbXBvbmVudHMvTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IHtjcmVhdGVUYXNrfSBmcm9tIFwiLi4vYXBpL3Rhc2tzXCI7XHJcblxyXG5mdW5jdGlvbiBOZXdUYXNrKHtvbk5ld1Rhc2t9KSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUYXNrID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0YXNrID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHN0YXR1czogXCJvcGVuXCJcclxuICAgIH07XHJcbiAgICBjcmVhdGVUYXNrKHRhc2ssIG9uTmV3VGFzayk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5ldyB0YXNrPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQWRkVGFza30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9e1wiaW5mb1wifSBpY29uPXtcImZhcyBmYS1wbHVzLWNpcmNsZVwifT5BZGQgdGFzazwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtyZW1vdmVPcGVyYXRpb24sIHVwZGF0ZU9wZXJhdGlvbn0gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBPcGVyYXRpb24oe2Rlc2NyaXB0aW9uLCBpZCwgb25SZW1vdmVPcGVyYXRpb24sIHRpbWVTcGVudDogX3RpbWVTcGVudCwgc3RhdHVzfSkge1xyXG4gIGNvbnN0IFt0aW1lU3BlbnRGb3JtLCBzZXRUaW1lU3BlbnRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGltZVNwZW50LCBzZXRUaW1lU3BlbnRdID0gdXNlU3RhdGUoX3RpbWVTcGVudCk7XHJcbiAgY29uc3QgW3RpbWVTcGVudElucHV0LCBzZXRUaW1lU3BlbnRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGltZVNhdmUgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoaXNOYU4ocGFyc2VJbnQodGltZVNwZW50SW5wdXQpKSB8fCB0aW1lU3BlbnRJbnB1dCA8IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IHtcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHRpbWVTcGVudDogcGFyc2VJbnQodGltZVNwZW50KSArIHBhcnNlSW50KHRpbWVTcGVudElucHV0KVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVPcGVyYXRpb24oaWQsIG9wZXJhdGlvbiwgZGF0YSA9PiB7XHJcbiAgICAgIHNldFRpbWVTcGVudChkYXRhLnRpbWVTcGVudCk7XHJcbiAgICAgIHNldFRpbWVTcGVudEZvcm0oZmFsc2UpO1xyXG4gICAgICBzZXRUaW1lU3BlbnRJbnB1dChcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcclxuICAgIHJlbW92ZU9wZXJhdGlvbihpZCwgKCkgPT4ge1xyXG4gICAgICBvblJlbW92ZU9wZXJhdGlvbihpZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodGltZVNwZW50IC8gNjApO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSB0aW1lU3BlbnQgJSA2MDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICB7dGltZVNwZW50ID4gMCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICB7aG91cnN9aCB7bWludXRlc31tXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAge3RpbWVTcGVudEZvcm0gJiYgKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVUaW1lU2F2ZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZVNwZW50SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEycmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGltZVNwZW50SW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17XCJzdWNjZXNzXCJ9IG91dGxpbmUgaWNvbj17XCJmYXMgZmEtc2F2ZVwifS8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17XCJkYXJrXCJ9IG91dGxpbmUgaWNvbj17XCJmYXMgZmEtdGltZXNcIn0gb25DbGljaz17KCkgPT4gc2V0VGltZVNwZW50Rm9ybShmYWxzZSl9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7IXRpbWVTcGVudEZvcm0gJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c3RhdHVzID09PSBcIm9wZW5cIiAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBpY29uPXtcImZhcyBmYS1jbG9ja1wifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcInN1Y2Nlc3NcIn1cclxuICAgICAgICAgICAgICBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibXItMlwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRpbWVTcGVudEZvcm0odHJ1ZSl9PlxyXG4gICAgICAgICAgICAgIEFkZCB0aW1lXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxCdXR0b24gaWNvbj17XCJmYXMgZmEtdHJhc2hcIn0gY29sb3I9e1wiZGFuZ2VyXCJ9IG91dGxpbmUgc21hbGwgb25DbGljaz17aGFuZGxlUmVtb3ZlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MzhkZWI3NWFiZjFiNDk5NzIxZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiY3JlYXRlVGFzayIsIk5ld1Rhc2siLCJvbk5ld1Rhc2siLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImhhbmRsZUFkZFRhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXNrIiwic3RhdHVzIiwidGFyZ2V0IiwidmFsdWUiLCJyZW1vdmVPcGVyYXRpb24iLCJ1cGRhdGVPcGVyYXRpb24iLCJPcGVyYXRpb24iLCJpZCIsIm9uUmVtb3ZlT3BlcmF0aW9uIiwiX3RpbWVTcGVudCIsInRpbWVTcGVudCIsInRpbWVTcGVudEZvcm0iLCJzZXRUaW1lU3BlbnRGb3JtIiwic2V0VGltZVNwZW50IiwidGltZVNwZW50SW5wdXQiLCJzZXRUaW1lU3BlbnRJbnB1dCIsImhhbmRsZVRpbWVTYXZlIiwiaXNOYU4iLCJwYXJzZUludCIsIm9wZXJhdGlvbiIsImRhdGEiLCJoYW5kbGVSZW1vdmUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=