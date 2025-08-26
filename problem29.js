// write a function to get the resolve path from this path ("./index.js") =>
const path = require("path");
function getResolvePath(relativeFilePath){
    return path.resolve(relativeFilePath);
}
console.log(getResolvePath("./index.js"));