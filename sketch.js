
let benedict;
let benevolent;
let bg;
let frame;
let image1;
let image2;

let temp1;

let sceneW;
let sceneH;

let marginW;
let marginH;

let boss_size;

function preload() {
  boss_size = loadImage("assets/400x400.png");
  temp1 = loadImage("assets/soy.png");
}



function setup() {
  // createCanvas(1000, 1000);
  createCanvas(windowWidth,windowHeight);
  
  
  document.addEventListener("contextmenu", event => event.preventDefault());

  

  let sceneW = width + width*0.2;
  let sceneH = height + height*0.2;

  let sceneA = width - width*0.2;
  let sceneB = height - height*0.2;

  marginW = width*0.4;
  marginH = height*0.4;


  //create a sprite and add the 3 animations
  benedict = createSprite(400, 200, 50, 100);
  benevolent = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);

  // let myAnimation = benedict.addAnimation("moving", image1);
  // myAnimation.offY = 18;

  benedict.addAnimation("standing", "assets/Benedict - Stand 100.png");
  benedict.addAnimation("moveright", "assets/Benedict - right run 1 100.png", "assets/Benedict - right run 2 100.png");
  benedict.addAnimation("moveleft", "assets/Benedict - left run 1 100.png", "assets/Benedict - left run 2 100.png");
  benedict.addAnimation("moveforward", "assets/Benedict - Stand Backward 100.png");
  benedict.addAnimation("movebackward", "assets/Benedict - Stand 100.png");

  benevolent.addAnimation("Idle", "assets/tempimage.png");
  


  // create some background for visual reference
  // for(let i=0; i<80; i++) {
  //   //create a sprite and add the 3 animations
  //   let rock = createSprite(random(-width, sceneW+width), random(-height, sceneH+height));
  //   //cycles through rocks 0 1 2
  //   // rock.addAnimation("normal", "assets/BarthalamewRoberts.png");
  //   bg.add(rock);
  // }

  // frame = loadImage("assets/walter.png");

  
}

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

function cameron() {
  // camera.on();

  // camera.zoom = 0.5;

  // camera.position.x = benedict.position.x;
  // camera.position.y = benedict.position.y;

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

function draw() {
  background("black");
 
  
  
  // image(boss_size,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  moveTest();
  noStroke();
  imageMode(CENTER);
  // image(boss_size, windowWidth/2, windowHeight/2), windowWidth, windowHeight;

  // drawSprites(bg);
  cameron();
  
  drawSprite(benedict);
  drawSprite(benevolent);
  

}

let bullets = [];
let playerX;
let playerY;



  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
}


  background(220);
  displayPlayer();
  handleBullets();
}

function displayPlayer() {
  fill("black");
  ellipse(playerX, playerY, 75, 75);
}

function handleBullets() {
  for (let bullet of bullets) {
    bullet.x += bullet.dx;
    bullet.y += bullet.dy;

    fill("red");
    ellipse(bullet.x, bullet.y, bullet.radius*2);
  }
}

function spawnBullet() {
  let xDiff = mouseX - playerX;
  let yDiff = mouseY - playerY;
  let xSpeed = map(xDiff, -width/2, width/2, -10, 10);
  let ySpeed = map(yDiff, -height/2, height/2, -10, 10);


  let bullet = {
    x: playerX,
    y: playerY,
    radius: 20,
    dx: xSpeed,
    dy: ySpeed,
  };
  bullets.push(bullet);
}

function mousePressed() {
  spawnBullet();
}


// function setup() {
//   createCanvas(800,400);


// }

// let grid = [];
// let gridSize = 100;
// let cellWidth, cellHeight;



// let playerX = 1;
// let playerY = 0;

// loads images and maps
// function preload() {

// }



// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   grid = createRandom2DArray(gridSize, gridSize);
//   // grid = level1;
//   // state = "level1";



//   cellWidth = width/gridSize;
//   cellHeight = height/gridSize;

//   grid[playerY][playerX] = 600;

  
// }

// function draw() {
// //   background(220);
// //   displayGrid();
// //   levelSwap();

// }




// function createRandom2DArray(rows,cols) {
//   let board =  [];
//   for (let y=0; y<rows; y++) {
//     board.push([]);
//     for (let x=0; x<cols; x++) {
//       if (random(100) < 50) {
//         board[y].push(0);
//       }
//       else {
//         board[y].push(1);
//       }
//     }
//   }
//   return board;
// }

// //movement controls
// function keyPressed() {
//   // if (key === "e") {
//   //   grid = createEmpty2DArray(gridSize,gridSize);
//   // }
//   if (key === "r") {
//     grid=createRandom2DArray(gridSize,gridSize);
//   }
//   if (key === "s") {
//     tryToMoveTo(playerX,playerY+1);
//   }
//   if (key === "w") {
//     tryToMoveTo(playerX,playerY-1);
//   }
//   if (key === "a") {
//     tryToMoveTo(playerX-1,playerY);
//   }
//   if (key === "d") {
//     tryToMoveTo(playerX+1,playerY);
//   }
// }

// //attempts to move character
// function tryToMoveTo(newX, newY) {
//   if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {

//     console.log(newX, newY);
    
//     if (grid[newY][newX] === 0) {
//       grid[playerY][playerX] = 0;
//       playerX = newX;
//       playerY = newY;
//       grid[playerY][playerX] = 600;
//     }
//     if (grid[newY][newX] === 3) {
//       grid[playerY][playerX] = 3;
//       playerX = newX;
//       playerY = newY;
//       grid[playerY][playerX] = 600;
//     }
//   }
// }


// //rotates between tiles on mouse click
// function mousePressed()  {
//   let cellX = Math.floor(mouseX/cellWidth);
//   let cellY = Math.floor(mouseY/cellHeight);

//   if (grid[cellY][cellX] === 0) {
//     grid[cellY][cellX] = 1;
//   }
//   else if (grid[cellY][cellX] === 1) {
//     grid[cellY][cellX] = 2;
//   }
//   else if (grid[cellY][cellX] === 2) {
//     grid[cellY][cellX] = 3;
//   }
//   else if (grid[cellY][cellX] === 3) {
//     grid[cellY][cellX] = 0;
//   }

// }

// function displayGrid() {
//   for (let y=0; y<gridSize; y++) {
//     for (let x=0; x<gridSize; x++) {
      
//       strokeWeight(0.1);
//     }
//   }
// }

// //grid creation
// // function createEmpty2DArray(rows,cols) {
// //   let board =  [];
// //   for (let y=0; y<rows; y++) {
// //     board.push([]);
// //     for (let x=0; x<cols; x++) {
// //       board[y].push(0);
// //     }
// //   }
// //   return board;
// // }

// // function levelSwap() {
// //   if (state === "level1") {
// //     grid = level1;
// //     if (grid[4][0] === 600) {
// //       state = "level2";
// //     }
// //   }
// //   else if (state === "level2") {
// //     grid = level2;
// //     playerX = 18;
// //     playerY = 9;
    
// //   }
// // }