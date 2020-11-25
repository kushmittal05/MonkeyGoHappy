//creates var

var monkey , monkey_running
var ground
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  //loads Images and animaitons
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
 //creates monkey, adds animation, and scale
  
  monkey= createSprite(100,315,20,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;
  
//creates ground and velocity
  
  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
 //creates food group and sbstacle group
  
  FoodGroup =new Group();
  obstacleGroup= new Group();
  
  score= 0;
  
}


function draw() {
background("White");
  
  //makes the ground look infinite
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //displays score
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.round(frameCount)
  text ("Survival Time: "+score,100,50);
  
  //makes monkey jump
 
  if (keyDown("space")&& monkey.y >= 314) {
    monkey.velocityY=-20
    
  
  }
  
 //adds gravity
  
  monkey.velocityY = monkey.velocityY + 1
  
  //makes monkey stay on ground
  
  monkey.collide(ground);
  
  //calls functions
  
  fruits();
  obstacles();
  
  drawSprites();
  
}

function fruits() {
  
  //makes banana apper after every 80 frames
  
  if (World.frameCount%80===0) {
    
    banana = createSprite(400,290,20,20)
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-4;
    banana.lifetime=100;
    
    FoodGroup.add(banana);
    
    banana.depth= monkey.depth;
    monkey.depth=monkey.depth+1;
    }
  
  
}

function obstacles () {
  
  if (World.frameCount%300===0) {
    obstacle= createSprite(400,310,20,20);
  obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
    
    obstacleGroup.add(obstacle);
    
    obstacle.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
  
  }
}
