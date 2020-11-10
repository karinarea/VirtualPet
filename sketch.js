var dog, happyDog,database,foodS,foodStock
var img
function preload()
{
  img = loadImage("images/doglmg.png");
  dogHappy = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200);
  dog=addImage(img);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}
function draw() {  
background(rgb(46, 139, 87));
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogHappy)
}

  drawSprites();
  
  text(foodStock);

}
function Read (data) {
  position = data.val();
  ball.x = position.x;
  ball.y = position.y;
}


