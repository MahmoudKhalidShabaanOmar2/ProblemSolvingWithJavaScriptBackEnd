// write a java script program to get two string numbers , and then converted to numeric , and at the end get the sum of the two numbers by using arrow function method =>
let fristStringNumber = "20";
let secondStringNumber = "67";
const sumOfTwoNumbers = (friStrNum , secStrNum) => {
    console.log("The Frist String Number Is : ",friStrNum);
    let fristNumber = Number(friStrNum);
    console.log("The Frist Number Is = ",fristNumber);
    console.log("The Second String Number Is = ",secStrNum);
    let secondNumber = Number(secStrNum);
    console.log("The Second Number Is = ",secondNumber);
    const sumOfNumbers = fristNumber + secondNumber;
    console.log("The Sum Of The Two Numbers Is = ",sumOfNumbers);
}
sumOfTwoNumbers(fristStringNumber , secondStringNumber);