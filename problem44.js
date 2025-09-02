// write a java script program to get the maximum number from two numbers by using max() function by using arrow function =>
let fristNumber = 87;
let secondNumber = 43;
const getMaximumNumber = (friNum , secNum) =>{
    console.log("The Frist Number Is = ",friNum);
    console.log("The Ssecond Number Is = ",secNum);
    const maximumNumber = Math.max(friNum , secNum);
    console.log("The Maximum Number Between The Two Numbers Is = ",maximumNumber);
};
getMaximumNumber(fristNumber , secondNumber);