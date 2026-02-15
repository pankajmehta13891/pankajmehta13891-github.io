// hide all dashboards
function hideAllTabs(){
let tabs=document.getElementsByClassName("tabcontent");
for(let i=0;i<tabs.length;i++){
tabs[i].style.display="none";
}
}

// open dashboard tab
function openTab(evt,tabName){

hideAllTabs();

// hide about section when dashboard opens
document.getElementById("aboutContainer").style.display="none";

document.getElementById(tabName).style.display="block";
}

// show home (about page)
function showHome(){

hideAllTabs();

// show about again
document.getElementById("aboutContainer").style.display="block";
}
