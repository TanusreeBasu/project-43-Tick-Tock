var hr, min, sc;
var scAngle, hrAngle, minAngle;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
hr = hour();
min = minute();
sc = second();
translate(200,200);
rotate(-90);
angleMode(DEGREES)
//sec hand
stroke("green");
strokeWeight(8)
noFill();
scAngle = map(sc, 0, 60, 0,360);
arc(0,0,300,300,0,scAngle)


push();
rotate(scAngle);
stroke("green");
strokeWeight(7);
line(0,0,115,0);
pop();

//hour hand
stroke("blue");
strokeWeight(8)
hrAngle = map(hr%12,0,12,0,360 );
arc(0,0,260,260,0,hrAngle);

push();
rotate(hrAngle);
stroke("blue");
strokeWeight(7);
line(0,0,70,0);
pop();

//min hand

stroke("yellow");
strokeWeight(8)
minAngle = map(min,0,60,0,360 );
arc(0,0,280,280,0, minAngle);

push();
rotate(minAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,95,0);
pop();

stroke(255);
point(0,0);
  drawSprites();
}