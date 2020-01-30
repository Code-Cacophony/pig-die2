
$(document).ready(function(){
  $("#dice1").submit(function(event){
    event.preventDefault();

    var dice = Math.floor(Math.random() * 6) + 1

    if (dice == 1) {
      dices1 = []
      $("#result1").text('Number 1')
    } else {
      dices1.push(dice)
      $("#result1").text(dice)
    }

    console.log(dices1)

})
   $("#hold1").submit(function(event) {
     event.preventDefault();

     sum = 0
     for (var i =0; i< dices1.length; i++){
       sum = dices1[i] + sum
     }
     sumDice1.push(sum)
     user1Score.addScores(sumDice1[sumDice1.length -1])
     dices1 = []
     console.log(user1Score)
     console.log(user1Score.dices[user1Score.dices.length -1])

     })

   $("#dice2").submit(function(event){
     event.preventDefault();

     var dice = Math.floor(Math.random() * 6) + 1

     if(dice == 1) {
       dices2 = []
       $("#result2").text('Number1')
     } else {
       dices2.push(dice)
       $("#result2").text(dice)
     }
     console.log(dices2)

   })

   $("#hold2").submit(function(event){
     event.preventDefault();

     sum = 0
     for (var x=0; x< dices2.length; x++) {
       sum = dices2[x] + sum
     }
     sumDice2.push(sum)
     user2Score.addScores(sumDice2[sumDice2.length -1])
     dices2 = []
     console.log(user2Score)
     console.log(user2Score.dices[user2Score.dices.length -1])
   })
});

dices1 = []
dices2 = []
sumDice1 = []
sumDice2 = []

var user1Score = new Score
var user2Score = new Score




function Score() {
  this.dices = []
  this.currentRound = 0;
}



Score.prototype.addScores = function(dice) {
  dice.round = this.assignRound();
  this.dices.push(dice)
}
Score.prototype.assignRound = function() {
  this.currentRound += 1;
  return this.currentRound;
}