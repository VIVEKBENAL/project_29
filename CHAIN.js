class Chain{

    constructor(bodya,pointb){

        var options = {
            bodyA : bodya,
            pointB : pointb,
            stiffness :0.09,
            length : 1
        }

        this.pointB = pointb;

        this.body = Constraint.create(options);
        World.add(world,this.body);

    }

    fly(){
        this.body.bodyA = null;
    }

    display(){

        if(this.body.bodyA){
            strokeWeight(5);
            stroke("red");
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }

}