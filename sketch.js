
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3;
var paperball;
var invisible;
function preload()
{
   
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,height,800,20);
	box1 = new dustbin(575,630,250,20);
	box2 = new dustbin(460,570,20,100);
	box3 = new dustbin(690,570,20,100);
	paperball = new paper(100,500,50);
	invisible = new invisibleobject(575,570,250,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paperball.display();
  invisible.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:240,y:-240});
	}
}



