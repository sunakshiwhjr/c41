var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4, cars;

var track, car1Img, car2Img, car3Img, car4Img, ground;
function preload()
{
  track = loadImage("images/track.jpg");
  track1 = loadImage("images/track.png");
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");


}

function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight*0.8); // u can make displayHeight  - 30
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 // img = image(track1, 0, -height * 5, displayWidth + 10, displayHeight -500)
}


function draw(){
  console.log(-displayHeight*3.3)

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
