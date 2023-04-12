class Animal {
  age: number;
  breed: string;

  constructor(age: number, breed: string) {
    this.age = age;
    this.breed = breed;
  }

  makeSound_(sound: string): void {
    console.log(sound);
    console.log(sound);
    console.log(sound);
  }
}

class Dog extends Animal {
  playFetch: boolean;

  constructor(age: number, breed: string, playFetch: boolean) {
    super(age, breed);
    this.playFetch = playFetch;
  }

  makeSound_(): void {
    super.makeSound_("woof woof");
  }

  getAgeInHumanYears(): number {
    return this.age * 7;
  }
}

class Cat extends Animal {
  constructor(age: number, breed: string) {
    super(age, breed);
  }

  makeSound_(): void {
    super.makeSound_("meow meow");
  }
}

const perrito = new Dog(4, "Labrador", true);
console.log("object", perrito);
console.log("perrito age in human years: ", perrito.getAgeInHumanYears());
console.log("perrito say: ");
console.log(perrito.makeSound_());

console.log("---------------------------------------------");

const micho = new Cat(2, "Persa");
console.log("object", micho);
console.log("micho say: ");
console.log(micho.makeSound_());

export {};
