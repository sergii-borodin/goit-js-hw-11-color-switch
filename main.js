const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let randomColor = null;
let intervalId = null;

const refs = {
    startBtn : document.getElementById('startBtn'),
    stopBtn: document.getElementById('stopBtn'),
    body : document.getElementById('body')
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(e) {
    e.target.setAttribute("disabled", "disabled");
    intervalId = setInterval(() => {
        changeBodyColor();
    }, 1000);
};

function onStopBtnClick(e) {
    refs.startBtn.setAttribute("enabled", "enabled");
    refs.startBtn.removeAttribute("disabled", "disabled");
    clearInterval(intervalId);
}

function changeBodyColor() {
    
    let currentIndex = randomIntegerFromInterval(0, 5);
    refs.body.style.backgroundColor = randomColor;
    randomColor = colors[currentIndex];
    
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};