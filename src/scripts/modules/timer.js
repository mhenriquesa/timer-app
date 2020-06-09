class Timer {
  constructor(startButton, pauseButton, input) {
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.input = input;

    this.startButton.addEventListener('click', e => {
      e.preventDefault();
      this.start();
    });
  }
  start() {
    this.tick();
  }

  tick() {
    console.log('1, 2, 3');
  }
}
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const input = document.querySelector('#input');

let timer1 = new Timer(startButton, pauseButton, input);
