class Animal {
  protected makeSound_(sound: string): void {
    console.log(sound);
    console.log(sound);
    console.log(sound);
  }
}

class Dog extends Animal {
  private _name!: string;
  static readonly species: string = "Canis Familaris";

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (!name || name.length > 10) {
      throw new Error("Name invalid");
    } else {
      this._name = name;
    }
  }

  makeSound(): void {
    super.makeSound_("woof woof");
  }
}

class PetStore {
  private _dogs: Array<Dog>;

  constructor() {
    this._dogs = [new Dog()];
    this._dogs[0].name = "Fido";
  }

  printAllDogNames(): void {
    this._dogs.forEach((dog) => {
      console.log(dog.name);
    });
  }

  makeSomeSounds(): void {
    let dog = new Dog();
    dog.makeSound(); // => 'woof woof' 'woof woof' 'woof woof'

    // let animal = new Animal();
    // animal.makeSound_(); // => NOT ALLOWED
  }
}

const MyPetStore = new PetStore();
console.log(MyPetStore);

console.log(Dog.species);

export {};
