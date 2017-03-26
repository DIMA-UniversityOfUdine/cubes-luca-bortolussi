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

export default Body;
