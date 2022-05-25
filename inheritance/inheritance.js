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
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}
//extends- It runs the constructor in User to give all the properties and
//associate all the different methods when created
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

var userOne = new User('daniel@gmail.com', 'Daniel');
var userTwo = new User('peter@gmail.com', 'Peter');
var admin = new Admin('george@gmail.com', 'George');


var users = [userOne, userTwo, admin];
admin.deleteUser(userOne)
console.log(users)