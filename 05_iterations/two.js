// for of

const arr=[1,2,3,4,5]

for (const num of arr){
    console.log(num);
}
const greetings="hello world!"
for(const greet of greetings){
    console.log(`words are ${greet}`)
}


// Maps
//holds key value pair
// it remembers the order
// only have unique value
const map = new Map()
map.set('IN '," india")
map.set('usa', "united states of america")
map.set('fr',"france")
map.set('pk',"pakistan")

console.log(map);

for(const key of map){
    console.log(key);
}
// if you want only key than
for(const [key] of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(key,'->',value);
}
const myobject= {
    'game1': 'nfs'
    'game2': 'spiderman'

}
for(const [key,value] of myobject){
    console.log(key,'->',value);
}
//this way iteration is not possible in object
//it will give error

