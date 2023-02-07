let userScore = 0;
let compScore = 0;
let activeMode = 0;

const compChoice_img =  document.querySelector('#comp-choice > img');
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreboard_div = document.querySelector('.scores');
const infinite_a = document.querySelector('#infinite');
const bestThree_a = document.querySelector('#three');
const bestFive_a = document.querySelector('#five');
const prompt_p =document.querySelector('.result > p')
const result_h2 = document.querySelector('.result > h2');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

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

switch (activeMode) {
    case 1:
        // Add
    case 2:
        // Add
}

// Mode selection
// Note: I'm pretty sure this can be done more efficiently, but I have yet to find a way

infinite_a.addEventListener('click', function() {
    infinite_a.classList.add('current');
    bestThree_a.classList.remove('current');
    bestFive_a.classList.remove('current');

    activeMode = 0;
    resetScore();
})

bestThree_a.addEventListener('click', function() {
    infinite_a.classList.remove('current');
    bestThree_a.classList.add('current');
    bestFive_a.classList.remove('current');

    activeMode = 1;
    resetScore();
})

bestFive_a.addEventListener('click', function() {
    infinite_a.classList.remove('current');
    bestThree_a.classList.remove('current');
    bestFive_a.classList.add('current');

    activeMode = 2;
    resetScore();
})

rock_div.addEventListener('click', function() {
    startGame('r');
})

paper_div.addEventListener('click', function() {
    startGame('p');
})

scissors_div.addEventListener('click', function() {
    startGame('s');
})