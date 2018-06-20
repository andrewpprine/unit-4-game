//upon new game, assign values to crystals
//upon new game, assign target score

//after clicking crystal, add value to current score

//if current score < target score, continue
//if current score = target score, player wins
//if current score > target score, player loses

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

   $(".crystal").click(function(){
      console.log("you clicked something");
      $('#scoreTarget').text(ranNumTarget);
      $('#totalWins').text(totalWins);
      $('#totalLosses').text(totalLosses);
   });
});


