var gameState = 0;
var playerCount;
var allPlayers;
var distanceX =0;
var distanceY =0;


var database;

var form,player,game;

var player1,player2

var lost_Img,win_Img,LplayerImg,LsitImg,RsitImg,RplayerIMG;

function preload(){
lost_Img = loadImage("lost.png");
win_Img = loadImage("playerwin.png");
LplayerImg = loadImage("Lplayer.png");
LsitImg = loadImage("Lsit.png");
RplayerIMG = loadImage("Rplayer.png");
RsitImg = loadImage("Rsit.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  if(playerCount ===2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}