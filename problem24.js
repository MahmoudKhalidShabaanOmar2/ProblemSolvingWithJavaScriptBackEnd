// write a function to get the good path from this object ("{ dir: "/folder", name: "app", ext: ".js" }") =>
const path = require("path");
function buildGoodPath(fileObject){
    return path.format(fileObject);
}
console.log(buildGoodPath({ dir: "/folder", name: "app", ext: ".js" }))