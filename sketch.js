const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , ground2;

var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12 , box13 , box14 , box15 , box16 ;

var Box1 , Box2 , Box3 , Box4 , Box5 , Box6 , Box7 , Box8 , Box9 , Box10 , Box11 , Box12 , Box13 , Box14 , Box15 , Box16 ;

var polygon , sling;

var score = 0;

var backgroundImg;

var bg = "white background.png";

function preload(){
 
  getTime();
  
}

function setup() {
  createCanvas(1000,700);

    engine = Matter.Engine.create();
  
  
    world = engine.world;  
  
  ground = new Ground(550 , 500 , 200 , 10);

  fill(0 , 500 , 500);
  box1 = new Box(490 , 485);
  box2 = new Box(510 , 485);
  box3 = new Box(530 , 485);
  box4 = new Box(550 , 485);
  box5 = new Box(570 , 485);
  box6 = new Box(590 , 485);
  box7 = new Box(610 , 485);

  box8 = new Box(510 , 465);
  box9 = new Box(530 , 465);
  box10 = new Box(550 , 465);
  box11 = new Box(570 , 465);
  box12 = new Box(590 , 465);

  box13 = new Box(530 , 445);
  box14 = new Box(550 , 445);
  box15 = new Box(570 , 445);

  box16 = new Box(550 , 425);

  ground2 = new Ground(800 , 350 , 200 , 10);

  Box1 = new Box(740 , 335);
  Box2 = new Box(760 , 335);
  Box3 = new Box(780 , 335);
  Box4 = new Box(800 , 335);
  Box5 = new Box(820 , 335);
  Box6 = new Box(840 , 335);
  Box7 = new Box(860 , 335);

  Box8 = new Box(760 , 315);
  Box9 = new Box(780 , 315);
  Box10 = new Box(800 , 315);
  Box11 = new Box(820 , 315);
  Box12 = new Box(840 , 315);

  Box13 = new Box(780 , 295);
  Box14 = new Box(800 , 295);
  Box15 = new Box(820 , 295);

  Box16 = new Box(800 , 275);

  polygon = new Polygon(100 , 450 , 13);

  sling = new SlingShot(polygon.body , {x:100 , y:450});

  Engine.run(engine);

}

function draw() {
  
  if(backgroundImg){
  
    background(backgroundImg);

  }

  Engine.update(engine);

  if(bg === "background black.jpg"){
  fill("lightBlue");
  text("S c o r e = " +score , 500 , 50);
  text("Drag the polygon to destroy the blocks",300,30);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  }

  else{
    fill("Blue");
  text("S c o r e = " +score , 500 , 50);
  text("Drag the polygon to destroy the blocks",200,30);
  text("Press Space to get a second Chance to Play!!",200 ,50);
  }

  fill(0 , 500 , 500);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display()
  Box6.display();
  Box7.display();

  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();

  Box13.display();
  Box14.display();
  Box15.display();

  Box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box16.score();

  Box1.score();
  Box2.score();
  Box3.score();
  Box4.score();
  Box5.score();
  Box6.score();
  Box7.score();
  Box8.score();
  Box9.score();
  Box10.score();
  Box11.score();
  Box12.score();
  Box13.score();
  Box14.score();
  Box15.score();
  Box16.score();

  polygon.display();
  stroke(0 , 500 , 500);
  sling.display();

  stroke(0);
  
  ground.display();
  ground2.display();

}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body , {x: mouseX , y: mouseY});  

}

function mouseReleased(){

  sling.fly();

}

function keyPressed(){
  if(keyCode === 32){
  
    Matter.Body.setPosition(polygon.body , {x:100 , y:450});
    sling.attach(polygon.body);
     
}
}

async function getTime(){

  var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responceJson = await responce.json();
  var dateTime = responceJson.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour<=18){

      bg = "white background.png";

  }

  else{

      bg = "background black.jpg";

  }

  backgroundImg=loadImage(bg);

}