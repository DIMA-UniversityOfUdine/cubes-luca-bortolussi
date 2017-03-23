import Body from './model/Body';
import Head from './model/Head';
import Mouth from './model/Mouth';
import Teeth from './model/Teeth';
import Eye from './model/Eye';
import Ear from './model/Ear';
import Horn from './model/Horn';
import Leg from './model/Leg';
import Mane from './model/Mane';

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
    var body = new Body(bodyColor , 14, 7, 8);
    body.position(0, 0, 0);

    /* ---- HEAD ---*/
    var head = new Head(bodyColor, 5, 9, 8);
    head.position(4.5, 7, 0);

    /*---MOUTH---*/
    var mouth = new Mouth(beje);
    mouth.position(10, 8, 0);

    /*---TEETH---*/
    var teeth = new Teeth(white, 1, 1, 4);
    teeth.position(11, 7.5, 0);

    /*---EYES---*/
    var rightEye = new Eye(white, brown, 3, 3, 1);
    rightEye.position(4.5, 9.5, 4, 0.5);
    var leftEye = new Eye(white, brown, 3, 3, 1);
    leftEye.position(4.5, 9.5, -4, -0.5);

    /*---EARS---*/
    var rightEar = new Ear(bodyColor, 2, 3, 2);
    rightEar.position(4.5, 12.5, 3);
    var leftEar = new Ear(bodyColor, 2, 3, 2);
    leftEar.position(4.5, 12.5, -3);

    /*---HORN---*/
    var horn = new Horn(white, 2, 7, 2);
    horn.position(5.5, 12.5, 0);

    /*---LEG---*/
    var front_right = new Leg(bodyColor, beje, brown, 2, 4, 2); //front_right
    front_right.position(5.5, -5.5, 3);
    var front_left = new Leg(bodyColor, beje, brown, 2, 4, 2);  //front_left
    front_left.position(5.5, -5.5, -3);
    var back_right = new Leg(bodyColor, beje, brown, 2, 4, 2);  //back_right
    back_right.position(-5.5, -5.5, 3);
    var back_left = new Leg(bodyColor, beje, brown, 2, 4, 2);   //back_left
    back_left.position(-5.5, -5.5, -3);

    /*---MANE---*/
    var mane = new Mane(brown);
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
