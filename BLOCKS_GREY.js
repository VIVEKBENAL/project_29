class Blocks4{

    constructor(x,y,colour){

        this.body = Bodies.rectangle(x, y, 40,50);
        this.width = 40;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("grey");
        rect(0,0,this.width,this.height);
        pop();
    }

}