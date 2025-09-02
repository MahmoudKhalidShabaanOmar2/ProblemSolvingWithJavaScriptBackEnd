// write a java script progrram to check if the number is divisible by three , and five by using arrow function method =>
let number = 30;
const checkDivisibleNumber = (num) =>{
    console.log("The Number Is = ",num);
    if((num %3 == 0) && (num %5 == 0)){
        console.log("This Number Is Divisible By Three , And Five");
    }
    else{
        console.log("This Number Is Not Divisible By Three , And Five");
    };
};
checkDivisibleNumber(number);