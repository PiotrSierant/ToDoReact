"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_NewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _api_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
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







function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      tasks = _useState2[0],
      setTasks = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_api_tasks__WEBPACK_IMPORTED_MODULE_4__.getTasks)(setTasks);
  }, []);

  var handleAddNewTask = function handleAddNewTask(task) {
    setTasks(function (prevTasks) {
      return [task].concat(_toConsumableArray(prevTasks));
    });
  };

  var handleRemoveTask = function handleRemoveTask(id) {
    setTasks(function (prevState) {
      return prevState.filter(function (task) {
        return task.id !== id;
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onNewTask: handleAddNewTask
  }), tasks.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: task.id
    }, task, {
      onRemoveTask: handleRemoveTask
    }));
  }));
}

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e9efb4280aca21c7747e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZGI1ODg4MGU4ODkyMTA0MmFkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTTyxHQUFULEdBQWU7RUFDYixnQkFBMEJOLCtDQUFRLENBQUMsRUFBRCxDQUFsQztFQUFBO0VBQUEsSUFBT08sS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBRUFQLGdEQUFTLENBQUMsWUFBTTtJQUNkSSxvREFBUSxDQUFDRyxRQUFELENBQVI7RUFDRCxDQUZRLEVBRU4sRUFGTSxDQUFUOztFQUlBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0lBQ2pDRixRQUFRLENBQUMsVUFBQ0csU0FBRCxFQUFlO01BQ3RCLFFBQVFELElBQVIsNEJBQWlCQyxTQUFqQjtJQUNELENBRk8sQ0FBUjtFQUdELENBSkQ7O0VBTUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7SUFDL0JMLFFBQVEsQ0FBQyxVQUFDTSxTQUFEO01BQUEsT0FBZUEsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNMLElBQUQ7UUFBQSxPQUFVQSxJQUFJLENBQUNHLEVBQUwsS0FBWUEsRUFBdEI7TUFBQSxDQUFqQixDQUFmO0lBQUEsQ0FBRCxDQUFSO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSxxRkFDRSwyREFBQywyREFBRDtJQUFTLFNBQVMsRUFBRUo7RUFBcEIsRUFERixFQUVHRixLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDTixJQUFELEVBQVU7SUFDbkIsb0JBQU8sMkRBQUMsd0RBQUQ7TUFBTSxHQUFHLEVBQUVBLElBQUksQ0FBQ0c7SUFBaEIsR0FBd0JILElBQXhCO01BQThCLFlBQVksRUFBRUU7SUFBNUMsR0FBUDtFQUNELENBRkEsQ0FGSCxDQURGO0FBUUQ7O0FBRUQsSUFBTUssU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdsQiw0REFBVSxDQUFDZSxTQUFELENBQXZCO0FBQ0FHLElBQUksQ0FBQ0MsTUFBTCxlQUFZLDJEQUFDLEdBQUQsT0FBWjs7Ozs7Ozs7VUNuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb3JlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vY29tcG9uZW50cy9OZXdUYXNrXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvVGFza1wiO1xyXG5pbXBvcnQgeyBnZXRUYXNrcyB9IGZyb20gXCIuL2FwaS90YXNrc1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VGFza3Moc2V0VGFza3MpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkTmV3VGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBzZXRUYXNrcygocHJldlRhc2tzKSA9PiB7XHJcbiAgICAgIHJldHVybiBbdGFzaywgLi4ucHJldlRhc2tzXTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAoaWQpID0+IHtcclxuICAgIHNldFRhc2tzKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZS5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOZXdUYXNrIG9uTmV3VGFzaz17aGFuZGxlQWRkTmV3VGFza30gLz5cclxuICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgIHJldHVybiA8VGFzayBrZXk9e3Rhc2suaWR9IHsuLi50YXNrfSBvblJlbW92ZVRhc2s9e2hhbmRsZVJlbW92ZVRhc2t9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTllZmI0MjgwYWNhMjFjNzc0N2VcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJOZXdUYXNrIiwiVGFzayIsImdldFRhc2tzIiwiQXBwIiwidGFza3MiLCJzZXRUYXNrcyIsImhhbmRsZUFkZE5ld1Rhc2siLCJ0YXNrIiwicHJldlRhc2tzIiwiaGFuZGxlUmVtb3ZlVGFzayIsImlkIiwicHJldlN0YXRlIiwiZmlsdGVyIiwibWFwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9