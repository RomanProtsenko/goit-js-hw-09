 const refs = {
    startBtnEl: document.querySelector('button[data-start]'),
    stopBtnEl: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

let intervalId = null;
refs.stopBtnEl.disabled = true;
const DELAY = 1000;

refs.startBtnEl.addEventListener('click', onStartBtnChangeColor);
refs.stopBtnEl.addEventListener('click', onStopBtnChangeColor);

function onStartBtnChangeColor() {
    refs.startBtnEl.disabled = true;
    refs.stopBtnEl.disabled = false;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, DELAY);
}

function onStopBtnChangeColor() {
    refs.startBtnEl.disabled = false;
    refs.stopBtnEl.disabled = true;
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
