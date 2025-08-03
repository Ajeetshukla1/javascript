const marHero=["thor","ironman","hulk"]
const dcHero=["superman","batman","flash"]

//marHero.push(dcHero) //directly pushing array in another array
//In this case array ko ek single value leke push ho jayega

//console.log(marHero);

const allHero=marHero.concat(dcHero)
//concat insert element in the new array it does not change the original array.
//by using concat we can merge two array
console.log(allHero);

//but if we want to merge two array we usually don't use concat 
//there is different method 

//  Spread operator
 
const allNewHero=[...marHero,...dcHero]
//it will spread all the element of the array
console.log(allNewHero);
 
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
//It returns a new array with all sub array concatenated into it recusrsively upto 
//upto the specified depth 
//here in this case we have specifeid depth to infinity

// Sometimes we select data from another webpage we get data in another form like nodelisst ,object, string 
//therefore we need it to convert it to array to work on data

console.log(Array.isArray("ajeet"))
//Array.isArray()
//it checks whether given data is array or not 

console.log(Array.from("ajeet"))
//Array.from()
//it converts data to array  

console.log(Array.from({name: "ajeet"})) //interesting result // good for interview purpose
// in case of object if  we do not specify whether we want to convert key or value in array
//it will return an empty array


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
// it converts set of data into array

//Leran more about
//  Array.isArray
// Array.from
// Array.of
//through mdn learn thoroughly


