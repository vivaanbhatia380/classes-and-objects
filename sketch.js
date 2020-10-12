var engine,world,ground,Box1,Box2;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
createCanvas(400,400);
engine=Engine.create(); 
world=engine.world;

Box1=new Box(200,100,50,50);
Box2=new Box(240,50,70,50);
ground=new Ground(200,390,400,20);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  Box1.display();
  Box2.display();
  ground.display();
}
