// write a java script program to get the multiplication of all numbers by two in array of numbers by using foreach array method =>
let arrayOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log("The Array Of The Numbers Is : ",arrayOfNumbers);
const arrOfNum = arrayOfNumbers.forEach((num) => console.log(num));
console.log(arrOfNum);
const mulOfArrOfNumByTwo = arrayOfNumbers.forEach((num) => console.log(num * 2));
console.log(mulOfArrOfNumByTwo);