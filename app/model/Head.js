import Face from './Face';
import Mouth from './Mouth';
import Teeth from './Teeth';
import Eye from './Eye';
import Ear from './Ear';
import Horn from './Horn';
import Mane from './Mane';

class Head {
    constructor() {
        this.white = '#ffffff';
        this.bodyColor = '#eae8d6';
        this.beje = '#dbd4b7';
        this.brown = '#473c2f';
        this.head = new THREE.Group();
        this.create();
        this.add();
    }

    create() {
        /* ---- FACE ---*/
        this.face = new Face(this.bodyColor, 5, 9, 8);
        this.face.position(4.5, 7, 0);

        /*---MOUTH---*/
        this.mouth = new Mouth(this.beje);
        this.mouth.position(10, 8, 0);

        /*---TEETH---*/
        this.teeth = new Teeth(this.white, 1, 1, 4);
        this.teeth.position(11, 7.5, 0);

        /*---EYES---*/
        this.rightEye = new Eye(this.white, this.brown, 3, 3, 1);
        this.rightEye.position(4.5, 9.5, 4, 0.5);
        this.leftEye = new Eye(this.white, this.brown, 3, 3, 1);
        this.leftEye.position(4.5, 9.5, -4, -0.5);

        /*---EARS---*/
        this.rightEar = new Ear(this.bodyColor, 2, 3, 2);
        this.rightEar.position(4.5, 12.5, 3);
        this.leftEar = new Ear(this.bodyColor, 2, 3, 2);
        this.leftEar.position(4.5, 12.5, -3);

        /*---HORN---*/
        this.horn = new Horn(this.white, 2, 7, 2);
        this.horn.position(5.5, 12.5, 0);

        /*---MANE---*/
        this.mane = new Mane(this.brown);
        this.mane.position(-0.5, 7.5, 0);
    }

    add() {
        this.head.add( this.face.cube );        // FACE
        this.head.add( this.mouth.mouth );      // MOUNTH
        this.head.add( this.teeth.cube );       // TEETH
        this.head.add( this.rightEye.iris );    // EYE
        this.head.add( this.rightEye.pupil );
        this.head.add( this.leftEye.iris );
        this.head.add( this.leftEye.pupil );
        this.head.add( this.rightEar.cube );    // EARS
        this.head.add( this.leftEar.cube );
        this.head.add( this.horn.cube );        // HORN
        this.head.add( this.mane.mane );        // MANE
    }
}

    export default Head;
