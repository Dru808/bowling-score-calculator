/* jshint esversion: 6 */

const chai = require('chai');
const expect = chai.expect;

const bowlingCalculator = require('../bowlingCalculator.js');

describe('bowlingCalculator', () => {
  it('should be a function',  () => {
    console.log(bowlingCalculator);
    expect(bowlingCalculator).to.be.a('function');
  });

  it('should calculate game', () => {
    var result = bowlingCalculator([{
      turn1: 8,
      turn2: 1
    },{
      turn1: 3,
      turn2: 5
    }]);

    expect(result).to.equal(17);
  });

  it('should award bonus for picking up spares',() => {
    var result = bowlingCalculator([{
      turn1: 5,
      turn2: 5
    },{
      turn1: 4,
      turn2: 5
    },{
      turn1: 8,
      turn2: 2
    },{
      turn1: 3,
      turn2: 5
    }]);

    expect(result).to.equal(44);
  });

  it('should award bonus for strikes!!', () => {
    var result = bowlingCalculator([{
      turn1: 10,
      turn2: 0
    },{
      turn1: 4,
      turn2: 3
    },{
      turn1: 10,
      turn2: 0
    },{
      turn1: 9,
      turn2: 1
    },{
      turn1: 5,
      turn2: 3
    }]);

    expect(result).to.equal(67);
  });

  it('should give spare bonus on 10th frame', () => {
    var result = bowlingCalculator([{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 8,
      turn2: 2
    },{
      turn1: 3,
      turn2: 2
    }]);

    expect(result).to.equal(13);
  });

  it('should give a strike bonus on 10th frame', () => {
    var result = bowlingCalculator([{
        turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 0,
      turn2: 0
    },{
      turn1: 10,
      turn2: 0
    },{
      turn1: 3,
      turn2: 2
    }]);

    expect(result).to.equal(15);
  });

});
