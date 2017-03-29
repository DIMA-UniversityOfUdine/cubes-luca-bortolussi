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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Terrain {
    constructor(w, h, d) {
        this.w = w;
        this.h = h;
        this.d = d;
        this.geometry = new THREE.BoxGeometry(w, h, d);
        this.material = new THREE.MeshPhongMaterial( { color: '#CD3131' } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }
    position(x, z) {
        this.cube.position.set(x * this.w , this.h / 2 , z * this.d);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Terrain);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getHeightData(img,scale) {

 if (scale == undefined) scale=1;

    var canvas = document.createElement( 'canvas' );
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext( '2d' );

    var size = img.width * img.height;
    console.log(size);
    var data = new Float32Array( size );

    context.drawImage(img,0,0);

    for ( var i = 0; i < size; i ++ ) {
        data[i] = 0
    }

    var imgd = context.getImageData(0, 0, img.width, img.height);
    var pix = imgd.data;

    var j=0;
    for (var i = 0; i<pix.length; i +=4) {
        var all = pix[i]+pix[i+1]+pix[i+2];  // all is in range 0 - 255*3
        data[j++] = scale*all/3;
    }
    return data;
}

/* harmony default export */ __webpack_exports__["a"] = (getHeightData);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Body__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Leg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tail__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Head__ = __webpack_require__(5);





class Unihorse {
    constructor() {
        this.white = '#ffffff';
        this.bodyColor = '#eae8d6';
        this.beje = '#dbd4b7';
        this.brown = '#473c2f';
        this.unihorse = new THREE.Group(); //create an empty container
        this.create();
        this.add();
    }

    create() {
        /*---HEAD---*/
        this.head = new __WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */]();

        /*---BODY---*/
        this.body = new __WEBPACK_IMPORTED_MODULE_0__Body__["a" /* default */](this.bodyColor , 14, 7, 8);
        this.body.position(0, 0, 0);

        /*---LEG---*/
        this.front_right = new __WEBPACK_IMPORTED_MODULE_1__Leg__["a" /* default */](this.bodyColor, this.beje, this.brown, 2, 4, 2); //front_right
        this.front_right.position(5.5, -5.5, 3);
        this.front_left = new __WEBPACK_IMPORTED_MODULE_1__Leg__["a" /* default */](this.bodyColor, this.beje, this.brown, 2, 4, 2);  //front_left
        this.front_left.position(5.5, -5.5, -3);
        this.back_right = new __WEBPACK_IMPORTED_MODULE_1__Leg__["a" /* default */](this.bodyColor, this.beje, this.brown, 2, 4, 2);  //back_right
        this.back_right.position(-5.5, -5.5, 3);
        this.back_left = new __WEBPACK_IMPORTED_MODULE_1__Leg__["a" /* default */](this.bodyColor, this.beje, this.brown, 2, 4, 2);   //back_left
        this.back_left.position(-5.5, -5.5, -3);

        /*---tail---*/
        this.tail = new __WEBPACK_IMPORTED_MODULE_2__Tail__["a" /* default */](this.brown);
        this.tail.position(-9.5, 0.5, 0);
        //this.unihorse.add( tail.tail );//add a mesh with geometry to it


    }

    add() {
        /*---UNIHORSE---*/
        this.unihorse.add(this.head.head)
        this.unihorse.add( this.body.cube );        // BODY
        this.unihorse.add( this.front_right.leg );  // LEGS
        this.unihorse.add( this.front_left.leg );
        this.unihorse.add( this.back_right.leg );
        this.unihorse.add( this.back_left.leg );
        this.unihorse.add( this.tail.tail );        // TAIL
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Unihorse);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_Unihorse__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getHeightData__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Terrain__ = __webpack_require__(0);





var scene, camera, renderer, controls, stats, x, y, z, unihorse;

function Start() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( '#6acee6' );
    document.body.appendChild( renderer.domElement );


    /*---LIGHT---*/
    var light = new THREE.AmbientLight( '#ffffff', 0.6);
    scene.add( light );

    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
	hemiLight.color.setHSL( 0.6, 1, 0.6 );
	hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
	hemiLight.position.set( 0, 500, 0 );
	scene.add( hemiLight );

    /*---GROUND---*/
    var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
    var groundMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
    groundMat.color.setHSL( 0.095, 1, 0.75 );
    var ground = new THREE.Mesh( groundGeo, groundMat );
    ground.rotation.x = -Math.PI/2;
    scene.add( ground );
    ground.receiveShadow = true;


    /*---TERRAIN---*/
    var img = new Image();
    img.onload = function () {
        var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getHeightData__["a" /* default */])(img,0.1);
        var n = 0;
        for (var i= 0; i< img.width; i++) {
            for (var j = 0; j < img.height; j++) {
                n ++;
                var terrain = new __WEBPACK_IMPORTED_MODULE_3__Terrain__["a" /* default */](5, data[n], 5);
                terrain.position(i, j);
                scene.add( terrain.cube );
            }
        }
    }
    img.src = "./textures/heightmap2.png";

    /*---UNIHORSE---*/
    unihorse = new __WEBPACK_IMPORTED_MODULE_0__model_Unihorse__["a" /* default */]();
    unihorse.unihorse.position.set(20, 40, 20);
    scene.add( unihorse.unihorse );
    x = unihorse.unihorse.position.x;
    y = unihorse.unihorse.position.y;
    z = unihorse.unihorse.position.z;

    /*---STATS---*/
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );

    //controls = new THREE.OrbitControls( camera );
    //controls.addEventListener( 'change', Render );
    console.log(unihorse.unihorse);
}

/*---MOVEMENTS---*/
document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 87:
            x += 5;
            break;
        case 83:
            x -= 5;
            break;
        case 65:
            z -= 5;
            break;
        case 68:
            z += 5;
            break;
        default:
            false;

    }
})

var up = false;
setInterval(function(){
    up = !up;
}, 1000);

/*---UPDATE---*/
function Update() {
    requestAnimationFrame( Update );
    //controls.update();
    unihorse.unihorse.position.set(x, y, z);
    if (up) {
        unihorse.unihorse.rotation.z += Math.PI/200;
        unihorse.front_right.leg.rotation.z += Math.PI/200;
        unihorse.front_left.leg.rotation.z += Math.PI/200;
        unihorse.back_right.leg.position.y -= 0.05;
        unihorse.back_left.leg.position.y -= 0.05;
        unihorse.back_right.leg.rotation.z -= Math.PI/300;
        unihorse.back_left.leg.rotation.z -= Math.PI/300;
        //unihorse.body.cube.rotation.z += Math.PI/200;
        //unihorse.head.head.rotation.z += Math.PI/200;
        //unihorse.tail.tail.rotation.z += Math.PI/200;
    } else {
        unihorse.unihorse.rotation.z -= Math.PI/200;
        unihorse.front_right.leg.rotation.z -= Math.PI/200;
        unihorse.front_left.leg.rotation.z -= Math.PI/200;
        unihorse.back_right.leg.position.y += 0.05;
        unihorse.back_left.leg.position.y += 0.05;
        unihorse.back_right.leg.rotation.z += Math.PI/300;
        unihorse.back_left.leg.rotation.z += Math.PI/300;
        //unihorse.body.cube.rotation.z -= Math.PI/200;
        //unihorse.head.head.rotation.z -= Math.PI/200;
        //unihorse.tail.tail.rotation.z -= Math.PI/200;
    }
    camera.position.set(x + 40 , y + 20 , z - 30);
    camera.lookAt( new THREE.Vector3(x , y, z));
    stats.update();
    Render();
}

/*---RENDER---*/
function Render() {
var time = Date.now() * 0.0005;
    renderer.render(scene, camera);
}

Start();
Update();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Body {
    constructor(hex,...[h, w ,d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }
    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Body);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Face__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Mouth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Teeth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Eye__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Ear__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Horn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Mane__ = __webpack_require__(7);








class Head {
    constructor() {
        this.white = '#ffffff';
        this.bodyColor = '#eae8d6';
        this.beje = '#dbd4b7';
        this.brown = '#473c2f';
        this.head = new THREE.Group();
        this.create();
        this.add();
    }

    create() {
        /* ---- FACE ---*/
        this.face = new __WEBPACK_IMPORTED_MODULE_0__Face__["a" /* default */](this.bodyColor, 5, 9, 8);
        this.face.position(4.5, 7, 0);

        /*---MOUTH---*/
        this.mouth = new __WEBPACK_IMPORTED_MODULE_1__Mouth__["a" /* default */](this.beje);
        this.mouth.position(10, 8, 0);

        /*---TEETH---*/
        this.teeth = new __WEBPACK_IMPORTED_MODULE_2__Teeth__["a" /* default */](this.white, 1, 1, 4);
        this.teeth.position(11, 7.5, 0);

        /*---EYES---*/
        this.rightEye = new __WEBPACK_IMPORTED_MODULE_3__Eye__["a" /* default */](this.white, this.brown, 3, 3, 1);
        this.rightEye.position(4.5, 9.5, 4, 0.5);
        this.leftEye = new __WEBPACK_IMPORTED_MODULE_3__Eye__["a" /* default */](this.white, this.brown, 3, 3, 1);
        this.leftEye.position(4.5, 9.5, -4, -0.5);

        /*---EARS---*/
        this.rightEar = new __WEBPACK_IMPORTED_MODULE_4__Ear__["a" /* default */](this.bodyColor, 2, 3, 2);
        this.rightEar.position(4.5, 12.5, 3);
        this.leftEar = new __WEBPACK_IMPORTED_MODULE_4__Ear__["a" /* default */](this.bodyColor, 2, 3, 2);
        this.leftEar.position(4.5, 12.5, -3);

        /*---HORN---*/
        this.horn = new __WEBPACK_IMPORTED_MODULE_5__Horn__["a" /* default */](this.white, 2, 7, 2);
        this.horn.position(5.5, 12.5, 0);

        /*---MANE---*/
        this.mane = new __WEBPACK_IMPORTED_MODULE_6__Mane__["a" /* default */](this.brown);
        this.mane.position(-0.5, 7.5, 0);
    }

    add() {
        this.head.add( this.face.cube );        // FACE
        this.head.add( this.mouth.mouth );      // MOUNTH
        this.head.add( this.teeth.cube );       // TEETH
        this.head.add( this.rightEye.iris );    // EYE
        this.head.add( this.rightEye.pupil );
        this.head.add( this.leftEye.iris );
        this.head.add( this.leftEye.pupil );
        this.head.add( this.rightEar.cube );    // EARS
        this.head.add( this.leftEar.cube );
        this.head.add( this.horn.cube );        // HORN
        this.head.add( this.mane.mane );        // MANE
    }
}

    /* harmony default export */ __webpack_exports__["a"] = (Head);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Leg {
    constructor(topHex, midHex, botHex, ...[h, w, d]) {
        this.drawTop(topHex, h, w, d);
        this.drawMid(midHex, w);
        this.drawBot(botHex, w);
        this.drawLeg();
    }

    drawTop(topHex, h, w, d) {
        this.topMaterial = new THREE.MeshPhongMaterial( { color: topHex } );
        this.topGeometry = new THREE.BoxGeometry(h, w, d);
        this.top = new THREE.Mesh( this.topGeometry, this.topMaterial );
        this.top.position.set(0, 0, 0);
    }

    drawMid(midHex, w) {
        this.midMaterial = new THREE.MeshPhongMaterial( { color: midHex } );
        this.midGeometry = new THREE.BoxGeometry(2, 2, 2);
        this.mid = new THREE.Mesh( this.midGeometry, this.midMaterial );
        this.mid.position.set(0, -w, 0);
    }

    drawBot(botHex, w) {
        this.botMaterial = new THREE.MeshPhongMaterial( { color: botHex } );
        this.botGeometry = new THREE.BoxGeometry(2, 2, 2);
        this.bot = new THREE.Mesh( this.botGeometry, this.botMaterial );
        this.mid.position.set(0, -w - 1, 0);
    }

    drawLeg() {
        this.leg = new THREE.Group();
        this.leg.add(this.top);
        this.leg.add(this.mid);
        this.leg.add(this.top);
    }

    position(x, y, z) {
        this.top.position.set(x, y, z);
        this.mid.position.set(x, y -3, z);
        this.bot.position.set(x, y -5, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Leg);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Mane {
    constructor(hex) {
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
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

/* harmony default export */ __webpack_exports__["a"] = (Mane);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tail {
    constructor(hex) {
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.drawBig();
        this.drawMedium();
        this.drawSmall();
        this.drawSmaller();
        this.drawtail();
    }

    drawBig() {
        this.big = new THREE.BoxGeometry(2, 4, 6);
        this.bigMesh = new THREE.Mesh(this.big);
        this.bigMesh.position.set(1.5, 1, 0);
    }

    drawMedium() {
        this.medium = new THREE.BoxGeometry(3, 3, 6);
        this.mediumMesh = new THREE.Mesh(this.medium);
        this.mediumMesh.position.set(-0.5, -1.5, 0);
    }

    drawSmall() {
        this.small = new THREE.BoxGeometry(1, 5, 6);
        this.smallMesh = new THREE.Mesh(this.small);
        this.smallMesh.position.set(-2, -0.5, 0);
    }

    drawSmaller() {
        this.smaller = new THREE.BoxGeometry(1, 1, 6);
        this.smallerMesh = new THREE.Mesh(this.smaller);
        this.smallerMesh.position.set(-1, 1.5, 0);
    }

    drawtail() {
        this.tailGeometry = new THREE.Geometry();
        this.bigMesh.updateMatrix();
        this.mediumMesh.updateMatrix();
        this.smallMesh.updateMatrix();
        this.smallerMesh.updateMatrix();
        this.tailGeometry.merge(this.bigMesh.geometry,  this.bigMesh.matrix);
        this.tailGeometry.merge(this.mediumMesh.geometry, this.mediumMesh.matrix);
        this.tailGeometry.merge(this.smallMesh.geometry, this.smallMesh.matrix);
        this.tailGeometry.merge(this.smallerMesh.geometry, this.smallerMesh.matrix);

        this.tail = new THREE.Mesh(this.tailGeometry, this.material);
    }

    position(x, y, z) {
        this.tail.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Tail);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Ear {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Ear);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Eye {
    constructor(irisrHex, pupilHex, ...[h, w, d]) {
        this.drawIris(irisrHex, h, w, d);
        this.drawPupil(pupilHex, h, w, d);
    }

    drawIris(irisrHex, h, w, d) {
        this.irisMaterial = new THREE.MeshPhongMaterial( { color: irisrHex } );
        this.irisGeometry = new THREE.BoxGeometry(h, w, d);
        this.iris = new THREE.Mesh( this.irisGeometry, this.irisMaterial );
    }

    drawPupil(pupilHex, h, w, d) {
        this.pupilMaterial = new THREE.MeshPhongMaterial( { color: pupilHex } );
        this.pupilGeometry = new THREE.BoxGeometry(h-2, w-2, d);
        this.pupil = new THREE.Mesh( this.pupilGeometry, this.pupilMaterial );
    }

    position(x, y, z, o) {
        this.iris.position.set(x ,y, z);
        this.pupil.position.set(x ,y, z + o);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Eye);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Face {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Face);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Horn {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Horn);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Mouth {
    constructor(hex) {
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
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

/* harmony default export */ __webpack_exports__["a"] = (Mouth);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Teeth {
    constructor(hex, ...[h, w, d]) {
        this.geometry = new THREE.BoxGeometry(h, w, d);
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Teeth);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function animation() {
    var up = false;
}

/* unused harmony default export */ var _unused_webpack_default_export = (animation);


/***/ })
/******/ ]);