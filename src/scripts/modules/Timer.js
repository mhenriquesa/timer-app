class Timer {
  constructor(startButton, pauseButton, input, callbacks) {
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.durationInput = input;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

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
    this.onStart();
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 1000);
    this.startButton.classList.add('btn--hidden');
  }

  tick() {
    if (this.timeRemaining === 0) {
      this.onComplete();
      return this.pause();
    }
    this.timeRemaining -= 1;
    this.onTick();
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
