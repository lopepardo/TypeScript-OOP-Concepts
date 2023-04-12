"use strict";
class Animal {
}
class Dog extends Animal {
    getRelativeAge() {
        return this.age_ * 7;
    }
}
class Cat extends Animal {
    getRelativeAge() {
        return this.age_ * 6;
    }
}
