(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunk_spielhalle_client"] = self["webpackChunk_spielhalle_client"] || []).push([["src_app_routes_sudoku_sudoku_module_ts"], {
    /***/
    1707:
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AbstractControl": function AbstractControl() {
          return (
            /* binding */
            _AbstractControl
          );
        },

        /* harmony export */
        "AbstractControlDirective": function AbstractControlDirective() {
          return (
            /* binding */
            _AbstractControlDirective
          );
        },

        /* harmony export */
        "AbstractFormGroupDirective": function AbstractFormGroupDirective() {
          return (
            /* binding */
            _AbstractFormGroupDirective
          );
        },

        /* harmony export */
        "COMPOSITION_BUFFER_MODE": function COMPOSITION_BUFFER_MODE() {
          return (
            /* binding */
            _COMPOSITION_BUFFER_MODE
          );
        },

        /* harmony export */
        "CheckboxControlValueAccessor": function CheckboxControlValueAccessor() {
          return (
            /* binding */
            _CheckboxControlValueAccessor
          );
        },

        /* harmony export */
        "CheckboxRequiredValidator": function CheckboxRequiredValidator() {
          return (
            /* binding */
            _CheckboxRequiredValidator
          );
        },

        /* harmony export */
        "ControlContainer": function ControlContainer() {
          return (
            /* binding */
            _ControlContainer
          );
        },

        /* harmony export */
        "DefaultValueAccessor": function DefaultValueAccessor() {
          return (
            /* binding */
            _DefaultValueAccessor
          );
        },

        /* harmony export */
        "EmailValidator": function EmailValidator() {
          return (
            /* binding */
            _EmailValidator
          );
        },

        /* harmony export */
        "FormArray": function FormArray() {
          return (
            /* binding */
            _FormArray
          );
        },

        /* harmony export */
        "FormArrayName": function FormArrayName() {
          return (
            /* binding */
            _FormArrayName
          );
        },

        /* harmony export */
        "FormBuilder": function FormBuilder() {
          return (
            /* binding */
            _FormBuilder
          );
        },

        /* harmony export */
        "FormControl": function FormControl() {
          return (
            /* binding */
            _FormControl
          );
        },

        /* harmony export */
        "FormControlDirective": function FormControlDirective() {
          return (
            /* binding */
            _FormControlDirective
          );
        },

        /* harmony export */
        "FormControlName": function FormControlName() {
          return (
            /* binding */
            _FormControlName
          );
        },

        /* harmony export */
        "FormGroup": function FormGroup() {
          return (
            /* binding */
            _FormGroup
          );
        },

        /* harmony export */
        "FormGroupDirective": function FormGroupDirective() {
          return (
            /* binding */
            _FormGroupDirective
          );
        },

        /* harmony export */
        "FormGroupName": function FormGroupName() {
          return (
            /* binding */
            _FormGroupName
          );
        },

        /* harmony export */
        "FormsModule": function FormsModule() {
          return (
            /* binding */
            _FormsModule
          );
        },

        /* harmony export */
        "MaxLengthValidator": function MaxLengthValidator() {
          return (
            /* binding */
            _MaxLengthValidator
          );
        },

        /* harmony export */
        "MaxValidator": function MaxValidator() {
          return (
            /* binding */
            _MaxValidator
          );
        },

        /* harmony export */
        "MinLengthValidator": function MinLengthValidator() {
          return (
            /* binding */
            _MinLengthValidator
          );
        },

        /* harmony export */
        "MinValidator": function MinValidator() {
          return (
            /* binding */
            _MinValidator
          );
        },

        /* harmony export */
        "NG_ASYNC_VALIDATORS": function NG_ASYNC_VALIDATORS() {
          return (
            /* binding */
            _NG_ASYNC_VALIDATORS
          );
        },

        /* harmony export */
        "NG_VALIDATORS": function NG_VALIDATORS() {
          return (
            /* binding */
            _NG_VALIDATORS
          );
        },

        /* harmony export */
        "NG_VALUE_ACCESSOR": function NG_VALUE_ACCESSOR() {
          return (
            /* binding */
            _NG_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "NgControl": function NgControl() {
          return (
            /* binding */
            _NgControl
          );
        },

        /* harmony export */
        "NgControlStatus": function NgControlStatus() {
          return (
            /* binding */
            _NgControlStatus
          );
        },

        /* harmony export */
        "NgControlStatusGroup": function NgControlStatusGroup() {
          return (
            /* binding */
            _NgControlStatusGroup
          );
        },

        /* harmony export */
        "NgForm": function NgForm() {
          return (
            /* binding */
            _NgForm
          );
        },

        /* harmony export */
        "NgModel": function NgModel() {
          return (
            /* binding */
            _NgModel
          );
        },

        /* harmony export */
        "NgModelGroup": function NgModelGroup() {
          return (
            /* binding */
            _NgModelGroup
          );
        },

        /* harmony export */
        "NgSelectOption": function NgSelectOption() {
          return (
            /* binding */
            _NgSelectOption
          );
        },

        /* harmony export */
        "NumberValueAccessor": function NumberValueAccessor() {
          return (
            /* binding */
            _NumberValueAccessor
          );
        },

        /* harmony export */
        "PatternValidator": function PatternValidator() {
          return (
            /* binding */
            _PatternValidator
          );
        },

        /* harmony export */
        "RadioControlValueAccessor": function RadioControlValueAccessor() {
          return (
            /* binding */
            _RadioControlValueAccessor
          );
        },

        /* harmony export */
        "RangeValueAccessor": function RangeValueAccessor() {
          return (
            /* binding */
            _RangeValueAccessor
          );
        },

        /* harmony export */
        "ReactiveFormsModule": function ReactiveFormsModule() {
          return (
            /* binding */
            _ReactiveFormsModule
          );
        },

        /* harmony export */
        "RequiredValidator": function RequiredValidator() {
          return (
            /* binding */
            _RequiredValidator
          );
        },

        /* harmony export */
        "SelectControlValueAccessor": function SelectControlValueAccessor() {
          return (
            /* binding */
            _SelectControlValueAccessor
          );
        },

        /* harmony export */
        "SelectMultipleControlValueAccessor": function SelectMultipleControlValueAccessor() {
          return (
            /* binding */
            _SelectMultipleControlValueAccessor
          );
        },

        /* harmony export */
        "VERSION": function VERSION() {
          return (
            /* binding */
            _VERSION
          );
        },

        /* harmony export */
        "Validators": function Validators() {
          return (
            /* binding */
            _Validators
          );
        },

        /* harmony export */
        "ɵInternalFormsSharedModule": function ɵInternalFormsSharedModule() {
          return (
            /* binding */
            _ɵInternalFormsSharedModule
          );
        },

        /* harmony export */
        "ɵNgNoValidate": function ɵNgNoValidate() {
          return (
            /* binding */
            _ɵNgNoValidate
          );
        },

        /* harmony export */
        "ɵNgSelectMultipleOption": function ɵNgSelectMultipleOption() {
          return (
            /* binding */
            _ɵNgSelectMultipleOption
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_a": function ɵangular_packages_forms_forms_a() {
          return (
            /* binding */
            SHARED_FORM_DIRECTIVES
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_b": function ɵangular_packages_forms_forms_b() {
          return (
            /* binding */
            TEMPLATE_DRIVEN_DIRECTIVES
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_ba": function ɵangular_packages_forms_forms_ba() {
          return (
            /* binding */
            SELECT_MULTIPLE_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bb": function ɵangular_packages_forms_forms_bb() {
          return (
            /* binding */
            _ɵNgSelectMultipleOption
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bc": function ɵangular_packages_forms_forms_bc() {
          return (
            /* binding */
            _ɵNgNoValidate
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bd": function ɵangular_packages_forms_forms_bd() {
          return (
            /* binding */
            MAX_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_be": function ɵangular_packages_forms_forms_be() {
          return (
            /* binding */
            MIN_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bf": function ɵangular_packages_forms_forms_bf() {
          return (
            /* binding */
            REQUIRED_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bg": function ɵangular_packages_forms_forms_bg() {
          return (
            /* binding */
            CHECKBOX_REQUIRED_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bh": function ɵangular_packages_forms_forms_bh() {
          return (
            /* binding */
            EMAIL_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bi": function ɵangular_packages_forms_forms_bi() {
          return (
            /* binding */
            MIN_LENGTH_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bj": function ɵangular_packages_forms_forms_bj() {
          return (
            /* binding */
            MAX_LENGTH_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bk": function ɵangular_packages_forms_forms_bk() {
          return (
            /* binding */
            PATTERN_VALIDATOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bl": function ɵangular_packages_forms_forms_bl() {
          return (
            /* binding */
            minValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bm": function ɵangular_packages_forms_forms_bm() {
          return (
            /* binding */
            maxValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bn": function ɵangular_packages_forms_forms_bn() {
          return (
            /* binding */
            requiredValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bo": function ɵangular_packages_forms_forms_bo() {
          return (
            /* binding */
            requiredTrueValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bp": function ɵangular_packages_forms_forms_bp() {
          return (
            /* binding */
            emailValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bq": function ɵangular_packages_forms_forms_bq() {
          return (
            /* binding */
            minLengthValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_br": function ɵangular_packages_forms_forms_br() {
          return (
            /* binding */
            maxLengthValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bs": function ɵangular_packages_forms_forms_bs() {
          return (
            /* binding */
            patternValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_bt": function ɵangular_packages_forms_forms_bt() {
          return (
            /* binding */
            _nullValidator
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_c": function ɵangular_packages_forms_forms_c() {
          return (
            /* binding */
            REACTIVE_DRIVEN_DIRECTIVES
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_d": function ɵangular_packages_forms_forms_d() {
          return (
            /* binding */
            _ɵInternalFormsSharedModule
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_e": function ɵangular_packages_forms_forms_e() {
          return (
            /* binding */
            CHECKBOX_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_f": function ɵangular_packages_forms_forms_f() {
          return (
            /* binding */
            BaseControlValueAccessor
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_g": function ɵangular_packages_forms_forms_g() {
          return (
            /* binding */
            BuiltInControlValueAccessor
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_h": function ɵangular_packages_forms_forms_h() {
          return (
            /* binding */
            DEFAULT_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_i": function ɵangular_packages_forms_forms_i() {
          return (
            /* binding */
            AbstractControlStatus
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_j": function ɵangular_packages_forms_forms_j() {
          return (
            /* binding */
            ngControlStatusHost
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_k": function ɵangular_packages_forms_forms_k() {
          return (
            /* binding */
            ngGroupStatusHost
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_l": function ɵangular_packages_forms_forms_l() {
          return (
            /* binding */
            formDirectiveProvider
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_m": function ɵangular_packages_forms_forms_m() {
          return (
            /* binding */
            formControlBinding
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_n": function ɵangular_packages_forms_forms_n() {
          return (
            /* binding */
            modelGroupProvider
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_o": function ɵangular_packages_forms_forms_o() {
          return (
            /* binding */
            NUMBER_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_p": function ɵangular_packages_forms_forms_p() {
          return (
            /* binding */
            RADIO_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_q": function ɵangular_packages_forms_forms_q() {
          return (
            /* binding */
            RadioControlRegistryModule
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_r": function ɵangular_packages_forms_forms_r() {
          return (
            /* binding */
            RadioControlRegistry
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_s": function ɵangular_packages_forms_forms_s() {
          return (
            /* binding */
            RANGE_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_t": function ɵangular_packages_forms_forms_t() {
          return (
            /* binding */
            NG_MODEL_WITH_FORM_CONTROL_WARNING
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_u": function ɵangular_packages_forms_forms_u() {
          return (
            /* binding */
            formControlBinding$1
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_v": function ɵangular_packages_forms_forms_v() {
          return (
            /* binding */
            controlNameBinding
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_w": function ɵangular_packages_forms_forms_w() {
          return (
            /* binding */
            formDirectiveProvider$1
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_x": function ɵangular_packages_forms_forms_x() {
          return (
            /* binding */
            formGroupNameProvider
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_y": function ɵangular_packages_forms_forms_y() {
          return (
            /* binding */
            formArrayNameProvider
          );
        },

        /* harmony export */
        "ɵangular_packages_forms_forms_z": function ɵangular_packages_forms_forms_z() {
          return (
            /* binding */
            SELECT_VALUE_ACCESSOR
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      10388);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      34122);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      53399);
      /**
       * @license Angular v12.2.15
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class for all ControlValueAccessor classes defined in Forms package.
       * Contains common logic and utility functions.
       *
       * Note: this is an *internal-only* class and should not be extended or used directly in
       * applications code.
       */


      var BaseControlValueAccessor = /*#__PURE__*/function () {
        function BaseControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, BaseControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Helper method that sets a property on a target element using the current Renderer
         * implementation.
         * @nodoc
         */


        _createClass(BaseControlValueAccessor, [{
          key: "setProperty",
          value: function setProperty(key, value) {
            this._renderer.setProperty(this._elementRef.nativeElement, key, value);
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Sets the "disabled" property on the range input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.setProperty('disabled', isDisabled);
          }
        }]);

        return BaseControlValueAccessor;
      }();

      BaseControlValueAccessor.ɵfac = function BaseControlValueAccessor_Factory(t) {
        return new (t || BaseControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      BaseControlValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseControlValueAccessor
      });

      BaseControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * Base class for all built-in ControlValueAccessor classes (except DefaultValueAccessor, which is
       * used in case no other CVAs can be found). We use this class to distinguish between default CVA,
       * built-in CVAs and custom CVAs, so that Forms logic can recognize built-in CVAs and treat custom
       * ones with higher priority (when both built-in and custom CVAs are present).
       *
       * Note: this is an *internal-only* class and should not be extended or used directly in
       * applications code.
       */


      var BuiltInControlValueAccessor = /*#__PURE__*/function (_BaseControlValueAcce) {
        _inherits(BuiltInControlValueAccessor, _BaseControlValueAcce);

        var _super = _createSuper(BuiltInControlValueAccessor);

        function BuiltInControlValueAccessor() {
          _classCallCheck(this, BuiltInControlValueAccessor);

          return _super.apply(this, arguments);
        }

        return _createClass(BuiltInControlValueAccessor);
      }(BaseControlValueAccessor);

      BuiltInControlValueAccessor.ɵfac = /*@__PURE__*/function () {
        var ɵBuiltInControlValueAccessor_BaseFactory;
        return function BuiltInControlValueAccessor_Factory(t) {
          return (ɵBuiltInControlValueAccessor_BaseFactory || (ɵBuiltInControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BuiltInControlValueAccessor)))(t || BuiltInControlValueAccessor);
        };
      }();

      BuiltInControlValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BuiltInControlValueAccessor,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuiltInControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], null, null);
      })();
      /**
       * Used to provide a `ControlValueAccessor` for form controls.
       *
       * See `DefaultValueAccessor` for how to implement one.
       *
       * @publicApi
       */


      var _NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgValueAccessor');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CHECKBOX_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _CheckboxControlValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
       * element.
       *
       * @usageNotes
       *
       * ### Using a checkbox with a reactive form.
       *
       * The following example shows how to use a checkbox with a reactive form.
       *
       * ```ts
       * const rememberLoginControl = new FormControl();
       * ```
       *
       * ```
       * <input type="checkbox" [formControl]="rememberLoginControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _CheckboxControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA) {
        _inherits(_CheckboxControlValueAccessor, _BuiltInControlValueA);

        var _super2 = _createSuper(_CheckboxControlValueAccessor);

        function _CheckboxControlValueAccessor() {
          _classCallCheck(this, _CheckboxControlValueAccessor);

          return _super2.apply(this, arguments);
        }

        _createClass(_CheckboxControlValueAccessor, [{
          key: "writeValue",
          value:
          /**
           * Sets the "checked" property on the input element.
           * @nodoc
           */
          function writeValue(value) {
            this.setProperty('checked', value);
          }
        }]);

        return _CheckboxControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _CheckboxControlValueAccessor.ɵfac = /*@__PURE__*/function () {
        var ɵCheckboxControlValueAccessor_BaseFactory;
        return function CheckboxControlValueAccessor_Factory(t) {
          return (ɵCheckboxControlValueAccessor_BaseFactory || (ɵCheckboxControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
        };
      }();

      _CheckboxControlValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CheckboxControlValueAccessor,
        selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
        hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.checked);
            })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CheckboxControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: {
              '(change)': 'onChange($event.target.checked)',
              '(blur)': 'onTouched()'
            },
            providers: [CHECKBOX_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DEFAULT_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _DefaultValueAccessor;
        }),
        multi: true
      };
      /**
       * We must check whether the agent is Android because composition events
       * behave differently between iOS and Android.
       */

      function _isAndroid() {
        var userAgent = (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
      }
      /**
       * @description
       * Provide this token to control if form directives buffer IME input until
       * the "compositionend" event occurs.
       * @publicApi
       */


      var _COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CompositionEventMode');
      /**
       * The default `ControlValueAccessor` for writing a value and listening to changes on input
       * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * {@searchKeywords ngDefaultControl}
       *
       * @usageNotes
       *
       * ### Using the default value accessor
       *
       * The following example shows how to use an input element that activates the default value accessor
       * (in this case, a text field).
       *
       * ```ts
       * const firstNameControl = new FormControl();
       * ```
       *
       * ```
       * <input type="text" [formControl]="firstNameControl">
       * ```
       *
       * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
       * you could also use it for custom components that have similar behavior and do not require special
       * processing. In order to attach the default value accessor to a custom element, add the
       * `ngDefaultControl` attribute as shown below.
       *
       * ```
       * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _DefaultValueAccessor = /*#__PURE__*/function (_BaseControlValueAcce2) {
        _inherits(_DefaultValueAccessor, _BaseControlValueAcce2);

        var _super3 = _createSuper(_DefaultValueAccessor);

        function _DefaultValueAccessor(renderer, elementRef, _compositionMode) {
          var _this;

          _classCallCheck(this, _DefaultValueAccessor);

          _this = _super3.call(this, renderer, elementRef);
          _this._compositionMode = _compositionMode;
          /** Whether the user is creating a composition string (IME events). */

          _this._composing = false;

          if (_this._compositionMode == null) {
            _this._compositionMode = !_isAndroid();
          }

          return _this;
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(_DefaultValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            var normalizedValue = value == null ? '' : value;
            this.setProperty('value', normalizedValue);
          }
          /** @internal */

        }, {
          key: "_handleInput",
          value: function _handleInput(value) {
            if (!this._compositionMode || this._compositionMode && !this._composing) {
              this.onChange(value);
            }
          }
          /** @internal */

        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = true;
          }
          /** @internal */

        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
          }
        }]);

        return _DefaultValueAccessor;
      }(BaseControlValueAccessor);

      _DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
        return new (t || _DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_COMPOSITION_BUFFER_MODE, 8));
      };

      _DefaultValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DefaultValueAccessor,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
              return ctx._handleInput($event.target.value);
            })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
              return ctx._compositionStart();
            })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
              return ctx._compositionEnd($event.target.value);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _DefaultValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_COMPOSITION_BUFFER_MODE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DefaultValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
              '(input)': '$any(this)._handleInput($event.target.value)',
              '(blur)': 'onTouched()',
              '(compositionstart)': '$any(this)._compositionStart()',
              '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_COMPOSITION_BUFFER_MODE]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
      }

      function hasValidLength(value) {
        // non-strict comparison is intentional, to check for both `null` and `undefined` values
        return value != null && typeof value.length === 'number';
      }
      /**
       * @description
       * An `InjectionToken` for registering additional synchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_ASYNC_VALIDATORS`
       *
       * @usageNotes
       *
       * ### Providing a custom validator
       *
       * The following example registers a custom validator directive. Adding the validator to the
       * existing collection of validators requires the `multi: true` option.
       *
       * ```typescript
       * @Directive({
       *   selector: '[customValidator]',
       *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
       * })
       * class CustomValidatorDirective implements Validator {
       *   validate(control: AbstractControl): ValidationErrors | null {
       *     return { 'custom': true };
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      var _NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgValidators');
      /**
       * @description
       * An `InjectionToken` for registering additional asynchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_VALIDATORS`
       *
       * @publicApi
       */


      var _NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgAsyncValidators');
      /**
       * A regular expression that matches valid e-mail addresses.
       *
       * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
       * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
       *   punctuation symbols).
       * - `local-part` cannot begin or end with a period (`.`).
       * - `local-part` cannot be longer than 64 characters.
       * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
       *   `foo.com`.
       * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
       *   periods (`.`)).
       * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
       * - A `label` cannot be longer than 63 characters.
       * - The whole address cannot be longer than 254 characters.
       *
       * ## Implementation background
       *
       * This regexp was ported over from AngularJS (see there for git history):
       * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
       * It is based on the
       * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address). The main differences from the WHATWG version are:
       *   - Disallow `local-part` to begin or end with a period (`.`).
       *   - Disallow `local-part` length to exceed 64 characters.
       *   - Disallow total address length to exceed 254 characters.
       *
       * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
       */


      var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      /**
       * @description
       * Provides a set of built-in validators that can be used by form controls.
       *
       * A validator is a function that processes a `FormControl` or collection of
       * controls and returns an error map or null. A null map means that validation has passed.
       *
       * @see [Form Validation](/guide/form-validation)
       *
       * @publicApi
       */

      var _Validators = /*#__PURE__*/function () {
        function _Validators() {
          _classCallCheck(this, _Validators);
        }

        _createClass(_Validators, null, [{
          key: "min",
          value:
          /**
           * @description
           * Validator that requires the control's value to be greater than or equal to the provided number.
           *
           * @usageNotes
           *
           * ### Validate against a minimum of 3
           *
           * ```typescript
           * const control = new FormControl(2, Validators.min(3));
           *
           * console.log(control.errors); // {min: {min: 3, actual: 2}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `min` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */
          function min(_min) {
            return minValidator(_min);
          }
          /**
           * @description
           * Validator that requires the control's value to be less than or equal to the provided number.
           *
           * @usageNotes
           *
           * ### Validate against a maximum of 15
           *
           * ```typescript
           * const control = new FormControl(16, Validators.max(15));
           *
           * console.log(control.errors); // {max: {max: 15, actual: 16}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `max` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "max",
          value: function max(_max) {
            return maxValidator(_max);
          }
          /**
           * @description
           * Validator that requires the control have a non-empty value.
           *
           * @usageNotes
           *
           * ### Validate that the field is non-empty
           *
           * ```typescript
           * const control = new FormControl('', Validators.required);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map with the `required` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "required",
          value: function required(control) {
            return requiredValidator(control);
          }
          /**
           * @description
           * Validator that requires the control's value be true. This validator is commonly
           * used for required checkboxes.
           *
           * @usageNotes
           *
           * ### Validate that the field value is true
           *
           * ```typescript
           * const control = new FormControl('', Validators.requiredTrue);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map that contains the `required` property
           * set to `true` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "requiredTrue",
          value: function requiredTrue(control) {
            return requiredTrueValidator(control);
          }
          /**
           * @description
           * Validator that requires the control's value pass an email validation test.
           *
           * Tests the value using a [regular
           * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
           * pattern suitable for common usecases. The pattern is based on the definition of a valid email
           * address in the [WHATWG HTML
           * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
           * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
           * lengths of different parts of the address).
           *
           * The differences from the WHATWG version include:
           * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
           * - Disallow `local-part` to be longer than 64 characters.
           * - Disallow the whole address to be longer than 254 characters.
           *
           * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
           * validate the value against a different pattern.
           *
           * @usageNotes
           *
           * ### Validate that the field matches a valid email pattern
           *
           * ```typescript
           * const control = new FormControl('bad@', Validators.email);
           *
           * console.log(control.errors); // {email: true}
           * ```
           *
           * @returns An error map with the `email` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "email",
          value: function email(control) {
            return emailValidator(control);
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be greater than or equal
           * to the provided minimum length. This validator is also provided by default if you use the
           * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays. The
           * `minLength` validator logic is also not invoked for values when their `length` property is 0
           * (for example in case of an empty string or an empty array), to support optional controls. You
           * can use the standard `required` validator if empty values should not be considered valid.
           *
           * @usageNotes
           *
           * ### Validate that the field has a minimum of 3 characters
           *
           * ```typescript
           * const control = new FormControl('ng', Validators.minLength(3));
           *
           * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
           * ```
           *
           * ```html
           * <input minlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `minlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "minLength",
          value: function minLength(_minLength) {
            return minLengthValidator(_minLength);
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be less than or equal
           * to the provided maximum length. This validator is also provided by default if you use the
           * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays.
           *
           * @usageNotes
           *
           * ### Validate that the field has maximum of 5 characters
           *
           * ```typescript
           * const control = new FormControl('Angular', Validators.maxLength(5));
           *
           * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
           * ```
           *
           * ```html
           * <input maxlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `maxlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "maxLength",
          value: function maxLength(_maxLength) {
            return maxLengthValidator(_maxLength);
          }
          /**
           * @description
           * Validator that requires the control's value to match a regex pattern. This validator is also
           * provided by default if you use the HTML5 `pattern` attribute.
           *
           * @usageNotes
           *
           * ### Validate that the field only contains letters or spaces
           *
           * ```typescript
           * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
           *
           * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
           * ```
           *
           * ```html
           * <input pattern="[a-zA-Z ]*">
           * ```
           *
           * ### Pattern matching with the global or sticky flag
           *
           * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
           * can produce different results on the same input when validations are run consecutively. This is
           * due to how the behavior of `RegExp.prototype.test` is
           * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
           * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
           * Due to this behavior, it is recommended that when using
           * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
           * flag enabled.
           *
           * ```typescript
           * // Not recommended (since the `g` flag is used)
           * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
           *
           * // Good
           * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
           * ```
           *
           * @param pattern A regular expression to be used as is to test the values, or a string.
           * If a string is passed, the `^` character is prepended and the `$` character is
           * appended to the provided string (if not already present), and the resulting regular
           * expression is used to test the values.
           *
           * @returns A validator function that returns an error map with the
           * `pattern` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "pattern",
          value: function pattern(_pattern) {
            return patternValidator(_pattern);
          }
          /**
           * @description
           * Validator that performs no operation.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "nullValidator",
          value: function nullValidator(control) {
            return _nullValidator(control);
          }
        }, {
          key: "compose",
          value: function compose(validators) {
            return _compose(validators);
          }
          /**
           * @description
           * Compose multiple async validators into a single function that returns the union
           * of the individual error objects for the provided control.
           *
           * @returns A validator function that returns an error map with the
           * merged error objects of the async validators if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "composeAsync",
          value: function composeAsync(validators) {
            return _composeAsync(validators);
          }
        }]);

        return _Validators;
      }();
      /**
       * Validator that requires the control's value to be greater than or equal to the provided number.
       * See `Validators.min` for additional information.
       */


      function minValidator(min) {
        return function (control) {
          if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
            return null; // don't validate empty values to allow optional controls
          }

          var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
          // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

          return !isNaN(value) && value < min ? {
            'min': {
              'min': min,
              'actual': control.value
            }
          } : null;
        };
      }
      /**
       * Validator that requires the control's value to be less than or equal to the provided number.
       * See `Validators.max` for additional information.
       */


      function maxValidator(max) {
        return function (control) {
          if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
            return null; // don't validate empty values to allow optional controls
          }

          var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
          // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

          return !isNaN(value) && value > max ? {
            'max': {
              'max': max,
              'actual': control.value
            }
          } : null;
        };
      }
      /**
       * Validator that requires the control have a non-empty value.
       * See `Validators.required` for additional information.
       */


      function requiredValidator(control) {
        return isEmptyInputValue(control.value) ? {
          'required': true
        } : null;
      }
      /**
       * Validator that requires the control's value be true. This validator is commonly
       * used for required checkboxes.
       * See `Validators.requiredTrue` for additional information.
       */


      function requiredTrueValidator(control) {
        return control.value === true ? null : {
          'required': true
        };
      }
      /**
       * Validator that requires the control's value pass an email validation test.
       * See `Validators.email` for additional information.
       */


      function emailValidator(control) {
        if (isEmptyInputValue(control.value)) {
          return null; // don't validate empty values to allow optional controls
        }

        return EMAIL_REGEXP.test(control.value) ? null : {
          'email': true
        };
      }
      /**
       * Validator that requires the length of the control's value to be greater than or equal
       * to the provided minimum length. See `Validators.minLength` for additional information.
       */


      function minLengthValidator(minLength) {
        return function (control) {
          if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
            // don't validate empty values to allow optional controls
            // don't validate values without `length` property
            return null;
          }

          return control.value.length < minLength ? {
            'minlength': {
              'requiredLength': minLength,
              'actualLength': control.value.length
            }
          } : null;
        };
      }
      /**
       * Validator that requires the length of the control's value to be less than or equal
       * to the provided maximum length. See `Validators.maxLength` for additional information.
       */


      function maxLengthValidator(maxLength) {
        return function (control) {
          return hasValidLength(control.value) && control.value.length > maxLength ? {
            'maxlength': {
              'requiredLength': maxLength,
              'actualLength': control.value.length
            }
          } : null;
        };
      }
      /**
       * Validator that requires the control's value to match a regex pattern.
       * See `Validators.pattern` for additional information.
       */


      function patternValidator(pattern) {
        if (!pattern) return _nullValidator;
        var regex;
        var regexStr;

        if (typeof pattern === 'string') {
          regexStr = '';
          if (pattern.charAt(0) !== '^') regexStr += '^';
          regexStr += pattern;
          if (pattern.charAt(pattern.length - 1) !== '$') regexStr += '$';
          regex = new RegExp(regexStr);
        } else {
          regexStr = pattern.toString();
          regex = pattern;
        }

        return function (control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          var value = control.value;
          return regex.test(value) ? null : {
            'pattern': {
              'requiredPattern': regexStr,
              'actualValue': value
            }
          };
        };
      }
      /**
       * Function that has `ValidatorFn` shape, but performs no operation.
       */


      function _nullValidator(control) {
        return null;
      }

      function isPresent(o) {
        return o != null;
      }

      function toObservable(r) {
        var obs = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(r) : r;

        if (!(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw new Error("Expected validator to return Promise or Observable.");
        }

        return obs;
      }

      function mergeErrors(arrayOfErrors) {
        var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        arrayOfErrors.forEach(function (errors) {
          res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
        });
        return Object.keys(res).length === 0 ? null : res;
      }

      function executeValidators(control, validators) {
        return validators.map(function (validator) {
          return validator(control);
        });
      }

      function isValidatorFn(validator) {
        return !validator.validate;
      }
      /**
       * Given the list of validators that may contain both functions as well as classes, return the list
       * of validator functions (convert validator classes into validator functions). This is needed to
       * have consistent structure in validators list before composing them.
       *
       * @param validators The set of validators that may contain validators both in plain function form
       *     as well as represented as a validator class.
       */


      function normalizeValidators(validators) {
        return validators.map(function (validator) {
          return isValidatorFn(validator) ? validator : function (c) {
            return validator.validate(c);
          };
        });
      }
      /**
       * Merges synchronous validators into a single validator function.
       * See `Validators.compose` for additional information.
       */


      function _compose(validators) {
        if (!validators) return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0) return null;
        return function (control) {
          return mergeErrors(executeValidators(control, presentValidators));
        };
      }
      /**
       * Accepts a list of validators of different possible shapes (`Validator` and `ValidatorFn`),
       * normalizes the list (converts everything to `ValidatorFn`) and merges them into a single
       * validator function.
       */


      function composeValidators(validators) {
        return validators != null ? _compose(normalizeValidators(validators)) : null;
      }
      /**
       * Merges asynchronous validators into a single validator function.
       * See `Validators.composeAsync` for additional information.
       */


      function _composeAsync(validators) {
        if (!validators) return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0) return null;
        return function (control) {
          var observables = executeValidators(control, presentValidators).map(toObservable);
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(observables).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(mergeErrors));
        };
      }
      /**
       * Accepts a list of async validators of different possible shapes (`AsyncValidator` and
       * `AsyncValidatorFn`), normalizes the list (converts everything to `AsyncValidatorFn`) and merges
       * them into a single validator function.
       */


      function composeAsyncValidators(validators) {
        return validators != null ? _composeAsync(normalizeValidators(validators)) : null;
      }
      /**
       * Merges raw control validators with a given directive validator and returns the combined list of
       * validators as an array.
       */


      function mergeValidators(controlValidators, dirValidator) {
        if (controlValidators === null) return [dirValidator];
        return Array.isArray(controlValidators) ? [].concat(_toConsumableArray(controlValidators), [dirValidator]) : [controlValidators, dirValidator];
      }
      /**
       * Retrieves the list of raw synchronous validators attached to a given control.
       */


      function getControlValidators(control) {
        return control._rawValidators;
      }
      /**
       * Retrieves the list of raw asynchronous validators attached to a given control.
       */


      function getControlAsyncValidators(control) {
        return control._rawAsyncValidators;
      }
      /**
       * Accepts a singleton validator, an array, or null, and returns an array type with the provided
       * validators.
       *
       * @param validators A validator, validators, or null.
       * @returns A validators array.
       */


      function makeValidatorsArray(validators) {
        if (!validators) return [];
        return Array.isArray(validators) ? validators : [validators];
      }
      /**
       * Determines whether a validator or validators array has a given validator.
       *
       * @param validators The validator or validators to compare against.
       * @param validator The validator to check.
       * @returns Whether the validator is present.
       */


      function _hasValidator(validators, validator) {
        return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
      }
      /**
       * Combines two arrays of validators into one. If duplicates are provided, only one will be added.
       *
       * @param validators The new validators.
       * @param currentValidators The base array of currrent validators.
       * @returns An array of validators.
       */


      function _addValidators(validators, currentValidators) {
        var current = makeValidatorsArray(currentValidators);
        var validatorsToAdd = makeValidatorsArray(validators);
        validatorsToAdd.forEach(function (v) {
          // Note: if there are duplicate entries in the new validators array,
          // only the first one would be added to the current list of validarors.
          // Duplicate ones would be ignored since `hasValidator` would detect
          // the presence of a validator function and we update the current list in place.
          if (!_hasValidator(current, v)) {
            current.push(v);
          }
        });
        return current;
      }

      function _removeValidators(validators, currentValidators) {
        return makeValidatorsArray(currentValidators).filter(function (v) {
          return !_hasValidator(validators, v);
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Base class for control directives.
       *
       * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
       *
       * @publicApi
       */


      var _AbstractControlDirective = /*#__PURE__*/function () {
        function _AbstractControlDirective() {
          _classCallCheck(this, _AbstractControlDirective);

          /**
           * Set of synchronous validators as they were provided while calling `setValidators` function.
           * @internal
           */
          this._rawValidators = [];
          /**
           * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
           * function.
           * @internal
           */

          this._rawAsyncValidators = [];
          /*
           * The set of callbacks to be invoked when directive instance is being destroyed.
           */

          this._onDestroyCallbacks = [];
        }
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */


        _createClass(_AbstractControlDirective, [{
          key: "value",
          get: function get() {
            return this.control ? this.control.value : null;
          }
          /**
           * @description
           * Reports whether the control is valid. A control is considered valid if no
           * validation errors exist with the current value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.control ? this.control.valid : null;
          }
          /**
           * @description
           * Reports whether the control is invalid, meaning that an error exists in the input value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.control ? this.control.invalid : null;
          }
          /**
           * @description
           * Reports whether a control is pending, meaning that that async validation is occurring and
           * errors are not yet available for the input value. If the control is not present, null is
           * returned.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.control ? this.control.pending : null;
          }
          /**
           * @description
           * Reports whether the control is disabled, meaning that the control is disabled
           * in the UI and is exempt from validation checks and excluded from aggregate
           * values of ancestor controls. If the control is not present, null is returned.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.control ? this.control.disabled : null;
          }
          /**
           * @description
           * Reports whether the control is enabled, meaning that the control is included in ancestor
           * calculations of validity or value. If the control is not present, null is returned.
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.control ? this.control.enabled : null;
          }
          /**
           * @description
           * Reports the control's validation errors. If the control is not present, null is returned.
           */

        }, {
          key: "errors",
          get: function get() {
            return this.control ? this.control.errors : null;
          }
          /**
           * @description
           * Reports whether the control is pristine, meaning that the user has not yet changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "pristine",
          get: function get() {
            return this.control ? this.control.pristine : null;
          }
          /**
           * @description
           * Reports whether the control is dirty, meaning that the user has changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "dirty",
          get: function get() {
            return this.control ? this.control.dirty : null;
          }
          /**
           * @description
           * Reports whether the control is touched, meaning that the user has triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "touched",
          get: function get() {
            return this.control ? this.control.touched : null;
          }
          /**
           * @description
           * Reports the validation status of the control. Possible values include:
           * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
           * If the control is not present, null is returned.
           */

        }, {
          key: "status",
          get: function get() {
            return this.control ? this.control.status : null;
          }
          /**
           * @description
           * Reports whether the control is untouched, meaning that the user has not yet triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "untouched",
          get: function get() {
            return this.control ? this.control.untouched : null;
          }
          /**
           * @description
           * Returns a multicasting observable that emits a validation status whenever it is
           * calculated for the control. If the control is not present, null is returned.
           */

        }, {
          key: "statusChanges",
          get: function get() {
            return this.control ? this.control.statusChanges : null;
          }
          /**
           * @description
           * Returns a multicasting observable of value changes for the control that emits every time the
           * value of the control changes in the UI or programmatically.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valueChanges",
          get: function get() {
            return this.control ? this.control.valueChanges : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
          /**
           * Sets synchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setValidators",
          value: function _setValidators(validators) {
            this._rawValidators = validators || [];
            this._composedValidatorFn = composeValidators(this._rawValidators);
          }
          /**
           * Sets asynchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setAsyncValidators",
          value: function _setAsyncValidators(validators) {
            this._rawAsyncValidators = validators || [];
            this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators registered with this
           * directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn || null;
          }
          /**
           * @description
           * Asynchronous validator function composed of all the asynchronous validators registered with
           * this directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn || null;
          }
          /**
           * Internal function to register callbacks that should be invoked
           * when directive instance is being destroyed.
           * @internal
           */

        }, {
          key: "_registerOnDestroy",
          value: function _registerOnDestroy(fn) {
            this._onDestroyCallbacks.push(fn);
          }
          /**
           * Internal function to invoke all registered "on destroy" callbacks.
           * Note: calling this function also clears the list of callbacks.
           * @internal
           */

        }, {
          key: "_invokeOnDestroyCallbacks",
          value: function _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach(function (fn) {
              return fn();
            });

            this._onDestroyCallbacks = [];
          }
          /**
           * @description
           * Resets the control with the provided value if the control is present.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            if (this.control) this.control.reset(value);
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
          }
        }]);

        return _AbstractControlDirective;
      }();

      _AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
        return new (t || _AbstractControlDirective)();
      };

      _AbstractControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _AbstractControlDirective
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for directives that contain multiple registered instances of `NgControl`.
       * Only used by the forms module.
       *
       * @publicApi
       */

      var _ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
        _inherits(_ControlContainer, _AbstractControlDirec);

        var _super4 = _createSuper(_ControlContainer);

        function _ControlContainer() {
          _classCallCheck(this, _ControlContainer);

          return _super4.apply(this, arguments);
        }

        _createClass(_ControlContainer, [{
          key: "formDirective",
          get:
          /**
           * @description
           * The top-level form directive for the control.
           */
          function get() {
            return null;
          }
          /**
           * @description
           * The path to this group.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }]);

        return _ControlContainer;
      }(_AbstractControlDirective);

      _ControlContainer.ɵfac = /*@__PURE__*/function () {
        var ɵControlContainer_BaseFactory;
        return function ControlContainer_Factory(t) {
          return (ɵControlContainer_BaseFactory || (ɵControlContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_ControlContainer)))(t || _ControlContainer);
        };
      }();

      _ControlContainer.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ControlContainer,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
       * object to a DOM element.
       *
       * @publicApi
       */

      var _NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
        _inherits(_NgControl, _AbstractControlDirec2);

        var _super5 = _createSuper(_NgControl);

        function _NgControl() {
          var _this2;

          _classCallCheck(this, _NgControl);

          _this2 = _super5.apply(this, arguments);
          /**
           * @description
           * The parent form for the control.
           *
           * @internal
           */

          _this2._parent = null;
          /**
           * @description
           * The name for the control
           */

          _this2.name = null;
          /**
           * @description
           * The value accessor for the control
           */

          _this2.valueAccessor = null;
          return _this2;
        }

        return _createClass(_NgControl);
      }(_AbstractControlDirective);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var AbstractControlStatus = /*#__PURE__*/function () {
        function AbstractControlStatus(cd) {
          _classCallCheck(this, AbstractControlStatus);

          this._cd = cd;
        }

        _createClass(AbstractControlStatus, [{
          key: "is",
          value: function is(status) {
            var _a, _b, _c; // Currently with ViewEngine (in AOT mode) it's not possible to use private methods in host
            // bindings.
            // TODO: once ViewEngine is removed, this function should be refactored:
            //  - make the `is` method `protected`, so it's not accessible publicly
            //  - move the `submitted` status logic to the `NgControlStatusGroup` class
            //    and make it `private` or `protected` too.


            if (status === 'submitted') {
              // We check for the `submitted` field from `NgForm` and `FormGroupDirective` classes, but
              // we avoid instanceof checks to prevent non-tree-shakable references to those types.
              return !!((_a = this._cd) === null || _a === void 0 ? void 0 : _a.submitted);
            }

            return !!((_c = (_b = this._cd) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c[status]);
          }
        }]);

        return AbstractControlStatus;
      }();

      var ngControlStatusHost = {
        '[class.ng-untouched]': 'is("untouched")',
        '[class.ng-touched]': 'is("touched")',
        '[class.ng-pristine]': 'is("pristine")',
        '[class.ng-dirty]': 'is("dirty")',
        '[class.ng-valid]': 'is("valid")',
        '[class.ng-invalid]': 'is("invalid")',
        '[class.ng-pending]': 'is("pending")'
      };
      var ngGroupStatusHost = {
        '[class.ng-untouched]': 'is("untouched")',
        '[class.ng-touched]': 'is("touched")',
        '[class.ng-pristine]': 'is("pristine")',
        '[class.ng-dirty]': 'is("dirty")',
        '[class.ng-valid]': 'is("valid")',
        '[class.ng-invalid]': 'is("invalid")',
        '[class.ng-pending]': 'is("pending")',
        '[class.ng-submitted]': 'is("submitted")'
      };
      /**
       * @description
       * Directive automatically applied to Angular form controls that sets CSS classes
       * based on control status.
       *
       * @usageNotes
       *
       * ### CSS classes applied
       *
       * The following classes are applied as the properties become true:
       *
       * * ng-valid
       * * ng-invalid
       * * ng-pending
       * * ng-pristine
       * * ng-dirty
       * * ng-untouched
       * * ng-touched
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
        _inherits(_NgControlStatus, _AbstractControlStatu);

        var _super6 = _createSuper(_NgControlStatus);

        function _NgControlStatus(cd) {
          _classCallCheck(this, _NgControlStatus);

          return _super6.call(this, cd);
        }

        return _createClass(_NgControlStatus);
      }(AbstractControlStatus);

      _NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
        return new (t || _NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NgControl, 2));
      };

      _NgControlStatus.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgControlStatus,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.is("untouched"))("ng-touched", ctx.is("touched"))("ng-pristine", ctx.is("pristine"))("ng-dirty", ctx.is("dirty"))("ng-valid", ctx.is("valid"))("ng-invalid", ctx.is("invalid"))("ng-pending", ctx.is("pending"));
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _NgControlStatus.ctorParameters = function () {
        return [{
          type: _NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgControlStatus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formControlName],[ngModel],[formControl]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: _NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }];
        }, null);
      })();
      /**
       * @description
       * Directive automatically applied to Angular form groups that sets CSS classes
       * based on control status (valid/invalid/dirty/etc). On groups, this includes the additional
       * class ng-submitted.
       *
       * @see `NgControlStatus`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
        _inherits(_NgControlStatusGroup, _AbstractControlStatu2);

        var _super7 = _createSuper(_NgControlStatusGroup);

        function _NgControlStatusGroup(cd) {
          _classCallCheck(this, _NgControlStatusGroup);

          return _super7.call(this, cd);
        }

        return _createClass(_NgControlStatusGroup);
      }(AbstractControlStatus);

      _NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
        return new (t || _NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ControlContainer, 10));
      };

      _NgControlStatusGroup.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgControlStatusGroup,
        selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
        hostVars: 16,
        hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.is("untouched"))("ng-touched", ctx.is("touched"))("ng-pristine", ctx.is("pristine"))("ng-dirty", ctx.is("dirty"))("ng-valid", ctx.is("valid"))("ng-invalid", ctx.is("invalid"))("ng-pending", ctx.is("pending"))("ng-submitted", ctx.is("submitted"));
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _NgControlStatusGroup.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgControlStatusGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngGroupStatusHost
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formControlNameExample = "\n  <div [formGroup]=\"myGroup\">\n    <input formControlName=\"firstName\">\n  </div>\n\n  In your class:\n\n  this.myGroup = new FormGroup({\n      firstName: new FormControl()\n  });";
      var formGroupNameExample = "\n  <div [formGroup]=\"myGroup\">\n      <div formGroupName=\"person\">\n        <input formControlName=\"firstName\">\n      </div>\n  </div>\n\n  In your class:\n\n  this.myGroup = new FormGroup({\n      person: new FormGroup({ firstName: new FormControl() })\n  });";
      var formArrayNameExample = "\n  <div [formGroup]=\"myGroup\">\n    <div formArrayName=\"cities\">\n      <div *ngFor=\"let city of cityArray.controls; index as i\">\n        <input [formControlName]=\"i\">\n      </div>\n    </div>\n  </div>\n\n  In your class:\n\n  this.cityArray = new FormArray([new FormControl('SF')]);\n  this.myGroup = new FormGroup({\n    cities: this.cityArray\n  });";
      var ngModelGroupExample = "\n  <form>\n      <div ngModelGroup=\"person\">\n        <input [(ngModel)]=\"person.name\" name=\"firstName\">\n      </div>\n  </form>";
      var ngModelWithFormGroupExample = "\n  <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n      <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n  </div>\n";
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      function controlParentException() {
        return new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n    Example:\n\n    ".concat(formControlNameExample));
      }

      function ngModelGroupException() {
        return new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n      that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n      Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n      ".concat(formGroupNameExample, "\n\n      Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n      ").concat(ngModelGroupExample));
      }

      function missingFormException() {
        return new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n      Example:\n\n      ".concat(formControlNameExample));
      }

      function groupParentException() {
        return new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n    directive and pass it an existing FormGroup instance (you can create one in your class).\n\n    Example:\n\n    ".concat(formGroupNameExample));
      }

      function arrayParentException() {
        return new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(formArrayNameExample));
      }

      var disabledAttrWarning = "\n  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n  you. We recommend using this approach to avoid 'changed after checked' errors.\n\n  Example:\n  form = new FormGroup({\n    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n    last: new FormControl('Drew', Validators.required)\n  });\n";

      function ngModelWarning(directiveName) {
        return "\n  It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n  Support for using the ngModel input property and ngModelChange event with\n  reactive form directives has been deprecated in Angular v6 and will be removed\n  in a future version of Angular.\n\n  For more information on this, see our API docs here:\n  https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n  ");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function controlPath(name, parent) {
        return [].concat(_toConsumableArray(parent.path), [name]);
      }
      /**
       * Links a Form control and a Form directive by setting up callbacks (such as `onChange`) on both
       * instances. This function is typically invoked when form directive is being initialized.
       *
       * @param control Form control instance that should be linked.
       * @param dir Directive that should be linked with a given control.
       */


      function setUpControl(control, dir) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!control) _throwError(dir, 'Cannot find control with');
          if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
        }

        setUpValidators(control, dir);
        dir.valueAccessor.writeValue(control.value);
        setUpViewChangePipeline(control, dir);
        setUpModelChangePipeline(control, dir);
        setUpBlurPipeline(control, dir);
        setUpDisabledChangeHandler(control, dir);
      }
      /**
       * Reverts configuration performed by the `setUpControl` control function.
       * Effectively disconnects form control with a given form directive.
       * This function is typically invoked when corresponding form directive is being destroyed.
       *
       * @param control Form control which should be cleaned up.
       * @param dir Directive that should be disconnected from a given control.
       * @param validateControlPresenceOnChange Flag that indicates whether onChange handler should
       *     contain asserts to verify that it's not called once directive is destroyed. We need this flag
       *     to avoid potentially breaking changes caused by better control cleanup introduced in #39235.
       */


      function cleanUpControl(control, dir) {
        var validateControlPresenceOnChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var noop = function noop() {
          if (validateControlPresenceOnChange && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            _noControlError(dir);
          }
        }; // The `valueAccessor` field is typically defined on FromControl and FormControlName directive
        // instances and there is a logic in `selectValueAccessor` function that throws if it's not the
        // case. We still check the presence of `valueAccessor` before invoking its methods to make sure
        // that cleanup works correctly if app code or tests are setup to ignore the error thrown from
        // `selectValueAccessor`. See https://github.com/angular/angular/issues/40521.


        if (dir.valueAccessor) {
          dir.valueAccessor.registerOnChange(noop);
          dir.valueAccessor.registerOnTouched(noop);
        }

        cleanUpValidators(control, dir);

        if (control) {
          dir._invokeOnDestroyCallbacks();

          control._registerOnCollectionChange(function () {});
        }
      }

      function registerOnValidatorChange(validators, onChange) {
        validators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
        });
      }
      /**
       * Sets up disabled change handler function on a given form control if ControlValueAccessor
       * associated with a given directive instance supports the `setDisabledState` call.
       *
       * @param control Form control where disabled change handler should be setup.
       * @param dir Corresponding directive instance associated with this control.
       */


      function setUpDisabledChangeHandler(control, dir) {
        if (dir.valueAccessor.setDisabledState) {
          var onDisabledChange = function onDisabledChange(isDisabled) {
            dir.valueAccessor.setDisabledState(isDisabled);
          };

          control.registerOnDisabledChange(onDisabledChange); // Register a callback function to cleanup disabled change handler
          // from a control instance when a directive is destroyed.

          dir._registerOnDestroy(function () {
            control._unregisterOnDisabledChange(onDisabledChange);
          });
        }
      }
      /**
       * Sets up sync and async directive validators on provided form control.
       * This function merges validators from the directive into the validators of the control.
       *
       * @param control Form control where directive validators should be setup.
       * @param dir Directive instance that contains validators to be setup.
       */


      function setUpValidators(control, dir) {
        var validators = getControlValidators(control);

        if (dir.validator !== null) {
          control.setValidators(mergeValidators(validators, dir.validator));
        } else if (typeof validators === 'function') {
          // If sync validators are represented by a single validator function, we force the
          // `Validators.compose` call to happen by executing the `setValidators` function with
          // an array that contains that function. We need this to avoid possible discrepancies in
          // validators behavior, so sync validators are always processed by the `Validators.compose`.
          // Note: we should consider moving this logic inside the `setValidators` function itself, so we
          // have consistent behavior on AbstractControl API level. The same applies to the async
          // validators logic below.
          control.setValidators([validators]);
        }

        var asyncValidators = getControlAsyncValidators(control);

        if (dir.asyncValidator !== null) {
          control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
        } else if (typeof asyncValidators === 'function') {
          control.setAsyncValidators([asyncValidators]);
        } // Re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


        var onValidatorChange = function onValidatorChange() {
          return control.updateValueAndValidity();
        };

        registerOnValidatorChange(dir._rawValidators, onValidatorChange);
        registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
      }
      /**
       * Cleans up sync and async directive validators on provided form control.
       * This function reverts the setup performed by the `setUpValidators` function, i.e.
       * removes directive-specific validators from a given control instance.
       *
       * @param control Form control from where directive validators should be removed.
       * @param dir Directive instance that contains validators to be removed.
       * @returns true if a control was updated as a result of this action.
       */


      function cleanUpValidators(control, dir) {
        var isControlUpdated = false;

        if (control !== null) {
          if (dir.validator !== null) {
            var validators = getControlValidators(control);

            if (Array.isArray(validators) && validators.length > 0) {
              // Filter out directive validator function.
              var updatedValidators = validators.filter(function (validator) {
                return validator !== dir.validator;
              });

              if (updatedValidators.length !== validators.length) {
                isControlUpdated = true;
                control.setValidators(updatedValidators);
              }
            }
          }

          if (dir.asyncValidator !== null) {
            var asyncValidators = getControlAsyncValidators(control);

            if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
              // Filter out directive async validator function.
              var updatedAsyncValidators = asyncValidators.filter(function (asyncValidator) {
                return asyncValidator !== dir.asyncValidator;
              });

              if (updatedAsyncValidators.length !== asyncValidators.length) {
                isControlUpdated = true;
                control.setAsyncValidators(updatedAsyncValidators);
              }
            }
          }
        } // Clear onValidatorChange callbacks by providing a noop function.


        var noop = function noop() {};

        registerOnValidatorChange(dir._rawValidators, noop);
        registerOnValidatorChange(dir._rawAsyncValidators, noop);
        return isControlUpdated;
      }

      function setUpViewChangePipeline(control, dir) {
        dir.valueAccessor.registerOnChange(function (newValue) {
          control._pendingValue = newValue;
          control._pendingChange = true;
          control._pendingDirty = true;
          if (control.updateOn === 'change') updateControl(control, dir);
        });
      }

      function setUpBlurPipeline(control, dir) {
        dir.valueAccessor.registerOnTouched(function () {
          control._pendingTouched = true;
          if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
          if (control.updateOn !== 'submit') control.markAsTouched();
        });
      }

      function updateControl(control, dir) {
        if (control._pendingDirty) control.markAsDirty();
        control.setValue(control._pendingValue, {
          emitModelToViewChange: false
        });
        dir.viewToModelUpdate(control._pendingValue);
        control._pendingChange = false;
      }

      function setUpModelChangePipeline(control, dir) {
        var onChange = function onChange(newValue, emitModelEvent) {
          // control -> view
          dir.valueAccessor.writeValue(newValue); // control -> ngModel

          if (emitModelEvent) dir.viewToModelUpdate(newValue);
        };

        control.registerOnChange(onChange); // Register a callback function to cleanup onChange handler
        // from a control instance when a directive is destroyed.

        dir._registerOnDestroy(function () {
          control._unregisterOnChange(onChange);
        });
      }
      /**
       * Links a FormGroup or FormArray instance and corresponding Form directive by setting up validators
       * present in the view.
       *
       * @param control FormGroup or FormArray instance that should be linked.
       * @param dir Directive that provides view validators.
       */


      function setUpFormContainer(control, dir) {
        if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
        setUpValidators(control, dir);
      }
      /**
       * Reverts the setup performed by the `setUpFormContainer` function.
       *
       * @param control FormGroup or FormArray instance that should be cleaned up.
       * @param dir Directive that provided view validators.
       * @returns true if a control was updated as a result of this action.
       */


      function cleanUpFormContainer(control, dir) {
        return cleanUpValidators(control, dir);
      }

      function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
      }

      function _throwError(dir, message) {
        var messageEnd;

        if (dir.path.length > 1) {
          messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
        } else if (dir.path[0]) {
          messageEnd = "name: '".concat(dir.path, "'");
        } else {
          messageEnd = 'unspecified name attribute';
        }

        throw new Error("".concat(message, " ").concat(messageEnd));
      }

      function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) return false;
        var change = changes['model'];
        if (change.isFirstChange()) return true;
        return !Object.is(viewModel, change.currentValue);
      }

      function isBuiltInAccessor(valueAccessor) {
        // Check if a given value accessor is an instance of a class that directly extends
        // `BuiltInControlValueAccessor` one.
        return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
      }

      function syncPendingControls(form, directives) {
        form._syncPendingControls();

        directives.forEach(function (dir) {
          var control = dir.control;

          if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
          }
        });
      } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


      function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors) return null;
        if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
        var defaultAccessor = undefined;
        var builtinAccessor = undefined;
        var customAccessor = undefined;
        valueAccessors.forEach(function (v) {
          if (v.constructor === _DefaultValueAccessor) {
            defaultAccessor = v;
          } else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
          } else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
          }
        });
        if (customAccessor) return customAccessor;
        if (builtinAccessor) return builtinAccessor;
        if (defaultAccessor) return defaultAccessor;

        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          _throwError(dir, 'No valid value accessor for form control with');
        }

        return null;
      }

      function removeListItem(list, el) {
        var index = list.indexOf(el);
        if (index > -1) list.splice(index, 1);
      } // TODO(kara): remove after deprecation period


      function _ngModelWarning(name, type, instance, warningConfig) {
        if (warningConfig === 'never') return;

        if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
          console.warn(ngModelWarning(name));
          type._ngModelWarningSentOnce = true;
          instance._ngModelWarningSent = true;
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reports that a FormControl is valid, meaning that no errors exist in the input value.
       *
       * @see `status`
       */


      var VALID = 'VALID';
      /**
       * Reports that a FormControl is invalid, meaning that an error exists in the input value.
       *
       * @see `status`
       */

      var INVALID = 'INVALID';
      /**
       * Reports that a FormControl is pending, meaning that that async validation is occurring and
       * errors are not yet available for the input value.
       *
       * @see `markAsPending`
       * @see `status`
       */

      var PENDING = 'PENDING';
      /**
       * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
       * calculations of validity or value.
       *
       * @see `markAsDisabled`
       * @see `status`
       */

      var DISABLED = 'DISABLED';

      function _find(control, path, delimiter) {
        if (path == null) return null;

        if (!Array.isArray(path)) {
          path = path.split(delimiter);
        }

        if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        var controlToFind = control;
        path.forEach(function (name) {
          if (controlToFind instanceof _FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
          } else if (controlToFind instanceof _FormArray) {
            controlToFind = controlToFind.at(name) || null;
          } else {
            controlToFind = null;
          }
        });
        return controlToFind;
      }
      /**
       * Gets validators from either an options object or given validators.
       */


      function pickValidators(validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
      }
      /**
       * Creates validator function by combining provided validators.
       */


      function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
      }
      /**
       * Gets async validators from either an options object or given validators.
       */


      function pickAsyncValidators(asyncValidator, validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
      }
      /**
       * Creates async validator function by combining provided async validators.
       */


      function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
      }

      function isOptionsObj(validatorOrOpts) {
        return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
      }
      /**
       * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
       *
       * It provides some of the shared behavior that all controls and groups of controls have, like
       * running validators, calculating status, and resetting state. It also defines the properties
       * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
       * instantiated directly.
       *
       * @see [Forms Guide](/guide/forms)
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       * @see [Dynamic Forms Guide](/guide/dynamic-form)
       *
       * @publicApi
       */


      var _AbstractControl = /*#__PURE__*/function () {
        /**
         * Initialize the AbstractControl instance.
         *
         * @param validators The function or array of functions that is used to determine the validity of
         *     this control synchronously.
         * @param asyncValidators The function or array of functions that is used to determine validity of
         *     this control asynchronously.
         */
        function _AbstractControl(validators, asyncValidators) {
          _classCallCheck(this, _AbstractControl);

          /**
           * Indicates that a control has its own pending asynchronous validation in progress.
           *
           * @internal
           */
          this._hasOwnPendingAsyncValidator = false;
          /** @internal */

          this._onCollectionChange = function () {};

          this._parent = null;
          /**
           * A control is `pristine` if the user has not yet changed
           * the value in the UI.
           *
           * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

          this.pristine = true;
          /**
           * True if the control is marked as `touched`.
           *
           * A control is marked `touched` once the user has triggered
           * a `blur` event on it.
           */

          this.touched = false;
          /** @internal */

          this._onDisabledChange = [];
          this._rawValidators = validators;
          this._rawAsyncValidators = asyncValidators;
          this._composedValidatorFn = coerceToValidator(this._rawValidators);
          this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
        }
        /**
         * Returns the function that is used to determine the validity of this control synchronously.
         * If multiple validators have been added, this will be a single composed function.
         * See `Validators.compose()` for additional information.
         */


        _createClass(_AbstractControl, [{
          key: "validator",
          get: function get() {
            return this._composedValidatorFn;
          },
          set: function set(validatorFn) {
            this._rawValidators = this._composedValidatorFn = validatorFn;
          }
          /**
           * Returns the function that is used to determine the validity of this control asynchronously.
           * If multiple validators have been added, this will be a single composed function.
           * See `Validators.compose()` for additional information.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn;
          },
          set: function set(asyncValidatorFn) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
          }
          /**
           * The parent control.
           */

        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
          /**
           * A control is `valid` when its `status` is `VALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control has passed all of its validation tests,
           * false otherwise.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.status === VALID;
          }
          /**
           * A control is `invalid` when its `status` is `INVALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control has failed one or more of its validation checks,
           * false otherwise.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.status === INVALID;
          }
          /**
           * A control is `pending` when its `status` is `PENDING`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control is in the process of conducting a validation check,
           * false otherwise.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.status == PENDING;
          }
          /**
           * A control is `disabled` when its `status` is `DISABLED`.
           *
           * Disabled controls are exempt from validation checks and
           * are not included in the aggregate value of their ancestor
           * controls.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control is disabled, false otherwise.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.status === DISABLED;
          }
          /**
           * A control is `enabled` as long as its `status` is not `DISABLED`.
           *
           * @returns True if the control has any status other than 'DISABLED',
           * false if the status is 'DISABLED'.
           *
           * @see {@link AbstractControl.status}
           *
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.status !== DISABLED;
          }
          /**
           * A control is `dirty` if the user has changed the value
           * in the UI.
           *
           * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

        }, {
          key: "dirty",
          get: function get() {
            return !this.pristine;
          }
          /**
           * True if the control has not been marked as touched
           *
           * A control is `untouched` if the user has not yet triggered
           * a `blur` event on it.
           */

        }, {
          key: "untouched",
          get: function get() {
            return !this.touched;
          }
          /**
           * Reports the update strategy of the `AbstractControl` (meaning
           * the event on which the control updates itself).
           * Possible values: `'change'` | `'blur'` | `'submit'`
           * Default value: `'change'`
           */

        }, {
          key: "updateOn",
          get: function get() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
          }
          /**
           * Sets the synchronous validators that are active on this control.  Calling
           * this overwrites any existing synchronous validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           * If you want to add a new validator without affecting existing ones, consider
           * using `addValidators()` method instead.
           */

        }, {
          key: "setValidators",
          value: function setValidators(validators) {
            this._rawValidators = validators;
            this._composedValidatorFn = coerceToValidator(validators);
          }
          /**
           * Sets the asynchronous validators that are active on this control. Calling this
           * overwrites any existing asynchronous validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           * If you want to add a new validator without affecting existing ones, consider
           * using `addAsyncValidators()` method instead.
           */

        }, {
          key: "setAsyncValidators",
          value: function setAsyncValidators(validators) {
            this._rawAsyncValidators = validators;
            this._composedAsyncValidatorFn = coerceToAsyncValidator(validators);
          }
          /**
           * Add a synchronous validator or validators to this control, without affecting other validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           * Adding a validator that already exists will have no effect. If duplicate validator functions
           * are present in the `validators` array, only the first instance would be added to a form
           * control.
           *
           * @param validators The new validator function or functions to add to this control.
           */

        }, {
          key: "addValidators",
          value: function addValidators(validators) {
            this.setValidators(_addValidators(validators, this._rawValidators));
          }
          /**
           * Add an asynchronous validator or validators to this control, without affecting other
           * validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           * Adding a validator that already exists will have no effect.
           *
           * @param validators The new asynchronous validator function or functions to add to this control.
           */

        }, {
          key: "addAsyncValidators",
          value: function addAsyncValidators(validators) {
            this.setAsyncValidators(_addValidators(validators, this._rawAsyncValidators));
          }
          /**
           * Remove a synchronous validator from this control, without affecting other validators.
           * Validators are compared by function reference; you must pass a reference to the exact same
           * validator function as the one that was originally set. If a provided validator is not found,
           * it is ignored.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           * @param validators The validator or validators to remove.
           */

        }, {
          key: "removeValidators",
          value: function removeValidators(validators) {
            this.setValidators(_removeValidators(validators, this._rawValidators));
          }
          /**
           * Remove an asynchronous validator from this control, without affecting other validators.
           * Validators are compared by function reference; you must pass a reference to the exact same
           * validator function as the one that was originally set. If a provided validator is not found, it
           * is ignored.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           * @param validators The asynchronous validator or validators to remove.
           */

        }, {
          key: "removeAsyncValidators",
          value: function removeAsyncValidators(validators) {
            this.setAsyncValidators(_removeValidators(validators, this._rawAsyncValidators));
          }
          /**
           * Check whether a synchronous validator function is present on this control. The provided
           * validator must be a reference to the exact same function that was provided.
           *
           * @param validator The validator to check for presence. Compared by function reference.
           * @returns Whether the provided validator was found on this control.
           */

        }, {
          key: "hasValidator",
          value: function hasValidator(validator) {
            return _hasValidator(this._rawValidators, validator);
          }
          /**
           * Check whether an asynchronous validator function is present on this control. The provided
           * validator must be a reference to the exact same function that was provided.
           *
           * @param validator The asynchronous validator to check for presence. Compared by function
           *     reference.
           * @returns Whether the provided asynchronous validator was found on this control.
           */

        }, {
          key: "hasAsyncValidator",
          value: function hasAsyncValidator(validator) {
            return _hasValidator(this._rawAsyncValidators, validator);
          }
          /**
           * Empties out the synchronous validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearValidators",
          value: function clearValidators() {
            this.validator = null;
          }
          /**
           * Empties out the async validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearAsyncValidators",
          value: function clearAsyncValidators() {
            this.asyncValidator = null;
          }
          /**
           * Marks the control as `touched`. A control is touched by focus and
           * blur events that do not change the value.
           *
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsTouched",
          value: function markAsTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = true;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsTouched(opts);
            }
          }
          /**
           * Marks the control and all its descendant controls as `touched`.
           * @see `markAsTouched()`
           */

        }, {
          key: "markAllAsTouched",
          value: function markAllAsTouched() {
            this.markAsTouched({
              onlySelf: true
            });

            this._forEachChild(function (control) {
              return control.markAllAsTouched();
            });
          }
          /**
           * Marks the control as `untouched`.
           *
           * If the control has any children, also marks all children as `untouched`
           * and recalculates the `touched` status of all parent controls.
           *
           * @see `markAsTouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after the marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsUntouched",
          value: function markAsUntouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = false;
            this._pendingTouched = false;

            this._forEachChild(function (control) {
              control.markAsUntouched({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /**
           * Marks the control as `dirty`. A control becomes dirty when
           * the control's value is changed through the UI; compare `markAsTouched`.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = false;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsDirty(opts);
            }
          }
          /**
           * Marks the control as `pristine`.
           *
           * If the control has any children, marks all children as `pristine`,
           * and recalculates the `pristine` status of all parent
           * controls.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           *
           * @param opts Configuration options that determine how the control emits events after
           * marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsPristine",
          value: function markAsPristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = true;
            this._pendingDirty = false;

            this._forEachChild(function (control) {
              control.markAsPristine({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /**
           * Marks the control as `pending`.
           *
           * A control is pending while the control performs async validation.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates changes and
           * emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
           * observable emits an event with the latest status the control is marked pending.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "markAsPending",
          value: function markAsPending() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.status = PENDING;

            if (opts.emitEvent !== false) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsPending(opts);
            }
          }
          /**
           * Disables the control. This means the control is exempt from validation checks and
           * excluded from the aggregate value of any parent. Its status is `DISABLED`.
           *
           * If the control has children, all children are also disabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates
           * changes and emits events after the control is disabled.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is disabled.
           * When false, no events are emitted.
           */

        }, {
          key: "disable",
          value: function disable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = DISABLED;
            this.errors = null;

            this._forEachChild(function (control) {
              control.disable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this._updateValue();

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(true);
            });
          }
          /**
           * Enables the control. This means the control is included in validation checks and
           * the aggregate value of its parent. Its status recalculates based on its value and
           * its validators.
           *
           * By default, if the control has children, all children are enabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configure options that control how the control propagates changes and
           * emits events when marked as untouched
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is enabled.
           * When false, no events are emitted.
           */

        }, {
          key: "enable",
          value: function enable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = VALID;

            this._forEachChild(function (control) {
              control.enable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(false);
            });
          }
        }, {
          key: "_updateAncestors",
          value: function _updateAncestors(opts) {
            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);

              if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
              }

              this._parent._updateTouched();
            }
          }
          /**
           * @param parent Sets the parent of the control
           */

        }, {
          key: "setParent",
          value: function setParent(parent) {
            this._parent = parent;
          }
          /**
           * Recalculates the value and validation status of the control.
           *
           * By default, it also updates the value and validity of its ancestors.
           *
           * @param opts Configuration options determine how the control propagates changes and emits events
           * after updates and validity checks are applied.
           * * `onlySelf`: When true, only update this control. When false or not supplied,
           * update all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "updateValueAndValidity",
          value: function updateValueAndValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._setInitialStatus();

            this._updateValue();

            if (this.enabled) {
              this._cancelExistingSubscription();

              this.errors = this._runValidator();
              this.status = this._calculateStatus();

              if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
              }
            }

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTreeValidity",
          value: function _updateTreeValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              emitEvent: true
            };

            this._forEachChild(function (ctrl) {
              return ctrl._updateTreeValidity(opts);
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });
          }
        }, {
          key: "_setInitialStatus",
          value: function _setInitialStatus() {
            this.status = this._allControlsDisabled() ? DISABLED : VALID;
          }
        }, {
          key: "_runValidator",
          value: function _runValidator() {
            return this.validator ? this.validator(this) : null;
          }
        }, {
          key: "_runAsyncValidator",
          value: function _runAsyncValidator(emitEvent) {
            var _this3 = this;

            if (this.asyncValidator) {
              this.status = PENDING;
              this._hasOwnPendingAsyncValidator = true;
              var obs = toObservable(this.asyncValidator(this));
              this._asyncValidationSubscription = obs.subscribe(function (errors) {
                _this3._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

                _this3.setErrors(errors, {
                  emitEvent: emitEvent
                });
              });
            }
          }
        }, {
          key: "_cancelExistingSubscription",
          value: function _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
              this._asyncValidationSubscription.unsubscribe();

              this._hasOwnPendingAsyncValidator = false;
            }
          }
          /**
           * Sets errors on a form control when running validations manually, rather than automatically.
           *
           * Calling `setErrors` also updates the validity of the parent control.
           *
           * @usageNotes
           *
           * ### Manually set the errors for a control
           *
           * ```
           * const login = new FormControl('someLogin');
           * login.setErrors({
           *   notUnique: true
           * });
           *
           * expect(login.valid).toEqual(false);
           * expect(login.errors).toEqual({ notUnique: true });
           *
           * login.setValue('someOtherLogin');
           *
           * expect(login.valid).toEqual(true);
           * ```
           */

        }, {
          key: "setErrors",
          value: function setErrors(errors) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.errors = errors;

            this._updateControlsErrors(opts.emitEvent !== false);
          }
          /**
           * Retrieves a child control given the control's name or path.
           *
           * @param path A dot-delimited string or array of string/number values that define the path to the
           * control.
           *
           * @usageNotes
           * ### Retrieve a nested control
           *
           * For example, to get a `name` control nested within a `person` sub-group:
           *
           * * `this.form.get('person.name');`
           *
           * -OR-
           *
           * * `this.form.get(['person', 'name']);`
           *
           * ### Retrieve a control in a FormArray
           *
           * When accessing an element inside a FormArray, you can use an element index.
           * For example, to get a `price` control from the first element in an `items` array you can use:
           *
           * * `this.form.get('items.0.price');`
           *
           * -OR-
           *
           * * `this.form.get(['items', 0, 'price']);`
           */

        }, {
          key: "get",
          value: function get(path) {
            return _find(this, path, '.');
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            var control = path ? this.get(path) : this;
            return control && control.errors ? control.errors[errorCode] : null;
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return !!this.getError(errorCode, path);
          }
          /**
           * Retrieves the top-level ancestor of this control.
           */

        }, {
          key: "root",
          get: function get() {
            var x = this;

            while (x._parent) {
              x = x._parent;
            }

            return x;
          }
          /** @internal */

        }, {
          key: "_updateControlsErrors",
          value: function _updateControlsErrors(emitEvent) {
            this.status = this._calculateStatus();

            if (emitEvent) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent) {
              this._parent._updateControlsErrors(emitEvent);
            }
          }
          /** @internal */

        }, {
          key: "_initObservables",
          value: function _initObservables() {
            this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
            this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          }
        }, {
          key: "_calculateStatus",
          value: function _calculateStatus() {
            if (this._allControlsDisabled()) return DISABLED;
            if (this.errors) return INVALID;
            if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
          }
          /** @internal */

        }, {
          key: "_anyControlsHaveStatus",
          value: function _anyControlsHaveStatus(status) {
            return this._anyControls(function (control) {
              return control.status === status;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsDirty",
          value: function _anyControlsDirty() {
            return this._anyControls(function (control) {
              return control.dirty;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsTouched",
          value: function _anyControlsTouched() {
            return this._anyControls(function (control) {
              return control.touched;
            });
          }
          /** @internal */

        }, {
          key: "_updatePristine",
          value: function _updatePristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = !this._anyControlsDirty();

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTouched",
          value: function _updateTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = this._anyControlsTouched();

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /** @internal */

        }, {
          key: "_isBoxedValue",
          value: function _isBoxedValue(formState) {
            return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
          }
          /** @internal */

        }, {
          key: "_registerOnCollectionChange",
          value: function _registerOnCollectionChange(fn) {
            this._onCollectionChange = fn;
          }
          /** @internal */

        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy(opts) {
            if (isOptionsObj(opts) && opts.updateOn != null) {
              this._updateOn = opts.updateOn;
            }
          }
          /**
           * Check to see if parent has been marked artificially dirty.
           *
           * @internal
           */

        }, {
          key: "_parentMarkedDirty",
          value: function _parentMarkedDirty(onlySelf) {
            var parentDirty = this._parent && this._parent.dirty;
            return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
          }
        }]);

        return _AbstractControl;
      }();
      /**
       * Tracks the value and validation status of an individual form control.
       *
       * This is one of the three fundamental building blocks of Angular forms, along with
       * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
       * implements most of the base functionality for accessing the value, validation status,
       * user interactions and events. See [usage examples below](#usage-notes).
       *
       * @see `AbstractControl`
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see [Usage Notes](#usage-notes)
       *
       * @usageNotes
       *
       * ### Initializing Form Controls
       *
       * Instantiate a `FormControl`, with an initial value.
       *
       * ```ts
       * const control = new FormControl('some value');
       * console.log(control.value);     // 'some value'
       *```
       *
       * The following example initializes the control with a form state object. The `value`
       * and `disabled` keys are required in this case.
       *
       * ```ts
       * const control = new FormControl({ value: 'n/a', disabled: true });
       * console.log(control.value);     // 'n/a'
       * console.log(control.status);    // 'DISABLED'
       * ```
       *
       * The following example initializes the control with a synchronous validator.
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       * console.log(control.value);      // ''
       * console.log(control.status);     // 'INVALID'
       * ```
       *
       * The following example initializes the control using an options object.
       *
       * ```ts
       * const control = new FormControl('', {
       *    validators: Validators.required,
       *    asyncValidators: myAsyncValidator
       * });
       * ```
       *
       * ### Configure the control to update on a blur event
       *
       * Set the `updateOn` option to `'blur'` to update on the blur `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'blur' });
       * ```
       *
       * ### Configure the control to update on a submit event
       *
       * Set the `updateOn` option to `'submit'` to update on a submit `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'submit' });
       * ```
       *
       * ### Reset the control back to an initial value
       *
       * You reset to a specific form state by passing through a standalone
       * value or a form state object that contains both a value and a disabled state
       * (these are the only two properties that cannot be calculated).
       *
       * ```ts
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       *
       * control.reset('Drew');
       *
       * console.log(control.value); // 'Drew'
       * ```
       *
       * ### Reset the control back to an initial value and disabled
       *
       * ```
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       * console.log(control.status); // 'VALID'
       *
       * control.reset({ value: 'Drew', disabled: true });
       *
       * console.log(control.value); // 'Drew'
       * console.log(control.status); // 'DISABLED'
       * ```
       *
       * @publicApi
       */


      var _FormControl = /*#__PURE__*/function (_AbstractControl2) {
        _inherits(_FormControl, _AbstractControl2);

        var _super8 = _createSuper(_FormControl);

        /**
         * Creates a new `FormControl` instance.
         *
         * @param formState Initializes the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function _FormControl() {
          var _this4;

          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
          var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, _FormControl);

          _this4 = _super8.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          /** @internal */

          _this4._onChange = [];

          _this4._applyFormState(formState);

          _this4._setUpdateStrategy(validatorOrOpts);

          _this4._initObservables();

          _this4.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!_this4.asyncValidator
          });

          return _this4;
        }
        /**
         * Sets a new value for the form control.
         *
         * @param value The new value for the control.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
         * `onChange` event to
         * update the view.
         * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
         * `ngModelChange`
         * event to update the model.
         *
         */


        _createClass(_FormControl, [{
          key: "setValue",
          value: function setValue(value) {
            var _this5 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.value = this._pendingValue = value;

            if (this._onChange.length && options.emitModelToViewChange !== false) {
              this._onChange.forEach(function (changeFn) {
                return changeFn(_this5.value, options.emitViewToModelChange !== false);
              });
            }

            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of a control.
           *
           * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
           * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
           * `FormArrays`, where it does behave differently.
           *
           * @see `setValue` for options
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.setValue(value, options);
          }
          /**
           * Resets the form control, marking it `pristine` and `untouched`, and setting
           * the value to null.
           *
           * @param formState Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "reset",
          value: function reset() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._applyFormState(formState);

            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this.value, options);
            this._pendingChange = false;
          }
          /**
           * @internal
           */

        }, {
          key: "_updateValue",
          value: function _updateValue() {}
          /**
           * @internal
           */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return false;
          }
          /**
           * @internal
           */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            return this.disabled;
          }
          /**
           * Register a listener for change events.
           *
           * @param fn The method that is called when the value changes
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange.push(fn);
          }
          /**
           * Internal function to unregister a change events listener.
           * @internal
           */

        }, {
          key: "_unregisterOnChange",
          value: function _unregisterOnChange(fn) {
            removeListItem(this._onChange, fn);
          }
          /**
           * Register a listener for disabled events.
           *
           * @param fn The method that is called when the disabled status changes.
           */

        }, {
          key: "registerOnDisabledChange",
          value: function registerOnDisabledChange(fn) {
            this._onDisabledChange.push(fn);
          }
          /**
           * Internal function to unregister a disabled event listener.
           * @internal
           */

        }, {
          key: "_unregisterOnDisabledChange",
          value: function _unregisterOnDisabledChange(fn) {
            removeListItem(this._onDisabledChange, fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {}
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            if (this.updateOn === 'submit') {
              if (this._pendingDirty) this.markAsDirty();
              if (this._pendingTouched) this.markAsTouched();

              if (this._pendingChange) {
                this.setValue(this._pendingValue, {
                  onlySelf: true,
                  emitModelToViewChange: false
                });
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_applyFormState",
          value: function _applyFormState(formState) {
            if (this._isBoxedValue(formState)) {
              this.value = this._pendingValue = formState.value;
              formState.disabled ? this.disable({
                onlySelf: true,
                emitEvent: false
              }) : this.enable({
                onlySelf: true,
                emitEvent: false
              });
            } else {
              this.value = this._pendingValue = formState;
            }
          }
        }]);

        return _FormControl;
      }(_AbstractControl);
      /**
       * Tracks the value and validity state of a group of `FormControl` instances.
       *
       * A `FormGroup` aggregates the values of each child `FormControl` into one object,
       * with each control name as the key.  It calculates its status by reducing the status values
       * of its children. For example, if one of the controls in a group is invalid, the entire
       * group becomes invalid.
       *
       * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormArray`.
       *
       * When instantiating a `FormGroup`, pass in a collection of child controls as the first
       * argument. The key for each child registers the name for the control.
       *
       * @usageNotes
       *
       * ### Create a form group with 2 controls
       *
       * ```
       * const form = new FormGroup({
       *   first: new FormControl('Nancy', Validators.minLength(2)),
       *   last: new FormControl('Drew'),
       * });
       *
       * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
       * console.log(form.status);  // 'VALID'
       * ```
       *
       * ### Create a form group with a group-level validator
       *
       * You include group-level validators as the second arg, or group-level async
       * validators as the third arg. These come in handy when you want to perform validation
       * that considers the value of more than one child control.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('', Validators.minLength(2)),
       *   passwordConfirm: new FormControl('', Validators.minLength(2)),
       * }, passwordMatchValidator);
       *
       *
       * function passwordMatchValidator(g: FormGroup) {
       *    return g.get('password').value === g.get('passwordConfirm').value
       *       ? null : {'mismatch': true};
       * }
       * ```
       *
       * Like `FormControl` instances, you choose to pass in
       * validators and async validators as part of an options object.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('')
       *   passwordConfirm: new FormControl('')
       * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
       * ```
       *
       * ### Set the updateOn property for all controls in a form group
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * group level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const c = new FormGroup({
       *   one: new FormControl()
       * }, { updateOn: 'blur' });
       * ```
       *
       * @publicApi
       */


      var _FormGroup = /*#__PURE__*/function (_AbstractControl3) {
        _inherits(_FormGroup, _AbstractControl3);

        var _super9 = _createSuper(_FormGroup);

        /**
         * Creates a new `FormGroup` instance.
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function _FormGroup(controls, validatorOrOpts, asyncValidator) {
          var _this6;

          _classCallCheck(this, _FormGroup);

          _this6 = _super9.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this6.controls = controls;

          _this6._initObservables();

          _this6._setUpdateStrategy(validatorOrOpts);

          _this6._setUpControls();

          _this6.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
            // so we set `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!_this6.asyncValidator
          });

          return _this6;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update the value or validity of the control.
         * Use {@link FormGroup#addControl addControl} instead.
         *
         * @param name The control name to register in the collection
         * @param control Provides the control for the given name
         */


        _createClass(_FormGroup, [{
          key: "registerControl",
          value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);

            return control;
          }
          /**
           * Add a control to this group.
           *
           * If a control with a given name already exists, it would *not* be replaced with a new one.
           * If you want to replace an existing control, use the {@link FormGroup#setControl setControl}
           * method instead. This method also updates the value and validity of the control.
           *
           * @param name The control name to add to the collection
           * @param control Provides the control for the given name
           * @param options Specifies whether this FormGroup instance should emit events after a new
           *     control is added.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * added. When false, no events are emitted.
           */

        }, {
          key: "addControl",
          value: function addControl(name, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            this.registerControl(name, control);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Remove a control from this group.
           *
           * This method also updates the value and validity of the control.
           *
           * @param name The control name to remove from the collection
           * @param options Specifies whether this FormGroup instance should emit events after a
           *     control is removed.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * removed. When false, no events are emitted.
           */

        }, {
          key: "removeControl",
          value: function removeControl(name) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Replace an existing control.
           *
           * If a control with a given name does not exist in this `FormGroup`, it will be added.
           *
           * @param name The control name to replace in the collection
           * @param control Provides the control for the given name
           * @param options Specifies whether this FormGroup instance should emit events after an
           *     existing control is replaced.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * replaced with a new one. When false, no events are emitted.
           */

        }, {
          key: "setControl",
          value: function setControl(name, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            if (control) this.registerControl(name, control);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Check whether there is an enabled control with the given name in the group.
           *
           * Reports false for disabled controls. If you'd like to check for existence in the group
           * only, use {@link AbstractControl#get get} instead.
           *
           * @param controlName The control name to check for existence in the collection
           *
           * @returns false for disabled controls, true otherwise.
           */

        }, {
          key: "contains",
          value: function contains(controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
          }
          /**
           * Sets the value of the `FormGroup`. It accepts an object that matches
           * the structure of the group, with control names as keys.
           *
           * @usageNotes
           * ### Set the complete value for the form group
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl(),
           *   last: new FormControl()
           * });
           *
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.setValue({first: 'Nancy', last: 'Drew'});
           * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
           * ```
           *
           * @throws When strict checks fail, such as setting the value of a control
           * that doesn't exist or if you exclude a value of a control that does exist.
           *
           * @param value The new value for the control that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this7 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            Object.keys(value).forEach(function (name) {
              _this7._throwIfControlMissing(name);

              _this7.controls[name].setValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormGroup`. It accepts an object with control
           * names as keys, and does its best to match the values to the correct controls
           * in the group.
           *
           * It accepts both super-sets and sub-sets of the group without throwing an error.
           *
           * @usageNotes
           * ### Patch the value for a form group
           *
           * ```
           * const form = new FormGroup({
           *    first: new FormControl(),
           *    last: new FormControl()
           * });
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.patchValue({first: 'Nancy'});
           * console.log(form.value);   // {first: 'Nancy', last: null}
           * ```
           *
           * @param value The object that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes and
           * emits events after the value is patched.
           * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
           * true.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control value
           * is updated. When false, no events are emitted. The configuration options are passed to
           * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this8 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
            // `patchValue` can be called recursively and inner data structures might have these values, so
            // we just ignore such cases when a field containing FormGroup instance receives `null` or
            // `undefined` as a value.
            if (value == null
            /* both `null` and `undefined` */
            ) return;
            Object.keys(value).forEach(function (name) {
              if (_this8.controls[name]) {
                _this8.controls[name].patchValue(value[name], {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
           * the value of all descendants to null.
           *
           * You reset to a specific form state by passing in a map of states
           * that matches the structure of your form, with control names as keys. The state
           * is a standalone value or a form state object with both a value and a disabled
           * status.
           *
           * @param value Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events when the group is reset.
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * @usageNotes
           *
           * ### Reset the form group values
           *
           * ```ts
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * console.log(form.value);  // {first: 'first name', last: 'last name'}
           *
           * form.reset({ first: 'name', last: 'last name' });
           *
           * console.log(form.value);  // {first: 'name', last: 'last name'}
           * ```
           *
           * ### Reset the form group values and disabled status
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * form.reset({
           *   first: {value: 'name', disabled: true},
           *   last: 'last'
           * });
           *
           * console.log(form.value);  // {last: 'last'}
           * console.log(form.get('first').status);  // 'DISABLED'
           * ```
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, name) {
              control.reset(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the `FormGroup`, including any disabled controls.
           *
           * Retrieves all values regardless of disabled status.
           * The `value` property is the best way to get the value of the group, because
           * it excludes disabled controls in the `FormGroup`.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this._reduceChildren({}, function (acc, control, name) {
              acc[name] = control instanceof _FormControl ? control.value : control.getRawValue();
              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            });

            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(name) {
            if (!Object.keys(this.controls).length) {
              throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.controls[name]) {
              throw new Error("Cannot find form control with name: ".concat(name, "."));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            var _this9 = this;

            Object.keys(this.controls).forEach(function (key) {
              // The list of controls can change (for ex. controls might be removed) while the loop
              // is running (as a result of invoking Forms API in `valueChanges` subscription), so we
              // have to null check before invoking the callback.
              var control = _this9.controls[key];
              control && cb(control, key);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this10 = this;

            this._forEachChild(function (control) {
              control.setParent(_this10);

              control._registerOnCollectionChange(_this10._onCollectionChange);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            this.value = this._reduceValue();
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            for (var _i2 = 0, _Object$keys = Object.keys(this.controls); _i2 < _Object$keys.length; _i2++) {
              var controlName = _Object$keys[_i2];
              var control = this.controls[controlName];

              if (this.contains(controlName) && condition(control)) {
                return true;
              }
            }

            return false;
          }
          /** @internal */

        }, {
          key: "_reduceValue",
          value: function _reduceValue() {
            var _this11 = this;

            return this._reduceChildren({}, function (acc, control, name) {
              if (control.enabled || _this11.disabled) {
                acc[name] = control.value;
              }

              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_reduceChildren",
          value: function _reduceChildren(initValue, fn) {
            var res = initValue;

            this._forEachChild(function (control, name) {
              res = fn(res, control, name);
            });

            return res;
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            for (var _i3 = 0, _Object$keys2 = Object.keys(this.controls); _i3 < _Object$keys2.length; _i3++) {
              var controlName = _Object$keys2[_i3];

              if (this.controls[controlName].enabled) {
                return false;
              }
            }

            return Object.keys(this.controls).length > 0 || this.disabled;
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, name) {
              if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
              }
            });
          }
        }]);

        return _FormGroup;
      }(_AbstractControl);
      /**
       * Tracks the value and validity state of an array of `FormControl`,
       * `FormGroup` or `FormArray` instances.
       *
       * A `FormArray` aggregates the values of each child `FormControl` into an array.
       * It calculates its status by reducing the status values of its children. For example, if one of
       * the controls in a `FormArray` is invalid, the entire array becomes invalid.
       *
       * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormGroup`.
       *
       * @usageNotes
       *
       * ### Create an array of form controls
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy', Validators.minLength(2)),
       *   new FormControl('Drew'),
       * ]);
       *
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * console.log(arr.status);  // 'VALID'
       * ```
       *
       * ### Create a form array with array-level validators
       *
       * You include array-level validators and async validators. These come in handy
       * when you want to perform validation that considers the value of more than one child
       * control.
       *
       * The two types of validators are passed in separately as the second and third arg
       * respectively, or together as part of an options object.
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy'),
       *   new FormControl('Drew')
       * ], {validators: myValidator, asyncValidators: myAsyncValidator});
       * ```
       *
       * ### Set the updateOn property for all controls in a form array
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * array level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl()
       * ], {updateOn: 'blur'});
       * ```
       *
       * ### Adding or removing controls from a form array
       *
       * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
       * in `FormArray` itself. These methods ensure the controls are properly tracked in the
       * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
       * the `FormArray` directly, as that result in strange and unexpected behavior such
       * as broken change detection.
       *
       * @publicApi
       */


      var _FormArray = /*#__PURE__*/function (_AbstractControl4) {
        _inherits(_FormArray, _AbstractControl4);

        var _super10 = _createSuper(_FormArray);

        /**
         * Creates a new `FormArray` instance.
         *
         * @param controls An array of child controls. Each child control is given an index
         * where it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function _FormArray(controls, validatorOrOpts, asyncValidator) {
          var _this12;

          _classCallCheck(this, _FormArray);

          _this12 = _super10.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this12.controls = controls;

          _this12._initObservables();

          _this12._setUpdateStrategy(validatorOrOpts);

          _this12._setUpControls();

          _this12.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!_this12.asyncValidator
          });

          return _this12;
        }
        /**
         * Get the `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to retrieve the control
         */


        _createClass(_FormArray, [{
          key: "at",
          value: function at(index) {
            return this.controls[index];
          }
          /**
           * Insert a new `AbstractControl` at the end of the array.
           *
           * @param control Form control to be inserted
           * @param options Specifies whether this FormArray instance should emit events after a new
           *     control is added.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * inserted. When false, no events are emitted.
           */

        }, {
          key: "push",
          value: function push(control) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.controls.push(control);

            this._registerControl(control);

            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Insert a new `AbstractControl` at the given `index` in the array.
           *
           * @param index Index in the array to insert the control
           * @param control Form control to be inserted
           * @param options Specifies whether this FormArray instance should emit events after a new
           *     control is inserted.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * inserted. When false, no events are emitted.
           */

        }, {
          key: "insert",
          value: function insert(index, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            this.controls.splice(index, 0, control);

            this._registerControl(control);

            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });
          }
          /**
           * Remove the control at the given `index` in the array.
           *
           * @param index Index in the array to remove the control
           * @param options Specifies whether this FormArray instance should emit events after a
           *     control is removed.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * removed. When false, no events are emitted.
           */

        }, {
          key: "removeAt",
          value: function removeAt(index) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });
          }
          /**
           * Replace an existing control.
           *
           * @param index Index in the array to replace the control
           * @param control The `AbstractControl` control to replace the existing control
           * @param options Specifies whether this FormArray instance should emit events after an
           *     existing control is replaced with a new one.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * replaced with a new one. When false, no events are emitted.
           */

        }, {
          key: "setControl",
          value: function setControl(index, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);

            if (control) {
              this.controls.splice(index, 0, control);

              this._registerControl(control);
            }

            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Length of the control array.
           */

        }, {
          key: "length",
          get: function get() {
            return this.controls.length;
          }
          /**
           * Sets the value of the `FormArray`. It accepts an array that matches
           * the structure of the control.
           *
           * This method performs strict checks, and throws an error if you try
           * to set the value of a control that doesn't exist or if you exclude the
           * value of a control.
           *
           * @usageNotes
           * ### Set the values for the controls in the form array
           *
           * ```
           * const arr = new FormArray([
           *   new FormControl(),
           *   new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.setValue(['Nancy', 'Drew']);
           * console.log(arr.value);   // ['Nancy', 'Drew']
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this13 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            value.forEach(function (newValue, index) {
              _this13._throwIfControlMissing(index);

              _this13.at(index).setValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormArray`. It accepts an array that matches the
           * structure of the control, and does its best to match the values to the correct
           * controls in the group.
           *
           * It accepts both super-sets and sub-sets of the array without throwing an error.
           *
           * @usageNotes
           * ### Patch the values for controls in a form array
           *
           * ```
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.patchValue(['Nancy']);
           * console.log(arr.value);   // ['Nancy', null]
           * ```
           *
           * @param value Array of latest values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control value
           * is updated. When false, no events are emitted. The configuration options are passed to
           * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this14 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
            // `patchValue` can be called recursively and inner data structures might have these values, so
            // we just ignore such cases when a field containing FormArray instance receives `null` or
            // `undefined` as a value.
            if (value == null
            /* both `null` and `undefined` */
            ) return;
            value.forEach(function (newValue, index) {
              if (_this14.at(index)) {
                _this14.at(index).patchValue(newValue, {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
           * value of all descendants to null or null maps.
           *
           * You reset to a specific form state by passing in an array of states
           * that matches the structure of the control. The state is a standalone value
           * or a form state object with both a value and a disabled status.
           *
           * @usageNotes
           * ### Reset the values in a form array
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * arr.reset(['name', 'last name']);
           *
           * console.log(arr.value);  // ['name', 'last name']
           * ```
           *
           * ### Reset the values in a form array and the disabled status for the first control
           *
           * ```
           * arr.reset([
           *   {value: 'name', disabled: true},
           *   'last'
           * ]);
           *
           * console.log(arr.value);  // ['last']
           * console.log(arr.at(0).status);  // 'DISABLED'
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, index) {
              control.reset(value[index], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the array, including any disabled controls.
           *
           * Reports all values regardless of disabled status.
           * For enabled controls only, the `value` property is the best way to get the value of the array.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this.controls.map(function (control) {
              return control instanceof _FormControl ? control.value : control.getRawValue();
            });
          }
          /**
           * Remove all controls in the `FormArray`.
           *
           * @param options Specifies whether this FormArray instance should emit events after all
           *     controls are removed.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when all controls
           * in this FormArray instance are removed. When false, no events are emitted.
           *
           * @usageNotes
           * ### Remove all elements from a FormArray
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.length);  // 2
           *
           * arr.clear();
           * console.log(arr.length);  // 0
           * ```
           *
           * It's a simpler and more efficient alternative to removing all elements one by one:
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           *
           * while (arr.length) {
           *    arr.removeAt(0);
           * }
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (this.controls.length < 1) return;

            this._forEachChild(function (control) {
              return control._registerOnCollectionChange(function () {});
            });

            this.controls.splice(0);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this.controls.reduce(function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            }, false);
            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(index) {
            if (!this.controls.length) {
              throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.at(index)) {
              throw new Error("Cannot find form control at index ".concat(index));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            this.controls.forEach(function (control, index) {
              cb(control, index);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            var _this15 = this;

            this.value = this.controls.filter(function (control) {
              return control.enabled || _this15.disabled;
            }).map(function (control) {
              return control.value;
            });
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return this.controls.some(function (control) {
              return control.enabled && condition(control);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this16 = this;

            this._forEachChild(function (control) {
              return _this16._registerControl(control);
            });
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, i) {
              if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: ".concat(i, "."));
              }
            });
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            var _iterator = _createForOfIteratorHelper(this.controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                if (control.enabled) return false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.controls.length > 0 || this.disabled;
          }
        }, {
          key: "_registerControl",
          value: function _registerControl(control) {
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);
          }
        }]);

        return _FormArray;
      }(_AbstractControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgForm;
        })
      };

      var ɵ0 = function ɵ0() {
        return Promise.resolve(null);
      };

      var resolvedPromise = ɵ0();
      /**
       * @description
       * Creates a top-level `FormGroup` instance and binds it to a form
       * to track aggregate form value and validation status.
       *
       * As soon as you import the `FormsModule`, this directive becomes active by default on
       * all `<form>` tags.  You don't need to add a special selector.
       *
       * You optionally export the directive into a local template variable using `ngForm` as the key
       * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
       * `FormGroup` instance are duplicated on the directive itself, so a reference to it
       * gives you access to the aggregate value and validity status of the form, as well as
       * user interaction properties like `dirty` and `touched`.
       *
       * To register child controls with the form, use `NgModel` with a `name`
       * attribute. You may use `NgModelGroup` to create sub-groups within the form.
       *
       * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
       * triggered a form submission. The `ngSubmit` event emits the original form
       * submission event.
       *
       * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
       * To import the `FormsModule` but skip its usage in some forms,
       * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
       * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
       * unnecessary because the `<form>` tags are inert. In that case, you would
       * refrain from using the `formGroup` directive.
       *
       * @usageNotes
       *
       * ### Listening for form submission
       *
       * The following example shows how to capture the form values from the "ngSubmit" event.
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Setting the update options
       *
       * The following example shows you how to change the "updateOn" option from its default using
       * ngFormOptions.
       *
       * ```html
       * <form [ngFormOptions]="{updateOn: 'blur'}">
       *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
       * </form>
       * ```
       *
       * ### Native DOM validation UI
       *
       * In order to prevent the native DOM form validation UI from interfering with Angular's form
       * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
       * `FormModule` or `ReactiveFormModule` are imported into the application.
       * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
       * `ngNativeValidate` attribute to the `<form>` element:
       *
       * ```html
       * <form ngNativeValidate>
       *   ...
       * </form>
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgForm = /*#__PURE__*/function (_ControlContainer2) {
        _inherits(_NgForm, _ControlContainer2);

        var _super11 = _createSuper(_NgForm);

        function _NgForm(validators, asyncValidators) {
          var _this17;

          _classCallCheck(this, _NgForm);

          _this17 = _super11.call(this);
          /**
           * @description
           * Returns whether the form submission has been triggered.
           */

          _this17.submitted = false;
          _this17._directives = [];
          /**
           * @description
           * Event emitter for the "ngSubmit" event
           */

          _this17.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this17.form = new _FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
          return _this17;
        }
        /** @nodoc */


        _createClass(_NgForm, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          /**
           * @description
           * The directive instance.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * The internal `FormGroup` instance.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it is always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Returns a map of the controls in this group.
           */

        }, {
          key: "controls",
          get: function get() {
            return this.form.controls;
          }
          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "addControl",
          value: function addControl(dir) {
            var _this18 = this;

            resolvedPromise.then(function () {
              var container = _this18._findContainer(dir.path);

              dir.control = container.registerControl(dir.name, dir.control);
              setUpControl(dir.control, dir);
              dir.control.updateValueAndValidity({
                emitEvent: false
              });

              _this18._directives.push(dir);
            });
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `NgModel` directive.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `NgModel` instance from the internal list of directives
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            var _this19 = this;

            resolvedPromise.then(function () {
              var container = _this19._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }

              removeListItem(_this19._directives, dir);
            });
          }
          /**
           * @description
           * Adds a new `NgModelGroup` directive instance to the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var _this20 = this;

            resolvedPromise.then(function () {
              var container = _this20._findContainer(dir.path);

              var group = new _FormGroup({});
              setUpFormContainer(group, dir);
              container.registerControl(dir.name, group);
              group.updateValueAndValidity({
                emitEvent: false
              });
            });
          }
          /**
           * @description
           * Removes the `NgModelGroup` directive instance from the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            var _this21 = this;

            resolvedPromise.then(function () {
              var container = _this21._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }
            });
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `NgControl` directive.
           *
           * @param dir The `NgControl` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var _this22 = this;

            resolvedPromise.then(function () {
              var ctrl = _this22.form.get(dir.path);

              ctrl.setValue(value);
            });
          }
          /**
           * @description
           * Sets the value for this `FormGroup`.
           *
           * @param value The new value
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            this.control.setValue(value);
          }
          /**
           * @description
           * Method called when the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this._directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.form._updateOn = this.options.updateOn;
            }
          }
          /** @internal */

        }, {
          key: "_findContainer",
          value: function _findContainer(path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
          }
        }]);

        return _NgForm;
      }(_ControlContainer);

      _NgForm.ɵfac = function NgForm_Factory(t) {
        return new (t || _NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _NgForm.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgForm,
        selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
        hostBindings: function NgForm_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function NgForm_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          options: ["ngFormOptions", "options"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _NgForm.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _NgForm.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngFormOptions']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngFormOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
       *
       * @publicApi
       */


      var _AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
        _inherits(_AbstractFormGroupDirective, _ControlContainer3);

        var _super12 = _createSuper(_AbstractFormGroupDirective);

        function _AbstractFormGroupDirective() {
          _classCallCheck(this, _AbstractFormGroupDirective);

          return _super12.apply(this, arguments);
        }

        _createClass(_AbstractFormGroupDirective, [{
          key: "ngOnInit",
          value:
          /** @nodoc */
          function ngOnInit() {
            this._checkParentType(); // Register the group with its parent group.


            this.formDirective.addFormGroup(this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              // Remove the group from its parent group.
              this.formDirective.removeFormGroup(this);
            }
          }
          /**
           * @description
           * The `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormGroup(this);
          }
          /**
           * @description
           * The path to this group from the top-level directive.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /** @internal */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {}
        }]);

        return _AbstractFormGroupDirective;
      }(_ControlContainer);

      _AbstractFormGroupDirective.ɵfac = /*@__PURE__*/function () {
        var ɵAbstractFormGroupDirective_BaseFactory;
        return function AbstractFormGroupDirective_Factory(t) {
          return (ɵAbstractFormGroupDirective_BaseFactory || (ɵAbstractFormGroupDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
        };
      }();

      _AbstractFormGroupDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _AbstractFormGroupDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AbstractFormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function modelParentException() {
        return new Error("\n    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n    formGroup's partner directive \"formControlName\" instead.  Example:\n\n    ".concat(formControlNameExample, "\n\n    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n    Example:\n\n    ").concat(ngModelWithFormGroupExample));
      }

      function formGroupNameException() {
        return new Error("\n    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n    Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n    ".concat(formGroupNameExample, "\n\n    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n    ").concat(ngModelGroupExample));
      }

      function missingNameException() {
        return new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n    control must be defined as 'standalone' in ngModelOptions.\n\n    Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n    Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
      }

      function modelGroupParentException() {
        return new Error("\n    ngModelGroup cannot be used with a parent formGroup directive.\n\n    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n    ".concat(formGroupNameExample, "\n\n    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n    ").concat(ngModelGroupExample));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var modelGroupProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgModelGroup;
        })
      };
      /**
       * @description
       * Creates and binds a `FormGroup` instance to a DOM element.
       *
       * This directive can only be used as a child of `NgForm` (within `<form>` tags).
       *
       * Use this directive to validate a sub-group of your form separately from the
       * rest of your form, or if some values in your domain model make more sense
       * to consume together in a nested object.
       *
       * Provide a name for the sub-group and it will become the key
       * for the sub-group in the form's full value. If you need direct access, export the directive into
       * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
       *
       * @usageNotes
       *
       * ### Consuming controls in a grouping
       *
       * The following example shows you how to combine controls together in a sub-group
       * of the form.
       *
       * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
        _inherits(_NgModelGroup, _AbstractFormGroupDir);

        var _super13 = _createSuper(_NgModelGroup);

        function _NgModelGroup(parent, validators, asyncValidators) {
          var _this23;

          _classCallCheck(this, _NgModelGroup);

          _this23 = _super13.call(this);
          _this23._parent = parent;

          _this23._setValidators(validators);

          _this23._setAsyncValidators(asyncValidators);

          return _this23;
        }
        /** @internal */


        _createClass(_NgModelGroup, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof _NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw modelGroupParentException();
            }
          }
        }]);

        return _NgModelGroup;
      }(_AbstractFormGroupDirective);

      _NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
        return new (t || _NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _NgModelGroup.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgModelGroup,
        selectors: [["", "ngModelGroup", ""]],
        inputs: {
          name: ["ngModelGroup", "name"]
        },
        exportAs: ["ngModelGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _NgModelGroup.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _NgModelGroup.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModelGroup']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgModelGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngModelGroup]',
            providers: [modelGroupProvider],
            exportAs: 'ngModelGroup'
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModelGroup']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formControlBinding = {
        provide: _NgControl,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgModel;
        })
      };

      var ɵ0$1 = function ɵ0$1() {
        return Promise.resolve(null);
      };
      /**
       * `ngModel` forces an additional change detection run when its inputs change:
       * E.g.:
       * ```
       * <div>{{myModel.valid}}</div>
       * <input [(ngModel)]="myValue" #myModel="ngModel">
       * ```
       * I.e. `ngModel` can export itself on the element and then be used in the template.
       * Normally, this would result in expressions before the `input` that use the exported directive
       * to have an old value as they have been
       * dirty checked before. As this is a very common case for `ngModel`, we added this second change
       * detection run.
       *
       * Notes:
       * - this is just one extra run no matter how many `ngModel`s have been changed.
       * - this is a general problem when using `exportAs` for directives!
       */


      var resolvedPromise$1 = ɵ0$1();
      /**
       * @description
       * Creates a `FormControl` instance from a domain model and binds it
       * to a form control element.
       *
       * The `FormControl` instance tracks the value, user interaction, and
       * validation status of the control and keeps the view synced with the model. If used
       * within a parent form, the directive also registers itself with the form as a child
       * control.
       *
       * This directive is used by itself or as part of a larger form. Use the
       * `ngModel` selector to activate it.
       *
       * It accepts a domain model as an optional `Input`. If you have a one-way binding
       * to `ngModel` with `[]` syntax, changing the domain model's value in the component
       * class sets the value in the view. If you have a two-way binding with `[()]` syntax
       * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
       * the domain model in your class.
       *
       * To inspect the properties of the associated `FormControl` (like the validity state),
       * export the directive into a local template variable using `ngModel` as the key (ex:
       * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
       * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
       * for direct access. See a full list of properties directly available in
       * `AbstractControlDirective`.
       *
       * @see `RadioControlValueAccessor`
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using ngModel on a standalone control
       *
       * The following examples show a simple standalone control using `ngModel`:
       *
       * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
       *
       * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
       * so that the control can be registered with the parent form under that name.
       *
       * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
       * as the parent form syncs the value for you. You access its properties by exporting it into a
       * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
       * needed on form submission.
       *
       * If you do need to populate initial values into your form, using a one-way binding for
       * `ngModel` tends to be sufficient as long as you use the exported form's value rather
       * than the domain model's value on submit.
       *
       * ### Using ngModel within a form
       *
       * The following example shows controls using `ngModel` within a form:
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Using a standalone ngModel within a group
       *
       * The following example shows you how to use a standalone ngModel control
       * within a form. This controls the display of the form, but doesn't contain form data.
       *
       * ```html
       * <form>
       *   <input name="login" ngModel placeholder="Login">
       *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
       * </form>
       * <!-- form value: {login: ''} -->
       * ```
       *
       * ### Setting the ngModel `name` attribute through options
       *
       * The following example shows you an alternate way to set the name attribute. Here,
       * an attribute identified as name is used within a custom form control component. To still be able
       * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
       *
       * ```html
       * <form>
       *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
       *   </my-custom-form-control>
       * </form>
       * <!-- form value: {user: ''} -->
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgModel = /*#__PURE__*/function (_NgControl2) {
        _inherits(_NgModel, _NgControl2);

        var _super14 = _createSuper(_NgModel);

        function _NgModel(parent, validators, asyncValidators, valueAccessors) {
          var _this24;

          _classCallCheck(this, _NgModel);

          _this24 = _super14.call(this);
          _this24.control = new _FormControl();
          /** @internal */

          _this24._registered = false;
          /**
           * @description
           * Event emitter for producing the `ngModelChange` event after
           * the view model updates.
           */

          _this24.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this24._parent = parent;

          _this24._setValidators(validators);

          _this24._setAsyncValidators(asyncValidators);

          _this24.valueAccessor = selectValueAccessor(_assertThisInitialized(_this24), valueAccessors);
          return _this24;
        }
        /** @nodoc */


        _createClass(_NgModel, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkForErrors();

            if (!this._registered) this._setUpControl();

            if ('isDisabled' in changes) {
              this._updateDisabled(changes);
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              this._updateValue(this.model);

              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
          }
          /**
           * @description
           * The top-level directive for this control if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value emitted by `ngModelChange`.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._setUpdateStrategy();

            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.control._updateOn = this.options.updateOn;
            }
          }
        }, {
          key: "_isStandalone",
          value: function _isStandalone() {
            return !this._parent || !!(this.options && this.options.standalone);
          }
        }, {
          key: "_setUpStandalone",
          value: function _setUpStandalone() {
            setUpControl(this.control, this);
            this.control.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_checkForErrors",
          value: function _checkForErrors() {
            if (!this._isStandalone()) {
              this._checkParentType();
            }

            this._checkName();
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof _NgModelGroup) && this._parent instanceof _AbstractFormGroupDirective) {
                throw formGroupNameException();
              } else if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof _NgForm)) {
                throw modelParentException();
              }
            }
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;

            if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw missingNameException();
            }
          }
        }, {
          key: "_updateValue",
          value: function _updateValue(value) {
            var _this25 = this;

            resolvedPromise$1.then(function () {
              _this25.control.setValue(value, {
                emitViewToModelChange: false
              });
            });
          }
        }, {
          key: "_updateDisabled",
          value: function _updateDisabled(changes) {
            var _this26 = this;

            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
            resolvedPromise$1.then(function () {
              if (isDisabled && !_this26.control.disabled) {
                _this26.control.disable();
              } else if (!isDisabled && _this26.control.disabled) {
                _this26.control.enable();
              }
            });
          }
        }]);

        return _NgModel;
      }(_NgControl);

      _NgModel.ɵfac = function NgModel_Factory(t) {
        return new (t || _NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALUE_ACCESSOR, 10));
      };

      _NgModel.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgModel,
        selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngModel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _NgModel.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALUE_ACCESSOR]
          }]
        }];
      };

      _NgModel.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModelOptions']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALUE_ACCESSOR]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['ngModelChange']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['disabled']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModel']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModelOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       *
       * Adds `novalidate` attribute to all forms by default.
       *
       * `novalidate` is used to disable browser's native form validation.
       *
       * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
       *
       * ```
       * <form ngNativeValidate></form>
       * ```
       *
       * @publicApi
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       */


      var _ɵNgNoValidate = /*#__PURE__*/_createClass(function _ɵNgNoValidate() {
        _classCallCheck(this, _ɵNgNoValidate);
      });

      _ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
        return new (t || _ɵNgNoValidate)();
      };

      _ɵNgNoValidate.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ɵNgNoValidate,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ɵNgNoValidate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: {
              'novalidate': ''
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var NUMBER_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NumberValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a number value and listening to number input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a number input with a reactive form.
       *
       * The following example shows how to use a number input with a reactive form.
       *
       * ```ts
       * const totalCountControl = new FormControl();
       * ```
       *
       * ```
       * <input type="number" [formControl]="totalCountControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _NumberValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA2) {
        _inherits(_NumberValueAccessor, _BuiltInControlValueA2);

        var _super15 = _createSuper(_NumberValueAccessor);

        function _NumberValueAccessor() {
          _classCallCheck(this, _NumberValueAccessor);

          return _super15.apply(this, arguments);
        }

        _createClass(_NumberValueAccessor, [{
          key: "writeValue",
          value:
          /**
           * Sets the "value" property on the input element.
           * @nodoc
           */
          function writeValue(value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = value == null ? '' : value;
            this.setProperty('value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
        }]);

        return _NumberValueAccessor;
      }(BuiltInControlValueAccessor);

      _NumberValueAccessor.ɵfac = /*@__PURE__*/function () {
        var ɵNumberValueAccessor_BaseFactory;
        return function NumberValueAccessor_Factory(t) {
          return (ɵNumberValueAccessor_BaseFactory || (ɵNumberValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_NumberValueAccessor)))(t || _NumberValueAccessor);
        };
      }();

      _NumberValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NumberValueAccessor,
        selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
        hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NumberValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RADIO_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _RadioControlValueAccessor;
        }),
        multi: true
      };

      function throwNameError() {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
      }
      /**
       * Internal-only NgModule that works as a host for the `RadioControlRegistry` tree-shakable
       * provider. Note: the `InternalFormsSharedModule` can not be used here directly, since it's
       * declared *after* the `RadioControlRegistry` class and the `providedIn` doesn't support
       * `forwardRef` logic.
       */


      var RadioControlRegistryModule = /*#__PURE__*/_createClass(function RadioControlRegistryModule() {
        _classCallCheck(this, RadioControlRegistryModule);
      });

      RadioControlRegistryModule.ɵfac = function RadioControlRegistryModule_Factory(t) {
        return new (t || RadioControlRegistryModule)();
      };

      RadioControlRegistryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RadioControlRegistryModule
      });
      RadioControlRegistryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
        }], null, null);
      })();
      /**
       * @description
       * Class used by Angular to track radio buttons. For internal use only.
       */


      var RadioControlRegistry = /*#__PURE__*/function () {
        function RadioControlRegistry() {
          _classCallCheck(this, RadioControlRegistry);

          this._accessors = [];
        }
        /**
         * @description
         * Adds a control to the internal registry. For internal use only.
         */


        _createClass(RadioControlRegistry, [{
          key: "add",
          value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
          }
          /**
           * @description
           * Removes a control from the internal registry. For internal use only.
           */

        }, {
          key: "remove",
          value: function remove(accessor) {
            for (var i = this._accessors.length - 1; i >= 0; --i) {
              if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);

                return;
              }
            }
          }
          /**
           * @description
           * Selects a radio button. For internal use only.
           */

        }, {
          key: "select",
          value: function select(accessor) {
            var _this27 = this;

            this._accessors.forEach(function (c) {
              if (_this27._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
              }
            });
          }
        }, {
          key: "_isSameGroup",
          value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
          }
        }]);

        return RadioControlRegistry;
      }();

      RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
        return new (t || RadioControlRegistry)();
      };

      RadioControlRegistry.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function RadioControlRegistry_Factory() {
          return new RadioControlRegistry();
        },
        token: RadioControlRegistry,
        providedIn: RadioControlRegistryModule
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: RadioControlRegistryModule
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * The `ControlValueAccessor` for writing radio control values and listening to radio control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using radio buttons with reactive form directives
       *
       * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
       * a reactive form, radio buttons in the same group should have the same `formControlName`.
       * Providing a `name` attribute is optional.
       *
       * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _RadioControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA3) {
        _inherits(_RadioControlValueAccessor, _BuiltInControlValueA3);

        var _super16 = _createSuper(_RadioControlValueAccessor);

        function _RadioControlValueAccessor(renderer, elementRef, _registry, _injector) {
          var _this28;

          _classCallCheck(this, _RadioControlValueAccessor);

          _this28 = _super16.call(this, renderer, elementRef);
          _this28._registry = _registry;
          _this28._injector = _injector;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
           * to override the `onChange` function (which expects 1 argument) in the parent
           * `BaseControlValueAccessor` class.
           * @nodoc
           */

          _this28.onChange = function () {};

          return _this28;
        }
        /** @nodoc */


        _createClass(_RadioControlValueAccessor, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._control = this._injector.get(_NgControl);

            this._checkName();

            this._registry.add(this._control, this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._registry.remove(this);
          }
          /**
           * Sets the "checked" property value on the radio input element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._state = value === this.value;
            this.setProperty('checked', this._state);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this29 = this;

            this._fn = fn;

            this.onChange = function () {
              fn(_this29.value);

              _this29._registry.select(_this29);
            };
          }
          /**
           * Sets the "value" on the radio input element and unchecks it.
           *
           * @param value
           */

        }, {
          key: "fireUncheck",
          value: function fireUncheck(value) {
            this.writeValue(value);
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwNameError();
            }

            if (!this.name && this.formControlName) this.name = this.formControlName;
          }
        }]);

        return _RadioControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
        return new (t || _RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _RadioControlValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _RadioControlValueAccessor,
        selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
        hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
              return ctx.onChange();
            })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _RadioControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
        }];
      };

      _RadioControlValueAccessor.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_RadioControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: {
              '(change)': 'onChange()',
              '(blur)': 'onTouched()'
            },
            providers: [RADIO_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: RadioControlRegistry
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RANGE_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _RangeValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a range value and listening to range input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a range input with a reactive form
       *
       * The following example shows how to use a range input with a reactive form.
       *
       * ```ts
       * const ageControl = new FormControl();
       * ```
       *
       * ```
       * <input type="range" [formControl]="ageControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _RangeValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA4) {
        _inherits(_RangeValueAccessor, _BuiltInControlValueA4);

        var _super17 = _createSuper(_RangeValueAccessor);

        function _RangeValueAccessor() {
          _classCallCheck(this, _RangeValueAccessor);

          return _super17.apply(this, arguments);
        }

        _createClass(_RangeValueAccessor, [{
          key: "writeValue",
          value:
          /**
           * Sets the "value" property on the input element.
           * @nodoc
           */
          function writeValue(value) {
            this.setProperty('value', parseFloat(value));
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
        }]);

        return _RangeValueAccessor;
      }(BuiltInControlValueAccessor);

      _RangeValueAccessor.ɵfac = /*@__PURE__*/function () {
        var ɵRangeValueAccessor_BaseFactory;
        return function RangeValueAccessor_Factory(t) {
          return (ɵRangeValueAccessor_BaseFactory || (ɵRangeValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_RangeValueAccessor)))(t || _RangeValueAccessor);
        };
      }();

      _RangeValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _RangeValueAccessor,
        selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
        hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_RangeValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token to provide to turn off the ngModel warning on formControl and formControlName.
       */


      var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgModelWithFormControlWarning');
      var formControlBinding$1 = {
        provide: _NgControl,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormControlDirective;
        })
      };
      /**
       * @description
       * Synchronizes a standalone `FormControl` instance to a form control element.
       *
       * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives was deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * The following example shows how to register a standalone control and set its value.
       *
       * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormControlDirective = /*#__PURE__*/function (_NgControl3) {
        _inherits(_FormControlDirective, _NgControl3);

        var _super18 = _createSuper(_FormControlDirective);

        function _FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this30;

          _classCallCheck(this, _FormControlDirective);

          _this30 = _super18.call(this);
          _this30._ngModelWarningConfig = _ngModelWarningConfig;
          /** @deprecated as of v6 */

          _this30.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular `FormControlDirective` instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this30._ngModelWarningSent = false;

          _this30._setValidators(validators);

          _this30._setAsyncValidators(asyncValidators);

          _this30.valueAccessor = selectValueAccessor(_assertThisInitialized(_this30), valueAccessors);
          return _this30;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(_FormControlDirective, [{
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              console.warn(disabledAttrWarning);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
              var previousForm = changes['form'].previousValue;

              if (previousForm) {
                cleanUpControl(previousForm, this,
                /* validateControlPresenceOnChange */
                false);
              }

              setUpControl(this.form, this);

              if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
              }

              this.form.updateValueAndValidity({
                emitEvent: false
              });
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControl', _FormControlDirective, this, this._ngModelWarningConfig);
              }

              this.form.setValue(this.model);
              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.form) {
              cleanUpControl(this.form, this,
              /* validateControlPresenceOnChange */
              false);
            }
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * The `FormControl` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(changes) {
            return changes.hasOwnProperty('form');
          }
        }]);

        return _FormControlDirective;
      }(_NgControl);

      _FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
        return new (t || _FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      _FormControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FormControlDirective,
        selectors: [["", "formControl", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          form: ["formControl", "form"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */

      _FormControlDirective._ngModelWarningSentOnce = false;

      _FormControlDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      _FormControlDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formControl']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formControl]',
            providers: [formControlBinding$1],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['disabled']
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formControl']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider$1 = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormGroupDirective;
        })
      };
      /**
       * @description
       *
       * Binds an existing `FormGroup` to a DOM element.
       *
       * This directive accepts an existing `FormGroup` instance. It will then use this
       * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
       * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
       * and `FormArrayName` directives.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       * ### Register Form Group
       *
       * The following example registers a `FormGroup` with first name and last name controls,
       * and listens for the *ngSubmit* event when the button is clicked.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormGroupDirective = /*#__PURE__*/function (_ControlContainer4) {
        _inherits(_FormGroupDirective, _ControlContainer4);

        var _super19 = _createSuper(_FormGroupDirective);

        function _FormGroupDirective(validators, asyncValidators) {
          var _this31;

          _classCallCheck(this, _FormGroupDirective);

          _this31 = _super19.call(this);
          _this31.validators = validators;
          _this31.asyncValidators = asyncValidators;
          /**
           * @description
           * Reports whether the form submission has been triggered.
           */

          _this31.submitted = false;
          /**
           * Callback that should be invoked when controls in FormGroup or FormArray collection change
           * (added or removed). This callback triggers corresponding DOM updates.
           */

          _this31._onCollectionChange = function () {
            return _this31._updateDomValue();
          };
          /**
           * @description
           * Tracks the list of added `FormControlName` instances
           */


          _this31.directives = [];
          /**
           * @description
           * Tracks the `FormGroup` bound to this directive.
           */

          _this31.form = null;
          /**
           * @description
           * Emits an event when the form submission has been triggered.
           */

          _this31.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

          _this31._setValidators(validators);

          _this31._setAsyncValidators(asyncValidators);

          return _this31;
        }
        /** @nodoc */


        _createClass(_FormGroupDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkFormPresent();

            if (changes.hasOwnProperty('form')) {
              this._updateValidators();

              this._updateDomValue();

              this._updateRegistrations();

              this._oldForm = this.form;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.form) {
              cleanUpValidators(this.form, this); // Currently the `onCollectionChange` callback is rewritten each time the
              // `_registerOnCollectionChange` function is invoked. The implication is that cleanup should
              // happen *only* when the `onCollectionChange` callback was set by this directive instance.
              // Otherwise it might cause overriding a callback of some other directive instances. We should
              // consider updating this logic later to make it similar to how `onChange` callbacks are
              // handled, see https://github.com/angular/angular/issues/39732 for additional info.

              if (this.form._onCollectionChange === this._onCollectionChange) {
                this.form._registerOnCollectionChange(function () {});
              }
            }
          }
          /**
           * @description
           * Returns this directive's instance.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * Returns the `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "addControl",
          value: function addControl(dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
            this.directives.push(dir);
            return ctrl;
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `FormControlName` directive
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `FormControlName` instance from the internal list of directives
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            cleanUpControl(dir.control || null, dir,
            /* validateControlPresenceOnChange */
            false);
            removeListItem(this.directives, dir);
          }
          /**
           * Adds a new `FormGroupName` directive instance to the form.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            this._setUpFormContainer(dir);
          }
          /**
           * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
           * view.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            this._cleanUpFormContainer(dir);
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "addFormArray",
          value: function addFormArray(dir) {
            this._setUpFormContainer(dir);
          }
          /**
           * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
           * view.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "removeFormArray",
          value: function removeFormArray(dir) {
            this._cleanUpFormContainer(dir);
          }
          /**
           * @description
           * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "getFormArray",
          value: function getFormArray(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `FormControlName` directive.
           *
           * @param dir The `FormControlName` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
          }
          /**
           * @description
           * Method called with the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this.directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
          /** @internal */

        }, {
          key: "_updateDomValue",
          value: function _updateDomValue() {
            var _this32 = this;

            this.directives.forEach(function (dir) {
              var oldCtrl = dir.control;

              var newCtrl = _this32.form.get(dir.path);

              if (oldCtrl !== newCtrl) {
                // Note: the value of the `dir.control` may not be defined, for example when it's a first
                // `FormControl` that is added to a `FormGroup` instance (via `addControl` call).
                cleanUpControl(oldCtrl || null, dir); // Check whether new control at the same location inside the corresponding `FormGroup` is an
                // instance of `FormControl` and perform control setup only if that's the case.
                // Note: we don't need to clear the list of directives (`this.directives`) here, it would be
                // taken care of in the `removeControl` method invoked when corresponding `formControlName`
                // directive instance is being removed (invoked from `FormControlName.ngOnDestroy`).

                if (newCtrl instanceof _FormControl) {
                  setUpControl(newCtrl, dir);
                  dir.control = newCtrl;
                }
              }
            });

            this.form._updateTreeValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_setUpFormContainer",
          value: function _setUpFormContainer(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir); // NOTE: this operation looks unnecessary in case no new validators were added in
            // `setUpFormContainer` call. Consider updating this code to match the logic in
            // `_cleanUpFormContainer` function.

            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_cleanUpFormContainer",
          value: function _cleanUpFormContainer(dir) {
            if (this.form) {
              var ctrl = this.form.get(dir.path);

              if (ctrl) {
                var isControlUpdated = cleanUpFormContainer(ctrl, dir);

                if (isControlUpdated) {
                  // Run validity check only in case a control was updated (i.e. view validators were
                  // removed) as removing view validators might cause validity to change.
                  ctrl.updateValueAndValidity({
                    emitEvent: false
                  });
                }
              }
            }
          }
        }, {
          key: "_updateRegistrations",
          value: function _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange);

            if (this._oldForm) {
              this._oldForm._registerOnCollectionChange(function () {});
            }
          }
        }, {
          key: "_updateValidators",
          value: function _updateValidators() {
            setUpValidators(this.form, this);

            if (this._oldForm) {
              cleanUpValidators(this._oldForm, this);
            }
          }
        }, {
          key: "_checkFormPresent",
          value: function _checkFormPresent() {
            if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw missingFormException();
            }
          }
        }]);

        return _FormGroupDirective;
      }(_ControlContainer);

      _FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
        return new (t || _FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _FormGroupDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FormGroupDirective,
        selectors: [["", "formGroup", ""]],
        hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function FormGroupDirective_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          form: ["formGroup", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _FormGroupDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _FormGroupDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formGroup']
          }],
          ngSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formGroupNameProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormGroupName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormGroup` to a DOM element.
       *
       * This directive can only be used with a parent `FormGroupDirective`.
       *
       * It accepts the string name of the nested `FormGroup` to link, and
       * looks for a `FormGroup` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * Use nested form groups to validate a sub-group of a
       * form separately from the rest or to group the values of certain
       * controls into their own nested object.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @usageNotes
       *
       * ### Access the group by name
       *
       * The following example uses the {@link AbstractControl#get get} method to access the
       * associated `FormGroup`
       *
       * ```ts
       *   this.form.get('name');
       * ```
       *
       * ### Access individual controls in the group
       *
       * The following example uses the {@link AbstractControl#get get} method to access
       * individual controls within the group using dot syntax.
       *
       * ```ts
       *   this.form.get('name.first');
       * ```
       *
       * ### Register a nested `FormGroup`.
       *
       * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
       * and provides methods to retrieve the nested `FormGroup` and individual controls.
       *
       * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
        _inherits(_FormGroupName, _AbstractFormGroupDir2);

        var _super20 = _createSuper(_FormGroupName);

        function _FormGroupName(parent, validators, asyncValidators) {
          var _this33;

          _classCallCheck(this, _FormGroupName);

          _this33 = _super20.call(this);
          _this33._parent = parent;

          _this33._setValidators(validators);

          _this33._setAsyncValidators(asyncValidators);

          return _this33;
        }
        /** @internal */


        _createClass(_FormGroupName, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw groupParentException();
            }
          }
        }]);

        return _FormGroupName;
      }(_AbstractFormGroupDirective);

      _FormGroupName.ɵfac = function FormGroupName_Factory(t) {
        return new (t || _FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _FormGroupName.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FormGroupName,
        selectors: [["", "formGroupName", ""]],
        inputs: {
          name: ["formGroupName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _FormGroupName.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _FormGroupName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formGroupName']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormGroupName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formGroupName]',
            providers: [formGroupNameProvider]
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formGroupName']
          }]
        });
      })();

      var formArrayNameProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormArrayName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormArray` to a DOM element.
       *
       * This directive is designed to be used with a parent `FormGroupDirective` (selector:
       * `[formGroup]`).
       *
       * It accepts the string name of the nested `FormArray` you want to link, and
       * will look for a `FormArray` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Example
       *
       * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormArrayName = /*#__PURE__*/function (_ControlContainer5) {
        _inherits(_FormArrayName, _ControlContainer5);

        var _super21 = _createSuper(_FormArrayName);

        function _FormArrayName(parent, validators, asyncValidators) {
          var _this34;

          _classCallCheck(this, _FormArrayName);

          _this34 = _super21.call(this);
          _this34._parent = parent;

          _this34._setValidators(validators);

          _this34._setAsyncValidators(asyncValidators);

          return _this34;
        }
        /**
         * A lifecycle method called when the directive's inputs are initialized. For internal use only.
         * @throws If the directive does not have a valid parent.
         * @nodoc
         */


        _createClass(_FormArrayName, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkParentType();

            this.formDirective.addFormArray(this);
          }
          /**
           * A lifecycle method called before the directive's instance is destroyed. For internal use only.
           * @nodoc
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeFormArray(this);
            }
          }
          /**
           * @description
           * The `FormArray` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormArray(this);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw arrayParentException();
            }
          }
        }]);

        return _FormArrayName;
      }(_ControlContainer);

      _FormArrayName.ɵfac = function FormArrayName_Factory(t) {
        return new (t || _FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _FormArrayName.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FormArrayName,
        selectors: [["", "formArrayName", ""]],
        inputs: {
          name: ["formArrayName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _FormArrayName.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _FormArrayName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formArrayName']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormArrayName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formArrayName]',
            providers: [formArrayNameProvider]
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formArrayName']
          }]
        });
      })();

      function _hasInvalidParent(parent) {
        return !(parent instanceof _FormGroupName) && !(parent instanceof _FormGroupDirective) && !(parent instanceof _FormArrayName);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var controlNameBinding = {
        provide: _NgControl,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormControlName;
        })
      };
      /**
       * @description
       * Syncs a `FormControl` in an existing `FormGroup` to a form control
       * element by name.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Register `FormControl` within a group
       *
       * The following example shows how to register multiple form controls within a form group
       * and set their value.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * To see `formControlName` examples with different form control types, see:
       *
       * * Radio buttons: `RadioControlValueAccessor`
       * * Selects: `SelectControlValueAccessor`
       *
       * ### Use with ngModel is deprecated
       *
       * Support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives has been deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       *
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormControlName = /*#__PURE__*/function (_NgControl4) {
        _inherits(_FormControlName, _NgControl4);

        var _super22 = _createSuper(_FormControlName);

        function _FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this35;

          _classCallCheck(this, _FormControlName);

          _this35 = _super22.call(this);
          _this35._ngModelWarningConfig = _ngModelWarningConfig;
          _this35._added = false;
          /** @deprecated as of v6 */

          _this35.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular FormControlName instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this35._ngModelWarningSent = false;
          _this35._parent = parent;

          _this35._setValidators(validators);

          _this35._setAsyncValidators(asyncValidators);

          _this35.valueAccessor = selectValueAccessor(_assertThisInitialized(_this35), valueAccessors);
          return _this35;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(_FormControlName, [{
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              console.warn(disabledAttrWarning);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._added) this._setUpControl();

            if (isPropertyUpdated(changes, this.viewModel)) {
              if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControlName', _FormControlName, this, this._ngModelWarningConfig);
              }

              this.viewModel = this.model;
              this.formDirective.updateModel(this, this.model);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeControl(this);
            }
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof _FormGroupName) && this._parent instanceof _AbstractFormGroupDirective) {
                throw ngModelGroupException();
              } else if (!(this._parent instanceof _FormGroupName) && !(this._parent instanceof _FormGroupDirective) && !(this._parent instanceof _FormArrayName)) {
                throw controlParentException();
              }
            }
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._checkParentType();

            this.control = this.formDirective.addControl(this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this._added = true;
          }
        }]);

        return _FormControlName;
      }(_NgControl);

      _FormControlName.ɵfac = function FormControlName_Factory(t) {
        return new (t || _FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      _FormControlName.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FormControlName,
        selectors: [["", "formControlName", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          name: ["formControlName", "name"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */

      _FormControlName._ngModelWarningSentOnce = false;

      _FormControlName.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      _FormControlName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formControlName']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormControlName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formControlName]',
            providers: [controlNameBinding]
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['disabled']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formControlName']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _SelectControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString(id, value) {
        if (id == null) return "".concat(value);
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId(valueString) {
        return valueString.split(':')[0];
      }
      /**
       * @description
       * The `ControlValueAccessor` for writing select control values and listening to select control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using select controls in a reactive form
       *
       * The following examples show how to use a select control in a reactive form.
       *
       * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
       *
       * ### Using select controls in a template-driven form
       *
       * To use a select in a template-driven form, simply add an `ngModel` and a `name`
       * attribute to the main `<select>` tag.
       *
       * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
       *
       * ### Customizing option selection
       *
       * Angular uses object identity to select option. It's possible for the identities of items
       * to change while the data does not. This can happen, for example, if the items are produced
       * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
       * second response will produce objects with different identities.
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
       * If `compareWith` is given, Angular selects option by the return value of the function.
       *
       * ```ts
       * const selectedCountriesControl = new FormControl();
       * ```
       *
       * ```
       * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
       *     <option *ngFor="let country of countries" [ngValue]="country">
       *         {{country.name}}
       *     </option>
       * </select>
       *
       * compareFn(c1: Country, c2: Country): boolean {
       *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
       * }
       * ```
       *
       * **Note:** We listen to the 'change' event because 'input' events aren't fired
       * for selects in IE, see:
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event#browser_compatibility
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _SelectControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA5) {
        _inherits(_SelectControlValueAccessor, _BuiltInControlValueA5);

        var _super23 = _createSuper(_SelectControlValueAccessor);

        function _SelectControlValueAccessor() {
          var _this36;

          _classCallCheck(this, _SelectControlValueAccessor);

          _this36 = _super23.apply(this, arguments);
          /** @internal */

          _this36._optionMap = new Map();
          /** @internal */

          _this36._idCounter = 0;
          _this36._compareWith = Object.is;
          return _this36;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(_SelectControlValueAccessor, [{
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
          /**
           * Sets the "value" property on the input element. The "selectedIndex"
           * property is also set if an ID is provided on the option element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            var id = this._getOptionId(value);

            if (id == null) {
              this.setProperty('selectedIndex', -1);
            }

            var valueString = _buildValueString(id, value);

            this.setProperty('value', valueString);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this37 = this;

            this.onChange = function (valueString) {
              _this37.value = _this37._getOptionValue(valueString);
              fn(_this37.value);
            };
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption() {
            return (this._idCounter++).toString();
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i4 = 0, _Array$from = Array.from(this._optionMap.keys()); _i4 < _Array$from.length; _i4++) {
              var id = _Array$from[_i4];
              if (this._compareWith(this._optionMap.get(id), value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
          }
        }]);

        return _SelectControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _SelectControlValueAccessor.ɵfac = /*@__PURE__*/function () {
        var ɵSelectControlValueAccessor_BaseFactory;
        return function SelectControlValueAccessor_Factory(t) {
          return (ɵSelectControlValueAccessor_BaseFactory || (ɵSelectControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
        };
      }();

      _SelectControlValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _SelectControlValueAccessor,
        selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
        hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _SelectControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_SelectControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_VALUE_ACCESSOR]
          }]
        }], null, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _NgSelectOption = /*#__PURE__*/function () {
        function _NgSelectOption(_element, _renderer, _select) {
          _classCallCheck(this, _NgSelectOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;
          if (this._select) this.id = this._select._registerOption();
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(_NgSelectOption, [{
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;

            this._select._optionMap.set(this.id, value);

            this._setElementValue(_buildValueString(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            this._setElementValue(value);

            if (this._select) this._select.writeValue(this._select.value);
          }
          /** @internal */

        }, {
          key: "_setElementValue",
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }]);

        return _NgSelectOption;
      }();

      _NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
        return new (t || _NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SelectControlValueAccessor, 9));
      };

      _NgSelectOption.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgSelectOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      _NgSelectOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }];
      };

      _NgSelectOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['value']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _SelectControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _SelectMultipleControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString$1(id, value) {
        if (id == null) return "".concat(value);
        if (typeof value === 'string') value = "'".concat(value, "'");
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId$1(valueString) {
        return valueString.split(':')[0];
      }
      /** Mock interface for HTMLCollection */


      var HTMLCollection = /*#__PURE__*/_createClass(function HTMLCollection() {
        _classCallCheck(this, HTMLCollection);
      });
      /**
       * @description
       * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
       * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using a multi-select control
       *
       * The follow example shows you how to use a multi-select control with a reactive form.
       *
       * ```ts
       * const countryControl = new FormControl();
       * ```
       *
       * ```
       * <select multiple name="countries" [formControl]="countryControl">
       *   <option *ngFor="let country of countries" [ngValue]="country">
       *     {{ country.name }}
       *   </option>
       * </select>
       * ```
       *
       * ### Customizing option selection
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * See the `SelectControlValueAccessor` for usage.
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _SelectMultipleControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA6) {
        _inherits(_SelectMultipleControlValueAccessor, _BuiltInControlValueA6);

        var _super24 = _createSuper(_SelectMultipleControlValueAccessor);

        function _SelectMultipleControlValueAccessor() {
          var _this38;

          _classCallCheck(this, _SelectMultipleControlValueAccessor);

          _this38 = _super24.apply(this, arguments);
          /** @internal */

          _this38._optionMap = new Map();
          /** @internal */

          _this38._idCounter = 0;
          _this38._compareWith = Object.is;
          return _this38;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(_SelectMultipleControlValueAccessor, [{
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
          /**
           * Sets the "value" property on one or of more of the select's options.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this39 = this;

            this.value = value;
            var optionSelectedStateSetter;

            if (Array.isArray(value)) {
              // convert values to ids
              var ids = value.map(function (v) {
                return _this39._getOptionId(v);
              });

              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
              };
            } else {
              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(false);
              };
            }

            this._optionMap.forEach(optionSelectedStateSetter);
          }
          /**
           * Registers a function called when the control value changes
           * and writes an array of the selected options.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this40 = this;

            this.onChange = function (_) {
              var selected = [];

              if (_.selectedOptions !== undefined) {
                var options = _.selectedOptions;

                for (var i = 0; i < options.length; i++) {
                  var opt = options.item(i);

                  var val = _this40._getOptionValue(opt.value);

                  selected.push(val);
                }
              } // Degrade on IE
              else {
                var _options2 = _.options;

                for (var _i5 = 0; _i5 < _options2.length; _i5++) {
                  var _opt = _options2.item(_i5);

                  if (_opt.selected) {
                    var _val = _this40._getOptionValue(_opt.value);

                    selected.push(_val);
                  }
                }
              }

              _this40.value = selected;
              fn(selected);
            };
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption(value) {
            var id = (this._idCounter++).toString();

            this._optionMap.set(id, value);

            return id;
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i6 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i6 < _Array$from2.length; _i6++) {
              var id = _Array$from2[_i6];
              if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId$1(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
          }
        }]);

        return _SelectMultipleControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _SelectMultipleControlValueAccessor.ɵfac = /*@__PURE__*/function () {
        var ɵSelectMultipleControlValueAccessor_BaseFactory;
        return function SelectMultipleControlValueAccessor_Factory(t) {
          return (ɵSelectMultipleControlValueAccessor_BaseFactory || (ɵSelectMultipleControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
        };
      }();

      _SelectMultipleControlValueAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _SelectMultipleControlValueAccessor,
        selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
        hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target);
            })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _SelectMultipleControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_SelectMultipleControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: {
              '(change)': 'onChange($event.target)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
          }]
        }], null, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectMultipleControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _ɵNgSelectMultipleOption = /*#__PURE__*/function () {
        function _ɵNgSelectMultipleOption(_element, _renderer, _select) {
          _classCallCheck(this, _ɵNgSelectMultipleOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;

          if (this._select) {
            this.id = this._select._registerOption(this);
          }
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(_ɵNgSelectMultipleOption, [{
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            if (this._select) {
              this._value = value;

              this._setElementValue(_buildValueString$1(this.id, value));

              this._select.writeValue(this._select.value);
            } else {
              this._setElementValue(value);
            }
          }
          /** @internal */

        }, {
          key: "_setElementValue",
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @internal */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }]);

        return _ɵNgSelectMultipleOption;
      }();

      _ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
        return new (t || _ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SelectMultipleControlValueAccessor, 9));
      };

      _ɵNgSelectMultipleOption.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ɵNgSelectMultipleOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      _ɵNgSelectMultipleOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }];
      };

      _ɵNgSelectMultipleOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['value']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ɵNgSelectMultipleOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _SelectMultipleControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Method that updates string to integer if not alread a number
       *
       * @param value The value to convert to integer
       * @returns value of parameter in number or integer.
       */


      function toNumber(value) {
        return typeof value === 'number' ? value : parseInt(value, 10);
      }
      /**
       * A base class for Validator-based Directives. The class contains common logic shared across such
       * Directives.
       *
       * For internal use only, this class is not intended for use outside of the Forms package.
       */


      var AbstractValidatorDirective = /*#__PURE__*/function () {
        function AbstractValidatorDirective() {
          _classCallCheck(this, AbstractValidatorDirective);

          this._validator = _nullValidator;
        }
        /**
         * Helper function invoked from child classes to process changes (from `ngOnChanges` hook).
         * @nodoc
         */


        _createClass(AbstractValidatorDirective, [{
          key: "handleChanges",
          value: function handleChanges(changes) {
            if (this.inputName in changes) {
              var input = this.normalizeInput(changes[this.inputName].currentValue);
              this._validator = this.createValidator(input);

              if (this._onChange) {
                this._onChange();
              }
            }
          }
          /** @nodoc */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /** @nodoc */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return AbstractValidatorDirective;
      }();

      AbstractValidatorDirective.ɵfac = function AbstractValidatorDirective_Factory(t) {
        return new (t || AbstractValidatorDirective)();
      };

      AbstractValidatorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractValidatorDirective
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractValidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MaxValidator;
        }),
        multi: true
      };
      /**
       * A directive which installs the {@link MaxValidator} for any `formControlName`,
       * `formControl`, or control with `ngModel` that also has a `max` attribute.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a max validator
       *
       * The following example shows how to add a max validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input type="number" ngModel max="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MaxValidator = /*#__PURE__*/function (_AbstractValidatorDir) {
        _inherits(_MaxValidator, _AbstractValidatorDir);

        var _super25 = _createSuper(_MaxValidator);

        function _MaxValidator() {
          var _this41;

          _classCallCheck(this, _MaxValidator);

          _this41 = _super25.apply(this, arguments);
          /** @internal */

          _this41.inputName = 'max';
          /** @internal */

          _this41.normalizeInput = function (input) {
            return parseFloat(input);
          };
          /** @internal */


          _this41.createValidator = function (max) {
            return maxValidator(max);
          };

          return _this41;
        }
        /**
         * Declare `ngOnChanges` lifecycle hook at the main directive level (vs keeping it in base class)
         * to avoid differences in handling inheritance of lifecycle hooks between Ivy and ViewEngine in
         * AOT mode. This could be refactored once ViewEngine is removed.
         * @nodoc
         */


        _createClass(_MaxValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.handleChanges(changes);
          }
        }]);

        return _MaxValidator;
      }(AbstractValidatorDirective);

      _MaxValidator.ɵfac = /*@__PURE__*/function () {
        var ɵMaxValidator_BaseFactory;
        return function MaxValidator_Factory(t) {
          return (ɵMaxValidator_BaseFactory || (ɵMaxValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MaxValidator)))(t || _MaxValidator);
        };
      }();

      _MaxValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MaxValidator,
        selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            var tmp_b_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("max", (tmp_b_0 = ctx.max) !== null && tmp_b_0 !== undefined ? tmp_b_0 : null);
          }
        },
        inputs: {
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _MaxValidator.propDecorators = {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MaxValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]',
            providers: [MAX_VALIDATOR],
            host: {
              '[attr.max]': 'max ?? null'
            }
          }]
        }], null, {
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MinValidator;
        }),
        multi: true
      };
      /**
       * A directive which installs the {@link MinValidator} for any `formControlName`,
       * `formControl`, or control with `ngModel` that also has a `min` attribute.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a min validator
       *
       * The following example shows how to add a min validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input type="number" ngModel min="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MinValidator = /*#__PURE__*/function (_AbstractValidatorDir2) {
        _inherits(_MinValidator, _AbstractValidatorDir2);

        var _super26 = _createSuper(_MinValidator);

        function _MinValidator() {
          var _this42;

          _classCallCheck(this, _MinValidator);

          _this42 = _super26.apply(this, arguments);
          /** @internal */

          _this42.inputName = 'min';
          /** @internal */

          _this42.normalizeInput = function (input) {
            return parseFloat(input);
          };
          /** @internal */


          _this42.createValidator = function (min) {
            return minValidator(min);
          };

          return _this42;
        }
        /**
         * Declare `ngOnChanges` lifecycle hook at the main directive level (vs keeping it in base class)
         * to avoid differences in handling inheritance of lifecycle hooks between Ivy and ViewEngine in
         * AOT mode. This could be refactored once ViewEngine is removed.
         * @nodoc
         */


        _createClass(_MinValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.handleChanges(changes);
          }
        }]);

        return _MinValidator;
      }(AbstractValidatorDirective);

      _MinValidator.ɵfac = /*@__PURE__*/function () {
        var ɵMinValidator_BaseFactory;
        return function MinValidator_Factory(t) {
          return (ɵMinValidator_BaseFactory || (ɵMinValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MinValidator)))(t || _MinValidator);
        };
      }();

      _MinValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MinValidator,
        selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            var tmp_b_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("min", (tmp_b_0 = ctx.min) !== null && tmp_b_0 !== undefined ? tmp_b_0 : null);
          }
        },
        inputs: {
          min: "min"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _MinValidator.propDecorators = {
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MinValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]',
            providers: [MIN_VALIDATOR],
            host: {
              '[attr.min]': 'min ?? null'
            }
          }]
        }], null, {
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var REQUIRED_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _RequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */

      var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _CheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds the `required` validator to any controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required validator using template-driven forms
       *
       * ```
       * <input name="fullName" ngModel required>
       * ```
       *
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _RequiredValidator = /*#__PURE__*/function () {
        function _RequiredValidator() {
          _classCallCheck(this, _RequiredValidator);

          this._required = false;
        }
        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */


        _createClass(_RequiredValidator, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = value != null && value !== false && "".concat(value) !== 'false';
            if (this._onChange) this._onChange();
          }
          /**
           * Method that validates whether the control is empty.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.required ? requiredValidator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return _RequiredValidator;
      }();

      _RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
        return new (t || _RequiredValidator)();
      };

      _RequiredValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _RequiredValidator,
        selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
        hostVars: 1,
        hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        inputs: {
          required: "required"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
      });
      _RequiredValidator.propDecorators = {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_RequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], function () {
          return [];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * A Directive that adds the `required` validator to checkbox controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required checkbox validator using template-driven forms
       *
       * The following example shows how to add a checkbox required validator to an input attached to an
       * ngModel binding.
       *
       * ```
       * <input type="checkbox" name="active" ngModel required>
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */


      var _CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator2) {
        _inherits(_CheckboxRequiredValidator, _RequiredValidator2);

        var _super27 = _createSuper(_CheckboxRequiredValidator);

        function _CheckboxRequiredValidator() {
          _classCallCheck(this, _CheckboxRequiredValidator);

          return _super27.apply(this, arguments);
        }

        _createClass(_CheckboxRequiredValidator, [{
          key: "validate",
          value:
          /**
           * Method that validates whether or not the checkbox has been checked.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          function validate(control) {
            return this.required ? requiredTrueValidator(control) : null;
          }
        }]);

        return _CheckboxRequiredValidator;
      }(_RequiredValidator);

      _CheckboxRequiredValidator.ɵfac = /*@__PURE__*/function () {
        var ɵCheckboxRequiredValidator_BaseFactory;
        return function CheckboxRequiredValidator_Factory(t) {
          return (ɵCheckboxRequiredValidator_BaseFactory || (ɵCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
        };
      }();

      _CheckboxRequiredValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CheckboxRequiredValidator,
        selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], null, null);
      })();
      /**
       * @description
       * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var EMAIL_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _EmailValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds the `email` validator to controls marked with the
       * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding an email validator
       *
       * The following example shows how to add an email validator to an input attached to an ngModel
       * binding.
       *
       * ```
       * <input type="email" name="email" ngModel email>
       * <input type="email" name="email" ngModel email="true">
       * <input type="email" name="email" ngModel [email]="true">
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */

      var _EmailValidator = /*#__PURE__*/function () {
        function _EmailValidator() {
          _classCallCheck(this, _EmailValidator);

          this._enabled = false;
        }
        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */


        _createClass(_EmailValidator, [{
          key: "email",
          set: function set(value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange) this._onChange();
          }
          /**
           * Method that validates whether an email address is valid.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._enabled ? emailValidator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return _EmailValidator;
      }();

      _EmailValidator.ɵfac = function EmailValidator_Factory(t) {
        return new (t || _EmailValidator)();
      };

      _EmailValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _EmailValidator,
        selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
        inputs: {
          email: "email"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      _EmailValidator.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], function () {
          return [];
        }, {
          email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_LENGTH_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MinLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds minimum length validation to controls marked with the
       * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a minimum length validator
       *
       * The following example shows how to add a minimum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel minlength="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MinLengthValidator = /*#__PURE__*/function () {
        function _MinLengthValidator() {
          _classCallCheck(this, _MinLengthValidator);

          this._validator = _nullValidator;
        }
        /** @nodoc */


        _createClass(_MinLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('minlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value meets a minimum length requirement.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.enabled() ? this._validator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = this.enabled() ? minLengthValidator(toNumber(this.minlength)) : _nullValidator;
          }
          /** @nodoc */

        }, {
          key: "enabled",
          value: function enabled() {
            return this.minlength != null
            /* both `null` and `undefined` */
            ;
          }
        }]);

        return _MinLengthValidator;
      }();

      _MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
        return new (t || _MinLengthValidator)();
      };

      _MinLengthValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MinLengthValidator,
        selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("minlength", ctx.enabled() ? ctx.minlength : null);
          }
        },
        inputs: {
          minlength: "minlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _MinLengthValidator.propDecorators = {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MinLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: {
              '[attr.minlength]': 'enabled() ? minlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          minlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_LENGTH_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MaxLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds max length validation to controls marked with the
       * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a maximum length validator
       *
       * The following example shows how to add a maximum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel maxlength="25">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MaxLengthValidator = /*#__PURE__*/function () {
        function _MaxLengthValidator() {
          _classCallCheck(this, _MaxLengthValidator);

          this._validator = _nullValidator;
        }
        /** @nodoc */


        _createClass(_MaxLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('maxlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value exceeds the maximum length requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.enabled() ? this._validator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = this.enabled() ? maxLengthValidator(toNumber(this.maxlength)) : _nullValidator;
          }
          /** @nodoc */

        }, {
          key: "enabled",
          value: function enabled() {
            return this.maxlength != null
            /* both `null` and `undefined` */
            ;
          }
        }]);

        return _MaxLengthValidator;
      }();

      _MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
        return new (t || _MaxLengthValidator)();
      };

      _MaxLengthValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MaxLengthValidator,
        selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.enabled() ? ctx.maxlength : null);
          }
        },
        inputs: {
          maxlength: "maxlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _MaxLengthValidator.propDecorators = {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MaxLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: {
              '[attr.maxlength]': 'enabled() ? maxlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          maxlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var PATTERN_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _PatternValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds regex pattern validation to controls marked with the
       * `pattern` attribute. The regex must match the entire control value.
       * The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a pattern validator
       *
       * The following example shows how to add a pattern validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _PatternValidator = /*#__PURE__*/function () {
        function _PatternValidator() {
          _classCallCheck(this, _PatternValidator);

          this._validator = _nullValidator;
        }
        /** @nodoc */


        _createClass(_PatternValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('pattern' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value matches the pattern requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = patternValidator(this.pattern);
          }
        }]);

        return _PatternValidator;
      }();

      _PatternValidator.ɵfac = function PatternValidator_Factory(t) {
        return new (t || _PatternValidator)();
      };

      _PatternValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _PatternValidator,
        selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function PatternValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
          }
        },
        inputs: {
          pattern: "pattern"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _PatternValidator.propDecorators = {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_PatternValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: {
              '[attr.pattern]': 'pattern ? pattern : null'
            }
          }]
        }], function () {
          return [];
        }, {
          pattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SHARED_FORM_DIRECTIVES = [_ɵNgNoValidate, _NgSelectOption, _ɵNgSelectMultipleOption, _DefaultValueAccessor, _NumberValueAccessor, _RangeValueAccessor, _CheckboxControlValueAccessor, _SelectControlValueAccessor, _SelectMultipleControlValueAccessor, _RadioControlValueAccessor, _NgControlStatus, _NgControlStatusGroup, _RequiredValidator, _MinLengthValidator, _MaxLengthValidator, _PatternValidator, _CheckboxRequiredValidator, _EmailValidator, _MinValidator, _MaxValidator];
      var TEMPLATE_DRIVEN_DIRECTIVES = [_NgModel, _NgModelGroup, _NgForm];
      var REACTIVE_DRIVEN_DIRECTIVES = [_FormControlDirective, _FormGroupDirective, _FormControlName, _FormGroupName, _FormArrayName];
      /**
       * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
       */

      var _ɵInternalFormsSharedModule = /*#__PURE__*/_createClass(function _ɵInternalFormsSharedModule() {
        _classCallCheck(this, _ɵInternalFormsSharedModule);
      });

      _ɵInternalFormsSharedModule.ɵfac = function ɵInternalFormsSharedModule_Factory(t) {
        return new (t || _ɵInternalFormsSharedModule)();
      };

      _ɵInternalFormsSharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ɵInternalFormsSharedModule
      });
      _ɵInternalFormsSharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[RadioControlRegistryModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ɵInternalFormsSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: SHARED_FORM_DIRECTIVES,
            imports: [RadioControlRegistryModule],
            exports: SHARED_FORM_DIRECTIVES
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ɵInternalFormsSharedModule, {
          declarations: [_ɵNgNoValidate, _NgSelectOption, _ɵNgSelectMultipleOption, _DefaultValueAccessor, _NumberValueAccessor, _RangeValueAccessor, _CheckboxControlValueAccessor, _SelectControlValueAccessor, _SelectMultipleControlValueAccessor, _RadioControlValueAccessor, _NgControlStatus, _NgControlStatusGroup, _RequiredValidator, _MinLengthValidator, _MaxLengthValidator, _PatternValidator, _CheckboxRequiredValidator, _EmailValidator, _MinValidator, _MaxValidator],
          imports: [RadioControlRegistryModule],
          exports: [_ɵNgNoValidate, _NgSelectOption, _ɵNgSelectMultipleOption, _DefaultValueAccessor, _NumberValueAccessor, _RangeValueAccessor, _CheckboxControlValueAccessor, _SelectControlValueAccessor, _SelectMultipleControlValueAccessor, _RadioControlValueAccessor, _NgControlStatus, _NgControlStatusGroup, _RequiredValidator, _MinLengthValidator, _MaxLengthValidator, _PatternValidator, _CheckboxRequiredValidator, _EmailValidator, _MinValidator, _MaxValidator]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Exports the required providers and directives for template-driven forms,
       * making them available for import by NgModules that import this module.
       *
       * Providers associated with this module:
       * * `RadioControlRegistry`
       *
       * @see [Forms Overview](/guide/forms-overview)
       * @see [Template-driven Forms Guide](/guide/forms)
       *
       * @publicApi
       */


      var _FormsModule = /*#__PURE__*/_createClass(function _FormsModule() {
        _classCallCheck(this, _FormsModule);
      });

      _FormsModule.ɵfac = function FormsModule_Factory(t) {
        return new (t || _FormsModule)();
      };

      _FormsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _FormsModule
      });
      _FormsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            exports: [_ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_FormsModule, {
          declarations: [_NgModel, _NgModelGroup, _NgForm],
          exports: [_ɵInternalFormsSharedModule, _NgModel, _NgModelGroup, _NgForm]
        });
      })();
      /**
       * Exports the required infrastructure and directives for reactive forms,
       * making them available for import by NgModules that import this module.
       *
       * Providers associated with this module:
       * * `FormBuilder`
       * * `RadioControlRegistry`
       *
       * @see [Forms Overview](guide/forms-overview)
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @publicApi
       */


      var _ReactiveFormsModule = /*#__PURE__*/function () {
        function _ReactiveFormsModule() {
          _classCallCheck(this, _ReactiveFormsModule);
        }

        _createClass(_ReactiveFormsModule, null, [{
          key: "withConfig",
          value:
          /**
           * @description
           * Provides options for configuring the reactive forms module.
           *
           * @param opts An object of configuration options
           * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
           * binding is used with reactive form directives.
           */
          function withConfig(opts) {
            return {
              ngModule: _ReactiveFormsModule,
              providers: [{
                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                useValue: opts.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return _ReactiveFormsModule;
      }();

      _ReactiveFormsModule.ɵfac = function ReactiveFormsModule_Factory(t) {
        return new (t || _ReactiveFormsModule)();
      };

      _ReactiveFormsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ReactiveFormsModule
      });
      _ReactiveFormsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ReactiveFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            exports: [_ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ReactiveFormsModule, {
          declarations: [_FormControlDirective, _FormGroupDirective, _FormControlName, _FormGroupName, _FormArrayName],
          exports: [_ɵInternalFormsSharedModule, _FormControlDirective, _FormGroupDirective, _FormControlName, _FormGroupName, _FormArrayName]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isAbstractControlOptions(options) {
        return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
      }
      /**
       * @description
       * Creates an `AbstractControl` from a user-specified configuration.
       *
       * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
       * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
       * forms.
       *
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       *
       * @publicApi
       */


      var _FormBuilder = /*#__PURE__*/function () {
        function _FormBuilder() {
          _classCallCheck(this, _FormBuilder);
        }

        _createClass(_FormBuilder, [{
          key: "group",
          value: function group(controlsConfig) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var controls = this._reduceControls(controlsConfig);

            var validators = null;
            var asyncValidators = null;
            var updateOn = undefined;

            if (options != null) {
              if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
              } else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
              }
            }

            return new _FormGroup(controls, {
              asyncValidators: asyncValidators,
              updateOn: updateOn,
              validators: validators
            });
          }
          /**
           * @description
           * Construct a new `FormControl` with the given state, validators and options.
           *
           * @param formState Initializes the control with an initial state value, or
           * with an object that contains both a value and a disabled status.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           *
           * @usageNotes
           *
           * ### Initialize a control as disabled
           *
           * The following example returns a control with an initial value in a disabled state.
           *
           * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
           * </code-example>
           */

        }, {
          key: "control",
          value: function control(formState, validatorOrOpts, asyncValidator) {
            return new _FormControl(formState, validatorOrOpts, asyncValidator);
          }
          /**
           * Constructs a new `FormArray` from the given array of configurations,
           * validators and options.
           *
           * @param controlsConfig An array of child controls or control configs. Each
           * child control is given an index when it is registered.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           */

        }, {
          key: "array",
          value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
            var _this43 = this;

            var controls = controlsConfig.map(function (c) {
              return _this43._createControl(c);
            });
            return new _FormArray(controls, validatorOrOpts, asyncValidator);
          }
          /** @internal */

        }, {
          key: "_reduceControls",
          value: function _reduceControls(controlsConfig) {
            var _this44 = this;

            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
              controls[controlName] = _this44._createControl(controlsConfig[controlName]);
            });
            return controls;
          }
          /** @internal */

        }, {
          key: "_createControl",
          value: function _createControl(controlConfig) {
            if (controlConfig instanceof _FormControl || controlConfig instanceof _FormGroup || controlConfig instanceof _FormArray) {
              return controlConfig;
            } else if (Array.isArray(controlConfig)) {
              var value = controlConfig[0];
              var validator = controlConfig.length > 1 ? controlConfig[1] : null;
              var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
              return this.control(value, validator, asyncValidator);
            } else {
              return this.control(controlConfig);
            }
          }
        }]);

        return _FormBuilder;
      }();

      _FormBuilder.ɵfac = function FormBuilder_Factory(t) {
        return new (t || _FormBuilder)();
      };

      _FormBuilder.ɵprov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FormBuilder_Factory() {
          return new _FormBuilder();
        },
        token: _FormBuilder,
        providedIn: _ReactiveFormsModule
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: _ReactiveFormsModule
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @publicApi
       */


      var _VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('12.2.15');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This file only reexports content of the `src` folder. Keep it that way.

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    67751:
    /*!***************************************************!*\
      !*** ./src/app/routes/sudoku/components/index.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SolveComponent": function SolveComponent() {
          return (
            /* reexport safe */
            _solve_component__WEBPACK_IMPORTED_MODULE_0__.SolveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _solve_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./solve.component */
      40839);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    40839:
    /*!*************************************************************!*\
      !*** ./src/app/routes/sudoku/components/solve.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SolveComponent": function SolveComponent() {
          return (
            /* binding */
            _SolveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @donmahallem/sudoku */
      18939);
      /* harmony import */


      var _modules_sudoku_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modules/sudoku-board */
      19330);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services */
      75041);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      19946);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      65590);
      /* harmony import */


      var _modules_sudoku_board_component_sudoku_field_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../modules/sudoku-board/component/sudoku-field.directive */
      68012);

      var _SolveComponent = /*#__PURE__*/function () {
        function _SolveComponent(solverService, activatedRoute) {
          var _this45 = this;

          _classCallCheck(this, _SolveComponent);

          this.solverService = solverService;
          this.activatedRoute = activatedRoute;
          this.boxSize = 3;
          this.activatedRoute.params.subscribe(function (params) {
            _this45.boxSize = Math.sqrt(parseInt(params.sudokuSize, 10));
            console.log('new board size', _this45.boxSize);
          });
        }

        _createClass(_SolveComponent, [{
          key: "onClear",
          value: function onClear() {
            this.sudokuComponent.clear();
          }
        }, {
          key: "onSolve",
          value: function onSolve() {
            var solutions = (0, _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__.knuthSolveNum)(this.sudokuComponent.getBoard(), Math.pow(this.boxSize, 2), this.boxSize, 5);

            if (solutions.length > 0) {
              this.sudokuComponent.field = solutions[0];
            }

            this.solverService.solve(this.sudokuComponent.getBoard(), Math.pow(this.boxSize, 2), this.boxSize, 5).then(console.log)["catch"](console.error);
          }
        }, {
          key: "onFieldChange",
          value: function onFieldChange(sudokuField) {}
        }]);

        return _SolveComponent;
      }();

      _SolveComponent.ɵfac = function SolveComponent_Factory(t) {
        return new (t || _SolveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.SudokuSolverService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };

      _SolveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SolveComponent,
        selectors: [["app-solve"]],
        viewQuery: function SolveComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_modules_sudoku_board__WEBPACK_IMPORTED_MODULE_1__.SudokuFieldComponent, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sudokuComponent = _t.first);
          }
        },
        decls: 12,
        vars: 1,
        consts: [["color", "primary"], [1, "toolbar-spacer"], ["mat-icon-button", "", "aria-hidden", "false", "aria-label", "Example delete icon", 3, "click"], [1, "content"], ["appSudokuBoard", "", 3, "boxSize", "fieldChange"]],
        template: function SolveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Solve");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SolveComponent_Template_button_click_4_listener() {
              return ctx.onSolve();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "thumb_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SolveComponent_Template_button_click_7_listener() {
              return ctx.onClear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "canvas", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChange", function SolveComponent_Template_canvas_fieldChange_11_listener($event) {
              return ctx.onFieldChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("boxSize", ctx.boxSize);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _modules_sudoku_board_component_sudoku_field_directive__WEBPACK_IMPORTED_MODULE_3__.SudokuBoardDirective],
        styles: ["[_nghost-%COMP%] {\n  \n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   span.toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   div.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   div.content[_ngcontent-%COMP%]   app-sudoku-field[_ngcontent-%COMP%] {\n  width: min(calc(90vh - 128px), 90vw);\n  height: min(calc(90vh - 128px), 90vw);\n  margin: auto auto;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbHZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0k7Ozs7Ozs7Ozs7O0lBQUE7RUFZQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKO0FBR1E7RUFDSSxjQUFBO0FBRFo7QUFJSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZSO0FBR1E7RUFDSSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7QUF1QloiLCJmaWxlIjoic29sdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmllbGRfc2l6ZTogODA7XG4kbGF5b3V0LWJyZWFrOiA5MzBweDtcbjpob3N0IHtcbiAgICAvKlxuICAgIEBtZWRpYShvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6ICRsYXlvdXQtYnJlYWspe1xuICAgICAgICB3aWR0aDo4MHZoO1xuICAgICAgICBtaW4td2lkdGg6ICRsYXlvdXQtYnJlYWs7XG4gICAgICAgIG1hcmdpbjphdXRvIDA7XG4gICAgICAgIGhlaWdodDo4MHZoO1xuICAgICAgICBtaW4taGVpZ2h0OiAkbGF5b3V0LWJyZWFrO1xuICAgIH1cbiAgICBAbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiAoICRsYXlvdXQtYnJlYWsgLSAxICkpe1xuICAgICAgICB3aWR0aDoxMDB2aDtcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xuICAgIH0qL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF0LXRvb2xiYXIge1xuICAgICAgICBzcGFuLnRvb2xiYXItc3BhY2VyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdi5jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhcHAtc3Vkb2t1LWZpZWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiBtaW4oY2FsYyg5MHZoIC0gMTI4cHgpLCA5MHZ3KTtcbiAgICAgICAgICAgIGhlaWdodDogbWluKGNhbGMoOTB2aCAtIDEyOHB4KSwgOTB2dyk7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRsYXlvdXQtYnJlYWspIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6ICRsYXlvdXQtYnJlYWs7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZ3O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRsYXlvdXQtYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICggJGxheW91dC1icmVhayAtIDEgKSkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTB2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4taGVpZ2h0OiAkbGF5b3V0LWJyZWFrKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAkbGF5b3V0LWJyZWFrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzB2dztcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkbGF5b3V0LWJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6ICggJGxheW91dC1icmVhayAtIDEgKSkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzB2dztcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    28912:
    /*!***************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-benchmark/component/index.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuBenchmarkComponent": function SudokuBenchmarkComponent() {
          return (
            /* reexport safe */
            _sudoku_benchmark_component__WEBPACK_IMPORTED_MODULE_0__.SudokuBenchmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sudoku_benchmark_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sudoku-benchmark.component */
      78557);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    78557:
    /*!************************************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-benchmark/component/sudoku-benchmark.component.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuBenchmarkComponent": function SudokuBenchmarkComponent() {
          return (
            /* binding */
            _SudokuBenchmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      97217);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      59442);
      /* harmony import */


      var _sudoku_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../sudoku-board/component */
      14929);
      /* harmony import */


      var _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sudoku-benchmark-message */
      45839);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slider */
      61859);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/divider */
      19975);
      /* harmony import */


      var _sudoku_board_component_sudoku_field_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../sudoku-board/component/sudoku-field.directive */
      68012);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      60833);

      function SudokuBenchmarkComponent_mat_progress_bar_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 13);
        }
      }

      function SudokuBenchmarkComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SudokuBenchmarkComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r9.boardSize);
        }
      }

      function SudokuBenchmarkComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SudokuBenchmarkComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r10.time);
        }
      }

      function SudokuBenchmarkComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function SudokuBenchmarkComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r11.results);
        }
      }

      function SudokuBenchmarkComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 16);
        }
      }

      function SudokuBenchmarkComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 17);
        }
      }

      var _SudokuBenchmarkComponent = /*#__PURE__*/function () {
        function _SudokuBenchmarkComponent(zone) {
          _classCallCheck(this, _SudokuBenchmarkComponent);

          this.zone = zone;
          this.calculating = false;
          this.results = [];
          this.displayedColumns = ['boardSize', 'time', 'results'];
          this.sudokuBoardSize = 9;
        }

        _createClass(_SudokuBenchmarkComponent, [{
          key: "startTest",
          value: function startTest() {
            var _this46 = this;

            this.calculating = true;
            var obs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(function (sub) {
              var worker = new Worker(__webpack_require__.tu(new URL(
              /* worker import */
              __webpack_require__.p + __webpack_require__.u("benchmarkSudokuWorker"), __webpack_require__.b)), {
                name: 'benchmarkSudokuWorker',
                type: undefined
              });

              worker.onmessage = function (evt) {
                sub.next(evt.data);

                if (evt.data.type === _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkMessageType.RESULT) {
                  worker.terminate();
                  sub.complete();
                }
              };

              worker.postMessage(_this46.sudokuBoardSize);
              return function () {
                worker.terminate();
              };
            });
            this.subscription = obs.subscribe(function (msg) {
              if (msg.type === _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkMessageType.PROGRESS) {
                _this46.sudokuBoard.field = msg.board; // tslint:disable-next-line:no-console

                console.log(msg.results);
              } else if (msg.type === _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkMessageType.RESULT) {
                _this46.zone.run(function () {
                  _this46.results.push(msg);

                  _this46.resultTable.renderRows();
                });
              }
            }, function () {}, function () {
              _this46.calculating = false;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "onSizeSelected",
          value: function onSizeSelected(evt) {
            this.sudokuBoardSize = Math.pow(evt.value || 0, 2);
          }
        }]);

        return _SudokuBenchmarkComponent;
      }();

      _SudokuBenchmarkComponent.ɵfac = function SudokuBenchmarkComponent_Factory(t) {
        return new (t || _SudokuBenchmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
      };

      _SudokuBenchmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _SudokuBenchmarkComponent,
        selectors: [["app-sudoku-benchmark"]],
        viewQuery: function SudokuBenchmarkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_sudoku_board_component__WEBPACK_IMPORTED_MODULE_0__.SudokuBoardDirective, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sudokuBoard = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.resultTable = _t.first);
          }
        },
        decls: 25,
        vars: 7,
        consts: [[1, "size-select"], ["min", "1", "max", "6", "step", "1", "value", "2", "thumbLabel", "", "tickInterval", "1", 3, "disabled", "change", "input"], ["mode", "indeterminate", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["appSudokuBoard", ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "boardSize"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "time"], ["matColumnDef", "results"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function SudokuBenchmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Benchmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "This is a tool to test the solver performance in different environments.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-slider", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SudokuBenchmarkComponent_Template_mat_slider_change_7_listener($event) {
              return ctx.onSizeSelected($event);
            })("input", function SudokuBenchmarkComponent_Template_mat_slider_input_7_listener($event) {
              return ctx.onSizeSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SudokuBenchmarkComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SudokuBenchmarkComponent_Template_button_click_9_listener() {
              return ctx.startTest();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Calculate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "canvas", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SudokuBenchmarkComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SudokuBenchmarkComponent_td_16_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SudokuBenchmarkComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SudokuBenchmarkComponent_td_19_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SudokuBenchmarkComponent_th_21_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SudokuBenchmarkComponent_td_22_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SudokuBenchmarkComponent_tr_23_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SudokuBenchmarkComponent_tr_24_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Boardsize ", ctx.sudokuBoardSize, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.calculating);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.calculating);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.calculating);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.results);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSlider, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _sudoku_board_component_sudoku_field_directive__WEBPACK_IMPORTED_MODULE_2__.SudokuBoardDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90vw;\n  max-width: 640px;\n  margin: 0px auto;\n}\n[_nghost-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   div.size-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   div.size-select[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1ZG9rdS1iZW5jaG1hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0FBR1o7QUFBSTtFQUNJLFdBQUE7QUFFUiIsImZpbGUiOiJzdWRva3UtYmVuY2htYXJrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBtYXJnaW46MHB4IGF1dG87XG4gICAgbWF0LXByb2dyZXNzLWJhcntcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgZGl2LnNpemUtc2VsZWN0e1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hdC1zbGlkZXJ7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    63389:
    /*!*****************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-benchmark/index.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuBenchmarkModule": function SudokuBenchmarkModule() {
          return (
            /* reexport safe */
            _sudoku_benchmark_module__WEBPACK_IMPORTED_MODULE_0__.SudokuBenchmarkModule
          );
        },

        /* harmony export */
        "SudokuBenchmarkComponent": function SudokuBenchmarkComponent() {
          return (
            /* reexport safe */
            _component__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sudoku_benchmark_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sudoku-benchmark.module */
      2077);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component */
      28912);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    2077:
    /*!***********************************************************************************!*\
      !*** ./src/app/routes/sudoku/modules/sudoku-benchmark/sudoku-benchmark.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuBenchmarkModule": function SudokuBenchmarkModule() {
          return (
            /* binding */
            _SudokuBenchmarkModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      19975);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      60833);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slider */
      61859);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      97217);
      /* harmony import */


      var _sudoku_board_sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../sudoku-board/sudoku-field.module */
      61572);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./component */
      28912);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _SudokuBenchmarkModule = /*#__PURE__*/_createClass(function _SudokuBenchmarkModule() {
        _classCallCheck(this, _SudokuBenchmarkModule);
      });

      _SudokuBenchmarkModule.ɵfac = function SudokuBenchmarkModule_Factory(t) {
        return new (t || _SudokuBenchmarkModule)();
      };

      _SudokuBenchmarkModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _SudokuBenchmarkModule
      });
      _SudokuBenchmarkModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSliderModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _sudoku_board_sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_SudokuBenchmarkModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSliderModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _sudoku_board_sudoku_field_module__WEBPACK_IMPORTED_MODULE_0__.SudokuFieldModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkComponent]
        });
      })();
      /***/

    },

    /***/
    75041:
    /*!*************************************************!*\
      !*** ./src/app/routes/sudoku/services/index.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuSolverService": function SudokuSolverService() {
          return (
            /* reexport safe */
            _sudoku_solver_service__WEBPACK_IMPORTED_MODULE_0__.SudokuSolverService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _sudoku_solver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sudoku-solver.service */
      7978);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */

      /***/

    },

    /***/
    7978:
    /*!*****************************************************************!*\
      !*** ./src/app/routes/sudoku/services/sudoku-solver.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuSolverService": function SudokuSolverService() {
          return (
            /* binding */
            _SudokuSolverService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @donmahallem/sudoku */
      18939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SudokuSolverService = /*#__PURE__*/function () {
        function _SudokuSolverService() {
          _classCallCheck(this, _SudokuSolverService);
        }

        _createClass(_SudokuSolverService, [{
          key: "solve",
          value: function solve(board, boardSize, boxSize) {
            var solutions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            if (typeof Worker !== 'undefined') {
              // Create a new
              return new Promise(function (resolve) {
                var worker = new Worker(__webpack_require__.tu(new URL(
                /* worker import */
                __webpack_require__.p + __webpack_require__.u("solveSudokuWorker"), __webpack_require__.b)), {
                  name: 'solveSudokuWorker',
                  type: undefined
                });

                worker.onmessage = function (evt) {
                  resolve(evt.data);
                };

                worker.postMessage(board);
              });
            } else {
              return new Promise(function (resolve) {
                var results = (0, _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__.knuthSolveNum)(board, boardSize, boxSize, solutions);
                resolve(results);
              });
            }
          }
        }]);

        return _SudokuSolverService;
      }();

      _SudokuSolverService.ɵfac = function SudokuSolverService_Factory(t) {
        return new (t || _SudokuSolverService)();
      };

      _SudokuSolverService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SudokuSolverService,
        factory: _SudokuSolverService.ɵfac
      });
      /***/
    },

    /***/
    46992:
    /*!******************************************************!*\
      !*** ./src/app/routes/sudoku/sudoku-can-activate.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuCanActivateGuard": function SudokuCanActivateGuard() {
          return (
            /* binding */
            _SudokuCanActivateGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _SudokuCanActivateGuard = /*#__PURE__*/function () {
        function _SudokuCanActivateGuard(router) {
          _classCallCheck(this, _SudokuCanActivateGuard);

          this.router = router;
        }

        _createClass(_SudokuCanActivateGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if ('sudokuSize' in route.params) {
              var sudokuSizeParam = route.params.sudokuSize;
              var isNumber = /^[0-9]+$/.test(sudokuSizeParam);

              if (isNumber) {
                var sudokuSize = parseInt(sudokuSizeParam, 10);
                var boxSize = Math.sqrt(sudokuSize);

                if (sudokuSize >= 2 && sudokuSize <= 36) {
                  if (boxSize === Math.floor(boxSize)) {
                    return true;
                  }

                  return this.router.createUrlTree(['/sudoku', Math.pow(Math.floor(boxSize), 2)]);
                }
              }
            }

            return this.router.createUrlTree(['/sudoku']);
          }
        }]);

        return _SudokuCanActivateGuard;
      }();

      _SudokuCanActivateGuard.ɵfac = function SudokuCanActivateGuard_Factory(t) {
        return new (t || _SudokuCanActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _SudokuCanActivateGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SudokuCanActivateGuard,
        factory: _SudokuCanActivateGuard.ɵfac
      });
      /***/
    },

    /***/
    49983:
    /*!********************************************************!*\
      !*** ./src/app/routes/sudoku/sudoku-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuRoutingModule": function SudokuRoutingModule() {
          return (
            /* binding */
            _SudokuRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      67751);
      /* harmony import */


      var _modules_sudoku_benchmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules/sudoku-benchmark */
      63389);
      /* harmony import */


      var _sudoku_can_activate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sudoku-can-activate */
      46992);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var playRoutes = [{
        canActivate: [_sudoku_can_activate__WEBPACK_IMPORTED_MODULE_2__.SudokuCanActivateGuard],
        component: _components__WEBPACK_IMPORTED_MODULE_0__.SolveComponent,
        path: ''
      }, {
        component: _modules_sudoku_benchmark__WEBPACK_IMPORTED_MODULE_1__.SudokuBenchmarkComponent,
        path: 'benchmark'
      }, {
        canActivate: [_sudoku_can_activate__WEBPACK_IMPORTED_MODULE_2__.SudokuCanActivateGuard],
        component: _components__WEBPACK_IMPORTED_MODULE_0__.SolveComponent,
        path: ':sudokuSize'
      }, {
        path: '**',
        redirectTo: '/sudoku/'
      }];

      var _SudokuRoutingModule = /*#__PURE__*/_createClass(function _SudokuRoutingModule() {
        _classCallCheck(this, _SudokuRoutingModule);
      });

      _SudokuRoutingModule.ɵfac = function SudokuRoutingModule_Factory(t) {
        return new (t || _SudokuRoutingModule)();
      };

      _SudokuRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _SudokuRoutingModule
      });
      _SudokuRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(playRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_SudokuRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    57262:
    /*!************************************************!*\
      !*** ./src/app/routes/sudoku/sudoku.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SudokuModule": function SudokuModule() {
          return (
            /* binding */
            _SudokuModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      87317);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      65590);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      19946);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      67751);
      /* harmony import */


      var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules */
      61064);
      /* harmony import */


      var _modules_sudoku_benchmark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/sudoku-benchmark */
      63389);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services */
      75041);
      /* harmony import */


      var _sudoku_can_activate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sudoku-can-activate */
      46992);
      /* harmony import */


      var _sudoku_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sudoku-routing.module */
      49983);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */


      var _SudokuModule = /*#__PURE__*/_createClass(function _SudokuModule() {
        _classCallCheck(this, _SudokuModule);
      });

      _SudokuModule.ɵfac = function SudokuModule_Factory(t) {
        return new (t || _SudokuModule)();
      };

      _SudokuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _SudokuModule
      });
      _SudokuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [_services__WEBPACK_IMPORTED_MODULE_3__.SudokuSolverService, _sudoku_can_activate__WEBPACK_IMPORTED_MODULE_4__.SudokuCanActivateGuard],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _modules__WEBPACK_IMPORTED_MODULE_1__.SudokuFieldModule, _modules_sudoku_benchmark__WEBPACK_IMPORTED_MODULE_2__.SudokuBenchmarkModule, _sudoku_routing_module__WEBPACK_IMPORTED_MODULE_5__.SudokuRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_SudokuModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.SolveComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _modules__WEBPACK_IMPORTED_MODULE_1__.SudokuFieldModule, _modules_sudoku_benchmark__WEBPACK_IMPORTED_MODULE_2__.SudokuBenchmarkModule, _sudoku_routing_module__WEBPACK_IMPORTED_MODULE_5__.SudokuRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule]
        });
      })();
      /***/

    },

    /***/
    33865:
    /*!******************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/table.mjs ***!
      \******************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataSource": function DataSource() {
          return (
            /* reexport safe */
            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.DataSource
          );
        },

        /* harmony export */
        "BaseCdkCell": function BaseCdkCell() {
          return (
            /* binding */
            _BaseCdkCell
          );
        },

        /* harmony export */
        "BaseRowDef": function BaseRowDef() {
          return (
            /* binding */
            _BaseRowDef
          );
        },

        /* harmony export */
        "CDK_ROW_TEMPLATE": function CDK_ROW_TEMPLATE() {
          return (
            /* binding */
            _CDK_ROW_TEMPLATE
          );
        },

        /* harmony export */
        "CDK_TABLE": function CDK_TABLE() {
          return (
            /* binding */
            _CDK_TABLE
          );
        },

        /* harmony export */
        "CDK_TABLE_TEMPLATE": function CDK_TABLE_TEMPLATE() {
          return (
            /* binding */
            _CDK_TABLE_TEMPLATE
          );
        },

        /* harmony export */
        "CdkCell": function CdkCell() {
          return (
            /* binding */
            _CdkCell
          );
        },

        /* harmony export */
        "CdkCellDef": function CdkCellDef() {
          return (
            /* binding */
            _CdkCellDef
          );
        },

        /* harmony export */
        "CdkCellOutlet": function CdkCellOutlet() {
          return (
            /* binding */
            _CdkCellOutlet
          );
        },

        /* harmony export */
        "CdkColumnDef": function CdkColumnDef() {
          return (
            /* binding */
            _CdkColumnDef
          );
        },

        /* harmony export */
        "CdkFooterCell": function CdkFooterCell() {
          return (
            /* binding */
            _CdkFooterCell
          );
        },

        /* harmony export */
        "CdkFooterCellDef": function CdkFooterCellDef() {
          return (
            /* binding */
            _CdkFooterCellDef
          );
        },

        /* harmony export */
        "CdkFooterRow": function CdkFooterRow() {
          return (
            /* binding */
            _CdkFooterRow
          );
        },

        /* harmony export */
        "CdkFooterRowDef": function CdkFooterRowDef() {
          return (
            /* binding */
            _CdkFooterRowDef
          );
        },

        /* harmony export */
        "CdkHeaderCell": function CdkHeaderCell() {
          return (
            /* binding */
            _CdkHeaderCell
          );
        },

        /* harmony export */
        "CdkHeaderCellDef": function CdkHeaderCellDef() {
          return (
            /* binding */
            _CdkHeaderCellDef
          );
        },

        /* harmony export */
        "CdkHeaderRow": function CdkHeaderRow() {
          return (
            /* binding */
            _CdkHeaderRow
          );
        },

        /* harmony export */
        "CdkHeaderRowDef": function CdkHeaderRowDef() {
          return (
            /* binding */
            _CdkHeaderRowDef
          );
        },

        /* harmony export */
        "CdkNoDataRow": function CdkNoDataRow() {
          return (
            /* binding */
            _CdkNoDataRow
          );
        },

        /* harmony export */
        "CdkRecycleRows": function CdkRecycleRows() {
          return (
            /* binding */
            _CdkRecycleRows
          );
        },

        /* harmony export */
        "CdkRow": function CdkRow() {
          return (
            /* binding */
            _CdkRow
          );
        },

        /* harmony export */
        "CdkRowDef": function CdkRowDef() {
          return (
            /* binding */
            _CdkRowDef
          );
        },

        /* harmony export */
        "CdkTable": function CdkTable() {
          return (
            /* binding */
            _CdkTable
          );
        },

        /* harmony export */
        "CdkTableModule": function CdkTableModule() {
          return (
            /* binding */
            _CdkTableModule
          );
        },

        /* harmony export */
        "CdkTextColumn": function CdkTextColumn() {
          return (
            /* binding */
            _CdkTextColumn
          );
        },

        /* harmony export */
        "DataRowOutlet": function DataRowOutlet() {
          return (
            /* binding */
            _DataRowOutlet
          );
        },

        /* harmony export */
        "FooterRowOutlet": function FooterRowOutlet() {
          return (
            /* binding */
            _FooterRowOutlet
          );
        },

        /* harmony export */
        "HeaderRowOutlet": function HeaderRowOutlet() {
          return (
            /* binding */
            _HeaderRowOutlet
          );
        },

        /* harmony export */
        "NoDataRowOutlet": function NoDataRowOutlet() {
          return (
            /* binding */
            _NoDataRowOutlet
          );
        },

        /* harmony export */
        "STICKY_DIRECTIONS": function STICKY_DIRECTIONS() {
          return (
            /* binding */
            _STICKY_DIRECTIONS
          );
        },

        /* harmony export */
        "STICKY_POSITIONING_LISTENER": function STICKY_POSITIONING_LISTENER() {
          return (
            /* binding */
            _STICKY_POSITIONING_LISTENER
          );
        },

        /* harmony export */
        "StickyStyler": function StickyStyler() {
          return (
            /* binding */
            _StickyStyler
          );
        },

        /* harmony export */
        "TEXT_COLUMN_OPTIONS": function TEXT_COLUMN_OPTIONS() {
          return (
            /* binding */
            _TEXT_COLUMN_OPTIONS
          );
        },

        /* harmony export */
        "_COALESCED_STYLE_SCHEDULER": function _COALESCED_STYLE_SCHEDULER() {
          return (
            /* binding */
            _COALESCED_STYLE_SCHEDULER2
          );
        },

        /* harmony export */
        "_CoalescedStyleScheduler": function _CoalescedStyleScheduler() {
          return (
            /* binding */
            _CoalescedStyleScheduler2
          );
        },

        /* harmony export */
        "_Schedule": function _Schedule() {
          return (
            /* binding */
            _Schedule2
          );
        },

        /* harmony export */
        "mixinHasStickyInput": function mixinHasStickyInput() {
          return (
            /* binding */
            _mixinHasStickyInput
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      76484);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/collections */
      89502);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      84225);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      10388);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      87554);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      60890);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      65613);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      84608);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      51588);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      14390);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      95752);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to provide a directive with a function that checks if the sticky input has been
       * changed since the last time the function was called. Essentially adds a dirty-check to the
       * sticky value.
       * @docs-private
       */


      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function CdkTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function CdkTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }

      function _mixinHasStickyInput(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super28 = _createSuper(_class);

          function _class() {
            var _this47;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this47 = _super28.call.apply(_super28, [this].concat(args));
            _this47._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */

            _this47._hasStickyChanged = false;
            return _this47;
          }
          /** Whether sticky positioning should be applied. */


          _createClass(_class, [{
            key: "sticky",
            get: function get() {
              return this._sticky;
            },
            set: function set(v) {
              var prevValue = this._sticky;
              this._sticky = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
              this._hasStickyChanged = prevValue !== this._sticky;
            }
            /** Whether the sticky value has changed since this was last called. */

          }, {
            key: "hasStickyChanged",
            value: function hasStickyChanged() {
              var hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /** Resets the dirty check for cases where the sticky state has been used without checking. */

          }, {
            key: "resetStickyChanged",
            value: function resetStickyChanged() {
              this._hasStickyChanged = false;
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a table to some of the sub-components without causing a circular dependency.
       * @docs-private
       */


      var _CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_TABLE');
      /** Injection token that can be used to specify the text column options. */


      var _TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('text-column-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for a CDK table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */


      var _CdkCellDef = /*#__PURE__*/_createClass(function _CdkCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkCellDef);

        this.template = template;
      });

      _CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
        return new (t || _CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
      };

      _CdkCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkCellDef,
        selectors: [["", "cdkCellDef", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }];
        }, null);
      })();
      /**
       * Header cell definition for a CDK table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var _CdkHeaderCellDef = /*#__PURE__*/_createClass(function _CdkHeaderCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkHeaderCellDef);

        this.template = template;
      });

      _CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
        return new (t || _CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
      };

      _CdkHeaderCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkHeaderCellDef,
        selectors: [["", "cdkHeaderCellDef", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkHeaderCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }];
        }, null);
      })();
      /**
       * Footer cell definition for a CDK table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var _CdkFooterCellDef = /*#__PURE__*/_createClass(function _CdkFooterCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkFooterCellDef);

        this.template = template;
      });

      _CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
        return new (t || _CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
      };

      _CdkFooterCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkFooterCellDef,
        selectors: [["", "cdkFooterCellDef", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkFooterCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkColumnDef.

      /** @docs-private */


      var CdkColumnDefBase = /*#__PURE__*/_createClass(function CdkColumnDefBase() {
        _classCallCheck(this, CdkColumnDefBase);
      });

      var _CdkColumnDefBase = _mixinHasStickyInput(CdkColumnDefBase);
      /**
       * Column definition for the CDK table.
       * Defines a set of cells available for a table column.
       */


      var _CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
        _inherits(_CdkColumnDef, _CdkColumnDefBase2);

        var _super29 = _createSuper(_CdkColumnDef);

        function _CdkColumnDef(_table) {
          var _this48;

          _classCallCheck(this, _CdkColumnDef);

          _this48 = _super29.call(this);
          _this48._table = _table;
          _this48._stickyEnd = false;
          return _this48;
        }
        /** Unique name for this column. */


        _createClass(_CdkColumnDef, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._setNameInput(name);
          }
          /**
           * Whether this column should be sticky positioned on the end of the row. Should make sure
           * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
           * has been changed.
           */

        }, {
          key: "stickyEnd",
          get: function get() {
            return this._stickyEnd;
          },
          set: function set(v) {
            var prevValue = this._stickyEnd;
            this._stickyEnd = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
          }
          /**
           * Overridable method that sets the css classes that will be added to every cell in this
           * column.
           * In the future, columnCssClassName will change from type string[] to string and this
           * will set a single string value.
           * @docs-private
           */

        }, {
          key: "_updateColumnCssClassName",
          value: function _updateColumnCssClassName() {
            this._columnCssClassName = ["cdk-column-".concat(this.cssClassFriendlyName)];
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setNameInput",
          value: function _setNameInput(value) {
            // If the directive is set without a name (updated programmatically), then this setter will
            // trigger with an empty string and should not overwrite the programmatically set value.
            if (value) {
              this._name = value;
              this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, '-');

              this._updateColumnCssClassName();
            }
          }
        }]);

        return _CdkColumnDef;
      }(_CdkColumnDefBase);

      _CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
        return new (t || _CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkColumnDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkColumnDef,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkCellDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkHeaderCellDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkFooterCellDef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
          }
        },
        inputs: {
          sticky: "sticky",
          name: ["cdkColumnDef", "name"],
          stickyEnd: "stickyEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: _CdkColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: _CdkColumnDef
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['cdkColumnDef']
          }],
          stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['stickyEnd']
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_CdkCellDef]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_CdkHeaderCellDef]
          }],
          footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_CdkFooterCellDef]
          }]
        });
      })();
      /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


      var _BaseCdkCell = /*#__PURE__*/_createClass(function _BaseCdkCell(columnDef, elementRef) {
        _classCallCheck(this, _BaseCdkCell);

        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        var classList = elementRef.nativeElement.classList;

        var _iterator2 = _createForOfIteratorHelper(columnDef._columnCssClassName),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var className = _step2.value;
            classList.add(className);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
      /** Header cell template container that adds the right classes and role. */


      var _CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell2) {
        _inherits(_CdkHeaderCell, _BaseCdkCell2);

        var _super30 = _createSuper(_CdkHeaderCell);

        function _CdkHeaderCell(columnDef, elementRef) {
          _classCallCheck(this, _CdkHeaderCell);

          return _super30.call(this, columnDef, elementRef);
        }

        return _createClass(_CdkHeaderCell);
      }(_BaseCdkCell);

      _CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
        return new (t || _CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _CdkHeaderCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkHeaderCell,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: 'cdk-header-cell, th[cdk-header-cell]',
            host: {
              'class': 'cdk-header-cell',
              'role': 'columnheader'
            }
          }]
        }], function () {
          return [{
            type: _CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var _CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell3) {
        _inherits(_CdkFooterCell, _BaseCdkCell3);

        var _super31 = _createSuper(_CdkFooterCell);

        function _CdkFooterCell(columnDef, elementRef) {
          var _this49;

          _classCallCheck(this, _CdkFooterCell);

          var _a;

          _this49 = _super31.call(this, columnDef, elementRef);

          if (((_a = columnDef._table) === null || _a === void 0 ? void 0 : _a._elementRef.nativeElement.nodeType) === 1) {
            var tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

            var role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
            elementRef.nativeElement.setAttribute('role', role);
          }

          return _this49;
        }

        return _createClass(_CdkFooterCell);
      }(_BaseCdkCell);

      _CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
        return new (t || _CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _CdkFooterCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkFooterCell,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: [1, "cdk-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: 'cdk-footer-cell, td[cdk-footer-cell]',
            host: {
              'class': 'cdk-footer-cell'
            }
          }]
        }], function () {
          return [{
            type: _CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var _CdkCell = /*#__PURE__*/function (_BaseCdkCell4) {
        _inherits(_CdkCell, _BaseCdkCell4);

        var _super32 = _createSuper(_CdkCell);

        function _CdkCell(columnDef, elementRef) {
          var _this50;

          _classCallCheck(this, _CdkCell);

          var _a;

          _this50 = _super32.call(this, columnDef, elementRef);

          if (((_a = columnDef._table) === null || _a === void 0 ? void 0 : _a._elementRef.nativeElement.nodeType) === 1) {
            var tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

            var role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
            elementRef.nativeElement.setAttribute('role', role);
          }

          return _this50;
        }

        return _createClass(_CdkCell);
      }(_BaseCdkCell);

      _CdkCell.ɵfac = function CdkCell_Factory(t) {
        return new (t || _CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _CdkCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkCell,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: [1, "cdk-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: 'cdk-cell, td[cdk-cell]',
            host: {
              'class': 'cdk-cell'
            }
          }]
        }], function () {
          return [{
            type: _CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @docs-private
       */


      var _Schedule2 = /*#__PURE__*/_createClass(function _Schedule2() {
        _classCallCheck(this, _Schedule2);

        this.tasks = [];
        this.endTasks = [];
      });
      /** Injection token used to provide a coalesced style scheduler. */


      var _COALESCED_STYLE_SCHEDULER2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('_COALESCED_STYLE_SCHEDULER');
      /**
       * Allows grouping up CSSDom mutations after the current execution context.
       * This can significantly improve performance when separate consecutive functions are
       * reading from the CSSDom and then mutating it.
       *
       * @docs-private
       */


      var _CoalescedStyleScheduler2 = /*#__PURE__*/function () {
        function _CoalescedStyleScheduler2(_ngZone) {
          _classCallCheck(this, _CoalescedStyleScheduler2);

          this._ngZone = _ngZone;
          this._currentSchedule = null;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }
        /**
         * Schedules the specified task to run at the end of the current VM turn.
         */


        _createClass(_CoalescedStyleScheduler2, [{
          key: "schedule",
          value: function schedule(task) {
            this._createScheduleIfNeeded();

            this._currentSchedule.tasks.push(task);
          }
          /**
           * Schedules the specified task to run after other scheduled tasks at the end of the current
           * VM turn.
           */

        }, {
          key: "scheduleEnd",
          value: function scheduleEnd(task) {
            this._createScheduleIfNeeded();

            this._currentSchedule.endTasks.push(task);
          }
          /** Prevent any further tasks from running. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
        }, {
          key: "_createScheduleIfNeeded",
          value: function _createScheduleIfNeeded() {
            var _this51 = this;

            if (this._currentSchedule) {
              return;
            }

            this._currentSchedule = new _Schedule2();

            this._getScheduleObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(function () {
              while (_this51._currentSchedule.tasks.length || _this51._currentSchedule.endTasks.length) {
                var schedule = _this51._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

                _this51._currentSchedule = new _Schedule2();

                var _iterator3 = _createForOfIteratorHelper(schedule.tasks),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var task = _step3.value;
                    task();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                var _iterator4 = _createForOfIteratorHelper(schedule.endTasks),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _task = _step4.value;

                    _task();
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              _this51._currentSchedule = null;
            });
          }
        }, {
          key: "_getScheduleObservable",
          value: function _getScheduleObservable() {
            // Use onStable when in the context of an ongoing change detection cycle so that we
            // do not accidentally trigger additional cycles.
            return this._ngZone.isStable ? (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(Promise.resolve(undefined)) : this._ngZone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
          }
        }]);

        return _CoalescedStyleScheduler2;
      }();

      _CoalescedStyleScheduler2.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
        return new (t || _CoalescedStyleScheduler2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
      };

      _CoalescedStyleScheduler2.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CoalescedStyleScheduler2,
        factory: _CoalescedStyleScheduler2.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CoalescedStyleScheduler2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The row template that can be used by the mat-table. Should not be used outside of the
       * material library.
       */


      var _CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
      /**
       * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
       * for changes and notifying the table.
       */

      var _BaseRowDef = /*#__PURE__*/function () {
        function _BaseRowDef(
        /** @docs-private */
        template, _differs) {
          _classCallCheck(this, _BaseRowDef);

          this.template = template;
          this._differs = _differs;
        }

        _createClass(_BaseRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
              var columns = changes['columns'] && changes['columns'].currentValue || [];
              this._columnsDiffer = this._differs.find(columns).create();

              this._columnsDiffer.diff(columns);
            }
          }
          /**
           * Returns the difference between the current columns and the columns from the last diff, or null
           * if there is no difference.
           */

        }, {
          key: "getColumnsDiff",
          value: function getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
          }
          /** Gets this row def's relevant cell template from the provided column def. */

        }, {
          key: "extractCellTemplate",
          value: function extractCellTemplate(column) {
            if (this instanceof _CdkHeaderRowDef) {
              return column.headerCell.template;
            }

            if (this instanceof _CdkFooterRowDef) {
              return column.footerCell.template;
            } else {
              return column.cell.template;
            }
          }
        }]);

        return _BaseRowDef;
      }();

      _BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
        return new (t || _BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers));
      };

      _BaseRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _BaseRowDef,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_BaseRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkHeaderRowDef.

      /** @docs-private */


      var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
        _inherits(CdkHeaderRowDefBase, _BaseRowDef2);

        var _super33 = _createSuper(CdkHeaderRowDefBase);

        function CdkHeaderRowDefBase() {
          _classCallCheck(this, CdkHeaderRowDefBase);

          return _super33.apply(this, arguments);
        }

        return _createClass(CdkHeaderRowDefBase);
      }(_BaseRowDef);

      var _CdkHeaderRowDefBase = _mixinHasStickyInput(CdkHeaderRowDefBase);
      /**
       * Header row definition for the CDK table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var _CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
        _inherits(_CdkHeaderRowDef, _CdkHeaderRowDefBase2);

        var _super34 = _createSuper(_CdkHeaderRowDef);

        function _CdkHeaderRowDef(template, _differs, _table) {
          var _this52;

          _classCallCheck(this, _CdkHeaderRowDef);

          _this52 = _super34.call(this, template, _differs);
          _this52._table = _table;
          return _this52;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(_CdkHeaderRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(_CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return _CdkHeaderRowDef;
      }(_CdkHeaderRowDefBase);

      _CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
        return new (t || _CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkHeaderRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkHeaderRowDef,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
          columns: ["cdkHeaderRowDef", "columns"],
          sticky: ["cdkHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkHeaderRowDef]',
            inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkFooterRowDef.

      /** @docs-private */


      var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef3) {
        _inherits(CdkFooterRowDefBase, _BaseRowDef3);

        var _super35 = _createSuper(CdkFooterRowDefBase);

        function CdkFooterRowDefBase() {
          _classCallCheck(this, CdkFooterRowDefBase);

          return _super35.apply(this, arguments);
        }

        return _createClass(CdkFooterRowDefBase);
      }(_BaseRowDef);

      var _CdkFooterRowDefBase = _mixinHasStickyInput(CdkFooterRowDefBase);
      /**
       * Footer row definition for the CDK table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var _CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
        _inherits(_CdkFooterRowDef, _CdkFooterRowDefBase2);

        var _super36 = _createSuper(_CdkFooterRowDef);

        function _CdkFooterRowDef(template, _differs, _table) {
          var _this53;

          _classCallCheck(this, _CdkFooterRowDef);

          _this53 = _super36.call(this, template, _differs);
          _this53._table = _table;
          return _this53;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(_CdkFooterRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(_CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return _CdkFooterRowDef;
      }(_CdkFooterRowDefBase);

      _CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
        return new (t || _CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkFooterRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkFooterRowDef,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: ["cdkFooterRowDef", "columns"],
          sticky: ["cdkFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkFooterRowDef]',
            inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * Data row definition for the CDK table.
       * Captures the header row's template and other row properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var _CdkRowDef = /*#__PURE__*/function (_BaseRowDef4) {
        _inherits(_CdkRowDef, _BaseRowDef4);

        var _super37 = _createSuper(_CdkRowDef);

        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        function _CdkRowDef(template, _differs, _table) {
          var _this54;

          _classCallCheck(this, _CdkRowDef);

          _this54 = _super37.call(this, template, _differs);
          _this54._table = _table;
          return _this54;
        }

        return _createClass(_CdkRowDef);
      }(_BaseRowDef);

      _CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
        return new (t || _CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkRowDef,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: ["cdkRowDefColumns", "columns"],
          when: ["cdkRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkRowDef]',
            inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * Outlet for rendering cells inside of a row or header row.
       * @docs-private
       */


      var _CdkCellOutlet = /*#__PURE__*/function () {
        function _CdkCellOutlet(_viewContainer) {
          _classCallCheck(this, _CdkCellOutlet);

          this._viewContainer = _viewContainer;
          _CdkCellOutlet.mostRecentCellOutlet = this;
        }

        _createClass(_CdkCellOutlet, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (_CdkCellOutlet.mostRecentCellOutlet === this) {
              _CdkCellOutlet.mostRecentCellOutlet = null;
            }
          }
        }]);

        return _CdkCellOutlet;
      }();
      /**
       * Static property containing the latest constructed instance of this class.
       * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
       * createEmbeddedView. After one of these components are created, this property will provide
       * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
       * construct the cells with the provided context.
       */


      _CdkCellOutlet.mostRecentCellOutlet = null;

      _CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
        return new (t || _CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
      };

      _CdkCellOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkCellOutlet,
        selectors: [["", "cdkCellOutlet", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkCellOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[cdkCellOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
          }];
        }, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var _CdkHeaderRow = /*#__PURE__*/_createClass(function _CdkHeaderRow() {
        _classCallCheck(this, _CdkHeaderRow);
      });

      _CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
        return new (t || _CdkHeaderRow)();
      };

      _CdkHeaderRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CdkHeaderRow,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'cdk-header-row, tr[cdk-header-row]',
            template: _CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var _CdkFooterRow = /*#__PURE__*/_createClass(function _CdkFooterRow() {
        _classCallCheck(this, _CdkFooterRow);
      });

      _CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
        return new (t || _CdkFooterRow)();
      };

      _CdkFooterRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CdkFooterRow,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'cdk-footer-row, tr[cdk-footer-row]',
            template: _CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var _CdkRow = /*#__PURE__*/_createClass(function _CdkRow() {
        _classCallCheck(this, _CdkRow);
      });

      _CdkRow.ɵfac = function CdkRow_Factory(t) {
        return new (t || _CdkRow)();
      };

      _CdkRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CdkRow,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'cdk-row, tr[cdk-row]',
            template: _CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var _CdkNoDataRow = /*#__PURE__*/_createClass(function _CdkNoDataRow(templateRef) {
        _classCallCheck(this, _CdkNoDataRow);

        this.templateRef = templateRef;
        this._contentClassName = 'cdk-no-data-row';
      });

      _CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
        return new (t || _CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
      };

      _CdkNoDataRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkNoDataRow,
        selectors: [["ng-template", "cdkNoDataRow", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: 'ng-template[cdkNoDataRow]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * List of all possible directions that can be used for sticky positioning.
       * @docs-private
       */


      var _STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
      /**
       * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
       * @docs-private
       */

      var _StickyStyler = /*#__PURE__*/function () {
        /**
         * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
         *     that uses the native `<table>` element.
         * @param _stickCellCss The CSS class that will be applied to every row/cell that has
         *     sticky positioning applied.
         * @param direction The directionality context of the table (ltr/rtl); affects column positioning
         *     by reversing left/right positions.
         * @param _isBrowser Whether the table is currently being rendered on the server or the client.
         * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
         *     using inline styles. If false, it is assumed that position: sticky is included in
         *     the component stylesheet for _stickCellCss.
         * @param _positionListener A listener that is notified of changes to sticky rows/columns
         *     and their dimensions.
         */
        function _StickyStyler(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler) {
          var _isBrowser = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

          var _needsPositionStickyOnElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

          var _positionListener = arguments.length > 6 ? arguments[6] : undefined;

          _classCallCheck(this, _StickyStyler);

          this._isNativeHtmlTable = _isNativeHtmlTable;
          this._stickCellCss = _stickCellCss;
          this.direction = direction;
          this._coalescedStyleScheduler = _coalescedStyleScheduler;
          this._isBrowser = _isBrowser;
          this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
          this._positionListener = _positionListener;
          this._cachedCellWidths = [];
          this._borderCellCss = {
            'top': "".concat(_stickCellCss, "-border-elem-top"),
            'bottom': "".concat(_stickCellCss, "-border-elem-bottom"),
            'left': "".concat(_stickCellCss, "-border-elem-left"),
            'right': "".concat(_stickCellCss, "-border-elem-right")
          };
        }
        /**
         * Clears the sticky positioning styles from the row and its cells by resetting the `position`
         * style, setting the zIndex to 0, and unsetting each provided sticky direction.
         * @param rows The list of rows that should be cleared from sticking in the provided directions
         * @param stickyDirections The directions that should no longer be set as sticky on the rows.
         */


        _createClass(_StickyStyler, [{
          key: "clearStickyPositioning",
          value: function clearStickyPositioning(rows, stickyDirections) {
            var _this55 = this;

            var elementsToClear = [];

            var _iterator5 = _createForOfIteratorHelper(rows),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var row = _step5.value;

                // If the row isn't an element (e.g. if it's an `ng-container`),
                // it won't have inline styles or `children` so we skip it.
                if (row.nodeType !== row.ELEMENT_NODE) {
                  continue;
                }

                elementsToClear.push(row);

                for (var i = 0; i < row.children.length; i++) {
                  elementsToClear.push(row.children[i]);
                }
              } // Coalesce with sticky row/column updates (and potentially other changes like column resize).

            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this._coalescedStyleScheduler.schedule(function () {
              var _iterator6 = _createForOfIteratorHelper(elementsToClear),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var element = _step6.value;

                  _this55._removeStickyStyle(element, stickyDirections);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            });
          }
          /**
           * Applies sticky left and right positions to the cells of each row according to the sticky
           * states of the rendered column definitions.
           * @param rows The rows that should have its set of cells stuck according to the sticky states.
           * @param stickyStartStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the start of the row.
           * @param stickyEndStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the end of the row.
           * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
           *     column cell. If `false` cached widths will be used instead.
           */

        }, {
          key: "updateStickyColumns",
          value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
            var _this56 = this;

            var recalculateCellWidths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            if (!rows.length || !this._isBrowser || !(stickyStartStates.some(function (state) {
              return state;
            }) || stickyEndStates.some(function (state) {
              return state;
            }))) {
              if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({
                  sizes: []
                });

                this._positionListener.stickyEndColumnsUpdated({
                  sizes: []
                });
              }

              return;
            }

            var firstRow = rows[0];
            var numCells = firstRow.children.length;

            var cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);

            var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

            var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

            var lastStickyStart = stickyStartStates.lastIndexOf(true);
            var firstStickyEnd = stickyEndStates.indexOf(true); // Coalesce with sticky row updates (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              var isRtl = _this56.direction === 'rtl';
              var start = isRtl ? 'right' : 'left';
              var end = isRtl ? 'left' : 'right';

              var _iterator7 = _createForOfIteratorHelper(rows),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var row = _step7.value;

                  for (var i = 0; i < numCells; i++) {
                    var cell = row.children[i];

                    if (stickyStartStates[i]) {
                      _this56._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
                    }

                    if (stickyEndStates[i]) {
                      _this56._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
                    }
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              if (_this56._positionListener) {
                _this56._positionListener.stickyColumnsUpdated({
                  sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map(function (width, index) {
                    return stickyStartStates[index] ? width : null;
                  })
                });

                _this56._positionListener.stickyEndColumnsUpdated({
                  sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map(function (width, index) {
                    return stickyEndStates[index + firstStickyEnd] ? width : null;
                  }).reverse()
                });
              }
            });
          }
          /**
           * Applies sticky positioning to the row's cells if using the native table layout, and to the
           * row itself otherwise.
           * @param rowsToStick The list of rows that should be stuck according to their corresponding
           *     sticky state and to the provided top or bottom position.
           * @param stickyStates A list of boolean states where each state represents whether the row
           *     should be stuck in the particular top or bottom position.
           * @param position The position direction in which the row should be stuck if that row should be
           *     sticky.
           *
           */

        }, {
          key: "stickRows",
          value: function stickRows(rowsToStick, stickyStates, position) {
            var _this57 = this;

            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
              return;
            } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
            // sticky states need to be reversed as well.


            var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
            var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

            var stickyOffsets = [];
            var stickyCellHeights = [];
            var elementsToStick = [];

            for (var rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
              if (!states[rowIndex]) {
                continue;
              }

              stickyOffsets[rowIndex] = stickyOffset;
              var row = rows[rowIndex];
              elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
              var height = row.getBoundingClientRect().height;
              stickyOffset += height;
              stickyCellHeights[rowIndex] = height;
            }

            var borderedRowIndex = states.lastIndexOf(true); // Coalesce with other sticky row updates (top/bottom), sticky columns updates
            // (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              var _a, _b;

              for (var _rowIndex = 0; _rowIndex < rows.length; _rowIndex++) {
                if (!states[_rowIndex]) {
                  continue;
                }

                var offset = stickyOffsets[_rowIndex];
                var isBorderedRowIndex = _rowIndex === borderedRowIndex;

                var _iterator8 = _createForOfIteratorHelper(elementsToStick[_rowIndex]),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var element = _step8.value;

                    _this57._addStickyStyle(element, position, offset, isBorderedRowIndex);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }

              if (position === 'top') {
                (_a = _this57._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({
                  sizes: stickyCellHeights,
                  offsets: stickyOffsets,
                  elements: elementsToStick
                });
              } else {
                (_b = _this57._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({
                  sizes: stickyCellHeights,
                  offsets: stickyOffsets,
                  elements: elementsToStick
                });
              }
            });
          }
          /**
           * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
           * footer rows is to apply sticky styling to the tfoot container. This should only be done if
           * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
           * the tfoot element.
           */

        }, {
          key: "updateStickyFooterContainer",
          value: function updateStickyFooterContainer(tableElement, stickyStates) {
            var _this58 = this;

            if (!this._isNativeHtmlTable) {
              return;
            }

            var tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              if (stickyStates.some(function (state) {
                return !state;
              })) {
                _this58._removeStickyStyle(tfoot, ['bottom']);
              } else {
                _this58._addStickyStyle(tfoot, 'bottom', 0, false);
              }
            });
          }
          /**
           * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
           * the zIndex, removing each of the provided sticky directions, and removing the
           * sticky position if there are no more directions.
           */

        }, {
          key: "_removeStickyStyle",
          value: function _removeStickyStyle(element, stickyDirections) {
            var _iterator9 = _createForOfIteratorHelper(stickyDirections),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var dir = _step9.value;
                element.style[dir] = '';
                element.classList.remove(this._borderCellCss[dir]);
              } // If the element no longer has any more sticky directions, remove sticky positioning and
              // the sticky CSS class.
              // Short-circuit checking element.style[dir] for stickyDirections as they
              // were already removed above.

            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            var hasDirection = _STICKY_DIRECTIONS.some(function (dir) {
              return stickyDirections.indexOf(dir) === -1 && element.style[dir];
            });

            if (hasDirection) {
              element.style.zIndex = this._getCalculatedZIndex(element);
            } else {
              // When not hasDirection, _getCalculatedZIndex will always return ''.
              element.style.zIndex = '';

              if (this._needsPositionStickyOnElement) {
                element.style.position = '';
              }

              element.classList.remove(this._stickCellCss);
            }
          }
          /**
           * Adds the sticky styling to the element by adding the sticky style class, changing position
           * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
           * direction and value.
           */

        }, {
          key: "_addStickyStyle",
          value: function _addStickyStyle(element, dir, dirValue, isBorderElement) {
            element.classList.add(this._stickCellCss);

            if (isBorderElement) {
              element.classList.add(this._borderCellCss[dir]);
            }

            element.style[dir] = "".concat(dirValue, "px");
            element.style.zIndex = this._getCalculatedZIndex(element);

            if (this._needsPositionStickyOnElement) {
              element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
            }
          }
          /**
           * Calculate what the z-index should be for the element, depending on what directions (top,
           * bottom, left, right) have been set. It should be true that elements with a top direction
           * should have the highest index since these are elements like a table header. If any of those
           * elements are also sticky in another direction, then they should appear above other elements
           * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
           * (e.g. footer rows) should then be next in the ordering such that they are below the header
           * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
           * should minimally increment so that they are above non-sticky elements but below top and bottom
           * elements.
           */

        }, {
          key: "_getCalculatedZIndex",
          value: function _getCalculatedZIndex(element) {
            var zIndexIncrements = {
              top: 100,
              bottom: 10,
              left: 1,
              right: 1
            };
            var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

            var _iterator10 = _createForOfIteratorHelper(_STICKY_DIRECTIONS),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var dir = _step10.value;

                if (element.style[dir]) {
                  zIndex += zIndexIncrements[dir];
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            return zIndex ? "".concat(zIndex) : '';
          }
          /** Gets the widths for each cell in the provided row. */

        }, {
          key: "_getCellWidths",
          value: function _getCellWidths(row) {
            var recalculateCellWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (!recalculateCellWidths && this._cachedCellWidths.length) {
              return this._cachedCellWidths;
            }

            var cellWidths = [];
            var firstRowCells = row.children;

            for (var i = 0; i < firstRowCells.length; i++) {
              var cell = firstRowCells[i];
              cellWidths.push(cell.getBoundingClientRect().width);
            }

            this._cachedCellWidths = cellWidths;
            return cellWidths;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyStartColumnPositions",
          value: function _getStickyStartColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = 0; i < widths.length; i++) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyEndColumnPositions",
          value: function _getStickyEndColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = widths.length; i > 0; i--) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
        }]);

        return _StickyStyler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to find an unexisting column.
       * @param id Id whose lookup failed.
       * @docs-private
       */


      function getTableUnknownColumnError(id) {
        return Error("Could not find column with id \"".concat(id, "\"."));
      }
      /**
       * Returns an error to be thrown when two column definitions have the same name.
       * @docs-private
       */


      function getTableDuplicateColumnNameError(name) {
        return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
      }
      /**
       * Returns an error to be thrown when there are multiple rows that are missing a when function.
       * @docs-private
       */


      function getTableMultipleDefaultRowDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching row defs for a particular set of data.
       * @docs-private
       */


      function getTableMissingMatchingRowDefError(data) {
        return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
      }
      /**
       * Returns an error to be thrown when there is no row definitions present in the content.
       * @docs-private
       */


      function getTableMissingRowDefsError() {
        return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
      }
      /**
       * Returns an error to be thrown when the data source does not match the compatible types.
       * @docs-private
       */


      function getTableUnknownDataSourceError() {
        return Error("Provided data source did not match an array, Observable, or DataSource");
      }
      /**
       * Returns an error to be thrown when the text column cannot find a parent table to inject.
       * @docs-private
       */


      function getTableTextColumnMissingParentTableError() {
        return Error("Text column could not find a parent table for registration.");
      }
      /**
       * Returns an error to be thrown when a table text column doesn't have a name.
       * @docs-private
       */


      function getTableTextColumnMissingNameError() {
        return Error("Table text column must have a name.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the StickyPositioningListener. */


      var _STICKY_POSITIONING_LISTENER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_SPL');
      /**
       * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
       * tables that animate rows.
       */


      var _CdkRecycleRows = /*#__PURE__*/_createClass(function _CdkRecycleRows() {
        _classCallCheck(this, _CdkRecycleRows);
      });

      _CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
        return new (t || _CdkRecycleRows)();
      };

      _CdkRecycleRows.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _CdkRecycleRows,
        selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkRecycleRows, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: 'cdk-table[recycleRows], table[cdk-table][recycleRows]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy
            }]
          }]
        }], null, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert data rows.
       * @docs-private
       */


      var _DataRowOutlet = /*#__PURE__*/_createClass(function _DataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _DataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      });

      _DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
        return new (t || _DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _DataRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _DataRowOutlet,
        selectors: [["", "rowOutlet", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_DataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[rowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the header.
       * @docs-private
       */


      var _HeaderRowOutlet = /*#__PURE__*/_createClass(function _HeaderRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _HeaderRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      });

      _HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
        return new (t || _HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _HeaderRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _HeaderRowOutlet,
        selectors: [["", "headerRowOutlet", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_HeaderRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[headerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the footer.
       * @docs-private
       */


      var _FooterRowOutlet = /*#__PURE__*/_createClass(function _FooterRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _FooterRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      });

      _FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
        return new (t || _FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _FooterRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _FooterRowOutlet,
        selectors: [["", "footerRowOutlet", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_FooterRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[footerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view
       * container's ng-container to insert the no data row.
       * @docs-private
       */


      var _NoDataRowOutlet = /*#__PURE__*/_createClass(function _NoDataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _NoDataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      });

      _NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
        return new (t || _NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _NoDataRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _NoDataRowOutlet,
        selectors: [["", "noDataRowOutlet", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_NoDataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
          args: [{
            selector: '[noDataRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }];
        }, null);
      })();
      /**
       * The table template that can be used by the mat-table. Should not be used outside of the
       * material library.
       * @docs-private
       */


      var _CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
      // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
      "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
      /**
       * Class used to conveniently type the embedded view ref for rows with a context.
       * @docs-private
       */

      var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(RowViewRef, _angular_core__WEBPAC);

        var _super38 = _createSuper(RowViewRef);

        function RowViewRef() {
          _classCallCheck(this, RowViewRef);

          return _super38.apply(this, arguments);
        }

        return _createClass(RowViewRef);
      }(_angular_core__WEBPACK_IMPORTED_MODULE_1__.EmbeddedViewRef);
      /**
       * A data table that can render a header row, data rows, and a footer row.
       * Uses the dataSource input to determine the data to be rendered. The data can be provided either
       * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
       * connect function that will return an Observable stream that emits the data array to render.
       */


      var _CdkTable = /*#__PURE__*/function () {
        function _CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler,
        /**
         * @deprecated `_stickyPositioningListener` parameter to become required.
         * @breaking-change 13.0.0
         */
        _stickyPositioningListener) {
          _classCallCheck(this, _CdkTable);

          this._differs = _differs;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dir = _dir;
          this._platform = _platform;
          this._viewRepeater = _viewRepeater;
          this._coalescedStyleScheduler = _coalescedStyleScheduler;
          this._viewportRuler = _viewportRuler;
          this._stickyPositioningListener = _stickyPositioningListener;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          /**
           * Map of all the user's defined columns (header, data, and footer cell template) identified by
           * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
           * any custom column definitions added to `_customColumnDefs`.
           */

          this._columnDefsByName = new Map();
          /**
           * Column definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * column definitions as *its* content child.
           */

          this._customColumnDefs = new Set();
          /**
           * Data row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in data rows as *its* content child.
           */

          this._customRowDefs = new Set();
          /**
           * Header row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in header rows as *its* content child.
           */

          this._customHeaderRowDefs = new Set();
          /**
           * Footer row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
           * built-in footer row as *its* content child.
           */

          this._customFooterRowDefs = new Set();
          /**
           * Whether the header row definition has been changed. Triggers an update to the header row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._headerRowDefChanged = true;
          /**
           * Whether the footer row definition has been changed. Triggers an update to the footer row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._footerRowDefChanged = true;
          /**
           * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
           * change.
           */

          this._stickyColumnStylesNeedReset = true;
          /**
           * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
           * `false`, cached values will be used instead. This is only applicable to tables with
           * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
           */

          this._forceRecalculateCellWidths = true;
          /**
           * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
           * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
           * the cached `RenderRow` objects when possible, the row identity is preserved when the data
           * and row template matches, which allows the `IterableDiffer` to check rows by reference
           * and understand which rows are added/moved/removed.
           *
           * Implemented as a map of maps where the first key is the `data: T` object and the second is the
           * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
           * contains an array of created pairs. The array is necessary to handle cases where the data
           * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
           * stored.
           */

          this._cachedRenderRowsMap = new Map();
          /**
           * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
           * table subclasses.
           */

          this.stickyCssClass = 'cdk-table-sticky';
          /**
           * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
           * the position is set in a selector associated with the value of stickyCssClass. May be
           * overridden by table subclasses
           */

          this.needsPositionStickyOnElement = true;
          /** Whether the no data row is currently showing anything. */

          this._isShowingNoDataRow = false;
          this._multiTemplateDataRows = false;
          this._fixedLayout = false;
          /**
           * Emits when the table completes rendering a set of data rows based on the latest data from the
           * data source, even if the set of rows is empty.
           */

          this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // TODO(andrewseguin): Remove max value as the end index
          //   and instead calculate the view on init and scroll.

          /**
           * Stream containing the latest information on what rows are being displayed on screen.
           * Can be used by the data source to as a heuristic of what data should be provided.
           *
           * @docs-private
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
            start: 0,
            end: Number.MAX_VALUE
          });

          if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'table');
          }

          this._document = _document;
          this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
        }
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */


        _createClass(_CdkTable, [{
          key: "trackBy",
          get: function get() {
            return this._trackByFn;
          },
          set: function set(fn) {
            if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
              console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
            }

            this._trackByFn = fn;
          }
          /**
           * The table's source of data, which can be provided in three ways (in order of complexity):
           *   - Simple data array (each object represents one table row)
           *   - Stream that emits a data array each time the array changes
           *   - `DataSource` object that implements the connect/disconnect interface.
           *
           * If a data array is provided, the table must be notified when the array's objects are
           * added, removed, or moved. This can be done by calling the `renderRows()` function which will
           * render the diff since the last table render. If the data array reference is changed, the table
           * will automatically trigger an update to the rows.
           *
           * When providing an Observable stream, the table will trigger an update automatically when the
           * stream emits a new array of data.
           *
           * Finally, when providing a `DataSource` object, the table will use the Observable stream
           * provided by the connect function and trigger updates when that stream emits new data array
           * values. During the table's ngOnDestroy or when the data source is removed from the table, the
           * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
           * subscriptions registered during the connect process).
           */

        }, {
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
          /**
           * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
           * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
           * dataobject will render the first row that evaluates its when predicate to true, in the order
           * defined in the table, or otherwise the default row which does not have a when predicate.
           */

        }, {
          key: "multiTemplateDataRows",
          get: function get() {
            return this._multiTemplateDataRows;
          },
          set: function set(v) {
            this._multiTemplateDataRows = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.

            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
              this._forceRenderDataRows();

              this.updateStickyColumnStyles();
            }
          }
          /**
           * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
           * and optimize rendering sticky styles for native tables. No-op for flex tables.
           */

        }, {
          key: "fixedLayout",
          get: function get() {
            return this._fixedLayout;
          },
          set: function set(v) {
            this._fixedLayout = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.

            this._forceRecalculateCellWidths = true;
            this._stickyColumnStylesNeedReset = true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this59 = this;

            this._setupStickyStyler();

            if (this._isNativeHtmlTable) {
              this._applyNativeTableSections();
            } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.


            this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
              return _this59.trackBy ? _this59.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });

            this._viewportRuler.change().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(function () {
              _this59._forceRecalculateCellWidths = true;
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();

            this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableMissingRowDefsError();
            } // Render updates if the list of columns have been changed for the header, row, or footer defs.


            var columnsChanged = this._renderUpdatedColumns();

            var rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // Ensure sticky column styles are reset if set to `true` elsewhere.

            this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
            this._forceRecalculateCellWidths = rowDefsChanged; // If the header row definition has been changed, trigger a render to the header row.

            if (this._headerRowDefChanged) {
              this._forceRenderHeaderRows();

              this._headerRowDefChanged = false;
            } // If the footer row definition has been changed, trigger a render to the footer row.


            if (this._footerRowDefChanged) {
              this._forceRenderFooterRows();

              this._footerRowDefChanged = false;
            } // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.


            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
              this._observeRenderChanges();
            } else if (this._stickyColumnStylesNeedReset) {
              // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
              // called when it row data arrives. Otherwise, we need to call it proactively.
              this.updateStickyColumnStyles();
            }

            this._checkStickyStates();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rowOutlet.viewContainer.clear();

            this._noDataRowOutlet.viewContainer.clear();

            this._headerRowOutlet.viewContainer.clear();

            this._footerRowOutlet.viewContainer.clear();

            this._cachedRenderRowsMap.clear();

            this._onDestroy.next();

            this._onDestroy.complete();

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
              this.dataSource.disconnect(this);
            }
          }
          /**
           * Renders rows based on the table's latest set of data, which was either provided directly as an
           * input or retrieved through an Observable stream (directly or from a DataSource).
           * Checks for differences in the data since the last diff to perform only the necessary
           * changes (add/remove/move rows).
           *
           * If the table's data source is a DataSource or Observable, this will be invoked automatically
           * each time the provided Observable stream emits a new data array. Otherwise if your data is
           * an array, this function will need to be called to render any changes.
           */

        }, {
          key: "renderRows",
          value: function renderRows() {
            var _this60 = this;

            this._renderRows = this._getAllRenderRows();

            var changes = this._dataDiffer.diff(this._renderRows);

            if (!changes) {
              this._updateNoDataRow();

              this.contentChanged.next();
              return;
            }

            var viewContainer = this._rowOutlet.viewContainer;

            this._viewRepeater.applyChanges(changes, viewContainer, function (record, _adjustedPreviousIndex, currentIndex) {
              return _this60._getEmbeddedViewArgs(record.item, currentIndex);
            }, function (record) {
              return record.item.data;
            }, function (change) {
              if (change.operation === 1
              /* INSERTED */
              && change.context) {
                _this60._renderCellTemplateForItem(change.record.item.rowDef, change.context);
              }
            }); // Update the meta context of a row's context data (index, count, first, last, ...)


            this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.


            changes.forEachIdentityChange(function (record) {
              var rowView = viewContainer.get(record.currentIndex);
              rowView.context.$implicit = record.item.data;
            });

            this._updateNoDataRow();

            this.updateStickyColumnStyles();
            this.contentChanged.next();
          }
          /** Adds a column definition that was not included as part of the content children. */

        }, {
          key: "addColumnDef",
          value: function addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
          }
          /** Removes a column definition that was not included as part of the content children. */

        }, {
          key: "removeColumnDef",
          value: function removeColumnDef(columnDef) {
            this._customColumnDefs["delete"](columnDef);
          }
          /** Adds a row definition that was not included as part of the content children. */

        }, {
          key: "addRowDef",
          value: function addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
          }
          /** Removes a row definition that was not included as part of the content children. */

        }, {
          key: "removeRowDef",
          value: function removeRowDef(rowDef) {
            this._customRowDefs["delete"](rowDef);
          }
          /** Adds a header row definition that was not included as part of the content children. */

        }, {
          key: "addHeaderRowDef",
          value: function addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Removes a header row definition that was not included as part of the content children. */

        }, {
          key: "removeHeaderRowDef",
          value: function removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs["delete"](headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Adds a footer row definition that was not included as part of the content children. */

        }, {
          key: "addFooterRowDef",
          value: function addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);

            this._footerRowDefChanged = true;
          }
          /** Removes a footer row definition that was not included as part of the content children. */

        }, {
          key: "removeFooterRowDef",
          value: function removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs["delete"](footerRowDef);

            this._footerRowDefChanged = true;
          }
          /** Sets a no data row definition that was not included as a part of the content children. */

        }, {
          key: "setNoDataRow",
          value: function setNoDataRow(noDataRow) {
            this._customNoDataRow = noDataRow;
          }
          /**
           * Updates the header sticky styles. First resets all applied styles with respect to the cells
           * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
           * automatically called when the header row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyHeaderRowStyles",
          value: function updateStickyHeaderRowStyles() {
            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var thead = tableElement.querySelector('thead');

            if (thead) {
              thead.style.display = headerRows.length ? '' : 'none';
            }

            var stickyStates = this._headerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

            this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


            this._headerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the footer sticky styles. First resets all applied styles with respect to the cells
           * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
           * automatically called when the footer row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyFooterRowStyles",
          value: function updateStickyFooterRowStyles() {
            var footerRows = this._getRenderedRows(this._footerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var tfoot = tableElement.querySelector('tfoot');

            if (tfoot) {
              tfoot.style.display = footerRows.length ? '' : 'none';
            }

            var stickyStates = this._footerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


            this._footerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the column sticky styles. First resets all applied styles with respect to the cells
           * sticking to the left and right. Then sticky styles are added for the left and right according
           * to the column definitions for each cell in each row. This is automatically called when
           * the data source provides a new set of data or when a column definition changes its sticky
           * input. May be called manually for cases where the cell content changes outside of these events.
           */

        }, {
          key: "updateStickyColumnStyles",
          value: function updateStickyColumnStyles() {
            var _this61 = this;

            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var dataRows = this._getRenderedRows(this._rowOutlet);

            var footerRows = this._getRenderedRows(this._footerRowOutlet); // For tables not using a fixed layout, the column widths may change when new rows are rendered.
            // In a table using a fixed layout, row content won't affect column width, so sticky styles
            // don't need to be cleared unless either the sticky column config changes or one of the row
            // defs change.


            if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
              // Clear the left and right positioning from all columns in the table across all rows since
              // sticky columns span across all table sections (header, data, footer)
              this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']);

              this._stickyColumnStylesNeedReset = false;
            } // Update the sticky styles for each header row depending on the def's sticky state


            headerRows.forEach(function (headerRow, i) {
              _this61._addStickyColumnStyles([headerRow], _this61._headerRowDefs[i]);
            }); // Update the sticky styles for each data row depending on its def's sticky state

            this._rowDefs.forEach(function (rowDef) {
              // Collect all the rows rendered with this row definition.
              var rows = [];

              for (var i = 0; i < dataRows.length; i++) {
                if (_this61._renderRows[i].rowDef === rowDef) {
                  rows.push(dataRows[i]);
                }
              }

              _this61._addStickyColumnStyles(rows, rowDef);
            }); // Update the sticky styles for each footer row depending on the def's sticky state


            footerRows.forEach(function (footerRow, i) {
              _this61._addStickyColumnStyles([footerRow], _this61._footerRowDefs[i]);
            }); // Reset the dirty state of the sticky input change since it has been used.

            Array.from(this._columnDefsByName.values()).forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Get the list of RenderRow objects to render according to the current list of data and defined
           * row definitions. If the previous list already contained a particular pair, it should be reused
           * so that the differ equates their references.
           */

        }, {
          key: "_getAllRenderRows",
          value: function _getAllRenderRows() {
            var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.

            var prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

            for (var i = 0; i < this._data.length; i++) {
              var data = this._data[i];

              var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

              if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
              }

              for (var j = 0; j < renderRowsForData.length; j++) {
                var renderRow = renderRowsForData[j];

                var cache = this._cachedRenderRowsMap.get(renderRow.data);

                if (cache.has(renderRow.rowDef)) {
                  cache.get(renderRow.rowDef).push(renderRow);
                } else {
                  cache.set(renderRow.rowDef, [renderRow]);
                }

                renderRows.push(renderRow);
              }
            }

            return renderRows;
          }
          /**
           * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
           * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
           * `(T, CdkRowDef)` pair.
           */

        }, {
          key: "_getRenderRowsForData",
          value: function _getRenderRowsForData(data, dataIndex, cache) {
            var rowDefs = this._getRowDefs(data, dataIndex);

            return rowDefs.map(function (rowDef) {
              var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

              if (cachedRenderRows.length) {
                var dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
              } else {
                return {
                  data: data,
                  rowDef: rowDef,
                  dataIndex: dataIndex
                };
              }
            });
          }
          /** Update the map containing the content's column definitions. */

        }, {
          key: "_cacheColumnDefs",
          value: function _cacheColumnDefs() {
            var _this62 = this;

            this._columnDefsByName.clear();

            var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(function (columnDef) {
              if (_this62._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
              }

              _this62._columnDefsByName.set(columnDef.name, columnDef);
            });
          }
          /** Update the list of all available row definitions that can be used. */

        }, {
          key: "_cacheRowDefs",
          value: function _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

            var defaultRowDefs = this._rowDefs.filter(function (def) {
              return !def.when;
            });

            if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableMultipleDefaultRowDefsError();
            }

            this._defaultRowDef = defaultRowDefs[0];
          }
          /**
           * Check if the header, data, or footer rows have changed what columns they want to display or
           * whether the sticky states have changed for the header or footer. If there is a diff, then
           * re-render that section.
           */

        }, {
          key: "_renderUpdatedColumns",
          value: function _renderUpdatedColumns() {
            var columnsDiffReducer = function columnsDiffReducer(acc, def) {
              return acc || !!def.getColumnsDiff();
            }; // Force re-render data rows if the list of column definitions have changed.


            var dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

            if (dataColumnsChanged) {
              this._forceRenderDataRows();
            } // Force re-render header/footer rows if the list of column definitions have changed.


            var headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

            if (headerColumnsChanged) {
              this._forceRenderHeaderRows();
            }

            var footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

            if (footerColumnsChanged) {
              this._forceRenderFooterRows();
            }

            return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
          }
          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the row outlet. Otherwise start listening for new data.
           */

        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            this._data = [];

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
              this.dataSource.disconnect(this);
            } // Stop listening for data from the previous data source.


            if (this._renderChangeSubscription) {
              this._renderChangeSubscription.unsubscribe();

              this._renderChangeSubscription = null;
            }

            if (!dataSource) {
              if (this._dataDiffer) {
                this._dataDiffer.diff([]);
              }

              this._rowOutlet.viewContainer.clear();
            }

            this._dataSource = dataSource;
          }
          /** Set up a subscription for the data provided by the data source. */

        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this63 = this;

            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
              return;
            }

            var dataStream;

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
              dataStream = this.dataSource.connect(this);
            } else if ((0, rxjs__WEBPACK_IMPORTED_MODULE_8__.isObservable)(this.dataSource)) {
              dataStream = this.dataSource;
            } else if (Array.isArray(this.dataSource)) {
              dataStream = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.dataSource);
            }

            if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableUnknownDataSourceError();
            }

            this._renderChangeSubscription = dataStream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(function (data) {
              _this63._data = data || [];

              _this63.renderRows();
            });
          }
          /**
           * Clears any existing content in the header row outlet and creates a new embedded view
           * in the outlet using the header row definition.
           */

        }, {
          key: "_forceRenderHeaderRows",
          value: function _forceRenderHeaderRows() {
            var _this64 = this;

            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
              this._headerRowOutlet.viewContainer.clear();
            }

            this._headerRowDefs.forEach(function (def, i) {
              return _this64._renderRow(_this64._headerRowOutlet, def, i);
            });

            this.updateStickyHeaderRowStyles();
          }
          /**
           * Clears any existing content in the footer row outlet and creates a new embedded view
           * in the outlet using the footer row definition.
           */

        }, {
          key: "_forceRenderFooterRows",
          value: function _forceRenderFooterRows() {
            var _this65 = this;

            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
              this._footerRowOutlet.viewContainer.clear();
            }

            this._footerRowDefs.forEach(function (def, i) {
              return _this65._renderRow(_this65._footerRowOutlet, def, i);
            });

            this.updateStickyFooterRowStyles();
          }
          /** Adds the sticky column styles for the rows according to the columns' stick states. */

        }, {
          key: "_addStickyColumnStyles",
          value: function _addStickyColumnStyles(rows, rowDef) {
            var _this66 = this;

            var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
              var columnDef = _this66._columnDefsByName.get(columnName);

              if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
              }

              return columnDef;
            });
            var stickyStartStates = columnDefs.map(function (columnDef) {
              return columnDef.sticky;
            });
            var stickyEndStates = columnDefs.map(function (columnDef) {
              return columnDef.stickyEnd;
            });

            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
          }
          /** Gets the list of rows that have been rendered in the row outlet. */

        }, {
          key: "_getRenderedRows",
          value: function _getRenderedRows(rowOutlet) {
            var renderedRows = [];

            for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
              var viewRef = rowOutlet.viewContainer.get(i);
              renderedRows.push(viewRef.rootNodes[0]);
            }

            return renderedRows;
          }
          /**
           * Get the matching row definitions that should be used for this row data. If there is only
           * one row definition, it is returned. Otherwise, find the row definitions that has a when
           * predicate that returns true with the data. If none return true, return the default row
           * definition.
           */

        }, {
          key: "_getRowDefs",
          value: function _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
              return [this._rowDefs[0]];
            }

            var rowDefs = [];

            if (this.multiTemplateDataRows) {
              rowDefs = this._rowDefs.filter(function (def) {
                return !def.when || def.when(dataIndex, data);
              });
            } else {
              var rowDef = this._rowDefs.find(function (def) {
                return def.when && def.when(dataIndex, data);
              }) || this._defaultRowDef;

              if (rowDef) {
                rowDefs.push(rowDef);
              }
            }

            if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableMissingMatchingRowDefError(data);
            }

            return rowDefs;
          }
        }, {
          key: "_getEmbeddedViewArgs",
          value: function _getEmbeddedViewArgs(renderRow, index) {
            var rowDef = renderRow.rowDef;
            var context = {
              $implicit: renderRow.data
            };
            return {
              templateRef: rowDef.template,
              context: context,
              index: index
            };
          }
          /**
           * Creates a new row template in the outlet and fills it with the set of cell templates.
           * Optionally takes a context to provide to the row and cells, as well as an optional index
           * of where to place the new row template in the outlet.
           */

        }, {
          key: "_renderRow",
          value: function _renderRow(outlet, rowDef, index) {
            var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            var view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

            this._renderCellTemplateForItem(rowDef, context);

            return view;
          }
        }, {
          key: "_renderCellTemplateForItem",
          value: function _renderCellTemplateForItem(rowDef, context) {
            var _iterator11 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var cellTemplate = _step11.value;

                if (_CdkCellOutlet.mostRecentCellOutlet) {
                  _CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Updates the index-related context for each row to reflect any changes in the index of the rows,
           * e.g. first/last/even/odd.
           */

        }, {
          key: "_updateRowIndexContext",
          value: function _updateRowIndexContext() {
            var viewContainer = this._rowOutlet.viewContainer;

            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
              var viewRef = viewContainer.get(renderIndex);
              var context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;

              if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
              } else {
                context.index = this._renderRows[renderIndex].dataIndex;
              }
            }
          }
          /** Gets the column definitions for the provided row def. */

        }, {
          key: "_getCellTemplates",
          value: function _getCellTemplates(rowDef) {
            var _this67 = this;

            if (!rowDef || !rowDef.columns) {
              return [];
            }

            return Array.from(rowDef.columns, function (columnId) {
              var column = _this67._columnDefsByName.get(columnId);

              if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
              }

              return rowDef.extractCellTemplate(column);
            });
          }
          /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

        }, {
          key: "_applyNativeTableSections",
          value: function _applyNativeTableSections() {
            var documentFragment = this._document.createDocumentFragment();

            var sections = [{
              tag: 'thead',
              outlets: [this._headerRowOutlet]
            }, {
              tag: 'tbody',
              outlets: [this._rowOutlet, this._noDataRowOutlet]
            }, {
              tag: 'tfoot',
              outlets: [this._footerRowOutlet]
            }];

            for (var _i7 = 0, _sections = sections; _i7 < _sections.length; _i7++) {
              var section = _sections[_i7];

              var element = this._document.createElement(section.tag);

              element.setAttribute('role', 'rowgroup');

              var _iterator12 = _createForOfIteratorHelper(section.outlets),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var outlet = _step12.value;
                  element.appendChild(outlet.elementRef.nativeElement);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              documentFragment.appendChild(element);
            } // Use a DocumentFragment so we don't hit the DOM on each iteration.


            this._elementRef.nativeElement.appendChild(documentFragment);
          }
          /**
           * Forces a re-render of the data rows. Should be called in cases where there has been an input
           * change that affects the evaluation of which rows should be rendered, e.g. toggling
           * `multiTemplateDataRows` or adding/removing row definitions.
           */

        }, {
          key: "_forceRenderDataRows",
          value: function _forceRenderDataRows() {
            this._dataDiffer.diff([]);

            this._rowOutlet.viewContainer.clear();

            this.renderRows();
          }
          /**
           * Checks if there has been a change in sticky states since last check and applies the correct
           * sticky styles. Since checking resets the "dirty" state, this should only be performed once
           * during a change detection and after the inputs are settled (after content check).
           */

        }, {
          key: "_checkStickyStates",
          value: function _checkStickyStates() {
            var stickyCheckReducer = function stickyCheckReducer(acc, d) {
              return acc || d.hasStickyChanged();
            }; // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.


            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyHeaderRowStyles();
            }

            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyFooterRowStyles();
            }

            if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
              this._stickyColumnStylesNeedReset = true;
              this.updateStickyColumnStyles();
            }
          }
          /**
           * Creates the sticky styler that will be used for sticky rows and columns. Listens
           * for directionality changes and provides the latest direction to the styler. Re-applies column
           * stickiness when directionality changes.
           */

        }, {
          key: "_setupStickyStyler",
          value: function _setupStickyStyler() {
            var _this68 = this;

            var direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new _StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
            (this._dir ? this._dir.change : (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(function (value) {
              _this68._stickyStyler.direction = value;

              _this68.updateStickyColumnStyles();
            });
          }
          /** Filters definitions that belong to this table from a QueryList. */

        }, {
          key: "_getOwnDefs",
          value: function _getOwnDefs(items) {
            var _this69 = this;

            return items.filter(function (item) {
              return !item._table || item._table === _this69;
            });
          }
          /** Creates or removes the no data row, depending on whether any data is being shown. */

        }, {
          key: "_updateNoDataRow",
          value: function _updateNoDataRow() {
            var noDataRow = this._customNoDataRow || this._noDataRow;

            if (!noDataRow) {
              return;
            }

            var shouldShow = this._rowOutlet.viewContainer.length === 0;

            if (shouldShow === this._isShowingNoDataRow) {
              return;
            }

            var container = this._noDataRowOutlet.viewContainer;

            if (shouldShow) {
              var view = container.createEmbeddedView(noDataRow.templateRef);
              var rootNode = view.rootNodes[0]; // Only add the attributes if we have a single root node since it's hard
              // to figure out which one to add it to when there are multiple.

              if (view.rootNodes.length === 1 && (rootNode === null || rootNode === void 0 ? void 0 : rootNode.nodeType) === this._document.ELEMENT_NODE) {
                rootNode.setAttribute('role', 'row');
                rootNode.classList.add(noDataRow._contentClassName);
              }
            } else {
              container.clear();
            }

            this._isShowingNoDataRow = shouldShow;
          }
        }]);

        return _CdkTable;
      }();

      _CdkTable.ɵfac = function CdkTable_Factory(t) {
        return new (t || _CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_STICKY_POSITIONING_LISTENER, 12));
      };

      _CdkTable.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CdkTable,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkNoDataRow, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkColumnDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkRowDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkHeaderRowDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _CdkFooterRowDef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
          }
        },
        viewQuery: function CdkTable_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_DataRowOutlet, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_HeaderRowOutlet, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_FooterRowOutlet, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_NoDataRowOutlet, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
          }
        },
        hostAttrs: [1, "cdk-table"],
        hostVars: 2,
        hostBindings: function CdkTable_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
          }
        },
        inputs: {
          trackBy: "trackBy",
          dataSource: "dataSource",
          multiTemplateDataRows: "multiTemplateDataRows",
          fixedLayout: "fixedLayout"
        },
        outputs: {
          contentChanged: "contentChanged"
        },
        exportAs: ["cdkTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _CDK_TABLE,
          useExisting: _CdkTable
        }, {
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy
        }, {
          provide: _COALESCED_STYLE_SCHEDULER2,
          useClass: _CoalescedStyleScheduler2
        }, // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: _STICKY_POSITIONING_LISTENER,
          useValue: null
        }])],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function CdkTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [_HeaderRowOutlet, _DataRowOutlet, _NoDataRowOutlet, _FooterRowOutlet],
        styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'cdk-table, table[cdk-table]',
            exportAs: 'cdkTable',
            template: _CDK_TABLE_TEMPLATE,
            host: {
              'class': 'cdk-table',
              '[class.cdk-table-fixed-layout]': 'fixedLayout'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
            providers: [{
              provide: _CDK_TABLE,
              useExisting: _CdkTable
            }, {
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy
            }, {
              provide: _COALESCED_STYLE_SCHEDULER2,
              useClass: _CoalescedStyleScheduler2
            }, // Prevent nested tables from seeing this table's StickyPositioningListener.
            {
              provide: _STICKY_POSITIONING_LISTENER,
              useValue: null
            }],
            styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
              args: ['role']
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY]
            }]
          }, {
            type: _CoalescedStyleScheduler2,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_COALESCED_STYLE_SCHEDULER2]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_STICKY_POSITIONING_LISTENER]
            }]
          }];
        }, {
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          fixedLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          contentChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_DataRowOutlet, {
              "static": true
            }]
          }],
          _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_HeaderRowOutlet, {
              "static": true
            }]
          }],
          _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_FooterRowOutlet, {
              "static": true
            }]
          }],
          _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_NoDataRowOutlet, {
              "static": true
            }]
          }],
          _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [_CdkColumnDef, {
              descendants: true
            }]
          }],
          _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [_CdkRowDef, {
              descendants: true
            }]
          }],
          _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [_CdkHeaderRowDef, {
              descendants: true
            }]
          }],
          _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
            args: [_CdkFooterRowDef, {
              descendants: true
            }]
          }],
          _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [_CdkNoDataRow]
          }]
        });
      })();
      /** Utility function that gets a merged list of the entries in an array and values of a Set. */


      function mergeArrayAndSet(array, set) {
        return array.concat(Array.from(set));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var _CdkTextColumn = /*#__PURE__*/function () {
        function _CdkTextColumn( // `CdkTextColumn` is always requiring a table, but we just assert it manually
        // for better error reporting.
        // tslint:disable-next-line: lightweight-tokens
        _table, _options) {
          _classCallCheck(this, _CdkTextColumn);

          this._table = _table;
          this._options = _options;
          /** Alignment of the cell values. */

          this.justify = 'start';
          this._options = _options || {};
        }
        /** Column name that should be used to reference this column. */


        _createClass(_CdkTextColumn, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name; // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.

            this._syncColumnDefName();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._syncColumnDefName();

            if (this.headerText === undefined) {
              this.headerText = this._createDefaultHeaderText();
            }

            if (!this.dataAccessor) {
              this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
                return data[name];
              };
            }

            if (this._table) {
              // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
              // since the columnDef will not pick up its content by the time the table finishes checking
              // its content and initializing the rows.
              this.columnDef.cell = this.cell;
              this.columnDef.headerCell = this.headerCell;

              this._table.addColumnDef(this.columnDef);
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw getTableTextColumnMissingParentTableError();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._table) {
              this._table.removeColumnDef(this.columnDef);
            }
          }
          /**
           * Creates a default header text. Use the options' header text transformation function if one
           * has been provided. Otherwise simply capitalize the column name.
           */

        }, {
          key: "_createDefaultHeaderText",
          value: function _createDefaultHeaderText() {
            var name = this.name;

            if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableTextColumnMissingNameError();
            }

            if (this._options && this._options.defaultHeaderTextTransform) {
              return this._options.defaultHeaderTextTransform(name);
            }

            return name[0].toUpperCase() + name.slice(1);
          }
          /** Synchronizes the column definition name with the text column name. */

        }, {
          key: "_syncColumnDefName",
          value: function _syncColumnDefName() {
            if (this.columnDef) {
              this.columnDef.name = this.name;
            }
          }
        }]);

        return _CdkTextColumn;
      }();

      _CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
        return new (t || _CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_TEXT_COLUMN_OPTIONS, 8));
      };

      _CdkTextColumn.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CdkTextColumn,
        selectors: [["cdk-text-column"]],
        viewQuery: function CdkTextColumn_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_CdkColumnDef, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_CdkCellDef, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_CdkHeaderCellDef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          }
        },
        inputs: {
          name: "name",
          headerText: "headerText",
          dataAccessor: "dataAccessor",
          justify: "justify"
        },
        decls: 3,
        vars: 0,
        consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
        template: function CdkTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [_CdkColumnDef, _CdkHeaderCellDef, _CdkCellDef, _CdkHeaderCell, _CdkCell],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'cdk-text-column',
            template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default
          }]
        }], function () {
          return [{
            type: _CdkTable,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_TEXT_COLUMN_OPTIONS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_CdkColumnDef, {
              "static": true
            }]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_CdkCellDef, {
              "static": true
            }]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_CdkHeaderCellDef, {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [_CdkTable, _CdkRowDef, _CdkCellDef, _CdkCellOutlet, _CdkHeaderCellDef, _CdkFooterCellDef, _CdkColumnDef, _CdkCell, _CdkRow, _CdkHeaderCell, _CdkFooterCell, _CdkHeaderRow, _CdkHeaderRowDef, _CdkFooterRow, _CdkFooterRowDef, _DataRowOutlet, _HeaderRowOutlet, _FooterRowOutlet, _CdkTextColumn, _CdkNoDataRow, _CdkRecycleRows, _NoDataRowOutlet];

      var _CdkTableModule = /*#__PURE__*/_createClass(function _CdkTableModule() {
        _classCallCheck(this, _CdkTableModule);
      });

      _CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
        return new (t || _CdkTableModule)();
      };

      _CdkTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CdkTableModule
      });
      _CdkTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CdkTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            exports: EXPORTED_DECLARATIONS,
            declarations: EXPORTED_DECLARATIONS,
            imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    19975:
    /*!*************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/divider.mjs ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatDivider": function MatDivider() {
          return (
            /* binding */
            _MatDivider
          );
        },

        /* harmony export */
        "MatDividerModule": function MatDividerModule() {
          return (
            /* binding */
            _MatDividerModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      76484);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      88133);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatDivider = /*#__PURE__*/function () {
        function _MatDivider() {
          _classCallCheck(this, _MatDivider);

          this._vertical = false;
          this._inset = false;
        }
        /** Whether the divider is vertically aligned. */


        _createClass(_MatDivider, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
          }
          /** Whether the divider is an inset divider. */

        }, {
          key: "inset",
          get: function get() {
            return this._inset;
          },
          set: function set(value) {
            this._inset = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
          }
        }]);

        return _MatDivider;
      }();

      _MatDivider.ɵfac = function MatDivider_Factory(t) {
        return new (t || _MatDivider)();
      };

      _MatDivider.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MatDivider,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function MatDivider_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
          }
        },
        inputs: {
          vertical: "vertical",
          inset: "inset"
        },
        decls: 0,
        vars: 0,
        template: function MatDivider_Template(rf, ctx) {},
        styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'mat-divider',
            host: {
              'role': 'separator',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-divider-vertical]': 'vertical',
              '[class.mat-divider-horizontal]': '!vertical',
              '[class.mat-divider-inset]': 'inset',
              'class': 'mat-divider'
            },
            template: '',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
          }]
        }], null, {
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          inset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatDividerModule = /*#__PURE__*/_createClass(function _MatDividerModule() {
        _classCallCheck(this, _MatDividerModule);
      });

      _MatDividerModule.ɵfac = function MatDividerModule_Factory(t) {
        return new (t || _MatDividerModule)();
      };

      _MatDividerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatDividerModule
      });
      _MatDividerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatDividerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
            exports: [_MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
            declarations: [_MatDivider]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    60833:
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/progress-bar.mjs ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_PROGRESS_BAR_DEFAULT_OPTIONS": function MAT_PROGRESS_BAR_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_PROGRESS_BAR_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MAT_PROGRESS_BAR_LOCATION": function MAT_PROGRESS_BAR_LOCATION() {
          return (
            /* binding */
            _MAT_PROGRESS_BAR_LOCATION
          );
        },

        /* harmony export */
        "MAT_PROGRESS_BAR_LOCATION_FACTORY": function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
          return (
            /* binding */
            _MAT_PROGRESS_BAR_LOCATION_FACTORY
          );
        },

        /* harmony export */
        "MatProgressBar": function MatProgressBar() {
          return (
            /* binding */
            _MatProgressBar
          );
        },

        /* harmony export */
        "MatProgressBarModule": function MatProgressBarModule() {
          return (
            /* binding */
            _MatProgressBarModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/core */
      88133);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      76484);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      9329);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      14474);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      39754);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatProgressBar.

      /** @docs-private */


      var _c0 = ["primaryValueBar"];

      var _MatProgressBarBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)( /*#__PURE__*/function () {
        function _class2(_elementRef) {
          _classCallCheck(this, _class2);

          this._elementRef = _elementRef;
        }

        return _createClass(_class2);
      }(), 'primary');
      /**
       * Injection token used to provide the current location to `MatProgressBar`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var _MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-progress-bar-location', {
        providedIn: 'root',
        factory: _MAT_PROGRESS_BAR_LOCATION_FACTORY
      });
      /** @docs-private */


      function _MAT_PROGRESS_BAR_LOCATION_FACTORY() {
        var _document = (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** Injection token to be used to override the default options for `mat-progress-bar`. */


      var _MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_PROGRESS_BAR_DEFAULT_OPTIONS');
      /** Counter used to generate unique IDs for progress bars. */


      var progressbarId = 0;
      /**
       * `<mat-progress-bar>` component.
       */

      var _MatProgressBar = /*#__PURE__*/function (_MatProgressBarBase2) {
        _inherits(_MatProgressBar, _MatProgressBarBase2);

        var _super39 = _createSuper(_MatProgressBar);

        function _MatProgressBar(elementRef, _ngZone, _animationMode,
        /**
         * @deprecated `location` parameter to be made required.
         * @breaking-change 8.0.0
         */
        location, defaults) {
          var _this70;

          _classCallCheck(this, _MatProgressBar);

          _this70 = _super39.call(this, elementRef);
          _this70._ngZone = _ngZone;
          _this70._animationMode = _animationMode;
          /** Flag that indicates whether NoopAnimations mode is set to true. */

          _this70._isNoopAnimation = false;
          _this70._value = 0;
          _this70._bufferValue = 0;
          /**
           * Event emitted when animation of the primary progress bar completes. This event will not
           * be emitted when animations are disabled, nor will it be emitted for modes with continuous
           * animations (indeterminate and query).
           */

          _this70.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          /** Reference to animation end subscription to be unsubscribed on destroy. */

          _this70._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
          /**
           * Mode of the progress bar.
           *
           * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
           * 'determinate'.
           * Mirrored to mode attribute.
           */

          _this70.mode = 'determinate';
          /** ID of the progress bar. */

          _this70.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
          // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
          // because named route URLs can contain parentheses (see #12338). Also we don't use since
          // we can't tell the difference between whether
          // the consumer is using the hash location strategy or not, because `Location` normalizes
          // both `/#/foo/bar` and `/foo/bar` to the same thing.

          var path = location ? location.getPathname().split('#')[0] : '';
          _this70._rectangleFillValue = "url('".concat(path, "#").concat(_this70.progressbarId, "')");
          _this70._isNoopAnimation = _animationMode === 'NoopAnimations';

          if (defaults) {
            if (defaults.color) {
              _this70.color = _this70.defaultColor = defaults.color;
            }

            _this70.mode = defaults.mode || _this70.mode;
          }

          return _this70;
        }
        /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */


        _createClass(_MatProgressBar, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v) {
            this._value = clamp((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(v) || 0);
          }
          /** Buffer value of the progress bar. Defaults to zero. */

        }, {
          key: "bufferValue",
          get: function get() {
            return this._bufferValue;
          },
          set: function set(v) {
            this._bufferValue = clamp(v || 0);
          }
          /** Gets the current transform value for the progress bar's primary indicator. */

        }, {
          key: "_primaryTransform",
          value: function _primaryTransform() {
            // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
            var scale = this.value / 100;
            return {
              transform: "scale3d(".concat(scale, ", 1, 1)")
            };
          }
          /**
           * Gets the current transform value for the progress bar's buffer indicator. Only used if the
           * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
           */

        }, {
          key: "_bufferTransform",
          value: function _bufferTransform() {
            if (this.mode === 'buffer') {
              // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
              var scale = this.bufferValue / 100;
              return {
                transform: "scale3d(".concat(scale, ", 1, 1)")
              };
            }

            return null;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this71 = this;

            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular(function () {
              var element = _this71._primaryValueBar.nativeElement;
              _this71._animationEndSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'transitionend').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (e) {
                return e.target === element;
              })).subscribe(function () {
                if (_this71.mode === 'determinate' || _this71.mode === 'buffer') {
                  _this71._ngZone.run(function () {
                    return _this71.animationEnd.next({
                      value: _this71.value
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._animationEndSubscription.unsubscribe();
          }
        }]);

        return _MatProgressBar;
      }(_MatProgressBarBase);

      _MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
        return new (t || _MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_MAT_PROGRESS_BAR_LOCATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8));
      };

      _MatProgressBar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MatProgressBar,
        selectors: [["mat-progress-bar"]],
        viewQuery: function MatProgressBar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
          }
        },
        hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-progress-bar"],
        hostVars: 4,
        hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
          }
        },
        inputs: {
          color: "color",
          value: "value",
          bufferValue: "bufferValue",
          mode: "mode"
        },
        outputs: {
          animationEnd: "animationEnd"
        },
        exportAs: ["matProgressBar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 4,
        consts: [["aria-hidden", "true"], ["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
        template: function MatProgressBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "pattern", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "circle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.progressbarId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx._rectangleFillValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
        styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatProgressBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'mat-progress-bar',
            exportAs: 'matProgressBar',
            host: {
              'role': 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              // set tab index to -1 so screen readers will read the aria-label
              // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
              'tabindex': '-1',
              '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
              '[attr.mode]': 'mode',
              'class': 'mat-progress-bar',
              '[class._mat-animation-noopable]': '_isNoopAnimation'
            },
            inputs: ['color'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            template: "<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div aria-hidden=\"true\">\n  <svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n    <defs>\n      <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n        <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n      </pattern>\n    </defs>\n    <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n  </svg>\n  <!--\n    The background div is named as such because it appears below the other divs and is not sized based\n    on values.\n  -->\n  <div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n  <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n  <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n</div>\n",
            styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.ANIMATION_MODULE_TYPE]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_MAT_PROGRESS_BAR_LOCATION]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
              args: [_MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['primaryValueBar']
          }],
          animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }]
        });
      })();
      /** Clamps a value to be between two numbers, by default 0 and 100. */


      function clamp(v) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return Math.max(min, Math.min(max, v));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatProgressBarModule = /*#__PURE__*/_createClass(function _MatProgressBarModule() {
        _classCallCheck(this, _MatProgressBarModule);
      });

      _MatProgressBarModule.ɵfac = function MatProgressBarModule_Factory(t) {
        return new (t || _MatProgressBarModule)();
      };

      _MatProgressBarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _MatProgressBarModule
      });
      _MatProgressBarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            exports: [_MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
            declarations: [_MatProgressBar]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    61859:
    /*!************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/slider.mjs ***!
      \************************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_SLIDER_VALUE_ACCESSOR": function MAT_SLIDER_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MAT_SLIDER_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "MatSlider": function MatSlider() {
          return (
            /* binding */
            _MatSlider
          );
        },

        /* harmony export */
        "MatSliderChange": function MatSliderChange() {
          return (
            /* binding */
            _MatSliderChange
          );
        },

        /* harmony export */
        "MatSliderModule": function MatSliderModule() {
          return (
            /* binding */
            _MatSliderModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      88133);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      76484);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      75939);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      14390);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      9329);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      84128);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      51588);

      var _c0 = ["sliderWrapper"];
      var activeEventOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
        passive: false
      });
      /**
       * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
       * the default separation we chose.
       */

      var MIN_AUTO_TICK_SEPARATION = 30;
      /** The thumb gap size for a disabled slider. */

      var DISABLED_THUMB_GAP = 7;
      /** The thumb gap size for a non-active slider at its minimum value. */

      var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
      /** The thumb gap size for an active slider at its minimum value. */

      var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
      /**
       * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)] and [formControl].
       * @docs-private
       */

      var _MAT_SLIDER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function () {
          return _MatSlider;
        }),
        multi: true
      };
      /** A simple change event emitted by the MatSlider component. */

      var _MatSliderChange = /*#__PURE__*/_createClass(function _MatSliderChange() {
        _classCallCheck(this, _MatSliderChange);
      }); // Boilerplate for applying mixins to MatSlider.

      /** @docs-private */


      var _MatSliderBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)( /*#__PURE__*/function () {
        function _class3(_elementRef) {
          _classCallCheck(this, _class3);

          this._elementRef = _elementRef;
        }

        return _createClass(_class3);
      }()), 'accent'));
      /**
       * Allows users to select from a range of values by moving the slider thumb. It is similar in
       * behavior to the native `<input type="range">` element.
       */


      var _MatSlider = /*#__PURE__*/function (_MatSliderBase2) {
        _inherits(_MatSlider, _MatSliderBase2);

        var _super40 = _createSuper(_MatSlider);

        function _MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
          var _this72;

          _classCallCheck(this, _MatSlider);

          _this72 = _super40.call(this, elementRef);
          _this72._focusMonitor = _focusMonitor;
          _this72._changeDetectorRef = _changeDetectorRef;
          _this72._dir = _dir;
          _this72._ngZone = _ngZone;
          _this72._animationMode = _animationMode;
          _this72._invert = false;
          _this72._max = 100;
          _this72._min = 0;
          _this72._step = 1;
          _this72._thumbLabel = false;
          _this72._tickInterval = 0;
          _this72._value = null;
          _this72._vertical = false;
          /** Event emitted when the slider value has changed. */

          _this72.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /** Event emitted when the slider thumb moves. */

          _this72.input = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Emits when the raw value of the slider changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this72.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */

          _this72.onTouched = function () {};

          _this72._percent = 0;
          /**
           * Whether or not the thumb is sliding and what the user is using to slide it with.
           * Used to determine if there should be a transition for the thumb and fill track.
           */

          _this72._isSliding = null;
          /**
           * Whether or not the slider is active (clicked or sliding).
           * Used to shrink and grow the thumb as according to the Material Design spec.
           */

          _this72._isActive = false;
          /** The size of a tick interval as a percentage of the size of the track. */

          _this72._tickIntervalPercent = 0;
          /** The dimensions of the slider. */

          _this72._sliderDimensions = null;

          _this72._controlValueAccessorChangeFn = function () {};
          /** Subscription to the Directionality change EventEmitter. */


          _this72._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
          /** Called when the user has put their pointer down on the slider. */

          _this72._pointerDown = function (event) {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (_this72.disabled || _this72._isSliding || !isTouchEvent(event) && event.button !== 0) {
              return;
            }

            _this72._ngZone.run(function () {
              _this72._touchId = isTouchEvent(event) ? getTouchIdForSlider(event, _this72._elementRef.nativeElement) : undefined;
              var pointerPosition = getPointerPositionOnPage(event, _this72._touchId);

              if (pointerPosition) {
                var oldValue = _this72.value;
                _this72._isSliding = 'pointer';
                _this72._lastPointerEvent = event;
                event.preventDefault();

                _this72._focusHostElement();

                _this72._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


                _this72._bindGlobalEvents(event);

                _this72._focusHostElement();

                _this72._updateValueFromPosition(pointerPosition);

                _this72._valueOnSlideStart = oldValue; // Emit a change and input event if the value changed.

                if (oldValue != _this72.value) {
                  _this72._emitInputEvent();
                }
              }
            });
          };
          /**
           * Called when the user has moved their pointer after
           * starting to drag. Bound on the document level.
           */


          _this72._pointerMove = function (event) {
            if (_this72._isSliding === 'pointer') {
              var pointerPosition = getPointerPositionOnPage(event, _this72._touchId);

              if (pointerPosition) {
                // Prevent the slide from selecting anything else.
                event.preventDefault();
                var oldValue = _this72.value;
                _this72._lastPointerEvent = event;

                _this72._updateValueFromPosition(pointerPosition); // Native range elements always emit `input` events when the value changed while sliding.


                if (oldValue != _this72.value) {
                  _this72._emitInputEvent();
                }
              }
            }
          };
          /** Called when the user has lifted their pointer. Bound on the document level. */


          _this72._pointerUp = function (event) {
            if (_this72._isSliding === 'pointer') {
              if (!isTouchEvent(event) || typeof _this72._touchId !== 'number' || // Note that we use `changedTouches`, rather than `touches` because it
              // seems like in most cases `touches` is empty for `touchend` events.
              findMatchingTouch(event.changedTouches, _this72._touchId)) {
                event.preventDefault();

                _this72._removeGlobalEvents();

                _this72._isSliding = null;
                _this72._touchId = undefined;

                if (_this72._valueOnSlideStart != _this72.value && !_this72.disabled) {
                  _this72._emitChangeEvent();
                }

                _this72._valueOnSlideStart = _this72._lastPointerEvent = null;
              }
            }
          };
          /** Called when the window has lost focus. */


          _this72._windowBlur = function () {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (_this72._lastPointerEvent) {
              _this72._pointerUp(_this72._lastPointerEvent);
            }
          };

          _this72._document = _document;
          _this72.tabIndex = parseInt(tabIndex) || 0;

          _ngZone.runOutsideAngular(function () {
            var element = elementRef.nativeElement;
            element.addEventListener('mousedown', _this72._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', _this72._pointerDown, activeEventOptions);
          });

          return _this72;
        }
        /** Whether the slider is inverted. */


        _createClass(_MatSlider, [{
          key: "invert",
          get: function get() {
            return this._invert;
          },
          set: function set(value) {
            this._invert = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /** The maximum value that the slider can have. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(v) {
            this._max = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._max);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The minimum value that the slider can have. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(v) {
            this._min = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._min);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The values at which the thumb will snap. */

        }, {
          key: "step",
          get: function get() {
            return this._step;
          },
          set: function set(v) {
            this._step = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._step);

            if (this._step % 1 !== 0) {
              this._roundToDecimal = this._step.toString().split('.').pop().length;
            } // Since this could modify the label, we need to notify the change detection.


            this._changeDetectorRef.markForCheck();
          }
          /** Whether or not to show the thumb label. */

        }, {
          key: "thumbLabel",
          get: function get() {
            return this._thumbLabel;
          },
          set: function set(value) {
            this._thumbLabel = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /**
           * How often to show ticks. Relative to the step so that a tick always appears on a step.
           * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
           */

        }, {
          key: "tickInterval",
          get: function get() {
            return this._tickInterval;
          },
          set: function set(value) {
            if (value === 'auto') {
              this._tickInterval = 'auto';
            } else if (typeof value === 'number' || typeof value === 'string') {
              this._tickInterval = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value, this._tickInterval);
            } else {
              this._tickInterval = 0;
            }
          }
          /** Value of the slider. */

        }, {
          key: "value",
          get: function get() {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
              this.value = this._min;
            }

            return this._value;
          },
          set: function set(v) {
            if (v !== this._value) {
              var value = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, 0); // While incrementing by a decimal we can end up with values like 33.300000000000004.
              // Truncate it to ensure that it matches the label and to make it easier to work with.

              if (this._roundToDecimal && value !== this.min && value !== this.max) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
              }

              this._value = value;
              this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the slider is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /** The value to be used for display purposes. */

        }, {
          key: "displayValue",
          get: function get() {
            if (this.displayWith) {
              // Value is never null but since setters and getters cannot have
              // different types, the value getter is also typed to return null.
              return this.displayWith(this.value);
            } // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.


            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
              return this.value.toFixed(this._roundToDecimal);
            }

            return this.value || 0;
          }
          /** set focus to the host element */

        }, {
          key: "focus",
          value: function focus(options) {
            this._focusHostElement(options);
          }
          /** blur the host element */

        }, {
          key: "blur",
          value: function blur() {
            this._blurHostElement();
          }
          /** The percentage of the slider that coincides with the value. */

        }, {
          key: "percent",
          get: function get() {
            return this._clamp(this._percent);
          }
          /**
           * Whether the axis of the slider is inverted.
           * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
           */

        }, {
          key: "_shouldInvertAxis",
          value: function _shouldInvertAxis() {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
          }
          /** Whether the slider is at its minimum value. */

        }, {
          key: "_isMinValue",
          value: function _isMinValue() {
            return this.percent === 0;
          }
          /**
           * The amount of space to leave between the slider thumb and the track fill & track background
           * elements.
           */

        }, {
          key: "_getThumbGap",
          value: function _getThumbGap() {
            if (this.disabled) {
              return DISABLED_THUMB_GAP;
            }

            if (this._isMinValue() && !this.thumbLabel) {
              return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }

            return 0;
          }
          /** CSS styles for the track background element. */

        }, {
          key: "_getTrackBackgroundStyles",
          value: function _getTrackBackgroundStyles() {
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")")
            };
          }
          /** CSS styles for the track fill element. */

        }, {
          key: "_getTrackFillStyles",
          value: function _getTrackFillStyles() {
            var percent = this.percent;
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")"),
              // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
              // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
              // the value of the slider is 0, we can easily get into this situation. We force a
              // recalculation by changing the element's `display` when it goes from 0 to any other value.
              display: percent === 0 ? 'none' : ''
            };
          }
          /** CSS styles for the ticks container element. */

        }, {
          key: "_getTicksContainerStyles",
          value: function _getTicksContainerStyles() {
            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            var offset = this._tickIntervalPercent / 2 * 100;
            return {
              'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
            };
          }
          /** CSS styles for the ticks element. */

        }, {
          key: "_getTicksStyles",
          value: function _getTicksStyles() {
            var tickSize = this._tickIntervalPercent * 100;
            var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
            var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            var styles = {
              'backgroundSize': backgroundSize,
              // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
              'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
            };

            if (this._isMinValue() && this._getThumbGap()) {
              var shouldInvertAxis = this._shouldInvertAxis();

              var side;

              if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
              } else {
                side = shouldInvertAxis ? 'Right' : 'Left';
              }

              styles["padding".concat(side)] = "".concat(this._getThumbGap(), "px");
            }

            return styles;
          }
        }, {
          key: "_getThumbContainerStyles",
          value: function _getThumbContainerStyles() {
            var shouldInvertAxis = this._shouldInvertAxis();

            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
              'transform': "translate".concat(axis, "(-").concat(offset, "%)")
            };
          }
          /**
           * Whether mouse events should be converted to a slider position by calculating their distance
           * from the right or bottom edge of the slider as opposed to the top or left.
           */

        }, {
          key: "_shouldInvertMouseCoords",
          value: function _shouldInvertMouseCoords() {
            var shouldInvertAxis = this._shouldInvertAxis();

            return this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
          }
          /** The language direction for this slider element. */

        }, {
          key: "_getDirection",
          value: function _getDirection() {
            return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this73 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              _this73._isActive = !!origin && origin !== 'keyboard';

              _this73._changeDetectorRef.detectChanges();
            });

            if (this._dir) {
              this._dirChangeSubscription = this._dir.change.subscribe(function () {
                _this73._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
            this._lastPointerEvent = null;

            this._removeGlobalEvents();

            this._focusMonitor.stopMonitoring(this._elementRef);

            this._dirChangeSubscription.unsubscribe();
          }
        }, {
          key: "_onMouseenter",
          value: function _onMouseenter() {
            if (this.disabled) {
              return;
            } // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.


            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this.onTouched();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            if (this.disabled || (0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event) || this._isSliding && this._isSliding !== 'keyboard') {
              return;
            }

            var oldValue = this.value;

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_UP:
                this._increment(10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_DOWN:
                this._increment(-10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.END:
                this.value = this.max;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.HOME:
                this.value = this.min;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.LEFT_ARROW:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.UP_ARROW:
                this._increment(1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.RIGHT_ARROW:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.DOWN_ARROW:
                this._increment(-1);

                break;

              default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
            }

            if (oldValue != this.value) {
              this._emitInputEvent();

              this._emitChangeEvent();
            }

            this._isSliding = 'keyboard';
            event.preventDefault();
          }
        }, {
          key: "_onKeyup",
          value: function _onKeyup() {
            if (this._isSliding === 'keyboard') {
              this._isSliding = null;
            }
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /**
           * Binds our global move and end events. They're bound at the document level and only while
           * dragging so that the user doesn't have to keep their pointer exactly over the slider
           * as they're swiping across the screen.
           */

        }, {
          key: "_bindGlobalEvents",
          value: function _bindGlobalEvents(triggerEvent) {
            // Note that we bind the events to the `document`, because it allows us to capture
            // drag cancel events where the user's pointer is outside the browser window.
            var document = this._document;
            var isTouch = isTouchEvent(triggerEvent);
            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.addEventListener('blur', this._windowBlur);
            }
          }
          /** Removes any global event listeners that we may have added. */

        }, {
          key: "_removeGlobalEvents",
          value: function _removeGlobalEvents() {
            var document = this._document;
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.removeEventListener('blur', this._windowBlur);
            }
          }
          /** Increments the slider by the given number of steps (negative number decrements). */

        }, {
          key: "_increment",
          value: function _increment(numSteps) {
            this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
          }
          /** Calculate the new value from the new physical location. The value will always be snapped. */

        }, {
          key: "_updateValueFromPosition",
          value: function _updateValueFromPosition(pos) {
            if (!this._sliderDimensions) {
              return;
            }

            var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
            var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

            var percent = this._clamp((posComponent - offset) / size);

            if (this._shouldInvertMouseCoords()) {
              percent = 1 - percent;
            } // Since the steps may not divide cleanly into the max value, if the user
            // slid to 0 or 100 percent, we jump to the min/max value. This approach
            // is slightly more intuitive than using `Math.ceil` below, because it
            // follows the user's pointer closer.


            if (percent === 0) {
              this.value = this.min;
            } else if (percent === 1) {
              this.value = this.max;
            } else {
              var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
              // whole number divisible by the step relative to the min.


              var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

              this.value = this._clamp(closestValue, this.min, this.max);
            }
          }
          /** Emits a change event if the current value is different from the last emitted value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value);

            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
          }
          /** Emits an input event when the current value is different from the last emitted value. */

        }, {
          key: "_emitInputEvent",
          value: function _emitInputEvent() {
            this.input.emit(this._createChangeEvent());
          }
          /** Updates the amount of space between ticks as a percentage of the width of the slider. */

        }, {
          key: "_updateTickIntervalPercent",
          value: function _updateTickIntervalPercent() {
            if (!this.tickInterval || !this._sliderDimensions) {
              return;
            }

            if (this.tickInterval == 'auto') {
              var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
              var pixelsPerStep = trackSize * this.step / (this.max - this.min);
              var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
              var pixelsPerTick = stepsPerTick * this.step;
              this._tickIntervalPercent = pixelsPerTick / trackSize;
            } else {
              this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
            }
          }
          /** Creates a slider change object from the specified value. */

        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
            var event = new _MatSliderChange();
            event.source = this;
            event.value = value;
            return event;
          }
          /** Calculates the percentage of the slider that a value is. */

        }, {
          key: "_calculatePercentage",
          value: function _calculatePercentage(value) {
            return ((value || 0) - this.min) / (this.max - this.min);
          }
          /** Calculates the value a percentage of the slider corresponds to. */

        }, {
          key: "_calculateValue",
          value: function _calculateValue(percentage) {
            return this.min + percentage * (this.max - this.min);
          }
          /** Return a number between two numbers. */

        }, {
          key: "_clamp",
          value: function _clamp(value) {
            var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return Math.max(min, Math.min(value, max));
          }
          /**
           * Get the bounding client rect of the slider track element.
           * The track is used rather than the native element to ignore the extra space that the thumb can
           * take up.
           */

        }, {
          key: "_getSliderDimensions",
          value: function _getSliderDimensions() {
            return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
          }
          /**
           * Focuses the native element.
           * Currently only used to allow a blur event to fire but will be used with keyboard input later.
           */

        }, {
          key: "_focusHostElement",
          value: function _focusHostElement(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Blurs the native element. */

        }, {
          key: "_blurHostElement",
          value: function _blurHostElement() {
            this._elementRef.nativeElement.blur();
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          }
          /**
           * Registers a callback to be triggered when the value has changed.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the component is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets whether the component should be disabled.
           * Implemented as part of ControlValueAccessor.
           * @param isDisabled
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }]);

        return _MatSlider;
      }(_MatSliderBase);

      _MatSlider.ɵfac = function MatSlider_Factory(t) {
        return new (t || _MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatSlider.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MatSlider,
        selectors: [["mat-slider"]],
        viewQuery: function MatSlider_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
          }
        },
        hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
        hostVars: 29,
        hostBindings: function MatSlider_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSlider_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("keyup", function MatSlider_keyup_HostBindingHandler() {
              return ctx._onKeyup();
            })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
              return ctx._onMouseenter();
            })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
              return $event.preventDefault();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-valuetext", ctx.valueText == null ? ctx.displayValue : ctx.valueText)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          color: "color",
          tabIndex: "tabIndex",
          invert: "invert",
          max: "max",
          min: "min",
          step: "step",
          thumbLabel: "thumbLabel",
          tickInterval: "tickInterval",
          value: "value",
          displayWith: "displayWith",
          valueText: "valueText",
          vertical: "vertical"
        },
        outputs: {
          change: "change",
          input: "input",
          valueChange: "valueChange"
        },
        exportAs: ["matSlider"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 13,
        vars: 6,
        consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
        template: function MatSlider_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.displayValue);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle],
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSlider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mat-slider',
            exportAs: 'matSlider',
            providers: [_MAT_SLIDER_VALUE_ACCESSOR],
            host: {
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)',
              '(keyup)': '_onKeyup()',
              '(mouseenter)': '_onMouseenter()',
              // On Safari starting to slide temporarily triggers text selection mode which
              // show the wrong cursor. We prevent it by stopping the `selectstart` event.
              '(selectstart)': '$event.preventDefault()',
              'class': 'mat-slider mat-focus-indicator',
              'role': 'slider',
              '[tabIndex]': 'tabIndex',
              '[attr.aria-disabled]': 'disabled',
              '[attr.aria-valuemax]': 'max',
              '[attr.aria-valuemin]': 'min',
              '[attr.aria-valuenow]': 'value',
              // NVDA and Jaws appear to announce the `aria-valuenow` by calculating its percentage based
              // on its value between `aria-valuemin` and `aria-valuemax`. Due to how decimals are handled,
              // it can cause the slider to read out a very long value like 0.20000068 if the current value
              // is 0.2 with a min of 0 and max of 1. We work around the issue by setting `aria-valuetext`
              // to the same value that we set on the slider's thumb which will be truncated.
              '[attr.aria-valuetext]': 'valueText == null ? displayValue : valueText',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-slider-disabled]': 'disabled',
              '[class.mat-slider-has-ticks]': 'tickInterval',
              '[class.mat-slider-horizontal]': '!vertical',
              '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if mouse coordinates need to be inverted.
              '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
              '[class.mat-slider-sliding]': '_isSliding',
              '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
              '[class.mat-slider-vertical]': 'vertical',
              '[class.mat-slider-min-value]': '_isMinValue()',
              '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            inputs: ['disabled', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
            styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          valueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['sliderWrapper']
          }]
        });
      })();
      /** Returns whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the coordinates of a touch or mouse event relative to the viewport. */


      function getPointerPositionOnPage(event, id) {
        var point;

        if (isTouchEvent(event)) {
          // The `identifier` could be undefined if the browser doesn't support `TouchEvent.identifier`.
          // If that's the case, attribute the first touch to all active sliders. This should still cover
          // the most common case while only breaking multi-touch.
          if (typeof id === 'number') {
            point = findMatchingTouch(event.touches, id) || findMatchingTouch(event.changedTouches, id);
          } else {
            // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            point = event.touches[0] || event.changedTouches[0];
          }
        } else {
          point = event;
        }

        return point ? {
          x: point.clientX,
          y: point.clientY
        } : undefined;
      }
      /** Finds a `Touch` with a specific ID in a `TouchList`. */


      function findMatchingTouch(touches, id) {
        for (var i = 0; i < touches.length; i++) {
          if (touches[i].identifier === id) {
            return touches[i];
          }
        }

        return undefined;
      }
      /** Gets the unique ID of a touch that matches a specific slider. */


      function getTouchIdForSlider(event, sliderHost) {
        for (var i = 0; i < event.touches.length; i++) {
          var target = event.touches[i].target;

          if (sliderHost === target || sliderHost.contains(target)) {
            return event.touches[i].identifier;
          }
        }

        return undefined;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatSliderModule = /*#__PURE__*/_createClass(function _MatSliderModule() {
        _classCallCheck(this, _MatSliderModule);
      });

      _MatSliderModule.ɵfac = function MatSliderModule_Factory(t) {
        return new (t || _MatSliderModule)();
      };

      _MatSliderModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MatSliderModule
      });
      _MatSliderModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSliderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
            exports: [_MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
            declarations: [_MatSlider]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    97217:
    /*!***********************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/table.mjs ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatCell": function MatCell() {
          return (
            /* binding */
            _MatCell
          );
        },

        /* harmony export */
        "MatCellDef": function MatCellDef() {
          return (
            /* binding */
            _MatCellDef
          );
        },

        /* harmony export */
        "MatColumnDef": function MatColumnDef() {
          return (
            /* binding */
            _MatColumnDef
          );
        },

        /* harmony export */
        "MatFooterCell": function MatFooterCell() {
          return (
            /* binding */
            _MatFooterCell
          );
        },

        /* harmony export */
        "MatFooterCellDef": function MatFooterCellDef() {
          return (
            /* binding */
            _MatFooterCellDef
          );
        },

        /* harmony export */
        "MatFooterRow": function MatFooterRow() {
          return (
            /* binding */
            _MatFooterRow
          );
        },

        /* harmony export */
        "MatFooterRowDef": function MatFooterRowDef() {
          return (
            /* binding */
            _MatFooterRowDef
          );
        },

        /* harmony export */
        "MatHeaderCell": function MatHeaderCell() {
          return (
            /* binding */
            _MatHeaderCell
          );
        },

        /* harmony export */
        "MatHeaderCellDef": function MatHeaderCellDef() {
          return (
            /* binding */
            _MatHeaderCellDef
          );
        },

        /* harmony export */
        "MatHeaderRow": function MatHeaderRow() {
          return (
            /* binding */
            _MatHeaderRow
          );
        },

        /* harmony export */
        "MatHeaderRowDef": function MatHeaderRowDef() {
          return (
            /* binding */
            _MatHeaderRowDef
          );
        },

        /* harmony export */
        "MatNoDataRow": function MatNoDataRow() {
          return (
            /* binding */
            _MatNoDataRow
          );
        },

        /* harmony export */
        "MatRecycleRows": function MatRecycleRows() {
          return (
            /* binding */
            _MatRecycleRows
          );
        },

        /* harmony export */
        "MatRow": function MatRow() {
          return (
            /* binding */
            _MatRow
          );
        },

        /* harmony export */
        "MatRowDef": function MatRowDef() {
          return (
            /* binding */
            _MatRowDef
          );
        },

        /* harmony export */
        "MatTable": function MatTable() {
          return (
            /* binding */
            _MatTable
          );
        },

        /* harmony export */
        "MatTableDataSource": function MatTableDataSource() {
          return (
            /* binding */
            _MatTableDataSource2
          );
        },

        /* harmony export */
        "MatTableModule": function MatTableModule() {
          return (
            /* binding */
            _MatTableModule
          );
        },

        /* harmony export */
        "MatTextColumn": function MatTextColumn() {
          return (
            /* binding */
            _MatTextColumn
          );
        },

        /* harmony export */
        "_MatTableDataSource": function _MatTableDataSource() {
          return (
            /* binding */
            _MatTableDataSource3
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/table */
      33865);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      89502);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      88133);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      76484);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      87554);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      84225);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      83396);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      75249);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      31682);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      53399);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
       * tables that animate rows.
       */


      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function MatTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function MatTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }

      var _MatRecycleRows = /*#__PURE__*/_createClass(function _MatRecycleRows() {
        _classCallCheck(this, _MatRecycleRows);
      });

      _MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
        return new (t || _MatRecycleRows)();
      };

      _MatRecycleRows.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatRecycleRows,
        selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRecycleRows, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-table[recycleRows], table[mat-table][recycleRows]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
            }]
          }]
        }], null, null);
      })();
      /**
       * Wrapper for the CdkTable with Material design styles.
       */


      var _MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(_MatTable, _angular_cdk_table__W);

        var _super41 = _createSuper(_MatTable);

        function _MatTable() {
          var _this74;

          _classCallCheck(this, _MatTable);

          _this74 = _super41.apply(this, arguments);
          /** Overrides the sticky CSS class set by the `CdkTable`. */

          _this74.stickyCssClass = 'mat-table-sticky';
          /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

          _this74.needsPositionStickyOnElement = false;
          return _this74;
        }

        return _createClass(_MatTable);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable);

      _MatTable.ɵfac = /* @__PURE__ */function () {
        var ɵMatTable_BaseFactory;
        return function MatTable_Factory(t) {
          return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatTable)))(t || _MatTable);
        };
      }();

      _MatTable.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTable,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-table"],
        hostVars: 2,
        hostBindings: function MatTable_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
          }
        },
        exportAs: ["matTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
          useExisting: _MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
          useExisting: _MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
          useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
        }, // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
          useValue: null
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function MatTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.NoDataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.FooterRowOutlet],
        styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-table, table[mat-table]',
            exportAs: 'matTable',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE_TEMPLATE,
            host: {
              'class': 'mat-table',
              '[class.mat-table-fixed-layout]': 'fixedLayout'
            },
            providers: [// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
            //  is only included in the build if used.
            {
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
              useExisting: _MatTable
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
              useExisting: _MatTable
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
              useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
            }, // Prevent nested tables from seeing this table's StickyPositioningListener.
            {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
              useValue: null
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for the mat-table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */


      var _MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
        _inherits(_MatCellDef, _angular_cdk_table__W2);

        var _super42 = _createSuper(_MatCellDef);

        function _MatCellDef() {
          _classCallCheck(this, _MatCellDef);

          return _super42.apply(this, arguments);
        }

        return _createClass(_MatCellDef);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef);

      _MatCellDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatCellDef_BaseFactory;
        return function MatCellDef_Factory(t) {
          return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatCellDef)))(t || _MatCellDef);
        };
      }();

      _MatCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatCellDef,
        selectors: [["", "matCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
          useExisting: _MatCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
              useExisting: _MatCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Header cell definition for the mat-table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var _MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
        _inherits(_MatHeaderCellDef, _angular_cdk_table__W3);

        var _super43 = _createSuper(_MatHeaderCellDef);

        function _MatHeaderCellDef() {
          _classCallCheck(this, _MatHeaderCellDef);

          return _super43.apply(this, arguments);
        }

        return _createClass(_MatHeaderCellDef);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef);

      _MatHeaderCellDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatHeaderCellDef_BaseFactory;
        return function MatHeaderCellDef_Factory(t) {
          return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderCellDef)))(t || _MatHeaderCellDef);
        };
      }();

      _MatHeaderCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHeaderCellDef,
        selectors: [["", "matHeaderCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
          useExisting: _MatHeaderCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matHeaderCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
              useExisting: _MatHeaderCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Footer cell definition for the mat-table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var _MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
        _inherits(_MatFooterCellDef, _angular_cdk_table__W4);

        var _super44 = _createSuper(_MatFooterCellDef);

        function _MatFooterCellDef() {
          _classCallCheck(this, _MatFooterCellDef);

          return _super44.apply(this, arguments);
        }

        return _createClass(_MatFooterCellDef);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef);

      _MatFooterCellDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatFooterCellDef_BaseFactory;
        return function MatFooterCellDef_Factory(t) {
          return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterCellDef)))(t || _MatFooterCellDef);
        };
      }();

      _MatFooterCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatFooterCellDef,
        selectors: [["", "matFooterCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
          useExisting: _MatFooterCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matFooterCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
              useExisting: _MatFooterCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Column definition for the mat-table.
       * Defines a set of cells available for a table column.
       */


      var _MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
        _inherits(_MatColumnDef, _angular_cdk_table__W5);

        var _super45 = _createSuper(_MatColumnDef);

        function _MatColumnDef() {
          _classCallCheck(this, _MatColumnDef);

          return _super45.apply(this, arguments);
        }

        _createClass(_MatColumnDef, [{
          key: "name",
          get:
          /** Unique name for this column. */
          function get() {
            return this._name;
          },
          set: function set(name) {
            this._setNameInput(name);
          }
          /**
           * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
           * In the future, this will only add "mat-column-" and columnCssClassName
           * will change from type string[] to string.
           * @docs-private
           */

        }, {
          key: "_updateColumnCssClassName",
          value: function _updateColumnCssClassName() {
            _get(_getPrototypeOf(_MatColumnDef.prototype), "_updateColumnCssClassName", this).call(this);

            this._columnCssClassName.push("mat-column-".concat(this.cssClassFriendlyName));
          }
        }]);

        return _MatColumnDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef);

      _MatColumnDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatColumnDef_BaseFactory;
        return function MatColumnDef_Factory(t) {
          return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatColumnDef)))(t || _MatColumnDef);
        };
      }();

      _MatColumnDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatColumnDef,
        selectors: [["", "matColumnDef", ""]],
        inputs: {
          sticky: "sticky",
          name: ["matColumnDef", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
          useExisting: _MatColumnDef
        }, {
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: _MatColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
              useExisting: _MatColumnDef
            }, {
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: _MatColumnDef
            }]
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matColumnDef']
          }]
        });
      })();
      /** Header cell template container that adds the right classes and role. */


      var _MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
        _inherits(_MatHeaderCell, _angular_cdk_table__W6);

        var _super46 = _createSuper(_MatHeaderCell);

        function _MatHeaderCell() {
          _classCallCheck(this, _MatHeaderCell);

          return _super46.apply(this, arguments);
        }

        return _createClass(_MatHeaderCell);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCell);

      _MatHeaderCell.ɵfac = /* @__PURE__ */function () {
        var ɵMatHeaderCell_BaseFactory;
        return function MatHeaderCell_Factory(t) {
          return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderCell)))(t || _MatHeaderCell);
        };
      }();

      _MatHeaderCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHeaderCell,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-header-cell, th[mat-header-cell]',
            host: {
              'class': 'mat-header-cell',
              'role': 'columnheader'
            }
          }]
        }], null, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var _MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
        _inherits(_MatFooterCell, _angular_cdk_table__W7);

        var _super47 = _createSuper(_MatFooterCell);

        function _MatFooterCell() {
          _classCallCheck(this, _MatFooterCell);

          return _super47.apply(this, arguments);
        }

        return _createClass(_MatFooterCell);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCell);

      _MatFooterCell.ɵfac = /* @__PURE__ */function () {
        var ɵMatFooterCell_BaseFactory;
        return function MatFooterCell_Factory(t) {
          return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterCell)))(t || _MatFooterCell);
        };
      }();

      _MatFooterCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatFooterCell,
        selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-footer-cell, td[mat-footer-cell]',
            host: {
              'class': 'mat-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], null, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var _MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
        _inherits(_MatCell, _angular_cdk_table__W8);

        var _super48 = _createSuper(_MatCell);

        function _MatCell() {
          _classCallCheck(this, _MatCell);

          return _super48.apply(this, arguments);
        }

        return _createClass(_MatCell);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCell);

      _MatCell.ɵfac = /* @__PURE__ */function () {
        var ɵMatCell_BaseFactory;
        return function MatCell_Factory(t) {
          return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatCell)))(t || _MatCell);
        };
      }();

      _MatCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatCell,
        selectors: [["mat-cell"], ["td", "mat-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-cell, td[mat-cell]',
            host: {
              'class': 'mat-cell',
              'role': 'gridcell'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Header row definition for the mat-table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var _MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
        _inherits(_MatHeaderRowDef, _angular_cdk_table__W9);

        var _super49 = _createSuper(_MatHeaderRowDef);

        function _MatHeaderRowDef() {
          _classCallCheck(this, _MatHeaderRowDef);

          return _super49.apply(this, arguments);
        }

        return _createClass(_MatHeaderRowDef);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef);

      _MatHeaderRowDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatHeaderRowDef_BaseFactory;
        return function MatHeaderRowDef_Factory(t) {
          return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderRowDef)))(t || _MatHeaderRowDef);
        };
      }();

      _MatHeaderRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHeaderRowDef,
        selectors: [["", "matHeaderRowDef", ""]],
        inputs: {
          columns: ["matHeaderRowDef", "columns"],
          sticky: ["matHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
          useExisting: _MatHeaderRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matHeaderRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
              useExisting: _MatHeaderRowDef
            }],
            inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Footer row definition for the mat-table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var _MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
        _inherits(_MatFooterRowDef, _angular_cdk_table__W10);

        var _super50 = _createSuper(_MatFooterRowDef);

        function _MatFooterRowDef() {
          _classCallCheck(this, _MatFooterRowDef);

          return _super50.apply(this, arguments);
        }

        return _createClass(_MatFooterRowDef);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef);

      _MatFooterRowDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatFooterRowDef_BaseFactory;
        return function MatFooterRowDef_Factory(t) {
          return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterRowDef)))(t || _MatFooterRowDef);
        };
      }();

      _MatFooterRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatFooterRowDef,
        selectors: [["", "matFooterRowDef", ""]],
        inputs: {
          columns: ["matFooterRowDef", "columns"],
          sticky: ["matFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
          useExisting: _MatFooterRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matFooterRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
              useExisting: _MatFooterRowDef
            }],
            inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Data row definition for the mat-table.
       * Captures the data row's template and other properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var _MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
        _inherits(_MatRowDef, _angular_cdk_table__W11);

        var _super51 = _createSuper(_MatRowDef);

        function _MatRowDef() {
          _classCallCheck(this, _MatRowDef);

          return _super51.apply(this, arguments);
        }

        return _createClass(_MatRowDef);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef);

      _MatRowDef.ɵfac = /* @__PURE__ */function () {
        var ɵMatRowDef_BaseFactory;
        return function MatRowDef_Factory(t) {
          return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatRowDef)))(t || _MatRowDef);
        };
      }();

      _MatRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatRowDef,
        selectors: [["", "matRowDef", ""]],
        inputs: {
          columns: ["matRowDefColumns", "columns"],
          when: ["matRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
          useExisting: _MatRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
              useExisting: _MatRowDef
            }],
            inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
          }]
        }], null, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var _MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
        _inherits(_MatHeaderRow, _angular_cdk_table__W12);

        var _super52 = _createSuper(_MatHeaderRow);

        function _MatHeaderRow() {
          _classCallCheck(this, _MatHeaderRow);

          return _super52.apply(this, arguments);
        }

        return _createClass(_MatHeaderRow);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow);

      _MatHeaderRow.ɵfac = /* @__PURE__ */function () {
        var ɵMatHeaderRow_BaseFactory;
        return function MatHeaderRow_Factory(t) {
          return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderRow)))(t || _MatHeaderRow);
        };
      }();

      _MatHeaderRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatHeaderRow,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-header-row"],
        exportAs: ["matHeaderRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
          useExisting: _MatHeaderRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-header-row, tr[mat-header-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
            host: {
              'class': 'mat-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matHeaderRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
              useExisting: _MatHeaderRow
            }]
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var _MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
        _inherits(_MatFooterRow, _angular_cdk_table__W13);

        var _super53 = _createSuper(_MatFooterRow);

        function _MatFooterRow() {
          _classCallCheck(this, _MatFooterRow);

          return _super53.apply(this, arguments);
        }

        return _createClass(_MatFooterRow);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow);

      _MatFooterRow.ɵfac = /* @__PURE__ */function () {
        var ɵMatFooterRow_BaseFactory;
        return function MatFooterRow_Factory(t) {
          return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterRow)))(t || _MatFooterRow);
        };
      }();

      _MatFooterRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatFooterRow,
        selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-footer-row"],
        exportAs: ["matFooterRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
          useExisting: _MatFooterRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-footer-row, tr[mat-footer-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
            host: {
              'class': 'mat-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matFooterRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
              useExisting: _MatFooterRow
            }]
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var _MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
        _inherits(_MatRow, _angular_cdk_table__W14);

        var _super54 = _createSuper(_MatRow);

        function _MatRow() {
          _classCallCheck(this, _MatRow);

          return _super54.apply(this, arguments);
        }

        return _createClass(_MatRow);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow);

      _MatRow.ɵfac = /* @__PURE__ */function () {
        var ɵMatRow_BaseFactory;
        return function MatRow_Factory(t) {
          return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatRow)))(t || _MatRow);
        };
      }();

      _MatRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatRow,
        selectors: [["mat-row"], ["tr", "mat-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-row"],
        exportAs: ["matRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
          useExisting: _MatRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-row, tr[mat-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
            host: {
              'class': 'mat-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
              useExisting: _MatRow
            }]
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var _MatNoDataRow = /*#__PURE__*/function (_angular_cdk_table__W15) {
        _inherits(_MatNoDataRow, _angular_cdk_table__W15);

        var _super55 = _createSuper(_MatNoDataRow);

        function _MatNoDataRow() {
          var _this75;

          _classCallCheck(this, _MatNoDataRow);

          _this75 = _super55.apply(this, arguments);
          _this75._contentClassName = 'mat-no-data-row';
          return _this75;
        }

        return _createClass(_MatNoDataRow);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow);

      _MatNoDataRow.ɵfac = /* @__PURE__ */function () {
        var ɵMatNoDataRow_BaseFactory;
        return function MatNoDataRow_Factory(t) {
          return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatNoDataRow)))(t || _MatNoDataRow);
        };
      }();

      _MatNoDataRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatNoDataRow,
        selectors: [["ng-template", "matNoDataRow", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
          useExisting: _MatNoDataRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[matNoDataRow]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
              useExisting: _MatNoDataRow
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var _MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W16) {
        _inherits(_MatTextColumn, _angular_cdk_table__W16);

        var _super56 = _createSuper(_MatTextColumn);

        function _MatTextColumn() {
          _classCallCheck(this, _MatTextColumn);

          return _super56.apply(this, arguments);
        }

        return _createClass(_MatTextColumn);
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTextColumn);

      _MatTextColumn.ɵfac = /* @__PURE__ */function () {
        var ɵMatTextColumn_BaseFactory;
        return function MatTextColumn_Factory(t) {
          return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatTextColumn)))(t || _MatTextColumn);
        };
      }();

      _MatTextColumn.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTextColumn,
        selectors: [["mat-text-column"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 0,
        consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
        template: function MatTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [_MatColumnDef, _MatHeaderCellDef, _MatCellDef, _MatHeaderCell, _MatCell],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-text-column',
            template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var EXPORTED_DECLARATIONS = [// Table
      _MatTable, _MatRecycleRows, // Template defs
      _MatHeaderCellDef, _MatHeaderRowDef, _MatColumnDef, _MatCellDef, _MatRowDef, _MatFooterCellDef, _MatFooterRowDef, // Cell directives
      _MatHeaderCell, _MatCell, _MatFooterCell, // Row directives
      _MatHeaderRow, _MatRow, _MatFooterRow, _MatNoDataRow, _MatTextColumn];

      var _MatTableModule = /*#__PURE__*/_createClass(function _MatTableModule() {
        _classCallCheck(this, _MatTableModule);
      });

      _MatTableModule.ɵfac = function MatTableModule_Factory(t) {
        return new (t || _MatTableModule)();
      };

      _MatTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatTableModule
      });
      _MatTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, EXPORTED_DECLARATIONS],
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
       * flaky browser support and the value not being defined in Closure's typings.
       */


      var MAX_SAFE_INTEGER = 9007199254740991;
      /** Shared base class with MDC-based implementation. */

      var _MatTableDataSource3 = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(_MatTableDataSource3, _angular_cdk_collecti);

        var _super57 = _createSuper(_MatTableDataSource3);

        function _MatTableDataSource3() {
          var _this76;

          var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, _MatTableDataSource3);

          _this76 = _super57.call(this);
          /** Stream emitting render data to the table (depends on ordered data changes). */

          _this76._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
          /** Stream that emits when a new filter string is set on the data source. */

          _this76._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
          /** Used to react to internal changes of the paginator that are made by the data source itself. */

          _this76._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /**
           * Subscription to the changes that should trigger an update to the table's rendered rows, such
           * as filtering, sorting, pagination, or base data changes.
           */

          _this76._renderChangesSubscription = null;
          /**
           * Data accessor function that is used for accessing data properties for sorting through
           * the default sortData function.
           * This default function assumes that the sort header IDs (which defaults to the column name)
           * matches the data's properties (e.g. column Xyz represents data['Xyz']).
           * May be set to a custom function for different behavior.
           * @param data Data object that is being accessed.
           * @param sortHeaderId The name of the column that represents the data.
           */

          _this76.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];

            if ((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__._isNumberValue)(value)) {
              var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
              // leave them as strings. For more info: https://goo.gl/y5vbSg

              return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }

            return value;
          };
          /**
           * Gets a sorted copy of the data array based on the state of the MatSort. Called
           * after changes are made to the filtered data or when sort changes are emitted from MatSort.
           * By default, the function retrieves the active sort and its direction and compares data
           * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
           * of data ordering.
           * @param data The array of data that should be sorted.
           * @param sort The connected MatSort that holds the current sort state.
           */


          _this76.sortData = function (data, sort) {
            var active = sort.active;
            var direction = sort.direction;

            if (!active || direction == '') {
              return data;
            }

            return data.sort(function (a, b) {
              var valueA = _this76.sortingDataAccessor(a, active);

              var valueB = _this76.sortingDataAccessor(b, active); // If there are data in the column that can be converted to a number,
              // it must be ensured that the rest of the data
              // is of the same type so as not to order incorrectly.


              var valueAType = typeof valueA;
              var valueBType = typeof valueB;

              if (valueAType !== valueBType) {
                if (valueAType === 'number') {
                  valueA += '';
                }

                if (valueBType === 'number') {
                  valueB += '';
                }
              } // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
              // one value exists while the other doesn't. In this case, existing value should come last.
              // This avoids inconsistent results when comparing values to undefined/null.
              // If neither value exists, return 0 (equal).


              var comparatorResult = 0;

              if (valueA != null && valueB != null) {
                // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                if (valueA > valueB) {
                  comparatorResult = 1;
                } else if (valueA < valueB) {
                  comparatorResult = -1;
                }
              } else if (valueA != null) {
                comparatorResult = 1;
              } else if (valueB != null) {
                comparatorResult = -1;
              }

              return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
          };
          /**
           * Checks if a data object matches the data source's filter string. By default, each data object
           * is converted to a string of its properties and returns true if the filter has
           * at least one occurrence in that string. By default, the filter string has its whitespace
           * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
           * filter matching.
           * @param data Data object used to check against the filter.
           * @param filter Filter string that has been set on the data source.
           * @returns Whether the filter matches against the data
           */


          _this76.filterPredicate = function (data, filter) {
            // Transform the data into a lowercase string of all property values.
            var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
              // Use an obscure Unicode character to delimit the words in the concatenated string.
              // This avoids matches where the values of two columns combined will match the user's query
              // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
              // that has a very low chance of being typed in by somebody in a text field. This one in
              // particular is "White up-pointing triangle with dot" from
              // https://en.wikipedia.org/wiki/List_of_Unicode_characters
              return currentTerm + data[key] + '◬';
            }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
          };

          _this76._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(initialData);

          _this76._updateChangeSubscription();

          return _this76;
        }
        /** Array of data that should be rendered by the table, where each object represents one row. */


        _createClass(_MatTableDataSource3, [{
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(data) {
            this._data.next(data); // Normally the `filteredData` is updated by the re-render
            // subscription, but that won't happen if it's inactive.


            if (!this._renderChangesSubscription) {
              this._filterData(data);
            }
          }
          /**
           * Filter term that should be used to filter out objects from the data array. To override how
           * data objects match to this filter string, provide a custom function for filterPredicate.
           */

        }, {
          key: "filter",
          get: function get() {
            return this._filter.value;
          },
          set: function set(filter) {
            this._filter.next(filter); // Normally the `filteredData` is updated by the re-render
            // subscription, but that won't happen if it's inactive.


            if (!this._renderChangesSubscription) {
              this._filterData(this.data);
            }
          }
          /**
           * Instance of the MatSort directive used by the table to control its sorting. Sort changes
           * emitted by the MatSort will trigger an update to the table's rendered data.
           */

        }, {
          key: "sort",
          get: function get() {
            return this._sort;
          },
          set: function set(sort) {
            this._sort = sort;

            this._updateChangeSubscription();
          }
          /**
           * Instance of the MatPaginator component used by the table to control what page of the data is
           * displayed. Page changes emitted by the MatPaginator will trigger an update to the
           * table's rendered data.
           *
           * Note that the data source uses the paginator's properties to calculate which page of data
           * should be displayed. If the paginator receives its properties as template inputs,
           * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
           * initialized before assigning it to this data source.
           */

        }, {
          key: "paginator",
          get: function get() {
            return this._paginator;
          },
          set: function set(paginator) {
            this._paginator = paginator;

            this._updateChangeSubscription();
          }
          /**
           * Subscribe to changes that should trigger an update to the table's rendered rows. When the
           * changes occur, process the current state of the filter, sort, and pagination along with
           * the provided base data and send it to the table for rendering.
           */

        }, {
          key: "_updateChangeSubscription",
          value: function _updateChangeSubscription() {
            var _this77 = this;

            var _a; // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.


            var sortChange = this._sort ? (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._sort.sortChange, this._sort.initialized) : (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            var pageChange = this._paginator ? (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

            var filteredData = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([dataStream, this._filter]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  data = _ref2[0];

              return _this77._filterData(data);
            })); // Watch for filtered data or sort changes to provide an ordered set of data.

            var orderedData = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([filteredData, sortChange]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 1),
                  data = _ref4[0];

              return _this77._orderData(data);
            })); // Watch for ordered data or page changes to provide a paged set of data.

            var paginatedData = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([orderedData, pageChange]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 1),
                  data = _ref6[0];

              return _this77._pageData(data);
            })); // Watched for paged data changes and send the result to the table to render.

            (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this._renderChangesSubscription = paginatedData.subscribe(function (data) {
              return _this77._renderData.next(data);
            });
          }
          /**
           * Returns a filtered data array where each filter object contains the filter string within
           * the result of the filterTermAccessor function. If no filter is set, returns the data array
           * as provided.
           */

        }, {
          key: "_filterData",
          value: function _filterData(data) {
            var _this78 = this;

            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(function (obj) {
              return _this78.filterPredicate(obj, _this78.filter);
            });

            if (this.paginator) {
              this._updatePaginator(this.filteredData.length);
            }

            return this.filteredData;
          }
          /**
           * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
           * data array as provided. Uses the default data accessor for data lookup, unless a
           * sortDataAccessor function is defined.
           */

        }, {
          key: "_orderData",
          value: function _orderData(data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
              return data;
            }

            return this.sortData(data.slice(), this.sort);
          }
          /**
           * Returns a paged slice of the provided data array according to the provided MatPaginator's page
           * index and length. If there is no paginator provided, returns the data array as provided.
           */

        }, {
          key: "_pageData",
          value: function _pageData(data) {
            if (!this.paginator) {
              return data;
            }

            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
          }
          /**
           * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
           * index does not exceed the paginator's last page. Values are changed in a resolved promise to
           * guard against making property changes within a round of change detection.
           */

        }, {
          key: "_updatePaginator",
          value: function _updatePaginator(filteredDataLength) {
            var _this79 = this;

            Promise.resolve().then(function () {
              var paginator = _this79.paginator;

              if (!paginator) {
                return;
              }

              paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

              if (paginator.pageIndex > 0) {
                var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

                if (newPageIndex !== paginator.pageIndex) {
                  paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                  // we need our own stream so we know to should re-render the data.

                  _this79._internalPageChanges.next();
                }
              }
            });
          }
          /**
           * Used by the MatTable. Called when it connects to the data source.
           * @docs-private
           */

        }, {
          key: "connect",
          value: function connect() {
            if (!this._renderChangesSubscription) {
              this._updateChangeSubscription();
            }

            return this._renderData;
          }
          /**
           * Used by the MatTable. Called when it disconnects from the data source.
           * @docs-private
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            var _a;

            (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this._renderChangesSubscription = null;
          }
        }]);

        return _MatTableDataSource3;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource);
      /**
       * Data source that accepts a client-side data array and includes native support of filtering,
       * sorting (using MatSort), and pagination (using MatPaginator).
       *
       * Allows for sort customization by overriding sortingDataAccessor, which defines how data
       * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
       * which defines how row data is converted to a string for filter matching.
       *
       * **Note:** This class is meant to be a simple data source to help you get started. As such
       * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
       * interactions. If your app needs to support more advanced use cases, consider implementing your
       * own `DataSource`.
       */


      var _MatTableDataSource2 = /*#__PURE__*/function (_MatTableDataSource4) {
        _inherits(_MatTableDataSource2, _MatTableDataSource4);

        var _super58 = _createSuper(_MatTableDataSource2);

        function _MatTableDataSource2() {
          _classCallCheck(this, _MatTableDataSource2);

          return _super58.apply(this, arguments);
        }

        return _createClass(_MatTableDataSource2);
      }(_MatTableDataSource3);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_routes_sudoku_sudoku_module_ts-es5.js.map