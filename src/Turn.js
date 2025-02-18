class Turn {
    constructor(guess, questionCard) {
        this.guess = guess;
        this.questionCard = questionCard;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.questionCard;
    }

    evaluateGuess() {
        if (this.guess === this.questionCard.correctAnswer) {
            return true;
        }
        return false;
    }

    giveFeedback() {
        if (this.evaluateGuess()) {
            return 'correct!';
        }
        return 'incorrect!';
    }
}

module.exports = Turn;