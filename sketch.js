var bg;
var nanna1,nanna1Img;
var nanna2,nanna2Img;
var nanna3,nanna3Img;
var snowman,snowmanImg;
var snow = [];


function preload() {
  bg = loadImage("house.jpg");
  nanna1Img = loadImage("nanna1.png");
  nanna2Imge = loadImage("nanna2.png");
  nanna3Imge = loadImage("nanna2.png");
  snowmanImg = loadImage("snowman.png");
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  //createSprite(400, 200, 50, 50);
  
  snowman = createSprite(900, 550);
  snowman.addImage(snowmanImg);
  snowman.scale = 0.4;

  nanna1 = createSprite(300,530);
  nanna1.addImage(nanna1Img);
  nanna1.scale = 0.7;

  nanna2 = createSprite(500,500);
  nanna2.addImage(nanna2Img);
  nanna2.scale = 0.1;

  nanna3 = createSprite(750, 500);
  nanna3.addImage(nanna3Img);
  nanna3.scale = 0.3;

  

  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }
}

function draw() {
  background(bg);
  
  drawSprites();

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }

  
}