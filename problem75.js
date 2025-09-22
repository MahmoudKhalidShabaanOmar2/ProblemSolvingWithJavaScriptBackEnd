// write a java script program to get the number from the user , and then check if the number is positive , negative , or equal to zero by using arrow function method =>
number = -34;
const checkNumber = (num) => {
    console.log("The Number Is = ",num);
    if(num > 0){
        console.log(`The Number Is Positive , Because Your Entered Number Is = ${num}`);
    }
    else if(num == 0){
        console.log(`The Number Is Equal To Zero , Because Your Entered Number Is = ${num}`);
    }
    else{
        console.log(`The Number Is Negative , Because Your Entered Number Is =  ${num}`)
    }
};
console.log(checkNumber(number));