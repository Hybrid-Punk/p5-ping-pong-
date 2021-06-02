var xs=400;
var xe=300;
var ye;
var ys=200;
var xb=0;
var s=5;
var b=5;
var score=0;
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220,100,100);
fill(20);  
ellipse(xs,ys,50,50);
 yb=10*windowHeight/11;
 ye=windowHeight/11;
fill(200);
/*player rectangle display*/rect(xb,yb,150,30);
/*enemy rectangle display*/rect(xe,ye,150,30);
xs=xs+s;
ys=ys+b;

/*controlling player paddle*/
if(keyIsPressed==true){
  if(keyCode==LEFT_ARROW){
    xb=xb-10;
  }
  else if(keyCode==RIGHT_ARROW){
    xb=xb+10;
  }
}

/*reflecting from walls*/
if(ys>=xb && ys<=xb+100){
  if(xs>=windowWidth-50){
    s=s*-1;
  }
}
if(xs>=windowWidth || xs<0){
  s=s*-1;
}



/*reflecting from paddle and score increase and display*/
if(ys<windowHeight){
if(xs>=xb && xs<=xb+150 && ys+25>=yb){
  b=b*-1;
  score=score+1;
  fill(0, 200, 0);
textSize(100);
text('Score: ' + score, 200, 200);
}}
/*when the ball falls down*/
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

/*moving the enemy paddle*/
if(xs>xe+75){
  xe=xe+5;
}
if(xs<xe+75){
  xe=xe-5;
}
/*reflect from enemy paddle*/
if(xs>=xe && xs<=xe+150 && ys-25<=ye+30){
  b=b*-1;

} 
