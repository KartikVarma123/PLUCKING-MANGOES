class Launcher{
    constructor(BodyA,Point2){

        this.bodyA = BodyA;
        this.pointB = Point2;

        var options = {
            bodyA : BodyA,
            pointB : Point2,
            stiffness : 0.002,
            length : 2
        }

this.launcher = Constraint.create(options);
World.add(world,this.launcher);

    }


    fly(){
        this.launcher.bodyA = none;
    }
        
    attach(BodyA){

this.launcher.bodyA = BodyA;

    }
    


    display(){

        line (this.bodyA.position.x, this.bodyA.position.y,this.pointB.x, this.pointB.y);


    }
}

