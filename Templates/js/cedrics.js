// Make the carousel image 

// Each time the carousel changes      .carousel-inner .active   <---the current image
// width of image is 100% of parent container    .carousel-inner   <--- parent container



$(document).ready(function() {

	//var $w = $(window),
    //$h = $('#home'),
	  
	var w = document.documentElement.clientWidth
	var h = document.documentElement.clientHeight
	
	var aspectRatio = w / h;
	
	console.log(w);
	console.log(h);
	console.log(aspectRatio);

	//aspectRatio = 1920 / 1280;

  //function resizeBg() {
    //$h.width($w.width());     
    //if( ( $h.width()/aspectRatio ) <= $("> .carousel", $h).height() ) {
    //  $h.width( $(" > .carousel", $h).height()*aspectRatio );
    //}
    //$h.height( $h.width()/aspectRatio);
  //}

  //$w.resize(resizeBg);
  //$w.onload=resizeBg();

});




// scrollspy to target vertical menu nav

$('body').scrollspy({ target: '#menu-nav' })