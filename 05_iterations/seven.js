// Reduce function
//The reduce() method in JavaScript is used to iterate over an array and accumulate a single value. 
// It takes a callback function as an argument, which is executed for each element of the array. 
// This callback function receives an accumulator and
//  the current element as arguments, and it returns the new value of the accumulator. 
const myNums=[1,2,3,4,5]
// const myTotal= myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
// that 0 is our intitial value we can set it to any number according to our need
// we can use reduce for shopping cart for totalling

const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)
console.log(myTotal)


//EXAMPLE

const shoppingCart=[
    {
    itemName: "js",
    price: 65
},
{
    itemName: "python",
    price: 67
},
{
    itemName: "ruby",
    price: 79
},
{
    itemName: "cpp",
    price: 30
}
]
const Total = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(Total)
