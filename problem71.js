// write a java script program to get two numbers , and then swapping the values of the two numbers by using function method =>
let fristNumber = 56;
let secondNumber = 20;
function swappingValuesOfNumbers(friNum , secNum){
    console.log("The Values Of The Two Numbers Before Swapping The Values Of The Two Numbers Is : ")
    console.log("The Frist Number Is = ",friNum);
    console.log("The Second Number Is = ",secondNumber);
    let temporaryValue = friNum;
    friNum = secNum;
    secNum = temporaryValue;
    console.log("The Values Of The Two Numbers After Swapping The Values Of The Two Numbers Is : ");
    console.log("The Frist Number Is = ",friNum);
    console.log("The Second Number Is = ",secNum);
}
swappingValuesOfNumbers(fristNumber , secondNumber);