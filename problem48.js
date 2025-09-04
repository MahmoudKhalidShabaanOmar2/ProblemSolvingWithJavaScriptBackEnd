// write a java script to get three numbers , and then get the minimum number by using arrow function method =>
let fristNumber = -34;
let secondNumber = -23;
let thirdNumber = -32;
const getMinimumNumber = (friNum , secNum , thrNum) => {
    console.log("The Frist Number Is = ",friNum);
    console.log("The Second Number Is = ",secNum);
    console.log("The Third Number Is = ",thrNum);
    if((friNum < secNum) && (friNum < thrNum)){
        console.log("The Frist Number Is The Minimum Number Is = ",friNum);
    }
    else if((secNum < thrNum) && (secNum < thrNum)){
        console.log("The Second Number Is The Minimum Number Is = ",secNum);
    }
    else{
        console.log("The Third Number Is The Minimum Number Is = ",thrNum);
    };
};
getMinimumNumber(fristNumber , secondNumber , thirdNumber);