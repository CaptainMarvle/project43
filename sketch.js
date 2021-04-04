var hours, minutes, seconds;
var bg;

function preload(){

  bg = loadImage("background.jpg");

}

function setup() {
  createCanvas(650,650);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 
  translate(325,325);
  
   let h = hour()
   text(" " + h, -20, 300);
   
   let m = minute();
   text(":"+ m, 0, 300);
  
   let s = second()
   text(":" + s, 20, 300);
   
  hAngle = map(h % 12, 0, 12, 0, 360);
  mAngle = map(m, 0, 60, 0, 360); 
  sAngle = map(s, 0, 60, 100, 360);

  rotate(-90);
  push();
  rotate(sAngle);
  stroke(255, 179, 253);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mAngle);
  stroke(1, 255, 255);
  strokeWeight(7);
  line(0,0,175,0);
  pop();

  push();
  rotate(hAngle);
  stroke(255, 244, 4);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}