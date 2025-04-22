let num;


document.getElementById("rollbutton").onclick = function(){
    num = Math.floor(Math.random()*20);
    document.getElementById("rollresult").innerHTML = num;
}