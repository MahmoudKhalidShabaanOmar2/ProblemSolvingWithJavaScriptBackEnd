// wite a java script progrogram to get the array of all numbers , and then get the square of all numbers in the array by using map() array method =>
const arrayOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log("The Array Of All Numbers Is : ",arrayOfNumbers);
const num = arrayOfNumbers.map((num) => console.log(num));
console.log("The Square Of All Numbers Inside The Array Of Numbers Is : ");
const squareOfNumbers = arrayOfNumbers.map((num) => console.log(num * num));