webpackJsonp([2],{

/***/ "../../../../../src/app/modules/admin/admin-page/admin-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Private area</h1>"

/***/ }),

/***/ "../../../../../src/app/modules/admin/admin-page/admin-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPageComponent = (function () {
    function AdminPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    AdminPageComponent.prototype.ngOnInit = function () {
    };
    return AdminPageComponent;
}());
AdminPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-admin-page',
        template: __webpack_require__("../../../../../src/app/modules/admin/admin-page/admin-page.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], AdminPageComponent);

var _a;
//# sourceMappingURL=admin-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_page_admin_page_component__ = __webpack_require__("../../../../../src/app/modules/admin/admin-page/admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing__ = __webpack_require__("../../../../../src/app/modules/admin/admin.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__admin_routing__["a" /* adminRouting */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__admin_routing__["b" /* adminRoutingComponents */].concat([
            __WEBPACK_IMPORTED_MODULE_1__admin_page_admin_page_component__["a" /* AdminPageComponent */]
        ])
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/admin/admin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_page_admin_page_component__ = __webpack_require__("../../../../../src/app/modules/admin/admin-page/admin-page.component.ts");
/* unused harmony export adminRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return adminRoutingComponents; });
/* unused harmony export adminRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminRouting; });


var adminRoutes = [{
        // path '' is the component holding the outlet
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__admin_page_admin_page_component__["a" /* AdminPageComponent */], data: { title: 'Admin' }
    }];
var adminRoutingComponents = [
    __WEBPACK_IMPORTED_MODULE_1__admin_page_admin_page_component__["a" /* AdminPageComponent */]
];
var adminRoutingProviders = [];
var adminRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(adminRoutes);
//# sourceMappingURL=admin.routing.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map