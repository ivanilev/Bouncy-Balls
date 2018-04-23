/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Ball = function () {
    //internal properties
    var _x;
    var _y;
    var _radius;
    var _color;

    //Pseudo constructor implementation  
    function _constructor(x, y, radius, color) {
        _x = x;
        _y = y;
        _radius = radius;
        _color = color;
    };
    _constructor();

    // Functions
    function draw(c) {
        c.beginPath();
        c.arc(_x, _y, _radius, 0, Math.PI * 2, false);
        c.fillStyle = _color;
        c.fill();
        c.closePath();
    }

    function update() {
        draw();
    }

    return {
        x: _x,
        y: _y,
        radius: _radius,
        color: _color
    };
}();

exports.Ball = Ball;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Helper = function () {
    var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

    // Utility Functions
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    function dist(x1, y1, x2, y2) {
        var xDist = x2 - x1;
        var yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };
    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return {

        getRandomColor: randomColor,
        getRandomIntFromRange: randomIntFromRange,
        getDistance: dist
    };
}();

exports.Helper = Helper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//Testing purposes
var TestDev = function () {
    function log() {
        if ("development".trim() === 'development') {
            console.info('Running development environtment');
            //Code here 
        } else {
            if ("development".trim() === 'production') {
                console.info('Running production environtment');
            }
            //User shouldn't be seeing this
            console.error('Warning! Environment initialize crash!');
            console.trace();
        }
    };
    return { logEnvironment: log };
}();

exports.TestDev = TestDev;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Helper = __webpack_require__(1);

var _Ball = __webpack_require__(0);

var _testDev = __webpack_require__(2);

if ("development".trim() === 'development') {
    _testDev.TestDev.logEnvironment();
}

// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

// Implementation
//let objects
function init() {
    objects = [];

    for (var i = 0; i < 400; i++) {
        // objects.push();
    }
}

// Animation Loop
function animate() {
    // requestAnimationFrame(animate)

    // c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // objects.forEach(object => {
    //  object.update();
    // });
}

init();
animate();

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map