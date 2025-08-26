// write a function to join multiple segments from this segements ("src", "components", "App.js") =>
const path = require("path");
function joinMultipleSegements(...segements){
    return path.join(...segements);
}
console.log(joinMultipleSegements("src", "components", "App.js"));