//Inital values / variables
var count = 0;

//Event handlers (event listeners)

//todo form submit
$('#new').on('submit', addNewItem);

$('#add').on('click', addNewItem);

// clear list & clear completed
$('#clear').on('click', function() {

    $('#todos li').remove();

    //update count
    updateCount();

});

$('#clearCompleted').on('click', function() {

    $('#todos li.done').remove();

    updateCount();
});

//edit button click listener 
$('#todos').on('click', '.edit', function(event) {

    // Prevent page reload
    event.preventDefault();

    var listItem = $(this).parent();

    var itemText = $(this).siblings('.item').html();

    listItem.html('<form class="editor"><input value="' + itemText + '"></form>');

    // Focus the keyboard on the input that was just added
    listItem.find('input').focus();

});

//remove button click listener
$('#todos').on('click', '.remove', function(event) {

    // Prevent page reload
    event.preventDefault();

    var listItem = $(this).parent().remove;

    // Focus the keyboard on the input that was just added
    listItem.find('input').focus();

});


// When a user leaves an item editor form, save the changes
$('#todos').on('blur', '.editor', saveItem);


function saveItem(event) {
    // Prevent page reload
    event.preventDefault();

    //get the text user typed in
    var editedItem = $(this).children('input').val();

    var listItem = $(this).parent();

    listItem.html('<span class="item">' + editedItem + '</span><span class="edit">Edit</span><span class="remove">Remove</span>')

}

function updateCount() {

    //count list items that do not have "done" class
    count = $('#todos li').not('.done').length;

    //update count in html
    $('#count').html(count);

}

function addNewItem(event) {

    // Prevent page reload
    event.preventDefault();

    //get the text user typed in
    var newItem = $('#newItem').val();

    //add <li> for new item
    $('#todos').append('<li><span class="item">' + newItem + '</span><span class="edit">Edit</span><span class="remove">Remove</span></li>');

    //clear input
    $('#newItem').val('');

    //update Todo counter
    updateCount();
}