//upon new game, assign values to crystals
//upon new game, assign target score

//after clicking crystal, add value to current score


//if player wins, add 1 to totalWins
//if player loses, add 1 to totalLosses

$(document).ready(function(){
   var ranNumTarget = Math.ceil(Math.random()*(120-19)+19);
   var crystal1 = Math.ceil(Math.random()*(12-1)+1);
   var crystal2 = Math.ceil(Math.random()*(12-1)+1);
   var crystal3 = Math.ceil(Math.random()*(12-1)+1);
   var crystal4 = Math.ceil(Math.random()*(12-1)+1);
   var totalWins = 0;
   var totalLosses = 0;
   var scoreCurrent = 0;
   $('#scoreTarget').text(ranNumTarget);


   $(".crystal").click(function(){
      console.log("you clicked something");
      $('#totalWins').text(totalWins);
      $('#totalLosses').text(totalLosses);
   });

   function reset(){
      var ranNumTarget = Math.ceil(Math.random()*(120-19)+19);
      var crystal1 = Math.ceil(Math.random()*(12-1)+1);
      var crystal2 = Math.ceil(Math.random()*(12-1)+1);
      var crystal3 = Math.ceil(Math.random()*(12-1)+1);
      var crystal4 = Math.ceil(Math.random()*(12-1)+1);
   };
   

   function winner(){
      if (scoreCurrent === scoreTarget){
         alert("WINNER WINNER CHICKEN DINNER!");
         totalWins++;
         $('#totalWins').text(totalWins);
         reset;
      }
   };

   function loser(){
      if (scoreCurrent >= scoreTarget){
         alert("You lost. Pity.");
         totalLosses++;
         $('#totalLosses').text(totalLosses);
         reset;
      }
   };
   $('#crystal1').on('click', function(){
      console.log(crystal1);
      scoreCurrent = scoreCurrent + crystal1;
      $('#scoreCurrent').text(scoreCurrent);
   })
   
});

