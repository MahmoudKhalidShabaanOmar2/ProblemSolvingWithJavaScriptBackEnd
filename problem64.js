// write a java script program to get the sum of two numbers by using arrow function method =>
const fristNumber = 50;
const secondNumber = 80;
const sumOfNumbers = (friNum , secNum) =>{
    console.log(`The Frist Number Is = ${friNum}`);
    console.log(`The Second Number Is = ${secNum}`);
    const sumOfNums = friNum + secNum;
    return(`The Sum Of The Frist Number , And The Second Number Is ${sumOfNums}`);
};
console.log(sumOfNumbers(fristNumber , secondNumber));