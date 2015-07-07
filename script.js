var content = {
	ABOUT: 'ABOUT',
	CONTACT: 'CONTACT',
	NONE: 'NONE'
}

$(document).ready(function(){
	current = 'NONE';

	$('#about').click( function() {
		if(current == content.NONE) {
			$('#aboutContainer').fadeIn();
			current = content.ABOUT;
		} else if (current == content.CONTACT) {
			$('#contactContainer').fadeOut({ complete: function() {
				$('#aboutContainer').fadeIn();
				current = content.ABOUT;
			}});
		} else if (current == content.ABOUT){
			$('#aboutContainer').fadeOut();
			current = content.NONE;
		}	
	});

	$('#contact').click( function() {
		if(current == content.NONE) {
			$('#contactContainer').fadeIn();
			current = content.CONTACT;
		} else if (current == content.ABOUT) {
			$('#aboutContainer').fadeOut({complete: function() {
				$('#contactContainer').fadeIn();
				current = content.CONTACT;
			}});
		} else if (current == content.CONTACT){
			$('#contactContainer').fadeOut();
			current = content.NONE;
		}
	});

	$('.other').click( function() {
		if (current == content.ABOUT) {
			$('#aboutContainer').fadeOut();
			current = content.NONE;
		} else if (current == content.CONTACT){
			$('#contactContainer').fadeOut();
			current = content.NONE;
		} 
	});
});