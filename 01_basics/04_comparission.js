//normal comparission like others 
// problems come when we compare with different data type
// console.log("2">1); //automatically converts string into number
// console.log("02">1);
//but we should try to compare same data type, if we do this we do not get consistant output
// console.log(null>0); //false
// console.log(null==0);//false
// console.log(null>=0);//true
// in case of null sometimes it get convert into 0 and sometime it get converted into Nan
// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);
//in case of undefined it will always give false

//Strictly check === 
//in case of strictly check it also checks the data type

console.log("2"===2);
//here data type is not same therfore it give false