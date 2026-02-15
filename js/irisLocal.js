async function loadLocalCSV(){

let res = await fetch("data/iris.csv");

if(!res.ok){
alert("iris.csv not found in data folder");
return;
}

let text = await res.text();
let rows = text.trim().split("\n").slice(1);

// store species separately
let setosaX=[], setosaY=[];
let versicolorX=[], versicolorY=[];
let virginicaX=[], virginicaY=[];

rows.forEach(r=>{
let c=r.split(",");
if(c.length < 5) return;

let x=parseFloat(c[0]); // sepal length
let y=parseFloat(c[1]); // sepal width
let species=c[4].toLowerCase();

if(species.includes("setosa")){
setosaX.push(x);
setosaY.push(y);
}
else if(species.includes("versicolor")){
versicolorX.push(x);
versicolorY.push(y);
}
else if(species.includes("virginica")){
virginicaX.push(x);
virginicaY.push(y);
}
});

// plot with different colors
Plotly.newPlot("localPlot", [

{
x:setosaX,
y:setosaY,
mode:"markers",
name:"Setosa",
marker:{color:"blue"}
},

{
x:versicolorX,
y:versicolorY,
mode:"markers",
name:"Versicolor",
marker:{color:"green"}
},

{
x:virginicaX,
y:virginicaY,
mode:"markers",
name:"Virginica",
marker:{color:"red"}
}

],
{
title:"Sepal Length vs Sepal Width (Species Classification)",
xaxis:{title:"Sepal Length"},
yaxis:{title:"Sepal Width"}
});
}
