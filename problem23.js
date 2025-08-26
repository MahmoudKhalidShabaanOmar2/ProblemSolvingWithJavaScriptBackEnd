// write a java script program to get the file name from this file path ("/user/files/report.pdf") by writting function =>
const path = require("path");
function getFileName(filePath){
    return path.basename(filePath);
}
console.log(getFileName("/user/files/report.pdf"))