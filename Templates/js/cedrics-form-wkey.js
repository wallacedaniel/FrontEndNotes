

// RESERVATION FORM
$("#reservation-submit").click(function() {
	
  var newReservation = {};
  var newsLetterSignUp = {};

  $("#reservation input").each(function() {
		var elementID = $(this);
		if($(this).hasClass('form-control')){
			newReservation = addKeyValue(elementID, newReservation);
			
			if($('#news-include-radio').prop('checked')) /*  && ($(this) == $('#fname-input') || $(this) === $('#lname-input') || $(this) === $('#email-input')*/{   
				console.log($(this));
				//newsLetterSignUp = addKeyValue(elementID, newsLetterSignUp);
			}
		}
		if($(this).hasClass('form-check-input') && $(this).hasClass('selected')){
			newReservation = addKeyValue(elementID, newReservation);
		}
	});	
	
	$("#reservation textarea").each(function() {
		var elementID = $(this);
		newReservation = addKeyValue(elementID, newReservation);
	});	
	
	var dbRef = 'reservations'
	dataInput(dbRef, newReservation);
	
	if(newsLetterSignUp.length > 0){
		var dbRef = 'signUp'
		dataInput(dbRef, newsLetterSignUp);
	}
	
	console.log(newReservation); 
	console.log(newsLetterSignUp);	
});


// NEWSLETTER SIGN UP FORM
$("#signUp-submit").click(function() {
	 
	 var newsLetterSignUp = {};

	$("#newsletter input").each(function() {
		var elementID = $(this);
		newsLetterSignUp = addKeyValue(elementID, newsLetterSignUp);
	});	
	
	var dbRef = 'signUp'
	dataInput(dbRef, newsLetterSignUp);
	
	console.log(newsLetterSignUp);
});


// FUNCTIONS

// Assigns key value pairs to form objects
function addKeyValue(elementID, formObjName){
	var value = elementID.val();
	var key = elementID.attr('name');
	obj = { [key]: value }; 
	$.extend(formObjName, obj);
	return formObjName;
}

// Toggles 'selected' class on inputs
$('.form-check-input').click(function() {	 
	$(this).toggleClass('selected');
});



function dataInput(dbRef, data){
	
	var config = {
		apiKey: "AIzaSyDGZTfzI203kduXIqD4vozaBDKMGJSEyOw",
		authDomain: "testproject-bbacc.firebaseapp.com",
		databaseURL: "https://testproject-bbacc.firebaseio.com",
		projectId: "testproject-bbacc",
		storageBucket: "",
		messagingSenderId: "530575455352"
    };
	
    firebase.initializeApp(config);
	var database = firebase.database();
	var ref = database.ref(dbRef);
	ref.push(data);
	ref.on('value', gotData, errData);
	
}

function gotData(data){
	//console.log(data.val());
	
	var reservations = data.val();
	var keys = Object.keys(reservation);

	//console.log(keys);
	
	for(var i = 0; i < keys.length; i++){
		var k = keys[i];
		//console.log(k);
		//var name = reservations[k].fname + reservations[k].lname;
		//console.log(name);
	}
	
}

function errData(err){
	console.log('Error!');
	console.log(err);
}





















