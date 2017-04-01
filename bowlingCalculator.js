/* jshint esversion: 6 */

function bowlingCalculator (a) {
  var frameTotal = 0;
  var gameTotal = 0;
  for(var i = 0; i < a.length; i++) {
    frameTotal = a[i].turn1 + a[i].turn2;
    gameTotal += frameTotal;
    strikeBonus = 0;
    if(a[i].turn1 < 10 && frameTotal === 10) {
      gameTotal += a[i + 1].turn1;
    } else if(a[i].turn1 === 10) {
      gameTotal += a[i + 1].turn1 + a[i + 1].turn2;
      console.log(gameTotal);
    }
  }
  return gameTotal;
}

module.exports = bowlingCalculator;