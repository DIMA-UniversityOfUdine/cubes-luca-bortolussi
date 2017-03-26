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

export default Terrain;
