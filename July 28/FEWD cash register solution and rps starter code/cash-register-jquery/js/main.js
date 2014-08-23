// define var total and set to 0
var total = 0;

// set up submit listener
// on submit ... call function
$( "#entry" ).submit(

  function( event ) {
    event.preventDefault();

    //get input value and store in var
    var newPrice = $('#newEntry').val();
    //console.log('string newPrice: ', newPrice);

    //parseFloat the variable to make sure its a number
    var newPriceFloat = parseFloat(newPrice);
    //console.log('Float newPriceFloat: ', newPriceFloat);

    //add variable to total
    total = newPriceFloat + total;
    //console.log('total: ', total);

    //take number and convert it to currency format ($ etc...)
    //console.log('passing in: ', newPrice);
    var priceText = convertNum(newPrice);
    //console.log("got back: ", priceText);

    //render new line for number
    var newPElement = '<p>' + priceText + '</p>';
    $('#entries').append(newPElement);

    //convert float total into currency string
    var totalText = convertNum(total);

    //render new total
    $('#total').html(totalText);

    //clear input value
    $('#newEntry').val('');
    $( "#total" ).addClass( "updated" );
  }

);

function convertNum(userInput) {
  var currencyString = "$" + userInput + ".00";
  return currencyString;
}