$(function(){

  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 150
  });

$('#slide2').waypoint(function() {
		$('#slide2 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide3').waypoint(function() {
		$('#slide3 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide4').waypoint(function() {
		$('#slide4 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide5').waypoint(function() {
		$('#slide5 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide6').waypoint(function() {
		$('#slide6 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide7').waypoint(function() {
		$('#slide7 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide8').waypoint(function() {
		$('#slide8 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide9').waypoint(function() {
		$('#slide9 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$('#slide10').waypoint(function() {
		$('#slide10 .hsContent').fadeIn( 1000 );
		
	},
	{
		offset: '20%',
		triggerOnce: true
});

$( ".button" ).click(function() {
	formValidation();
})


function formValidation() {
	var fname = $('#form input[name="entry.705729921"]').val()
	var lname = $('#form input[name="entry.1210850050"]').val()
	var email = $('#form input[name="entry.1173155173"]').val()

	if(fname != "" && lname != "" && email != "" && email) {
		$("form").submit(function(e){ $(this).unbind('submit').submit() });
		$(".button").submit()
	} else {
		$("form").submit(function(e){ e.preventDefault(); });
	}

	if(fname != ""){
		$('.text-error-message-1').css('display', 'none');
	} else {
		$('.text-error-message-1').css('display', 'block');
	}

	if(lname != ""){
		$('.text-error-message-2').css('display', 'none');
	} else {
		$('.text-error-message-2').css('display', 'block');
	}

	var pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	if(email != "" ){
		$('.text-error-message-3').css('display', 'none');
		if(pattern.test(email)){
			$('.text-error-message-4').css('display', 'none');
		} else {
		$('.text-error-message-4').css('display', 'block');
	}
	} else {
		$('.text-error-message-3').css('display', 'block');
	}
}


});