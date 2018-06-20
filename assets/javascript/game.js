$(document).ready(function(){
//waits for page to load and then assigns random values
   var scoreTarget = Math.ceil(Math.random()*(120-19)+19);
   var crystal1 = Math.ceil(Math.random()*(12-1)+1);
   var crystal2 = Math.ceil(Math.random()*(12-1)+1);
   var crystal3 = Math.ceil(Math.random()*(12-1)+1);
   var crystal4 = Math.ceil(Math.random()*(12-1)+1);
   //score and counter variables
   var totalWins = 0;
   var totalLosses = 0;
   var scoreCurrent = 0;
   $('#scoreTarget').text(scoreTarget);


   $(".crystal").click(function(){  
   //sets win/loss tally after first game starts
      $('#totalWins').text(totalWins);
      $('#totalLosses').text(totalLosses);
      //cheat mode - console.log(crystal1,crystal2,crystal3,crystal4);
   });

   function reset(){
   //changes all the random values and resets player/current score to 0
      scoreTarget = Math.ceil(Math.random()*(120-19)+19);
      $('#scoreTarget').text(scoreTarget);
      crystal1 = Math.ceil(Math.random()*(12-1)+1);
      crystal2 = Math.ceil(Math.random()*(12-1)+1);
      crystal3 = Math.ceil(Math.random()*(12-1)+1);
      crystal4 = Math.ceil(Math.random()*(12-1)+1);
      scoreCurrent = 0;
      $('#scoreCurrent').text(scoreCurrent);
   };
   
   function winner(){
   //if player wins, adds 1 to win counter and resets the game values
         alert("WINNER WINNER CHICKEN DINNER!");
         totalWins++;
         $('#totalWins').text(totalWins);
         reset();
   };

   function loser(){
   //if player loses, adds 1 to loss counter and resets the game values
         alert("You lost. Pity.");
         totalLosses++;
         $('#totalLosses').text(totalLosses);
         reset();
   };

   //the next four functions perform the same function for each of the four crystals: adds that crystal's value to score and check to see if the player has won or lost yet (otherwise game continues)
   $('#crystal1').on('click', function(){
      console.log(crystal1);
      scoreCurrent = scoreCurrent + crystal1;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == scoreTarget){
         winner();
      }else if (scoreCurrent > scoreTarget){
         loser();
      }
   });
   $('#crystal2').on('click', function(){
      console.log(crystal2);
      scoreCurrent = scoreCurrent + crystal2;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == scoreTarget){
         winner();
      }else if (scoreCurrent > scoreTarget){
         loser();
      }
   });
   $('#crystal3').on('click', function(){
      console.log(crystal3);
      scoreCurrent = scoreCurrent + crystal3;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == scoreTarget){
         winner();
      }else if (scoreCurrent > scoreTarget){
         loser();
      }
   });
   $('#crystal4').on('click', function(){
      console.log(crystal4);
      scoreCurrent = scoreCurrent + crystal4;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == scoreTarget){
         winner();
      }else if (scoreCurrent > scoreTarget){
         loser();
      }
   });
});