//nameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option ={
    isStatic:true 
  }
  ground = Bodies.rectangle(200,390,400,20,option);
  World.add(world,ground);
  var bounce ={
    restitution:1
  };
  ball = Bodies.circle(200,10,30,bounce);
  World.add(world,ball);
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
}