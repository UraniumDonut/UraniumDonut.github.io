document.getElementById("clickMe").onclick = ausgeben;

var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);


function ausgeben(){
	window.alert("test");
	
}