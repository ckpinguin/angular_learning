webpackJsonp([1],{

/***/ "../../../../../src/app/modules/auth/auth-component/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-auth-component',
        template: '<router-outlet></router-outlet>'
    })
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/modules/auth/login/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing__ = __webpack_require__("../../../../../src/app/modules/auth/auth.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__auth_routing__["a" /* authRouting */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__auth_routing__["b" /* authRoutingComponents */].concat([
            __WEBPACK_IMPORTED_MODULE_1__login_login_form_login_form_component__["a" /* LoginFormComponent */]
        ])
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/auth.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_component_auth_component__ = __webpack_require__("../../../../../src/app/modules/auth/auth-component/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/modules/auth/login/login-page/login-page.component.ts");
/* unused harmony export authRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authRoutingComponents; });
/* unused harmony export authRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authRouting; });



var authRoutes = [{
        // path '' is the component holding the outlet
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__auth_component_auth_component__["a" /* AuthComponent */], data: { title: 'Login' },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_page_login_page_component__["a" /* LoginPageComponent */] }
        ]
    }
];
var authRoutingComponents = [
    __WEBPACK_IMPORTED_MODULE_1__auth_component_auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_2__login_login_page_login_page_component__["a" /* LoginPageComponent */]
];
var authRoutingProviders = [];
var authRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(authRoutes);
//# sourceMappingURL=auth.routing.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate (ngSubmit)=\"onSubmit(form.value); form.reset()\"\n        #form=\"ngForm\">\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\"\n            id=\"name\" name=\"name\"\n            placeholder=\"Name eingeben.\"\n            ngModel required minlength=\"4\" maxlength=\"32\"/>\n        <ck-show-error path=\"name\" text=\"Name\"></ck-show-error>\n    </div>\n    <div class=\"form-group\">\n        <label>Passwort</label>\n        <input type=\"password\" class=\"form-control\"\n            id=\"password\" name=\"password\" \n            placeholder=\"Passwort eingeben.\"\n            ngModel required />\n        <ck-show-error path=\"password\" text=\"Passwort\"></ck-show-error>\n    </div>\n    <button type=\"button\" class=\"btn btn-default\"\n        (click)=\"onSubmit(form.value)\"\n        [disabled]=\"!form.valid\">\n        Login\n    </button>\n    <button type=\"button\" class=\"btn btn-default\"\n        (click)=\"onCancel(true)\">\n        Abbrechen\n    </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login-form/login-form.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__("../../../../../src/app/modules/shared/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginFormComponent = (function () {
    function LoginFormComponent(navigationService, router, activatedRoute, loginService, snackBar) {
        this.navigationService = navigationService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.snackBar = snackBar;
    }
    LoginFormComponent.prototype.onSubmit = function (formValue) {
        var queryParams = this.activatedRoute.snapshot.queryParams;
        var success = this.loginService.login(formValue.name, formValue.password);
        if (success) {
            this.navigationService.navigateHome(queryParams);
            this.snackBar.open("Welcome, " + formValue.name + ". You have logged in successfully.", 'OK', {
                duration: 5000
            });
        }
        else {
            this.snackBar.open('Login failed.', 'OK', { duration: 5000 });
        }
        this.form.reset();
    };
    LoginFormComponent.prototype.onCancel = function (cancel) {
        var queryParams = this.activatedRoute.snapshot.queryParams;
        this.form.reset();
        this.navigationService.navigateBack(queryParams);
    };
    return LoginFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */]) === "function" && _a || Object)
], LoginFormComponent.prototype, "form", void 0);
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-login-form',
        template: __webpack_require__("../../../../../src/app/modules/auth/login/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/auth/login/login-form/login-form.component.styl")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSnackBar */]) === "function" && _f || Object])
], LoginFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <h1>{{title}}</h1>\n</div>\n<div class=\"mainContent\" *ngIf=\"!showForm\">\n    <p>Already logged in with user {{currentUser}}</p>\n</div>\n<div class=\"mainContent\" *ngIf=\"showForm\">\n    <ck-login-form (onCancel)=\"onCancel($event)\" (onSubmit)=\"onLogin($event)\"></ck-login-form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = (function () {
    function LoginPageComponent(loginService, activatedRoute) {
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.showForm = true;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data['title'];
        if (!this.loginService.isLoggedIn()) {
            if (__WEBPACK_IMPORTED_MODULE_3__debug__["a" /* default */])
                console.log('nobody logged in yet');
            this.showForm = true;
            this.loginService.currentUser.subscribe(function (data) {
                if (__WEBPACK_IMPORTED_MODULE_3__debug__["a" /* default */])
                    console.log('User', data.name, 'is logged in!');
                if (data.name !== undefined) {
                    _this.currentUser = data.name;
                    _this.showForm = false;
                }
            });
        }
        else {
            // A user is already logged in
            this.currentUser = this.loginService.getCurrentUserName();
            this.showForm = false;
        }
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-login-page',
        template: __webpack_require__("../../../../../src/app/modules/auth/login/login-page/login-page.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login-page.component.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map