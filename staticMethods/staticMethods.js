class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    static equals(a,b) {
        return a.width * a.height === b.width * b.height;
    }
    static isValidDimensions ( width, height) {
        return width === height;
    }
}

let squareOne = new Square(8);
let squareTwo = new Square(6);
let squareThree = new Square(8);

console.log(Square.equals(squareOne,squareTwo));
console.log(Square.equals(squareOne,squareThree));

console.log(Square.isValidDimensions(6,7))