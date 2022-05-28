//Primitive types
let x = 10;
let y = x;

x = 20;
// Output:  x 20 y 10


//Reference types
let a= {value:10};
let b = a;
x.value = 20;
//Output: a {value:20} b{value:20}


//Primitive
let number = 10;
function increase(number) {
    number++;
}
increase(number);
//Output 10


//Reference
let obj = {value:10};

function increaseTwo(obj){
    obj.value++;
}
increaseTwo(obj);
//Output {value:11};