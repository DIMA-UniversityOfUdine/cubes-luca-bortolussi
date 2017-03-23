class Mane {
    constructor(hex) {
        this.material = new THREE.MeshBasicMaterial( { color: hex } );
        this.drawBig();
        this.drawMedium();
        this.drawSmall();
        this.drawSmaller();
        this.drawMane();
    }

    drawBig() {
        this.big = new THREE.BoxGeometry(2, 8, 6);
        this.bigMesh = new THREE.Mesh(this.big);
        this.bigMesh.position.set(1.5, 0, 0);
    }

    drawMedium() {
        this.medium = new THREE.BoxGeometry(2, 3, 6);
        this.mediumMesh = new THREE.Mesh(this.medium);
        this.mediumMesh.position.set(-0.5, -2.5, 0);
    }

    drawSmall() {
        this.small = new THREE.BoxGeometry(1, 5, 6);
        this.smallMesh = new THREE.Mesh(this.small);
        this.smallMesh.position.set(-2, -1.5, 0);
    }

    drawSmaller() {
        this.smaller = new THREE.BoxGeometry(1, 1, 6);
        this.smallerMesh = new THREE.Mesh(this.smaller);
        this.smallerMesh.position.set(-1, 0.5, 0);
    }

    drawMane() {
        this.maneGeometry = new THREE.Geometry();
        this.bigMesh.updateMatrix();
        this.mediumMesh.updateMatrix();
        this.smallMesh.updateMatrix();
        this.smallerMesh.updateMatrix();
        this.maneGeometry.merge(this.bigMesh.geometry,  this.bigMesh.matrix);
        this.maneGeometry.merge(this.mediumMesh.geometry, this.mediumMesh.matrix);
        this.maneGeometry.merge(this.smallMesh.geometry, this.smallMesh.matrix);
        this.maneGeometry.merge(this.smallerMesh.geometry, this.smallerMesh.matrix);

        this.mane = new THREE.Mesh(this.maneGeometry, this.material);
    }

    position(x, y, z) {
        this.mane.position.set(x ,y, z);
    }
}

export default Mane;
