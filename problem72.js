// write a java script program to get two numbers from the user , and then swapping the two numbers by using arrow function method =>
let fristNumber = 90;
let secondNumber = 21;
const swappingValuesOfNumbers = (friNum , secNum) =>{
    console.log("The Values Of The Two Numbers Before Swapping Values Of The Two Numbers Is : ");
    console.log("The Frist Number Is = ",friNum);
    console.log("The Second Number Is = ",secondNumber);
    let temporaryValue = friNum;
    friNum = secNum;
    secNum = temporaryValue;
    console.log("The Values Of The Two Numbers After Swapping Values Of The Two Numbers Is : ");
    return `The Frist Number Is = ${friNum} , And The Second Number Is = ${secNum}`;
}
console.log(swappingValuesOfNumbers(fristNumber , secondNumber));