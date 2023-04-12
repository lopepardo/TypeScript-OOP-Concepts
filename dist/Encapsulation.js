class Animal {
    makeSound_(sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    }
}
class Dog extends Animal {
    get name() {
        return this._name;
    }
    set name(name) {
        if (!name || name.length > 10) {
            throw new Error("Name invalid");
        }
        else {
            this._name = name;
        }
    }
    makeSound() {
        super.makeSound_("woof woof");
    }
}
Dog.species = "Canis Familaris";
class PetStore {
    constructor() {
        this._dogs = [new Dog()];
        this._dogs[0].name = "Fido";
    }
    printAllDogNames() {
        this._dogs.forEach((dog) => {
            console.log(dog.name);
        });
    }
    makeSomeSounds() {
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
