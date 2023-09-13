class GuessingGame {
  constructor() {
    this.minRange = 0;
    this.maxRange = 0;
    this.result = 0;
  }

  setRange(min, max) {
    this.minRange = min;
    this.maxRange = max;
  }

  guess() {
    this.result = Math.round((this.minRange + this.maxRange) / 2);
    return this.result;
  }

  lower() {
    this.maxRange = this.result;
  }

  greater() {
    this.minRange = this.result;
  }
}

module.exports = GuessingGame;
