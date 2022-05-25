class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // Method chaining
   login() {
       console.log(this.email, 'just logged in');
        return this;
    } 
   logout(){
        console.log(this.email, 'just logged out');
        return this;
         }
   updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

let userOne = new User('daniel@gmail.com', 'Daniel');
let userTwo = new User('peter@gmail.com', 'Peter');
let userThree = new User();

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userOne.login());
console.log(userTwo.logout());
console.log(userOne.login().updateScore().updateScore().logout())