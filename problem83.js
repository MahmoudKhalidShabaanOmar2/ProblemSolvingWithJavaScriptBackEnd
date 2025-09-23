// write a java script to get number from the user , and then get the factorial of the number by using function method =>
number = 6;
function getFactorialOfNum(num){
    console.log(`The Number Is = ${num}`);
    let factorialOfNum = 1;
    for(var i=1 ; i <= number ; i++){
        factorialOfNum *= i;
    }
    console.log(`The Factorial Of ${num} Is = ${factorialOfNum}`);
};
getFactorialOfNum(number)