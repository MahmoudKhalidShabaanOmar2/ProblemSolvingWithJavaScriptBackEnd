// write a java script program to build the good file path from this file object ({ dir: "/folder", name: "app", ext: ".js" }) =>
const path = require("path");
const fileObject = { dir: "/folder", name: "app", ext: ".js" };
console.log("The File Object Is : ",fileObject);
const goodFilePath = path.format(fileObject);
console.log("The Good File Path Is : ",goodFilePath)