function openNotebook(type){

let url="";

if(type==="analysis"){
url="https://colab.research.google.com/github/jakevdp/PythonDataScienceHandbook/blob/master/notebooks/05.02-Introducing-Scikit-Learn.ipynb";
}
else if(type==="ml"){
url="https://colab.research.google.com/github/ageron/handson-ml2/blob/master/03_classification.ipynb";
}

window.open(url,"_blank");
}
