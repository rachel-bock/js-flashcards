const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck; //array of cards.
    this.turns = 0; // count of turns taken.
    this.correct = 0; // count of correct answers.
    this.currentCard = 0; // index of card in deck.
    this.incorrectGuesses = []; // array of id's of incorrect answers.
    this.start = Date.now();  // store beginning time in milliseconds.  There are 1,000 milliseconds in a second.
    this.stop = 0;  // store ending time.
  }

  calculatePercentCorrect() {
    return parseInt(((this.correct / this.turns)*100).toFixed(0));
  }

  endRound() {
    var minutes = 0;
    var seconds = 0;
    var time = 0;

    this.stop = Date.now();     // Get current time.

    time = this.stop - this.start; //time is the number of milliseconds elapse during the game.  

    seconds = Math.floor(time / 1000);
    minutes = Math.floor(time / 60000);

    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);

    console.log(`** Game  over! ** You completed the game in ${minutes} minutes and ${seconds} seconds.`);
  }

  returnCurrentCard() {
    // What if the current card is the last one in the deck?

    return this.deck.deck[this.currentCard];
  }

  takeTurn(guess) {
    let questionCard = this.returnCurrentCard();
    let turn = new Turn(guess, questionCard);
    let outcome = turn.giveFeedback();

    if(outcome === 'incorrect!') {
      this.incorrectGuesses.push(questionCard.id);
    } else {
      this.correct++;
    }

    this.turns++;
    this.currentCard++;
    
    return outcome;
  }
}

module.exports = Round;