(function () {
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

  (self["webpackChunk_spielhalle_client"] = self["webpackChunk_spielhalle_client"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modules/home */
      23937);
      /* harmony import */


      var _modules_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules/not-found */
      22648);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var appRoutes = [{
        component: _modules_home__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        path: ''
      }, {
        // tslint:disable-next-line:typedef
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_donmahallem_sudoku_dist_esm_index_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_routes_sudoku_sudoku_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./routes/sudoku/sudoku.module */
          57262)).then(function (m) {
            return m.SudokuModule;
          });
        },
        path: 'sudoku'
      }, {
        // tslint:disable-next-line:typedef
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material_fesm2015_icon_mjs"), __webpack_require__.e("src_app_routes_tank-call_tank-call_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./routes/tank-call/tank-call.module */
          9481)).then(function (m) {
            return m.TankCallModule;
          });
        },
        path: 'tank-call'
      }, {
        component: _modules_not_found__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent,
        path: '**'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes, {
          initialNavigation: 'enabled',
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    6991:
    /*!***************************************!*\
      !*** ./src/app/app.browser.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppBrowserModule": function AppBrowserModule() {
          return (
            /* binding */
            _AppBrowserModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/service-worker */
      47334);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.module */
      36747);
      /* harmony import */


      var _routes_sudoku_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./routes/sudoku/modules */
      61064);
      /* harmony import */


      var _routes_tank_call_tank_call_loader_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./routes/tank-call/tank-call-loader-token */
      74724);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppBrowserModule = /*#__PURE__*/_createClass(function _AppBrowserModule() {
        _classCallCheck(this, _AppBrowserModule);
      });

      _AppBrowserModule.ɵfac = function AppBrowserModule_Factory(t) {
        return new (t || _AppBrowserModule)();
      };

      _AppBrowserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppBrowserModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppBrowserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [{
          provide: _routes_tank_call_tank_call_loader_token__WEBPACK_IMPORTED_MODULE_4__.TANK_CALL_LOADER_TOKEN,
          useFactory: function useFactory() {
            return __webpack_require__.e(
            /*! import() */
            "node_modules_spielhalle_tank-call_dist_esm_index_mjs").then(__webpack_require__.bind(__webpack_require__,
            /*! @spielhalle/tank-call */
            6238));
          }
        }, {
          provide: _routes_sudoku_modules__WEBPACK_IMPORTED_MODULE_3__.SUDOKU_BOARD_TOKEN,
          useFactory: function useFactory() {
            return __webpack_require__.e(
            /*! import() */
            "node_modules_spielhalle_sudoku-board_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__,
            /*! @spielhalle/sudoku-board */
            46261));
          }
        }],
        imports: [[_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppBrowserModule, {
          imports: [_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      19946);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _c0 = function _c0() {
        return ["/"];
      };

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'spielhalle';
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 2,
        consts: [["color", "primary"], [3, "routerLink"], [1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Spielhalle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  overflow: hidden;\n}\n\ndiv.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmaWVsZF9zaXplOiA4MDtcbiRzdWRva3VfbWF4X3NpemU6IDgwMHB4O1xuOmhvc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmRpdi5jb250ZW50e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OjE7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      19946);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/home */
      23937);
      /* harmony import */


      var _modules_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/not-found */
      22648);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_modules_home__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _modules_not_found__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({
          appId: 'serverApp'
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_modules_home__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _modules_not_found__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule]
        });
      })();
      /***/

    },

    /***/
    29877:
    /*!**************************************************************!*\
      !*** ./src/app/components/abstract-pixi-render.directive.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AbstractPixiRenderDirective": function AbstractPixiRenderDirective() {
          return (
            /* binding */
            _AbstractPixiRenderDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _AbstractPixiRenderDirective = /*#__PURE__*/function () {
        function _AbstractPixiRenderDirective(zone, el, platformId) {
          _classCallCheck(this, _AbstractPixiRenderDirective);

          this.zone = zone;
          this.el = el;
          this.platformId = platformId;
        }

        _createClass(_AbstractPixiRenderDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!(0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
              return;
            }

            this.load().then(function () {
              console.log('Pixi loaded');
            })["catch"](console.error);
          }
        }, {
          key: "asyncZone",
          value: function asyncZone() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone.isInAngularZone()) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", new Promise(function (resolve) {
                        _this.zone.runOutsideAngular(resolve);
                      }));

                    case 2:
                      return _context.abrupt("return", Promise.resolve());

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "load",
          value: function load() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.asyncZone();

                    case 2:
                      _context2.next = 4;
                      return this.loadGame();

                    case 4:
                      this.app = _context2.sent;
                      this.app.resizeTo = this.el.nativeElement;
                      this.app.resize();
                      this.app.render();

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!(0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId) || !this.app) {
              return;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!(0, _angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId) || !this.app) {
              return;
            }

            this.app.destroy(true);
          }
        }]);

        return _AbstractPixiRenderDirective;
      }();

      _AbstractPixiRenderDirective.ɵfac = function AbstractPixiRenderDirective_Factory(t) {
        return new (t || _AbstractPixiRenderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
      };

      _AbstractPixiRenderDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _AbstractPixiRenderDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });
      /***/
    },

    /***/
    99771:
    /*!*************************************!*\
      !*** ./src/app/components/index.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AbstractPixiRenderDirective": function AbstractPixiRenderDirective() {
          return (
            /* reexport safe */
            _abstract_pixi_render_directive__WEBPACK_IMPORTED_MODULE_0__.AbstractPixiRenderDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _abstract_pixi_render_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./abstract-pixi-render.directive */
      29877);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    99906:
    /*!**********************************************************!*\
      !*** ./src/app/modules/home/component/home.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      11961);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _c0 = function _c0() {
        return ["sudoku"];
      };

      function HomeComponent_mat_card_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _HomeComponent = /*#__PURE__*/_createClass(function _HomeComponent() {
        _classCallCheck(this, _HomeComponent);

        this.items = ['a', 'b', 'c'];
      });

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 6,
        vars: 1,
        consts: [[1, "snap-parent"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to spielhalle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "For you this is a sudoku tool to play, create and solve sudokus. For me it's an angular play ground!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_mat_card_5_Template, 5, 2, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent],
        styles: ["[_nghost-%COMP%] {\n  overflow: auto;\n}\n@media (min-width: 930px) {\n  [_nghost-%COMP%] {\n    width: 80vw;\n    min-width: 930px;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 929px) {\n  [_nghost-%COMP%] {\n    width: 100vw;\n    display: block;\n  }\n}\n[_nghost-%COMP%]   div.snap-parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n}\n@media screen and (min-width: 600px) {\n  [_nghost-%COMP%]   div.snap-parent[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 16px;\n    gap: 16px;\n  }\n}\n@media screen and (min-width: 840px) {\n  [_nghost-%COMP%]   div.snap-parent[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 24px;\n    gap: 24px;\n    margin: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FBREo7QUFFSTtFQUZKO0lBR1EsV0FBQTtJQUNBLGdCQUxPO0lBTVAsY0FBQTtFQUNOO0FBQ0Y7QUFBSTtFQVBKO0lBUVEsWUFBQTtJQUNBLGNBQUE7RUFHTjtBQUNGO0FBRkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSVI7QUFIUTtFQUpKO0lBS1EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtJQUFBLFNBQUE7RUFNVjtBQUNGO0FBSlE7RUFWSjtJQVdRLGtDQUFBO0lBQ0EsY0FBQTtJQUFBLFNBQUE7SUFDQSxZQUFBO0VBT1Y7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpZWxkX3NpemU6IDgwO1xuJGxheW91dC1icmVhazogOTMwcHg7XG46aG9zdHtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIEBtZWRpYShtaW4td2lkdGg6ICRsYXlvdXQtYnJlYWspe1xuICAgICAgICB3aWR0aDo4MHZ3O1xuICAgICAgICBtaW4td2lkdGg6ICRsYXlvdXQtYnJlYWs7XG4gICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICggJGxheW91dC1icmVhayAtIDEgKSl7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICBkaXYuc25hcC1wYXJlbnR7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcbiAgICAgICAgICAgIGdhcDogMTZweDtcblxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KXtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    48167:
    /*!*************************************************!*\
      !*** ./src/app/modules/home/component/index.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* reexport safe */
            _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      99906);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    44882:
    /*!*********************************************!*\
      !*** ./src/app/modules/home/home.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      11961);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./component */
      48167);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _HomeModule = /*#__PURE__*/_createClass(function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      });

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule]
        });
      })();
      /***/

    },

    /***/
    23937:
    /*!***************************************!*\
      !*** ./src/app/modules/home/index.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* reexport safe */
            _home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule
          );
        },

        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* reexport safe */
            _component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.module */
      44882);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component */
      48167);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    45740:
    /*!******************************************************!*\
      !*** ./src/app/modules/not-found/component/index.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* reexport safe */
            _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found.component */
      50723);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    50723:
    /*!********************************************************************!*\
      !*** ./src/app/modules/not-found/component/not-found.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* binding */
            _NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NotFoundComponent = /*#__PURE__*/_createClass(function _NotFoundComponent() {
        _classCallCheck(this, _NotFoundComponent);
      });

      _NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || _NotFoundComponent)();
      };

      _NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 2,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@media (min-width: 930px) {\n  [_nghost-%COMP%] {\n    width: 80vw;\n    min-width: 930px;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 929px) {\n  [_nghost-%COMP%] {\n    width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQURKO0lBRVEsV0FBQTtJQUNBLGdCQUpPO0lBS1AsY0FBQTtFQUROO0FBQ0Y7QUFFSTtFQU5KO0lBT1EsWUFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpZWxkX3NpemU6IDgwO1xuJGxheW91dC1icmVhazogOTMwcHg7XG46aG9zdHtcbiAgICBAbWVkaWEobWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrKXtcbiAgICAgICAgd2lkdGg6ODB2dztcbiAgICAgICAgbWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAoICRsYXlvdXQtYnJlYWsgLSAxICkpe1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICB9XG5cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    22648:
    /*!********************************************!*\
      !*** ./src/app/modules/not-found/index.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundModule": function NotFoundModule() {
          return (
            /* reexport safe */
            _not_found_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundModule
          );
        },

        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* reexport safe */
            _component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _not_found_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found.module */
      38441);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component */
      45740);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    38441:
    /*!*******************************************************!*\
      !*** ./src/app/modules/not-found/not-found.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundModule": function NotFoundModule() {
          return (
            /* binding */
            _NotFoundModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./component */
      45740);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _NotFoundModule = /*#__PURE__*/_createClass(function _NotFoundModule() {
        _classCallCheck(this, _NotFoundModule);
      });

      _NotFoundModule.ɵfac = function NotFoundModule_Factory(t) {
        return new (t || _NotFoundModule)();
      };

      _NotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _NotFoundModule
      });
      _NotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_NotFoundModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]
        });
      })();
      /***/

    },

    /***/
    61064:
    /*!************************************************!*\
      !*** ./src/app/routes/sudoku/modules/index.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SUDOKU_BOARD_TOKEN": function SUDOKU_BOARD_TOKEN() {
          return (
            /* reexport safe */
            _sudoku_board__WEBPACK_IMPORTED_MODULE_0__.SUDOKU_BOARD_TOKEN
          );
        },

        /* harmony export */
        "SudokuFieldComponent": function SudokuFieldComponent() {
          return (
            /* reexport safe */
            _sudoku_board__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldComponent
          );
        },

        /* harmony export */
        "SudokuFieldModule": function SudokuFieldModule() {
          return (
            /* reexport safe */
            _sudoku_board__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sudoku_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sudoku-board */
      19330);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    14929:
    /*!***********************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/component/index.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuBoardDirective": function SudokuBoardDirective() {
          return (
            /* reexport safe */
            _sudoku_field_directive__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sudoku_field_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sudoku-field.directive */
      68012);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    84008:
    /*!*****************************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/component/number-dialog.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NumberDialogComponent": function NumberDialogComponent() {
          return (
            /* binding */
            _NumberDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      95758);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      87317);

      var _NumberDialogComponent = /*#__PURE__*/_createClass(function _NumberDialogComponent(dialogRef) {
        _classCallCheck(this, _NumberDialogComponent);

        this.dialogRef = dialogRef;
      });

      _NumberDialogComponent.ɵfac = function NumberDialogComponent_Factory(t) {
        return new (t || _NumberDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
      };

      _NumberDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NumberDialogComponent,
        selectors: [["app-number-dialog"]],
        decls: 26,
        vars: 10,
        consts: [["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
        template: function NumberDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
        styles: ["[_nghost-%COMP%] {\n  width: min(90vw, 90vh);\n  height: min(90vw, 90vh);\n  max-width: 480px;\n  max-height: 480px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVJO0VBQ0ksVUFBQTtBQUNSIiwiZmlsZSI6Im51bWJlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICB3aWR0aDptaW4oOTB2dyw5MHZoKTtcbiAgICBoZWlnaHQ6bWluKDkwdncsOTB2aCk7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcbn1cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgYnV0dG9ue1xuICAgICAgICB3aWR0aDozMyU7XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    68012:
    /*!****************************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/component/sudoku-field.directive.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuBoardDirective": function SudokuBoardDirective() {
          return (
            /* binding */
            _SudokuBoardDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../sudoku-board-loader-token */
      18648);
      /* harmony import */


      var _sudoku_field_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sudoku-field.service */
      53339);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _SudokuBoardDirective = /*#__PURE__*/function (_src_app_components__) {
        _inherits(_SudokuBoardDirective, _src_app_components__);

        var _super = _createSuper(_SudokuBoardDirective);

        function _SudokuBoardDirective(zone, el, platformId, sudokuService, tcg) {
          var _this2;

          _classCallCheck(this, _SudokuBoardDirective);

          _this2 = _super.call(this, zone, el, platformId);
          _this2.zone = zone;
          _this2.sudokuService = sudokuService;
          _this2.tcg = tcg;
          _this2.fieldChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(false);
          return _this2;
        }

        _createClass(_SudokuBoardDirective, [{
          key: "field",
          set: function set(f) {
            this.sudokuService.field = f;
            this.app.setBoard(f);
          }
        }, {
          key: "boxSize",
          set: function set(size) {
            this.sudokuService.setBoxSize(size);
          }
        }, {
          key: "test",
          value: function test(k) {// const x: number = Math.floor(k.offsetX * this.sudokuService.boardSize / this.elementRef.nativeElement.offsetWidth);
            // const y: number = Math.floor(k.offsetY * this.sudokuService.boardSize / this.elementRef.nativeElement.offsetHeight);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.sudokuService.clear();
            this.fieldChange.emit(this.sudokuService.field);
          }
        }, {
          key: "getBoard",
          value: function getBoard() {
            return this.sudokuService.field;
          }
        }, {
          key: "loadGame",
          value: function loadGame() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.tcg;

                    case 2:
                      _context3.t0 = _context3.sent.SudokuBoardGameApp;
                      _context3.t1 = {
                        view: this.el.nativeElement
                      };
                      return _context3.abrupt("return", new _context3.t0(_context3.t1));

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return _SudokuBoardDirective;
      }(src_app_components__WEBPACK_IMPORTED_MODULE_0__.AbstractPixiRenderDirective);

      _SudokuBoardDirective.ɵfac = function SudokuBoardDirective_Factory(t) {
        return new (t || _SudokuBoardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sudoku_field_service__WEBPACK_IMPORTED_MODULE_2__.SudokuFieldService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_1__.SUDOKU_BOARD_TOKEN, 8));
      };

      _SudokuBoardDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _SudokuBoardDirective,
        selectors: [["canvas", "appSudokuBoard", ""]],
        inputs: {
          boxSize: "boxSize"
        },
        outputs: {
          fieldChange: "fieldChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_sudoku_field_service__WEBPACK_IMPORTED_MODULE_2__.SudokuFieldService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
      });
      /***/
    },

    /***/
    53339:
    /*!**************************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/component/sudoku-field.service.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuFieldService": function SudokuFieldService() {
          return (
            /* binding */
            _SudokuFieldService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SudokuFieldService = /*#__PURE__*/function () {
        function _SudokuFieldService() {
          _classCallCheck(this, _SudokuFieldService);

          this.field = [[]];
          this.boardSize = 25;
          this.mboxSize = 3;
          this.field = new Array(9).fill(0).map(function () {
            return new Array(9).fill(0);
          });
        }

        _createClass(_SudokuFieldService, [{
          key: "boxSize",
          get: function get() {
            return this.mboxSize;
          }
        }, {
          key: "setBoxSize",
          value: function setBoxSize(size) {
            var _this3 = this;

            this.mboxSize = size;
            this.boardSize = Math.pow(size, 2);
            this.field = new Array(this.boardSize).fill(0).map(function () {
              return new Array(_this3.boardSize).fill(0);
            });
          }
        }, {
          key: "setCell",
          value: function setCell(x, y, value) {
            console.log(this.field, x, y, value);
            this.field[y][x] = value;
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this4 = this;

            this.field = new Array(this.boardSize).fill(0).map(function () {
              return new Array(_this4.boardSize).fill(0);
            });
          }
        }]);

        return _SudokuFieldService;
      }();

      _SudokuFieldService.ɵfac = function SudokuFieldService_Factory(t) {
        return new (t || _SudokuFieldService)();
      };

      _SudokuFieldService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SudokuFieldService,
        factory: _SudokuFieldService.ɵfac
      });
      /***/
    },

    /***/
    19330:
    /*!*************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/index.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuFieldModule": function SudokuFieldModule() {
          return (
            /* reexport safe */
            _sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldModule
          );
        },

        /* harmony export */
        "SudokuFieldComponent": function SudokuFieldComponent() {
          return (
            /* reexport safe */
            _component__WEBPACK_IMPORTED_MODULE_1__.SudokuBoardDirective
          );
        },

        /* harmony export */
        "SUDOKU_BOARD_TOKEN": function SUDOKU_BOARD_TOKEN() {
          return (
            /* reexport safe */
            _sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_2__.SUDOKU_BOARD_TOKEN
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sudoku-field.module */
      61572);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component */
      14929);
      /* harmony import */


      var _sudoku_board_loader_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sudoku-board-loader-token */
      18648);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    18648:
    /*!*********************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/sudoku-board-loader-token.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SUDOKU_BOARD_TOKEN": function SUDOKU_BOARD_TOKEN() {
          return (
            /* binding */
            _SUDOKU_BOARD_TOKEN
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _SUDOKU_BOARD_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Token providing loader for sudoku-board');
      /***/

    },

    /***/
    61572:
    /*!***************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-board/sudoku-field.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuFieldModule": function SudokuFieldModule() {
          return (
            /* binding */
            _SudokuFieldModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      95758);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./component */
      14929);
      /* harmony import */


      var _component_number_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component/number-dialog.component */
      84008);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _SudokuFieldModule = /*#__PURE__*/_createClass(function _SudokuFieldModule() {
        _classCallCheck(this, _SudokuFieldModule);
      });

      _SudokuFieldModule.ɵfac = function SudokuFieldModule_Factory(t) {
        return new (t || _SudokuFieldModule)();
      };

      _SudokuFieldModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _SudokuFieldModule
      });
      _SudokuFieldModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_SudokuFieldModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective, _component_number_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NumberDialogComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective]
        });
      })();
      /***/

    },

    /***/
    74724:
    /*!************************************************************!*\
      !*** ./src/app/routes/tank-call/tank-call-loader-token.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TANK_CALL_LOADER_TOKEN": function TANK_CALL_LOADER_TOKEN() {
          return (
            /* binding */
            _TANK_CALL_LOADER_TOKEN
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _TANK_CALL_LOADER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Token providing loader for tank-call');
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.browser.module */
      6991);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__.AppBrowserModule)["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map