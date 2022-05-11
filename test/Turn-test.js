const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a object', function() {
    const turn = new Turn();
    expect(turn).to.be.a('object');

  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');    
  });


  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it(`should receive two arguments - a string that represents a user's guess to the question and a Card object for the current card in play.`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    
    expect(turn).to.have.property('guess', 'function');
    expect(turn).to.have.property('questionCard', card);
    expect(turn.guess).to.equal('function');
    expect(turn.questionCard).to.be.an.instanceof(Card);
  });

  it(`should return a guess`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.returnGuess()).to.equal('function');
  });

  it(`should return a card`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it(`should return a boolean indicating if the guess matches the answer on the card`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it(`should return a boolean indicating if the guess matches the answer on the card`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it(`should return 'incorrect!' when the guess is incorrect`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it(`should return correct! when the guess is correct`, function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.giveFeedback()).to.equal('correct!');
  });

});

