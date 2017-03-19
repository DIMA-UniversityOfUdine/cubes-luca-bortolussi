class Head {
    constructor() {
        this.geometry = new THREE.BoxGeometry(5,5,5);
        this.material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
    }
}

export default Head;
