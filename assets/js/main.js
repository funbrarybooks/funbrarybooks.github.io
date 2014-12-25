/* Scroll 功能 */
var speed = 1000;	 

$(function(){
	$('a.goTop').click(function(){
		var cut = 0;
		if($(window).width() > 1170){
			cut = 30;
		}

		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#header').offset().top - cut
		}, 1000);

		return false;
	});

	$('a.aboutUs,label.aboutUs').click(function(){
		var cut = 115;
		if($(window).width() > 1170){
			cut = 210;
		}
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#aboutus').offset().top - cut
		}, speed);
		$('label.navbar-toggle').click();
		return false;
	});

	$('a.feature,label.feature').click(function(){
		var cut = 115;
		if($(window).width() > 1170){
			cut = 210;
		}
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#feature').offset().top -cut
		}, speed);
		$('label.navbar-toggle').click();
		return false;
	});

	$('a.contact,label.contact').click(function(){
		var cut = 64;
		if($(window).width() > 1170){
			cut = 159;
		}
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#contact').offset().top -cut
		}, speed);
		$('label.navbar-toggle').click();
		return false;
	});
});


$.fn.serializeObject = function()
{
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

$(document).on("submit", "form.SignInForm", function(event){
	var post = $(this).serializeObject();
	var name_flag = nameEmpty(post.name);
	var mail_flag = mailEmpty(post.mail);
	if(  name_flag && mail_flag){
		$('.SignInForm').addClass("success");
	}else{
		$('.SignInForm').removeClass("success");
	}
	return false;
});

function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 

