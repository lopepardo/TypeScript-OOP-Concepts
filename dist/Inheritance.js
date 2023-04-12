class Animal {
    constructor(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    makeSound_(sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    }
}
class Dog extends Animal {
    constructor(age, breed, playFetch) {
        super(age, breed);
        this.playFetch = playFetch;
    }
    makeSound_() {
        super.makeSound_("woof woof");
    }
    getAgeInHumanYears() {
        return this.age * 7;
    }
}
class Cat extends Animal {
    constructor(age, breed) {
        super(age, breed);
    }
    makeSound_() {
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
