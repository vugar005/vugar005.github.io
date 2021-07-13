(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || []).push([["src_app_resume_resume_module_ts"], {
    /***/
    9564:
    /*!****************************************************************!*\
      !*** ./src/app/progress-spinner/progress-spinner.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressSpinnerComponent": function ProgressSpinnerComponent() {
          return (
            /* binding */
            _ProgressSpinnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProgressSpinnerComponent = /*#__PURE__*/function () {
        function _ProgressSpinnerComponent() {
          _classCallCheck(this, _ProgressSpinnerComponent);
        }

        _createClass(_ProgressSpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProgressSpinnerComponent;
      }();

      _ProgressSpinnerComponent.ɵfac = function ProgressSpinnerComponent_Factory(t) {
        return new (t || _ProgressSpinnerComponent)();
      };

      _ProgressSpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProgressSpinnerComponent,
        selectors: [["progress-spinner"]],
        decls: 1,
        vars: 0,
        consts: [[1, "triple-spinner"]],
        template: function ProgressSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.triple-spinner[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 7.8125em;\n  height: 7.8125em;\n  border-radius: 50%;\n  border: 0.25em solid transparent;\n  border-top: 0.25em solid #f15e41;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n.triple-spinner[_ngcontent-%COMP%]::before, .triple-spinner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  border: 0.25em solid transparent;\n}\n\n.triple-spinner[_ngcontent-%COMP%]::before {\n  top: 0.3125em;\n  left: 0.3125em;\n  right: 0.3125em;\n  bottom: 0.3125em;\n  border-top-color: #bad375;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3.5s linear infinite;\n}\n\n.triple-spinner[_ngcontent-%COMP%]::after {\n  top: 0.9375em;\n  left: 0.9375em;\n  right: 0.9375em;\n  bottom: 0.9375em;\n  border-top-color: #26a9e0;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.75s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMENBQUE7RUFDQSxrQ0FBQTtBQUFGOztBQUdBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtBQUVGOztBQUNBO0VBQ0U7SUFFRSx1QkFBQTtFQUVGO0VBQUE7SUFFRSx5QkFBQTtFQUVGO0FBQ0Y7O0FBVkE7RUFDRTtJQUVFLHVCQUFBO0VBRUY7RUFBQTtJQUVFLHlCQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmlwbGUtc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3LjgxMjVlbTtcclxuICBoZWlnaHQ6IDcuODEyNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAwLjI1ZW0gc29saWQgI2YxNWU0MTtcclxuLy8gIGJvcmRlci10b3A6IDAuMjVlbSBzb2xpZCAjYmFkMzc1O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4udHJpcGxlLXNwaW5uZXI6OmJlZm9yZSxcclxuLnRyaXBsZS1zcGlubmVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi50cmlwbGUtc3Bpbm5lcjo6YmVmb3JlIHtcclxuICB0b3A6IDAuMzEyNWVtO1xyXG4gIGxlZnQ6IDAuMzEyNWVtO1xyXG4gIHJpZ2h0OiAwLjMxMjVlbTtcclxuICBib3R0b206IDAuMzEyNWVtO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNiYWQzNzU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAzLjVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4udHJpcGxlLXNwaW5uZXI6OmFmdGVyIHtcclxuICB0b3A6IDAuOTM3NWVtO1xyXG4gIGxlZnQ6IDAuOTM3NWVtO1xyXG4gIHJpZ2h0OiAwLjkzNzVlbTtcclxuICBib3R0b206IDAuOTM3NWVtO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMyNmE5ZTA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDEuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    3630:
    /*!*************************************************************!*\
      !*** ./src/app/progress-spinner/progress-spinner.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressSpinnerModule": function ProgressSpinnerModule() {
          return (
            /* binding */
            _ProgressSpinnerModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./progress-spinner.component */
      9564);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProgressSpinnerModule = function _ProgressSpinnerModule() {
        _classCallCheck(this, _ProgressSpinnerModule);
      };

      _ProgressSpinnerModule.ɵfac = function ProgressSpinnerModule_Factory(t) {
        return new (t || _ProgressSpinnerModule)();
      };

      _ProgressSpinnerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ProgressSpinnerModule
      });
      _ProgressSpinnerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ProgressSpinnerModule, {
          declarations: [_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
          exports: [_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent]
        });
      })();
      /***/

    },

    /***/
    9201:
    /*!********************************************!*\
      !*** ./src/app/resume/resume.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResumeComponent": function ResumeComponent() {
          return (
            /* binding */
            _ResumeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../progress-spinner/progress-spinner.component */
      9564);

      function ResumeComponent_progress_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "progress-spinner", 5);
        }
      }

      var _ResumeComponent = /*#__PURE__*/function () {
        function _ResumeComponent(_cdr) {
          _classCallCheck(this, _ResumeComponent);

          this._cdr = _cdr;
          this.loaded = false;
        }

        _createClass(_ResumeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaded = true;

              _this._cdr.detectChanges();
            }, 3000);
          }
        }]);

        return _ResumeComponent;
      }();

      _ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
        return new (t || _ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };

      _ResumeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ResumeComponent,
        selectors: [["resume"]],
        decls: 5,
        vars: 1,
        consts: [["id", "resume", 1, "inner-card-wrapper"], [1, "inner-card"], ["style", "font-size: 14px", 4, "ngIf"], [1, "resume-embed-wrapper"], ["src", "https://onedrive.live.com/embed?cid=24382F927AB11A04&resid=24382F927AB11A04%213289&authkey=ACg7wtp3brD5abo&em=2", "frameborder", "0", "height", "570px", "width", "100%"], [2, "font-size", "14px"]],
        template: function ResumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ResumeComponent_progress_spinner_2_Template, 1, 0, "progress-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "iframe", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n}\n\n.resume-embed-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 570px;\n}\n\n.resume-embed-wrapper[_ngcontent-%COMP%]   .resumeFrame[_ngcontent-%COMP%] {\n  zoom: 0.75;\n}\n\n.inner-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media (max-width: 1199px) {\n  .resume-embed-wrapper[_ngcontent-%COMP%]   .resumeFrame[_ngcontent-%COMP%] {\n    width: 187%;\n    transform: scale(0.54);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRUo7O0FBREU7RUFHRSxVQUFBO0FBQ0o7O0FBU0E7RUFDRSxVQUFBO0FBTkY7O0FBU0E7RUFFSTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtFQVBKO0FBQ0YiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5yZXN1bWUtZW1iZWQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTcwcHg7XHJcbiAgLnJlc3VtZUZyYW1lIHtcclxuICAgIC8vIHdpZHRoOiAxNTklO1xyXG4gICAgLy8gaGVpZ2h0OiAyOTIlO1xyXG4gICAgem9vbTogMC43NTtcclxuXHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gYm9yZGVyOiAwO1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgwLjY1KTtcclxuICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICB9XHJcblxyXG59XHJcbi5pbm5lci1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLnJlc3VtZS1lbWJlZC13cmFwcGVyIHtcclxuICAgIC5yZXN1bWVGcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxODclO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNTQpO1xyXG4gICAgfVxyXG59XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    1791:
    /*!*****************************************!*\
      !*** ./src/app/resume/resume.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResumeModule": function ResumeModule() {
          return (
            /* binding */
            _ResumeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resume.component */
      9201);
      /* harmony import */


      var _resume_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./resume.routing */
      2851);
      /* harmony import */


      var _progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../progress-spinner/progress-spinner.module */
      3630);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ResumeModule = function _ResumeModule() {
        _classCallCheck(this, _ResumeModule);
      };

      _ResumeModule.ɵfac = function ResumeModule_Factory(t) {
        return new (t || _ResumeModule)();
      };

      _ResumeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _ResumeModule
      });
      _ResumeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _resume_routing__WEBPACK_IMPORTED_MODULE_1__.ResumeRoutingModule, _progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__.ProgressSpinnerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_ResumeModule, {
          declarations: [_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _resume_routing__WEBPACK_IMPORTED_MODULE_1__.ResumeRoutingModule, _progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_2__.ProgressSpinnerModule]
        });
      })();
      /***/

    },

    /***/
    2851:
    /*!******************************************!*\
      !*** ./src/app/resume/resume.routing.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResumeRoutingModule": function ResumeRoutingModule() {
          return (
            /* binding */
            _ResumeRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./resume.component */
      9201);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent,
        data: {
          state: 'resume'
        }
      }];

      var _ResumeRoutingModule = function _ResumeRoutingModule() {
        _classCallCheck(this, _ResumeRoutingModule);
      };

      _ResumeRoutingModule.ɵfac = function ResumeRoutingModule_Factory(t) {
        return new (t || _ResumeRoutingModule)();
      };

      _ResumeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ResumeRoutingModule
      });
      _ResumeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ResumeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_resume_resume_module_ts-es5.js.map