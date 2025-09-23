// write a java script program to get three numbers from the user , and then get the maximum number by using arrow function method =>
const fristNumber = -8;
const secondNumber = -78;
const thirdNumber = -45;
const getMaximumNumber = (friNum , secNum , thrNum) => {
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
console.log(getMaximumNumber(fristNumber , secondNumber , thirdNumber));