var collectioContainer=document.querySelector(".collection-container")
var elements=collectioContainer.querySelectorAll("div")

function check(event){
 var inputText=event.target.value.toUpperCase()

 for(i=0;i<elements.length;i++){
    var productName=elements[i].querySelector("p").textContent

    if(productName.toUpperCase().indexOf(inputText)<0){
        elements[i].style.display="none"
    }
    else{
        elements[i].style.display="block"
    }
 }




}