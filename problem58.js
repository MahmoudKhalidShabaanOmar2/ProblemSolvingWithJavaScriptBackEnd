// write a java script program to get the array of numbers , and then get the cube number by using foreach array method :
let arrayOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log("The Array Of The Numbers Is : ",arrayOfNumbers);
for(let i=0 ; i < arrayOfNumbers.length ; i++){
    console.log(arrayOfNumbers[i]);
}
console.log("The New Array Of Cube Of All Numbers Is the Array Is : ")
// arrayOfNumbers.forEach((num) => console.log(num * num * num));
// arrayOfNumbers.forEach((num) => console.log(num ** 3));
arrayOfNumbers.forEach((num) => console.log(Math.pow(num , 3)))