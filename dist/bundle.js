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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
class Ear {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Ear;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Eye {
    constructor(irisrHex, pupilHex, ...[h, w, d]) {
        this.drawIris(irisrHex, h, w, d);
        this.drawPupil(pupilHex, h, w, d);
    }

    drawIris(irisrHex, h, w, d) {
        this.irisMaterial = new THREE.MeshBasicMaterial( { color: irisrHex } );
        this.irisGeometry = new THREE.BoxGeometry(h, w, d);
        this.iris = new THREE.Mesh( this.irisGeometry, this.irisMaterial );
    }

    drawPupil(pupilHex, h, w, d) {
        this.pupilMaterial = new THREE.MeshBasicMaterial( { color: pupilHex } );
        this.pupilGeometry = new THREE.BoxGeometry(h-2, w-2, d);
        this.pupil = new THREE.Mesh( this.pupilGeometry, this.pupilMaterial );
    }

    position(x, y, z, o) {
        this.iris.position.set(x ,y, z);
        this.pupil.position.set(x ,y, z + o);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Eye;


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Horn {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Horn;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Leg {
    constructor(topHex, midHex, botHex, ...[h, w, d]) {
        this.drawTop(topHex, h, w, d);
        this.drawMid(midHex, w);
        this.drawBot(botHex, w);
    }

    drawTop(topHex, h, w, d) {
        this.topMaterial = new THREE.MeshBasicMaterial( { color: topHex } );
        this.topGeometry = new THREE.BoxGeometry(h, w, d);
        this.top = new THREE.Mesh( this.topGeometry, this.topMaterial );
        this.top.position.set(0, 0, 0);
    }

    drawMid(midHex, w) {
        this.midMaterial = new THREE.MeshBasicMaterial( { color: midHex } );
        this.midGeometry = new THREE.BoxGeometry(2, 2, 2);
        this.mid = new THREE.Mesh( this.midGeometry, this.midMaterial );
        this.mid.position.set(0, -w, 0);
    }

    drawBot(botHex, w) {
        this.botMaterial = new THREE.MeshBasicMaterial( { color: botHex } );
        this.botGeometry = new THREE.BoxGeometry(2, 2, 2);
        this.bot = new THREE.Mesh( this.botGeometry, this.botMaterial );
        this.mid.position.set(0, -w - 1, 0);
    }

    position(x, y, z) {
        this.top.position.set(x, y, z);
        this.mid.position.set(x, y -3, z);
        this.bot.position.set(x, y -5, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Leg;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Mane {
    constructor(hex) {
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.drawBig();
        this.drawMedium();
        this.drawSmall();
        this.drawSmaller();
        this.drawMane();
    }

    drawBig() {
        this.big = new THREE.BoxGeometry(2, 8, 6);
        this.bigMesh = new THREE.Mesh(this.big);
        this.bigMesh.position.set(1.5, 0, 0);
    }

    drawMedium() {
        this.medium = new THREE.BoxGeometry(2, 3, 6);
        this.mediumMesh = new THREE.Mesh(this.medium);
        this.mediumMesh.position.set(-0.5, -2.5, 0);
    }

    drawSmall() {
        this.small = new THREE.BoxGeometry(1, 5, 6);
        this.smallMesh = new THREE.Mesh(this.small);
        this.smallMesh.position.set(-2, -1.5, 0);
    }

    drawSmaller() {
        this.smaller = new THREE.BoxGeometry(1, 1, 6);
        this.smallerMesh = new THREE.Mesh(this.smaller);
        this.smallerMesh.position.set(-1, 0.5, 0);
    }

    drawMane() {
        this.maneGeometry = new THREE.Geometry();
        this.bigMesh.updateMatrix();
        this.mediumMesh.updateMatrix();
        this.smallMesh.updateMatrix();
        this.smallerMesh.updateMatrix();
        this.maneGeometry.merge(this.bigMesh.geometry,  this.bigMesh.matrix);
        this.maneGeometry.merge(this.mediumMesh.geometry, this.mediumMesh.matrix);
        this.maneGeometry.merge(this.smallMesh.geometry, this.smallMesh.matrix);
        this.maneGeometry.merge(this.smallerMesh.geometry, this.smallerMesh.matrix);

        this.mane = new THREE.Mesh(this.maneGeometry, this.material);
    }

    position(x, y, z) {
        this.mane.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Mane;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Mouth {
    constructor(hex) {
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.drawUpper();
        this.drawMiddle();
        this.drawBottom();
        this.drawMouth();
    }

    drawUpper() {
        this.upper = new THREE.BoxGeometry(6, 3, 6);
        this.upperMesh = new THREE.Mesh(this.upper);
        this.upperMesh.position.set(0, 1.5, 0);
    }

    drawMiddle() {
        this.middle = new THREE.BoxGeometry(2, 1, 6);
        this.middleMesh = new THREE.Mesh(this.middle);
        this.middleMesh.position.set(-2, -0.5, 0);
    }

    drawBottom() {
        this.bottom = new THREE.BoxGeometry(4, 2, 6);
        this.bottomMesh = new THREE.Mesh(this.bottom);
        this.bottomMesh.position.set(-1, -2, 0);
    }

    drawMouth() {
        this.mouthGeometry = new THREE.Geometry();
        this.upperMesh.updateMatrix();
        this.middleMesh.updateMatrix();
        this.bottomMesh.updateMatrix();
        this.mouthGeometry.merge(this.upperMesh.geometry,  this.upperMesh.matrix);
        this.mouthGeometry.merge(this.middleMesh.geometry, this.middleMesh.matrix);
        this.mouthGeometry.merge(this.bottomMesh.geometry, this.bottomMesh.matrix);

        this.mouth = new THREE.Mesh(this.mouthGeometry, this.material);
    }

    position(x, y, z) {
        this.mouth.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Mouth;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Teeth {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = Teeth;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_Body__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Mouth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Teeth__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Eye__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Ear__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Horn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Leg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_Mane__ = __webpack_require__(6);










var scene, camera, renderer, controls, stats;

function Start() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( '#6acee6' );
    document.body.appendChild( renderer.domElement );

    /*---CAMERA---*/
    camera.position.set(0, 10, 10);
    camera.lookAt( new THREE.Vector3(0,0,0));

    /*---COLOR---*/
    var white = '#ffffff';
    var bodyColor = '#eae8d6';
    var beje = '#dbd4b7';
    var brown = '#473c2f';

    /*---BODY---*/
    var body = new __WEBPACK_IMPORTED_MODULE_0__model_Body__["a" /* default */](bodyColor , 14, 7, 8);
    body.position(0, 0, 0);

    /* ---- HEAD ---*/
    var head = new __WEBPACK_IMPORTED_MODULE_1__model_Head__["a" /* default */](bodyColor, 5, 9, 8);
    head.position(4.5, 7, 0);

    /*---MOUTH---*/
    var mouth = new __WEBPACK_IMPORTED_MODULE_2__model_Mouth__["a" /* default */](beje);
    mouth.position(10, 8, 0);

    /*---TEETH---*/
    var teeth = new __WEBPACK_IMPORTED_MODULE_3__model_Teeth__["a" /* default */](white, 1, 1, 4);
    teeth.position(11, 7.5, 0);

    /*---EYES---*/
    var rightEye = new __WEBPACK_IMPORTED_MODULE_4__model_Eye__["a" /* default */](white, brown, 3, 3, 1);
    rightEye.position(4.5, 9.5, 4, 0.5);
    var leftEye = new __WEBPACK_IMPORTED_MODULE_4__model_Eye__["a" /* default */](white, brown, 3, 3, 1);
    leftEye.position(4.5, 9.5, -4, -0.5);

    /*---EARS---*/
    var rightEar = new __WEBPACK_IMPORTED_MODULE_5__model_Ear__["a" /* default */](bodyColor, 2, 3, 2);
    rightEar.position(4.5, 12.5, 3);
    var leftEar = new __WEBPACK_IMPORTED_MODULE_5__model_Ear__["a" /* default */](bodyColor, 2, 3, 2);
    leftEar.position(4.5, 12.5, -3);

    /*---HORN---*/
    var horn = new __WEBPACK_IMPORTED_MODULE_6__model_Horn__["a" /* default */](white, 2, 7, 2);
    horn.position(5.5, 12.5, 0);

    /*---LEG---*/
    var front_right = new __WEBPACK_IMPORTED_MODULE_7__model_Leg__["a" /* default */](bodyColor, beje, brown, 2, 4, 2); //front_right
    front_right.position(5.5, -5.5, 3);
    var front_left = new __WEBPACK_IMPORTED_MODULE_7__model_Leg__["a" /* default */](bodyColor, beje, brown, 2, 4, 2);  //front_left
    front_left.position(5.5, -5.5, -3);
    var back_right = new __WEBPACK_IMPORTED_MODULE_7__model_Leg__["a" /* default */](bodyColor, beje, brown, 2, 4, 2);  //back_right
    back_right.position(-5.5, -5.5, 3);
    var back_left = new __WEBPACK_IMPORTED_MODULE_7__model_Leg__["a" /* default */](bodyColor, beje, brown, 2, 4, 2);   //back_left
    back_left.position(-5.5, -5.5, -3);

    /*---MANE---*/
    var mane = new __WEBPACK_IMPORTED_MODULE_8__model_Mane__["a" /* default */](brown);
    mane.position(-0.5, 7.5, 0);


    scene.add(
        head.cube,
        body.cube,
        mouth.mouth,
        teeth.cube,
        rightEye.iris,
        rightEye.pupil,
        leftEye.iris,
        leftEye.pupil,
        rightEar.cube,
        leftEar.cube,
        horn.cube,

        front_right.top,
        front_right.mid,
        front_right.bot,

        front_left.top,
        front_left.mid,
        front_left.bot,

        back_right.top,
        back_right.mid,
        back_right.bot,

        back_left.top,
        back_left.mid,
        back_left.bot,

        mane.mane
    );

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