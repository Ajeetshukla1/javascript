function one(){
    const username="ajeet"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website); //this will give error because scope is within one function 
    two()
}
one()
if(true){
    const username="ajeet"
    if (username==="ajeet"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);//this will give error due to scope of variable
}
//console.log(username); //similarly this willgive error



//****************interesting **************** */
//two ways to write function
//1st
console.log(addone(5)); //if we call before decleration in this method it will give no error and it will execute.
function addone(num){
    return num+1
}
//addone(5)

//2nd
// here addTwo function is like expression becuase it is variable
//console.log(addTwo(5)); //but if we call fuction before declaration by variable method it will give error
const addTwo= function(num){
    return num+2
}
//addTwo(5)
