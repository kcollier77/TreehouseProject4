
//Header Sticker plugin
$("#sticker").sticky({topSpacing:0});

//Photobox plugin
$('#gallery').photobox('a',{
    time:0,
    });

//Search Box
$("#search").keyup(function(){
    // Retrieve the input field text
    var filter = $(this).val();
    // Loop through the comment list
    $("#gallery img").each(function(){
        // If the list item does not contain the title attr, fade it out
        if ($(this).attr("alt").search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();
        // Show the list item if the phrase matches
        } else {
            $(this).fadeIn();
        }
    });
});