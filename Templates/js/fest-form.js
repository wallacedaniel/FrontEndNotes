
// enable address fields on check
// State Select on Mailing List

// Toggler for 


// VENDOR FORM
$("#vendor-submit").click(function() {
	
  var newVendor = {};
  
  $("#vendor input").each(function() {
		var elementID = $(this);
		if($(this).hasClass('form-control')){
			newVendor = addKeyValue(elementID, newVendor);
		}
		if($(this).hasClass('form-check-input') && $(this).hasClass('selected')){
			newVendor = addKeyValue(elementID, newVendor);
		}
	});	
	
	$("#vendor textarea").each(function() {
		var elementID = $(this);
		newVendor = addKeyValue(elementID, newVendor);
	});	
	console.log(newVendor);  
});


// MAILING LIST SIGN UP
$("#mailing-submit").click(function() {
	 
	 var mailingSignUp = {};

	$("#mailing-list input").each(function() {
		var elementID = $(this);
		mailingSignUp = addKeyValue(elementID, mailingSignUp);
	});	
	console.log(mailingSignUp);
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

// Enables / disables mailing address info on check change
$('#mailing-check').click(function() {
	$('.additional-info input').each(function(){
		$(this).prop('disabled', function(i, v) { return !v; });
	});
});

