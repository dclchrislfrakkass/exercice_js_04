var widthGrowUp = 150;
var myVar = setInterval(myTimer, 1000);

function yellow() {
    carre.style.visibility="visible";
    document.getElementById("carre").style.backgroundColor = "yellow";
}
function blue() {
    carre.style.visibility="visible";
    document.getElementById("carre").style.backgroundColor = "Blue";
}

function size() {
    carre.style.visibility="visible";
    document.getElementById("carre").style.height = "300px";
    setTimeout 1000;
    document.getElementById("carre").style.width = "300px";
    widthGrowUp = 300;
    
}
function byebye() {
    carre.style.visibility="hidden";
}

function reset() {
    carre.style.visibility="visible";
    document.getElementById("carre").style.height = "100px";
    document.getElementById("carre").style.width = "100px";
    document.getElementById("carre").style.backgroundColor = "red";
    widthGrowUp = 150;
}

function goUp() {
    carre.style.visibility="visible";
    if (widthGrowUp <= 500) {
        document.getElementById("carre").style.height = widthGrowUp+"px";
        document.getElementById("carre").style.width = widthGrowUp+"px";
        widthGrowUp = widthGrowUp + 50;
    }
        else {
            document.getElementById("carre").style.height = widthGrowUp+"px";
            document.getElementById("carre").style.width = widthGrowUp+"px";
            widthGrowUp = 150;
        }
        
        
    }
    