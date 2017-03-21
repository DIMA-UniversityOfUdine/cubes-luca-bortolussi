class Head {
    constructor(hex, ...dimension) {
        this.geometry = new THREE.BoxGeometry(dimension);
        this.material = new THREE.MeshBasicMaterial( { color: "0x" + hex } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }

    position(x, y, z) {
        this.cube.position.set(x ,y, z);
    }
}

export default Head;
