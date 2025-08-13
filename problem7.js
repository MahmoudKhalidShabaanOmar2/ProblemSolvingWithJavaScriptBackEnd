//  Create an array of strings and return their lengths using map method =>
const arrayOfStrings = ["a" , "ab" , "abc" , "abcd" , "abcde" , "abcdef"];
console.log("The Array Of Strings Is : ",arrayOfStrings);
const arrayOfLengthsOfStrings = arrayOfStrings.map(string => string.length);
console.log("The Array Of Lengths Of Strings Is : ",arrayOfLengthsOfStrings);