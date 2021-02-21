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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/js/pages/index.js":
/*!****************************************!*\
  !*** ./resources/js/js/pages/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  //Widgets count
  $('.count-to').countTo(); //Sales count to

  $('.sales-count-to').countTo({
    formatter: function formatter(value, options) {
      return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
    }
  });
  initRealTimeChart();
  initDonutChart();
  initSparkline();
});
var realtime = 'on';

function initRealTimeChart() {
  //Real time ==========================================================================================
  var plot = $.plot('#real_time_chart', [getRandomData()], {
    series: {
      shadowSize: 0,
      color: 'rgb(0, 188, 212)'
    },
    grid: {
      borderColor: '#f3f3f3',
      borderWidth: 1,
      tickColor: '#f3f3f3'
    },
    lines: {
      fill: true
    },
    yaxis: {
      min: 0,
      max: 100
    },
    xaxis: {
      min: 0,
      max: 100
    }
  });

  function updateRealTime() {
    plot.setData([getRandomData()]);
    plot.draw();
    var timeout;

    if (realtime === 'on') {
      timeout = setTimeout(updateRealTime, 320);
    } else {
      clearTimeout(timeout);
    }
  }

  updateRealTime();
  $('#realtime').on('change', function () {
    realtime = this.checked ? 'on' : 'off';
    updateRealTime();
  }); //====================================================================================================
}

function initSparkline() {
  $(".sparkline").each(function () {
    var $this = $(this);
    $this.sparkline('html', $this.data());
  });
}

function initDonutChart() {
  Morris.Donut({
    element: 'donut_chart',
    data: [{
      label: 'Chrome',
      value: 37
    }, {
      label: 'Firefox',
      value: 30
    }, {
      label: 'Safari',
      value: 18
    }, {
      label: 'Opera',
      value: 12
    }, {
      label: 'Other',
      value: 3
    }],
    colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(96, 125, 139)'],
    formatter: function formatter(y) {
      return y + '%';
    }
  });
}

var data = [],
    totalPoints = 110;

function getRandomData() {
  if (data.length > 0) data = data.slice(1);

  while (data.length < totalPoints) {
    var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }

    data.push(y);
  }

  var res = [];

  for (var i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }

  return res;
}

/***/ }),

/***/ 16:
/*!**********************************************!*\
  !*** multi ./resources/js/js/pages/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\stock-management\resources\js\js\pages\index.js */"./resources/js/js/pages/index.js");


/***/ })

/******/ });