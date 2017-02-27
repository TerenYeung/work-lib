/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//global and default stylesheet
	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	
	//homePage-3Drotate-effect
	var rotate3D = __webpack_require__(9);
	rotate3D.init();
	
	//nav-stickup-effect
	var StickUp = __webpack_require__(12);
	StickUp.init($('.blade-homePage-nav'));
	
	//testimonials-slide-effect
	var Slide = __webpack_require__(15);
	new Slide();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js?resolve url!./style.styl", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js?resolve url!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".blade-homePage .blade-homePage-wrap {\n  position: relative;\n  background: #fff url(\"https://terenyeung.github.io/mywork/mock-website/src/assets/img/bg-image-2.jpg\") no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-nav {\n  padding: 7px 40px;\n  box-sizing: border-box;\n  width: 100%;\n  position: absolute;\n  z-index: 99;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo-2 {\n  display: none;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo {\n  height: 61px;\n  float: left;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo img {\n  position: relative;\n  top: 12px;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-button-menu {\n  height: 61px;\n  line-height: 61px;\n  float: right;\n  color: #fff;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-button-menu:hover {\n  cursor: pointer;\n}\n@media (max-width: 970px) {\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav {\n    border-bottom: 1px solid #eee;\n    background: #fff;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo-2 {\n    display: block;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo-2 .icon-menu {\n    font-size: 30px;\n    vertical-align: middle;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo-2 .icon-menu:hover {\n    cursor: pointer;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo-2 .nav-img {\n    padding-left: 10px;\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-logo {\n    display: none;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-nav .blade-homePage-nav-button-menu {\n    display: none;\n  }\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-themeIntro {\n  width: 1200px;\n  margin: 0 auto;\n  padding: 100px 0;\n  text-align: center;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-themeIntro p.caption {\n  margin: 40px 0;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-themeIntro h1 {\n  margin: 40px 0;\n}\n.blade-homePage .blade-homePage-wrap .blade-homePage-themeIntro p.large {\n  width: 870px;\n  margin: 0 auto;\n}\n@media (max-width: 970px) {\n  .blade-homePage .blade-homePage-wrap .blade-homePage-themeIntro {\n    width: 100%;\n  }\n  .blade-homePage .blade-homePage-wrap .blade-homePage-themeIntro p.large {\n    width: 80%;\n  }\n}\n.blade-sidebar {\n  position: absolute;\n  top: 155px;\n  right: 80px;\n  text-align: right;\n  width: 300px;\n  display: none;\n}\n.blade-sidebar .blade-sidebar-list li {\n  padding: 20px 0;\n  transition: color 0.3s;\n}\n.blade-sidebar .blade-sidebar-list li:hover {\n  color: #aa9144;\n}\n.blade-sidebar .blade-sidebar-list li a {\n  font: 800 16px/24px \"Jaapokki\", Helvetica, Arial, sans-serif;\n  color: #000;\n}\n.blade-sidebar .blade-sidebar-list li .icon-arrow {\n  display: inline-block;\n  transform: rotateZ(180deg);\n}\n.blade-sidebar .blade-sidebar-contacts {\n  padding-top: 80px;\n}\n.blade-sidebar .blade-sidebar-contacts li {\n  display: inline-block;\n  padding: 0 15px;\n  transition: color 0.3s;\n}\n.blade-sidebar .blade-sidebar-contacts li:hover {\n  color: #aa9144;\n}\n.blade-sidebar-left {\n  display: none;\n}\n@media (max-width: 970px) {\n  .blade-sidebar-left {\n    position: fixed;\n    top: 54px;\n    background: #fff;\n    overflow: auto;\n  }\n  .blade-sidebar-left .blade-sidebar-left-list {\n    width: 250px;\n  }\n  .blade-sidebar-left .blade-sidebar-left-list li {\n    padding: 15px 10px;\n    transition: all 0.3s;\n  }\n  .blade-sidebar-left .blade-sidebar-left-list li a {\n    color: #000;\n  }\n  .blade-sidebar-left .blade-sidebar-left-list li:hover {\n    background: #aa9144;\n  }\n  .blade-sidebar-left .blade-sidebar-left-list li:hover a,\n  .blade-sidebar-left .blade-sidebar-left-list li:hover .icon-arrow {\n    color: #fff;\n  }\n  .blade-sidebar-left .blade-sidebar-left-list li .icon-arrow {\n    transform: rotateZ(180deg);\n    float: right;\n  }\n  .blade-sidebar-left .blade-sidebar-contacts li {\n    display: inline-block;\n    padding: 10px 15px;\n  }\n  .blade-sidebar-left .blade-sidebar-contacts li:hover {\n    color: #aa9144;\n  }\n}\n.blade-services {\n  background: #e8eddf;\n  padding: 60px 0;\n}\n.blade-services .blade-services-wrap {\n  width: 1200px;\n  margin: 0 auto;\n}\n.blade-services .blade-services-wrap p.big {\n  padding: 20px 0;\n  width: 720px;\n  margin: 0 auto;\n}\n.blade-services .blade-services-wrap .blade-services-list {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.blade-services .blade-services-wrap .blade-services-list li {\n  flex-basis: 25%;\n  text-align: center;\n}\n.blade-services .blade-services-wrap .blade-services-list li a {\n  font-weight: 800;\n  color: #000;\n  display: inline-block;\n  padding: 20px 0;\n  transition: color 0.3s;\n}\n.blade-services .blade-services-wrap .blade-services-list li a:hover {\n  color: #aa9144;\n}\n.blade-services .blade-services-banner {\n  background: #fff;\n  width: 1200px;\n  height: 580px;\n  margin: 60px auto 0;\n  display: flex;\n  justify-content: space-between;\n}\n.blade-services .blade-services-banner .blade-services-banner-intro {\n  text-align: center;\n  padding: 130px 100px;\n}\n.blade-services .blade-services-banner .blade-services-banner-intro p.big {\n  padding: 60px 0;\n}\n.blade-services .blade-services-banner .blade-services-banner-intro a:hover {\n  color: #fff;\n  background: #000;\n}\n.blade-barbers {\n  background: #e8eddf;\n}\n.blade-barbers .blade-barbers-wrap {\n  width: 1200px;\n  margin: 0 auto;\n}\n.blade-barbers .blade-barbers-wrap p.big {\n  width: 720px;\n  margin: 60px auto;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list {\n  display: flex;\n  justify-content: space-between;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list >li {\n  background: #fff;\n  flex-basis: 370px;\n  text-align: center;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list >li .blade-barbers-list-wrap {\n  padding: 40px 30px 20px;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list >li a {\n  font-weight: 800;\n  color: #000;\n  transition: color 0.3s;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list >li a:hover {\n  color: #aa9144;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list >li p.small {\n  padding: 20px 0;\n}\n.blade-barbers .blade-barbers-wrap .blade-barbers-list >li .blade-barbers-contacts li {\n  display: inline-block;\n  padding: 0 10px;\n}\n.blade-barbers .blade-barbers-banner {\n  margin-top: 60px;\n  background: #242423 url(\"https://terenyeung.github.io/mywork/mock-website/src/assets/img/bg-image-3.jpg\") no-repeat;\n  background-size: cover;\n  padding: 120px 0;\n  height: 309px;\n  text-align: left;\n}\n.blade-barbers .blade-barbers-banner .blade-barbers-banner-wrap {\n  margin: 0 auto;\n  width: 1200px;\n}\n.blade-barbers .blade-barbers-banner .blade-barbers-banner-wrap h2 {\n  text-align: left;\n  color: #fff;\n}\n.blade-barbers .blade-barbers-banner .blade-barbers-banner-wrap p {\n  text-align: left;\n  width: 570px;\n  padding: 80px 0;\n}\n.blade-testimonials {\n  background: #e8eddf;\n}\n.blade-testimonials .blade-testimonials-wrap {\n  padding: 60px 0;\n}\n.blade-testimonials .blade-testimonials-wrap p.big {\n  width: 720px;\n  margin: 40px auto;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide {\n  width: 1000px;\n  padding: 0 100px;\n  margin: 0 auto;\n  position: relative;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint {\n  width: 1000px;\n  height: 365px;\n  overflow: hidden;\n  background: #fff;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap {\n  width: 3000px;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item {\n  box-sizing: border-box;\n  float: left;\n  width: 1000px;\n  padding: 82.5px 100px;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-img {\n  float: left;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-img img {\n  border-radius: 50%;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-cite-contacts {\n  padding-left: 200px;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-cite-contacts cite {\n  display: block;\n  font-weight: 800;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-cite-contacts q {\n  display: block;\n  padding: 40px 0;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-cite-contacts .blade-testimonials-slide-contacts .iconfont {\n  padding: 0 5px;\n  color: #000;\n  transition: color 0.3s;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .blade-testimonials-slide-viewpoint .blade-testimonials-slide-wrap .blade-testimonials-slide-item .blade-testimonials-slide-cite-contacts .blade-testimonials-slide-contacts .iconfont:hover {\n  color: #aa9144;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .iconfont.icon-arrow-2 {\n  position: absolute;\n  color: #999;\n  font-size: 40px;\n  transition: all 0.3s;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .iconfont.icon-arrow-2:hover {\n  color: #aa9144;\n  cursor: pointer;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .iconfont.icon-arrow-2.arrow-left {\n  transform: translateY(-50%) rotateZ(180deg);\n  top: 50%;\n  left: 0;\n}\n.blade-testimonials .blade-testimonials-wrap .blade-testimonials-slide .iconfont.icon-arrow-2.arrow-right {\n  transform: translateY(-50%);\n  top: 50%;\n  right: 0;\n}\n@media (max-width: 970px) {\n  .blade-testimonials .blade-testimonials-wrap p.big {\n    width: 80%;\n  }\n}\n.blade-blog-posts {\n  background: #e8eddf;\n  padding-bottom: 60px;\n}\n.blade-blog-posts p.big {\n  width: 720px;\n  margin: 40px auto;\n}\n.blade-blog-posts .blade-blog-posts-wrap {\n  width: 1200px;\n  margin: 0 auto;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:first-child,\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:last-child {\n  background: #242423;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:first-child h2,\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:last-child h2 {\n  text-align: left;\n  color: #fff;\n  width: 300px;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:nth-child(2) {\n  background: #fff;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:nth-child(2) h2 {\n  color: #000;\n  text-align: left;\n  width: 300px;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list:nth-child(2) a:hover {\n  background: #000;\n  color: #fff;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list .blade-blog-posts-intro {\n  padding: 100px;\n}\n.blade-blog-posts .blade-blog-posts-wrap .blade-blog-posts-list .blade-blog-posts-intro p.small {\n  padding: 40px 0;\n}\n.blade-footer {\n  background: #fff;\n  padding: 60px 0;\n}\n.blade-footer .blade-footer-wrap {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n.blade-footer .blade-footer-wrap .blade-footer-logo {\n  margin: 0 auto;\n}\n.blade-footer .blade-footer-wrap p.big {\n  width: 400px;\n  margin: 20px auto;\n}\n.blade-footer .blade-footer-wrap .blade-footer-nav {\n  padding: 40px 0;\n}\n.blade-footer .blade-footer-wrap .blade-footer-nav li {\n  display: inline-block;\n  padding: 0 20px;\n}\n.blade-footer .blade-footer-wrap .blade-footer-nav li a {\n  transition: color 0.3s;\n  font-weight: 800;\n  color: #9b9b9b;\n}\n.blade-footer .blade-footer-wrap .blade-footer-nav li a:hover {\n  color: #aa9144;\n}\n.blade-footer .blade-footer-wrap .blade-footer-contacts {\n  color: #9b9b9b;\n}\n.blade-footer .blade-footer-wrap .blade-footer-contacts li {\n  display: inline-block;\n  padding: 0 10px;\n}\n.blade-footer .blade-footer-wrap .blade-footer-contacts li a {\n  font-weight: 800;\n  transition: color 0.3s;\n  color: #9b9b9b;\n}\n.blade-footer .blade-footer-wrap .blade-footer-contacts li a:hover {\n  color: #aa9144;\n}\n@media (max-width: 970px) {\n  .blade-footer .blade-footer-wrap {\n    width: 80%;\n  }\n  .blade-footer .blade-footer-wrap p.big {\n    width: 60%;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./iconfont.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./iconfont.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: \"iconfont\";\n  src: url(\"https://at.alicdn.com/t/font_48510edk0iy0hpvi.eot?t=1486003040514\"); /* IE9*/\n  src: url(\"https://at.alicdn.com/t/font_48510edk0iy0hpvi.eot?t=1486003040514#iefix\") format('embedded-opentype'), url(\"https://at.alicdn.com/t/font_48510edk0iy0hpvi.woff?t=1486003040514\") format('woff'), url(\"https://at.alicdn.com/t/font_48510edk0iy0hpvi.ttf?t=1486003040514\") format('truetype'), url(\"https://at.alicdn.com/t/font_48510edk0iy0hpvi.svg?t=1486003040514#iconfont\") format('svg'); /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-twitter:after {\n  content: \"\\E634\";\n}\n.icon-arrow:after {\n  content: \"\\E60F\";\n}\n.icon-menu:after {\n  content: \"\\E6C1\";\n}\n.icon-youtube:after {\n  content: \"\\E6D7\";\n}\n.icon-linkin:after {\n  content: \"\\E6AE\";\n}\n.icon-facebook:after {\n  content: \"\\E6F2\";\n}\n.icon-arrow-2:after {\n  content: \"\\E610\";\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./reset.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./reset.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody,\nul,\nli,\nh1,\nh2,\nh3,\np,\ncite,\nq {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Roboto Mono\", Monaco, Consolas, \"Courier New\", monospace, Helvetica, Arial, sans-serif;\n  position: relative;\n}\nul,\nli {\n  list-style: none;\n}\nh1 {\n  font-size: 72px;\n  text-align: center;\n  font-weight: 800;\n  color: #fff;\n}\nh2 {\n  font-size: 36px;\n  text-transform: uppercase;\n  text-align: center;\n}\np.caption {\n  font-size: 24px;\n  color: #fff;\n  font-weight: 800;\n  letter-spacing: 5px;\n}\np.large {\n  font-size: 16px;\n  color: #fff;\n  text-align: center;\n}\np.big {\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #999;\n}\np.small {\n  font-size: 12px;\n  color: #999;\n}\na {\n  text-decoration: none;\n}\na.btn {\n  background: #aa9144;\n  color: #fff;\n  display: inline-block;\n  font: 800 10px/18px \"Jaapokki\", Helvetica, Arial, sans-serif;\n  padding: 8px 40px;\n  border-radius: 20px;\n  transition: all 0.3s;\n}\na.btn:hover {\n  background: #fff;\n  color: #000;\n}\n.clearfix:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(10);
	
	module.exports = {
		init: function init() {
			$('.blade-homePage-nav-button-menu>.icon-menu').on('click', function (e) {
				console.log(1);
				e.preventDefault();
				if ($('.blade-homePage-wrap').hasClass('rotate3D')) {
					$('.blade-homePage-wrap').removeClass('rotate3D');
					$('.blade-sidebar').fadeOut('fast');
					setTimeout(function () {
						$('.blade-homePage').removeClass('perspective');
					}, 800);
				} else {
					$('.blade-homePage').addClass('perspective');
					$('.blade-homePage-wrap').addClass('rotate3D');
					$('.blade-sidebar').fadeIn('slow');
				}
			});
	
			$('.blade-homePage-nav-logo-2 .icon-menu').on('click', function (e) {
				if ($('.blade-sidebar-left').hasClass('sidebar-left-show')) {
					$('.blade-sidebar-left').removeClass('sidebar-left-show');
				} else {
					$('.blade-sidebar-left').addClass('sidebar-left-show');
				}
			});
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./rotate3D.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./rotate3D.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".perspective {\n  perspective: 800px;\n}\n.blade-homePage-wrap {\n  transition: all 0.3s;\n}\n.rotate3D {\n  transform: rotateY(35deg);\n}\n.sidebar-left-show {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(13);
	module.exports = {
		init: function init($selector) {
			var $nav = $selector;
			var navOffsetLeft = $selector.offset().left,
			    navOffsetTop = $selector.offset().top;
	
			$(window).on('scroll', function (e) {
				var winScrollTop = $(e.target).scrollTop();
				if (winScrollTop > navOffsetTop) {
					if (!isFixed()) {
						setFixed();
					}
				} else {
					if (isFixed()) {
						unsetFixed();
					}
				}
			});
	
			function isFixed() {
				return $nav.data('data-fixed');
			}
	
			function setFixed() {
				$nav.data('data-fixed', true).addClass('stickup');
	
				$nav.find('.blade-homePage-nav-logo>img').attr('src', 'src/assets/img/logo-default-199x36.png');
			}
			function unsetFixed() {
				$nav.data('data-fixed', false).removeClass('stickup');
				$nav.find('.blade-homePage-nav-logo>img').attr('src', 'src/assets/img/logo-white-200x36.png');
			}
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./stickUp.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/stylus-loader/index.js?resolve url!./stickUp.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".stickup {\n  position: fixed !important;\n  top: 0;\n  z-index: 999;\n  background: #fff;\n}\n.stickup .blade-homePage-nav-button-menu a.btn:hover {\n  color: #fff;\n  background: #000;\n}\n.stickup .blade-homePage-nav-button-menu .icon-menu {\n  color: #000;\n}\n", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	function Slide(opts) {
	  this.init(opts);
	}
	
	Slide.prototype = {
	  constructor: Slide,
	  init: function init(opts) {
	
	    this.$imgList = $('.blade-testimonials-slide-item');
	    this.$imgLength = this.$imgList.length;
	    this.$arrow_left = $('.arrow-left');
	    this.$arrow_right = $('.arrow-right');
	
	    this.bindEvent();
	  },
	
	  curImg: 0,
	
	  play: function play(idx) {
	
	    this.curImg += idx;
	
	    if (this.curImg === this.$imgList.length) {
	      this.curImg = 0;
	    }
	    if (this.curImg === -1) {
	      this.curImg = this.$imgList.length - 1;
	    }
	
	    this.$imgList.eq(this.curImg).fadeIn(1000);
	    if (idx === 1) {
	      this.$imgList.eq(this.curImg - 1).fadeOut(100);
	    }
	    if (idx === -1 && this.curImg === this.$imgList.length - 1) {
	      this.$imgList.eq(this.curImg - (this.$imgList.length - 1)).fadeOut(100);
	    } else if (idx === -1) {
	      this.$imgList.eq(this.curImg + 1).fadeOut(100);
	    }
	  },
	
	  bindEvent: function bindEvent() {
	    var _this = this;
	
	    this.$arrow_left.on('click', function () {
	      _this.play(-1);
	    });
	
	    this.$arrow_right.on('click', function () {
	      _this.play(1);
	    });
	  }
	};
	
	module.exports = Slide;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map