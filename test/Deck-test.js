const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it(`should be a function`, function() {
    expect(Deck).to.be.a('function');
  });
  
  it('should be a object', function() {
    const deck = new Deck();
    
    expect(deck).to.be.a('object');
  });

  it(`should hold an array of Card objects`, function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = new Deck([card1, card2, card3]);
    
    expect(deck.deck.length).to.equal(3);
    expect(deck.deck[0]).to.deep.equal(card1);
    expect(deck.deck[1]).to.deep.equal(card2);
    expect(deck.deck[2]).to.deep.equal(card3);
  });

  it(`should know how many cards are in the deck`, function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = new Deck([card1, card2, card3]);
    
    expect(deck.countCards()).to.equal(3);
  });
});