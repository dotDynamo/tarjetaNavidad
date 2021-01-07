var c1;
var c2;
var x = [];
var y = [];
var incrementoy = [];
var h =[];

function preload(){
  img = loadImage('animalCrossing.png');
  myFont = loadFont('winter.ttf');
}
function setup() {
  createCanvas(690, 570);
  c2 = color(0, 255, 255);
  c1 = color(0, 100, 255); 
  textSize(90);
  textFont(myFont);
  for(var i = 0; i < 300;i = i+1){
    x[i] = floor(random(0,width));
    y[i] = 0;
    incrementoy[i] = random(1,10);
    h[i] = random(1,5);
  }
}

function draw() {
  gradienteCielo(c1,c2);
  piso();
  tree();
  strokeWeight(4);
  fill(0,50,130);
  image(img, 30, 150, 490, 400);
  if(mouseIsPressed){
    stroke(200,250,255);
    for(var i = 0; i < 300; i = i + 1){
    ellipse(x[i],y[i],h[i]);
    if(y[i]>height){
     ellipse(x[i],y[i],h[i]);
    }if(y[i]>510){
      y[i] = 0;
    }
    y[i] = y[i] + incrementoy[i];
   }
    let num = floor(random(10));
    if(num==1){
      fill(random(50,200),random(50,200),random(50,200))
    }
    text('Feliz Navidad', 150, 90);
  }
  text('Feliz Navidad', 150, 90);
}

function tree(){
  noStroke();
  fill(113, 61, 50);
  ellipse(525,528,70,20);
  rect(490,380,70,150);
  fill(46,102,100);
  triangle(360,450,690,450,525,300);
  triangle(380,340,670,340,525,180);
  fill(46,102,100);
  triangle(370,400,680,400,525,200);
  triangle(390,290,660,290,525,100);   
}
function piso(){
  stroke(185,250,255);
  fill(185,250,255);
  rect(0,500,690,70);
  ellipse(40,507,650,70);
  ellipse(40,487,350,80);
}

function gradienteCielo(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}