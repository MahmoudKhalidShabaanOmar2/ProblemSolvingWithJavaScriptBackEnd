// .Write a function that accepts multiple parameters (two or more) and returns their sum =>
function sumOfAllNumbers(){
    var sumOfNums = 0;
    for( var i=0 ; i<arguments.length ; i++){
        sumOfNums += arguments[i];
    }
    console.log("The Sum Of All Numbers Is = ",sumOfNums);
}
sumOfAllNumbers(1 , 2 , 3 , 4 , 5);