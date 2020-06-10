class Timer {
  constructor(startButton, pauseButton, input) {
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.durationInput = input;

    this.startButton.addEventListener('click', e => {
      e.preventDefault();
      this.start();
    });

    this.pauseButton.addEventListener('click', e => {
      e.preventDefault();
      this.pause();
    });
  }
  start() {
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 1000);
    this.startButton.classList.add('btn--hidden');
  }

  tick() {
    this.timeRemaining = this.timeRemaining - 1;
  }

  pause() {
    clearInterval(this.interval);
    this.startButton.classList.remove('btn--hidden');
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
module.exports = Timer;
