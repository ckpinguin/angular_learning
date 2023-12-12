webpackJsonp([0],{

/***/ "../../../../../src/app/modules/blog/blog-item/blog-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-item\" >\n    <hr />\n    <router-outlet></router-outlet>\n    <div class=\"item-outlet\">\n    </div>\n    <div class=\"blog-image\">\n        <img *ngIf=\"item.image\" [src]=\"imageWithPath\" [alt]=\"item.title\" />\n    </div>\n    <div class=\"blog-summary\">\n        <h2>\n            {{item?.title}}<br />\n            <div class=\"fa fa-trash\"\n                 (click)=\"onDelete(item.id)\"></div>\n            <div class=\"fa fa-edit\"\n                 [routerLink]=\"[ item.id, 'edit' ]\"\n            ></div>\n        </h2>\n        <div *ngIf=\"item.author\"><h3><small>Written by: <em>{{item?.author}}</em></small></h3>\n            <div *ngIf=\"item.date\"><h3><small> on <em>{{item?.date | dateFormatPipe }}</em></small></h3></div>\n        </div>\n        <p>{{item?.text}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-item/blog-item.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-item/blog-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_interfaces__ = __webpack_require__("../../../../../src/app/modules/blog/model-interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_service__ = __webpack_require__("../../../../../src/app/modules/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogItemComponent = (function () {
    function BlogItemComponent(router, activatedRoute, blogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
    }
    BlogItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription = this.activatedRoute.params
            .subscribe(function (params) {
            var id = (params['id'] || '');
            if (__WEBPACK_IMPORTED_MODULE_4__debug__["a" /* default */])
                console.log('received route param id: ', id);
            // if no item was inputted
            _this.item = ('undefined' === typeof _this.item)
                ? _this.item = _this.blogService.getEntry(id)
                : _this.item;
        });
    };
    BlogItemComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    Object.defineProperty(BlogItemComponent.prototype, "imageWithPath", {
        get: function () {
            return 'assets/images/' + this.item.image;
        },
        enumerable: true,
        configurable: true
    });
    BlogItemComponent.prototype.onEdit = function (id) {
        // this.router.navigate([ '/blog',
        //     { outlets: { 'blogeditoutlet':  [ 'blog', 'edit', id ] } } ]
        // );
        // this.router.navigateByUrl(`/blog/edit/(blogeditoutlet:edit/${id})`);
        // this.router.navigateByUrl(`blog/edit/${id}`);
        var navigationExtras = {
            queryParams: { id: id }
        };
        // this.blogService.startEditingEntry(id);
        this.router.navigate(['./edit', id]);
        // this.router.navigateByUrl(`blog/item/${id}/edit`);
    };
    BlogItemComponent.prototype.onDelete = function (id) {
        this.blogService.deleteEntry(id);
    };
    return BlogItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_interfaces__["BlogEntry"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_interfaces__["BlogEntry"]) === "function" && _a || Object)
], BlogItemComponent.prototype, "item", void 0);
BlogItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-blog-item',
        template: __webpack_require__("../../../../../src/app/modules/blog/blog-item/blog-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/blog/blog-item/blog-item.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */]) === "function" && _d || Object])
], BlogItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=blog-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-list/blog-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listContent\">\n    <router-outlet></router-outlet>\n    <ng-container *ngFor=\"let entry of entries$ | async\">\n        <!-- only show, when the new entry is in editing mode -->\n        <!--<ck-edit-blog-entry-form *ngIf=\"entry.editing\" [inputEntry]=\"entry\"></ck-edit-blog-entry-form>-->\n        <!-- only show entries with title (new entry does not have one yet) -->\n        <ck-blog-item\n            *ngIf=\"entry.title\"\n            [item]=\"entry\">\n        </ck-blog-item>\n    </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-list/blog-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/modules/blog/blog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogListComponent = (function () {
    function BlogListComponent(blogService) {
        this.blogService = blogService;
    }
    BlogListComponent.prototype.ngOnInit = function () {
        this.entries$ = this.blogService.entries$;
    };
    return BlogListComponent;
}());
BlogListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-blog-list',
        template: __webpack_require__("../../../../../src/app/modules/blog/blog-list/blog-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], BlogListComponent);

var _a;
//# sourceMappingURL=blog-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-page/blog-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <h1>{{title}}</h1>\n</div>\n<div class=\"mainContent\">\n    <button [routerLink]=\"[ 'new' ]\"\n        *ngIf=\"!pathNew\"\n        class=\"btn\">\n        Create New Entry\n    </button>\n    <router-outlet></router-outlet>\n</div>\n<div class=\"jumbotron\">\n    <h2>Attention item</h2>\n    <router-outlet name=\"attention-outlet\"></router-outlet>\n</div>\n<router-outlet name=\"list-outlet\"></router-outlet>\n<!--<ck-blog-list></ck-blog-list>-->\n"

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-page/blog-page.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog-page/blog-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/modules/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogPageComponent = (function () {
    function BlogPageComponent(activatedRoute, router, blogService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blogService = blogService;
        this.pathNew = false;
    }
    BlogPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__debug__["a" /* default */])
            console.log('activatedRoute: ', this.activatedRoute);
        this.title = this.activatedRoute.snapshot.data['title'];
        this.pathNew = false;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event['url'].split('/').pop() === 'new') {
                _this.pathNew = true;
                _this.blogService.createNewEntry();
            }
            else {
                _this.pathNew = false;
            }
        });
        this.blogService.getLastEntry().subscribe(function (entry) {
            _this.newEntry = entry;
            if (__WEBPACK_IMPORTED_MODULE_3__debug__["a" /* default */])
                console.log('last entry: ', _this.newEntry);
        });
    };
    return BlogPageComponent;
}());
BlogPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-blog-page',
        template: __webpack_require__("../../../../../src/app/modules/blog/blog-page/blog-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/blog/blog-page/blog-page.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */]) === "function" && _c || Object])
], BlogPageComponent);

var _a, _b, _c;
//# sourceMappingURL=blog-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_list_blog_list_component__ = __webpack_require__("../../../../../src/app/modules/blog/blog-list/blog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_item_blog_item_component__ = __webpack_require__("../../../../../src/app/modules/blog/blog-item/blog-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_routing__ = __webpack_require__("../../../../../src/app/modules/blog/blog.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__blog_routing__["a" /* blogRouting */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__blog_routing__["b" /* blogRoutingComponents */],
            __WEBPACK_IMPORTED_MODULE_1__blog_list_blog_list_component__["a" /* BlogListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__blog_item_blog_item_component__["a" /* BlogItemComponent */],
        ]
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/blog.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_page_blog_page_component__ = __webpack_require__("../../../../../src/app/modules/blog/blog-page/blog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_list_blog_list_component__ = __webpack_require__("../../../../../src/app/modules/blog/blog-list/blog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_blog_entry_form_edit_blog_entry_form_component__ = __webpack_require__("../../../../../src/app/modules/blog/edit-blog-entry-form/edit-blog-entry-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_guard__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.guard.ts");
/* unused harmony export blogRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blogRoutingComponents; });
/* unused harmony export blogRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blogRouting; });





var blogRoutes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__blog_page_blog_page_component__["a" /* BlogPageComponent */], data: { title: 'Blog' },
        children: [
            // here, aux-outlet is working
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__blog_list_blog_list_component__["a" /* BlogListComponent */], outlet: 'list-outlet' },
            // { path: 'items', component: BlogListComponent, outlet: 'list-outlet' }, // here, aux-outlet is NOT working (see bugs in github)
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__edit_blog_entry_form_edit_blog_entry_form_component__["a" /* EditBlogEntryFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_login_login_guard__["a" /* LoginGuard */]], data: { title: 'New entry' } },
            { path: ':id',
                // outlet: 'list-outlet', // aux outlet not working, bug: https://github.com/angular/angular/issues/9957
                children: [
                    // { path: '', component: BlogItemComponent },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_3__edit_blog_entry_form_edit_blog_entry_form_component__["a" /* EditBlogEntryFormComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_login_login_guard__["a" /* LoginGuard */]], data: { title: 'Edit entry' },
                    },
                ]
            },
        ]
    }];
var blogRoutingComponents = [
    __WEBPACK_IMPORTED_MODULE_1__blog_page_blog_page_component__["a" /* BlogPageComponent */], __WEBPACK_IMPORTED_MODULE_3__edit_blog_entry_form_edit_blog_entry_form_component__["a" /* EditBlogEntryFormComponent */]
];
var blogRoutingProviders = [__WEBPACK_IMPORTED_MODULE_4__auth_login_login_guard__["a" /* LoginGuard */]];
var blogRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(blogRoutes);
//# sourceMappingURL=blog.routing.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/edit-blog-entry-form/edit-blog-entry-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate (ngSubmit)=\"onSubmit(form.value)\"\n        #form=\"ngForm\" *ngIf=\"show\"> \n    <div class=\"form-group\">\n        <input type=\"hidden\" class=\"hidden\"\n            id=\"id\" name=\"id\"\n            [(ngModel)]=\"entry.id\" #id=\"ngModel\" />\n        <!-- TODO: make this field editable -->\n        <input type=\"hidden\" class=\"hidden\"\n            id=\"author\" name=\"author\"\n            [(ngModel)]=\"entry.author\" #author=\"ngModel\" />\n        <label>Titel</label>\n        <input type=\"text\" class=\"form-control\"\n            id=\"title\" name=\"title\"\n            [(ngModel)]=\"entry.title\" #title=\"ngModel\"\n            placeholder=\"Titel eingeben.\"\n            required minlength=\"5\" maxlength=\"128\"/>\n        <ck-show-error path=\"title\" text=\"Titel\"></ck-show-error>\n    </div>\n    <div class=\"form-group\">\n        <label>Inhalt</label>\n        <textarea class=\"form-control\" id=\"text\" name=\"text\"\n            [(ngModel)]=\"entry.text\" #text=\"ngModel\"\n            placeholder=\"Textinhalt eingeben.\">\n        </textarea>\n        <ck-show-error path=\"text\" text=\"Inhalt\"></ck-show-error>\n    </div>\n    <!-- TODO: async http-check for image availability?       -->\n    <!-- Be aware: that would impede reproducability for any  -->\n    <!-- performance tests, if done with external images!     -->\n    <div class=\"form-group\">\n        <label>Bild-URL</label>\n        <input class=\"form-control\" type=\"text\" id=\"image\" name=\"image\"\n            [(ngModel)]=\"entry.image\" #image=\"ngModel\"\n            placeholder=\"Bildadresse eingeben.\" />\n        <ck-show-error path=\"image\" text=\"Bild-URL\"></ck-show-error>\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\"\n        [disabled]=\"form.pristine || !form.valid\">\n        Blogeintrag speichern\n    </button>\n    <button type=\"button\" class=\"btn btn-default\"\n        [disabled]=\"form.submitting\"\n        (click)=\"onCancel()\">\n        Zurücksetzen\n    </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/blog/edit-blog-entry-form/edit-blog-entry-form.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-touched.ng-invalid {\n  border-color: #a94442;\n}\n.hidden {\n  visibility: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/blog/edit-blog-entry-form/edit-blog-entry-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__("../../../../../src/debug.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_interfaces__ = __webpack_require__("../../../../../src/app/modules/blog/model-interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__model_interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_service__ = __webpack_require__("../../../../../src/app/modules/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_login_service__ = __webpack_require__("../../../../../src/app/modules/auth/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogEntryFormComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditBlogEntryFormComponent = (function () {
    function EditBlogEntryFormComponent(blogService, loginService, activatedRoute, router, snackBar) {
        this.blogService = blogService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.snackBar = snackBar;
        this.show = true;
    }
    EditBlogEntryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_4__debug__["a" /* default */])
            console.log('form called with input parameter entry: ', this.inputEntry);
        this.entry = Object.assign({}, this.inputEntry);
        this.subscription = this.activatedRoute.params
            .map(function (params) { return params['id']; })
            .filter(function (id) { return id !== undefined; })
            .mergeMap(function (id) { return _this.blogService.getEntry(id); })
            .subscribe(function (entry) {
            _this.entry = entry;
            if (__WEBPACK_IMPORTED_MODULE_4__debug__["a" /* default */])
                console.log('setting entry: ', _this.entry);
            var isEntryUser = _this.isEntryUser();
            if (!isEntryUser && !(_this.callPath === 'new')) {
                _this.snackBar.open('You can only edit your own entries', 'OK', { duration: 5000 });
                _this.onCancel();
            }
        });
        this.callPath = this.activatedRoute.snapshot.url[0].path;
    };
    EditBlogEntryFormComponent.prototype.isEntryUser = function () {
        if (typeof this._entry.user !== 'undefined') {
            return this._entry.user === this.loginService.getCurrentUser();
        }
        return false;
    };
    Object.defineProperty(EditBlogEntryFormComponent.prototype, "entry", {
        get: function () {
            return __assign({}, this._entry, { author: (this._entry.author ? this._entry.author : this.loginService.getCurrentUserName()) });
        },
        set: function (entry) {
            this._entry = entry;
        },
        enumerable: true,
        configurable: true
    });
    EditBlogEntryFormComponent.prototype.onSubmit = function (formValue) {
        if (!this.form.pristine) {
            this.blogService.saveEntry(__assign({}, formValue, { date: new Date().toJSON(), user: this.loginService.getCurrentUser() }));
        }
        this.show = false;
        // BUG?: Goes back to /
        this.router.navigate(['..']);
        return false;
    };
    // TODO: find a way to mark the form as pristine when
    // cancelling (still keeping the old values!)
    EditBlogEntryFormComponent.prototype.onCancel = function () {
        this.show = false;
        // BUG: Goes back to /
        this.router.navigate(['..']);
        return false;
    };
    return EditBlogEntryFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* NgForm */]) === "function" && _a || Object)
], EditBlogEntryFormComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__model_interfaces__["BlogEntry"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__model_interfaces__["BlogEntry"]) === "function" && _b || Object)
], EditBlogEntryFormComponent.prototype, "inputEntry", void 0);
EditBlogEntryFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ck-edit-blog-entry-form',
        template: __webpack_require__("../../../../../src/app/modules/blog/edit-blog-entry-form/edit-blog-entry-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/blog/edit-blog-entry-form/edit-blog-entry-form.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__blog_service__["a" /* BlogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__auth_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__auth_login_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdSnackBar */]) === "function" && _g || Object])
], EditBlogEntryFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=edit-blog-entry-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/blog/model-interfaces.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=model-interfaces.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeMap_1 = __webpack_require__("../../../../rxjs/operator/mergeMap.js");
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map