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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

      car1 = createSprite(100, 200);
      car1.addImage("car1",car1Img);

      car2 = createSprite(300, 200);
      car2.addImage("car2", car2Img);

      car3 = createSprite(500, 200);
      car3.addImage("car3", car3Img);

      car4 = createSprite(700, 200);
      car4.addImage("car4", car4Img);

      cars = [car1, car2, car3, car4]
  }

  play(){
    form.hide();
    
  //  textSize(30);
   // text("Game Start", displayWidth/2 - 100, displayHeight/2 - 250)
    Player.getPlayerInfo();
    player.getCarsAtEnd();


    //if all the players have logged in

    if(allPlayers !== undefined)
    {
       background(66, 66, 66)
       
        image(track, 0, -displayHeight*3.3, displayWidth, displayHeight*4.4); //can add -displayHeight*4
     
          
       
      console.log(-displayHeight)
      //array of cars[0] position i.e 1st player
      var cIndex = 0;
      //initialisation for the x and y position of the car
      var x = 175;
    // var x = width / 2 - 680;
     
     var y;
      
      for(var plr in allPlayers)
      {

        /*
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");
         
        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, displayWidth/2 - 70,display_position)*/

       //setting the x and y Position of the 1st car as index[0]
      
        x = x + 200;
        //display height - the distance travelled by the car in y position
        y = (displayHeight)- allPlayers[plr].distance;// i did as well to fit the carbefore start
     
            cars[cIndex].x = x;
            cars[cIndex].y = y;
            //increment the car 1 to car 2 by changing the array index from 0 to 1
            cIndex++;
            //active players
            if(cIndex === player.index)
            {
              stroke(10);
              fill("red");
              ellipse(x,y,60, 60);
              cars[cIndex-1].shapeColor = "Yellow";
              //setting the camera position
               camera.position.x = displayWidth/2;
              camera.position.y = cars[cIndex-1].y - 200
      
              console.log(player.distance);

              
             
            }

       
      }
    }

            if(keyIsDown(UP_ARROW) && player.index !== null){
              player.distance +=10
              player.update();
              console.log(player.distance);
            }

           if(player.distance > 3000)
           //if (player.distance > height * 4 - 100)  
           {
              gameState = 2;
              player.rank =+1;
              Player.updateCarsAtEnd(player.rank);
            }

         
           
    drawSprites();
  } //play closing

   end()
   {
     //console.log("Game End");
     console.log(player.rank)
   }
}  //class closing
