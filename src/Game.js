const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 1; //keeps track of current round.
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    // creates Cards.
    const theCards = []

    prototypeQuestions.forEach((card) => {
      theCards.push(card);
    });

    // Puts Cards in a Deck.
    const deck = new Deck(theCards);
    // Creates a new Round using the Deck.
    const round = new Round(deck);
    // invokes printMessage to display the message in the CLI.

    this.printMessage(deck, round);
    // invokes printQuestion to kick off our helper functions that allow interaction via the CLI.
    this.printQuestion(round);
  }
}

module.exports = Game;