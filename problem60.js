// write a java script program to get the array of numbers , and then get the multiplication of all array numbers by two by using map array method =>
const arrayOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log("The Array Of Numbers Is : ",arrayOfNumbers);
const num = arrayOfNumbers.map((num) => console.log(num));
console.log("The Multiplication Of All Numbers In The Array By Two By Two Is : ")
const multiplicationOfNumByTwo = arrayOfNumbers.map((num) => console.log(num * 2));