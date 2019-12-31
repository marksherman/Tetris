class Timer {
  constructor () {
    this.start = Date.now();
    this.period = 1000;
  }

  tick () {
    if (Date.now() > this.start + this.period) {
      this.start = Date.now();
      return true;
    } else {
      return false;
    }
  }
}
