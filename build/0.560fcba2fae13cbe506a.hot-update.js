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
  }, "Dodaj zadanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "fas fa-archive",
    color: "dark",
    small: true,
    onClick: handleFinish
  }, "Zako\u0144cz")), operations.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
/******/ 	__webpack_require__.h = () => ("09150dd4f19898f6ddb6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUozQjtJQUtZLE1BQU0sRUFBRUo7RUFMcEIsRUFqQ0YsQ0FERjtBQTBDRDs7QUFFRCxpRUFBZUwsSUFBZjs7Ozs7Ozs7VUMvRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3BlcmF0aW9ucyB9IGZyb20gXCIuL09wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7IHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2sgfSBmcm9tIFwiLi4vYXBpL3Rhc2tzXCI7XHJcbmltcG9ydCB7IGdldE9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFRhc2soe3RpdGxlLCBkZXNjcmlwdGlvbiwgaWQsIHN0YXR1czogX3N0YXR1cywgb25SZW1vdmVUYXNrfSkge1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShfc3RhdHVzKTtcclxuICBjb25zdCBbb3BlcmF0aW9ucywgc2V0T3BlcmF0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZXJhdGlvbkZvcm0sIHNldE9wZXJhdGlvbkZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0T3BlcmF0aW9ucyhpZCwgc2V0T3BlcmF0aW9ucyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0b2dnbGVPcGVyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlcmF0aW9uRm9ybShwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmluaXNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBzdGF0dXM6IFwiY2xvc2VkXCJcclxuICAgIH07XHJcbiAgICB1cGRhdGVUYXNrKGlkLCB0YXNrLCAoKSA9PiB7XHJcbiAgICAgIHNldFN0YXR1cyhcImNsb3NlZFwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlVGFzayhpZCwgKCkgPT4ge1xyXG4gICAgICBvblJlbW92ZVRhc2soaWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoNT57dGl0bGV9PC9oNT5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57ZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c3RhdHVzID09PSBcIm9wZW5cIiAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlT3BlcmF0aW9uRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIERvZGFqIHphZGFuaWVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiZmFzIGZhLWFyY2hpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaW5pc2h9PlxyXG4gICAgICAgICAgICAgICAgWmFrb8WEY3pcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge29wZXJhdGlvbnMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICA8QnV0dG9uIGljb249e1wiZmFzIGZhLXRyYXNoXCJ9IGNvbG9yPXtcImRhbmdlclwifSBvdXRsaW5lIHNpemU9e1wic21cIn0gb25DbGljaz17aGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCIvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8T3BlcmF0aW9ucyB0YXNrSUQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtPXtvcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICBzZXRGb3JtPXtzZXRPcGVyYXRpb25Gb3JtfVxyXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb25zPXtvcGVyYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzZXRPcGVyYXRpb25zPXtzZXRPcGVyYXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM9e3N0YXR1c30vPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDkxNTBkZDRmMTk4OThmNmRkYjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJCdXR0b24iLCJyZW1vdmVUYXNrIiwidXBkYXRlVGFzayIsImdldE9wZXJhdGlvbnMiLCJUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiX3N0YXR1cyIsInN0YXR1cyIsIm9uUmVtb3ZlVGFzayIsInNldFN0YXR1cyIsIm9wZXJhdGlvbnMiLCJzZXRPcGVyYXRpb25zIiwib3BlcmF0aW9uRm9ybSIsInNldE9wZXJhdGlvbkZvcm0iLCJ0b2dnbGVPcGVyYXRpb25Gb3JtIiwicHJldlN0YXRlIiwiaGFuZGxlRmluaXNoIiwidGFzayIsImhhbmRsZVJlbW92ZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=