$(document).ready(function() {
	$('#home').click(function() {
		$('#home').addClass('active');
		
		$('#load-external').removeClass('active');
    	$('#load-content').removeClass('active');
	});

	$('#load-external').click(function() {
		$('#load-external').addClass('active');
		
		$('#home').removeClass('active');
    	$('#load-content').removeClass('active');
	});

	$('#load-content').click(function() {
		$('#load-content').addClass('active');
		
		$('#home').removeClass('active');
    	$('#load-external').removeClass('active');
	});
});