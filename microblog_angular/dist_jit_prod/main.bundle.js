webpackJsonp([5],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/admin/admin.module": [
		"../../../../../src/app/modules/admin/admin.module.ts",
		2
	],
	"app/modules/auth/auth.module": [
		"../../../../../src/app/modules/auth/auth.module.ts",
		1
	],
	"app/modules/blog/blog.module": [
		"../../../../../src/app/modules/blog/blog.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"NavBar\">\n        <ck-navbar></ck-navbar>\n    </div>\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"footer\">\n        <p>© Christof Kälin</p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(activatedRoute, router, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.defaultTitle = this.titleService.getTitle();
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.setBrowserTitle();
        });
        var title = this.activatedRoute.snapshot.data['title'];
        if (title) {
            this.titleService.setTitle(title);
        }
    };
    AppComponent.prototype.setBrowserTitle = function () {
        var title = this.defaultTitle;
        var route = this.activatedRoute;
        while (route.firstChild) {
            route = route.firstChild;
            title = route.snapshot.data['title'] || title;
        }
        this.titleService.setTitle(title);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tokens__ = __webpack_require__("../../../../../src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_auth_user_user_service__ = __webpack_require__("../../../../../src/app/modules/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_auth_login_login_service__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_blog_blog_service__ = __webpack_require__("../../../../../src/app/modules/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// The app

// Shared module

// Services



// Routing

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routingComponents */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["b" /* appRouting */],
            // as singleton here
            __WEBPACK_IMPORTED_MODULE_5__modules_shared_shared_module__["a" /* SharedModule */].forRoot()
        ],
        // Global aka Singleton services
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["c" /* routingProviders */],
            __WEBPACK_IMPORTED_MODULE_7__modules_auth_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_6__modules_auth_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__modules_blog_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__app_tokens__["a" /* AUTH_ENABLED */], useValue: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_auth_login_login_guard__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.guard.ts");
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return routingProviders; });



var appRoutes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full', data: { title: 'CK\'s microblog!' } },
    // We lazy-load the modules with a preloading strategy (loads in background)
    { path: 'home', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'blog', loadChildren: 'app/modules/blog/blog.module#BlogModule' },
    { path: 'login', loadChildren: 'app/modules/auth/auth.module#AuthModule' },
    // on top-level it must be `canLoad` instead of `canActivate` (which is still used at deeper levels)
    { path: 'admin', canLoad: [__WEBPACK_IMPORTED_MODULE_2__modules_auth_login_login_guard__["a" /* LoginGuard */]], loadChildren: 'app/modules/admin/admin.module#AdminModule' }
    // { path: '**', redirectTo: '/blog' }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {
    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* PreloadAllModules */]
});
var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]
];
var routingProviders = [__WEBPACK_IMPORTED_MODULE_2__modules_auth_login_login_guard__["a" /* LoginGuard */]];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_ENABLED; });

var AUTH_ENABLED = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* OpaqueToken */]('auth-enabled');
//# sourceMappingURL=app.tokens.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginGuard.prototype.checkLogin = function (redirect) {
        if (!this.loginService.isLoggedIn()) {
            this.router.navigate(['/login'], { queryParams: { redirect: redirect } });
            return false;
        }
        return true;
    };
    LoginGuard.prototype.canActivate = function (routeSnapshot, routerSnapshot) {
        var redirect = encodeURI(routerSnapshot.url);
        return this.checkLogin(redirect);
    };
    LoginGuard.prototype.canLoad = function (route) {
        var redirect = encodeURI(route.path);
        return this.checkLogin(redirect);
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginGuard);

var _a, _b;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/modules/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5__ = __webpack_require__("../../../../md5/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(userService) {
        this.userService = userService;
        this._currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.currentUser = this._currentUser.asObservable();
        this.loggedIn = false;
    }
    LoginService.prototype.login = function (name, password) {
        var _this = this;
        var result = false;
        this.userService.getUserByName(name).subscribe(function (user) {
            if (__WEBPACK_IMPORTED_MODULE_3_md5___default()(password) === user.password) {
                if (__WEBPACK_IMPORTED_MODULE_4__debug__["a" /* default */])
                    console.log('password correct, logging in');
                _this.setCurrentUser(user.id);
                _this.loggedIn = true;
                // this is ignored?
                result = true;
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_4__debug__["a" /* default */])
                    console.log('password wrong!');
                result = false;
            }
        }, function (err) { result = false; });
        return result;
    };
    LoginService.prototype.logout = function () {
        this.loggedIn = false;
    };
    LoginService.prototype.setCurrentUser = function (id) {
        var _this = this;
        this.userService.getUser(id).subscribe(function (user) {
            _this._currentUser.next(user);
        });
    };
    LoginService.prototype.getCurrentUser = function () {
        return this._currentUser.getValue().id;
    };
    LoginService.prototype.getCurrentUserName = function () {
        return this._currentUser.getValue().name;
    };
    // TODO: rewrite this to work with subscribing
    LoginService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/user/initialUsers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialUsers; });
var initialUsers = [
    {
        id: 'be7f7340-2c3f-4534-9ec2-cbcc9ddccc2d',
        name: 'admin',
        email: 'admin@admin.example.com',
        password: '21232f297a57a5a743894a0e4a801fc3'
    },
    {
        id: 'a8655eb5-ca5c-459a-a094-d0e704e80a69',
        name: 'test',
        email: 'test@test.example.com',
        password: '098f6bcd4621d373cade4e832627b4f6'
    },
];
//# sourceMappingURL=initialUsers.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialUsers__ = __webpack_require__("../../../../../src/app/modules/auth/user/initialUsers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_store__ = __webpack_require__("../../../../../src/app/modules/auth/user/user.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(userStore) {
        this.userStore = userStore;
        // pass-through as Observable
        this.users$ = userStore.users$;
        // first call loads initialUsers (mock data)
        this.findUsers();
    }
    // This is the public API:
    UserService.prototype.saveUser = function (user) {
        var actionType = user.id ? __WEBPACK_IMPORTED_MODULE_2__user_store__["a" /* EDIT */] : __WEBPACK_IMPORTED_MODULE_2__user_store__["b" /* ADD */];
        this.userStore.dispatch({ type: actionType, data: user });
    };
    UserService.prototype.deleteUser = function (id) {
        this.userStore.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__user_store__["c" /* REMOVE */], data: id });
    };
    // TODO: use search params to filter data, at the moment this just return all data
    UserService.prototype.findUsers = function () {
        // load mock data
        var users = __WEBPACK_IMPORTED_MODULE_1__initialUsers__["a" /* initialUsers */];
        this.userStore.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__user_store__["d" /* LOAD */], data: users });
        return this.userStore.users$.getValue();
    };
    UserService.prototype.getUser = function (id) {
        return this.users$.map(function (list) { return list
            .find(function (user) { return user.id === id; }); });
    };
    UserService.prototype.getUserByName = function (name) {
        return this.users$.map(function (list) { return list
            .find(function (user) { return user.name === name; }); });
    };
    UserService.prototype.getLastUser = function () {
        return this.users$.map(function (list) { return list[list.length - 1]; });
    };
    UserService.prototype.createNewUser = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__debug__["a" /* default */])
            console.log('creating new empty user: ');
        this.saveUser({});
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_store__["e" /* UserStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_store__["e" /* UserStore */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/auth/user/user.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserStore; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var LOAD = 'LOAD';
var ADD = 'ADD';
var EDIT = 'EDIT';
var REMOVE = 'REMOVE';
var UserStore = (function () {
    function UserStore() {
        this.users$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    UserStore.prototype.dispatch = function (action) {
        // only place where the store is mutated
        this.users = this.reduce(this.users, action);
        // propagate the new state to all listeners
        this.users$.next(this.users);
    };
    UserStore.prototype.reduce = function (users, action) {
        if (__WEBPACK_IMPORTED_MODULE_1__debug__["a" /* default */])
            console.log('received action: ', action.type, action.data);
        switch (action.type) {
            case LOAD:
                return action.data.slice();
            case ADD:
                if (__WEBPACK_IMPORTED_MODULE_1__debug__["a" /* default */])
                    console.log('new state: ', users.concat([
                        __assign({}, action.data, { id: UserStore.guid() })
                    ]));
                return users.concat([
                    __assign({}, action.data, { id: UserStore.guid() })
                ]);
            case EDIT:
                var editedEntry_1 = action.data;
                return users.map(function (entry) {
                    if (entry.id !== editedEntry_1.id) {
                        return entry;
                    }
                    return editedEntry_1;
                });
            case REMOVE:
                return users.filter(function (entry) {
                    return entry.id !== action.data;
                });
            default:
                return users;
        }
    };
    return UserStore;
}());

UserStore.guid = function () {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
//# sourceMappingURL=user.store.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_find__ = __webpack_require__("../../../../rxjs/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initialEntries__ = __webpack_require__("../../../../../src/app/modules/blog/initialEntries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_store__ = __webpack_require__("../../../../../src/app/modules/blog/blog.store.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BlogService = (function () {
    function BlogService(blogStore) {
        this.blogStore = blogStore;
        // pass-through as Observable
        this.entries$ = blogStore.entries$;
        // first call loads initialEntries (mock data)
        this.findEntries();
    }
    // This is the public API:
    BlogService.prototype.saveEntry = function (entry) {
        var actionType = entry.id ? __WEBPACK_IMPORTED_MODULE_6__blog_store__["a" /* EDIT */] : __WEBPACK_IMPORTED_MODULE_6__blog_store__["b" /* ADD */];
        this.blogStore.dispatch({ type: actionType, data: entry });
    };
    BlogService.prototype.deleteEntry = function (id) {
        this.blogStore.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__blog_store__["c" /* REMOVE */], data: id });
    };
    // TODO: use search params to filter data, at the moment this just return all data
    BlogService.prototype.findEntries = function () {
        // load mock data
        var entries = __WEBPACK_IMPORTED_MODULE_5__initialEntries__["a" /* initialEntries */];
        this.blogStore.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__blog_store__["d" /* LOAD */], data: entries });
        return this.blogStore.entries$.getValue();
    };
    BlogService.prototype.getEntry = function (id) {
        return this.entries$.map(function (list) { return list
            .find(function (entry) { return entry.id === id; }); });
    };
    BlogService.prototype.getLastEntry = function () {
        return this.entries$.map(function (list) { return list[list.length - 1]; });
    };
    BlogService.prototype.createNewEntry = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__debug__["a" /* default */])
            console.log('creating new empty entry: ');
        this.saveEntry({});
    };
    return BlogService;
}());
BlogService.guid = function () {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
BlogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__blog_store__["e" /* BlogStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__blog_store__["e" /* BlogStore */]) === "function" && _a || Object])
], BlogService);

var _a;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BlogStore; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var LOAD = 'LOAD';
var ADD = 'ADD';
var EDIT = 'EDIT';
var REMOVE = 'REMOVE';
var BlogStore = (function () {
    function BlogStore() {
        this.entries$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    BlogStore.prototype.dispatch = function (action) {
        // only place where the store is mutated
        this.entries = this.reduce(this.entries, action);
        // propagate the new state to all listeners
        this.entries$.next(this.entries);
    };
    BlogStore.prototype.reduce = function (entries, action) {
        if (__WEBPACK_IMPORTED_MODULE_1__debug__["a" /* default */])
            console.log('received action: ', action.type, action.data);
        switch (action.type) {
            case LOAD:
                return action.data.slice();
            case ADD:
                if (__WEBPACK_IMPORTED_MODULE_1__debug__["a" /* default */])
                    console.log('new state: ', entries.concat([
                        __assign({}, action.data, { id: BlogStore.guid() })
                    ]));
                return entries.concat([
                    __assign({}, action.data, { id: BlogStore.guid() })
                ]);
            case EDIT:
                var editedEntry_1 = action.data;
                return entries.map(function (entry) {
                    if (entry.id !== editedEntry_1.id) {
                        return entry;
                    }
                    return editedEntry_1;
                });
            case REMOVE:
                return entries.filter(function (entry) {
                    return entry.id !== action.data;
                });
            default:
                return entries;
        }
    };
    return BlogStore;
}());

BlogStore.guid = function () {
    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
//# sourceMappingURL=blog.store.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/initialEntries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialEntries; });
var initialEntries = [
    {
        id: 'dc2a4182-71a0-4fed-98dd-22b4d5104e40',
        title: 'Testentry',
        text: 'Just a little\n test',
        image: 'cat1.jpg',
        date: "2017-06-05T14:46:23.977Z",
        user: 'a8655eb5-ca5c-459a-a094-d0e704e80a69',
        author: 'The test user himself',
        tags: []
    },
    {
        id: 'e16d3ee5-f6ff-4638-94fe-1dcf6fba0b4c',
        title: 'another one',
        text: 'Cats always work :-)',
        image: 'cat2.gif',
        date: "2017-05-05T12:04:01.000Z",
        tags: [],
        user: 'be7f7340-2c3f-4534-9ec2-cbcc9ddccc2d',
        author: 'administrator'
    },
    {
        id: '54726e40-3297-11e7-93ae-92361f002671',
        title: 'jumpy cat',
        text: 'Told ya, everybody loves cats',
        image: null,
        date: "2016-12-31T11:10:11.000Z",
        tags: [],
        user: 'a8655eb5-ca5c-459a-a094-d0e704e80a69',
        author: 'Test user\'s alias'
    }
];
//# sourceMappingURL=initialEntries.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/dateFormat.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DateFormatPipe = (function () {
    function DateFormatPipe(locale_id) {
        this.locale_id = locale_id;
    }
    DateFormatPipe.prototype.transform = function (value) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* DatePipe */](this.locale_id);
        value = datePipe.transform(value, 'dd. MMMM. yyyy');
        return value;
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'dateFormatPipe',
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* LOCALE_ID */])),
    __metadata("design:paramtypes", [Object])
], DateFormatPipe);

//# sourceMappingURL=dateFormat.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse navbar navbar-default navbar-collapse\" id=\"navbar\">\n    <div class=\"container-fluid\">\n        <ul class=\"nav navbar-nav navbar-left\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\" class=\"link\">Home</a></li>\n            <li><a routerLink=\"/blog\" routerLinkActive=\"active\" class=\"link\">Blog</a></li>\n            <li><a routerLink=\"/login\" routerLinkActive=\"active\" class=\"link\">Login</a></li>\n            <li><a routerLink=\"/admin\" routerLinkActive=\"active\" class=\"link\">Admin</a></li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/shared/navbar/navbar.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-navbar',
        template: __webpack_require__("../../../../../src/app/modules/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/shared/navbar/navbar.component.styl")],
    })
], NavBarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = (function () {
    function NavigationService(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    NavigationService.prototype.navigateHome = function (queryParams) {
        // const queryParams = this.activatedRoute.snapshot.queryParams;
        var redirect = queryParams['redirect'] || '/';
        this.router.navigateByUrl(decodeURI(redirect));
    };
    // BUG: Goes back to /
    NavigationService.prototype.navigateBack = function (queryParams) {
        this.router.navigate(['..']);
    };
    return NavigationService;
}());
NavigationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NavigationService);

var _a, _b;
//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/modules/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_error_show_error_component__ = __webpack_require__("../../../../../src/app/modules/shared/show-error/show-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dateFormat_pipe__ = __webpack_require__("../../../../../src/app/modules/shared/dateFormat.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_service__ = __webpack_require__("../../../../../src/app/modules/shared/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_blog_service__ = __webpack_require__("../../../../../src/app/modules/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blog_blog_store__ = __webpack_require__("../../../../../src/app/modules/blog/blog.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_login_login_service__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_user_user_service__ = __webpack_require__("../../../../../src/app/modules/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_user_user_store__ = __webpack_require__("../../../../../src/app/modules/auth/user/user.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_login_login_guard__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Some services from their respective modules need to be availabe
// for other modules too, so we import them here. This still is
// not a clean solution. This has to do with the quite special
// concept of a "module" in angular: The module in the first place
// is about handling lazy-loading, not about organizing. Even though
// it makes sense to have everything located in the corresponding
// module, even services that ought to be available shared/global.






var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    // Service providers have to be put here instead of
    // the @NgModule annotation! This static addition to the
    // Module has to be imported in root App Module only!
    // The other modules only import the Module itself (without
    // forRoot() )
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_10__blog_blog_service__["a" /* BlogService */],
                __WEBPACK_IMPORTED_MODULE_11__blog_blog_store__["e" /* BlogStore */],
                __WEBPACK_IMPORTED_MODULE_14__auth_user_user_store__["e" /* UserStore */],
                __WEBPACK_IMPORTED_MODULE_12__auth_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_13__auth_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__auth_login_login_guard__["a" /* LoginGuard */]
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdSnackBarModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__show_error_show_error_component__["a" /* ShowErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dateFormat_pipe__["a" /* DateFormatPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__show_error_show_error_component__["a" /* ShowErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_8__dateFormat_pipe__["a" /* DateFormatPipe */]
        ]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/shared/show-error/show-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorMessages\" class=\"alert alert-danger\">\n    <div *ngFor=\"let errorMessage of errorMessages\">\n        {{errorMessage}}\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/shared/show-error/show-error.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/shared/show-error/show-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowErrorComponent = (function () {
    function ShowErrorComponent(ngForm) {
        this.ngForm = ngForm;
        this.displayName = '';
    }
    Object.defineProperty(ShowErrorComponent.prototype, "errorMessages", {
        get: function () {
            var messages = [];
            var form = this.ngForm.form;
            var control = form.get(this.controlPath);
            if (!control || !(control.touched) || !(control.errors)) {
                return null;
            }
            for (var code in control.errors) {
                var hasCode = control.errors.hasOwnProperty(code);
                if (hasCode) {
                    var error = control.errors[code];
                    var message = '';
                    switch (code) {
                        case 'required':
                            message = this.displayName + " ist ein Pflichtfeld";
                            break;
                        case 'minlength':
                            message = this.displayName + " muss mindestens\n                                   " + error.requiredLength + "  Zeichen enthalten";
                            break;
                        default:
                            message = name + " ist nicht g\u00FCltig";
                    }
                    messages.push(message);
                }
            }
            return messages;
        },
        enumerable: true,
        configurable: true
    });
    return ShowErrorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])('path'),
    __metadata("design:type", Object)
], ShowErrorComponent.prototype, "controlPath", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])('text'),
    __metadata("design:type", Object)
], ShowErrorComponent.prototype, "displayName", void 0);
ShowErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-show-error',
        template: __webpack_require__("../../../../../src/app/modules/shared/show-error/show-error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/shared/show-error/show-error.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */]) === "function" && _a || Object])
], ShowErrorComponent);

var _a;
//# sourceMappingURL=show-error.component.js.map

/***/ }),

/***/ "../../../../../src/debug.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var debug = false;
/* harmony default export */ __webpack_exports__["a"] = (debug);
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map