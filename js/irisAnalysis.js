async function runAnalysis(){

let res = await fetch("data/iris.csv");
let text = await res.text();

let rows = text.trim().split("\n").slice(1);

document.getElementById("analysisResult").innerHTML =
"Total Records: " + rows.length;

}
