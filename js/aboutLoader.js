// Load about page automatically when index loads
window.addEventListener("DOMContentLoaded", async () => {

try{
let res = await fetch("about.html");
let html = await res.text();
document.getElementById("aboutContainer").innerHTML = html;
}catch(e){
console.error("About page not loaded");
}

});
