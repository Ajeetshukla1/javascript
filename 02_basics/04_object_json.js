const tinderUser=new Object() //singleton way to declare object
tinderUser.id="123abc"
tinderUser.name="Ajeet"
tinderUser.isLoggedIn=false

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ajeet",
            lastname: "shukla"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}

const obj3= {obj1,obj2}
//we cannot merge two object directly 
//due to this object ke ander object aa jayega

console.log(obj3);
//output:
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4=Object.assign({},obj1,obj2)
//Object.assign method is used to merge all object 
//this empty object in the syntax is optional but it is good habit to write empty array in syntax
//this empty object{} act as a traget and all rest object act as a source
//if we does not include {} then it will make taget object to first one and write all data in that 
//for eg you can see below all data is transfer to obj1
//Syntax :  object.assign(taget,source)
//const obj5=Object.assign(obj1,obj2)
//console.log(obj1);
console.log(obj4);
//output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//but we will rarely use assign
//we will use spread method

const obj6 = {...obj1,...obj2}
console.log(obj6);


//whenever the value comes from database, we usually get array from the database
//here we have list of object
const user=[
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
    },
    {

    }
]
console.log(user[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //if we want to get all keys 
//we get it in form of array
//now we can perform methods on array
//ouput: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
//output: [ '123abc', 'Ajeet', false ]

console.log(Object.entries(tinderUser));
//rarely used
//[ [ 'id', '123abc' ], [ 'name', 'Ajeet' ], [ 'isLoggedIn', false ] ]

//when we loop through object we need an value sometimes value does not exist so it can crash 
//therefore we use hasOwnProperty to check
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('islogged'));


const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ajeet"
}
//destructuring

//course.courseInstructor 
//to avoid writing like this every time
// we write
const {courseInstructor: instructor} = course
//syntax:
//const {key: anothername}= objectname

console.log(instructor);


//API values comes in the form of json\
//json are nothing but the objects wihout name
//in json both keys and values are written as string
/*
{
    "name": "ajeet",
    "coursesname": "js in hindi",
    "price": "free"
}
*/
//some time we get json in form of array
[
    {},
    {},
    {}
]
//to understand json  we need to use jsonformatteer
