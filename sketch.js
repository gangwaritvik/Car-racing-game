//create the background and canvas
var canvas, backgroundImage;

//create the variables
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,car1,car2,car3,car4;

var track,car1_img,car2_img,car3_img,car4_img;

function preload()
{
  //add the images
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}


function setup()
{
  //create the canvas
  canvas = createCanvas(displayWidth-50,displayHeight-200);
  //take the data from firebase databse
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  //if 4  players are added update the game state
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2)
  {
    game.end();
  }
}
