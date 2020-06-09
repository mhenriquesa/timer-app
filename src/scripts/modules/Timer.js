class Timer {
  constructor(startButton, pauseButton, input) {
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.input = input;

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
    this.interval = setInterval(this.tick, 1000);
  }

  tick() {
    console.log('tick');
  }
  pause() {
    clearInterval(this.interval);
  }
}
module.exports = Timer;
