/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,100;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(242, 235, 226);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 90%;\\r\\n  margin: 2rem auto;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.head,\\r\\nform,\\r\\n.each {\\r\\n  border-bottom: 1px solid rgb(185, 185, 185);\\r\\n  padding: 0.5rem 1rem;\\r\\n}\\r\\n\\r\\nhead {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n#form {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#form input {\\r\\n  width: 95%;\\r\\n  height: 100%;\\r\\n  font-style: italic;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#form button {\\r\\n  outline: none;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.ic #check {\\r\\n  color: blue;\\r\\n  display: none;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.it #check {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#form i {\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.each {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.each form {\\r\\n  width: 100%;\\r\\n  padding: 0;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#tasks {\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n  margin: 0 10px;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.anti {\\r\\n  background-color: antiquewhite;\\r\\n}\\r\\n\\r\\n#trash {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.pop #trash {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.pop #more {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.ic {\\r\\n  height: 15px;\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.ic .white {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border: 2px solid gray;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.it .white {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.line {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.clears {\\r\\n  padding: 0.7rem;\\r\\n  text-align: center;\\r\\n  background-color: rgb(203, 203, 203);\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  background: transparent;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  main {\\r\\n    width: 70%;\\r\\n  }\\r\\n\\r\\n  main p {\\r\\n    font-size: 21px;\\r\\n  }\\r\\n\\r\\n  .ic {\\r\\n    height: 20px;\\r\\n    width: 23px;\\r\\n  }\\r\\n\\r\\n  .ic i {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n\\r\\n  #tasks,\\r\\n  #clear {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.css */ \"./src/style/index.css\");\n/* harmony import */ var _module_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/form.js */ \"./src/module/form.js\");\n\n\n\n(0,_module_form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/module/array.js":
/*!*****************************!*\
  !*** ./src/module/array.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Arr)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/module/tasks.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/module/display.js\");\n/* harmony import */ var _checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checker.js */ \"./src/module/checker.js\");\n/* harmony import */ var _linetru_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linetru.js */ \"./src/module/linetru.js\");\n\n\n\n\n\nclass Arr {\n  constructor() {\n    this.todos = [];\n  }\n\n  addTodo(desc, main) {\n    const fresh = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](desc, this.todos.length);\n    this.todos.push(fresh);\n    this.todos.map((todo) => (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todo, main));\n  }\n\n  removeTodo(id) {\n    const pree = this.todos.filter((td) => td.unik !== id);\n    this.todos.length = 0;\n    this.todos.push (...this.todos, ...pree)\n  }\n\n  changeindex() {\n     this.todos.forEach((todo,index) => todo.index = index)\n    }\n\n  changecomplete(check, get) {\n    (0,_checker_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(check, get, this.todos);\n  }\n\n  updatetodo(cmt, replace) {\n    this.todos.forEach((todo, index) => {\n      if (index === cmt) {\n        (\n          (todo.desc = replace.value)\n        );\n      }\n    });\n  }\n\n  reload(replay, main) {\n    this.todos.push(...this.todos, ...replay);\n    this.todos.map((todo) => (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todo, main));\n  }\n\n  linetr() {\n    (0,_linetru_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.todos);\n  }\n\n  onfresh() {\n    this.todos.forEach((to) => {\n      if (to.complete === true) {\n        const each = document.querySelectorAll('.each');\n        each.forEach((e) => {\n          if (to.unik === parseInt(e.dataset.unik) ) {\n            e.setAttribute('id', 'completed');\n            const pro = e.querySelector('.ic');\n            pro.classList.add('it');\n            const pre = e.querySelector('#tasks');\n            pre.classList.add('line');\n          }\n        });\n      }\n    });\n  }\n\n  clear() {  \n        const each = document.querySelectorAll('.each');\n        each.forEach((tee) => {\n          if (tee.id === 'completed') {\n            tee.remove();\n          }\n      const pree = this.todos.filter((td) => td.complete !== true);\n      this.todos.length = 0;\n      this.todos.push (...this.todos, ...pree)\n      \n    });\n\n    \n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/module/array.js?");

/***/ }),

/***/ "./src/module/checker.js":
/*!*******************************!*\
  !*** ./src/module/checker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checker = (check, get, Arr) => {\n  get.forEach((ge) => ge.addEventListener('click', () => {\n    const grand = ge.parentElement.parentElement;\n    grand.classList.add('it');\n    grand.setAttribute('id', 'completed');\n    const tasks = grand.querySelector('#tasks');\n    tasks.classList.add('line');\n\n    Arr.forEach((ar) => {\n      if (ar.unik === parseInt(ge.dataset.unik,10) ) {\n        ar.complete = true;\n      }\n      localStorage.setItem('store', JSON.stringify(Arr));\n    });\n    \n  }));\n\n  check.forEach((chec) => chec.addEventListener('click', () => {\n    const grand = chec.parentElement.parentElement;\n    grand.classList.remove('it');\n    grand.removeAttribute('id');\n    const tasks = grand.querySelector('#tasks');\n    tasks.classList.remove('line');\n\n    Arr.forEach((ar) => {\n      if (ar.unik === parseInt(chec.dataset.unik,10)) {\n        ar.complete = false;\n      }\n      localStorage.setItem('store', JSON.stringify(Arr));\n    });\n\n    \n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checker);\n\n\n//# sourceURL=webpack://todo_list/./src/module/checker.js?");

/***/ }),

/***/ "./src/module/display.js":
/*!*******************************!*\
  !*** ./src/module/display.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = (arry, main) => {\n  const view = `\n    <div class=\"ic\">\n      <div class='white' id ='box' data-unik = ${arry.unik}></div>\n      <i class=\"fa-solid fa-check\" id ='check' data-unik = ${arry.unik}></i>\n    </div>\n    <form>\n      <input type=\"text\" id=\"tasks\" value= \"${arry.desc}\"  data-unik = ${arry.unik} readonly >\n    </form>\n    <div class=\"icons\">\n        <i class=\"fa-solid fa-ellipsis-vertical\" id=\"more\"></i>\n        <i class=\"fa-solid fa-trash\" id=\"trash\" data-unik = ${arry.unik}></i>\n    </div>`;\n\n  const each = document.createElement('div');\n  each.classList.add('each');\n  each.setAttribute('data-unik', arry.unik);\n\n  each.innerHTML = view;\n  main.appendChild(each);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://todo_list/./src/module/display.js?");

/***/ }),

/***/ "./src/module/form.js":
/*!****************************!*\
  !*** ./src/module/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ \"./src/module/array.js\");\n/* harmony import */ var _more_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.js */ \"./src/module/more.js\");\n\r\n\r\n\r\n\r\nconst form = () => {\r\n  const master = document.querySelector('#master');\r\n  const fort = document.querySelector('#form');\r\n  const geh = document.querySelector('#name');\r\n\r\n  const todo = new _array_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n  fort.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    if (geh.value === '') {\r\n      return;\r\n    }\r\n    master.innerHTML = '';\r\n    todo.addTodo(geh.value, master);\r\n    geh.value = '';\r\n    localStorage.setItem('store', JSON.stringify(todo.todos));\r\n\r\n    (0,_more_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todo);\r\n\r\n    const remove = document.querySelectorAll('#trash');\r\n    remove.forEach((re) => re.addEventListener('click', () => {\r\n      todo.removeTodo(parseInt(re.dataset.unik,10))\r\n      todo.changeindex();\r\n      localStorage.setItem('store', JSON.stringify(todo.todos));\r\n      re.parentElement.parentElement.remove();\r\n    }));\r\n\r\n    const get = document.querySelectorAll('#box');\r\n    const check = document.querySelectorAll('#check');\r\n    todo.changecomplete(check, get);\r\n    todo.onfresh();\r\n\r\n    const clean = document.querySelector('#clear');\r\n\r\n    clean.addEventListener('click', () => {\r\n      todo.clear();\r\n      todo.changeindex();\r\n      localStorage.setItem('store', JSON.stringify(todo.todos));\r\n    });\r\n    console.log(todo)\r\n  });\r\n\r\n  window.addEventListener('load', () => {\r\n    const replay = JSON.parse(localStorage.getItem('store'));\r\n    todo.reload(replay, master);\r\n    \r\n    const get = document.querySelectorAll('#box');\r\n    const check = document.querySelectorAll('#check');\r\n    todo.changecomplete(check, get);\r\n    todo.linetr();\r\n\r\n\r\n    (0,_more_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todo);\r\n\r\n    const remove = document.querySelectorAll('#trash');\r\n    remove.forEach((re) => re.addEventListener('click', () => {\r\n      todo.removeTodo(parseInt(re.dataset.unik,10))\r\n      todo.changeindex();\r\n      localStorage.setItem('store', JSON.stringify(todo.todos));\r\n      re.parentElement.parentElement.remove();      \r\n    }));\r\n\r\n\r\n  const clean = document.querySelector('#clear');\r\n  clean.addEventListener('click', () => {\r\n    todo.clear();\r\n    todo.changeindex();\r\n    localStorage.setItem('store', JSON.stringify(todo.todos));\r\n  });\r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://todo_list/./src/module/form.js?");

/***/ }),

/***/ "./src/module/linetru.js":
/*!*******************************!*\
  !*** ./src/module/linetru.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst linetru = (tass) => {\n  tass.forEach((tas) => {\n    if (tas.complete === true) {\n      const tasks = document.querySelectorAll('#tasks');\n      tasks.forEach((tif) => {\n        if (parseInt(tif.dataset.unik) === tas.unik) {\n          tif.classList.add('line');\n          const paren = tif.parentElement.parentElement;\n          const eff = paren.querySelector('.ic');\n          paren.setAttribute('id', 'completed');\n          eff.classList.add('it');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linetru);\n\n\n//# sourceURL=webpack://todo_list/./src/module/linetru.js?");

/***/ }),

/***/ "./src/module/more.js":
/*!****************************!*\
  !*** ./src/module/more.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst more = (todo) => {\n  const more = document.querySelectorAll('#more');\n  more.forEach((mor, cmt) => (\n    mor.addEventListener('click', () => {\n      const pop = mor.parentElement;\n      pop.classList.add('pop');\n      const each = mor.parentElement.parentElement;\n      each.classList.add('anti');\n      const replace = mor.parentElement.previousElementSibling.querySelector('#tasks');\n      replace.removeAttribute('readonly');\n      replace.focus();\n      replace.addEventListener('keyup', () => {\n        todo.updatetodo(cmt, replace);\n        localStorage.setItem('store', JSON.stringify(todo.todos));\n      });\n      const parent = mor.parentElement.previousElementSibling;\n      parent.addEventListener('submit', (e) => {\n        e.preventDefault();\n        replace.setAttribute('readonly', 'readonly');\n        each.classList.remove('anti');\n        pop.classList.remove('pop');\n      });\n    })\n  ));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (more);\n\n//# sourceURL=webpack://todo_list/./src/module/more.js?");

/***/ }),

/***/ "./src/module/tasks.js":
/*!*****************************!*\
  !*** ./src/module/tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\n  constructor(desc, index, unik) {\n    this.desc = desc;\n    this.complete = false;\n    this.index = index;\n    this.unik = Math.floor(Math.random() * 1000);\n  }\n}\n\n\n//# sourceURL=webpack://todo_list/./src/module/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;