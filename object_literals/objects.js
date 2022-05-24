let userOne = {
    email: 'dani@gmail.com',
    name: "Daniel",
    login() { //es6 feature: if we have function inside an object we can remove the function word
        console.log(this.name, 'has logged in');
    },
    logout() {
        console.log(this.name, 'has logged out with an email:', this.email);
    }
};
console.log(userOne.login());
console.log(userOne.logout());
