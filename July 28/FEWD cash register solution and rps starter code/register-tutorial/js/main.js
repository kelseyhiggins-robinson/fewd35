$(function() {
  // Handler for .ready() called.

  var a = 3;
  var b = 5;

  add_nums(a, b, 43);
  add_nums(10, 4, 3);
  console.log('3rd sum is: ', sum_3);
  var sum_3 = add_nums(100, 43, 2);
  console.log('3rd sum is: ', sum_3);
  var sum_4 = add_nums(32, 4, 100);
  console.log('4th sum is: ', sum_4);

});

function add_nums(num1, num2, num3) {
	console.log('a is: ', num1, " b is: ", num2);
	var sum = num1 + num2 - num3;
	console.log('sum: ', sum);

	return sum;
}

var sebtweets = getTweets('sebsoler');
var gaTweets = getTweets('gafewd');
var densTweets = getTweets('dens');

function getTweets(username) {
	.....
	var tweets = $http('get', 'tweets/' + username);
	return tweets;
}

