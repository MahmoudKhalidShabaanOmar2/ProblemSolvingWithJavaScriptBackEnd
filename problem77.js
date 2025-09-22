// write a java script program to get number from the user , and then check if the number is odd number , or even number by using function method =>
number = 55;
function checkNumber(num){
    console.log("The Number Is = ",num);
    if(num %2 != 0){
        console.log(`The Number Is Odd Number , Because Your Entered Number Is ${num}`);
    }
    else{
        console.log(`The Number Is Even Number , Because Your Entered Number Is = ${num}`);
    }
}
checkNumber(number);