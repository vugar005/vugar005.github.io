(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || []).push([["src_app_contact_contact_module_ts"], {
    /***/
    1563:
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ContactComponent = /*#__PURE__*/function () {
        function _ContactComponent() {
          _classCallCheck(this, _ContactComponent);
        }

        _createClass(_ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContactComponent;
      }();

      _ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || _ContactComponent)();
      };

      _ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactComponent,
        selectors: [["app-contact"]],
        decls: 23,
        vars: 0,
        consts: [["id", "contact", 1, "inner-card-wrapper"], [1, "inner-card"], [1, "inner-card__content"], [1, "inner-card__content__title", "--contact", "border-line-h"], [1, "inner-card__content__text", "border-line-v"], [1, "info-list"], [1, "info-box"], [1, "info-box__title"], [1, "info-box__content"], [1, "or"], [1, "contact-buttons"], ["href", "https://twitter.com/Vugar005", "target", "_blank", 1, "contact-button", "--twitter"], [1, "fab", "fa-twitter"], ["href", "http://github.com/vugar005", "target", "_blank", 1, "contact-button", "--github"], [1, "fab", "fa-github"], ["href", "https://www.facebook.com/profile.php?id=100007074375925", "target", "_blank", 1, "contact-button", "--facebook"], [1, "fab", "fa-facebook-f"], ["href", "https://www.linkedin.com/in/vugar-abdullayev-13451469", "target", "_blank", 1, "contact-button", "--linkedin"], [1, "fab", "fa-linkedin-in"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Get In Touch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "vugar_abdullayev@outlook.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " OR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n}\n\n.contact-buttons[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 50%;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 90px;\n  height: 90px;\n  line-height: 90px;\n  font-size: 25px;\n  margin: 10px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  border-radius: 28%;\n  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);\n  opacity: 0.99;\n  cursor: pointer;\n  transition: all 500ms ease-in-out;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button.--facebook[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button.--twitter[_ngcontent-%COMP%] {\n  color: #1DA1F2;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button.--github[_ngcontent-%COMP%] {\n  color: #171717;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button.--linkedin[_ngcontent-%COMP%] {\n  color: #0077B5;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%]:hover.--facebook {\n  background: #3b5998;\n  color: #ffffff;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%]:hover.--twitter {\n  background: #1DA1F2;\n  color: #ffffff;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%]:hover.--github {\n  background: #d3d3d3;\n  color: #ffffff;\n}\n\n.contact-buttons[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%]:hover.--linkedin {\n  background: #0077B5;\n  color: #ffffff;\n}\n\n.inner-card__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.info-list[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.or[_ngcontent-%COMP%] {\n  margin: 50px;\n  font-size: 22px;\n}\n\n@media (max-width: 1199px) {\n  .contact-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFBSTtFQUNFLGNBQUE7QUFFTjs7QUFBSTtFQUNFLGNBQUE7QUFFTjs7QUFBSTtFQUNFLGNBQUE7QUFFTjs7QUFBSTtFQUNFLGNBQUE7QUFFTjs7QUFDTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUNNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBQ007RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDUjs7QUFDTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtYnV0dG9ucyB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwJTtcclxuICAuY29udGFjdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjglO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCAtNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIG9wYWNpdHk6IDAuOTk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmLi0tZmFjZWJvb2sge1xyXG4gICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgIH1cclxuICAgICYuLS10d2l0dGVyIHtcclxuICAgICAgY29sb3I6ICMxREExRjI7XHJcbiAgICB9XHJcbiAgICAmLi0tZ2l0aHViIHtcclxuICAgICAgY29sb3I6ICMxNzE3MTc7XHJcbiAgICB9XHJcbiAgICAmLi0tbGlua2VkaW4ge1xyXG4gICAgICBjb2xvcjogIzAwNzdCNTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmLi0tZmFjZWJvb2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgJi4tLXR3aXR0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxREExRjI7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgJi4tLWdpdGh1YiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAmLi0tbGlua2VkaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDc3QjU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmlubmVyLWNhcmRfX2NvbnRlbnRfX3RleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbmZvLWxpc3Qge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLm9yIHtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmNvbnRhY3QtYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    5486:
    /*!*******************************************!*\
      !*** ./src/app/contact/contact.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactModule": function ContactModule() {
          return (
            /* binding */
            _ContactModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact.component */
      1563);
      /* harmony import */


      var _contact_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.routing */
      6854);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ContactModule = function _ContactModule() {
        _classCallCheck(this, _ContactModule);
      };

      _ContactModule.ɵfac = function ContactModule_Factory(t) {
        return new (t || _ContactModule)();
      };

      _ContactModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ContactModule
      });
      _ContactModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _contact_routing__WEBPACK_IMPORTED_MODULE_1__.ContactRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ContactModule, {
          declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _contact_routing__WEBPACK_IMPORTED_MODULE_1__.ContactRoutingModule]
        });
      })();
      /***/

    },

    /***/
    6854:
    /*!********************************************!*\
      !*** ./src/app/contact/contact.routing.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactRoutingModule": function ContactRoutingModule() {
          return (
            /* binding */
            _ContactRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact.component */
      1563);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent,
        data: {
          state: 'contact'
        }
      }];

      var _ContactRoutingModule = function _ContactRoutingModule() {
        _classCallCheck(this, _ContactRoutingModule);
      };

      _ContactRoutingModule.ɵfac = function ContactRoutingModule_Factory(t) {
        return new (t || _ContactRoutingModule)();
      };

      _ContactRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ContactRoutingModule
      });
      _ContactRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ContactRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_contact_contact_module_ts-es5.js.map