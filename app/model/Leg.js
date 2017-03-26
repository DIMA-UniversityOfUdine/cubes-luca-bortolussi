class Leg {
    constructor(topHex, midHex, botHex, ...[h, w, d]) {
        this.drawTop(topHex, h, w, d);
        this.drawMid(midHex, w);
        this.drawBot(botHex, w);
    }

    drawTop(topHex, h, w, d) {
        this.topMaterial = new THREE.MeshPhongMaterial( { color: topHex } );
        this.topGeometry = new THREE.BoxGeometry(h, w, d);
        this.top = new THREE.Mesh( this.topGeometry, this.topMaterial );
        this.top.position.set(0, 0, 0);
    }

    drawMid(midHex, w) {
        this.midMaterial = new THREE.MeshPhongMaterial( { color: midHex } );
        this.midGeometry = new THREE.BoxGeometry(2, 2, 2);
        this.mid = new THREE.Mesh( this.midGeometry, this.midMaterial );
        this.mid.position.set(0, -w, 0);
    }

    drawBot(botHex, w) {
        this.botMaterial = new THREE.MeshPhongMaterial( { color: botHex } );
        this.botGeometry = new THREE.BoxGeometry(2, 2, 2);
        this.bot = new THREE.Mesh( this.botGeometry, this.botMaterial );
        this.mid.position.set(0, -w - 1, 0);
    }

    position(x, y, z) {
        this.top.position.set(x, y, z);
        this.mid.position.set(x, y -3, z);
        this.bot.position.set(x, y -5, z);
    }
}

export default Leg;
