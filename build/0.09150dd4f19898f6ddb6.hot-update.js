"use strict";
self["webpackHotUpdatetodoreact"](0,{

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
  }, "Dodaj"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
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
/******/ 	__webpack_require__.h = () => ("0241f033e3584be3b0a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOTE1MGRkNGYxOTg5OGY2ZGRiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNLLFVBQVQsT0FBZ0Y7RUFBQSxJQUEzREMsTUFBMkQsUUFBM0RBLE1BQTJEO0VBQUEsSUFBbkRDLElBQW1ELFFBQW5EQSxJQUFtRDtFQUFBLElBQTdDQyxPQUE2QyxRQUE3Q0EsT0FBNkM7RUFBQSxJQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0VBQUEsSUFBeEJDLGFBQXdCLFFBQXhCQSxhQUF3QjtFQUFBLElBQVRDLE1BQVMsUUFBVEEsTUFBUzs7RUFDckYsZ0JBQXdEViwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEU7RUFBQTtFQUFBLElBQU9XLG9CQUFQO0VBQUEsSUFBNkJDLHVCQUE3Qjs7RUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLENBQUMsRUFBSTtJQUM5QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0EsSUFBTUMsU0FBUyxHQUFHO01BQ2hCQyxXQUFXLEVBQUVOLG9CQURHO01BRWhCTyxTQUFTLEVBQUU7SUFGSyxDQUFsQjtJQUlBaEIsZ0VBQWUsQ0FBQ0csTUFBRCxFQUFTVyxTQUFULEVBQW9CLFVBQUFHLElBQUksRUFBSTtNQUN6Q1YsYUFBYSxDQUFDLFVBQUFXLFNBQVMsRUFBSTtRQUN6QixRQUNFRCxJQURGLDRCQUVLQyxTQUZMO01BSUQsQ0FMWSxDQUFiO01BTUFiLE9BQU8sQ0FBQyxLQUFELENBQVA7TUFDQUssdUJBQXVCLENBQUMsRUFBRCxDQUF2QjtJQUNELENBVGMsQ0FBZjtFQVVELENBaEJEOztFQWtCQSxJQUFNUyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFDLEVBQUUsRUFBSTtJQUNsQ2IsYUFBYSxDQUFDLFVBQUFXLFNBQVM7TUFBQSxPQUFJQSxTQUFTLENBQUNHLE1BQVYsQ0FBaUIsVUFBQVAsU0FBUztRQUFBLE9BQUlBLFNBQVMsQ0FBQ00sRUFBVixLQUFpQkEsRUFBckI7TUFBQSxDQUExQixDQUFKO0lBQUEsQ0FBVixDQUFiO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSwwSEFDR2hCLElBQUksaUJBQ0g7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFNLFFBQVEsRUFBRU87RUFBaEIsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQ08sU0FBUyxFQUFDLGNBRGpCO0lBRU8sV0FBVyxFQUFDLHVCQUZuQjtJQUdPLEtBQUssRUFBRUYsb0JBSGQ7SUFJTyxRQUFRLEVBQUUsa0JBQUFHLENBQUM7TUFBQSxPQUFJRix1QkFBdUIsQ0FBQ0UsQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBM0I7SUFBQTtFQUpsQixFQURGLGVBT0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSwyREFBQywyQ0FBRDtJQUFRLEtBQUssRUFBRSxNQUFmO0lBQXVCLElBQUksRUFBQztFQUE1QixXQURGLENBUEYsQ0FERixDQURGLENBRkosZUFtQkU7SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUNHakIsVUFBVSxDQUFDa0IsR0FBWCxDQUFlLFVBQUFWLFNBQVM7SUFBQSxvQkFDdkIsMkRBQUMsaURBQUQ7TUFBVyxHQUFHLEVBQUVBLFNBQVMsQ0FBQ007SUFBMUIsR0FBa0NOLFNBQWxDO01BQTZDLGlCQUFpQixFQUFFSyxxQkFBaEU7TUFBdUYsTUFBTSxFQUFFWDtJQUEvRixHQUR1QjtFQUFBLENBQXhCLENBREgsQ0FuQkYsQ0FERjtBQTJCRDs7Ozs7Ozs7VUN4REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSBcIi4vT3BlcmF0aW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdGlvbiB9IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPcGVyYXRpb25zKHt0YXNrSUQsIGZvcm0sIHNldEZvcm0sIG9wZXJhdGlvbnMsIHNldE9wZXJhdGlvbnMsIHN0YXR1c30pIHtcclxuICBjb25zdCBbb3BlcmF0aW9uRGVzY3JpcHRpb24sIHNldE9wZXJhdGlvbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZU5ld09wZXJhdGlvbiA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgb3BlcmF0aW9uID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogb3BlcmF0aW9uRGVzY3JpcHRpb24sXHJcbiAgICAgIHRpbWVTcGVudDogMFxyXG4gICAgfTtcclxuICAgIGNyZWF0ZU9wZXJhdGlvbih0YXNrSUQsIG9wZXJhdGlvbiwgZGF0YSA9PiB7XHJcbiAgICAgIHNldE9wZXJhdGlvbnMocHJldlN0YXRlID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIC4uLnByZXZTdGF0ZVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRGb3JtKGZhbHNlKTtcclxuICAgICAgc2V0T3BlcmF0aW9uRGVzY3JpcHRpb24oXCJcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVPcGVyYXRpb24gPSBpZCA9PiB7XHJcbiAgICBzZXRPcGVyYXRpb25zKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKG9wZXJhdGlvbiA9PiBvcGVyYXRpb24uaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtmb3JtICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld09wZXJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0T3BlcmF0aW9uRGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfS8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtcImluZm9cIn0gaWNvbj1cImZhcyBmYS1wbHVzLWNpcmNsZVwiPkRvZGFqPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgIHtvcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gKFxyXG4gICAgICAgICAgPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH0gey4uLm9wZXJhdGlvbn0gb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0gc3RhdHVzPXtzdGF0dXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMjQxZjAzM2UzNTg0YmUzYjBhN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uIiwiY3JlYXRlT3BlcmF0aW9uIiwiQnV0dG9uIiwiT3BlcmF0aW9ucyIsInRhc2tJRCIsImZvcm0iLCJzZXRGb3JtIiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJzdGF0dXMiLCJvcGVyYXRpb25EZXNjcmlwdGlvbiIsInNldE9wZXJhdGlvbkRlc2NyaXB0aW9uIiwiaGFuZGxlTmV3T3BlcmF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3BlcmF0aW9uIiwiZGVzY3JpcHRpb24iLCJ0aW1lU3BlbnQiLCJkYXRhIiwicHJldlN0YXRlIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=