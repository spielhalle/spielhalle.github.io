(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_spielhalle_client"] = self["webpackChunk_spielhalle_client"] || []).push([["src_app_routes_tank-call_tank-call_module_ts"], {
    /***/
    88846:
    /*!**************************************************************************!*\
      !*** ./src/app/routes/tank-call/components/tank-call-container/index.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TankCallContainerComponent": function TankCallContainerComponent() {
          return (
            /* reexport safe */
            _tank_call_container_component__WEBPACK_IMPORTED_MODULE_0__.TankCallContainerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _tank_call_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tank-call-container.component */
      92280);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    92280:
    /*!**************************************************************************************************!*\
      !*** ./src/app/routes/tank-call/components/tank-call-container/tank-call-container.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TankCallContainerComponent": function TankCallContainerComponent() {
          return (
            /* binding */
            _TankCallContainerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _tank_call_game_tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../tank-call-game/tank-call-game.directive */
      50067);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      function TankCallContainerComponent_h1_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unable to use canvas in server context");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TankCallContainerComponent_canvas_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 2);
        }
      }

      var _TankCallContainerComponent = /*#__PURE__*/_createClass(function _TankCallContainerComponent(platformId) {
        _classCallCheck(this, _TankCallContainerComponent);

        this.platformId = platformId;
        this.isBrowser = (0, _angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId);
      });

      _TankCallContainerComponent.ɵfac = function TankCallContainerComponent_Factory(t) {
        return new (t || _TankCallContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
      };

      _TankCallContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TankCallContainerComponent,
        selectors: [["app-tank-call"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["appTankCallGame", "", 4, "ngIf"], ["appTankCallGame", ""]],
        template: function TankCallContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TankCallContainerComponent_h1_0_Template, 2, 0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TankCallContainerComponent_canvas_1_Template, 1, 0, "canvas", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isBrowser);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _tank_call_game_tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__.TankCallGameDirective],
        encapsulation: 2
      });
      /***/
    },

    /***/
    49765:
    /*!*********************************************************************!*\
      !*** ./src/app/routes/tank-call/components/tank-call-game/index.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TankCallGameDirective": function TankCallGameDirective() {
          return (
            /* reexport safe */
            _tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__.TankCallGameDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _tank_call_game_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tank-call-game.directive */
      50067);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    50067:
    /*!****************************************************************************************!*\
      !*** ./src/app/routes/tank-call/components/tank-call-game/tank-call-game.directive.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TankCallGameDirective": function TankCallGameDirective() {
          return (
            /* binding */
            _TankCallGameDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/components */
      99771);
      /* harmony import */


      var _tank_call_loader_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../tank-call-loader-token */
      74724);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _TankCallGameDirective = /*#__PURE__*/function (_src_app_components__) {
        _inherits(_TankCallGameDirective, _src_app_components__);

        var _super = _createSuper(_TankCallGameDirective);

        function _TankCallGameDirective(zone, el, platformId, tcg) {
          var _this;

          _classCallCheck(this, _TankCallGameDirective);

          _this = _super.call(this, zone, el, platformId);
          _this.tcg = tcg;
          return _this;
        }

        _createClass(_TankCallGameDirective, [{
          key: "loadGame",
          value: function loadGame() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.tcg;

                    case 2:
                      _context.t0 = _context.sent.TankGameApp;
                      _context.t1 = {
                        view: this.el.nativeElement
                      };
                      return _context.abrupt("return", new _context.t0(_context.t1));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _TankCallGameDirective;
      }(src_app_components__WEBPACK_IMPORTED_MODULE_0__.AbstractPixiRenderDirective);

      _TankCallGameDirective.ɵfac = function TankCallGameDirective_Factory(t) {
        return new (t || _TankCallGameDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tank_call_loader_token__WEBPACK_IMPORTED_MODULE_1__.TANK_CALL_LOADER_TOKEN, 8));
      };

      _TankCallGameDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _TankCallGameDirective,
        selectors: [["canvas", "appTankCallGame", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      /***/
    },

    /***/
    6804:
    /*!**************************************************************!*\
      !*** ./src/app/routes/tank-call/tank-call-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TankCallRoutingModule": function TankCallRoutingModule() {
          return (
            /* binding */
            _TankCallRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/tank-call-container */
      88846);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var playRoutes = [{
        component: _components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__.TankCallContainerComponent,
        path: ''
      }, {
        path: '**',
        redirectTo: '/tank-call/'
      }];

      var _TankCallRoutingModule = /*#__PURE__*/_createClass(function _TankCallRoutingModule() {
        _classCallCheck(this, _TankCallRoutingModule);
      });

      _TankCallRoutingModule.ɵfac = function TankCallRoutingModule_Factory(t) {
        return new (t || _TankCallRoutingModule)();
      };

      _TankCallRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _TankCallRoutingModule
      });
      _TankCallRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(playRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_TankCallRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    9481:
    /*!******************************************************!*\
      !*** ./src/app/routes/tank-call/tank-call.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TankCallModule": function TankCallModule() {
          return (
            /* binding */
            _TankCallModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      65590);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      19946);
      /* harmony import */


      var _components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/tank-call-container */
      88846);
      /* harmony import */


      var _components_tank_call_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/tank-call-game */
      49765);
      /* harmony import */


      var _tank_call_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tank-call-routing.module */
      6804);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _TankCallModule = /*#__PURE__*/_createClass(function _TankCallModule() {
        _classCallCheck(this, _TankCallModule);
      });

      _TankCallModule.ɵfac = function TankCallModule_Factory(t) {
        return new (t || _TankCallModule)();
      };

      _TankCallModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _TankCallModule
      });
      _TankCallModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _tank_call_routing_module__WEBPACK_IMPORTED_MODULE_2__.TankCallRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_TankCallModule, {
          declarations: [_components_tank_call_container__WEBPACK_IMPORTED_MODULE_0__.TankCallContainerComponent, _components_tank_call_game__WEBPACK_IMPORTED_MODULE_1__.TankCallGameDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _tank_call_routing_module__WEBPACK_IMPORTED_MODULE_2__.TankCallRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_routes_tank-call_tank-call_module_ts-es5.js.map