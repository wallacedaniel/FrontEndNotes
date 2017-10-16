
/*


//current date and time

var d = new Date();
document.getElementById("demo").innerHTML = d;


//specified date and time

var d = new Date("October 15, 2017 18:24:28");
document.getElementById("demo").innerHTML = d;


//Button with a click function
var dateButton = document.querySelectorAll('#datebutton');
dateButton.addEventListener('click', createParagraph); 




*/

var dateButton = document.querySelector('.date-submit');
dateButton.addEventListener('click', displayDate);





var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

function displayDate(){
	var startDate = document.createElement('h2');
	startDate.textContent = new Date("October 15, 2017 18:24:28");
	
	//var dateDiv = document.getElementsByClassName('date-container');
	//dateDiv.appendChild(startDate);
	
	document.body.appendChild(start-date);
	
	
	
	//var currentDate = new Date();
	
	//document.getElementById("start-date").innerHTML = startDate;
	//document.getElementById("date").innerHTML = currentDate;
}



 
  



