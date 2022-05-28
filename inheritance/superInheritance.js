class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old.`);
    }
}

class Progammer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age);

        //custom behaviour
        this.yearsOfExperience = yearsOfExperience;
    }
    code() {
        console.log(`${this.name} is coding`)
    }
}

const progammers = [
    new Progammer("George",21,2),
    new Progammer("Jeff",35,10)
];

function developSoftware (progammers) {
    // for... of for [array, Map, Set, String] to iterate over values;
    // for... in for an array to iterate over a key;
    // for... in for objeects to enumerate its(object's) properties;
    for(let programmer of progammers) {
        programmer.code()
    }
}
developSoftware(progammers)

let personOne = new Person("John", "45");
let programmerOne = new Progammer("Daniel", "23", "1"); 
