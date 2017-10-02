
//Comments for all

// CONTACT FORM
$("#contact-submit").click(function() {
	
  var newContact = {};
  
  $("#contact input").each(function() {
		var elementID = $(this);
		if($(this).hasClass('form-control')){
			newContact = addKeyValue(elementID, newContact);
		}
		if($(this).hasClass('form-check-input') && $(this).hasClass('selected')){
			newContact = addKeyValue(elementID, newContact);
		}
	});	
	
	$("#contact textarea").each(function() {
		var elementID = $(this);
		newContact = addKeyValue(elementID, newContact);
	});	
	console.log(newContact);  
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

// Enables / Disables a field based on which radio is checked - BootStrap quickie?
$('#group-radio').change(function() {
	// Understand this ...https://stackoverflow.com/questions/4702000/toggle-input-disabled-attribute-using-jquery -->
	$('#qty').prop('disabled', function(i, v) { return !v; });
});

$('#individual-radio').change(function() {
	$('#qty').prop('disabled', function(i, v) { return !v; });
});


