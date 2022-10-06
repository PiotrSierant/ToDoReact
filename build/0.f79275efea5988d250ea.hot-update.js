"use strict";
self["webpackHotUpdatetodoreact"](0,{

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
/******/ 	__webpack_require__.h = () => ("a0abe03c1809a3a6fc89")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBSjNCO0lBS1ksTUFBTSxFQUFFSjtFQUxwQixFQWpDRixDQURGO0FBMENEOztBQUVELGlFQUFlTCxJQUFmOzs7Ozs7OztVQy9FQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9yZWFjdC8uL2pzL2NvbXBvbmVudHMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25zIH0gZnJvbSBcIi4vT3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IHsgcmVtb3ZlVGFzaywgdXBkYXRlVGFzayB9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcclxuaW1wb3J0IHsgZ2V0T3BlcmF0aW9ucyB9IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gVGFzayh7dGl0bGUsIGRlc2NyaXB0aW9uLCBpZCwgc3RhdHVzOiBfc3RhdHVzLCBvblJlbW92ZVRhc2t9KSB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKF9zdGF0dXMpO1xyXG4gIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3BlcmF0aW9uRm9ybSwgc2V0T3BlcmF0aW9uRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRPcGVyYXRpb25zKGlkLCBzZXRPcGVyYXRpb25zKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wZXJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVyYXRpb25Gb3JtKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGaW5pc2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHN0YXR1czogXCJjbG9zZWRcIlxyXG4gICAgfTtcclxuICAgIHVwZGF0ZVRhc2soaWQsIHRhc2ssICgpID0+IHtcclxuICAgICAgc2V0U3RhdHVzKFwiY2xvc2VkXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVUYXNrKGlkLCAoKSA9PiB7XHJcbiAgICAgIG9uUmVtb3ZlVGFzayhpZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzdGF0dXMgPT09IFwib3BlblwiICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJmYXMgZmEtcGx1cy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJmYXMgZmEtYXJjaGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbmlzaH0+XHJcbiAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge29wZXJhdGlvbnMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8QnV0dG9uIGljb249e1wiZmFzIGZhLXRyYXNoXCJ9IGNvbG9yPXtcImRhbmdlclwifSBvdXRsaW5lIHNpemU9e1wic21cIn0gb25DbGljaz17aGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCIvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8T3BlcmF0aW9ucyB0YXNrSUQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtPXtvcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICBzZXRGb3JtPXtzZXRPcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb25zPXtvcGVyYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzZXRPcGVyYXRpb25zPXtzZXRPcGVyYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM9e3N0YXR1c30vPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTBhYmUwM2MxODA5YTNhNmZjODlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJCdXR0b24iLCJyZW1vdmVUYXNrIiwidXBkYXRlVGFzayIsImdldE9wZXJhdGlvbnMiLCJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiX3N0YXR1cyIsInN0YXR1cyIsIm9uUmVtb3ZlVGFzayIsInNldFN0YXR1cyIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwib3BlcmF0aW9uRm9ybSIsInNldE9wZXJhdGlvbkZvcm0iLCJ0b2dnbGVPcGVyYXRpb25Gb3JtIiwicHJldlN0YXRlIiwiaGFuZGxlRmluaXNoIiwidGFzayIsImhhbmRsZVJlbW92ZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=