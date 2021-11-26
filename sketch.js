//virtual camera
//move the mouse around
//the sprite follows the mouse but appears at the center of the sketch
//because the camera is following it

let dude;
let bg;
let frame;
//the scene is twice the size of the canvas
let SCENE_W = 1600;
let SCENE_H = 800;


function setup() {
  createCanvas(800, 400);

  //create a sprite and add the 3 animations
  dude = createSprite(400, 200, 50, 100);

  let myAnimation = dude.addAnimation('floating', 'assets/testman.png', 'assets/testman.png');
  myAnimation.offY = 18;

  dude.addAnimation('moving', 'assets/testman.png', 'assets/testman2.png');

  bg = new Group();

  //create some background for visual reference
  for(let i=0; i<80; i++)
  {
    //create a sprite and add the 3 animations
    let rock = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
    //cycles through rocks 0 1 2
    rock.addAnimation('normal', 'assets/rocks'+i%3+'.png');
    bg.add(rock);
  }

  frame = loadImage('assets/defaultLincoln.jpg');
}

function draw() {
  background(255, 255, 255);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  dude.velocity.x = (camera.mouseX-dude.position.x)/20;
  dude.velocity.y = (camera.mouseY-dude.position.y)/20;

  //a camera is created automatically at the beginning

  //.5 zoom is zooming out (50% of the normal size)
  if(mouseIsPressed)
    camera.zoom = 0.5;
  else
    camera.zoom = 1;

  //set the camera position to the dude position
  camera.position.x = dude.position.x;
  camera.position.y = dude.position.y;

  //limit the dude movements
  if(dude.position.x < 0){
    dude.position.x = 0;
  }
  if(dude.position.y < 0){
    dude.position.y = 0;
  }
  if(dude.position.x > SCENE_W)
    dude.position.x = SCENE_W;
  if(dude.position.y > SCENE_H)
    dude.position.y = SCENE_H;

  //draw the scene
  //rocks first
  drawSprites(bg);

  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  ellipse(dude.position.x, dude.position.y+90, 80, 30);
  //character on the top
  drawSprite(dude);

  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  camera.off();
  image(frame, 0, 0);
}
// let dude;
// let bg;
// let frame;

// let sceneW = 1600;
// let sceneH = 800;

// let marginW;
// let marginH;






// function setup() {
//   createCanvas(800,400);

//   dude = createSprite(400, 200, 50, 100);
//   let myAnimation = dude.addAnimation("walking", "assets/testman.png", "assets/testman2.png");
//   myAnimation.offY = 18;
  
//   // sceneW = width + width*0.2;
//   // sceneH = height + height*0.2;

//   // marginW = width*0.4;
//   // marginH = height*0.4;

//   frame = loadImage("assets/defaultLincoln.jpg");
// }

// function draw() {
//   background(255,255,255);  
//   dude.velocity.x = (camera.mouseX-dude.position.x)/20;
//   dude.velocity.y = (camera.mouseY-dude.position.y)/20;

  

//   camera.position.x = dude.x;
//   camera.position.y = dude.y;

//   if(dude.position.x < 0){
//     dude.position.x = 0;
//   }
//   if(dude.position.y < 0){
//     dude.position.y = 0;
//   }
//   if(dude.position.x > sceneW){
//     dude.position.x = sceneW;
//   }
//   if(dude.position.y > sceneH){
//     dude.position.y = sceneH;
//   }

//   noStroke();
//   fill(0, 0, 0, 20);
  
//   ellipse(dude.position.x, dude.position.y+90, 80, 30);
  
//   drawSprite(dude);


//   camera.off();
//   image(frame, 0, 0);

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

// //loads images and maps
// function preload() {
//   // level1 = loadJSON("assets/ANewDay.json");
//   // level2 = loadJSON("assets/TheGloriousLegion.json");
  


  //   leafyGrass = loadImage("assets/leafygrass.png");
  //   stonePath = loadImage("assets/stonepath.png");
  //   woodFloor = loadImage("assets/woodfloor.png");
  //   houseRoof = loadImage("assets/houseroof.png");
  //   defaultLincoln = loadImage("assets/defaultLincoln.jpg");
  
}



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
// //   //   levelSwap();
//   cameraboys();

//   drawSprites(dude);
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
