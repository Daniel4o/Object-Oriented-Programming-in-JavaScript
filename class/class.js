class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

let userOne = new User('daniel@gmail.com', 'Daniel');
let userTwo = new User('peter@gmail.com', 'Peter');
let userThree = new User();
console.log(userOne);
console.log(userTwo);
console.log(userThree);
