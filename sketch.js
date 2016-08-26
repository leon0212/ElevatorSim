var F,g,mass;
var playButton;
var mESlider;
var mGSlider;
var play = false;
var level = [];
var ypos;
var onfloor=1;
var oldFloor;
var newFloor;
var speed;
var cut = false;
var flrDis;
var dir;
var theta;


function setup(){ 
  canvas = createCanvas(640, 800);
  canvas.parent('sketch-holder');
  
  frameRate(30);
  
  mESlider = createSlider();
  mESlider.position(40, 200);
  mESlider.mousePressed(togglePlayButton);
  mESlider.mouseReleased(togglePlayButton);
  mESlider.class("sim-slider gray");
  
  mGSlider = createSlider();
  mGSlider.position(40, 270);
  mGSlider.mousePressed(togglePlayButton);
  mGSlider.mouseReleased(togglePlayButton);
  mGSlider.class("sim-slider gray");
  
  wireButton = createButton('CUT THE WIRE');
  wireButton.position(20,100);
  wireButton.mouseClicked(togglePlayButton);
  wireButton.class("sim-button gray");
  
  eleButton1 = createButton('1');
  eleButton1.position(25,400);
  eleButton1.mouseClicked(movingEle1);
  eleButton1.class("sim-button gray elevator");
  
  eleButton2 = createButton('2');
  eleButton2.position(85,400);
  eleButton2.mouseClicked(movingEle2);
  eleButton2.class("sim-button gray elevator");
  
  eleButton3 = createButton('3');
  eleButton3.position(25,470);
  eleButton3.mouseClicked(movingEle3);
  eleButton3.class("sim-button gray elevator");
  
  eleButton4 = createButton('4');
  eleButton4.position(85,470);
  eleButton4.mouseClicked(movingEle4);
  eleButton4.class("sim-button gray elevator");
  
  
  startPoint = createVector(250, 275);
  vdisp = createVector(0,dir);
  
  endPoint= p5.Vector.add(startPoint, vdisp)
  
  vVector = new Arrow(startPoint, endPoint);
  vVector.color = color('#94c6d8');
  vVector.grab = false;
  vVector.draggable = false;
  vVector.showComponents = false;
  
  startPoint2 = createVector(325, 525);
  vdisp2 = createVector(0,0);
  
  endPoint2= p5.Vector.add(startPoint2, vdisp2)
  
  gVector = new Arrow(startPoint2, endPoint2);
  gVector.color = color('red');
  gVector.grab = false;
  gVector.draggable = false;
  gVector.showComponents = false;

  noStroke();
  
  g = 9.8;
  speed=1;
  oldFloor=4;
  flrDis=4;
  ypos=540;
  t=2;
}

function draw() {
  
 background('lightgray');
  fill("black");
  textSize(15);
  textStyle(NORMAL);
  text("M-E",7,216);
  text("M-G",7,146);
  text("Gravity = 9.81m/s^2",8,275);
  textSize(12);
  text("Mass of Elevator",60,236);
  text("Mass of Guy",70,166);
  textSize(50);
  textStyle(BOLD);
  text(flrDis,400,200);
  print(flrDis);
  
  
  // text(oldFloor,500,200);
  // print(oldFloor);
  // text(ypos,500,300);
  // print(ypos);

  
  drawElevator();
  drawRope();
  
  


  
rectMode(CORNER);


vVector.origin = p5.Vector.add(startPoint,createVector(0,0));
vVector.target = p5.Vector.add(startPoint,createVector(0,dir));
  vVector.update();
  vVector.display();
  
  
ypos=ypos-speed;

  if(ypos<0){
  	ypos = height;
  		flrDis=flrDis-1;
  }
    if(ypos>height){
  	ypos = 2;
  		flrDis=flrDis+1;
  }


    if(flrDis<1){
  fill('black');
  rectMode(CORNER);
  rect(0,500,width,500);
  flrDis=0;
  speed=0;
    noLoop();
    return
    }
    
    if ((oldFloor==flrDis)&&(ypos=540)){
  speed=0;
  dir=0;
    }
  
  
  rectMode(CENTER); 
	fill('black'); 
	rect(540,ypos,215,50);

 if(cut==true){
speed=speed+(g/70);
dir=dir+g/10;
rectMode(CORNER);
dir2=98;
gVector.origin = p5.Vector.add(startPoint2,createVector(0,0));
gVector.target = p5.Vector.add(startPoint2,createVector(0,dir2));
  gVector.update();
  gVector.display();
 }
	
}

// function Level() {
// this.x =width-100;
// this.y =_y;
// this.size =100;
// this.speed=_speed;

// this.move = function(){
//   this.y +=sSlider.value();
// }

// }
 



function drawElevator(){
  rectMode(CENTER);
  fill(125,125,125,255);
  rect(width/2,height/2,200,250);
}

function drawRope(){
  fill('black');
  rect(width/2,0,10,550);
  if(cut==true){    
    fill("lightgray");
    rect(width/2,0,10,550);
  }
}



function togglePlayButton(){
   if (cut) {
    cut = false;
    noLoop();
    wireButton.html("CUT THE WIRE");
    return
  }

  if (!cut){
     loop();
    cut = true;
    speed=g;
    g=g*2;
    dir=100;
drawRope();
fill('lightgray');
    oldFloor=-100;

  }
}

function movingEle1(){

	play=true;
	loop();
	newFloor=1;
	if (newFloor = oldFloor){
		oldFloor=1;
		speed=0;
	}
	
	if (newFloor > oldFloor){
		oldFloor=1;
		speed=4;
		dir=100;
	}
	if (newFloor < oldFloor){
		oldFloor=1;
		speed=-4;
		dir=-100;
	}
}



function movingEle2(){
	

	play=true;
	loop();
	newFloor=2;
	
	if (newFloor = oldFloor){
		oldFloor=2;
		speed=0;
	}
	
	if (newFloor > oldFloor){
		oldFloor=2;
		speed=4;
			dir=100;
	}
	if (newFloor < oldFloor){
		oldFloor=2;
		speed=-4;
			dir=-100;
	}
	

}

function movingEle3(){

	play=true;
	loop();
	newFloor=3;
	if (newFloor = oldFloor){
		oldFloor=3;
		speed=0;
	}
	
	if (newFloor > oldFloor){
		oldFloor=3;
		speed=4;
		dir=100;
	}
	if (newFloor < oldFloor){
		oldFloor=3;
		speed=-4;
		dir=-100;
	}
	

}

function movingEle4(){

	play=true;
	loop();
	newFloor=4;
	if (newFloor = oldFloor){
		oldFloor=4;
		speed=0;
	}
	
	if (newFloor > oldFloor){
		oldFloor=4;
		speed=4;
		dir=100;
	}
	if (newFloor < oldFloor){
		oldFloor=4;
		speed=-4;
		dir=-100;
	}


}
