var currData = 1;
var postCounter = 0;

function getData() {
    // create current data file string
    var dataFile = "/data/data" + currData + ".json";
    // increment the counter for the next data pull
    currData++;
    var container = $('#container');

    // get the data
    $.get(dataFile, function(blogPosts) {

        // loop through the results.
        $.each(blogPosts, function(i, post) {
            postCounter++;
            if (postCounter == 2) {
                var logo = '<div class="item logo">' +
                    'HOWDY!!!!' +
                    '</div>';
                container.append(logo);
            }

            // extract the elements you need for the grid
            var caption = post.caption;

            var url = post.post_url;

            var jumbo = "";
            var medium = "";
            $.each(post.photos[0].alt_sizes, function(idx, img) {

                // find photo with width of 1280
                if (img.width == 1280) {
                    jumbo = img.url;
                }
                // find photo with width of 250	
                if (img.width == 400) {
                    medium = img.url;
                }
            });

            //create div item template
            // create HTML string for this post
            var itemTemplate = '<div class="item" >' +
                '<div class="hovertitle">' +
                // '<a target="_blank" href="' + url + '">' + caption + '</a>' +
                caption + '</div>' +
                '<img class="pic" src="' + jumbo + '" />' +
                '</div>';

            // append the HTML string to #container
            container.append(itemTemplate);

        });

        var msnry = new Masonry('#container', {
            // options
            // columnWidth: 200,
            itemSelector: '.item'
        });

    });
}

$(function() {
    getData();
});