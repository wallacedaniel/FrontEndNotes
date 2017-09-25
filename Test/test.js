// Width and Height should be even values
canvasWidth = 600
canvasHeight = 360



function test(){

	
	// add even mulitpliers of canvasWidth to array
	widthDivs = [];
	for(i = 1;i <= canvasWidth;i++){
		if(canvasWidth%i == 0){
			widthDivs.push(i);
		}
	}
	// add even mulitpliers of canvasHeight to array
	heightDivs = [];
	for(i = 1;i <= canvasHeight;i++){
		if(canvasHeight%i == 0){
			heightDivs.push(i);	
		}
	}	
	
	console.log(widthDivs);
	console.log(heightDivs);
}


//Function Library

// Test for all EVEN MULTIPLIERS of a value
/*

function evenMultipliers(val){	
	for(i = 1;i <= val;i++){
		if(val%i == 0){
			var mult = val/i;
			console.log('width ' + i + ' x ' + mult);
		}
	}
}


*/


