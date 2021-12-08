
let dude;
let bg;
let frame;
let image1;
let image2;
let RUN1;
let RUN2;

let sceneW;
let sceneH;

let marginW;
let marginH;

let mapbeta;
//the scene is twice the size of the canvas

function preload() {
  image1 = loadImage("assets/testman.png");
  image2 = loadImage("assets/testman2.png");
  RUN1 = loadImage("assets/RUN_1.png");
  RUN2 = loadImage("assets/RUN_2.png");
  mapbeta = loadImage("assets/mapbeta1.png");
}



function setup() {
  // createCanvas(1000, 1000);
  
  document.addEventListener("contextmenu", event => event.preventDefault());

  let betamap = createImage(1500,1000);
  betamap.loadPixels;
  createCanvas(windowWidth,windowHeight);
  background(0,150,0);

  let sceneW = width + width*0.2;
  let sceneH = height + height*0.2;

  marginW = width*0.4;
  marginH = height*0.4;


  //create a sprite and add the 3 animations
  dude = createSprite(400, 200, 50, 100);

  let myAnimation = dude.addAnimation("moving", image1, image2);
  // myAnimation.offY = 18;

  dude.addAnimation("standing", "assets/testman.png");
  dude.addAnimation("sprintleft", RUN1, RUN2);
  cameron();


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
      dude.changeAnimation("moving");
      dude.position.y -= 11;
      console.log("Wsprint");
    }
    dude.changeAnimation("moving");
    dude.position.y -= 7;
    console.log("w");
  }
  else {
    dude.changeAnimation("standing");
  }
  // Right Movement, and Sprint Right Movement
  if (keyIsDown(65)) {
    if (keyIsDown(16)) {
      dude.changeAnimation("moving");
      dude.position.x -= 11;
      console.log("Asprint");
    }
    dude.changeAnimation("moving");
    dude.position.x -= 7;
    console.log("a");
  }
  // Down Movement, and Sprint Down Movement
  if (keyIsDown(83)) {
    if (keyIsDown(16)) {
      dude.changeAnimation("moving");
      dude.position.y += 11;
      console.log("Ssprint");
    }
    dude.changeAnimation("moving");
    dude.position.y += 7;
    console.log("s");
  }
  // Left Movement, and Sprint Left Movement
  if (keyIsDown(68)) {
    dude.changeAnimation("moving");
    dude.position.x += 7;
    console.log("d");
  }
  if (keyIsDown(16) && keyIsDown(68)) {
    dude.changeAnimation("sprintleft");
    dude.position.x += 11;
    console.log("Dsprint");
  }
}


function draw() {
  // background(255,255,255);
  // image(mapbeta,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  background(255,0,150);
  moveTest();
  noStroke();

  

  //mouse trailer, the speed is inversely proportional to the mouse distance
  // dude.velocity.x = (camera.mouseX-dude.position.x)/20;
  // dude.velocity.y = (camera.mouseY-dude.position.y)/20;

  

  //a camera is created automatically at the beginning

  //.5 zoom is zooming out (50% of the normal size)

  //set the camera position to the dude position


  



  // drawSprites(bg);


  
  //character on the top
  drawSprite(dude);
   
  image(mapbeta, 836, 631);
}

function cameron() {
  camera.off();

  camera.zoom = 0.5;

  camera.position.x = dude.position.x;
  camera.position.y = dude.position.y;

  if(dude.position.x < 0) {
    dude.position.x = 0;
  }
  if(dude.position.y < 0) {
    dude.position.y = 0;
  }
  if(dude.position.x > sceneW) {
    dude.position.x = sceneW;
  }
  if(dude.position.y > sceneH) {
    dude.position.y = sceneH;
  }
}
// function setup() {
//   createCanvas(800,400);


// }

// let grid = [];
// let gridSize = 100;
// let cellWidth, cellHeight;

// //images
// let leafyGrass;
// let houseRoof;
// let stonePath;
// let woodFloor;
// let defaultLincoln;


// let level1, level2, level3;
// let state;

// let playerX = 1;
// let playerY = 0;

// loads images and maps
// function preload() {
// level1 = loadJSON("assets/ANewDay.json");
// level2 = loadJSON("assets/TheGloriousLegion.json");
  


//    leafyGrass = loadImage("assets/leafygrass.png");
//    stonePath = loadImage("assets/stonepath.png");
//    woodFloor = loadImage("assets/woodfloor.png");
//    houseRoof = loadImage("assets/houseroof.png");
//    defaultLincoln = loadImage("assets/defaultLincoln.jpg");
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
//       if (grid[y][x] === 0) {
//         image(stonePath,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//       }
//       if (grid[y][x] === 1) {
//         image(leafyGrass,x*cellWidth, y*cellHeight, cellWidth, cellHeight);      
//       }
//       if (grid[y][x] === 2) {
//         image(houseRoof,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//       }
//       if (grid[y][x] === 3) {
//         image(woodFloor,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//       }
//       if (grid[y][x] === 600) {
//         image(defaultLincoln,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//       }
      
      
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