let userScore = 0;
let compScore = 0;
let activeMode = 0;

// Div
const scoreboard_div = document.querySelector('.scores');
const endGameScreen_div = document.querySelector('.end-game-screen');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

// Span
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');

// Link
const infinite_a = document.querySelector('#infinite');
const bestThree_a = document.querySelector('#three');
const bestFive_a = document.querySelector('#five');

// Misc.
const prompt_p =document.querySelector('.result > p')
const result_h2 = document.querySelector('.result > h2');
const compChoice_img =  document.querySelector('#comp-choice > img');
const playAgain_button = document.querySelector('.play-again');


// Game logic

function startGame(userSelection) {
    const compSelection = random();

    if (compSelection === 'r') compChoice_img.src = 'assets/rock.png';
    else if (compSelection === 'p') compChoice_img.src = 'assets/paper.png';
    else if (compSelection === 's') compChoice_img.src = 'assets/scissors.png';

    switch(userSelection + compSelection) {
        case 'sp':
        case 'pr':
        case 'rs':
            victory(userSelection, compSelection);
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            draw(userSelection, compSelection);
            break;
        default:
            loss(userSelection, compSelection);
    }
}

// Outcomes

function victory(u, c) {
    userScore++;
    userScore_span.innerHTML = userScore;
    prompt_p.textContent = `${convertChoice(u)} beats ${convertChoice(c)}!`;
    result_h2.textContent = 'You win';
}

function loss(u, c) {
    compScore++;
    compScore_span.innerHTML = compScore;
    prompt_p.textContent = `${convertChoice(c)} beats ${convertChoice(u)}!`;
    result_h2.textContent = 'You lose';
}

function draw(u, c) {
    prompt_p.textContent = `You both chose ${convertChoice(c)}!`;
    result_h2.textContent = 'It\'s a draw';
}

// Helper functions

function random() {
    const moves = ['r', 'p', 's'];
    const num = Math.floor(Math.random() * 3);
    return moves[num];
}

function convertChoice(choice) {
    if (choice === 'r') return 'Rock';
    if (choice === 'p') return 'Paper';
    return 'Scissors';
}

function resetScore() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function checkScore() {
    switch (activeMode) {
        case 1:
            if (userScore > 1 || compScore > 1) {
                endGameScreen_div.classList.toggle('visible');
            }
        case 2:
            if (userScore > 2 || compScore > 2) {
                endGameScreen_div.classList.toggle('visible');
            }
    }
}

rock_div.addEventListener('click', function() {
    startGame('r');
    checkScore();
})

paper_div.addEventListener('click', function() {
    startGame('p');
    checkScore();
})

scissors_div.addEventListener('click', function() {
    startGame('s');
    checkScore();
})

playAgain_button.addEventListener('click', function() {
    resetScore();
    endGameScreen_div.classList.toggle('visible');
})

// Mode selection
// Note: I'm pretty sure this can be done more efficiently, but I have yet to find a way

infinite_a.addEventListener('click', function() {
    infinite_a.classList.add('current');
    bestThree_a.classList.remove('current');
    bestFive_a.classList.remove('current');

    endGameScreen_div.classList.remove('visible');

    activeMode = 0;
    resetScore();
})

bestThree_a.addEventListener('click', function() {
    infinite_a.classList.remove('current');
    bestThree_a.classList.add('current');
    bestFive_a.classList.remove('current');

    endGameScreen_div.classList.remove('visible');

    activeMode = 1;
    resetScore();
})

bestFive_a.addEventListener('click', function() {
    infinite_a.classList.remove('current');
    bestThree_a.classList.remove('current');
    bestFive_a.classList.add('current');

    endGameScreen_div.classList.remove('visible');

    activeMode = 2;
    resetScore();
})