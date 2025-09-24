// write a java script program to get the sum of all natural numbers by using function method =>
const number = 10;
function getSumOfAllNaturalNumbers(num){
    console.log(`The Number Is = ${num}`);
    let sumOfAllNaturalNumbers = 0;
    for(var i=0 ; i < number ; i++){
        sumOfAllNaturalNumbers += i;
    }
    console.log("The Sum Of All Natural Numbers Is = ",sumOfAllNaturalNumbers);
};
getSumOfAllNaturalNumbers(number);