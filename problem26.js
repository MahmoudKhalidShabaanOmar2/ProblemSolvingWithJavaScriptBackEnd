// write a function to get the file extenstion , and file name from this file path ("getFileNameAndFileExtenstion("/home/user/file.txt")") =>
const path = require("path");
function getFileNameAndFileExtenstion(filePath){
    return{
        Name : path.parse(filePath).name,
        Ext : path.parse(filePath).ext,
    };
};
console.log(getFileNameAndFileExtenstion("/home/user/file.txt"));