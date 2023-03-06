var canvas;
var backgroundImage;
var boat1Img, boat2Img, trackImg;
var boat1,boat2,boats;
var coinImg, coinSound
var sharkImg
var beachWavesSound;
var bgImg;
var database;
var form, player;
var playerCount, gameState;
var allPlayers=[]

function preload() {
  backgroundImage = loadImage("./assets/backGround.jpeg");
  boat1Img = loadAnimation("./assets/ship_1.png","./assets/ship_2.png", "./assets/ship_3.png", "./assets/ship_4.png" );
  boat2Img = loadAnimation("./assets/ship2_1.png","./assets/ship2_2.png", "./assets/ship2_3.png", "./assets/ship2_4.png" );
  trackImg = loadImage("./assets/bg.jpeg");
  coinImg = loadImage("./assets/coin.png");
  sharkImg =loadImage("./assets/shark.png")
  coinSound = loadSound("./assets/coinSound.wav");
  beachWavesSound = loadSound("./assets/beachWaves.wav");
  

 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
 
  if (playerCount === 2) {
   console.log("changing the gamestate to play")
    game.update(1);
    
  }


  if (gameState === 1) {
    game.play();
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
