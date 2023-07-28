let score = 0;

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function moveBox() {
  const box = document.getElementById('box');
  const maxX = window.innerWidth - 50;
  const maxY = window.innerHeight - 50;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

function handleClick() {
  score++;
  updateScore();
  moveBox();
}

const box = document.getElementById('box');
box.addEventListener('click', handleClick);

updateScore();
moveBox();
