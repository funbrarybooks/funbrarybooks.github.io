$(document).ready(function(){

		    /** 
		     * This part does the "fixed navigation after scroll" functionality
		     * We use the jQuery function scroll() to recalculate our variables as the 
		     * page is scrolled/
		     */
		     $(window).scroll(function(){
		     	var window_top = $(window).scrollTop();
		     	var div_top = $('#nav-anchor').offset().top;
		     	if (window_top > div_top) {
		     		$('div.navbar').addClass('navbar-fixed-top');
		     	} else {
		     		$('div.navbar').removeClass('navbar-fixed-top');
		     	}
		     });
		     $(window).scroll(function(){
		     	var window_top = $(window).scrollTop();
		     	var div_top = $('#nav-anchor').offset().top;
		     	if (window_top > div_top) {
		     		$('#navbar_out').addClass('fix-top');
		     	} else {
		     		$('#navbar_out').removeClass('fix-top');
		     	}
		     });

		 });