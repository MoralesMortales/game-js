const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const display = document.getElementById('display');

let user_counter = 0;
let computer_counter = 0; 

const options = ['rock', 'paper', 'scissor'];

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissor.addEventListener('click', () => game('scissor'));

function game(choice) {
    
    let user_score = document.getElementById('user_score');
    let computer_score = document.getElementById('computer_score');

    const computerChoice = options[Math.floor(Math.random() * 3)];
    if (choice === computerChoice) {
        display.textContent = 'Draw';
    } else if (
    (choice === 'rock' && computerChoice === 'scissor') || 
    (choice === 'paper' && computerChoice === 'rock') || 
    (choice === 'scissor' && computerChoice === 'paper')
    ) {
        display.textContent = 'You win this round';
        user_counter++;
    } else {
        display.textContent = 'You lose this round';
        computer_counter++;
    }

    user_score.textContent = `User score: ${user_counter}`;
    computer_score.textContent = `PC score: ${computer_counter}`
    
    if (user_counter === 3) {
        display.textContent = 'You win the game';
        resetGame();
    } else if (computer_counter === 3) {
        display.textContent = 'You lose the game';
        resetGame();
    }

}

function resetGame() {
    user_counter = 0;
    computer_counter = 0;

    const user_score = document.getElementById('user_score');
    const computer_score = document.getElementById('computer_score');

    user_score.textContent = 'User score: 0';
    computer_score.textContent = 'PC score: 0';
}