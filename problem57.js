// write a java script program to get the array of numbers , and then get the square of all numbers inside array by using foreach array method =>
let arrayOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log("The Array Of Numbers Is : ",arrayOfNumbers);
for(let i=0 ; i < arrayOfNumbers.length ; i++){
    console.log(arrayOfNumbers[i]);
};
console.log("The Square Of All Numbers Inside The Array Of Numbers Is : ")
// const squareOfNumbersInArray = arrayOfNumbers.forEach((num) => (console.log(num * num)));
// const squareOfNumbersInArray = arrayOfNumbers.forEach((num) => console.log(num ** 2));
const squareOfNumbersInArray = arrayOfNumbers.forEach((num) => console.log(Math.pow(num , 2)))
