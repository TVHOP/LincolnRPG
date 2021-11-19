let grid = [];
let gridSize = 100;
let cellWidth, cellHeight;

//images
let leafyGrass;
let houseRoof;
let stonePath;
let woodFloor;
let defaultLincoln;


let level1, level2, level3;
let state;

let playerX = 1;
let playerY = 0;

//loads images and maps
function preload() {
  // level1 = loadJSON("assets/ANewDay.json");
  // level2 = loadJSON("assets/TheGloriousLegion.json");
  


  leafyGrass = loadImage("assets/leafygrass.png");
  stonePath = loadImage("assets/stonepath.png");
  woodFloor = loadImage("assets/woodfloor.png");
  houseRoof = loadImage("assets/houseroof.png");
  defaultLincoln = loadImage("assets/defaultLincoln.jpg");
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
  // grid = level1;
  // state = "level1";



  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  grid[playerY][playerX] = 600;

  

  
}

function draw() {
  background(220);
  displayGrid();
//   levelSwap();
}


function createRandom2DArray(rows,cols) {
  let board =  [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}

//movement controls
function keyPressed() {
  // if (key === "e") {
  //   grid = createEmpty2DArray(gridSize,gridSize);
  // }
  if (key === "r") {
    grid=createRandom2DArray(gridSize,gridSize);
  }
  if (key === "s") {
    tryToMoveTo(playerX,playerY+1);
  }
  if (key === "w") {
    tryToMoveTo(playerX,playerY-1);
  }
  if (key === "a") {
    tryToMoveTo(playerX-1,playerY);
  }
  if (key === "d") {
    tryToMoveTo(playerX+1,playerY);
  }
}

//attempts to move character
function tryToMoveTo(newX, newY) {
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {

    console.log(newX, newY);
    
    if (grid[newY][newX] === 0) {
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 600;
    }
    if (grid[newY][newX] === 3) {
      grid[playerY][playerX] = 3;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 600;
    }
  }
}


//rotates between tiles on mouse click
function mousePressed()  {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 2;
  }
  else if (grid[cellY][cellX] === 2) {
    grid[cellY][cellX] = 3;
  }
  else if (grid[cellY][cellX] === 3) {
    grid[cellY][cellX] = 0;
  }

}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        image(stonePath,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) {
        image(leafyGrass,x*cellWidth, y*cellHeight, cellWidth, cellHeight);      
      }
      if (grid[y][x] === 2) {
        image(houseRoof,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 3) {
        image(woodFloor,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 600) {
        image(defaultLincoln,x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      
      
      strokeWeight(0.1);
    }
  }
}

//grid creation
// function createEmpty2DArray(rows,cols) {
//   let board =  [];
//   for (let y=0; y<rows; y++) {
//     board.push([]);
//     for (let x=0; x<cols; x++) {
//       board[y].push(0);
//     }
//   }
//   return board;
// }

// function levelSwap() {
//   if (state === "level1") {
//     grid = level1;
//     if (grid[4][0] === 600) {
//       state = "level2";
//     }
//   }
//   else if (state === "level2") {
//     grid = level2;
//     playerX = 18;
//     playerY = 9;
    
//   }
// }
