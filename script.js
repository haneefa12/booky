//selecting popup,popup-overlay,add-popup

var popupbox=document.querySelector(".popup")
var popupboxoverlay=document.querySelector(".popup-overlay")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupboxoverlay.style.display="block"
})

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupboxoverlay.style.display="none"
})
// selecting container,add-book,book-title-input,book-author-input,book-description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book-container")
   div.innerHTML=`<h2>${booktitleinput.value}</h2>
   <h5>${bookauthorinput.value}</h5>
   <p>${bookdescription.value}</p>
   <button onclick="dlt(event)">delete</button>`
   container.append(div)

   popupbox.style.display="none"
   popupboxoverlay.style.display="none"
    
})
function dlt(event){
    event.target.parentElement.remove()

}