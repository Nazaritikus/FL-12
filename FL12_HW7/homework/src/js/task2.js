let totalPrize = 0;
let maxPrize = 100;
let averagePrize = 50;
let minPrize = 25;
let prizeMultiplier = 2;
let maxRange = 8;
let rangeIncrement = 4;
let numberOfAttempts = 3;
let randomNumber = 0;
let winOrNot = false;
let again = false;

if (confirm('Do you want to play a game?')) {
    do {
        randomNumber = Math.round(Math.random() * maxRange);
        for (let i = 0; i < numberOfAttempts; i++) {
            if (i === 0) {
                if (randomNumber === Math.round(prompt(
                        ' Choose a roulette pocket number from 0 to ' + maxRange +
                        '\n Attempts left:' + (numberOfAttempts - i) +
                        '\n Total prize: ' + totalPrize +
                        '$\n Possible prize on current attempt:' + maxPrize + '$'))) {
                    totalPrize += maxPrize;
                    i = numberOfAttempts;
                    winOrNot = true;
                } else {
                    alert('You almost catch the correct number.');
                }
            } else if (i === 1) {
                if (randomNumber === Math.round(prompt(
                        'Choose a roulette pocket number from 0 to ' + maxRange +
                        '\n Attempts left:' + (numberOfAttempts - i) + '\n Total prize: ' + totalPrize +
                        '$\n Possible prize on current attempt:' + averagePrize + '$'))) {
                    totalPrize += averagePrize;
                    i = numberOfAttempts;
                    winOrNot = true;
                } else {
                    alert('You almost catch the correct number.');
                }
            } else {
                if (randomNumber === Math.round(prompt(
                        'Choose a roulette pocket number from 0 to ' + maxRange +
                        '\n Attempts left:' + (numberOfAttempts - i) + '\n Total prize: ' + totalPrize +
                        '$\n Possible prize on current attempt:' + minPrize + '$'))) {
                    totalPrize += minPrize;
                    i = numberOfAttempts;
                    winOrNot = true;
                } else {
                    alert('You almost catch the correct number.');
                }
            }
        }
        if (winOrNot) {
            again = confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$.' +
                '\nDo you want to continue?');
            winOrNot = false;
        } else {
            again = confirm('Thank you for your participation. Your prize is: ' + totalPrize + '$.' +
                '\nDo you want to continue?');
        }
        if (again) {
            maxPrize *= prizeMultiplier;
            averagePrize *= prizeMultiplier;
            minPrize *= prizeMultiplier;
            maxRange += rangeIncrement;
        }
    } while (again);
} else {
    alert('You did not become a billionaire, but can.');
}