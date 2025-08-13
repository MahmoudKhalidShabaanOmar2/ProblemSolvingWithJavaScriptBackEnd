// Write a function that destructures an object to extract values and returns a formatted string. =>
var objectOfPerson = {"name" : "john" , "age" : "25"};
console.log("The Object Of Person",objectOfPerson);
var nameOfPerson = objectOfPerson.name;
console.log("The Name Of The Person Is : \"",nameOfPerson,"\"");
var ageOfPerson = objectOfPerson.age;
console.log("The Age Of The Person Is : \"",ageOfPerson," Years\"")
console.log(`\'${nameOfPerson}\' Is \'${ageOfPerson} Years\'`);