const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

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
    const randomIndex = randomIntegerFromInterval(1, 5);
    //refs.body.style.backgroundColor = colors[randomIndex];

    colors.map((color, index) => {
            if (index === randomIndex) {
            refs.body.style.backgroundColor = color;
        }
    });
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};