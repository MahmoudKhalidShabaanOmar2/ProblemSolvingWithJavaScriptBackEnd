// write a java script program to get string , and then replace with another string by using function method =>
let string = "hello mahmoud";
function replaceString(str){
    console.log("The String Is : ",str);
    let updatedString = string.replace("mahmoud" , "ahmed");
    console.log("The Updated String Is : ",updatedString);
}
replaceString(string);