// write a java script program to get the two numbers from the user , and then get the maximum number by using arrow function =>
let fristNumber = 20;
let secondNumber = 50;
const checkMaximumNumber = (friNum , secNum) =>{
    console.log("The Frist Number Is = ",friNum);
    console.log("The second Number Is = ",secNum);
    if(friNum > secNum){
        console.log("The Frist Number Is The Maximum Number");
    }
    else{
        console.log("THe second Number Is The Maximum Number");
    };
};
checkMaximumNumber(fristNumber , secondNumber);