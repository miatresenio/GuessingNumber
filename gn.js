// This file isn't used in the updated HTML, but here's a refined version for a similar game

document.addEventListener('DOMContentLoaded', function() {
    const answer = Math.floor(Math.random() * 10) + 1;
    let guesses = 0;

    function startGame() {
        let guess;
        do {
            guess = Number(prompt("Guess from 1 - 10"));
            guesses++;
            if (guess === answer) {
                alert("Correct! It took you " + guesses + " guesses");
            } else if (guess > answer) {
                alert("Too High!");
            } else {
                alert("Too Low!");
            }
        } while (guess !== answer);
    }

    startGame();
});
