const Timer = require('./modules/Timer');

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const input = document.querySelector('#input');
const circle = document.getElementById('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;

circle.setAttribute('stroke-dasharray', perimeter);

let duration;
let timer1 = new Timer(startButton, pauseButton, input, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log('Completed!');
  },
});
