class Mouth {
    constructor(hex) {
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.drawUpper();
        this.drawMiddle();
        this.drawBottom();
        this.drawMouth();
    }

    drawUpper() {
        this.upper = new THREE.BoxGeometry(6, 3, 6);
        this.upperMesh = new THREE.Mesh(this.upper);
        this.upperMesh.position.set(0, 1.5, 0);
    }

    drawMiddle() {
        this.middle = new THREE.BoxGeometry(2, 1, 6);
        this.middleMesh = new THREE.Mesh(this.middle);
        this.middleMesh.position.set(-2, -0.5, 0);
    }

    drawBottom() {
        this.bottom = new THREE.BoxGeometry(4, 2, 6);
        this.bottomMesh = new THREE.Mesh(this.bottom);
        this.bottomMesh.position.set(-1, -2, 0);
    }

    drawMouth() {
        this.mouthGeometry = new THREE.Geometry();
        this.upperMesh.updateMatrix();
        this.middleMesh.updateMatrix();
        this.bottomMesh.updateMatrix();
        this.mouthGeometry.merge(this.upperMesh.geometry,  this.upperMesh.matrix);
        this.mouthGeometry.merge(this.middleMesh.geometry, this.middleMesh.matrix);
        this.mouthGeometry.merge(this.bottomMesh.geometry, this.bottomMesh.matrix);

        this.mouth = new THREE.Mesh(this.mouthGeometry, this.material);
    }

    position(x, y, z) {
        this.mouth.position.set(x ,y, z);
    }
}

export default Mouth;
