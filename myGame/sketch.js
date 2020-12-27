var playerrun, playerpower, player, playerstand
var ground
var score

function preload(){
  playerrun = loadAnimation("images/run/p1.png","images/run/p2.png");
  playerpower = loadAnimation("images/power/p7.png", "images/power/p8.png", "images/power/p9.png", "images/power/p10.png");
  playerstand = loadImage("images/run/p1.png");
  bg = loadImage("images/bground1.png");
  obstacle1 = loadAnimation("images/obstacles/tile000.png","images/obstacles/tile001.png","images/obstacles/tile002.png","images/obstacles/tile003.png" );
  g = loadImage("images/ground.png");
  
}
function setup(){
createCanvas(windowWidth,windowHeight);

bground = createSprite(windowWidth - 300, windowHeight - 200);
bground.addImage("bground",bg);
bground.velocityX = -3;

player = createSprite(600,100,10,10);
player.addImage("stand",playerstand);
player.scale = 2;
player.addAnimation("run",playerrun);
player.addAnimation("power",playerpower);

obstaclesGroup = new Group();
coinsGroup = new Group();

score = 0;

ground = createSprite(200,550,windowWidth*2,60);
ground.addImage("ground",g);
ground.scale = 0.3;

ground2 = createSprite(870,550,windowWidth*2,60);
ground2.addImage("ground",g);
ground2.scale = 0.3;
}

function draw(){
  background("white");
  player.collide(ground);

  if(bground.x <= 200){
    bground.x = windowWidth/2;
  }


  if(keyDown(UP_ARROW)){
    player.velocityY = -10;
    player.changeAnimation("run",playerrun);
  }
  //add gravity to player
  player.velocityY = player.velocityY + 0.8;

  spawnObstacles();
  spawnCoins();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(windowWidth + 50,475,20,20);
    obstacle.velocityX = -(6 + 3*score/100);
    obstacle.addAnimation("ob1",obstacle1);

    
    //assign scale and lifetime to the obstacle           

    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    
  }
}

function spawnCoins() {
  if(frameCount % 40 === 0) {
    var coins = createSprite(windowWidth + 50,105,20,20);
    coins.velocityX = -(6 + 3*score/100);
    coin = createImg("images/coins/coin.gif");
    //coins.addImage("c",coin);
    coin.position(20,20,10,10)
    coins.scale = 0.25;

    coins.lifetime = 300;
    //add each obstacle to the group
    coinsGroup.add(coins);

    
  }
}