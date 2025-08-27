// write a java script program to join multiple segemenets from this different segements ("src", "components", "App.js") =>
const path = require("path");
const differentSegements = ["src" , "componenets" , "folder" , "index.js"];
console.log("The Different Segements Is : ",differentSegements);
const joinedPath = path.join(...differentSegements);
console.log("The Joined Of The Multiple Segements Is : ",joinedPath);