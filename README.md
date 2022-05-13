# Flashcards Project

A terminal based project that includes flashcards to quiz the player on technical content.


## Contributors

[Rachel Bock](https://www.linkedin.com/in/rachelbock)

## Screenshots

In the original project repo, there was this video of the program.  

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

The project specifications can be found at [Turing's website](https://frontend.turing.edu/projects/flash-cards.html).

## Technologies Used

This project has been built using vanilla ***JavaScript*** with Test Driven Development (TDD).

## Features

* Timer functionality - At the end of the game, how much time it took to complete the game (in minutes and seconds) is reported
* Tracks answers that were incorrect
* Compares the flashcard's actual answer to the player's answer to determine if the answer is correct or incorrect
* Reports back to the player whether or not the answer was correct


## Install and Setup Instructions

To use the application, clone the repository from GitHub.  Once you have cloned the repo, change into that directory and install the library dependencies by running `npm install` in the terminal.

Once the installation of the dependencies is completed, simply enter `node index.js` in the terminal to start the program.

When the program starts, you'll see a Welcome message in the terminal followed by the first question and answer options.

To run the tests for this application, use the `npm test` command.  The test results will output to the terminal.

## Potential Future Features or Additions

The following abilities and features may be potentially added in the future.

* Choose from more than one deck of cards to use
* Give the player correct answers when the incorrect one was selected
* Review questions with incorrect answers
* Redo the questions that were answered incorrectly
* Redo the round with the same deck if less than 90% of the answers were correct
* Count how many tries it takes to get the answer incorrect
* Having multiple rounds with multiple datasets for more practice on other topics
