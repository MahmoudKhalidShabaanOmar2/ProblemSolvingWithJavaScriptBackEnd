// write a java script program to get the file extenstion from this file path ("/docs/readme.md")=>
const path = require("path");
const filePath = "/docs/readme.md";
console.log("The File Extenstion Is : ",filePath);
const fileExtenstion = path.extname(filePath);
console.log("The File Extenstion Is : \"",fileExtenstion,"\"");