"use strict";
self["webpackHotUpdatetodoreact"](0,{

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3834b6fa2a9a5c4cccce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNzgyYTM4YjkxNGVlNTg2N2YxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNLLFNBQVQsT0FBd0Y7RUFBQSxJQUFwRUMsV0FBb0UsUUFBcEVBLFdBQW9FO0VBQUEsSUFBdkRDLEVBQXVELFFBQXZEQSxFQUF1RDtFQUFBLElBQW5EQyxpQkFBbUQsUUFBbkRBLGlCQUFtRDtFQUFBLElBQXJCQyxVQUFxQixRQUFoQ0MsU0FBZ0M7RUFBQSxJQUFUQyxNQUFTLFFBQVRBLE1BQVM7O0VBQ3RGLGdCQUEwQ1YsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0VBQUE7RUFBQSxJQUFPVyxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0Qjs7RUFDQSxpQkFBa0NaLCtDQUFRLENBQUNRLFVBQUQsQ0FBMUM7RUFBQTtFQUFBLElBQU9DLFNBQVA7RUFBQSxJQUFrQkksWUFBbEI7O0VBQ0EsaUJBQTRDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7RUFBQTtFQUFBLElBQU9jLGNBQVA7RUFBQSxJQUF1QkMsaUJBQXZCOztFQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0lBQzFCQSxDQUFDLENBQUNDLGNBQUY7O0lBRUEsSUFBSUMsS0FBSyxDQUFDQyxRQUFRLENBQUNOLGNBQUQsQ0FBVCxDQUFMLElBQW1DQSxjQUFjLEdBQUcsQ0FBeEQsRUFBMkQ7TUFDekQ7SUFDRDs7SUFFRCxJQUFNTyxTQUFTLEdBQUc7TUFDaEJoQixXQUFXLEVBQVhBLFdBRGdCO01BRWhCSSxTQUFTLEVBQUVXLFFBQVEsQ0FBQ1gsU0FBRCxDQUFSLEdBQXNCVyxRQUFRLENBQUNOLGNBQUQ7SUFGekIsQ0FBbEI7SUFLQVosZ0VBQWUsQ0FBQ0ksRUFBRCxFQUFLZSxTQUFMLEVBQWdCLFVBQUFDLElBQUksRUFBSTtNQUNyQ1QsWUFBWSxDQUFDUyxJQUFJLENBQUNiLFNBQU4sQ0FBWjtNQUNBRyxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO01BQ0FHLGlCQUFpQixDQUFDLEVBQUQsQ0FBakI7SUFDRCxDQUpjLENBQWY7RUFLRCxDQWpCRDs7RUFtQkEsSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtJQUN6QnRCLGdFQUFlLENBQUNLLEVBQUQsRUFBSyxZQUFNO01BQ3hCQyxpQkFBaUIsQ0FBQ0QsRUFBRCxDQUFqQjtJQUNELENBRmMsQ0FBZjtFQUdELENBSkQ7O0VBTUEsSUFBTWtCLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdqQixTQUFTLEdBQUcsRUFBdkIsQ0FBZDtFQUNBLElBQU1rQixPQUFPLEdBQUdsQixTQUFTLEdBQUcsRUFBNUI7RUFFQSxvQkFDRTtJQUFJLFNBQVMsRUFBQztFQUFkLGdCQUNFLHdFQUNHSixXQURILEVBRUdJLFNBQVMsR0FBRyxDQUFaLGlCQUNDO0lBQU0sU0FBUyxFQUFDO0VBQWhCLEdBQ0dlLEtBREgsUUFDWUcsT0FEWixNQUhKLENBREYsRUFXR2hCLGFBQWEsaUJBQ1o7SUFBTSxRQUFRLEVBQUVLO0VBQWhCLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBTyxJQUFJLEVBQUMsUUFBWjtJQUNPLFNBQVMsRUFBQyxjQURqQjtJQUVPLFdBQVcsRUFBQyx1QkFGbkI7SUFHTyxLQUFLLEVBQUVGLGNBSGQ7SUFJTyxLQUFLLEVBQUU7TUFBQ2MsS0FBSyxFQUFFO0lBQVIsQ0FKZDtJQUtPLFFBQVEsRUFBRSxrQkFBQVgsQ0FBQztNQUFBLE9BQUlGLGlCQUFpQixDQUFDRSxDQUFDLENBQUNZLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtJQUFBO0VBTGxCLEVBREYsZUFPRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLDJEQUFDLDJDQUFEO0lBQVEsS0FBSyxFQUFFLFNBQWY7SUFBMEIsT0FBTyxNQUFqQztJQUFrQyxJQUFJLEVBQUU7RUFBeEMsRUFERixlQUVFLDJEQUFDLDJDQUFEO0lBQVEsS0FBSyxFQUFFLE1BQWY7SUFBdUIsT0FBTyxNQUE5QjtJQUErQixJQUFJLEVBQUUsY0FBckM7SUFBcUQsT0FBTyxFQUFFO01BQUEsT0FBTWxCLGdCQUFnQixDQUFDLEtBQUQsQ0FBdEI7SUFBQTtFQUE5RCxFQUZGLENBUEYsQ0FERixDQVpKLEVBNEJHLENBQUNELGFBQUQsaUJBQ0Msd0VBQ0dELE1BQU0sS0FBSyxNQUFYLGlCQUNDLDJEQUFDLDJDQUFEO0lBQ0UsSUFBSSxFQUFFLGNBRFI7SUFFRSxLQUFLLEVBQUUsU0FGVDtJQUdFLE9BQU8sTUFIVDtJQUlFLEtBQUssTUFKUDtJQUtFLFNBQVMsRUFBRSxNQUxiO0lBTUUsT0FBTyxFQUFFO01BQUEsT0FBTUUsZ0JBQWdCLENBQUMsSUFBRCxDQUF0QjtJQUFBO0VBTlgsY0FGSixlQVlFLDJEQUFDLDJDQUFEO0lBQVEsSUFBSSxFQUFFLGNBQWQ7SUFBOEIsS0FBSyxFQUFFLFFBQXJDO0lBQStDLE9BQU8sTUFBdEQ7SUFBdUQsS0FBSyxNQUE1RDtJQUE2RCxPQUFPLEVBQUVXO0VBQXRFLEVBWkYsQ0E3QkosQ0FERjtBQStDRDs7QUFFRCxpRUFBZW5CLFNBQWY7Ozs7Ozs7O1VDdEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3JlYWN0Ly4vanMvY29tcG9uZW50cy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cmVtb3ZlT3BlcmF0aW9uLCB1cGRhdGVPcGVyYXRpb259IGZyb20gXCIuLi9hcGkvb3BlcmF0aW9uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIE9wZXJhdGlvbih7ZGVzY3JpcHRpb24sIGlkLCBvblJlbW92ZU9wZXJhdGlvbiwgdGltZVNwZW50OiBfdGltZVNwZW50LCBzdGF0dXN9KSB7XHJcbiAgY29uc3QgW3RpbWVTcGVudEZvcm0sIHNldFRpbWVTcGVudEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0aW1lU3BlbnQsIHNldFRpbWVTcGVudF0gPSB1c2VTdGF0ZShfdGltZVNwZW50KTtcclxuICBjb25zdCBbdGltZVNwZW50SW5wdXQsIHNldFRpbWVTcGVudElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUaW1lU2F2ZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChpc05hTihwYXJzZUludCh0aW1lU3BlbnRJbnB1dCkpIHx8IHRpbWVTcGVudElucHV0IDwgMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlcmF0aW9uID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgdGltZVNwZW50OiBwYXJzZUludCh0aW1lU3BlbnQpICsgcGFyc2VJbnQodGltZVNwZW50SW5wdXQpXHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZU9wZXJhdGlvbihpZCwgb3BlcmF0aW9uLCBkYXRhID0+IHtcclxuICAgICAgc2V0VGltZVNwZW50KGRhdGEudGltZVNwZW50KTtcclxuICAgICAgc2V0VGltZVNwZW50Rm9ybShmYWxzZSk7XHJcbiAgICAgIHNldFRpbWVTcGVudElucHV0KFwiXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlT3BlcmF0aW9uKGlkLCAoKSA9PiB7XHJcbiAgICAgIG9uUmVtb3ZlT3BlcmF0aW9uKGlkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lU3BlbnQgLyA2MCk7XHJcbiAgY29uc3QgbWludXRlcyA9IHRpbWVTcGVudCAlIDYwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIHt0aW1lU3BlbnQgPiAwICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgIHtob3Vyc31oIHttaW51dGVzfW1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICB7dGltZVNwZW50Rm9ybSAmJiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVRpbWVTYXZlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lU3BlbnRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaW1lU3BlbnRJbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtcInN1Y2Nlc3NcIn0gb3V0bGluZSBpY29uPXtcImZhcyBmYS1zYXZlXCJ9Lz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtcImRhcmtcIn0gb3V0bGluZSBpY29uPXtcImZhcyBmYS10aW1lc1wifSBvbkNsaWNrPXsoKSA9PiBzZXRUaW1lU3BlbnRGb3JtKGZhbHNlKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHshdGltZVNwZW50Rm9ybSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzdGF0dXMgPT09IFwib3BlblwiICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGljb249e1wiZmFzIGZhLWNsb2NrXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wic3VjY2Vzc1wifVxyXG4gICAgICAgICAgICAgIG91dGxpbmVcclxuICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJtci0yXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGltZVNwZW50Rm9ybSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEJ1dHRvbiBpY29uPXtcImZhcyBmYS10cmFzaFwifSBjb2xvcj17XCJkYW5nZXJcIn0gb3V0bGluZSBzbWFsbCBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM4MzRiNmZhMmE5YTVjNGNjY2NlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJyZW1vdmVPcGVyYXRpb24iLCJ1cGRhdGVPcGVyYXRpb24iLCJCdXR0b24iLCJPcGVyYXRpb24iLCJkZXNjcmlwdGlvbiIsImlkIiwib25SZW1vdmVPcGVyYXRpb24iLCJfdGltZVNwZW50IiwidGltZVNwZW50Iiwic3RhdHVzIiwidGltZVNwZW50Rm9ybSIsInNldFRpbWVTcGVudEZvcm0iLCJzZXRUaW1lU3BlbnQiLCJ0aW1lU3BlbnRJbnB1dCIsInNldFRpbWVTcGVudElucHV0IiwiaGFuZGxlVGltZVNhdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInBhcnNlSW50Iiwib3BlcmF0aW9uIiwiZGF0YSIsImhhbmRsZVJlbW92ZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsIndpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9