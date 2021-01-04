
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = matter.constraint;

var tree,stone,ground,launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;

function preload()
{
	boyImg=loadImage("plucking_mangoes/boy.png");
	
}

function setup() {
	createCanvas(1350,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale=0.1;
	tree= new Tree(900,350,30,300);
	ground =new ground(600,600,2000,20);
	mango1= new Mango(900,250,15);
	mango2= new Mango(800,200,15);
	mango3= new Mango(800,280,15);
	mango4= new Mango(1000,250,15);
	mango5= new Mango(670,300,15);
	stone= new Stone(150,550,15);
	boyShot=new shot(stone.body,{x:150,y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  engine.update(engine);
  background("light gray");
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  boyShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
drawSprites();
 
}

function mouseDragged(){
	matter.body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function detectCollision(lstone,mango){
	mangoBodyPosition=lmango.body.Position
	stoneBodyPosition=lstone.body.Position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		matter.body.setStatic(lmango.body,false);

	}
}

function keyPressed(){

	if(keycode === 32){
		matter.body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);

	}
}