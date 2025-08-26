// wite a function to check if the file path is absolute , or not absolute from this path ("/home/user/file.txt") =>
const path = require("path");
function isAbsoluteFilePath(filePath){
    return path.isAbsolute(filePath);
}
console.log(isAbsoluteFilePath("/home/user/file.txt"));