const myobject=
{
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
// for iteration in object we use for in loop

for (const key in myobject) {
    console.log(key);
}

for (const key in myobject) {
    console.log(myobject[key]);
}


programm=["js", "rb","py", "java","cpp" ]
for(const key in programm){
    console.log(programm[key]);
}

// in case of for of it gives value, but in case of for in it returns value
//map is not iterable this way
