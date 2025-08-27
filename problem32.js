// write a java script program to find the name of the file from this file path ("/user/files/report.pdf") =>
const path = require("path");
const filePath = "/user/files/report.pdf"
const fileName = path.basename(filePath);
console.log("The Base Name From The File Path Is : \"",fileName,"\"");