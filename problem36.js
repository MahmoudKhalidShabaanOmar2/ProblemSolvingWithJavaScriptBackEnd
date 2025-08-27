// write a java script program to check if the file path is absolute , or not absolute by using this file path ("/home/user/file.txt") =>
const path = require("path");
const filePath = "/home/user/file.txt";
console.log("The File Path Is : \"",filePath,"\"")
const isAbsolute = path.isAbsolute(filePath);
console.log("Check If The File Path Is Absolute , Or Not Absolute : ",isAbsolute)