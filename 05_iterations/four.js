const coding = ["js", "ruby", "cpp", "java" , "python"]
coding.forEach( function (val){
    console.log(val);
})
coding.forEach((item) => {
    console.log(item);
})
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

const mycoding=
[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

mycoding.forEach( (item )=> {
    console.log(item.languageName);
    console.log(item.languageFileName);
})