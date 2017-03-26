class Tail {
    constructor(hex) {
        this.material = new THREE.MeshPhongMaterial( { color: hex } );
        this.drawBig();
        this.drawMedium();
        this.drawSmall();
        this.drawSmaller();
        this.drawtail();
    }

    drawBig() {
        this.big = new THREE.BoxGeometry(2, 4, 6);
        this.bigMesh = new THREE.Mesh(this.big);
        this.bigMesh.position.set(1.5, 1, 0);
    }

    drawMedium() {
        this.medium = new THREE.BoxGeometry(3, 3, 6);
        this.mediumMesh = new THREE.Mesh(this.medium);
        this.mediumMesh.position.set(-0.5, -1.5, 0);
    }

    drawSmall() {
        this.small = new THREE.BoxGeometry(1, 5, 6);
        this.smallMesh = new THREE.Mesh(this.small);
        this.smallMesh.position.set(-2, -0.5, 0);
    }

    drawSmaller() {
        this.smaller = new THREE.BoxGeometry(1, 1, 6);
        this.smallerMesh = new THREE.Mesh(this.smaller);
        this.smallerMesh.position.set(-1, 1.5, 0);
    }

    drawtail() {
        this.tailGeometry = new THREE.Geometry();
        this.bigMesh.updateMatrix();
        this.mediumMesh.updateMatrix();
        this.smallMesh.updateMatrix();
        this.smallerMesh.updateMatrix();
        this.tailGeometry.merge(this.bigMesh.geometry,  this.bigMesh.matrix);
        this.tailGeometry.merge(this.mediumMesh.geometry, this.mediumMesh.matrix);
        this.tailGeometry.merge(this.smallMesh.geometry, this.smallMesh.matrix);
        this.tailGeometry.merge(this.smallerMesh.geometry, this.smallerMesh.matrix);

        this.tail = new THREE.Mesh(this.tailGeometry, this.material);
    }

    position(x, y, z) {
        this.tail.position.set(x ,y, z);
    }
}

export default Tail;
