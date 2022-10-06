"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

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
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "fas fa-plus-circle",
    color: "info",
    small: true,
    onClick: toggleOperationForm,
    className: "mr-2"
  }, "Add operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "fas fa-archive",
    color: "dark",
    small: true,
    onClick: handleFinish
  }, "Finish")), operations.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "fas fa-trash",
    color: "danger",
    outline: true,
    size: "sm",
    onClick: handleRemove,
    className: "ml-2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/******/ 	__webpack_require__.h = () => ("9ac93605ed5956bd1d6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxTQUFTLEVBQUM7RUFBZixnQkFDRSxxRkFDRSx1RUFBS1UsS0FBTCxDQURGLGVBRUU7SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUEwQ2YsV0FBMUMsQ0FGRixDQURGLGVBT0Usd0VBQ0dQLE1BQU0sS0FBSyxNQUFYLGlCQUNDLHVJQUNFLDJEQUFDLCtDQUFEO0lBQVEsSUFBSSxFQUFDLG9CQUFiO0lBQ1EsS0FBSyxFQUFDLE1BRGQ7SUFFUSxLQUFLLE1BRmI7SUFHUSxPQUFPLEVBQUU0QixtQkFIakI7SUFJUSxTQUFTLEVBQUM7RUFKbEIsbUJBREYsZUFTRSwyREFBQywrQ0FBRDtJQUFRLElBQUksRUFBQyxnQkFBYjtJQUNRLEtBQUssRUFBQyxNQURkO0lBRVEsS0FBSyxNQUZiO0lBR1EsT0FBTyxFQUFFQztFQUhqQixZQVRGLENBRkosRUFtQkcvQixVQUFVLENBQUNrQyxNQUFYLEtBQXNCLENBQXRCLGlCQUNELDJEQUFDLCtDQUFEO0lBQVEsSUFBSSxFQUFFLGNBQWQ7SUFBOEIsS0FBSyxFQUFFLFFBQXJDO0lBQStDLE9BQU8sTUFBdEQ7SUFBdUQsSUFBSSxFQUFFLElBQTdEO0lBQW1FLE9BQU8sRUFBRUQsWUFBNUU7SUFDUSxTQUFTLEVBQUM7RUFEbEIsRUFwQkYsQ0FQRixDQURGLGVBaUNFLDJEQUFDLG1EQUFEO0lBQVksTUFBTSxFQUFFbkIsRUFBcEI7SUFDWSxJQUFJLEVBQUVjLGFBRGxCO0lBRVksT0FBTyxFQUFFQyxnQkFGckI7SUFHWSxVQUFVLEVBQUU3QixVQUh4QjtJQUlZLGFBQWEsRUFBRUMsYUFKM0I7SUFLWSxNQUFNLEVBQUVDO0VBTHBCLEVBakNGLENBREY7QUEwQ0Q7O0FBRUQsaUVBQWVxQixJQUFmOzs7Ozs7OztVQy9FQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9yZWFjdC8uL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPcGVyYXRpb24gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7Y3JlYXRlT3BlcmF0aW9ufSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIE9wZXJhdGlvbnMoe3Rhc2tJRCwgZm9ybSwgc2V0Rm9ybSwgb3BlcmF0aW9ucywgc2V0T3BlcmF0aW9ucywgc3RhdHVzfSkge1xyXG4gIGNvbnN0IFtvcGVyYXRpb25EZXNjcmlwdGlvbiwgc2V0T3BlcmF0aW9uRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlTmV3T3BlcmF0aW9uID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvcGVyYXRpb24gPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBvcGVyYXRpb25EZXNjcmlwdGlvbixcclxuICAgICAgdGltZVNwZW50OiAwXHJcbiAgICB9O1xyXG4gICAgY3JlYXRlT3BlcmF0aW9uKHRhc2tJRCwgb3BlcmF0aW9uLCBkYXRhID0+IHtcclxuICAgICAgc2V0T3BlcmF0aW9ucyhwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgLi4ucHJldlN0YXRlXHJcbiAgICAgICAgXTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEZvcm0oZmFsc2UpO1xyXG4gICAgICBzZXRPcGVyYXRpb25EZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZU9wZXJhdGlvbiA9IGlkID0+IHtcclxuICAgIHNldE9wZXJhdGlvbnMocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIob3BlcmF0aW9uID0+IG9wZXJhdGlvbi5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2Zvcm0gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3T3BlcmF0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wZXJhdGlvbkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e1wiaW5mb1wifSBpY29uPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+QWRkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgIHtvcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gKFxyXG4gICAgICAgICAgPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH0gey4uLm9wZXJhdGlvbn0gb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0gc3RhdHVzPXtzdGF0dXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPcGVyYXRpb25zIGZyb20gXCIuL09wZXJhdGlvbnNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IHtyZW1vdmVUYXNrLCB1cGRhdGVUYXNrfSBmcm9tIFwiLi4vYXBpL3Rhc2tzXCI7XHJcbmltcG9ydCB7Z2V0T3BlcmF0aW9uc30gZnJvbSBcIi4uL2FwaS9vcGVyYXRpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBUYXNrKHt0aXRsZSwgZGVzY3JpcHRpb24sIGlkLCBzdGF0dXM6IF9zdGF0dXMsIG9uUmVtb3ZlVGFza30pIHtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoX3N0YXR1cyk7XHJcbiAgY29uc3QgW29wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcGVyYXRpb25Gb3JtLCBzZXRPcGVyYXRpb25Gb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE9wZXJhdGlvbnMoaWQsIHNldE9wZXJhdGlvbnMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlT3BlcmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICAgIHNldE9wZXJhdGlvbkZvcm0ocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbmlzaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2sgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgc3RhdHVzOiBcImNsb3NlZFwiXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlVGFzayhpZCwgdGFzaywgKCkgPT4ge1xyXG4gICAgICBzZXRTdGF0dXMoXCJjbG9zZWRcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcclxuICAgIHJlbW92ZVRhc2soaWQsICgpID0+IHtcclxuICAgICAgb25SZW1vdmVUYXNrKGlkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDU+e3RpdGxlfTwvaDU+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e2Rlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3N0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cImZhcyBmYS1wbHVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZXJhdGlvbkZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cImZhcyBmYS1hcmNoaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmluaXNofT5cclxuICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7b3BlcmF0aW9ucy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgIDxCdXR0b24gaWNvbj17XCJmYXMgZmEtdHJhc2hcIn0gY29sb3I9e1wiZGFuZ2VyXCJ9IG91dGxpbmUgc2l6ZT17XCJzbVwifSBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIi8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxPcGVyYXRpb25zIHRhc2tJRD17aWR9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm09e29wZXJhdGlvbkZvcm19XHJcbiAgICAgICAgICAgICAgICAgIHNldEZvcm09e3NldE9wZXJhdGlvbkZvcm19XHJcbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnM9e29wZXJhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wZXJhdGlvbnM9e3NldE9wZXJhdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1cz17c3RhdHVzfS8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YWM5MzYwNWVkNTk1NmJkMWQ2ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uIiwiY3JlYXRlT3BlcmF0aW9uIiwiQnV0dG9uIiwiT3BlcmF0aW9ucyIsInRhc2tJRCIsImZvcm0iLCJzZXRGb3JtIiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJzdGF0dXMiLCJvcGVyYXRpb25EZXNjcmlwdGlvbiIsInNldE9wZXJhdGlvbkRlc2NyaXB0aW9uIiwiaGFuZGxlTmV3T3BlcmF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3BlcmF0aW9uIiwiZGVzY3JpcHRpb24iLCJ0aW1lU3BlbnQiLCJkYXRhIiwicHJldlN0YXRlIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInVzZUVmZmVjdCIsInJlbW92ZVRhc2siLCJ1cGRhdGVUYXNrIiwiZ2V0T3BlcmF0aW9ucyIsIlRhc2siLCJ0aXRsZSIsIl9zdGF0dXMiLCJvblJlbW92ZVRhc2siLCJzZXRTdGF0dXMiLCJvcGVyYXRpb25Gb3JtIiwic2V0T3BlcmF0aW9uRm9ybSIsInRvZ2dsZU9wZXJhdGlvbkZvcm0iLCJoYW5kbGVGaW5pc2giLCJ0YXNrIiwiaGFuZGxlUmVtb3ZlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==