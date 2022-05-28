class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log('Generic Animal Sound!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        super.makeSound();
        console.log('Woof,Woof!');
    }
}

const animalOne = new Animal("Rex");
const animalTwo = new Dog("Jeff");

animalOne.makeSound();
animalTwo.makeSound();
