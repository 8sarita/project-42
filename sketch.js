//  declaring var 
var  crewDragon , crewDragonImg , crewDragon2 ;
var  ISS , ISSIMG ;
var spaceBg ;

var dragonleftImg , dragonRightImg , dragonUpImg ;

var shake = 1;
var stop = 0;

var gameState = 1;


function preload(){
  crewDragonImg = loadImage("spacecraft1.png");

  dragonleftImg = loadImage("spacecraft3.png");

  dragonRightImg = loadImage("spacecraft4.png");

  dragonUpImg = loadImage("spacecraft2.png");

  spaceBg = loadImage("spacebg.jpg");

  ISSIMG = loadImage("iss.png");

}


function setup() {
  

 



  // creating Canvas 
  createCanvas(windowWidth-20,windowHeight-20);
  
 crewDragon2 = createSprite(-100,280);
  
  crewDragon2.addImage(crewDragonImg);
  crewDragon2.scale = 0.25;

  // create SpaceX crewDragon  Sprite and adding image of it 
  crewDragon = createSprite(windowWidth/2-52,300+150);
  
  crewDragon.scale = 0.25;


  // creating Internation Space Satation Sprite And adding Image Of it
  ISS = createSprite(windowWidth/2,150+60);
  ISS.addImage(ISSIMG);
  ISS.scale = 0.8;


  

  

}

function draw() {

  // adding background img of space
  background(spaceBg);  

  if(gameState === 1){

    crewDragon.addImage(crewDragonImg);
      // calling function crewDragonShaking to look that crewDragon is shaking in space
    crewDragonShaking();

    changexPos();
    changeyPos();

  }
   if(gameState === 0){

    
   }
  

  // console.log(crewDragon.x,crewDragon.y);
  
  docking();


  // draw Sprites
  drawSprites();


}

function crewDragonShaking(){

  crewDragon.x  = crewDragon.x + random(-1,1);

}

function changexPos(){

  if(keyDown("left")){
  crewDragon.x = crewDragon.x- 1.5;
  crewDragon.addImage(dragonleftImg);
  } 

  if(keyDown("right")){
    crewDragon.x = crewDragon.x+ 1.5;
    crewDragon.addImage(dragonRightImg);
    } 


}

function changeyPos(){

  if(keyDown("up")){
    crewDragon.y = crewDragon.y- 2;
    crewDragon.addImage(dragonUpImg);
    } 

}

function docking(){

  if(crewDragon.x <= 580 && crewDragon.y <= 280){

    gameState = 0;

    textSize(20);
    stroke("white");
    strokeWeight(2);
    text("DOCKING SUCCESSFUL ! ", windowWidth/2,450);
    // crewDragon.destroy();

  

    // crewDragon2.x = 580;
    

  }

}