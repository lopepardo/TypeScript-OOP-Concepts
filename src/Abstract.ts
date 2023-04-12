abstract class Animal {
  protected age_!: number;
  abstract getRelativeAge(): number;
}

class Dog extends Animal {
  getRelativeAge(): number {
    return this.age_ * 7;
  }
}

class Cat extends Animal {
  getRelativeAge(): number {
    return this.age_ * 6;
  }
}
