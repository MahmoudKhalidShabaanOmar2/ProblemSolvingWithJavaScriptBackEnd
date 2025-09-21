// write a java script program to get the area of traingle by using function method =>
const baseOfTraingle = 25;
const heightOfTraingle = 20;
function getAreaOfTraingle(baseOfTran , heightOfTran){
    console.log(`The Base Of The Traingle Is = ${baseOfTran}`);
    console.log(`The Height Of The Traingle Is = ${heightOfTran}`);
    if((baseOfTran > 0) && (heightOfTran > 0)){
        const areaOfTraingle = (baseOfTran * heightOfTran) / 2;
        console.log(`The Area Of The Traingle Is = ${areaOfTraingle}`);
    }
    else{
        console.log("Please Enter A Valid Base Of Traingle , And A Valid Height Of Traingle");
    }
}
getAreaOfTraingle(baseOfTraingle , heightOfTraingle);