$(document).ready(function () {

	//define click listener for nav items

	$('#primary-nav li').click(
		function(e) {
			e.preventDefault();
	//on click...do something
	
	//toggle #slide-down display (hide/show)
	//if I click on a nav item and #slide-down wasn't visible
	//I want to show it	
	if($('#slide-down').is(':hidden')) {
		//code
		$('#slide-down').show();
		//add "active" class to li that was clicked
		$(this).addClass('active');

	}
	// else if slide down is visible AND $(this).hasClass('active')
	//bc having the active class which shows which content section is
	//currently visible...
	else if($('#slide-down').is(':visible') && $(this).hasClass('active')) {
		$('#slide-down').hide();
		$(this).removeClass('active');
	}
		
	else {
		$('#slide-down').show();
		//add "active" class to li that was clicked on
		$(this).addClass('active');
	}

	//remove "active" class from clicked li siblings
		$(this).siblings().removeClass('active');

	//show correct section
	var section = $(this).children('a').attr('href');

	$(section).show();

	//hide sibling sections
	$(section).siblings().hide();

});
