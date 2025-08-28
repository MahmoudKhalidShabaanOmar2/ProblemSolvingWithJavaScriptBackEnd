// write a java script to join two file paths , frist path Is (/folder1) , and the second path Is (/folder2/file.txt) =>
const path = require("path");
const fristFilePath = "/folder1";
console.log("The Frist Fie Path Is : \"",fristFilePath);
const secondFilePath = "/folder2/file.txt";
const joinedFile = path.join(fristFilePath , secondFilePath);
console.log("The Joined File Path Is : ",joinedFile);