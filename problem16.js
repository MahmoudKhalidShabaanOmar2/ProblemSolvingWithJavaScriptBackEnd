// Write a function that takes an object and returns an array containing only its keys. =>
function getKeysOfPersonObjectOnly(obj){
    return Object.keys(obj);
}
const personObject = {"name" : "John" , "age" : "25"};
console.log("The Person Object Is : ",personObject);
const getKeysOfPersonObject = getKeysOfPersonObjectOnly(personObject);
console.log("The Array Of The Keys Of The Person Object Is : ", getKeysOfPersonObject);