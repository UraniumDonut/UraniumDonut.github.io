document.getElementById("clickMe").onclick = ausgeben;




function ausgeben(){
	const d = new Date();
	let day = d.getDay();
	switch(day){
		case 1: marius();break;
		case 2: leon();break;
		case 3: marius();break;
		case 4: jakob();break;
		case 5: jakob();break;
	}
}

function leon(){
	window.alert("Leon");
}
function jakob(){
	window.alert("Jakob");
}
function marius(){
	window.alert("Marius");
}