$ (function() {

//  click listener for convert btn 
		$('#submit').click(convert);

		function convert() {
// create variables
		var F=$('#f').val();
// declare output
		var output=(F-32)*5/9;
//set output into cOutput
		$('#cOutput').html(output); 
		}
});