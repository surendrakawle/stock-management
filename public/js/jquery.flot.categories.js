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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/plugins/flot-charts/jquery.flot.categories.js":
/*!*****************************************************************!*\
  !*** ./resources/plugins/flot-charts/jquery.flot.categories.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Flot plugin for plotting textual data or categories.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Consider a dataset like [["February", 34], ["March", 20], ...]. This plugin
allows you to plot such a dataset directly.

To enable it, you must specify mode: "categories" on the axis with the textual
labels, e.g.

	$.plot("#placeholder", data, { xaxis: { mode: "categories" } });

By default, the labels are ordered as they are met in the data series. If you
need a different ordering, you can specify "categories" on the axis options
and list the categories there:

	xaxis: {
		mode: "categories",
		categories: ["February", "March", "April"]
	}

If you need to customize the distances between the categories, you can specify
"categories" as an object mapping labels to values

	xaxis: {
		mode: "categories",
		categories: { "February": 1, "March": 3, "April": 4 }
	}

If you don't specify all categories, the remaining categories will be numbered
from the max value plus 1 (with a spacing of 1 between each).

Internally, the plugin works by transforming the input data through an auto-
generated mapping where the first category becomes 0, the second 1, etc.
Hence, a point like ["February", 34] becomes [0, 34] internally in Flot (this
is visible in hover and click events that return numbers rather than the
category labels). The plugin also overrides the tick generator to spit out the
categories as ticks instead of the values.

If you need to map a value back to its label, the mapping is always accessible
as "categories" on the axis object, e.g. plot.getAxes().xaxis.categories.

*/
(function ($) {
  var options = {
    xaxis: {
      categories: null
    },
    yaxis: {
      categories: null
    }
  };

  function processRawData(plot, series, data, datapoints) {
    // if categories are enabled, we need to disable
    // auto-transformation to numbers so the strings are intact
    // for later processing
    var xCategories = series.xaxis.options.mode == "categories",
        yCategories = series.yaxis.options.mode == "categories";
    if (!(xCategories || yCategories)) return;
    var format = datapoints.format;

    if (!format) {
      // FIXME: auto-detection should really not be defined here
      var s = series;
      format = [];
      format.push({
        x: true,
        number: true,
        required: true
      });
      format.push({
        y: true,
        number: true,
        required: true
      });

      if (s.bars.show || s.lines.show && s.lines.fill) {
        var autoscale = !!(s.bars.show && s.bars.zero || s.lines.show && s.lines.zero);
        format.push({
          y: true,
          number: true,
          required: false,
          defaultValue: 0,
          autoscale: autoscale
        });

        if (s.bars.horizontal) {
          delete format[format.length - 1].y;
          format[format.length - 1].x = true;
        }
      }

      datapoints.format = format;
    }

    for (var m = 0; m < format.length; ++m) {
      if (format[m].x && xCategories) format[m].number = false;
      if (format[m].y && yCategories) format[m].number = false;
    }
  }

  function getNextIndex(categories) {
    var index = -1;

    for (var v in categories) {
      if (categories[v] > index) index = categories[v];
    }

    return index + 1;
  }

  function categoriesTickGenerator(axis) {
    var res = [];

    for (var label in axis.categories) {
      var v = axis.categories[label];
      if (v >= axis.min && v <= axis.max) res.push([v, label]);
    }

    res.sort(function (a, b) {
      return a[0] - b[0];
    });
    return res;
  }

  function setupCategoriesForAxis(series, axis, datapoints) {
    if (series[axis].options.mode != "categories") return;

    if (!series[axis].categories) {
      // parse options
      var c = {},
          o = series[axis].options.categories || {};

      if ($.isArray(o)) {
        for (var i = 0; i < o.length; ++i) {
          c[o[i]] = i;
        }
      } else {
        for (var v in o) {
          c[v] = o[v];
        }
      }

      series[axis].categories = c;
    } // fix ticks


    if (!series[axis].options.ticks) series[axis].options.ticks = categoriesTickGenerator;
    transformPointsOnAxis(datapoints, axis, series[axis].categories);
  }

  function transformPointsOnAxis(datapoints, axis, categories) {
    // go through the points, transforming them
    var points = datapoints.points,
        ps = datapoints.pointsize,
        format = datapoints.format,
        formatColumn = axis.charAt(0),
        index = getNextIndex(categories);

    for (var i = 0; i < points.length; i += ps) {
      if (points[i] == null) continue;

      for (var m = 0; m < ps; ++m) {
        var val = points[i + m];
        if (val == null || !format[m][formatColumn]) continue;

        if (!(val in categories)) {
          categories[val] = index;
          ++index;
        }

        points[i + m] = categories[val];
      }
    }
  }

  function processDatapoints(plot, series, datapoints) {
    setupCategoriesForAxis(series, "xaxis", datapoints);
    setupCategoriesForAxis(series, "yaxis", datapoints);
  }

  function init(plot) {
    plot.hooks.processRawData.push(processRawData);
    plot.hooks.processDatapoints.push(processDatapoints);
  }

  $.plot.plugins.push({
    init: init,
    options: options,
    name: 'categories',
    version: '1.0'
  });
})(jQuery);

/***/ }),

/***/ 12:
/*!***********************************************************************!*\
  !*** multi ./resources/plugins/flot-charts/jquery.flot.categories.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\stock-management\resources\plugins\flot-charts\jquery.flot.categories.js */"./resources/plugins/flot-charts/jquery.flot.categories.js");


/***/ })

/******/ });