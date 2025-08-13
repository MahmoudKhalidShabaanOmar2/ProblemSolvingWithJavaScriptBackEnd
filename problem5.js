//  Create an array of numbers and return only the even numbers using filter method =>
const arrayOfNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log("The Array Of All Numbers Is : ",arrayOfNumbers);
const arrayOfEvenNumbersOnly = arrayOfNumbers.filter(function(num){
    return num %2 === 0;
});
console.log("The Array Of The Even Numbers Only Is : ",arrayOfEvenNumbersOnly);