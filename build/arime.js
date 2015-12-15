var arime =
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

	
	var zero = '0';
	var plus = '+';
	var minus = '-';
	var dot = '.';
	var equations = __webpack_require__(1);
	var utils = __webpack_require__(2);

	function argsArray(aNum, bNum, args, fn) {}

	function add(aNum, bNum) {
	    return 'add';
	}
	function subtract() {
	    return 'subtract';
	}
	function multiply() {
	    return 'multiply';
	}
	function divide() {
	    return 'divide';
	}
	function chain() {
	    return 'chain';
	}

	module.exports = Object.create({
	    add: add,
	    subtract: subtract,
	    multiply: multiply,
	    divide: divide,
	    chain: chain,
	    toString: function () {
	        return 'arime: an <b>ari</b>th<b>me</b>tic library';
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	var ret = {};
	var plus = '+';
	var minus = '-';
	for (var x = 0; x < 10; x++) {
	    ret[x] = {};
	    ret[x][plus] = {};
	    ret[x][minus] = {};
	    for (var y = 0; y < 10; y++) {
	        ret[x][plus][y] = x + y;
	        ret[x][minus][y] = x - y;
	    }
	}
	module.exports = ret;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// utilities
	var ArrayProto = Array.prototype;
	module.exports = {
	    map: ArrayProto.map.bind(ArrayProto),
	    each: ArrayProto.forEach.bind(ArrayProto),
	    makeArray: function (arg) {
	        if (Array.isArray(arg)) {
	            return arg;
	        }
	        if (arg !== null && arg !== undefined) {
	            return [arg];
	        }
	        return [];
	    }
	};

/***/ }
/******/ ]);