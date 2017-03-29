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
                terrain.position(i - img.width / 2, j - img.height / 2);
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
    console.log(unihorse.unihorse);
}

/*---RIDE AND MOVE---*/
var direction = 'front';
var prevDirection = 'front';
var rotation;
var date = Date.now();
var time = new THREE.Clock();
time.start();

setInterval(function(){
    date = Date.now();
    prevDirection = direction;
    switch (Math.floor((Math.random()* 3 + 1))) {
        case 1:
            direction = 'front';
            break;
        case 2:
            direction = 'left';
            break;
        case 3:
            direction = 'right';
            break;
        default:
            false;
    }
    console.log("prev: " + prevDirection);
    console.log("dir: " + direction);
}, 1000);

/*---UPDATE---*/
function Update() {
    requestAnimationFrame( Update );
    /*---RIDE-ANIMATION---*/
        unihorse.unihorse.rotation.z = Math.sin( time.getElapsedTime() * 4) * Math.PI/8;
        unihorse.front_right.leg.rotation.z = Math.sin( time.getElapsedTime() * 4) * Math.PI/6;
        unihorse.front_left.leg.rotation.z = Math.sin( time.getElapsedTime() * 4) * Math.PI/6;
        unihorse.back_right.leg.rotation.z = Math.sin( time.getElapsedTime() * 4) * Math.PI/10;
        unihorse.back_left.leg.rotation.z = Math.sin( time.getElapsedTime() * 4) * Math.PI/10;

        switch (direction) {
            case 'front':
                x -= (date - Date.now()) / 1000;
                switch (prevDirection) {
                    case 'left':
                        unihorse.unihorse.rotation.y = Math.PI / 2 - ((Date.now() - date) / 1000) * (Math.PI / 2) ;
                        break;
                    case 'right':
                        unihorse.unihorse.rotation.y = - Math.PI / 2 + ((Date.now() - date) / 1000 ) * (Math.PI / 2);
                        break;
                    default:
                    false;
                }
                //unihorse.unihorse.rotation.y = (Date.now() - date) / 1000 * 0;
            break;
            case 'left':
                z += (date - Date.now()) / 1000;
                switch (prevDirection) {
                    case 'front':
                        unihorse.unihorse.rotation.y = 0 + ((Date.now() - date) / 1000) * (Math.PI / 2) ;
                        break;
                    case 'right':
                        unihorse.unihorse.rotation.y = - Math.PI / 2 + ((Date.now() - date) / 1000 ) * Math.PI;
                        break;
                    default:
                    false;
                }
                //unihorse.unihorse.rotation.y += - ((Date.now() - date) / 1000) * (Math.PI / 2) ;
            break;
            case 'right':
                z -= (date - Date.now()) / 1000;
                switch (prevDirection) {
                    case 'front':
                        unihorse.unihorse.rotation.y = 0 - ((Date.now() - date) / 1000) * (Math.PI / 2) ;
                        break;
                    case 'left':
                        unihorse.unihorse.rotation.y = Math.PI / 2 - ((Date.now() - date) / 1000 ) * (Math.PI);
                        break;
                    default:
                    false;
                }
                //unihorse.unihorse.rotation.y += ((Date.now() - date) / 1000 ) * (Math.PI / 2);
            break;
            default:
                false;
        }

    unihorse.unihorse.position.set(x, y, z);

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
