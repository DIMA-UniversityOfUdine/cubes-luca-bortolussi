class Eye {
    constructor(irisrHex, pupilHex, ...[h, w, d]) {
        this.drawIris(irisrHex, h, w, d);
        this.drawPupil(pupilHex, h, w, d);
    }

    drawIris(irisrHex, h, w, d) {
        this.irisMaterial = new THREE.MeshBasicMaterial( { color: irisrHex } );
        this.irisGeometry = new THREE.BoxGeometry(h, w, d);
        this.iris = new THREE.Mesh( this.irisGeometry, this.irisMaterial );
    }

    drawPupil(pupilHex, h, w, d) {
        this.pupilMaterial = new THREE.MeshBasicMaterial( { color: pupilHex } );
        this.pupilGeometry = new THREE.BoxGeometry(h-2, w-2, d);
        this.pupil = new THREE.Mesh( this.pupilGeometry, this.pupilMaterial );
    }

    position(x, y, z, o) {
        this.iris.position.set(x ,y, z);
        this.pupil.position.set(x ,y, z + o);
    }
}

export default Eye;
