
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,stone,tree,mango1,mango2,mango3,mango4,mango5;
var mango6;

function preload()
{
	
}

function setup() {
	createCanvas(1350,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1270,700,100, PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



