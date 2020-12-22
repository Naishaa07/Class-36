var hypnoticBall, database;
var position, canvas, bg, gamestate=0,form, player,game;
var playerCount=0;

function setup(){
  database = firebase.database();
  console.log(database);
  var canvas=createCanvas(400,400);
  game=new Game()
  game.getState()
  game.start()

 
}

function draw(){
  background("white");
  
   
  
}

