document.getElementById("clickMe").onclick = ausgeben;




function ausgeben(){
	const d = new Date();
	let day = d.getDay();
	let week = d.getWeek();
	switch(week%3){
		case 0:
		switch(day){
				case 1: marius();break;
				case 2: leon();break;
				case 3: marius();break;
				case 4: jakob();break;
				case 5: jakob();break;}
			break;
			
		case 1:
		
			switch(day){
				case 1: marius();break;
				case 2: leon();break;
				case 3: jakob();break;
				case 4: jakob();break;
				case 5: marius();break;}
			break;
		case 2:
			switch(day){
				case 1: marius();break;
				case 2: jakob();break;
				case 3: marius();break;
				case 4: jakob();break;
				case 5: leon();break;}
			break;
			
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

Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
  var dayOfYear = ((today - onejan + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
};