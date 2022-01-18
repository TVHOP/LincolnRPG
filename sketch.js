
let benedict;
let benevolent;
let bg;
let frame;
let image1;
let image2;

let bulletsImg;
let bulletLife = 40;
let playerBullets;

let temp1;

let sceneW;
let sceneH;

let marginW;
let marginH;

let boss_size;
//--------------------------------------------------------------------------------------------------------//
function preload() {
  boss_size = loadImage("assets/400x400.png");
  temp1 = loadImage("assets/soy.png");
  bulletsImg = loadImage("assets/soy.png");
}
//--------------------------------------------------------------------------------------------------------//


function setup() {
  createCanvas(windowWidth,windowHeight);
  createBenedict();
  document.addEventListener("contextmenu", event => event.preventDefault());

  let sceneW = width + width*0.2;
  let sceneH = height + height*0.2;
  let sceneA = width - width*0.2;
  let sceneB = height - height*0.2;

  marginW = width*0.4;
  marginH = height*0.4;
  
  benevolent = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);

  benevolent.addAnimation("Idle", "assets/tempimage.png");

  // playerBullets = new Group();
  
}
//--------------------------------------------------------------------------------------------------------//
function draw() {
  background("black");

  moveTest();
  noStroke();
  imageMode(CENTER);
  
  cameron();

  drawSprite(playerBullets);
  drawSprite(benedict);
  drawSprite(benevolent);
  

  testGun();
  createBullets();

}
function createBenedict() {
  benedict = createSprite(400, 200, 50, 100);

  benedict.addAnimation("standing", "assets/Benedict - Stand 100.png");
  benedict.addAnimation("moveright", "assets/Benedict - right run 1 100.png", "assets/Benedict - right run 2 100.png");
  benedict.addAnimation("moveleft", "assets/Benedict - left run 1 100.png", "assets/Benedict - left run 2 100.png");
  benedict.addAnimation("moveforward", "assets/Benedict - Stand Backward 100.png");
  benedict.addAnimation("movebackward", "assets/Benedict - Stand 100.png");

}
function createBullets(type) {
  if (type === "player"){
    let bullet = createSprite(benedict.position.x, benedict.position.y);
    bullet.addImage(bulletsImg);
    bullet.life = bulletLife;
    bullet.rotateToDirection = true;
    bullet.setSpeed(benedict.getSpeed()+6, benedict.rotation);
    playerBullets.add(playerBullets);
  }    
}
//---------------------------------------------------------------------------------------------------------//
function testGun() {
  if (keyIsDown(32)) {
    createBullets("player");
  }
}
//---------------------------------------------------------------------------------------------------------//

function moveTest() {
  //Up Movement, and Sprint Up Movement
  if (keyIsDown(87)) {
    if (keyIsDown(16)) {
      benedict.changeAnimation("moveforward");
      benedict.position.y -= 11;
      console.log("Wsprint");
    }
    benedict.changeAnimation("moveforward");
    benedict.position.y -= 7;
    console.log("w");
  }
  else {
    benedict.changeAnimation("standing");
  }
  // Right Movement, and Sprint Right Movement
  if (keyIsDown(65)) {
    if (keyIsDown(16)) {
      benedict.changeAnimation("moveleft");
      benedict.position.x -= 11;
      console.log("Asprint");
    }
    benedict.changeAnimation("moveleft");
    benedict.position.x -= 7;
    console.log("a");
  }
  // Down Movement, and Sprint Down Movement
  if (keyIsDown(83)) {
    if (keyIsDown(16)) {
      benedict.changeAnimation("movebackward");
      benedict.position.y += 11;
      console.log("Ssprint");
    }
    benedict.changeAnimation("movebackward");
    benedict.position.y += 7;
    console.log("s");
  }
  // Left Movement, and Sprint Left Movement
  if (keyIsDown(68)) {
    benedict.changeAnimation("moveright");
    benedict.position.x += 7;
    console.log("d");
  }
  if (keyIsDown(16) && keyIsDown(68)) {
    benedict.changeAnimation("moveleft");
    benedict.position.x += 11;
    console.log("Dsprint");
  }
  benevolent.changeAnimation("Idle");
}
//---------------------------------------------------------------------------------------------------------//
function cameron() {
  if(benedict.position.x < 15) {
    benedict.position.x = 15;
  }
  if(benedict.position.y < 37) {
    benedict.position.y = 37;
  }
  if(benedict.position.x > 1260) {
    benedict.position.x = 1260;
  }
  if(benedict.position.y > 595) {
    benedict.position.y = 595;
  }
}
//---------------------------------------------------------------------------------------------------------//



