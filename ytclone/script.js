var menu=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".left");
var expand=document.querySelector(".page");
menu.onclick = function(){
sidebar.classList.toggle("shrink");
expand.classList.toggle("expand");
}
