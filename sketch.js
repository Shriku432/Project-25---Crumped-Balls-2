const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;


function setup() {
  createCanvas(1000, 800);

  

  

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width/2, 750, width, 10,{isStatic : true});
  World.add(world, ground);

  paperObject=new paper(200,700,20)
  dustbinObj=new dustbin(800,700)
// change 
  //  paper = Bodies.circle(70 , 200 , 10 ,options);
//    World.add(world, paper);

  Engine.run(engine);
  
}


function draw() {

  background("lightpink");

  Engine.update(engine);
  rectMode(CENTER);
  
  
 rect(ground.position.x,ground.position.y,width,10)
  dustbinObj.display();
  paperObject.display();


 
  
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-76});



}


}

