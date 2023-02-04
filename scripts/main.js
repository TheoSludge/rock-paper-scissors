let userScore = 0;
let compScore = 0;

const compChoice_img =  document.querySelector('#comp-choice > img');
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreboard_div = document.querySelector('.scores');
const prompt_p =document.querySelector('.result > p')
const result_h2 = document.querySelector('.result > h2');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

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

rock_div.addEventListener('click', function() {
    startGame('r');
})

paper_div.addEventListener('click', function() {
    startGame('p');
})

scissors_div.addEventListener('click', function() {
    startGame('s');
})