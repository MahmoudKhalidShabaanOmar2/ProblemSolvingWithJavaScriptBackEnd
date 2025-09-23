// write a java script program to get three numbers from the user , and then get the maximum number between the three numbers by using function method =>
const fristNumber = 45;
const secondNumber = 56;
const thirdNumber = 23;
function getMaximumNumber(friNum , secNum , thrNum){
    console.log(`The Frist Number Is = ${friNum}`);
    console.log(`The Second Number Is = ${secNum}`);
    console.log(`The Third Number Is = ${thrNum}`);
    if((friNum > secNum) && (friNum > thrNum)){
        console.log(`The Frist Number Is The Maximum Number , Because The Frist Number Is = ${friNum}`);
    }
    else if((secNum > friNum) && (secNum > thrNum)){
        console.log(`The Second Number Is The Maximum Number , Because The Second Number Is = ${secNum}`);
    }
    else{
        console.log(`The Third Number Is The Maximum Number , Because The Third Number Is = ${thrNum}`);
    };
};
getMaximumNumber(fristNumber , secondNumber , thirdNumber);