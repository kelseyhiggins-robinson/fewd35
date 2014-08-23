//define variables (figure out what you want to keep track of)
var numMoves = 0;

$(function() {

    //click listener for the cards
    $('.cards').click(function() {

        // add "selected" class to card that was clicked which will change its css
        $(this).addClass('selected');

        //conditional based on number of cards clicked

        if ($('.selected').length == 2) {
            //do stuff... compare etc... 
            numMoves = numMoves + 1;
            var card1 = $(".selected:eq(0)").attr('class');
            var card2 = $(".selected:eq(1)").attr('class');

            var comparison = isAMatch(card1, card2);

            if (comparison === true) {
                //add class "matched"
                //remove class "selected"
                $('.selected').addClass("matched").removeClass('selected');
            } else {

            }

            //check if game is over after each move
            if ($('.matched').length == $('.cards').length) {
                //handle game over	
            }


        } else {
            //console.log('ONLY selected 1 card...');
        }

    });
    //shuffle cards after game over - change order of elements
    //cheat mode - change all codes to selected class
    function isAMatch(c1, c2) {
        //console.log('c1:', c1);
        //console.log('c2:', c2);
        if (c1 == c2) {
            //they are the same
            return true;
        } else {
            //they are different
            return false;
        }



    }



});