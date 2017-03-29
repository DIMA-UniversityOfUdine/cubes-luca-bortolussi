import Unihorse from './model/Unihorse';
import getHeightData from './getHeightData';
import animation from './animation';
import Terrain from './Terrain';

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
        var data = getHeightData(img,0.1);
        var n = 0;
        for (var i= 0; i< img.width; i++) {
            for (var j = 0; j < img.height; j++) {
                n ++;
                var terrain = new Terrain(5, data[n], 5);
                terrain.position(i, j);
                scene.add( terrain.cube );
            }
        }
    }
    img.src = "./textures/heightmap2.png";

    /*---UNIHORSE---*/
    unihorse = new Unihorse();
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
