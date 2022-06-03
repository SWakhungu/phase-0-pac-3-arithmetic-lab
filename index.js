function add(){};
function subtract(){};
function multiply(){};
function divide(){};
function add(a, b){
    let sum = a + b
    return sum
};
function subtract(a,b){
    let subtraction = a - b
    return subtraction
};
function multiply(a,b){
    let multiplication = a * b
    return multiplication
};
function divide(a,b){
    let division = a / b
    return division
};

increment(699);
function increment(n){
    n++;
    return (n++);
}
decrement(700);
function decrement(n){
    n--;
    return (n--)
}
function makeInt(string){
    return parseInt(string,10);
 }

makeInt('hello')

function preserveDecimal(string){
    return parseFloat(string)
}
preserveDecimal("10.999")