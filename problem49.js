// write a java script program to get two numbers , and then get the maximum number by using switch case =>
let fristNumber = 30;
let secondNumber = 40;
switch(true){
    case ((fristNumber > secondNumber)):
        console.log("The Frist Number Is The Maximum Number Is = ",fristNumber);
        break;
    case ((secondNumber > fristNumber)):
        console.log("The Second Number Is The Maximum Number Is = ",secondNumber);
        break;
    default:
        console.log("Please Enter A Valid Two Numbers");
}