
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var dustbinSide1,dustbinSide2,dustbinBase;

function preload()


{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,600,1400,20);
	dustbinSide1=new Dustbin(1100,637,20,100);
	dustbinSide2=new Dustbin(1200,637,20,100);
	dustbinBase= new Dustbin(1150,685,170,20)

	paperBall= new PaperBall(10,300,70,70);
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("yellow");

  if (keyDown("up")){
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:25,y:-30});
}

  ground.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinBase.display();
  paperBall.display();
 
}



