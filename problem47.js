// write a java script program to get three numbers , and then get the maximum number between the three numbers by using function method =>
let fristNumber = 20;
let secondNumber = 50;
let thirdNumber = 43;
const getMaximumNumber = (friNum , secNum , thrNum) =>{
    console.log("The Frist Number Is = ",friNum);
    console.log("The Second Number Is = ",secNum);
    console.log("The Third Number Is = ",thrNum);
    if((friNum > secNum) && (friNum > thrNum)){
        console.log("The Frist Number Is The Maximum Number Is = ",friNum);
    }
    else if((secNum > friNum) && (secNum > thrNum)){
        console.log("The Second Number Is The Maximum Number Is = ",secNum);
    }
    else{
        console.log("The Third Number Is The Maximum Number Is = ",thrNum);
    };
};
getMaximumNumber(fristNumber , secondNumber , thirdNumber);