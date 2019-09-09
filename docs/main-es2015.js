(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-current-weather></app-current-weather>\n    <app-loading></app-loading>\n    <app-forecast></app-forecast>\n    <app-geolocation-button></app-geolocation-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-weather/current-weather.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-weather/current-weather.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-weather-card [@showUpElement] [weather]=\"weatherService.weather$ | async\"></app-weather-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forecast/forecast.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forecast/forecast.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@showUpCollection]=\"(forecastService.weather$ | async)?.length\">\n  <app-weather-card [weather]=\"weather\" *ngFor=\"let weather of forecastService.weather$ | async\" ></app-weather-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/geolocation-button/geolocation-button.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/geolocation-button/geolocation-button.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!(geolocationService.coords$ | async)\">\n  <button (click)=\"geolocationService.requestGeolocation()\">Activar mi ubicación</button>\n  <p>Activatu ubicación para recibir los datos del clima para tu ciudad.</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@loading]=\"elements.length\" *ngIf=\"!(currentWeatherService.weather$ | async)\">\n  <div class=\"circle\" *ngFor=\"let color of elements\" [ngStyle]=\"{'background-color': color}\">\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-card/weather-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-card/weather-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" *ngIf=\"weather\">\n  <div class=\"icon\">\n    <app-weather-icon [code]=\"weather.cod\"></app-weather-icon>\n  </div>\n  <div class=\"temp\" *ngIf=\"weather.temp\">\n    <p>Temperatura</p>\n    <p class=\"big\">{{ weather.temp }}°</p>\n  </div>\n  <div class=\"low-temp\" *ngIf=\"weather.minMaxTemp\">\n    {{ weather.minMaxTemp.min }}°\n    <span>Mínima</span>\n  </div>\n  <div class=\"high-temp\" *ngIf=\"weather.minMaxTemp\">\n    {{ weather.minMaxTemp.max }}°\n    <span>Máxima</span>\n  </div>\n  <div class=\"description\">\n    <h2>{{ weather.name }}</h2>\n    <p>{{ weather.description }}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-icon/weather-icon.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-icon/weather-icon.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img [src]=\"'assets/svg-weather/'+this.icon+'.svg'\" alt=\"\">\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/loading.animation.ts":
/*!*************************************************!*\
  !*** ./src/app/animations/loading.animation.ts ***!
  \*************************************************/
/*! exports provided: loadingAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingAnimation", function() { return loadingAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const loadingAnimation = function () {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('loading', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(100, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(100, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ])
            ], { optional: true })
        ])
    ]);
};


/***/ }),

/***/ "./src/app/animations/showUp.animation.ts":
/*!************************************************!*\
  !*** ./src/app/animations/showUp.animation.ts ***!
  \************************************************/
/*! exports provided: showUpStaggered, showUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUpStaggered", function() { return showUpStaggered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUp", function() { return showUp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const showUpStaggered = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showUpCollection', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scaleY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(70, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'scaleY(1)' }))
            ])
        ], { optional: true })
    ])
]);
const showUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showUpElement', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'scaleY(1)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'scaleY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250)
    ])
]);


/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2dyYW1hY2lvbi9hbmd1bGFyL3dlYXRoZXJBcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxcOmhvc3RcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/geolocation.service */ "./src/app/services/geolocation.service.ts");



let AppComponent = class AppComponent {
    constructor(geolocationService) {
        this.geolocationService = geolocationService;
        this.title = 'weatherApp';
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/current-weather/current-weather.component */ "./src/app/components/current-weather/current-weather.component.ts");
/* harmony import */ var _components_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/weather-icon/weather-icon.component */ "./src/app/components/weather-icon/weather-icon.component.ts");
/* harmony import */ var _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/weather-card/weather-card.component */ "./src/app/components/weather-card/weather-card.component.ts");
/* harmony import */ var _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forecast/forecast.component */ "./src/app/components/forecast/forecast.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _components_geolocation_button_geolocation_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/geolocation-button/geolocation-button.component */ "./src/app/components/geolocation-button/geolocation-button.component.ts");





//Components







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_6__["CurrentWeatherComponent"],
            _components_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_7__["WeatherIconComponent"],
            _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCardComponent"],
            _components_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_9__["ForecastComponent"],
            _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
            _components_geolocation_button_geolocation_button_component__WEBPACK_IMPORTED_MODULE_11__["GeolocationButtonComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/current-weather/current-weather.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/current-weather/current-weather.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/current-weather/current-weather.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/current-weather/current-weather.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrentWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWeatherComponent", function() { return CurrentWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_current_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/current-weather.service */ "./src/app/services/current-weather.service.ts");
/* harmony import */ var _animations_showUp_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/showUp.animation */ "./src/app/animations/showUp.animation.ts");


//Services

//Animations

let CurrentWeatherComponent = class CurrentWeatherComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    ngOnInit() { }
};
CurrentWeatherComponent.ctorParameters = () => [
    { type: _services_current_weather_service__WEBPACK_IMPORTED_MODULE_2__["CurrentWeatherService"] }
];
CurrentWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-current-weather',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./current-weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/current-weather/current-weather.component.html")).default,
        animations: [_animations_showUp_animation__WEBPACK_IMPORTED_MODULE_3__["showUp"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./current-weather.component.scss */ "./src/app/components/current-weather/current-weather.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_current_weather_service__WEBPACK_IMPORTED_MODULE_2__["CurrentWeatherService"]])
], CurrentWeatherComponent);



/***/ }),

/***/ "./src/app/components/forecast/forecast.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.sass ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-weather-card {\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2dyYW1hY2lvbi9hbmd1bGFyL3dlYXRoZXJBcHAvc3JjL2FwcC9jb21wb25lbnRzL2ZvcmVjYXN0L2ZvcmVjYXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZvcmVjYXN0L2ZvcmVjYXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JlY2FzdC9mb3JlY2FzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC13ZWF0aGVyLWNhcmRcbiAgbWFyZ2luOiAxZW1cbiIsImFwcC13ZWF0aGVyLWNhcmQge1xuICBtYXJnaW46IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/forecast/forecast.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/forecast/forecast.component.ts ***!
  \***********************************************************/
/*! exports provided: ForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastComponent", function() { return ForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/forecast.service */ "./src/app/services/forecast.service.ts");
/* harmony import */ var _animations_showUp_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/showUp.animation */ "./src/app/animations/showUp.animation.ts");


//Services

//Animations

let ForecastComponent = class ForecastComponent {
    constructor(forecastService) {
        this.forecastService = forecastService;
    }
    ngOnInit() {
    }
};
ForecastComponent.ctorParameters = () => [
    { type: _services_forecast_service__WEBPACK_IMPORTED_MODULE_2__["ForecastService"] }
];
ForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forecast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forecast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forecast/forecast.component.html")).default,
        animations: [_animations_showUp_animation__WEBPACK_IMPORTED_MODULE_3__["showUpStaggered"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forecast.component.sass */ "./src/app/components/forecast/forecast.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forecast_service__WEBPACK_IMPORTED_MODULE_2__["ForecastService"]])
], ForecastComponent);



/***/ }),

/***/ "./src/app/components/geolocation-button/geolocation-button.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/components/geolocation-button/geolocation-button.component.sass ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: #ff2e63;\n  padding: 10px 15px;\n  outline: none;\n  border: 0;\n  color: #eaeaea;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  font-size: 1em;\n  cursor: pointer;\n}\nbutton:active {\n  opacity: 0.8;\n}\np {\n  opacity: 0.56;\n  font-size: 0.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2dyYW1hY2lvbi9hbmd1bGFyL3dlYXRoZXJBcHAvc3JjL2FwcC9jb21wb25lbnRzL2dlb2xvY2F0aW9uLWJ1dHRvbi9nZW9sb2NhdGlvbi1idXR0b24uY29tcG9uZW50LnNhc3MiLCIvcm9vdC9wcm9ncmFtYWNpb24vYW5ndWxhci93ZWF0aGVyQXBwL3NyYy9jb2xvcnMuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nZW9sb2NhdGlvbi1idXR0b24vZ2VvbG9jYXRpb24tYnV0dG9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDRlE7RURHUixrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0NMTztFRE1QLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRURGO0FGRUU7RUFDRSxZQUFBO0FFQUo7QUZFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBRUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZW9sb2NhdGlvbi1idXR0b24vZ2VvbG9jYXRpb24tYnV0dG9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY29sb3JzJ1xuXG5idXR0b25cbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxuICBwYWRkaW5nOiAxMHB4IDE1cHhcbiAgb3V0bGluZTogbm9uZVxuICBib3JkZXI6IDBcbiAgY29sb3I6ICRsaWdodFxuICBib3JkZXItcmFkaXVzOiA0cHhcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwwLjI0KVxuICBmb250LXNpemU6IDFlbVxuICBjdXJzb3I6IHBvaW50ZXJcbiAgJjphY3RpdmVcbiAgICBvcGFjaXR5OiAwLjhcblxucFxuICBvcGFjaXR5OiAwLjU2XG4gIGZvbnQtc2l6ZTogMC42ZW1cbiIsIiRkYXJrIDogIzI1MmEzNFxuJGFjY2VudCA6ICNmZjJlNjNcbiRsaWdodCA6ICNlYWVhZWFcbiRtYWluIDogIzA4ZDlkNlxuIiwiYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMmU2MztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjZWFlYWVhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjphY3RpdmUge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbnAge1xuICBvcGFjaXR5OiAwLjU2O1xuICBmb250LXNpemU6IDAuNmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/geolocation-button/geolocation-button.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/geolocation-button/geolocation-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GeolocationButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationButtonComponent", function() { return GeolocationButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geolocation.service */ "./src/app/services/geolocation.service.ts");



let GeolocationButtonComponent = class GeolocationButtonComponent {
    constructor(geolocationService) {
        this.geolocationService = geolocationService;
        this.active = false;
    }
    ngOnInit() {
        this.geolocationService.permission$.then((status) => {
            this.active = (status == "granted");
            if (this.active)
                this.geolocationService.requestGeolocation();
        });
    }
};
GeolocationButtonComponent.ctorParameters = () => [
    { type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"] }
];
GeolocationButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geolocation-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geolocation-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/geolocation-button/geolocation-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geolocation-button.component.sass */ "./src/app/components/geolocation-button/geolocation-button.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"]])
], GeolocationButtonComponent);



/***/ }),

/***/ "./src/app/components/loading/loading.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  text-align: center;\n  min-height: 22px;\n}\n\n.circle {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.circle:last-child(an+b) {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2dyYW1hY2lvbi9hbmd1bGFyL3dlYXRoZXJBcHAvc3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURERTtFQUNFLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXFw6aG9zdFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgbWluLWhlaWdodDogMjJweFxuXG4uY2lyY2xlXG4gIHdpZHRoOiAxMHB4XG4gIGhlaWdodDogMTBweFxuICBib3JkZXItcmFkaXVzOiA1MCVcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gIG1hcmdpbi1yaWdodDogNXB4XG4gICY6bGFzdC1jaGlsZChhbitiKVxuICAgIG1hcmdpbi1yaWdodDogMFxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMnB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNpcmNsZTpsYXN0LWNoaWxkKGFuK2IpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations_loading_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/loading.animation */ "./src/app/animations/loading.animation.ts");
/* harmony import */ var _services_current_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/current-weather.service */ "./src/app/services/current-weather.service.ts");


//Animations


let LoadingComponent = class LoadingComponent {
    constructor(currentWeatherService) {
        this.currentWeatherService = currentWeatherService;
        this._elements = ['#ffe5ec', '#ff80a0', '#ff2e63', '#800020', '#1a0006'];
    }
    ngOnInit() {
        this.set();
    }
    set() {
        this.elements = this._elements;
        this.scheduleNextIteration();
    }
    scheduleNextIteration() {
        setTimeout(() => {
            if (this.elements.length == 0)
                return this.set();
            this.clear();
        }, 100 * this._elements.length + 300);
    }
    clear() {
        this.elements = [];
        this.scheduleNextIteration();
    }
};
LoadingComponent.ctorParameters = () => [
    { type: _services_current_weather_service__WEBPACK_IMPORTED_MODULE_3__["CurrentWeatherService"] }
];
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html")).default,
        animations: [Object(_animations_loading_animation__WEBPACK_IMPORTED_MODULE_2__["loadingAnimation"])()],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.sass */ "./src/app/components/loading/loading.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_current_weather_service__WEBPACK_IMPORTED_MODULE_3__["CurrentWeatherService"]])
], LoadingComponent);



/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: inline-block;\n}\n\n.card {\n  box-sizing: border-box;\n  font-weight: slim;\n  background: white;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n  border-radius: 16px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  text-align: center;\n  padding: 2em;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, auto);\n  grid-template-areas: \"icon icon temperature temperature\" \"lowtemp lowtemp hightemp hightemp\" \"description description description description\";\n}\n\n.card .icon {\n  grid-area: icon;\n}\n\n.card .temp {\n  grid-area: temperature;\n}\n\n.card .temp p {\n  margin: 0;\n}\n\n.card .temp .big {\n  font-size: 2em;\n  color: #08d9d6;\n  font-weight: bold;\n}\n\n.card .description {\n  grid-area: description;\n}\n\n.card .description h2 {\n  color: #ff2e63;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  letter-spacing: 0.3em;\n}\n\n.low-temp {\n  grid-area: lowtemp;\n}\n\n.high-temp {\n  grid-area: hightemp;\n}\n\n.low-temp, .high-temp {\n  color: #ff2e63;\n}\n\n.low-temp span, .high-temp span {\n  color: #252a34;\n  opacity: 0.56;\n  font-size: 0.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290L3Byb2dyYW1hY2lvbi9hbmd1bGFyL3dlYXRoZXJBcHAvc3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXItY2FyZC93ZWF0aGVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHFCQUFBO0FDSkY7O0FET0E7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsOElBQ0E7QUNMRjs7QURVQTtFQUNFLGVBQUE7QUNQRjs7QURVQTtFQUNFLHNCQUFBO0FDUEY7O0FEUUU7RUFDRSxTQUFBO0FDTko7O0FEUUU7RUFDRSxjQUFBO0VBQ0EsY0FyQ0k7RUFzQ0osaUJBQUE7QUNOSjs7QURVQTtFQUNFLHNCQUFBO0FDUEY7O0FEUUU7RUFDRSxjQS9DTTtFQWdETixnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNOSjs7QURVQTtFQUNFLGtCQUFBO0FDUEY7O0FEU0E7RUFDRSxtQkFBQTtBQ05GOztBRFFBO0VBQ0UsY0E3RFE7QUN3RFY7O0FETUU7RUFDRSxjQWhFSTtFQWlFSixhQUFBO0VBQ0EsZ0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrIDogIzI1MmEzNDtcbiRhY2NlbnQgOiAjZmYyZTYzO1xuJGxpZ2h0IDogI2VhZWFlYTtcbiRtYWluIDogIzA4ZDlkNjtcblxuOmhvc3R7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmR7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiBzbGltO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFwiaWNvbiBpY29uIHRlbXBlcmF0dXJlIHRlbXBlcmF0dXJlXCJcbiAgXCJsb3d0ZW1wIGxvd3RlbXAgaGlnaHRlbXAgaGlnaHRlbXBcIlxuICBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCI7XG59XG5cbi5jYXJkIC5pY29ue1xuICBncmlkLWFyZWE6IGljb247XG59XG5cbi5jYXJkIC50ZW1we1xuICBncmlkLWFyZWE6IHRlbXBlcmF0dXJlO1xuICBwe1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuYmlne1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiAkbWFpbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uY2FyZCAuZGVzY3JpcHRpb257XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gIGgye1xuICAgIGNvbG9yOiAkYWNjZW50O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG4gIH1cbn1cblxuLmxvdy10ZW1we1xuICBncmlkLWFyZWE6IGxvd3RlbXA7XG59XG4uaGlnaC10ZW1we1xuICBncmlkLWFyZWE6IGhpZ2h0ZW1wO1xufVxuLmxvdy10ZW1wLCAuaGlnaC10ZW1we1xuICBjb2xvcjogJGFjY2VudDtcbiAgc3BhbntcbiAgICBjb2xvcjogJGRhcms7XG4gICAgb3BhY2l0eTogMC41NjtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogc2xpbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaWNvbiBpY29uIHRlbXBlcmF0dXJlIHRlbXBlcmF0dXJlXCIgXCJsb3d0ZW1wIGxvd3RlbXAgaGlnaHRlbXAgaGlnaHRlbXBcIiBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCI7XG59XG5cbi5jYXJkIC5pY29uIHtcbiAgZ3JpZC1hcmVhOiBpY29uO1xufVxuXG4uY2FyZCAudGVtcCB7XG4gIGdyaWQtYXJlYTogdGVtcGVyYXR1cmU7XG59XG4uY2FyZCAudGVtcCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQgLnRlbXAgLmJpZyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzA4ZDlkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkIC5kZXNjcmlwdGlvbiB7XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG59XG4uY2FyZCAuZGVzY3JpcHRpb24gaDIge1xuICBjb2xvcjogI2ZmMmU2MztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xufVxuXG4ubG93LXRlbXAge1xuICBncmlkLWFyZWE6IGxvd3RlbXA7XG59XG5cbi5oaWdoLXRlbXAge1xuICBncmlkLWFyZWE6IGhpZ2h0ZW1wO1xufVxuXG4ubG93LXRlbXAsIC5oaWdoLXRlbXAge1xuICBjb2xvcjogI2ZmMmU2Mztcbn1cbi5sb3ctdGVtcCBzcGFuLCAuaGlnaC10ZW1wIHNwYW4ge1xuICBjb2xvcjogIzI1MmEzNDtcbiAgb3BhY2l0eTogMC41NjtcbiAgZm9udC1zaXplOiAwLjZlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/weather-card/weather-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherCardComponent = class WeatherCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WeatherCardComponent.prototype, "weather", void 0);
WeatherCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-card/weather-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-card.component.scss */ "./src/app/components/weather-card/weather-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WeatherCardComponent);



/***/ }),

/***/ "./src/app/components/weather-icon/weather-icon.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-icon/weather-icon.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1pY29uL3dlYXRoZXItaWNvbi5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/components/weather-icon/weather-icon.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-icon/weather-icon.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherIconComponent", function() { return WeatherIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherIconComponent = class WeatherIconComponent {
    constructor() {
        this.icon = "weather";
    }
    set code(value) {
        this._code = value;
        this.icon = null;
        if (this._code >= 200 && this._code <= 250) {
            this.icon = "thunder";
        }
        if (this._code >= 300 && this._code <= 350) {
            this.icon = "rainy-4";
        }
        if (this._code >= 500 && this._code <= 550) {
            this.icon = "rainy-7";
        }
        if (this._code == 600)
            this.icon = "snowy-4";
        if (this._code == 601)
            this.icon = "snowy-5";
        if (this._code > 601 && this._code <= 650)
            this.icon = "snowy-6";
        if (this._code == 800)
            this.icon = "day";
        if (this._code == 801)
            this.icon = "cloudy-day-1";
        if (this._code == 802)
            this.icon = "cloudy-day-2";
        if (this._code > 802)
            this.icon = "cloudy-day-3";
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], WeatherIconComponent.prototype, "code", null);
WeatherIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather-icon/weather-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-icon.component.sass */ "./src/app/components/weather-icon/weather-icon.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WeatherIconComponent);



/***/ }),

/***/ "./src/app/services/current-weather.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/current-weather.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrentWeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWeatherService", function() { return CurrentWeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.service */ "./src/app/services/geolocation.service.ts");






//Services

let CurrentWeatherService = class CurrentWeatherService {
    constructor(http, geolocationService) {
        this.http = http;
        this.geolocationService = geolocationService;
        this.weatherSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.endpoint = 'https://api.openweathermap.org/data/2.5/weather';
        this.weather$ = this.weatherSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            let mainWeather = data.weather[0];
            let weather = Object.assign({ name: data.name, cod: data.cod, temp: data.main.temp }, mainWeather);
            return weather;
        }));
        this.geolocationService.coords$.subscribe((coords) => {
            this.get(coords);
        });
    }
    get(coords) {
        let args = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].key}&units=metric`;
        let url = this.endpoint + args;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            url = 'assets/weather.json';
        }
        this.http.get(url).subscribe(this.weatherSubject);
    }
};
CurrentWeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] }
];
CurrentWeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]])
], CurrentWeatherService);



/***/ }),

/***/ "./src/app/services/forecast.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/forecast.service.ts ***!
  \**********************************************/
/*! exports provided: ForecastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastService", function() { return ForecastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.service */ "./src/app/services/geolocation.service.ts");






//Services

let ForecastService = class ForecastService {
    constructor(http, geolocationService) {
        this.http = http;
        this.geolocationService = geolocationService;
        this.weatherSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.endpoint = 'https://api.openweathermap.org/data/2.5/forecast';
        this.weather$ = this.weatherSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.structureData));
        this.geolocationService.coords$.subscribe((coords) => {
            this.get(coords);
        });
    }
    structureData(data) {
        let minMaxPerDay = {};
        data.list.forEach(weatherObject => {
            let date = new Date(weatherObject.dt * 1000);
            let hours = date.getHours();
            let month = date.getMonth();
            let day = date.getDate();
            let key = `${month}-${day}`;
            let temPerDay = minMaxPerDay[key] || {
                minMaxTemp: {}
            };
            if (!temPerDay.cod || hours == 16) {
                let source = weatherObject.weather[0];
                temPerDay = Object.assign({}, temPerDay, source);
                temPerDay.cod = source.id;
                temPerDay.name = data.city.name;
            }
            if (!temPerDay.minMaxTemp.min || weatherObject.main.temp_min < temPerDay.minMaxTemp.min) {
                temPerDay.minMaxTemp.min = weatherObject.main.temp_min;
            }
            if (!temPerDay.minMaxTemp.max || weatherObject.main.temp_max > temPerDay.minMaxTemp.max) {
                temPerDay.minMaxTemp.max = weatherObject.main.temp_max;
            }
            minMaxPerDay[key] = temPerDay;
        });
        return Object.values(minMaxPerDay);
    }
    get(coords) {
        let args = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].key}&units=metric`;
        let url = this.endpoint + args;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            url = 'assets/forecast.json';
        }
        this.http.get(url).subscribe(this.weatherSubject);
    }
};
ForecastService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] }
];
ForecastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _geolocation_service__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]])
], ForecastService);



/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GeolocationService = class GeolocationService {
    constructor() {
        this.coordsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.coords$ = this.coordsSubject.asObservable();
        this.permission$ = navigator.permissions.query({ name: 'geolocation' })
            .then((permission) => permission.state);
    }
    requestGeolocation() {
        if (!this.coordsPromise) {
            this.coordsPromise = this.getGeolocation();
        }
        this.coordsPromise.then(coords => {
            this.coordsSubject.next(coords);
        });
    }
    getGeolocation() {
        return new Promise((res, rej) => {
            if (!navigator || !('geolocation' in navigator))
                return rej('Geolocation is not available');
            navigator.geolocation.getCurrentPosition((position) => {
                res({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            });
        });
    }
};
GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GeolocationService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    key: '593f2cd178f4d1bb927ef141bca83cd7'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/programacion/angular/weatherApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map