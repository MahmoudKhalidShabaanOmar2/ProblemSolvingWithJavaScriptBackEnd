// Write a function that takes an object and returns an array containing only its names. =>
function getValuesOfPersonObjectOnly(obj){
    return Object.values(obj);
};
const objectPerson = {"name" : "John" , "age" : "25"};
console.log("The Person Object Is : ",objectPerson);
const valuesOfObjectPerson = getValuesOfPersonObjectOnly(objectPerson);
console.log("The Array Of The Values Of The Object Person Is : ",valuesOfObjectPerson)