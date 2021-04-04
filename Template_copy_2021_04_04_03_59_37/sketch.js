var gameState = 0
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  bananaGroup = new Group()
  obstacleGroup = new Group()

}


function draw() {
    background("white")
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  if(keyDown("space")){
    monkey.velocityY = -5
  }
  monkey.velocityY = monkey.velocityY + 1
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/30);
  if(gameState === 0){
    obstacles()
    bananas()
    text("Survival Time: "+ survivalTime,100,50);
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  if(ground.x<0){
    ground.x = ground.width/2
  }
  monkey.collide(ground)
  drawSprites()
}
  if(gameState === 1){
    survivalTime = 0
    obstacleGroup.destroyEach()
    bananaGroup.destroyEach()
    monkey.destroy()
    textSize(40)
    text("GAME OVER!",80,200)
  }
  }
 
function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(500,330,20,60);
    obstacle.velocityX = -5
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 100
  }
  if(obstacleGroup.isTouching(monkey)){
    gameState = 1
  }
}
function bananas(){
  if(frameCount%80 === 0){
    banana = createSprite(500,Math.round(random(80,250)),100,100)
    banana.velocityX = -7
    banana.addImage(bananaImage)
    banana.lifetime = 70
    banana.scale = 0.1
    bananaGroup.add(banana)
  }
}