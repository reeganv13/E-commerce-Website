var slideshow=document.querySelector(".slideShow")


function opennav(){
    slideshow.style.left="0%"
}

function closenav(){
    slideshow.style.left="-60%"
}

var form=document.getElementById("form")
function Submit(){
    alert("Form Submitted Succesfully")
    form.reset();
}