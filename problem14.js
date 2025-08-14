// .Write a function that accepts multiple parameters (two or more) and returns their average =>
function getAverageOfAllNumbers(){
    var sumOfAllNumbers = 0;
    for (var num=0 ; num<arguments.length ; num++){
        sumOfAllNumbers += arguments[num];
    }
    console.log("The Sum Of All Numbers Is = ",sumOfAllNumbers);
    var averageOfAllNumbers = sumOfAllNumbers / arguments.length;
    console.log("The Average Of All Numbers Is = ",averageOfAllNumbers);
};
getAverageOfAllNumbers(1 , 3 , 4 , 6 , -8 , 9 , -9 , 50 , 43 , -2 , 36 , 11);