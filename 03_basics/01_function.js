function sayMyName(){
    console.log("hello");
    console.log("hi");
}
sayMyName()  //execution  //sayMyName is reference

function addTowNumber(number1, number2){ //number1,number2 is parameter
    console.log(number1+number2);
}
addTowNumber(3,4)  //  3,4 is argument
addTowNumber(3,"4") //ouptut: 34
addTowNumber(3,"a") //ouput: 3a
function addNumber(num1,num2){
 
    return num1+num2
}
console.log(addNumber(5,6));

function loginUserMessage(username){ // if we do not want udefined condition we can write (username="name") if no value is passed it will use value that is assigned 
    if(username === undefined){ //instead of writing this we can also write(!username) because in js undfiend value is considered false
        console.log("Please enter a username");
        return;

    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ajeet"))

//what if no value is passed
console.log(loginUserMessage());
//it prints undefined
//output: undefined just logged in

// Shopping cart situation
//when we don't know how many parameter will come
//to solve this problem will use rest operator 
//it is same as spread operator
//this operator returns value in list
function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,499,800))
//output: [ 200, 499, 800 ]


function calculateCartPrice1(val1,val2, ...num1){
    return num1;
}
console.log(calculateCartPrice1(200,499,800,2000))
//output: [ 800, 2000 ]
//val1=200 val2=499 and rest  comes in num1 that's why it is in list 
//interview question

const user= {
    username: "ajeet",
    price: 200
}
function handleobjects(anyobject){
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobjects(user)

//we can also pass objects directly in functions
handleobjects({
    username: "sam",
    price: 644
})


const myNewArray=[300,309,600,700]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));