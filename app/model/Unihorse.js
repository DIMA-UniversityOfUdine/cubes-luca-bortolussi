import Body from './Body';
import Leg from './Leg';
import Tail from './Tail';
import Head from './Head';

class Unihorse {
    constructor() {
        this.white = '#ffffff';
        this.bodyColor = '#eae8d6';
        this.beje = '#dbd4b7';
        this.brown = '#473c2f';
        this.unihorse = new THREE.Group(); //create an empty container
        this.create();
        this.add();
    }

    create() {
        /*---HEAD---*/
        this.head = new Head();

        /*---BODY---*/
        this.body = new Body(this.bodyColor , 14, 7, 8);
        this.body.position(0, 0, 0);

        /*---LEG---*/
        this.front_right = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2); //front_right
        this.front_right.position(5.5, -5.5, 3);
        this.front_left = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2);  //front_left
        this.front_left.position(5.5, -5.5, -3);
        this.back_right = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2);  //back_right
        this.back_right.position(-5.5, -5.5, 3);
        this.back_left = new Leg(this.bodyColor, this.beje, this.brown, 2, 4, 2);   //back_left
        this.back_left.position(-5.5, -5.5, -3);

        /*---tail---*/
        this.tail = new Tail(this.brown);
        this.tail.position(-9.5, 0.5, 0);
        //this.unihorse.add( tail.tail );//add a mesh with geometry to it


    }

    add() {
        /*---UNIHORSE---*/
        this.unihorse.add(this.head.head)
        this.unihorse.add( this.body.cube );        // BODY
        this.unihorse.add( this.front_right.leg );  // LEGS
        this.unihorse.add( this.front_left.leg );
        this.unihorse.add( this.back_right.leg );
        this.unihorse.add( this.back_left.leg );
        this.unihorse.add( this.tail.tail );        // TAIL
    }
}

export default Unihorse;
