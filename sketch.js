var knight,knightImage; 
var dragon,dragonImg;
var backgroundImg;
var soldier,soldierImg;
var dragonsoldier,soldier2Img;
var dragon_gif;
var attackCount = 0;
var goldCount = 0;
var gameState = "start";
var archer,archerImg;
var swordsman,swordsmanImg;
var arrow,arrowImg;

function preload() {
 knightImage = loadImage("spearman.png");
 backgroundImg = loadImage("bg.png");
 //dragonImg = loadImage("dragon.gif");
 dragon_gif = createImg("dragon.gif");
 soldierImg = loadImage("knight2.png");
 soldier2Img = loadImage("Knight.png");
 archerImg = loadImage("Archer.png");
 swordsmanImg = loadImage("swordsman.png");
 arrowImg = loadImage("Arrow.png");
} 

function setup() {
 createCanvas(1500,1500);

 knight = createSprite(100,1000,50,50);
 knight.addImage("knight",knightImage);
 knight.scale=0.5;

 soldier=createSprite(100,950,50,50);
 soldier.addImage("boy",soldierImg);
 soldier.scale=0.4;
 soldier.velocityX=10;

 dragonsoldier=createSprite(850,950,50,50);

 archer = createSprite(100,950,50,50);

 arrow = createSprite(100,950,50,50);

 swordsman = createSprite(100,950,50,50);

 dragon = createSprite(1000,800,1,1);
 //dragon_createImg.addImage("dragon",dragon_createImg);
 //dragon.scale=0.5;
}

function draw() {
 background(backgroundImg);

 dragon_gif.position(dragon.x,dragon.y);

 if(gameState == "start"){
 textSize(30);
 text("Press C to create soldiers",500,500);
 gameState = "play";
 dragonsoldier.destroy();
 archer.destroy();
 arrow.destroy();
 swordsman.destroy();
 }

 if(goldCount > 100 && gameState === "play"){
  if(keyWentDown("C")){
  soldier=createSprite(100,950,50,50);
  soldier.addImage("boy",soldierImg);
  soldier.scale=0.4;
  soldier.velocityX=10;
  soldier.velocityX=10;
  goldCount = goldCount-100;
  }
}

if(goldCount > 125 && gameState === "play"){
  if(keyWentDown("A")){
    goldCount = goldCount-125;
    arrow=createSprite(archer.x,archer.y,50,50);
    arrow.addImage("arrow",arrowImg);
    arrow.scale = 0.2;
    arrow.velocityX=25;
    archer.destroy();
    swordsman=createSprite(archer.x,archer.y,50,50);
    swordsman.addImage("sword",swordsmanImg);
    swordsman.scale=0.5;
    swordsman.velocityX=5;
  }
}

if(frameCount%125 === 0 && gameState === "play"){  
  dragonsoldier=createSprite(850,950,50,50);
  dragonsoldier.x=Math.round(random(900,950));
  dragonsoldier.addImage("boy",soldier2Img);
  dragonsoldier.scale=0.4;
  dragonsoldier.velocityX=-10;
 }
 
 if(frameCount%1 === 0){
   goldCount = goldCount+1;
 }

 if(soldier.isTouching(dragon)){
  attackCount=attackCount+1;
  soldier.destroy();
  console.log(attackCount);
 }

 if(arrow.isTouching(dragon)){
  attackCount=attackCount+1;
  arrow.destroy();
  console.log(attackCount);
 }

 if(archer.isTouching(dragon)){
  attackCount=attackCount+1;
  archer.destroy();
  console.log(attackCount);
 }

 if(swordsman.isTouching(dragon)){
  attackCount=attackCount+1;
  swordsman.destroy();
  console.log(attackCount);
 }

 if(dragon.isTouching(soldier)){
  attackCount=attackCount+1;
  soldier.destroy();
  console.log(attackCount);
 }

 if(dragon.isTouching(arrow)){
  attackCount=attackCount+1;
  arrow.destroy();
  console.log(attackCount);
 }

 if(dragon.isTouching(archer)){
  attackCount=attackCount+1;
  archer.destroy();
  console.log(attackCount);
 }

 if(dragon.isTouching(swordsman)){
  attackCount=attackCount+1;
  swordsman.destroy();
  console.log(attackCount);
 }

 if(attackCount === 4 && gameState == "play"){
  dragon.destroy();
  dragon_gif.remove();
  gameState = "end";
  }


if(gameState === "end"){
   textSize(30);
   fill("white")
   text("You Killed Dragon",750,750);
}

if(dragonsoldier.isTouching(soldier)){
  soldier.destroy();
  dragonsoldier.destroy();
}

if(dragonsoldier.isTouching(arrow)){
  arrow.destroy();
  dragonsoldier.destroy();
 }
 
 if(dragonsoldier.isTouching(archer)){
  archer.destroy();
  dragonsoldier.destroy();
 }
 
 if(dragonsoldier.isTouching(swordsman)){
  swordsman.destroy();
  dragonsoldier.destroy();
 }

 if(soldier.isTouching(dragonsoldier)){
  soldier.destroy();
  dragonsoldier.destroy();
}

if(arrow.isTouching(dragonsoldier)){
  arrow.destroy();
  dragonsoldier.destroy();
 }
 
 if(archer.isTouching(dragonsoldier)){
  archer.destroy();
  dragonsoldier.destroy();
 }
 
 if(swordsman.isTouching(dragonsoldier)){
  swordsman.destroy();
  dragonsoldier.destroy();
 }

 drawSprites();
}