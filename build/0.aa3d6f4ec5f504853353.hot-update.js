"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOperation": () => (/* binding */ createOperation),
/* harmony export */   "getOperations": () => (/* binding */ getOperations),
/* harmony export */   "removeOperation": () => (/* binding */ removeOperation),
/* harmony export */   "updateOperation": () => (/* binding */ updateOperation)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);

var getOperations = function getOperations(id, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id, "/operations"), {
    headers: {
      "Authorization": _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
    }
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
};
var createOperation = function createOperation(id, operation, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id, "/operations"), {
    headers: {
      "Authorization": _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(operation)
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateOperation = function updateOperation(id, operation, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(id), {
    headers: {
      "Authorization": _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(operation)
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeOperation = function removeOperation(id, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/operations/").concat(id), {
    headers: {
      "Authorization": _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY
    },
    method: "DELETE"
  }).then(function (r) {
    return r.json();
  }).then(function (data) {
    if (data.error === false && typeof successCallback === "function") {
      successCallback();
    }
  })["catch"](function (err) {
    return console.log(err);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0d3d43664352eaeaf4e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJFLEVBQTFCLEdBQWdDO0lBQ25DRyxPQUFPLEVBQUU7TUFDUCxpQkFBaUJOLCtDQUFPQTtJQURqQixDQUQwQjtJQUluQ2lCLE1BQU0sRUFBRTtFQUoyQixDQUFoQyxDQUFMLENBTUdWLElBTkgsQ0FNUSxVQUFBQyxDQUFDO0lBQUEsT0FBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7RUFBQSxDQU5ULEVBT0dGLElBUEgsQ0FPUSxVQUFBRyxJQUFJLEVBQUk7SUFDWixJQUFJQSxJQUFJLENBQUNDLEtBQUwsS0FBZSxLQUFmLElBQXdCLE9BQU9QLGVBQVAsS0FBMkIsVUFBdkQsRUFBbUU7TUFDakVBLGVBQWU7SUFDaEI7RUFDRixDQVhILFdBWVMsVUFBQVEsR0FBRztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7RUFBQSxDQVpaO0FBYUQsQ0FkTTs7Ozs7Ozs7VUNyRFAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvcmVhY3QvLi9qcy9hcGkvb3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJX0tFWSwgQVBJX1VSTH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T3BlcmF0aW9ucyA9IChpZCwgc3VjY2Vzc0NhbGxiYWNrKSA9PiB7XHJcbiAgZmV0Y2goYCR7QVBJX1VSTH0vdGFza3MvJHtpZH0vb3BlcmF0aW9uc2AsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IEFQSV9LRVlcclxuICAgIH1cclxuICB9KVxyXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvciA9PT0gZmFsc2UgJiYgdHlwZW9mIHN1Y2Nlc3NDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGEuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9wZXJhdGlvbiA9IChpZCwgb3BlcmF0aW9uLCBzdWNjZXNzQ2FsbGJhY2spID0+IHtcclxuICBmZXRjaChgJHtBUElfVVJMfS90YXNrcy8ke2lkfS9vcGVyYXRpb25zYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogQVBJX0tFWSxcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wZXJhdGlvbilcclxuICB9KVxyXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvciA9PT0gZmFsc2UgJiYgdHlwZW9mIHN1Y2Nlc3NDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGEuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU9wZXJhdGlvbiA9IChpZCwgb3BlcmF0aW9uLCBzdWNjZXNzQ2FsbGJhY2spID0+IHtcclxuICBmZXRjaChgJHtBUElfVVJMfS9vcGVyYXRpb25zLyR7aWR9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogQVBJX0tFWSxcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uKVxyXG4gIH0pXHJcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSAmJiB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlT3BlcmF0aW9uID0gKGlkLCBzdWNjZXNzQ2FsbGJhY2spID0+IHtcclxuICBmZXRjaChgJHtBUElfVVJMfS9vcGVyYXRpb25zLyR7aWR9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogQVBJX0tFWVxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogXCJERUxFVEVcIlxyXG4gIH0pXHJcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSAmJiB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGQzZDQzNjY0MzUyZWFlYWY0ZTNcIikiXSwibmFtZXMiOlsiQVBJX0tFWSIsIkFQSV9VUkwiLCJnZXRPcGVyYXRpb25zIiwiaWQiLCJzdWNjZXNzQ2FsbGJhY2siLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwiciIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlT3BlcmF0aW9uIiwib3BlcmF0aW9uIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVPcGVyYXRpb24iLCJyZW1vdmVPcGVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9