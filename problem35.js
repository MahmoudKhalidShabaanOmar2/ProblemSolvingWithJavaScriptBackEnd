// write a java script program to get the file name , and file extenstion from this file path ("/docs/readme.md") =>
const path = require("path");
const filePath = "/docs/readme.md";
console.log("The File Path Is : \"",filePath,"\"");
const fileName = path.basename(filePath);
console.log("The File Name Is : \"",fileName,"\"");
const fileExtenstion = path.extname(filePath);
console.log("The File Extenstion Is : \"",fileExtenstion,"\"")