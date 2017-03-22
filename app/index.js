import Body from './model/Body';
import Head from './model/Head';
import Mouth from './model/Mouth'

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

    /*---BODY---*/
    var body = new Body(bodyColor , 14, 7, 8);
    body.position(0, 0, 0);

    /* ---- HEAD ---*/
    var head = new Head(bodyColor , 5, 9, 8);
    head.position(4.5, 7, 0);

    /*---MOUTH---*/
    var mouth = new Mouth(beje);
    mouth.drawMouth();
    mouth.position(10, 8, 0);


    scene.add( head.cube, body.cube, mouth.mouth);

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
