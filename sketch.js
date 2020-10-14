
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var myroof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(100,500);
	bobObject2 = new bob(210,500);
	bobObject3 = new bob(320,500);
	bobObject4 = new bob(430,500);
	bobObject5 = new bob(540,500);

	myroof = new roof(400,200,800,10);
	
	rope1 = new rope(bobObject1.body,myroof.body -bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  myroof.display();
  rope1.display();
  drawSprites();
 
}



