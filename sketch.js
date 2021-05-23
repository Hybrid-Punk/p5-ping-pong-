var xs=0;
var ys=0;
var xb=0;
var s=5;
var b=5;
var score=0;
function setup() {
  createCanvas(1536,751);
}

function draw() {
  background(220,100,100);
fill(20);  
ellipse(xs,ys,50,50);
var yb=windowHeight-100;
fill(200);
rect(xb,yb,150,30);
xs=xs+s;
ys=ys+b;

if(keyIsPressed==true){
  if(keyCode==LEFT_ARROW){
    xb=xb-10;
  }
  else if(keyCode==RIGHT_ARROW){
    xb=xb+10;
  }
}
if(ys>=xb && ys<=xb+100){
  if(xs>=width-50){
    s=s*-1;
  }
}
if(xs>=width || xs<0){
  s=s*-1;
}
if(ys<0){
  b=b*-1;
}
if(ys<windowHeight){
if(xs>=xb && xs<=xb+150 && ys+25>=yb){
  b=b*-1;
  score=score+1;
  fill(0, 200, 0);
textSize(100);
text('Score: ' + score, 200, 200);
}}
else if(ys>windowHeight){
  fill(0, 200, 0);
textSize(100);
score=score*1;
text('Score: ' + score, 200, 200);
text('Hogaya bus?\nGo make tiktoks',200,300);
}

fill(0, 200, 0);
textSize(100);
text('Score: ' + score, 200, 200);


/*if ((xs > xb &&
  xs < xb + 150) &&
  (ys + (50/2) >= yb)) {
    b=b*-1;
}*/






}


/*var xball=20;
var yball=50;
var diameter=50;
var xballchange=5;
var yballchange=5;
var xpaddle=windowWidth/2;
var ypaddle=windowHeight-100;
var paddlewidth=100;
var paddleheight=20;

var xspeed,yspeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(255, 0, 255);
  rect(xpaddle,ypaddle,paddlewidth,paddleheight);
  fill(255, 0, 255);
noStroke();
ellipse(xball,yball, diameter,diameter);
function keyPressed(){
  if (keycode===RIGHT_ARROW){
    xpaddle +=50;
  }
  else if (keycode===LEFT_ARROW){
    xpaddle -=50;
  }
  
  xball +=xballchange;
  yball +=yballchange;
  
if (xball<0+diameter/2 || xball>windowWidth-diameter/2){
  xballchange *=-1;
}
if (yball<0+diameter/2 || yball>windowHeight-diameter/2){
  yballchange*=-1;
}


}
}*/