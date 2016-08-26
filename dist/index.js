module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMetaInformationFromHTML;

	var _parse = __webpack_require__(1);

	var _parse2 = _interopRequireDefault(_parse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getMetaInformationFromHTML(html) {
	  return new Promise(function (resolve) {
	    var metas = [];
	    var htmlFragment = _parse2.default.parseFragment(html);
	    var nodes = void 0;
	    if (htmlFragment.childNodes.length === 1 && htmlFragment.childNodes[0].nodeName !== 'meta') {
	      nodes = htmlFragment.childNodes[0].childNodes;
	    } else {
	      nodes = htmlFragment.childNodes;
	    }
	    nodes.forEach(function (child) {
	      if (child.nodeName === 'meta') {
	        (function () {
	          var obj = {};

	          child.attrs.forEach(function (attr) {
	            if (attr.name !== 'content') {
	              obj.typeKey = attr.name;
	              obj.typeValue = attr.value;
	            } else {
	              obj.value = attr.value;
	            }
	          });

	          metas.push(obj);
	        })();
	      }
	    });

	    resolve(metas);
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("parse5");

/***/ }
/******/ ]);