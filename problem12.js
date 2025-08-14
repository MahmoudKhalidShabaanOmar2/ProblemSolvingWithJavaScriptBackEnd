// Write a function to find the largest number in an array. =>
const arrayOfNumbers = [1 , 3 , 4 , 5 , 63 , 32 , 34 , 65 , 454 , 46 , 567];
function getLargestNumberBetweenArrayNumbers(arrOfNums){
    console.log("The Array Of Numbers Is : ",arrOfNums);
    var maximumNumber = arrOfNums[0];
    for( var num=0 ; num<=arrOfNums.length ; num++){
        if(arrOfNums[num] >= maximumNumber){
            maximumNumber = arrOfNums[num];
        };
    };
    console.log("The Largest Number Between Array Numbers Is = ",maximumNumber);
}
getLargestNumberBetweenArrayNumbers(arrayOfNumbers);