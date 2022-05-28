function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

}

//Defines login mehod in the prototype of User
User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.login = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

//Puts variables in an array
function Admin(...args) {
    User.apply(this, args)
    //property for admin only
    this.role = 'super admin';
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.email != u.email;
    });
};

let userOne = new User('daniel@gmail.com', 'Daniel');
let userTwo = new User('peter@gmail.com', 'Peter');
let admin = new Admin('nick@gmail.com', 'Nick');

var users = [userOne, userTwo, admin];

console.log(userOne);
console.log(userTwo.login());
console.log(admin.login());
console.log(users);
console.log(admin.deleteUser(users[1]));
console.log(users)