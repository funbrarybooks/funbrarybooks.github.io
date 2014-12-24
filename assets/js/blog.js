$(document).ready(function(){
	$('#content').infinitescroll({
		navSelector: "#next:last",
		nextSelector: "#next:last",
		itemSelector: "#content",
		debug: false,
		dataType: 'html',
    maxPage: 6,
		path: function(index) {
			return "blog" + index + ".html";
		}
		// appendCallback	: false, // USE FOR PREPENDING
    }, function(newElements, data, url){
      // used for prepending data
    	// $(newElements).css('background-color','#ffef00');
    	// $(this).prepend(newElements);
    });
});