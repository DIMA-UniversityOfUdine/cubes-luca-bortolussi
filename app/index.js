import Head from './model/Head.js'

var scene, camera, renderer, controls, stats;

function Start() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xf0f0f0 );
    document.body.appendChild( renderer.domElement );

    camera.position.set(3,4,6);
    camera.lookAt( new THREE.Vector3(0,0,0));

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
    var cube = new THREE.Mesh( geometry, material );

    var head = new Head();

    scene.add( head.cube );

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
