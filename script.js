let num;


document.getElementById("rollbutton").onclick = function(){
    num = Math.floor(Math.random()*20) + 1;
    document.getElementById("rollresult").innerHTML = num;
}