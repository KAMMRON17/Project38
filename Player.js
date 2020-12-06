class Player {
  constructor(){
    this.n=null;
    this.d=0;
    this.index=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "Players/player" + playerCount;
    database.ref(playerIndex).set({
     name:this.n,
     distance:this.d,
    });
  }
  
   getPlayerInfo(){
    var playerInfo= database.ref('Players');
    playerInfo.on("value",function(data){
      allPlayers =data.val();
    });

  }
}
