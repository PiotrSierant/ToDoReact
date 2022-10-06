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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '90',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'whitesmoke'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/******/ 	__webpack_require__.h = () => ("7db58880e88921042ad9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMjk4YmE3Njk5N2ZiZTk0NGMwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTTyxHQUFULEdBQWU7RUFDYixnQkFBMEJOLCtDQUFRLENBQUMsRUFBRCxDQUFsQztFQUFBO0VBQUEsSUFBT08sS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBRUFQLGdEQUFTLENBQUMsWUFBTTtJQUNkSSxvREFBUSxDQUFDRyxRQUFELENBQVI7RUFDRCxDQUZRLEVBRU4sRUFGTSxDQUFUOztFQUlBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0lBQ2pDRixRQUFRLENBQUMsVUFBQ0csU0FBRCxFQUFlO01BQ3RCLFFBQVFELElBQVIsNEJBQWlCQyxTQUFqQjtJQUNELENBRk8sQ0FBUjtFQUdELENBSkQ7O0VBTUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7SUFDL0JMLFFBQVEsQ0FBQyxVQUFDTSxTQUFEO01BQUEsT0FBZUEsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNMLElBQUQ7UUFBQSxPQUFVQSxJQUFJLENBQUNHLEVBQUwsS0FBWUEsRUFBdEI7TUFBQSxDQUFqQixDQUFmO0lBQUEsQ0FBRCxDQUFSO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRTtJQUFLLEtBQUssRUFBRTtNQUFDRyxRQUFRLEVBQUMsVUFBVjtNQUFzQkMsR0FBRyxFQUFDLEdBQTFCO01BQStCQyxJQUFJLEVBQUMsR0FBcEM7TUFBeUNDLE1BQU0sRUFBQyxJQUFoRDtNQUFzREMsS0FBSyxFQUFDLE1BQTVEO01BQW9FQyxTQUFTLEVBQUMsT0FBOUU7TUFBdUZDLGVBQWUsRUFBQztJQUF2RztFQUFaLGdCQUNFLDJEQUFDLDJEQUFEO0lBQVMsU0FBUyxFQUFFYjtFQUFwQixFQURGLEVBRUdGLEtBQUssQ0FBQ2dCLEdBQU4sQ0FBVSxVQUFDYixJQUFELEVBQVU7SUFDbkIsb0JBQU8sMkRBQUMsd0RBQUQ7TUFBTSxHQUFHLEVBQUVBLElBQUksQ0FBQ0c7SUFBaEIsR0FBd0JILElBQXhCO01BQThCLFlBQVksRUFBRUU7SUFBNUMsR0FBUDtFQUNELENBRkEsQ0FGSCxDQURGO0FBUUQ7O0FBRUQsSUFBTVksU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUd6Qiw0REFBVSxDQUFDc0IsU0FBRCxDQUF2QjtBQUNBRyxJQUFJLENBQUNDLE1BQUwsZUFBWSwyREFBQyxHQUFELE9BQVo7Ozs7Ozs7O1VDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3JlYWN0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL3RvZG9yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL2NvbXBvbmVudHMvTmV3VGFza1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jb21wb25lbnRzL1Rhc2tcIjtcclxuaW1wb3J0IHsgZ2V0VGFza3MgfSBmcm9tIFwiLi9hcGkvdGFza3NcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFRhc2tzKHNldFRhc2tzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZE5ld1Rhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgc2V0VGFza3MoKHByZXZUYXNrcykgPT4ge1xyXG4gICAgICByZXR1cm4gW3Rhc2ssIC4uLnByZXZUYXNrc107XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKGlkKSA9PiB7XHJcbiAgICBzZXRUYXNrcygocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJywgdG9wOicwJywgbGVmdDonMCcsIHpJbmRleDonOTAnLCB3aWR0aDonMTAwJScsIG1pbkhlaWdodDonMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlc21va2UnfSB9PlxyXG4gICAgICA8TmV3VGFzayBvbk5ld1Rhc2s9e2hhbmRsZUFkZE5ld1Rhc2t9IC8+XHJcbiAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICByZXR1cm4gPFRhc2sga2V5PXt0YXNrLmlkfSB7Li4udGFza30gb25SZW1vdmVUYXNrPXtoYW5kbGVSZW1vdmVUYXNrfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdkYjU4ODgwZTg4OTIxMDQyYWQ5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiTmV3VGFzayIsIlRhc2siLCJnZXRUYXNrcyIsIkFwcCIsInRhc2tzIiwic2V0VGFza3MiLCJoYW5kbGVBZGROZXdUYXNrIiwidGFzayIsInByZXZUYXNrcyIsImhhbmRsZVJlbW92ZVRhc2siLCJpZCIsInByZXZTdGF0ZSIsImZpbHRlciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInpJbmRleCIsIndpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9