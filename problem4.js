// Use the spread operator to merge two arrays, then return the merged array =>
const fristArray = [1 , 2 , 3];
console.log("The Frist Array Is : ",fristArray)
const secondArray = [4 , 5 , 6];
console.log("The Second Array Is : ",secondArray)
// const mergedArrayOfTwoArrays = [...fristArray , ...secondArray];
const mergedArrayOfTwoArrays = fristArray.concat(secondArray)
console.log("The Merged Array Of The Two Arrays Is : ",mergedArrayOfTwoArrays)