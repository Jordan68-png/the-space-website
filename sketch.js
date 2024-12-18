var mike=0; 


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(250,200,mouseX); //an RGB color for the canvas' background
  //circle
  strokeWeight(5); 
  stroke(mike,120,120) // an RGB color for the circle's border
  fill(200,110,250,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,mike,20); // center of canvas, 20px dia
  fill(100,200,75,45);
  ellipse(400,mike,40,50);
  textFont("Helvetica");
  textSize(100);
  text('Hello',175,275);
  
}


function mousePressed(){
  if(mike>=255){
  mike=0;
  }else{
   mike=mike+5; 
  }
 

  

}
