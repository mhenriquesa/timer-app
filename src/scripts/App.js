const Timer = require('./modules/Timer');

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const input = document.querySelector('#input');
const circle = document.getElementById('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;

circle.setAttribute('stroke-dasharray', perimeter);

let valueFromUser = input.value;
let currentOffset = 0;

let timer1 = new Timer(startButton, pauseButton, input, {
  onStart() {
    console.log('timer Started');
  },
  onTick() {
    currentOffset += -(perimeter / valueFromUser);
    circle.setAttribute('stroke-dashoffset', currentOffset);
    console.log('tick...');
  },
  onComplete() {
    console.log('Completed!');
  },
});
console.log(circle);
