//Create variables here
var dog1, happyDog, database, foodS, foodStock,dog;

function preload()
{
  //load images here
  dog = loadImage("dogImg.png");

  happyDog = loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500,500);
  
  database = firebase.database();
    
  dog1  = createSprite(250,250,10,10);
  dog1.addImage(dog);
  dog1.scale = 0.5;
  

 foodStock = database.ref('Food');
 foodStock.on("value",readStock);
}


function draw() {  
  background("green");

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog);
}

  drawSprites();
  
  fill(255,255,254);
   stroke("black"); 
   text("Food remaining : "+foodS,170,200); 
   textSize(13); text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);


}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  if(x<=0){ x=0; }
  else{ x=x-1; }
  database.ref('/').update({
     Food : x
  })
 
}

