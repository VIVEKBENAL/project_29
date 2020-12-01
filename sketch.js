const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var bodies;

var ball,ground,line1,polygon;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var layer1,layer2;


function setup() {

  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(505,570,1010,20,{isStatic:true});
  World.add(world,ground);

  layer1 = new Layer(470,350,300,10);
  layer2 = new Layer(800,200,220,10);

  block1 = new Blocks1(350,300);
  block2 = new Blocks1(390,300);
  block3 = new Blocks1(430,300);
  block4 = new Blocks1(470,300);
  block5 = new Blocks1(510,300);
  block6 = new Blocks1(550,300);
  block7 = new Blocks1(590,300);

  block8 = new Blocks2(390,250);
  block9 = new Blocks2(430,250);
  block10 = new Blocks2(470,250);
  block11 = new Blocks2(510,250);
  block12 = new Blocks2(550,250);

  block13 = new Blocks3(430,200);
  block14 = new Blocks3(470,200);
  block15 = new Blocks3(510,200);
  block16 = new Blocks4(470,150);

  block17 = new Blocks1(720,150);
  block18 = new Blocks1(760,150);
  block19 = new Blocks1(800,150);
  block20 = new Blocks1(840,150);
  block21 = new Blocks1(880,150);

  block22 = new Blocks2(760,100);
  block23 = new Blocks2(800,100);
  block24 = new Blocks2(840,100);
  block25 = new Blocks3(800,50);

  polygon = new Ball();

  line1 = new Chain(polygon.body,{x:200, y:150});
  
}

function draw() {

  rectMode(CENTER);
  background("lavender");  

  Engine.update(engine);

  rectMode(CENTER);
  fill(150,90,30);
  rect(ground.position.x,ground.position.y,1010,20);

  layer1.display();
  layer2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  polygon.display();

  line1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  line1.fly();
}

