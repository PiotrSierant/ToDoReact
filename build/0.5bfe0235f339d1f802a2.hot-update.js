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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    color: "info",
    icon: "fas fa-plus-circle"
  }, "Add task"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3782a38b914ee5867f1e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41YmZlMDIzNWYzMzlkMWY4MDJhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNJLE9BQVQsT0FBOEI7RUFBQSxJQUFaQyxTQUFZLFFBQVpBLFNBQVk7O0VBQzVCLGdCQUEwQkosK0NBQVEsQ0FBQyxFQUFELENBQWxDO0VBQUE7RUFBQSxJQUFPSyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBc0NOLCtDQUFRLENBQUMsRUFBRCxDQUE5QztFQUFBO0VBQUEsSUFBT08sV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUMsRUFBSTtJQUN6QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0EsSUFBTUMsSUFBSSxHQUFHO01BQ1hQLEtBQUssRUFBTEEsS0FEVztNQUVYRSxXQUFXLEVBQVhBLFdBRlc7TUFHWE0sTUFBTSxFQUFFO0lBSEcsQ0FBYjtJQUtBWCxzREFBVSxDQUFDVSxJQUFELEVBQU9SLFNBQVAsQ0FBVjtFQUNELENBUkQ7O0VBVUEsb0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUksU0FBUyxFQUFDO0VBQWQsY0FERixlQUVFO0lBQU0sUUFBUSxFQUFFSztFQUFoQixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFDTyxTQUFTLEVBQUMsY0FEakI7SUFFTyxJQUFJLEVBQUMsT0FGWjtJQUdPLFdBQVcsRUFBQyxPQUhuQjtJQUlPLEtBQUssRUFBRUosS0FKZDtJQUtPLFFBQVEsRUFBRSxrQkFBQUssQ0FBQztNQUFBLE9BQUlKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBWjtJQUFBO0VBTGxCLEVBREYsQ0FERixlQVNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUNPLFNBQVMsRUFBQyxjQURqQjtJQUVPLElBQUksRUFBQyxhQUZaO0lBR08sV0FBVyxFQUFDLGFBSG5CO0lBSU8sS0FBSyxFQUFFUixXQUpkO0lBS08sUUFBUSxFQUFFLGtCQUFBRyxDQUFDO01BQUEsT0FBSUYsY0FBYyxDQUFDRSxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtJQUFBO0VBTGxCLEVBREYsQ0FURixlQWlCRSwyREFBQywyQ0FBRDtJQUFRLEtBQUssRUFBRSxNQUFmO0lBQXVCLElBQUksRUFBRTtFQUE3QixjQWpCRixDQUZGLENBREYsQ0FERjtBQTBCRDs7QUFFRCxpRUFBZVosT0FBZjs7Ozs7Ozs7VUM5Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL05ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQge2NyZWF0ZVRhc2t9IGZyb20gXCIuLi9hcGkvdGFza3NcIjtcclxuXHJcbmZ1bmN0aW9uIE5ld1Rhc2soe29uTmV3VGFza30pIHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRhc2sgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgc3RhdHVzOiBcIm9wZW5cIlxyXG4gICAgfTtcclxuICAgIGNyZWF0ZVRhc2sodGFzaywgb25OZXdUYXNrKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRUYXNrfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj17XCJpbmZvXCJ9IGljb249e1wiZmFzIGZhLXBsdXMtY2lyY2xlXCJ9PkFkZCB0YXNrPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzc4MmEzOGI5MTRlZTU4NjdmMWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsImNyZWF0ZVRhc2siLCJOZXdUYXNrIiwib25OZXdUYXNrIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJoYW5kbGVBZGRUYXNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFzayIsInN0YXR1cyIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==