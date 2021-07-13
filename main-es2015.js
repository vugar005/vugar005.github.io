(self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 7355:
/*!********************************!*\
  !*** ./src/app/smoke/smoke.js ***!
  \********************************/
/***/ (function() {

var camera, scene, renderer,
    geometry, material, mesh, clock,
    cubeSineDriver, textGeo, textTexture, textMaterial, text, light,
    smokeTexture, smokeMaterial, smokeGeo, smokeParticles, p, delta ;

init();
animate();
listenToWindowResize();

function init() {
    // stats = new Stats();
    // stats.setMode(0);
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    // document.body.appendChild(stats.domElement);

    clock = new THREE.Clock();

    // renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer( { alpha: true } ); // init like this
    renderer.setClearColor( 0x002949, 1 );
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );

    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0x0652DD, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;

    textGeo = new THREE.PlaneGeometry(300,300);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture('');
    textMaterial = new THREE.MeshLambertMaterial({color: 0x0652DD, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 800;
    scene.add(text);

    light = new THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    scene.add(light);

    smokeTexture = THREE.ImageUtils.loadTexture('../../assets/img/Smoke-Element.png');
   //smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x0652DD, opacity: 0.6, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    document.getElementById('smoke-effect').appendChild( renderer.domElement );
}

function animate() {

    // note: three.js includes requestAnimationFrame shim
 //   stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
  //  stats.end();
}

function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );

}

function listenToWindowResize() {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, window.innerHeight );
                render();
            }, 100);
    });
}








/***/ }),

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 9075);


class AboutComponent {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    ngOnInit() {
        this.title.setTitle('Vugar Webpage');
        this.meta.addTags([
            { name: 'twitter-card', content: 'Vugar Personal Webpage' },
            { name: 'og:url', content: '/about' },
            { name: 'og:title', content: 'Vugar Personal Webpage' },
            { name: 'og:description', content: 'Personal Webpage of Vugar Abdullayev' },
            { name: 'og:image', content: 'https://i0.wp.com/www.thebubble.com/wp-content/uploads/2018/05/5b47d2bc7ec8b_lacasadepapel2-768x444.jpg?resize=735%2C395&ssl=1' },
        ]);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about-me"]], decls: 38, vars: 0, consts: [["id", "about", 1, "inner-card-wrapper"], [1, "inner-card"], [1, "inner-card__content", "--about"], [1, "inner-card__content__title", "border-line-h"], [1, "inner-card__content__text", "border-line-v"], [1, "text-box"], [1, "inner-card__content", "--libraries"], [1, "inner-card__content__title"], [1, "inner-card__content__text"], ["href", "https://www.npmjs.com/package/ngx-awesome-uploader", "target", "_blank", 1, "library-card", "border-line-v"], [1, "library-card__header"], [1, "library-card__header__icon"], [1, "fas", "fa-cloud-upload-alt"], [1, "library-card__info"], [1, "library-card__info__title"], [1, "library-card__info__text-box"], [1, "library-card__action"], ["href", "https://www.npmjs.com/package/ngx-router-animations", "target", "_blank", 1, "library-card", "border-line-v"], [1, "fas", "fa-dice-d6"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Xtreme Junior Front End | Angular developer | Equities trading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Loves God & Enigma & DeepHouse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Libraries for Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NGX-AWESOME-UPLOADER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " The most flexible Angular Library for uploading files. It supports File Upload and Preview, built-in and custom validations, image cropper , drag and drop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "TRY IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "NGX-ROUTER-ANIMATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " ngx-router-animations is a collection of awesome, reusable router animations. Built with Angular Animation Package. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TRY IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n}\n\n.--about[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  padding: 0;\n  margin: 0 0 10px 0;\n}\n\n.--libraries[_ngcontent-%COMP%] {\n  margin-top: 33px;\n}\n\n.--libraries[_ngcontent-%COMP%]   .inner-card__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  position: relative;\n  padding: 5px 20px;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%]   .library-card__header[_ngcontent-%COMP%]   .library-card__header__icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: var(--primary-color);\n}\n\n.--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%]   .library-card__info[_ngcontent-%COMP%]   .library-card__info__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #171717;\n  font-weight: bold;\n  opacity: 0.85;\n  margin-right: 10px;\n  text-align: center;\n  padding: 8px;\n  text-transform: uppercase;\n  transition: color 300ms ease;\n}\n\n.--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%]   .library-card__info[_ngcontent-%COMP%]   .library-card__info__text-box[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  height: 126px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #171717;\n  line-height: 21px;\n  font-weight: 500;\n  max-width: 100%;\n  text-align: justify;\n}\n\n.--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%]   .library-card__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  background: #ffffff;\n  border: 0;\n  padding: 0 16px;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  margin-top: 10px;\n  min-width: 64px;\n  border-radius: 4px;\n  transition: background 500ms ease-in;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%]:hover   .library-card__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #ffd740;\n}\n\n@media (max-width: 992px) {\n  .--libraries[_ngcontent-%COMP%]   .library-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUtNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBT0U7RUFDRSxnQkFBQTtBQUpKOztBQUtJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUhOOztBQUtJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUhOOztBQUtRO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBSFY7O0FBT1E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUxWOztBQU9RO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUxWOztBQVNRO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUhBQUE7QUFSVjs7QUFrQlU7RUFDRSxtQkFBQTtBQWhCWjs7QUF1QkE7RUFFSTtJQUNFLFdBQUE7RUFyQko7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcblxyXG4gIC4tLWFib3V0IHtcclxuICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC4tLWxpYnJhcmllcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzM3B4O1xyXG4gICAgLmlubmVyLWNhcmRfX2NvbnRlbnRfX3RleHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5saWJyYXJ5LWNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgLmxpYnJhcnktY2FyZF9faGVhZGVyIHtcclxuICAgICAgICAubGlicmFyeS1jYXJkX19oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGlicmFyeS1jYXJkX19pbmZvIHtcclxuICAgICAgICAubGlicmFyeS1jYXJkX19pbmZvX190aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzE3MTcxNztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlicmFyeS1jYXJkX19pbmZvX190ZXh0LWJveCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyNnB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgY29sb3I6ICMxNzE3MTc7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGlicmFyeS1jYXJkX19hY3Rpb24ge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM1MGEzYTIgMCUsICM3OGNjNmQgMTAwJSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA1MDBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmxpYnJhcnktY2FyZF9faW5mbyB7XHJcbiAgICAgICAgICAubGlicmFyeS1jYXJkX19pbmZvX190aXRsZSB7XHJcbiAgICAgLy8gICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubGlicmFyeS1jYXJkX19hY3Rpb24ge1xyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZDc0MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuLS1saWJyYXJpZXMge1xyXG4gICAgLmxpYnJhcnktY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 6985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": function() { return /* binding */ AboutModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _about_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.routing */ 9274);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 6698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _about_routing__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _about_routing__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule] }); })();


/***/ }),

/***/ 9274:
/*!****************************************!*\
  !*** ./src/app/about/about.routing.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": function() { return /* binding */ AboutRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 6698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, data: { state: 'about' } }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4000:
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInLeftOut": function() { return /* binding */ fadeInLeftOut; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7238);

const fadeInLeftOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    // query(':enter, :leave', style(sharedStyles)
    //   , { optional: true }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '0', transform: 'translate3d(-70%, 0, 0)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{enterTiming}}s {{enterDelay}}s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '0', transform: 'translate3d(-70%, 0, 0)', offset: 0 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '1' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{leaveTiming}}s {{leaveDelay}}s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '0', transform: 'translate3d(-70%, 0, 0)', offset: 1 }),
            ]))
        ], { optional: true }),
    ])
], { params: { enterTiming: '0.7', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0' } });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutModule) },
    { path: 'resume', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_resume_resume_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resume/resume.module */ 1791)).then(m => m.ResumeModule) },
    { path: 'contact', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 5486)).then(m => m.ContactModule) },
    { path: 'works', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_works_works_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./works/works.module */ 310)).then(m => m.WorksModule) }
    // {path: 'about', component: AboutComponent}
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules, relativeLinkResolution: 'legacy', useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ 4000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _starfield_starfield_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starfield/starfield.component */ 3657);
/* harmony import */ var _smoke_smoke_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smoke/smoke.component */ 4464);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);








class AppComponent {
    constructor() {
        this.title = 'personal-website';
    }
    ngAfterViewInit() {
    }
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["personal-website"]], decls: 9, vars: 1, consts: [["id", "main-content"], [1, "scrollbar-content"], [1, "router-wrapper"], ["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-starfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-smoke");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInLeftOut", ctx.getState(_r0));
    } }, directives: [_starfield_starfield_component__WEBPACK_IMPORTED_MODULE_1__.StarfieldComponent, _smoke_smoke_component__WEBPACK_IMPORTED_MODULE_2__.SmokeComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.router-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: var(--app-inner-card-width);\n  height: var(--app-inner-card-height);\n  position: relative;\n}\n\n#main-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  margin: auto;\n}\n\n#main-content[_ngcontent-%COMP%]   .scrollbar-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 75px 0;\n}\n\n@media (max-width: 1440px) {\n  #main-content[_ngcontent-%COMP%] {\n    zoom: 0.7;\n  }\n}\n\n@media (max-width: 992px) {\n  .router-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  #main-content[_ngcontent-%COMP%]   .scrollbar-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 15px 0 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUVBO0VBQ0U7SUFDRSxTQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7RUFBRjs7RUFHQztJQUNFLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBQUg7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucm91dGVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiB2YXIoLS1hcHAtaW5uZXItY2FyZC13aWR0aCk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1hcHAtaW5uZXItY2FyZC1oZWlnaHQpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jbWFpbi1jb250ZW50IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLnNjcm9sbGJhci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNzVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAjbWFpbi1jb250ZW50IHtcclxuICAgIHpvb206IDAuNztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5yb3V0ZXItd3JhcHBlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAjbWFpbi1jb250ZW50IHtcclxuICAgLnNjcm9sbGJhci1jb250ZW50IHtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XHJcbiAgIH1cclxuIH1cclxufVxyXG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeInLeftOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(_animations__WEBPACK_IMPORTED_MODULE_0__.fadeInLeftOut))])
        ] }, changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.module */ 6985);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _starfield_starfield_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starfield/starfield.component */ 3657);
/* harmony import */ var _smoke_smoke_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smoke/smoke.component */ 4464);
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio-player/audio-player.component */ 7209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _about_about_module__WEBPACK_IMPORTED_MODULE_4__.AboutModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
        _starfield_starfield_component__WEBPACK_IMPORTED_MODULE_5__.StarfieldComponent,
        _smoke_smoke_component__WEBPACK_IMPORTED_MODULE_6__.SmokeComponent,
        _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__.AudioPlayerComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _about_about_module__WEBPACK_IMPORTED_MODULE_4__.AboutModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 4940:
/*!******************************!*\
  !*** ./src/app/app.utils.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchToView": function() { return /* binding */ switchToView; }
/* harmony export */ });
function switchToView(section) {
    setTimeout(() => {
        const nav = document.querySelector(section);
        if (nav) {
            nav.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
    }, 10);
}


/***/ }),

/***/ 7209:
/*!********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayerComponent": function() { return /* binding */ AudioPlayerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class AudioPlayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
AudioPlayerComponent.ɵfac = function AudioPlayerComponent_Factory(t) { return new (t || AudioPlayerComponent)(); };
AudioPlayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudioPlayerComponent, selectors: [["audio-player"]], decls: 1, vars: 0, consts: [["width", "100%", "height", "70", "scrolling", "no", "frameborder", "no", "allow", "autoplay", "src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/17227364&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"]], template: function AudioPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.utils */ 4940);
/* harmony import */ var _header_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.constants */ 6556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




const _c0 = function () { return ["/about"]; };
const _c1 = function () { return ["/resume"]; };
const _c2 = function () { return ["/works"]; };
const _c3 = function () { return ["/contact"]; };
class HeaderComponent {
    constructor() {
        this.blogUrl = _header_constants__WEBPACK_IMPORTED_MODULE_1__.BLOG_URL;
    }
    ngOnInit() {
    }
    onNavChange(url) {
        (0,_app_utils__WEBPACK_IMPORTED_MODULE_0__.switchToView)(`#${url}`);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 9, consts: [[1, "header"], ["routerLinkActive", "active", 1, "header__link", 3, "routerLink", "click"], [1, "header__link__image"], [1, "fas", "fa-user"], [1, "header__link__title"], [1, "fab", "fa-angular"], [1, "fas", "fa-paint-brush"], ["target", "_blank", 1, "header__link", 3, "href"], [1, "fas", "fa-blog"], [1, "fas", "fa-at"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() { return ctx.onNavChange("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener() { return ctx.onNavChange("resume"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_11_listener() { return ctx.onNavChange("works"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "WORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_21_listener() { return ctx.onNavChange("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.blogUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 2;\n  margin: 0.9375rem 0.5rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 4.5rem;\n  background: #ffffff;\n  border-radius: var(--app-border-radius);\n  box-shadow: var(--app-box-shadow);\n}\n\n.header[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625rem 0.875rem;\n  cursor: pointer;\n  transition: color 300ms ease;\n  color: #171717;\n  text-decoration: none;\n}\n\n.header[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%]   .header__link__image[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.header[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%]   .header__link__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: inherit;\n}\n\n.header[_ngcontent-%COMP%]   .header__link[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .header__link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\n@media (max-width: 992px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: auto;\n  }\n}\n\n@media (max-width: 576px) {\n  [_nghost-%COMP%] {\n    position: fixed;\n    top: 44px;\n    z-index: 5;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBR0o7O0FBRkk7RUFDRSxjQUFBO0FBSU47O0FBRkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlOOztBQUZJO0VBQ0UsMkJBQUE7QUFJTjs7QUFDQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0VBRUY7QUFDRjs7QUFDQztFQUNDO0lBQ0UsZUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luOiAwLjkzNzVyZW0gMC41cmVtO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNC41cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWFwcC1ib3gtc2hhZG93KTtcclxuICAuaGVhZGVyX19saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgY29sb3I6ICMxNzE3MTc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAuaGVhZGVyX19saW5rX19pbWFnZSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9fbGlua19fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiB9XHJcblxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0NHB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcbiB9XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6556:
/*!********************************************!*\
  !*** ./src/app/header/header.constants.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLOG_URL": function() { return /* binding */ BLOG_URL; }
/* harmony export */ });
const BLOG_URL = `https://vugar-005.medium.com/`;


/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../audio-player/audio-player.component */ 7209);




function ProfileComponent_audio_player_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "audio-player");
} }
const _c0 = function () { return ["/contact"]; };
class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["profile"]], decls: 30, vars: 3, consts: [[1, "profile"], [1, "profile__header"], [1, "profile__info"], [1, "profile__info__image"], ["src", "./assets/img/profile.jpg"], [1, "profile__info__title"], [1, "profile__info__subtitle"], [1, "profile__info__links"], ["href", "https://twitter.com/Vugar005", "target", "_blank", 1, "social-link"], [1, "fab", "fa-twitter"], ["href", "http://github.com/vugar005", "target", "_blank", 1, "social-link"], [1, "fab", "fa-github"], ["href", "https://www.facebook.com/profile.php?id=100007074375925", "target", "_blank", 1, "social-link"], [1, "fab", "fa-facebook-f"], ["href", "https://www.linkedin.com/in/vugar-abdullayev-13451469", "target", "_blank", 1, "social-link"], [1, "fab", "fa-linkedin-in"], [1, "profile__footer"], ["href", "https://www.topcv.me/cv/fe6e967228f067aa0e216b2418f154e9", "target", "_blank", 1, "link"], [1, "link__text"], [1, "link__icon"], [1, "fas", "fa-download"], [1, "link", 3, "routerLink"], [1, "fas", "fa-phone"], [4, "ngIf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Vugar Abdullayev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Front End Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "DOWNLOAD CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProfileComponent_audio_player_29_Template, 1, 0, "audio-player", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_0__.AudioPlayerComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 3;\n}\n\n.profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-between;\n  width: var(--app-profile-width);\n  height: 600px;\n  padding: 210px 50px 0 50px;\n  background: #ffffff;\n  border-radius: var(--app-border-radius);\n  position: relative;\n  box-shadow: var(--app-box-shadow);\n}\n\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%] {\n  background-image: url('savanna.webp');\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 300px;\n  background-color: #626262;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  border-radius: var(--app-border-radius) var(--app-border-radius) 0 0;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: -25%;\n  bottom: -198px;\n  width: 700px;\n  height: 200px;\n  background: #ffffff;\n  transform: rotate(12deg);\n}\n\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -198px;\n  width: 700px;\n  height: 200px;\n  background: #ffffff;\n  left: auto;\n  right: -25%;\n  transform: rotate(-6deg);\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border: 3px solid #ffffff;\n  border-radius: 100%;\n  margin-bottom: 20px;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__title[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 30px;\n  line-height: 32px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  font-size: 14px;\n  color: var(--primary-color);\n  line-height: 14px;\n  font-weight: 400;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  cursor: pointer;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #171717;\n  margin: 0 6px;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover, .profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__info__links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:focus {\n  color: var(--primary-color);\n}\n\n.profile[_ngcontent-%COMP%]   .profile__footer[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #dcdcdc;\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n  width: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\n.profile[_ngcontent-%COMP%]   .profile__footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link__text[_ngcontent-%COMP%] {\n  color: inherit;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .link__icon[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 14px;\n  margin-left: 8px;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\n@media (max-width: 576px) {\n  .profile[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUFFO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0VBQUE7QUFFTjs7QUFETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBR1I7O0FBRE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFHUjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7QUFFTjs7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ047O0FBQ0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ047O0FBQU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBRVI7O0FBRFE7RUFDRSwyQkFBQTtBQUdWOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFETjs7QUFFTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRU07RUFDQywyQkFBQTtBQUFQOztBQVNBO0VBQ0U7SUFDRSxVQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogdmFyKC0tYXBwLXByb2ZpbGUtd2lkdGgpO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcGFkZGluZzogMjEwcHggNTBweCAwIDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYm9yZGVyLXJhZGl1cyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWFwcC1ib3gtc2hhZG93KTtcclxuICAucHJvZmlsZV9faGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3NhdmFubmEud2VicCcpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjYyNjI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1ib3JkZXItcmFkaXVzKSB2YXIoLS1hcHAtYm9yZGVyLXJhZGl1cykgMCAwO1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0yNSU7XHJcbiAgICAgICAgYm90dG9tOiAtMTk4cHg7XHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTE5OHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICByaWdodDogLTI1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZyk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLnByb2ZpbGVfX2luZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC5wcm9maWxlX19pbmZvX19pbWFnZSB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZV9faW5mb19fdGl0bGUge1xyXG4gICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wcm9maWxlX19pbmZvX19zdWJ0aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVfX2luZm9fX2xpbmtzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC5zb2NpYWwtbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTcxNzE3O1xyXG4gICAgICAgIG1hcmdpbjogMCA2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGVfX2Zvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5saW5rIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgLmxpbmtfX3RleHQge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgICAubGlua19faWNvbiB7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIH1cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAvLyAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnByb2ZpbGUge1xyXG4gICAgdG9wOiAxMDBweDtcclxuICB9XHJcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 4464:
/*!******************************************!*\
  !*** ./src/app/smoke/smoke.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmokeComponent": function() { return /* binding */ SmokeComponent; }
/* harmony export */ });
/* harmony import */ var _smoke_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoke.js */ 7355);
/* harmony import */ var _smoke_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smoke_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class SmokeComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}
SmokeComponent.ɵfac = function SmokeComponent_Factory(t) { return new (t || SmokeComponent)(); };
SmokeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SmokeComponent, selectors: [["app-smoke"]], decls: 0, vars: 0, template: function SmokeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbW9rZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7828:
/*!**************************************************!*\
  !*** ./src/app/starfield/particles-js-config.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PARTICLE_JS_CONFIG": function() { return /* binding */ PARTICLE_JS_CONFIG; }
/* harmony export */ });
const PARTICLE_JS_CONFIG = {
    "particles": {
        "number": {
            "value": 250,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.7,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};


/***/ }),

/***/ 3657:
/*!**************************************************!*\
  !*** ./src/app/starfield/starfield.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarfieldComponent": function() { return /* binding */ StarfieldComponent; }
/* harmony export */ });
/* harmony import */ var _particles_js_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particles-js-config */ 7828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class StarfieldComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._initStars();
    }
    _initStars() {
        this.zone.runOutsideAngular(() => {
            particlesJS('starfield', _particles_js_config__WEBPACK_IMPORTED_MODULE_0__.PARTICLE_JS_CONFIG, function () {
            });
        });
    }
}
StarfieldComponent.ɵfac = function StarfieldComponent_Factory(t) { return new (t || StarfieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone)); };
StarfieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StarfieldComponent, selectors: [["app-starfield"]], decls: 0, vars: 0, template: function StarfieldComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFyZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




window.paceOptions = {
    ajax: false,
    document: false,
    eventLag: false,
    restartOnRequestAfter: false,
    elements: {
        selectors: ['.scrollbar-content']
    }
};
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map