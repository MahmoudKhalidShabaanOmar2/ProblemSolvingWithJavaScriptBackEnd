// write a java script program to get number from the user , and then check if the number is positive , negative , or equal to zero by using function method =>
number = 56;
function checkNumber(num){
    console.log("The Number Is = ",num);
    if(num > 0){
        console.log(`The Number Is Positive , Because Your Entered Number Is = ${num}`);
    }
    else if(num == 0){
        console.log(`The Number Is Equal To Zero , Because Your Entered Number Is = ${num}`);
    }
    else{
        console.log(`The Number Is Negative , Because Your Entered Number Is = ${num}`);
    };
};
checkNumber(number)