//    DATES

let myDate = new Date()
console.log(myDate);
//output: 2025-04-30T20:35:39.897Z
console.log(myDate.toString());
//output: Thu May 01 2025 02:08:40 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
//output:Thu May 01 2025
console.log(myDate.toISOString());
//output:2025-04-30T20:42:49.179Z

console.log(myDate.toJSON());
//output:2025-04-30T20:42:49.179Z

console.log(myDate.toLocaleString());
//output: 5/1/2025, 2:12:49 AM

console.log(typeof(myDate));
//output: object
//can be asked in interviews

let myCreateDate = new Date(2023,0,23) //month starts from 0 in js
console.log(myCreateDate.toDateString())
//output:Mon Jan 23 2023

let myCreateDate1 = new Date(2023,0,23,5,3)
console.log(myCreateDate1.toLocaleString());
//output:1/23/2023, 5:03:00 AM
let myCreateDate2 = new Date("01-14-2023")
//if we want to specify our own format we will write into string
console.log(myCreateDate2.toLocaleString());
//output:1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); //it will give time value in milli second
console.log(myCreateDate.getTime()); //gives value in milli second
console.log(Math.floor(Date.now()/1000));



let newDate = new Date() //give current time
console.log(newDate);
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());


//this method is very interesting
//very usefull method
//in this method we define object we can define too many parameters
newDate.toLocaleString('default',{
    weekday: "long",
    
})