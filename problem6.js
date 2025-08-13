// Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday) =>
var dayNumber = 7;
console.log("The Day Number Is = ",dayNumber)
switch(dayNumber){
    case 1:
        var dayName = "Sunday";
        console.log("The Name Day Is : ",dayName);
        break;
    case 2:
        var dayName = "Monday";
        console.log("The Name Day Is : ",dayName);
        break;
    case 3:
        var dayName = "Thuseday";
        console.log("The Name Day Is : ",dayName);
        break;
    case 4:
        var dayName = "Wensday";
        console.log("The Day Name Is : ",dayName);
        break;
    case 5:
        var dayName = "Thursday";
        console.log("The Day Name Is : ",dayName);
        break;
    case 6:
        var dayName = "Friday";
        console.log("The Day Name Is : ",dayName)
        break;
    case 7:
        var dayName = "Saturday";
        console.log("The Day Name Is : ",dayName);
        break;
    default:
        console.log("Please Enter A Valid Day Number To Get The Day Name")
}