document.getElementById('owl').oneclick=function(){
    alert("owl clicked")
}
//But this method has very less features so we usually don't use this method
document.getElementById('owl').addEventListener('click',function(e){
         console.log(e);
},false)
//Events
// type, timestamp, defaultPrevented, 
// target , toElement, srcElement , currentTarget
// interview based question - mainly related to position
// clientX , clientY , screenX , screenY
// altkey , ctrlkey , shiftkey , keyCode - these events are related to which keys are pressed



//what does this third parameter false m eans 
