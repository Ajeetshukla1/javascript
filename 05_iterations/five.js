const coding = ["js", "ruby", "cpp", "java" , "python"]

const values = coding.forEach((item) => {
    console.log(item);
    return item
})

console.log(values);
// if we print for each value we will get undefined, it means for each doesn't return any value
// to counter this issue we use filter 

const myNums =[1,2,3,4,5,6,7,8,9,10]
//filter is similar to forEach it takes call back function
//but in case of filter it returns value
const newNums = myNums.filter( (num)=> num>4)
console.log(newNums);
// output: [ 5, 6, 7, 8, 9, 10 ]
const newNum = myNums.filter( (num)=> {
    
    return num>4
})
//jab curly bracket lgate hai toh hmme return likhna pdega
//because jb hm curly use kerte hai toh scope open ho jata hai
//ager hm bracket nhi lgate ho toh direct return ho jata hai if code is 1 liner
console.log(newNum);

// how to return usign forEach
//we will use another array 

const newNUMS = []
myNums.forEach( (num) => {
    if (num>4){
        newNUMS.push(num)
    }
})
console.log(newNUMS)