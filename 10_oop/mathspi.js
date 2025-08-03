const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// to know any object property we can use this 
console.log(descriptor);
//output:
/*{
  value: 3.141592653589793,
  writable: false, // it means the value can't be edit
  enumerable: false,
  configurable: false
}*/

const chai= {
    name: 'ginger chai',
    price:20,
    isAvailable: true,
    orderChai: function(){
        console.log("chai not ready");
        
    }
}
//does it has descriptor property?
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//yes
// we can also define parameter

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    //this way we can iterate in object
    //but it will give problem when function is inside object
    //so we use if else
    //if we disable enurable property in object than that specific property will not iterate
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }
    
}