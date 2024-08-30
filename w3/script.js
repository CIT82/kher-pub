let dog = document.getElementById('dog');
let scoreElement = document.getElementById('score');
let timeElement = document.getElementById('time');

let score = 0;
let timeLeft = 25; // 30 seconds timer
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
