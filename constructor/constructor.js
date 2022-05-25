function User (email,name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in');
    }
}

let userOne = new User('daniel@gmail.com','Daniel');
let userTwo = new User('peter@gmail.com','Peter');

console.log(userOne);
console.log(userTwo.login());