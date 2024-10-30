function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controlsContainer = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');

const createButton = controlsContainer.querySelector('[data-create]');
const destroyButton = controlsContainer.querySelector('[data-destroy]');
const input = controlsContainer.querySelector('input');

function createBoxes(amount) {
  const boxSize = 30;
  const boxes = Array.from({ length: amount }, (_, index) => {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize + index * 10}px`;
    box.style.height = `${boxSize + index * 10}px`;
    return box;
  });

  boxesContainer.append(...boxes);
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
