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
      ranNumTarget;
      crystal1 = Math.ceil(Math.random()*(12-1)+1);
      crystal2 = Math.ceil(Math.random()*(12-1)+1);
      crystal3 = Math.ceil(Math.random()*(12-1)+1);
      crystal4 = Math.ceil(Math.random()*(12-1)+1);
      scoreCurrent = 0;
   };
   
   function winner(){
         alert("WINNER WINNER CHICKEN DINNER!");
         totalWins++;
         $('#totalWins').text(totalWins);
         reset();
   };

   function loser(){
         alert("You lost. Pity.");
         totalLosses++;
         $('#totalLosses').text(totalLosses);
         reset();
   };

   $('#crystal1').on('click', function(){
      console.log(crystal1);
      scoreCurrent = scoreCurrent + crystal1;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == ranNumTarget){
         winner();
      }else if (scoreCurrent > ranNumTarget){
         loser();
      }
   });
   $('#crystal2').on('click', function(){
      console.log(crystal2);
      scoreCurrent = scoreCurrent + crystal2;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == ranNumTarget){
         winner();
      }else if (scoreCurrent > ranNumTarget){
         loser();
      }
   });
   $('#crystal3').on('click', function(){
      console.log(crystal3);
      scoreCurrent = scoreCurrent + crystal3;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == ranNumTarget){
         winner();
      }else if (scoreCurrent > ranNumTarget){
         loser();
      }
   });
   $('#crystal4').on('click', function(){
      console.log(crystal4);
      scoreCurrent = scoreCurrent + crystal4;
      $('#scoreCurrent').text(scoreCurrent);
      if (scoreCurrent == ranNumTarget){
         winner();
      }else if (scoreCurrent > ranNumTarget){
         loser();
      }
   });
   
});


// $( document ).ready(function(){

//  //sets up click for jewels
//    $('#one').on ('click', function(){
//      userTotal = userTotal + num1;
//      console.log("New userTotal= " + userTotal);
//      $('#finalTotal').text(userTotal); 
//            //sets win/lose conditions
//          if (userTotal == Random){
//            yay();
//          }
//          else if ( userTotal > Random){
//            loser();
//          }   
//    })  
//    $('#two').on ('click', function(){
//      userTotal = userTotal + num2;
//      console.log("New userTotal= " + userTotal);
//      $('#finalTotal').text(userTotal); 
//          if (userTotal == Random){
//            yay();
//          }
//          else if ( userTotal > Random){
//            loser();
//          } 
//    })  
//    $('#three').on ('click', function(){
//      userTotal = userTotal + num3;
//      console.log("New userTotal= " + userTotal);
//      $('#finalTotal').text(userTotal);
//  //sets win/lose conditions
//            if (userTotal == Random){
//            yay();
//          }
//          else if ( userTotal > Random){
//            loser();
//          } 
//    })  
//    $('#four').on ('click', function(){
//      userTotal = userTotal + num4;
//      console.log("New userTotal= " + userTotal);
//      $('#finalTotal').text(userTotal); 
       
//            if (userTotal == Random){
//            yay();
//          }
//          else if ( userTotal > Random){
//            loser();
//          }
//    });   
//  }); 