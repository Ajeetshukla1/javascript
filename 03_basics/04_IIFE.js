
//Immediately invoked function Expression (IIFE)

(function chai(){
    //name iife
    console.log(`Db connected`);
})();
//here we have to write semi colon to end this function in case iife

(()=>{
    console.log(`db conncted two`);
})();

((name)=>{
    console.log(`db connected three ${name}`);
})('ajeet');

//always use semi colon if you have to write two iife



































