//Untitled
//---------------------------------------------------------------------------------------------------------//
//Global Variables
let benedict;
let ZES;
let bg;
let frame;
let image1;
let image2;

let bulletsImg;
let bulletLife = 40;

let bullet;

let temp1;

let sceneW;
let sceneH;

let marginW;
let marginH;

let boss_size;
//--------------------------------------------------------------------------------------------------------//
function preload() {
  boss_size = loadImage("assets/400x400.png");
  bulletsImg = loadImage("assets/soy.png");
}
//--------------------------------------------------------------------------------------------------------//
//Setup Function
function setup() {
  createCanvas(windowWidth,windowHeight);
  createBenedict();
  createZES();
  document.addEventListener("contextmenu", event => event.preventDefault());

  let sceneW = width + width*0.2;
  let sceneH = height + height*0.2;
  let sceneA = width - width*0.2;
  let sceneB = height - height*0.2;

  marginW = width*0.4;
  marginH = height*0.4;

  benedict.position.x = width/2;
  benedict.position.y = height/2;

  
}
//--------------------------------------------------------------------------------------------------------//
//Draw Loop
function draw() {
  background("black");

  WASDcontrol();
  imageMode(CENTER);
  
  borderlands();

  // drawSprite(playerBullets);
  drawSprite(benedict);
  drawSprite(ZES);
  

  testGun();
  createBullets();

  collideControl();

  
  handleBullets();

  
  // console.log(mouseX, mouseY);
}
//---------------------------------------------------------------------------------------------------------//
//Summons Benedict and creates his animations. Name and appearance are references to https://www.destinypedia.com/Benedict_99-40
function createBenedict() {
  benedict = createSprite(400, 200, 50, 100);

  benedict.addAnimation("standing", "assets/Benedict - Stand 100.png");
  benedict.addAnimation("moveright", "assets/Benedict - right run 1 100.png", "assets/Benedict - right run 2 100.png");
  benedict.addAnimation("moveleft", "assets/Benedict - left run 1 100.png", "assets/Benedict - left run 2 100.png");
  benedict.addAnimation("moveforward", "assets/Benedict - Stand Backward 100.png");
  benedict.addAnimation("movebackward", "assets/Benedict - Stand 100.png");

  benedict.setCollider("rectangle", 0, 0, width/2, height/2);
}
//---------------------------------------------------------------------------------------------------------//
//Summons ZES and creates his animations. Name and appearance are references to https://scp-wiki.wikidot.com/scp-087
function createZES() {
  ZES = createSprite(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight);
  ZES.addAnimation("Idle", "assets/tempimage.png");

  ZES.setCollider("circle", 0, 0, 25);
}
//---------------------------------------------------------------------------------------------------------//
function createBullets(type) {
  if (type === "player"){
    let bullet = createSprite(benedict.position.x, benedict.position.y);
    bullet.addImage(bulletsImg);
    bullet.life = bulletLife;
    bullet.rotateToDirection = true;
    bullet.setSpeed(benedict.getSpeed()+6, benedict.rotation);
    bullet.debug = debugMode;
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
//The code that allows Benedict to move around. Standard WASD + Shift.
function WASDcontrol() {
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
    benedict.changeAnimation("moveright");
    benedict.position.x += 11;
    console.log("Dsprint");
  }
  ZES.changeAnimation("Idle");
}
//---------------------------------------------------------------------------------------------------------//
//Defines the borders of the play area and does not allow Benedict to go past it. Named after a popular game I didn't enjoy.
function borderlands() {
  if(benedict.position.x < 15) {
    benedict.position.x = 15;
  }
  if(benedict.position.y < 37) {
    benedict.position.y = 37;
  }
  if(benedict.position.x > 1590) {
    benedict.position.x = 1590;
  }
  if(benedict.position.y > 755) {
    benedict.position.y = 755;
  }
}
//---------------------------------------------------------------------------------------------------------//
function collideControl() {
  benedict.overlap(ZES, bounceControl);
}

function bounceControl(benedict, ZES) {
  benedict.bounce(ZES);
}
//---------------------------------------------------------------------------------------------------------//
let bullets = [];
// let playerBullets = [];


function handleBullets() {
  for (let bullet of bullets) {
    bullet.x += bullet.dx;
    bullet.y += bullet.dy;

    fill("yellow");
    ellipse(bullet.x, bullet.y, bullet.radius);

   
  }
}

function spawnBullet() {
  let xDiff = mouseX - benedict.position.x;
  let yDiff = mouseY - benedict.position.y;
  let xSpeed = map(xDiff, -width/2, width/2, -10, 10);
  let ySpeed = map(yDiff, -height/2, height/2, -10, 10);


  let bullet = {
    x: benedict.position.x,
    y: benedict.position.y,
    radius: 20,
    dx: xSpeed,
    dy: ySpeed,
  };
  bullets.push(bullet);
  if (bullet.x >= 240 && bullet.x <= 700) {
    console.log("nuts");
  }

}

function mousePressed() {
  spawnBullet();
}

