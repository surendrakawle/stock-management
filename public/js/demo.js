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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/js/demo.js":
/*!*********************************!*\
  !*** ./resources/js/js/demo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  skinChanger();
  activateNotificationAndTasksScroll();
  setSkinListHeightAndScroll(true);
  setSettingListHeightAndScroll(true);
  $(window).resize(function () {
    setSkinListHeightAndScroll(false);
    setSettingListHeightAndScroll(false);
  });
}); //Skin changer

function skinChanger() {
  $('.right-sidebar .demo-choose-skin li').on('click', function () {
    var $body = $('body');
    var $this = $(this);
    var existTheme = $('.right-sidebar .demo-choose-skin li.active').data('theme');
    $('.right-sidebar .demo-choose-skin li').removeClass('active');
    $body.removeClass('theme-' + existTheme);
    $this.addClass('active');
    $body.addClass('theme-' + $this.data('theme'));
  });
} //Skin tab content set height and show scroll


function setSkinListHeightAndScroll(isFirstTime) {
  var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
  var $el = $('.demo-choose-skin');

  if (!isFirstTime) {
    $el.slimScroll({
      destroy: true
    }).height('auto');
    $el.parent().find('.slimScrollBar, .slimScrollRail').remove();
  }

  $el.slimscroll({
    height: height + 'px',
    color: 'rgba(0,0,0,0.5)',
    size: '6px',
    alwaysVisible: false,
    borderRadius: '0',
    railBorderRadius: '0'
  });
} //Setting tab content set height and show scroll


function setSettingListHeightAndScroll(isFirstTime) {
  var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
  var $el = $('.right-sidebar .demo-settings');

  if (!isFirstTime) {
    $el.slimScroll({
      destroy: true
    }).height('auto');
    $el.parent().find('.slimScrollBar, .slimScrollRail').remove();
  }

  $el.slimscroll({
    height: height + 'px',
    color: 'rgba(0,0,0,0.5)',
    size: '6px',
    alwaysVisible: false,
    borderRadius: '0',
    railBorderRadius: '0'
  });
} //Activate notification and task dropdown on top right menu


function activateNotificationAndTasksScroll() {
  $('.navbar-right .dropdown-menu .body .menu').slimscroll({
    height: '254px',
    color: 'rgba(0,0,0,0.5)',
    size: '4px',
    alwaysVisible: false,
    borderRadius: '0',
    railBorderRadius: '0'
  });
} //Google Analiytics ======================================================================================


addLoadEvent(loadTracking);
var trackingId = 'UA-30038099-6';

function addLoadEvent(func) {
  var oldonload = window.onload;

  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}

function loadTracking() {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', trackingId, 'auto');
  ga('send', 'pageview');
} //========================================================================================================

/***/ }),

/***/ 17:
/*!***************************************!*\
  !*** multi ./resources/js/js/demo.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\stock-management\resources\js\js\demo.js */"./resources/js/js/demo.js");


/***/ })

/******/ });