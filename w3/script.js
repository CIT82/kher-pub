let dog = document.getElementById('dog');
let scoreElement = document.getElementById('score');
let timeElement = document.getElementById('time');

let score = 0;
let timeLeft = 25; // 25 seconds timer
let speed = 987; // initial speed of doggo movement

function moveDog() {
    let x = Math.floor(Math.random() * (550));
    let y = Math.floor(Math.random() * (350));
    dog.style.left = x + 'px';
    dog.style.top = y + 'px';
}

function increaseSpeed() {
    if (speed > 460) {
        speed -= 35;
    }
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

function startGame() {
    dog.addEventListener('click', () => {
        updateScore();
        increaseSpeed();
    });

    let gameInterval = setInterval(() => {
        moveDog();
    }, speed);

    let countdown = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            clearInterval(countdown);
            alert('Game Over! Your score is ' + score);
        }
    }, 1000);
}

startGame();