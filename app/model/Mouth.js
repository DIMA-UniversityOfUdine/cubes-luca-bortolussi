class Mouth {
    constructor() {
        this.mouth = new THREE.Object3D();
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
    }

    addVertices() {
        // front
        this.mouth.vertices.push( new THREE.Vector3(-3, 3, 3));
        this.mouth.vertices.push( new THREE.Vector3(-3, -3, 3));
        this.mouth.vertices.push( new THREE.Vector3(1, -3, 3));
        this.mouth.vertices.push( new THREE.Vector3(1, -1, 3));
        this.mouth.vertices.push( new THREE.Vector3(-1, -1, 3));
        this.mouth.vertices.push( new THREE.Vector3(-1, 0, 3));
        this.mouth.vertices.push( new THREE.Vector3(3, 0, 3));
        this.mouth.vertices.push( new THREE.Vector3(3, 3, 3));
    }

    addFaces() {
        this.mouth.faces.push(new THREE.Face3(4, 0, 1));
    }
}
