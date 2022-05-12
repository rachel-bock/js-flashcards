const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck; //array of cards.
    this.turns = 0; // count of turns taken.
    this.correct = 0; // count of correct answers.
    this.currentCard = 0; // index of card in deck.
    this.incorrectGuesses = []; // array of id's of incorrect answers.
  }

  calculatePercentCorrect() {
    return ((this.correct / this.turns)*100).toFixed(0);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${calculatePercentCorrect()} % of the questions correctly!`);
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