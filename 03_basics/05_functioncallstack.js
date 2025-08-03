/*
javascript execution context

{} -> global execution context
->javascript is single threaded 
->functional exection context 
->eval execution context

js code is run in two phases
{}->memory creation phase- memory is allocated in this phase 
  ->execution phase

steps
1)global execution phase-> all code is first run in global execution and it is first allocated in 'this'
2)memory phase
 all variables are taken and undefined is alloted to them
3)execution phase
 all values are given to the variables

whenever the function is called again new variable environment variable + execution thread is made for the functio n

in call stack always first will be executed global environment
then after anyy function will be executedn 