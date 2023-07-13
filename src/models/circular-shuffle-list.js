class CircularShuffleList {
  
  constructor(elements) {
    this.initialElements = JSON.parse(JSON.stringify(elements));
    this.elements = elements;

    this.shuffle();
  }

  shuffle() {
    for (let i = this.elements.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const randomElement = this.elements[randomIndex];
      this.elements[randomIndex] = this.elements[i];
      this.elements[i] = randomElement;
    }
  }

  reset() {
    this.elements = JSON.parse(JSON.stringify(this.initialElements));
  }

  hashNext() {
    return this.elements.length > 0;
  }

  next() {
    if (!this.hashNext()) {
      this.reset();
    }
    return this.elements.pop();
  }

}

module.exports = CircularShuffleList;
