// write a java script program to get three numbers from the user , and then get the maximum number =>
const fristNumber = -5;
console.log(`The Frist Number Is = ${fristNumber}`);
const secondNumber = -6;
console.log(`The Second Number Is = ${secondNumber}`);
const thirdNumber = -3;
console.log(`The Third Number Is = ${thirdNumber}`);
if((fristNumber > secondNumber) && (fristNumber > thirdNumber)){
    console.log(`The Frist Number Is The Maximum Number , Because The Frist Number Is = ${fristNumber}`);
}
else if((secondNumber > fristNumber) && (secondNumber > thirdNumber)){
    console.log(`The Second Number Is The Maximum Number , Because The Second Number Is = ${secondNumber}`);
}
else{
    console.log(`The Third Number Is The Maximum Number , Because The Third Number Is = ${thirdNumber}`);
};