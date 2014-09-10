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

        // ADD AN <A> WITH AN HREF of "/fullPost.html?id=" + post.id
        //create div item template
        // create HTML string for this post

// 

// <div class="itemHovertitle">
            
//             <h2>This is the start of some text</h2>
//             <a href="#">View more</a>

//         </div>


        var itemTemplate = '<div class="item" id="'+ post.id +'">' +
         	'<img class="pic" src="' + jumbo + '" />' +
            // '<div class="hovertitle">' +
            // '<a target="_blank" href="' + url + '">' + caption + '</a>' +
            //caption + '</div>' + 
           
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
	window.location.href="/fullPost.html?id="+id;
}

$(function() {
    getData(renderList);
});