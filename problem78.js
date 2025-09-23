// write a java script program to get number from the user , and then check if the number is even , or odd by using arrow function method =>
const number = 54;
const checkNumber = (num) => {
    console.log(`The Number Is = ${num}`);
    if(num %2 != 0){
        return`The Number Is Odd Number , Because Your Entered Number Is = ${num}`;
    }
    else{
        return`The Number Is Even Number , Because Your Entered Number Is = ${num}`;
    };
};
console.log(checkNumber(number))