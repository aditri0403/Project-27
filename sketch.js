
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var myroof;
var rope1,rope2,rope3, rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(width/2-40*2,height/4+200,40);
	bobObject2 = new bob(width/2-40,height/4+200,40);
	bobObject3 = new bob(width/2,height/4+200,40);
	bobObject4 = new bob(width/2+40,height/4+200,40);
	bobObject5 = new bob(width/2+40*2,height/4+200,40);

	myroof = new roof(width/2,height/4,width/4,20);
	
	rope1=new rope(bobObject1.body,myroof.body,-40*2, 0)
	rope2=new rope(bobObject2.body,myroof.body,-40*1, 0)
	rope3=new rope(bobObject3.body,myroof.body,0, 0)
	rope4=new rope(bobObject4.body,myroof.body,40*1, 0)
	rope5=new rope(bobObject5.body,myroof.body,40*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  myroof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}


