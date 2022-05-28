class Square {
    constructor (width) {
        this.width = width;
        this.height = width;
        this.numOfRequestsForArea = 0;
    }

    get area () {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area (area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let mySquare = new Square(4);
console.log(mySquare.area);

// converts the value 4 into 25
mySquare.area = 25;
console.log(mySquare.area);
console.log(mySquare.area);
console.log(mySquare.area);
console.log(mySquare.numOfRequestsForArea);