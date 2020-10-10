const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var invbin;
var paper1;
var ground1;
var hello1;

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

  bin1 = new bin(windowWidth-300,windowHeight-70,160,20);
	bin2 = new bin(windowWidth-380,windowHeight-170,20,160);
  bin3 = new bin(windowWidth-220,windowHeight-170,20,160);
  invbin=new binspec(windowWidth-100000,windowHeight-10000,150,200);

  ground1 = new Ground(windowWidth-windowWidth/2,windowHeight-50,windowWidth,30);

  paper1 = new Paper(50,0,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  fill("green");
  textSize(40);
  stroke("blue");
  text("  Reduce DIRTINESS. Respect CLEANLINESS  ",0,windowHeight-550);
  textSize(35);
  stroke("pink");
  text("  As a part of swach BHARAT mission,you have to maintain cleanliness.",0,windowHeight - 500);
  text("  To throw paper into dustbin ,press UP ARROW",0,windowHeight-400);
  text("  You need to throw that waste paper into the dustbin",0,windowHeight - 450);
  
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  invbin.display();
  ground1.display();
  
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:6,y:-50});
   }
drawSprites();
 
}
