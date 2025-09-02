// write a java script pogram to get two numbers from the user , then get the minimum number by using min() function by using arrow function =>
let fristNumber = 30;
let secondNumber = 35;
const getMinimumNumber = (friNum , secNum) =>{
    console.log("The Frist Number Is = ",friNum);
    console.log("The Second Number Is = ",secNum);
    const minimumNumber = Math.min(friNum , secNum);
    console.log("The Minimum Number Is = ",minimumNumber);
};
getMinimumNumber(fristNumber , secondNumber);