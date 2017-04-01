/* jshint esversion: 6 */

function bowlingCalculator (a) {
  var frameTotal = 0;
  var gameTotal = 0;
  for(var i = 0; i < a.length; i++) {
    frameTotal = a[i].turn1 + a[i].turn2;
    gameTotal += frameTotal;
    strikeBonus = 0;
    //spare bonus
    if(a[i].turn1 < 10 && frameTotal === 10) {
      if(i === 9) {
        gameTotal += a[i + 1].turn1;
        return gameTotal;
      } else {
        gameTotal += a[i + 1].turn1;
        }
      //strike bonus
    } else if(a[i].turn1 === 10) {
      if(i === 9) {
        gameTotal += a[i + 1].turn1 + a[i + 1].turn2;
        return gameTotal;
      } else {
        gameTotal += a[i + 1].turn1 + a[i + 1].turn2;
        }
      }
  }

  return gameTotal;
}

module.exports = bowlingCalculator;