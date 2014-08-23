// create list of images (images array)
var foodImgs = ['images/food1.jpg', 'images/food2.jpg',
    'images/food3.jpg', 'images/food4.jpg', 'images/food5.jpg',
    'images/food6.jpg', 'images/food7.jpg', 'images/food8.jpg'
];

var foodValues = [0, 0, 0, 0, 0, 0, 0, 0];

// image array index variable
var foodIndex = 0;



function changeIndex(direction) {

    if (direction == 'next') {
        // increment index
        foodIndex = foodIndex + 1;

    } else if (direction == 'previous') {

        // if we're not at the first image, decrement the index
        if (foodIndex != 0) {
            foodIndex = foodIndex - 1;

        } else {
            // if we are at the first image, do nothing
            return;
        }
    }

    // if index is at the end (it equals the length of array), 
    //display results
    if (foodIndex == foodImgs.length) {
        displayFoodAverage();
    } else {
        // else, update image
        $("#image-to-vote-on").attr('src', foodImgs[foodIndex]);
    }
}

// function to display results
function displayFoodAverage() {
    // create total variable
    var voteTotal = 0;
    // for loop over foodValues array
    for (i = 0; i < foodValues.length; i++) {
        // add each foodValue to total
        voteTotal = voteTotal + foodValues[i];
    }
    console.log(voteTotal);

    // divide the total by array length and save it in a new variable, "average"
    var voteAverage = voteTotal / foodValues.length;
    //hide img to vote on, buttons and voting tool
    $("#image-to-vote-on").hide();
    $("#buttons-wrapper").hide();

    // use the $ function to update the page with results
    $(".votingAverage").show();
    $(".votingAverage span").html(voteAverage);
}





//on page load, create event hook
$(function() {

    // click listener for next btn
    $('.next').click(function() {
        // on click add 1 to index
        //foodIndex = foodIndex + 1;
        //foodIndex ++;
        changeIndex('next');
        printDebug();
    });

    // click listener for previous btn
    $('.previous').click(function() {
        // on click subtract 1 from index
        //foodIndex = foodIndex - 1;
        //foodIndex --;
        changeIndex('previous');
        printDebug();
    });

    // change listener for select element
    $('select').on('change', function() {

        //store users vote in a variable
        var vote = parseInt(this.value);

        this.value = "";

        //add vote to vote array
        foodValues[foodIndex] = vote;

        changeIndex('next');
    });


});

function printDebug() {
    console.log('foodIndex is: ', foodIndex);
    console.log('foodImg is: ', foodImgs[foodIndex]);
}