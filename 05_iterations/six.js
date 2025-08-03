const myNumbers=[1,2,3,4,5,6,7,8]

const newNum=myNumbers.map( (num)=>num+10)


//chaining using map
const newNUMS=myNumbers
                      .map((num)=> num*10)
                      .map((num)=> num+10)//jab bhi chaining hogi toh woh jo uske just uper wale map se value ayegi whi use hogi
                      .filter( (num)=>num>= 40)
console.log(newNUMS);
