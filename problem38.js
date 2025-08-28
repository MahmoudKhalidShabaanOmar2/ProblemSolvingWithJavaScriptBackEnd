// write a java script program to check if the given path is relative , or not relative , from this given path ("./index.html") =>
const path = require("path");
const filePath = "./index.html";
console.log("The File Path Is : \"",filePath,"\"");
const checkIsRelative = !path.isAbsolute(filePath);
console.log("Check If The File Path Is A Relative , Or Not Relative Is : ",checkIsRelative);