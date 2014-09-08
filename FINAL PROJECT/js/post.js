function renderPost(post) {


	// update html with blog data using $(...).html(data);
	$('.caption').html(post.caption);
    $('.date').html(post.date);
    $('.tags').html(post.tags);
   

    var pic = getPic(post);
    console.log(pic);

    $('.jumbo').html(pic);
        console.log(pic);


}



function getPost(blogData) {

	var id = getUrlParameter("id");

    $.each(blogData, function(i, post){
        if (post.id == id) {
            renderPost(post);
            return;
        }
    });
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}   


$(function() {
    getData(getPost);
});