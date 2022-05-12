const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe(`Round Class`, function() {
  it(`should be a function`, function() {

    expect(Round).to.be.a('function');

  });

  it(`should be an instance of an object`, function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it(`should update a turns count`, function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.turns).to.be.equal(0);
    
    round.takeTurn('sea otter'); // => 'correct!'

    expect(round.turns).to.be.equal(1);

  });

  it(`should evaluate guesses and return feedback`, function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
  
    const output = round.takeTurn('sea otter');
    
    expect(output).to.be.equal('correct!'); // => 'correct!'     
    
  });

  it(`should store ids of incorrect guesses`, function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.turns).to.be.equal(0);
    
    round.takeTurn('pug'); // => 'incorrect!'

    expect(round.turns).to.be.equal(1);
    expect(round.incorrectGuesses.length).to.be.equal(1);
    expect(round.incorrectGuesses[0]).to.deep.equal(1);
    
  });

  it(`should provide feedback regarding whether the guess is correct or not`, function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
  
    const output = round.takeTurn('pug'); // => 'incorrect!'

    expect(round.turns).to.be.equal(1);
    expect(round.incorrectGuesses.length).to.be.equal(1);
    expect(output).to.be.equal('incorrect!');   
  });

  it(`should calculate the percentage of correct guesses`, function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    let output = round.takeTurn('sea otter'); // => 'correct!'

    expect(output).to.be.equal('correct!');

    output = round.takeTurn('spleen'); // => 'incorrect!'

    const percentage = round.calculatePercentCorrect();

    expect(percentage).to.be.equal(50);
    expect(output).to.be.equal('incorrect!');
  });

  it(`should print the results of the round to the console once the round is over`, function() {

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    let output = round.takeTurn('sea otter'); // => 'correct!'
    output = round.takeTurn('spleen'); // => 'incorrect!'
    output = round.takeTurn('listening to music'); // => 'incorrect!'

    round.endRound();
    
  });
});