/*
Game Function:
- Player must guess the number between the min and max
- Player gets a certain amount of guesses
- Notify player of number of guesses remaining
- Notify the player of the correct answer if the player loses
- Let the player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if winning number
    if (guess === winningNum) {
        //Game Over - Won
        gameOver(true, `${winningNim} is correct, YOU WIN!`);

    } else {
        //Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //Game Over - Lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            //Game continues - Answer Wrong

            //Change border color
            guessInput.style.borderColor = 'red';

            //Clear Input
            guessInput.value = '';

            //Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

//Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable Input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //Set text color
    message.style.color = color;
    //Set message
    setMessage(msg);
}

//Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}