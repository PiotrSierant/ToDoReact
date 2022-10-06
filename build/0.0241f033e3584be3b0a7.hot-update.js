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
  }, "Dodaj zadanie"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
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
/******/ 	__webpack_require__.h = () => ("ffd9223444fc3c91b7e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMjQxZjAzM2UzNTg0YmUzYjBhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNLLFVBQVQsT0FBZ0Y7RUFBQSxJQUEzREMsTUFBMkQsUUFBM0RBLE1BQTJEO0VBQUEsSUFBbkRDLElBQW1ELFFBQW5EQSxJQUFtRDtFQUFBLElBQTdDQyxPQUE2QyxRQUE3Q0EsT0FBNkM7RUFBQSxJQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0VBQUEsSUFBeEJDLGFBQXdCLFFBQXhCQSxhQUF3QjtFQUFBLElBQVRDLE1BQVMsUUFBVEEsTUFBUzs7RUFDckYsZ0JBQXdEViwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEU7RUFBQTtFQUFBLElBQU9XLG9CQUFQO0VBQUEsSUFBNkJDLHVCQUE3Qjs7RUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLENBQUMsRUFBSTtJQUM5QkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0EsSUFBTUMsU0FBUyxHQUFHO01BQ2hCQyxXQUFXLEVBQUVOLG9CQURHO01BRWhCTyxTQUFTLEVBQUU7SUFGSyxDQUFsQjtJQUlBaEIsZ0VBQWUsQ0FBQ0csTUFBRCxFQUFTVyxTQUFULEVBQW9CLFVBQUFHLElBQUksRUFBSTtNQUN6Q1YsYUFBYSxDQUFDLFVBQUFXLFNBQVMsRUFBSTtRQUN6QixRQUNFRCxJQURGLDRCQUVLQyxTQUZMO01BSUQsQ0FMWSxDQUFiO01BTUFiLE9BQU8sQ0FBQyxLQUFELENBQVA7TUFDQUssdUJBQXVCLENBQUMsRUFBRCxDQUF2QjtJQUNELENBVGMsQ0FBZjtFQVVELENBaEJEOztFQWtCQSxJQUFNUyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFDLEVBQUUsRUFBSTtJQUNsQ2IsYUFBYSxDQUFDLFVBQUFXLFNBQVM7TUFBQSxPQUFJQSxTQUFTLENBQUNHLE1BQVYsQ0FBaUIsVUFBQVAsU0FBUztRQUFBLE9BQUlBLFNBQVMsQ0FBQ00sRUFBVixLQUFpQkEsRUFBckI7TUFBQSxDQUExQixDQUFKO0lBQUEsQ0FBVixDQUFiO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSwwSEFDR2hCLElBQUksaUJBQ0g7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFNLFFBQVEsRUFBRU87RUFBaEIsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFPLElBQUksRUFBQyxNQUFaO0lBQ08sU0FBUyxFQUFDLGNBRGpCO0lBRU8sV0FBVyxFQUFDLHVCQUZuQjtJQUdPLEtBQUssRUFBRUYsb0JBSGQ7SUFJTyxRQUFRLEVBQUUsa0JBQUFHLENBQUM7TUFBQSxPQUFJRix1QkFBdUIsQ0FBQ0UsQ0FBQyxDQUFDVSxNQUFGLENBQVNDLEtBQVYsQ0FBM0I7SUFBQTtFQUpsQixFQURGLGVBT0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSwyREFBQywyQ0FBRDtJQUFRLEtBQUssRUFBRSxNQUFmO0lBQXVCLElBQUksRUFBQztFQUE1QixtQkFERixDQVBGLENBREYsQ0FERixDQUZKLGVBbUJFO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FDR2pCLFVBQVUsQ0FBQ2tCLEdBQVgsQ0FBZSxVQUFBVixTQUFTO0lBQUEsb0JBQ3ZCLDJEQUFDLGlEQUFEO01BQVcsR0FBRyxFQUFFQSxTQUFTLENBQUNNO0lBQTFCLEdBQWtDTixTQUFsQztNQUE2QyxpQkFBaUIsRUFBRUsscUJBQWhFO01BQXVGLE1BQU0sRUFBRVg7SUFBL0YsR0FEdUI7RUFBQSxDQUF4QixDQURILENBbkJGLENBREY7QUEyQkQ7Ozs7Ozs7O1VDeEREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3JlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL3RvZG9yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gXCIuL09wZXJhdGlvblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRpb24gfSBmcm9tIFwiLi4vYXBpL29wZXJhdGlvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT3BlcmF0aW9ucyh7dGFza0lELCBmb3JtLCBzZXRGb3JtLCBvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zLCBzdGF0dXN9KSB7XHJcbiAgY29uc3QgW29wZXJhdGlvbkRlc2NyaXB0aW9uLCBzZXRPcGVyYXRpb25EZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVOZXdPcGVyYXRpb24gPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IHtcclxuICAgICAgZGVzY3JpcHRpb246IG9wZXJhdGlvbkRlc2NyaXB0aW9uLFxyXG4gICAgICB0aW1lU3BlbnQ6IDBcclxuICAgIH07XHJcbiAgICBjcmVhdGVPcGVyYXRpb24odGFza0lELCBvcGVyYXRpb24sIGRhdGEgPT4ge1xyXG4gICAgICBzZXRPcGVyYXRpb25zKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAuLi5wcmV2U3RhdGVcclxuICAgICAgICBdO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0Rm9ybShmYWxzZSk7XHJcbiAgICAgIHNldE9wZXJhdGlvbkRlc2NyaXB0aW9uKFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlT3BlcmF0aW9uID0gaWQgPT4ge1xyXG4gICAgc2V0T3BlcmF0aW9ucyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihvcGVyYXRpb24gPT4gb3BlcmF0aW9uLmlkICE9PSBpZCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Zm9ybSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdPcGVyYXRpb259PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0aW9uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE9wZXJhdGlvbkRlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17XCJpbmZvXCJ9IGljb249XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj5Eb2RhaiB6YWRhbmllPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgIHtvcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gKFxyXG4gICAgICAgICAgPE9wZXJhdGlvbiBrZXk9e29wZXJhdGlvbi5pZH0gey4uLm9wZXJhdGlvbn0gb25SZW1vdmVPcGVyYXRpb249e2hhbmRsZVJlbW92ZU9wZXJhdGlvbn0gc3RhdHVzPXtzdGF0dXN9Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZmQ5MjIzNDQ0ZmMzYzkxYjdlM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uIiwiY3JlYXRlT3BlcmF0aW9uIiwiQnV0dG9uIiwiT3BlcmF0aW9ucyIsInRhc2tJRCIsImZvcm0iLCJzZXRGb3JtIiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJzdGF0dXMiLCJvcGVyYXRpb25EZXNjcmlwdGlvbiIsInNldE9wZXJhdGlvbkRlc2NyaXB0aW9uIiwiaGFuZGxlTmV3T3BlcmF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3BlcmF0aW9uIiwiZGVzY3JpcHRpb24iLCJ0aW1lU3BlbnQiLCJkYXRhIiwicHJldlN0YXRlIiwiaGFuZGxlUmVtb3ZlT3BlcmF0aW9uIiwiaWQiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=