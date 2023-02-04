const playButton = document.querySelector('#shoot');
const coverImage = document.querySelector('#spin');
const selection = document.querySelector('.selection');

const images = [
    'rock',
    'paper',
    'scissors'
];

// The animation that plays when the page starts
setInterval(() => {
    coverImage.src = `assets/${images[random(0,2)]}.png`;
}, 2000);

const spin = coverImage.animate([
    {transform: 'rotate(0)'},
    {transform: 'rotate(360deg)'} 
], {
    duration: 8000,
    iterations: Infinity
});


// The actual rock paper scissors part
playButton.addEventListener('click', () => {
    const fadeUp = coverImage.animate([
        {transform: 'translateY(0px)', opacity: 1},
        {transform: 'translateY(-100px)', opacity: 0}
    ], {
        duration: 1000,
        iterations: 1
    });
    const rock = document.createElement('img');
    const paper = document.createElement('img');
    const scissors = document.createElement('img');

    rock.src = 'assets/rock.png';
    paper.src = 'assets/paper.png';
    scissors.src = 'assets/scissors.png';

    fadeUp.addEventListener('finish', () => {
        spin.cancel();
        coverImage.remove();

        selection.appendChild(rock);
        selection.appendChild(paper);
        selection.appendChild(scissors);

        playButton.remove();
    });
});

// Random num generation
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

