// write a java script program to get the square root of the number by using arrow function method =>
number = 36;
const getSquareRootOfNumber = (num) => {
    console.log(`The Number Is ${num}`);
    if(num > 0){
        const squareRootOfNum = Math.sqrt(num);
        console.log(`The Square Root Of The Number Is = ${squareRootOfNum}`);
    }
    else{
        console.log("Please Enter A Valid Number");
    };
} 
getSquareRootOfNumber(number);