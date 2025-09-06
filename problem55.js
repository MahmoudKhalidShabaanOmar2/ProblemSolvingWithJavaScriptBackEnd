// write a java script program to get string , and then reverse the string by using for loop =>
let string = "mahmoud";
console.log("The String Is : ",string);
for(let i=0 ; i < string.length ; i++){
    console.log(string[i]);
};
let newString = "";
for(let j = string.length - 1 ; j >= 0 ; j--){
    newString += string[j];
}
console.log("The Reversing Of The String Is : ",newString);
for(let k=0 ; k < newString.length ; k++){
    console.log(newString[k]);
};