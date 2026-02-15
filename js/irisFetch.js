async function loadFromURL(){

let url=document.getElementById("dataUrl").value;

if(!url){
alert("Enter dataset URL");
return;
}

try{

let res=await fetch(url);
let text=await res.text();
let rows=text.trim().split("\n").slice(1);

// separate species
let setosaX=[],setosaY=[];
let versicolorX=[],versicolorY=[];
let virginicaX=[],virginicaY=[];

rows.forEach(r=>{
let c=r.split(",");
if(c.length<5) return;

let x=parseFloat(c[2]); // petal length
let y=parseFloat(c[3]); // petal width
let s=c[4].toLowerCase();

if(s.includes("setosa")){
setosaX.push(x); setosaY.push(y);
}
else if(s.includes("versicolor")){
versicolorX.push(x); versicolorY.push(y);
}
else if(s.includes("virginica")){
virginicaX.push(x); virginicaY.push(y);
}
});

Plotly.newPlot("plot",[

{
x:setosaX,
y:setosaY,
mode:"markers",
name:"Setosa",
marker:{color:"#1f77b4",size:10}
},

{
x:versicolorX,
y:versicolorY,
mode:"markers",
name:"Versicolor",
marker:{color:"#2ca02c",size:10}
},

{
x:virginicaX,
y:virginicaY,
mode:"markers",
name:"Virginica",
marker:{color:"#d62728",size:10}
}

],
{
title:"Petal Length vs Petal Width",
xaxis:{title:"Petal Length"},
yaxis:{title:"Petal Width"}
});

}catch(e){
alert("Could not fetch dataset");
}
}
