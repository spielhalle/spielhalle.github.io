"use strict";
(self["webpackChunkspielhalle"] = self["webpackChunkspielhalle"] || []).push([["src_app_routes_tank-call_tank-call_module_ts"],{

/***/ 8846:
/*!**************************************************************************!*\
  !*** ./src/app/routes/tank-call/components/tank-call-container/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankCallContainerComponent": () => (/* reexport safe */ _tank_call_container_component__WEBPACK_IMPORTED_MODULE_0__.TankCallContainerComponent)
/* harmony export */ });
/* harmony import */ var _tank_call_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank-call-container.component */ 2280);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 2280:
/*!**************************************************************************************************!*\
  !*** ./src/app/routes/tank-call/components/tank-call-container/tank-call-container.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankCallContainerComponent": () => (/* binding */ TankCallContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tank_call_game_tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tank-call-game/tank-call-game.directive */ 67);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */





function TankCallContainerComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unable to use canvas in server context");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TankCallContainerComponent_canvas_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
} }
class TankCallContainerComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId);
    }
}
TankCallContainerComponent.ɵfac = function TankCallContainerComponent_Factory(t) { return new (t || TankCallContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
TankCallContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TankCallContainerComponent, selectors: [["app-tank-call"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["appTankCallGame", "", 4, "ngIf"], ["appTankCallGame", ""]], template: function TankCallContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TankCallContainerComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TankCallContainerComponent_canvas_1_Template, 1, 0, "canvas", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _tank_call_game_tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__.TankCallGameDirective], encapsulation: 2 });


/***/ }),

/***/ 9765:
/*!*********************************************************************!*\
  !*** ./src/app/routes/tank-call/components/tank-call-game/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankCallGameDirective": () => (/* reexport safe */ _tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__.TankCallGameDirective)
/* harmony export */ });
/* harmony import */ var _tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank-call-game.directive */ 67);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */



/***/ }),

/***/ 67:
/*!****************************************************************************************!*\
  !*** ./src/app/routes/tank-call/components/tank-call-game/tank-call-game.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankCallGameDirective": () => (/* binding */ TankCallGameDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components */ 9771);
/* harmony import */ var _tank_call_loader_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../tank-call-loader-token */ 4724);

/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */




class TankCallGameDirective extends src_app_components__WEBPACK_IMPORTED_MODULE_0__.AbstractPixiRenderDirective {
    constructor(zone, el, platformId, tcg) {
        super(zone, el, platformId);
        this.tcg = tcg;
    }
    loadGame() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return new (yield this.tcg).TankGameApp({
                view: this.el.nativeElement,
            });
        });
    }
}
TankCallGameDirective.ɵfac = function TankCallGameDirective_Factory(t) { return new (t || TankCallGameDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tank_call_loader_token__WEBPACK_IMPORTED_MODULE_1__.TANK_CALL_LOADER_TOKEN, 8)); };
TankCallGameDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: TankCallGameDirective, selectors: [["canvas", "appTankCallGame", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 6804:
/*!**************************************************************!*\
  !*** ./src/app/routes/tank-call/tank-call-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankCallRoutingModule": () => (/* binding */ TankCallRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tank-call-container */ 8846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const playRoutes = [
    {
        component: _components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__.TankCallContainerComponent,
        path: '',
    },
    {
        path: '**',
        redirectTo: '/tank-call/',
    },
];
class TankCallRoutingModule {
}
TankCallRoutingModule.ɵfac = function TankCallRoutingModule_Factory(t) { return new (t || TankCallRoutingModule)(); };
TankCallRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TankCallRoutingModule });
TankCallRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(playRoutes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TankCallRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9481:
/*!******************************************************!*\
  !*** ./src/app/routes/tank-call/tank-call.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankCallModule": () => (/* binding */ TankCallModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tank-call-container */ 8846);
/* harmony import */ var _components_tank_call_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tank-call-game */ 9765);
/* harmony import */ var _tank_call_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tank-call-routing.module */ 6804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */








class TankCallModule {
}
TankCallModule.ɵfac = function TankCallModule_Factory(t) { return new (t || TankCallModule)(); };
TankCallModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TankCallModule });
TankCallModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _tank_call_routing_module__WEBPACK_IMPORTED_MODULE_2__.TankCallRoutingModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TankCallModule, { declarations: [_components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__.TankCallContainerComponent, _components_tank_call_game__WEBPACK_IMPORTED_MODULE_1__.TankCallGameDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _tank_call_routing_module__WEBPACK_IMPORTED_MODULE_2__.TankCallRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_routes_tank-call_tank-call_module_ts.js.map