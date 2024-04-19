const mytext = document.getElementById("mytext");
function saveinLocal(){
   localStorage.setItem("savedtext", mytext.value);
}
if(localStorage.getItem("savedtext")){
    mytext.value = localStorage.getItem("savedtext"); 
}
mytext.addEventListener("input", saveinLocal);