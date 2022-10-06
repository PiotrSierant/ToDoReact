"use strict";
self["webpackHotUpdatetodoreact"](0,{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);

var getTasks = function getTasks(successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks"), {
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
var createTask = function createTask(task, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks"), {
    headers: {
      "Authorization": _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(task)
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
var updateTask = function updateTask(id, task, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id), {
    headers: {
      "Authorization": _constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY,
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(task)
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
var removeTask = function removeTask(id, successCallback) {
  fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/tasks/").concat(id), {
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
/******/ 	__webpack_require__.h = () => ("c5b9031254e5519ec599")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBSTlCZ0IsTUFBTSxFQUFFO0VBSnNCLENBQTNCLENBQUwsQ0FNR1YsSUFOSCxDQU1RLFVBQUFDLENBQUM7SUFBQSxPQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBSjtFQUFBLENBTlQsRUFPR0YsSUFQSCxDQU9RLFVBQUFHLElBQUksRUFBSTtJQUNaLElBQUlBLElBQUksQ0FBQ0MsS0FBTCxLQUFlLEtBQWYsSUFBd0IsT0FBT1AsZUFBUCxLQUEyQixVQUF2RCxFQUFtRTtNQUNqRUEsZUFBZTtJQUNoQjtFQUNGLENBWEgsV0FZUyxVQUFBUSxHQUFHO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtFQUFBLENBWlo7QUFhRCxDQWRNOzs7Ozs7OztVQ3JEUCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9yZWFjdC8uL2pzL2FwaS90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBJX0tFWSwgQVBJX1VSTH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFza3MgPSBzdWNjZXNzQ2FsbGJhY2sgPT4ge1xyXG4gIGZldGNoKGAke0FQSV9VUkx9L3Rhc2tzYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogQVBJX0tFWVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSAmJiB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBzdWNjZXNzQ2FsbGJhY2spID0+IHtcclxuICBmZXRjaChgJHtBUElfVVJMfS90YXNrc2AsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IEFQSV9LRVksXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrKVxyXG4gIH0pXHJcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSAmJiB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9IChpZCwgdGFzaywgc3VjY2Vzc0NhbGxiYWNrKSA9PiB7XHJcbiAgZmV0Y2goYCR7QVBJX1VSTH0vdGFza3MvJHtpZH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBBUElfS0VZLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YXNrKVxyXG4gIH0pXHJcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSAmJiB0eXBlb2Ygc3VjY2Vzc0NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFzayA9IChpZCwgc3VjY2Vzc0NhbGxiYWNrKSA9PiB7XHJcbiAgZmV0Y2goYCR7QVBJX1VSTH0vdGFza3MvJHtpZH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBBUElfS0VZXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgfSlcclxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEuZXJyb3IgPT09IGZhbHNlICYmIHR5cGVvZiBzdWNjZXNzQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNWI5MDMxMjU0ZTU1MTllYzU5OVwiKSJdLCJuYW1lcyI6WyJBUElfS0VZIiwiQVBJX1VSTCIsImdldFRhc2tzIiwic3VjY2Vzc0NhbGxiYWNrIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInIiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVRhc2siLCJ0YXNrIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVUYXNrIiwiaWQiLCJyZW1vdmVUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==