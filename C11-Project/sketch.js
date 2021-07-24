var path;
var runner;

var barrier1;
var barrier2;

function preload(){
  
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = -1;
  path.scale = 1.2;

  runner = createSprite(200,330,50,70);
  runner.scale = 0.08
  runner.addAnimation(runnerImg);
  
  barrier1 = createSprite(45,200,2,400);
  barrier1.visible = false;

  barrier2 = createSprite(363,200,2,400);
  barrier2.visible = false;
}

function draw() {
  background("White");

  if(path.y > 400){
    path.y = height/2
  }
  
  runner.x = World.mouseX;

  runner.collide(barrier1);
  runner.collide(barrier2);

  drawSprites();
}
