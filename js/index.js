const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null
let isActive = false

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyRefs: document.querySelector('body')
}

refs.startBtn.addEventListener('click', onStartClick)
refs.stopBtn.addEventListener('click', onStopClick)

function onStartClick() {
  if (isActive) {
    return
  }
  isActive = true
  intervalId = setInterval(changeBodyColor, 1000)
}

function onStopClick() {
  clearInterval(intervalId)
  isActive = false
}

function changeBodyColor() {
   refs.bodyRefs.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

