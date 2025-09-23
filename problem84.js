// write a java script program to get number from the user , and then get the factorial of the number by using arrow function method =>
const number = 7;
const getFactorialOfNum = (num) =>{
    console.log(`The Number Is = ${num}`);
    let factorialOfNum = 1;
    for(var i=1 ; i <= num ; i++){
        factorialOfNum *= i;
    };
    return`The Factorial Of ${num} Is = ${factorialOfNum}`;
};
console.log(getFactorialOfNum(number));