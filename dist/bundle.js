/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Body {
    constructor(hex,...[h, w ,d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }
    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Body;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Head {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Head;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_Head__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Body__ = __webpack_require__(0);



var scene, camera, renderer, controls, stats;

function Start() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xf0f0f0 );
    document.body.appendChild( renderer.domElement );

    /*---CAMERA---*/
    camera.position.set(0, 10, 10);
    camera.lookAt( new THREE.Vector3(0,0,0));

    /*---COLOR---*/
    var bodyColor = '#eae8d6';
    var beje = '#dbd4b7';

    /* ---- HEAD ---*/
    var head = new __WEBPACK_IMPORTED_MODULE_0__model_Head__["a" /* default */](bodyColor , 5, 9, 8);
    head.position(4.5, 7, 0);

    /*---BODY---*/
    var body = new __WEBPACK_IMPORTED_MODULE_1__model_Body__["a" /* default */](bodyColor , 14, 7, 8);
    body.position(0, 0, 0);

    /*---LEGS---*/

    scene.add( head.cube, body.cube );

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );

    // uncomment if you need to draw coordinate axes when building the scene
    //Coordinates.drawAllAxes();

    controls = new THREE.OrbitControls( camera );
    controls.addEventListener( 'change', Render );


}

function Update() {
    requestAnimationFrame( Update );
    controls.update();
    stats.update();
    Render();
}

function Render() {

    renderer.render(scene, camera);
}

Start();
Update();


/***/ })
/******/ ]);