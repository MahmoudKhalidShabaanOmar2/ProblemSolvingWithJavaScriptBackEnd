// write a function to get the file extenstion from this file path ("/docs/readme.md") =>
const path = require("path");
function getFileExtenstion(filePath){
    return path.extname(filePath);
}
console.log(getFileExtenstion("/docs/readme.md"))