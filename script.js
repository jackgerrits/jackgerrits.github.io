$(document).ready(function(){
	$('.leftBox').mouseenter(function(){
		$(this).animate({
			height: '+=10px'
			});
	});
	
	$('.leftBox').mouseleave(function(){
		$(this).animate({
			height: '-=10px'
			});
	});
	
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$(window).scroll(function(){
    if  ($(window).scrollTop() >= 800){
         $('#banner a').css({color: '#666'});
		
  		} else {
         $('#banner a').css({color: '#FFF'});
		 
        }
		
});
	
});