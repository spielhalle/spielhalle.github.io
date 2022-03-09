"use strict";
(self["webpackChunkspielhalle"] = self["webpackChunkspielhalle"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ 3937);
/* harmony import */ var _modules_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/not-found */ 2648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const appRoutes = [
    {
        component: _modules_home__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        path: '',
    },
    {
        // tslint:disable-next-line:typedef
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_donmahallem_sudoku_dist_esm_index_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_routes_sudoku_sudoku_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routes/sudoku/sudoku.module */ 7262)).then((m) => m.SudokuModule),
        path: 'sudoku',
    },
    {
        // tslint:disable-next-line:typedef
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_icon_mjs"), __webpack_require__.e("src_app_routes_tank-call_tank-call_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routes/tank-call/tank-call.module */ 9481)).then((m) => m.TankCallModule),
        path: 'tank-call',
    },
    {
        component: _modules_not_found__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent,
        path: '**',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes, {
                initialNavigation: 'enabled',
                relativeLinkResolution: 'legacy',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6991:
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBrowserModule": () => (/* binding */ AppBrowserModule)
/* harmony export */ });
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ 6747);
/* harmony import */ var _routes_sudoku_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/sudoku/modules */ 1064);
/* harmony import */ var _routes_tank_call_tank_call_loader_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/tank-call/tank-call-loader-token */ 4724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class AppBrowserModule {
}
AppBrowserModule.ɵfac = function AppBrowserModule_Factory(t) { return new (t || AppBrowserModule)(); };
AppBrowserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppBrowserModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppBrowserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [{
            provide: _routes_tank_call_tank_call_loader_token__WEBPACK_IMPORTED_MODULE_4__.TANK_CALL_LOADER_TOKEN,
            useFactory: () => __webpack_require__.e(/*! import() */ "node_modules_spielhalle_tank-call_dist_esm_index_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spielhalle/tank-call */ 6238)),
        }, {
            provide: _routes_sudoku_modules__WEBPACK_IMPORTED_MODULE_3__.SUDOKU_BOARD_TOKEN,
            useFactory: () => __webpack_require__.e(/*! import() */ "node_modules_spielhalle_sudoku-board_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! @spielhalle/sudoku-board */ 6856)),
        }], imports: [[
            _app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppBrowserModule, { imports: [_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const _c0 = function () { return ["/"]; };
class AppComponent {
    constructor() {
        this.title = 'spielhalle';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [["color", "primary"], [3, "routerLink"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span")(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Spielhalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  overflow: hidden;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaWVsZF9zaXplOiA4MDtcbiRzdWRva3VfbWF4X3NpemU6IDgwMHB4O1xuOmhvc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmRpdi5jb250ZW50e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OjE7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ 3937);
/* harmony import */ var _modules_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/not-found */ 2648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _modules_home__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _modules_not_found__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_modules_home__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _modules_not_found__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule] }); })();


/***/ }),

/***/ 9877:
/*!**************************************************************!*\
  !*** ./src/app/components/abstract-pixi-render.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractPixiRenderDirective": () => (/* binding */ AbstractPixiRenderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);

/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



class AbstractPixiRenderDirective {
    constructor(zone, el, platformId) {
        this.zone = zone;
        this.el = el;
        this.platformId = platformId;
    }
    ngAfterViewInit() {
        if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            return;
        }
        this.load().then(() => {
            console.log('Pixi loaded');
        }).catch(console.error);
    }
    asyncZone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone.isInAngularZone()) {
                return new Promise((resolve) => {
                    this.zone.runOutsideAngular(resolve);
                });
            }
            return Promise.resolve();
        });
    }
    load() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.asyncZone();
            this.app = yield this.loadGame();
            this.app.resizeTo = this.el.nativeElement;
            this.app.resize();
            this.app.render();
        });
    }
    ngOnChanges(changes) {
        if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId) || !this.app) {
            return;
        }
    }
    ngOnDestroy() {
        if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId) || !this.app) {
            return;
        }
        this.app.destroy(true);
    }
}
AbstractPixiRenderDirective.ɵfac = function AbstractPixiRenderDirective_Factory(t) { return new (t || AbstractPixiRenderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
AbstractPixiRenderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AbstractPixiRenderDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 9771:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractPixiRenderDirective": () => (/* reexport safe */ _abstract_pixi_render_directive__WEBPACK_IMPORTED_MODULE_0__.AbstractPixiRenderDirective)
/* harmony export */ });
/* harmony import */ var _abstract_pixi_render_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-pixi-render.directive */ 9877);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 9906:
/*!**********************************************************!*\
  !*** ./src/app/modules/home/component/home.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const _c0 = function () { return ["sudoku"]; };
function HomeComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class HomeComponent {
    constructor() {
        this.items = ['a', 'b', 'c'];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 1, consts: [[1, "snap-parent"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to spielhalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "For you this is a sudoku tool to play, create and solve sudokus. For me it's an angular play ground!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_mat_card_5_Template, 5, 2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent], styles: ["[_nghost-%COMP%] {\n  overflow: auto;\n}\n@media (min-width: 930px) {\n  [_nghost-%COMP%] {\n    width: 80vw;\n    min-width: 930px;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 929px) {\n  [_nghost-%COMP%] {\n    width: 100vw;\n    display: block;\n  }\n}\n[_nghost-%COMP%]   div.snap-parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n}\n@media screen and (min-width: 600px) {\n  [_nghost-%COMP%]   div.snap-parent[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 16px;\n    gap: 16px;\n  }\n}\n@media screen and (min-width: 840px) {\n  [_nghost-%COMP%]   div.snap-parent[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 24px;\n    margin: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FBREo7QUFFSTtFQUZKO0lBR1EsV0FBQTtJQUNBLGdCQUxPO0lBTVAsY0FBQTtFQUNOO0FBQ0Y7QUFBSTtFQVBKO0lBUVEsWUFBQTtJQUNBLGNBQUE7RUFHTjtBQUNGO0FBRkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSVI7QUFIUTtFQUpKO0lBS1EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtJQUFBLFNBQUE7RUFNVjtBQUNGO0FBSlE7RUFWSjtJQVdRLGtDQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7RUFPVjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmllbGRfc2l6ZTogODA7XG4kbGF5b3V0LWJyZWFrOiA5MzBweDtcbjpob3N0e1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgQG1lZGlhKG1pbi13aWR0aDogJGxheW91dC1icmVhayl7XG4gICAgICAgIHdpZHRoOjgwdnc7XG4gICAgICAgIG1pbi13aWR0aDogJGxheW91dC1icmVhaztcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG4gICAgQG1lZGlhKG1heC13aWR0aDogKCAkbGF5b3V0LWJyZWFrIC0gMSApKXtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfVxuICAgIGRpdi5zbmFwLXBhcmVudHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xuICAgICAgICAgICAgZ2FwOiAxNnB4O1xuXG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpe1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyO1xuICAgICAgICAgICAgZ2FwOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8167:
/*!*************************************************!*\
  !*** ./src/app/modules/home/component/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* reexport safe */ _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 9906);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ 8167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule] }); })();


/***/ }),

/***/ 3937:
/*!***************************************!*\
  !*** ./src/app/modules/home/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* reexport safe */ _home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule),
/* harmony export */   "HomeComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.module */ 4882);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ 8167);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */




/***/ }),

/***/ 5740:
/*!******************************************************!*\
  !*** ./src/app/modules/not-found/component/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* reexport safe */ _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 723);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 723:
/*!********************************************************************!*\
  !*** ./src/app/modules/not-found/component/not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 930px) {\n  [_nghost-%COMP%] {\n    width: 80vw;\n    min-width: 930px;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 929px) {\n  [_nghost-%COMP%] {\n    width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQURKO0lBRVEsV0FBQTtJQUNBLGdCQUpPO0lBS1AsY0FBQTtFQUROO0FBQ0Y7QUFFSTtFQU5KO0lBT1EsWUFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpZWxkX3NpemU6IDgwO1xuJGxheW91dC1icmVhazogOTMwcHg7XG46aG9zdHtcbiAgICBAbWVkaWEobWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrKXtcbiAgICAgICAgd2lkdGg6ODB2dztcbiAgICAgICAgbWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAoICRsYXlvdXQtYnJlYWsgLSAxICkpe1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2648:
/*!********************************************!*\
  !*** ./src/app/modules/not-found/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* reexport safe */ _not_found_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundModule),
/* harmony export */   "NotFoundComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _not_found_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.module */ 8441);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ 5740);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */




/***/ }),

/***/ 8441:
/*!*******************************************************!*\
  !*** ./src/app/modules/not-found/not-found.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ 5740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */





class NotFoundModule {
}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); };
NotFoundModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotFoundModule });
NotFoundModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule] }); })();


/***/ }),

/***/ 1064:
/*!************************************************!*\
  !*** ./src/app/routes/sudoku/modules/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUDOKU_BOARD_TOKEN": () => (/* reexport safe */ _sudoku_board__WEBPACK_IMPORTED_MODULE_0__.SUDOKU_BOARD_TOKEN),
/* harmony export */   "SudokuFieldComponent": () => (/* reexport safe */ _sudoku_board__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldComponent),
/* harmony export */   "SudokuFieldModule": () => (/* reexport safe */ _sudoku_board__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldModule)
/* harmony export */ });
/* harmony import */ var _sudoku_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sudoku-board */ 9330);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 4929:
/*!***********************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/component/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SudokuBoardDirective": () => (/* reexport safe */ _sudoku_field_directive__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective)
/* harmony export */ });
/* harmony import */ var _sudoku_field_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sudoku-field.directive */ 8012);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 4008:
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/component/number-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberDialogComponent": () => (/* binding */ NumberDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);



class NumberDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
NumberDialogComponent.ɵfac = function NumberDialogComponent_Factory(t) { return new (t || NumberDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
NumberDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberDialogComponent, selectors: [["app-number-dialog"]], decls: 26, vars: 10, consts: [["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]], template: function NumberDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions")(22, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", 0);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: ["[_nghost-%COMP%] {\n  width: min(90vw, 90vh);\n  height: min(90vw, 90vh);\n  max-width: 480px;\n  max-height: 480px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVJO0VBQ0ksVUFBQTtBQUNSIiwiZmlsZSI6Im51bWJlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICB3aWR0aDptaW4oOTB2dyw5MHZoKTtcbiAgICBoZWlnaHQ6bWluKDkwdncsOTB2aCk7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgYnV0dG9ue1xuICAgICAgICB3aWR0aDozMyU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 8012:
/*!****************************************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/component/sudoku-field.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SudokuBoardDirective": () => (/* binding */ SudokuBoardDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components */ 9771);
/* harmony import */ var _sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../sudoku-board-loader-token */ 8648);
/* harmony import */ var _sudoku_field_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sudoku-field.service */ 3339);

/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */






class SudokuBoardDirective extends src_app_components__WEBPACK_IMPORTED_MODULE_0__.AbstractPixiRenderDirective {
    constructor(zone, el, platformId, sudokuService, tcg) {
        super(zone, el, platformId);
        this.zone = zone;
        this.sudokuService = sudokuService;
        this.tcg = tcg;
        this.fieldChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
    }
    set field(f) {
        this.sudokuService.field = f;
        this.app.setBoard(f);
    }
    set boxSize(size) {
        this.sudokuService.setBoxSize(size);
    }
    test(k) {
        // const x: number = Math.floor(k.offsetX * this.sudokuService.boardSize / this.elementRef.nativeElement.offsetWidth);
        // const y: number = Math.floor(k.offsetY * this.sudokuService.boardSize / this.elementRef.nativeElement.offsetHeight);
    }
    clear() {
        this.sudokuService.clear();
        this.fieldChange.emit(this.sudokuService.field);
    }
    getBoard() {
        return this.sudokuService.field;
    }
    loadGame() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new (yield this.tcg).SudokuBoardGameApp({
                view: this.el.nativeElement,
            });
        });
    }
}
SudokuBoardDirective.ɵfac = function SudokuBoardDirective_Factory(t) { return new (t || SudokuBoardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sudoku_field_service__WEBPACK_IMPORTED_MODULE_2__.SudokuFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_1__.SUDOKU_BOARD_TOKEN, 8)); };
SudokuBoardDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SudokuBoardDirective, selectors: [["canvas", "appSudokuBoard", ""]], inputs: { boxSize: "boxSize" }, outputs: { fieldChange: "fieldChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            _sudoku_field_service__WEBPACK_IMPORTED_MODULE_2__.SudokuFieldService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 3339:
/*!**************************************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/component/sudoku-field.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SudokuFieldService": () => (/* binding */ SudokuFieldService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SudokuFieldService {
    constructor() {
        this.field = [[]];
        this.boardSize = 25;
        this.mboxSize = 3;
        this.field = new Array(9).fill(0).map(() => new Array(9).fill(0));
    }
    get boxSize() {
        return this.mboxSize;
    }
    setBoxSize(size) {
        this.mboxSize = size;
        this.boardSize = Math.pow(size, 2);
        this.field = new Array(this.boardSize).fill(0).map(() => new Array(this.boardSize).fill(0));
    }
    setCell(x, y, value) {
        console.log(this.field, x, y, value);
        this.field[y][x] = value;
    }
    clear() {
        this.field = new Array(this.boardSize).fill(0).map(() => new Array(this.boardSize).fill(0));
    }
}
SudokuFieldService.ɵfac = function SudokuFieldService_Factory(t) { return new (t || SudokuFieldService)(); };
SudokuFieldService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SudokuFieldService, factory: SudokuFieldService.ɵfac });


/***/ }),

/***/ 9330:
/*!*************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SudokuFieldModule": () => (/* reexport safe */ _sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldModule),
/* harmony export */   "SudokuFieldComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.SudokuBoardDirective),
/* harmony export */   "SUDOKU_BOARD_TOKEN": () => (/* reexport safe */ _sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_2__.SUDOKU_BOARD_TOKEN)
/* harmony export */ });
/* harmony import */ var _sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sudoku-field.module */ 1572);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ 4929);
/* harmony import */ var _sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sudoku-board-loader-token */ 8648);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */





/***/ }),

/***/ 8648:
/*!*********************************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/sudoku-board-loader-token.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUDOKU_BOARD_TOKEN": () => (/* binding */ SUDOKU_BOARD_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */

const SUDOKU_BOARD_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Token providing loader for sudoku-board');


/***/ }),

/***/ 1572:
/*!***************************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-board/sudoku-field.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SudokuFieldModule": () => (/* binding */ SudokuFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ 4929);
/* harmony import */ var _component_number_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/number-dialog.component */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */







class SudokuFieldModule {
}
SudokuFieldModule.ɵfac = function SudokuFieldModule_Factory(t) { return new (t || SudokuFieldModule)(); };
SudokuFieldModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SudokuFieldModule });
SudokuFieldModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SudokuFieldModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective,
        _component_number_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NumberDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule], exports: [_component__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective] }); })();


/***/ }),

/***/ 4724:
/*!************************************************************!*\
  !*** ./src/app/routes/tank-call/tank-call-loader-token.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TANK_CALL_LOADER_TOKEN": () => (/* binding */ TANK_CALL_LOADER_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */

const TANK_CALL_LOADER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Token providing loader for tank-call');


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.browser.module */ 6991);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__.AppBrowserModule)
        .catch((err) => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map