// write a function to join two paths , and then get the full path from this format ("/folder1", "folder2/file.txt")=> 
const path = require("path");
function joinTwoPaths(fristPath , secondPath){
    return path.join(fristPath , secondPath);
}
console.log(joinTwoPaths("/folder1", "folder2/file.txt"))