import Body from './Body';
import Head from './Head';
import Mouth from './Mouth';
import Teeth from './Teeth';
import Eye from './Eye';
import Ear from './Ear';
import Horn from './Horn';
import Leg from './Leg';
import Mane from './Mane';
import Tail from './Tail';

class Unihorse {
    constructor() {
        this.white = '#ffffff';
        this.bodyColor = '#eae8d6';
        this.beje = '#dbd4b7';
        this.brown = '#473c2f';
        this.unihorse = new THREE.Object3D(); //create an empty container
        this.create();
        this.add();
    }

    create() {
        /*---BODY---*/
        this.body = new Body(this.bodyColor , 14, 7, 8);
        this.body.position(0, 0, 0);

        /* ---- HEAD ---*/
        this.head = new Head(this.bodyColor, 5, 9, 8);
        this.head.position(4.5, 7, 0);

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

        /*---LEG---*/
        this.front_right = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2); //front_right
        this.front_right.position(5.5, -5.5, 3);
        this.front_left = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2);  //front_left
        this.front_left.position(5.5, -5.5, -3);
        this.back_right = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2);  //back_right
        this.back_right.position(-5.5, -5.5, 3);
        this.back_left = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2);   //back_left
        this.back_left.position(-5.5, -5.5, -3);

        /*---MANE---*/
        this.mane = new Mane(this.brown);
        this.mane.position(-0.5, 7.5, 0);

        /*---tail---*/
        this.tail = new Tail(this.brown);
        this.tail.position(-9.5, 0.5, 0);
        //this.unihorse.add( tail.tail );//add a mesh with geometry to it


    }

    add() {
        this.unihorse.add( this.body.cube );        // BODY
        this.unihorse.add( this.head.cube );        // HEAD
        this.unihorse.add( this.mouth.mouth );      // MOUNTH
        this.unihorse.add( this.teeth.cube );       // TEETH
        this.unihorse.add( this.rightEye.iris );    // EYE
        this.unihorse.add( this.rightEye.pupil );
        this.unihorse.add( this.leftEye.iris );
        this.unihorse.add( this.leftEye.pupil );
        this.unihorse.add( this.rightEar.cube );    // EAR
        this.unihorse.add( this.leftEar.cube );
        this.unihorse.add( this.horn.cube );        // HORN
        this.unihorse.add( this.front_right.top );  // LEG
        this.unihorse.add( this.front_right.mid );
        this.unihorse.add( this.front_right.bot );
        this.unihorse.add( this.front_left.top );
        this.unihorse.add( this.front_left.mid );
        this.unihorse.add( this.front_left.bot );
        this.unihorse.add( this.back_right.top );
        this.unihorse.add( this.back_right.mid );
        this.unihorse.add( this.back_right.bot );
        this.unihorse.add( this.back_left.top );
        this.unihorse.add( this.back_left.mid );
        this.unihorse.add( this.back_left.bot );
        this.unihorse.add( this.mane.mane );        // MANE
        this.unihorse.add( this.tail.tail );        // TAIL

    }
}

export default Unihorse;
