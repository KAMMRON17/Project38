class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hidden();
    textSize(36);
    text("Game Start",120,100);
    player.getPlayerInfo();
    if(allPlayers!==undefined){
      var displayPosition=130;
      for(var i in allPlayers){
        if(i==="player"+player.index){
          fill("red");
        }else{
          fill("black");
        }
        displayPosition+=20;
        textSize(15);
        text(allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition);
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
     player.d+=50;
     player.update();
    }
  }
}
