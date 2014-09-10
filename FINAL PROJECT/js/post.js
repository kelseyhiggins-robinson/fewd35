function renderPost(post) {


    // update html with blog data using $(...).html(data);
    $('.caption').html(post.caption);

    var postDate = new Date(post.date);
    var dateStr = (postDate.getMonth()+1) + "/" + (postDate.getDate()+1) + "/" + postDate.getFullYear();
    $('.date').html(dateStr);


    $('.tags').html(post.tags.join('<br/>'));


    var pic = getPic(post);
    console.log(pic);

    $('.jumbo').html("<img src='" + pic + "'></img>");


}



function getPost(blogData) {

    var id = getUrlParameter("id");

    $.each(blogData, function(i, post) {
        if (post.id == id) {
            renderPost(post);
            return;
        }
    });
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}


$(function() {
    getData(getPost);
});