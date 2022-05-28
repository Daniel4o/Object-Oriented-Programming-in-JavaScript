function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Drraw");
    }
}

const circle = new Circle(10);


for (let key in circle) {
    console.log(key, circle[key])
    //Outputs: methods/key and values
        
}

//Check if object has the key
if('radius' in circle)
console.log('Circle has a radius')