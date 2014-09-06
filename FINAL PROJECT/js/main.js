function getPic(post) {
    var jumbo = "";
    $.each(post.photos[0].alt_sizes, function(idx, img) {
            // find photo with width of 1280
            if (img.width == 1280) {
                jumbo = img.url;
            }

            if ((jumbo.length == 0) && (img.width == 800)) {
                jumbo = img.url;
            }
    });
    return jumbo;
}


function getData(callback) {
    // create current data file string
    var dataFile = "/data/data1.json";
    // get the data
    $.get(dataFile, function(blogPosts) {
        callback(blogPosts);
    });
}