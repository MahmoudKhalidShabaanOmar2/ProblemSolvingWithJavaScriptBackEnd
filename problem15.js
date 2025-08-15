// .Write a function that accepts multiple parameters (two or more) and returns their multiplication =>
function getMultiplicationOfAllNumbers(){
    var multiplicationOfAllNumbers = 1;
    for( var num=0 ; num<arguments.length ; num++){
        multiplicationOfAllNumbers *= arguments[num];
    };
    console.log("The Multiplication Of All Numbers Is = ",multiplicationOfAllNumbers);
}
getMultiplicationOfAllNumbers(1 , 2 , 3 , 4 , 5 , 6);