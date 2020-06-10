import Timer from './modules/Timer';

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const input = document.querySelector('#input');

let timer1 = new Timer(startButton, pauseButton, input);
