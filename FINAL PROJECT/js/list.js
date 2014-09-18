var postCounter = 0;

function renderList(blogPosts) {
    var container = $('#container');
    // loop through the results.
    $.each(blogPosts, function(i, post) {
        postCounter++;
        if (postCounter == 2) {
            var logo = '<div class="item logoLarge">' +
                '<img src="/images/JPsLabLogo4.png">' +
                '</div>';
            container.append(logo);
        }

        // extract the elements you need for the grid
        var caption = post.caption;

        var url = post.post_url;

        var jumbo = getPic(post);


        var itemTemplate = '<div class="item" id="' + post.id + '">' +
            '<img class="pic" src="' + jumbo + '" />' +
            caption +
            '</div>';

        // append the HTML string to #container
        container.append(itemTemplate);

    });

    $('.item').click(clickPost);
}

function clickPost() {
    var id = $(this).attr('id');
    if (id) {
        renderPost(id);
    }
}

function renderPost(id) {
    window.location.href = "/fullPost.html?id=" + id;
}

$(function() {
    getData(renderList);
});