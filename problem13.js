// Write a function to find the smallest number in an array. =>
const arrayOfNumbers = [1 , 4 , 434 ,35 , 364 , -344, 335 , -353 , 35];
function getSmallestNumberBetweenArrayNumbers(arrOfNums){
    console.log("The Array Of Numbers Is : ",arrOfNums);
    var minimumNumber = arrOfNums[0];
    for( var num=0 ; num<arrOfNums.length ; num++){
        if(arrOfNums[num] < minimumNumber){
            minimumNumber = arrOfNums[num];
        };
    };
    console.log("The Smalles Number Between Array Number Is = ",minimumNumber);
}
getSmallestNumberBetweenArrayNumbers(arrayOfNumbers);