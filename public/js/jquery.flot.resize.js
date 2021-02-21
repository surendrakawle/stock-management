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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/plugins/flot-charts/jquery.flot.resize.js":
/*!*************************************************************!*\
  !*** ./resources/plugins/flot-charts/jquery.flot.resize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, e, t) {
  "$:nomunge";

  var i = [],
      n = $.resize = $.extend($.resize, {}),
      a,
      r = false,
      s = "setTimeout",
      u = "resize",
      m = u + "-special-event",
      o = "pendingDelay",
      l = "activeDelay",
      f = "throttleWindow";
  n[o] = 200;
  n[l] = 20;
  n[f] = true;
  $.event.special[u] = {
    setup: function setup() {
      if (!n[f] && this[s]) {
        return false;
      }

      var e = $(this);
      i.push(this);
      e.data(m, {
        w: e.width(),
        h: e.height()
      });

      if (i.length === 1) {
        a = t;
        h();
      }
    },
    teardown: function teardown() {
      if (!n[f] && this[s]) {
        return false;
      }

      var e = $(this);

      for (var t = i.length - 1; t >= 0; t--) {
        if (i[t] == this) {
          i.splice(t, 1);
          break;
        }
      }

      e.removeData(m);

      if (!i.length) {
        if (r) {
          cancelAnimationFrame(a);
        } else {
          clearTimeout(a);
        }

        a = null;
      }
    },
    add: function add(e) {
      if (!n[f] && this[s]) {
        return false;
      }

      var i;

      function a(e, n, a) {
        var r = $(this),
            s = r.data(m) || {};
        s.w = n !== t ? n : r.width();
        s.h = a !== t ? a : r.height();
        i.apply(this, arguments);
      }

      if ($.isFunction(e)) {
        i = e;
        return a;
      } else {
        i = e.handler;
        e.handler = a;
      }
    }
  };

  function h(t) {
    if (r === true) {
      r = t || 1;
    }

    for (var s = i.length - 1; s >= 0; s--) {
      var l = $(i[s]);

      if (l[0] == e || l.is(":visible")) {
        var f = l.width(),
            c = l.height(),
            d = l.data(m);

        if (d && (f !== d.w || c !== d.h)) {
          l.trigger(u, [d.w = f, d.h = c]);
          r = t || true;
        }
      } else {
        d = l.data(m);
        d.w = 0;
        d.h = 0;
      }
    }

    if (a !== null) {
      if (r && (t == null || t - r < 1e3)) {
        a = e.requestAnimationFrame(h);
      } else {
        a = setTimeout(h, n[o]);
        r = false;
      }
    }
  }

  if (!e.requestAnimationFrame) {
    e.requestAnimationFrame = function () {
      return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t, i) {
        return e.setTimeout(function () {
          t(new Date().getTime());
        }, n[l]);
      };
    }();
  }

  if (!e.cancelAnimationFrame) {
    e.cancelAnimationFrame = function () {
      return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout;
    }();
  }
})(jQuery, this);

(function ($) {
  var options = {}; // no options

  function init(plot) {
    function onResize() {
      var placeholder = plot.getPlaceholder(); // somebody might have hidden us and we can't plot
      // when we don't have the dimensions

      if (placeholder.width() == 0 || placeholder.height() == 0) return;
      plot.resize();
      plot.setupGrid();
      plot.draw();
    }

    function bindEvents(plot, eventHolder) {
      plot.getPlaceholder().resize(onResize);
    }

    function shutdown(plot, eventHolder) {
      plot.getPlaceholder().unbind("resize", onResize);
    }

    plot.hooks.bindEvents.push(bindEvents);
    plot.hooks.shutdown.push(shutdown);
  }

  $.plot.plugins.push({
    init: init,
    options: options,
    name: 'resize',
    version: '1.0'
  });
})(jQuery);

/***/ }),

/***/ 10:
/*!*******************************************************************!*\
  !*** multi ./resources/plugins/flot-charts/jquery.flot.resize.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\stock-management\resources\plugins\flot-charts\jquery.flot.resize.js */"./resources/plugins/flot-charts/jquery.flot.resize.js");


/***/ })

/******/ });