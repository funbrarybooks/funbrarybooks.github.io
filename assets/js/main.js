/* Scroll 功能 */
var speed = 1000;	 

$(document).ready(function(){
	Parse.initialize("6mw2PPC95xdnq2siFYjs2LETHI5r5XezaQWkfjgr", "A49rD6mASsFA7WVTzM4zdR3UXJXImzAs2EqoWMYi");
});

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
		var cut = 95;
		if($(window).width() > 1170){
			cut = 170;
		}
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#aboutus').offset().top - cut
		}, speed);
		$('label.navbar-toggle').click();

		$('#aboutus1').addClass('active');
		$('#aboutus2').addClass('active');

		$('#feature1').removeClass('active');
		$('#feature1').removeClass('active');

		$('#contact1').removeClass('active');
		$('#contact2').removeClass('active');

		return false;

	});

	$('a.feature,label.feature').click(function(){
		var cut = 95;
		if($(window).width() > 1170){
			cut = 170;
		}
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#feature').offset().top -cut
		}, speed);
		$('label.navbar-toggle').click();

		$('#feature1').addClass('active');
		$('#feature2').addClass('active');

		$('#aboutus1').removeClass('active');
		$('#aboutus2').removeClass('active');

		$('#contact1').removeClass('active');
		$('#contact2').removeClass('active');

		return false;
	});

	$('a.contact,label.contact').click(function(){
		var cut = 64;
		if($(window).width() > 1170){
			cut = 139;
		}
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#contact').offset().top -cut
		}, speed);
		$('label.navbar-toggle').click();

		$('#contact1').addClass('active');
		$('#contact2').addClass('active');

		$('#aboutus1').removeClass('active');
		$('#aboutus2').removeClass('active');

		$('#feature1').removeClass('active');
		$('#feature2').removeClass('active');

		return false;
	});

	$('a.goTop').click(function(){

		$('#aboutus1').removeClass('active');
		$('#feature1').removeClass('active');
		$('#contact1').removeClass('active');
		$('#aboutus2').removeClass('active');
		$('#feature2').removeClass('active');
		$('#contact2').removeClass('active');

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

$(document).on("submit", "form#SignInForm", function(event){
	var post = $(this).serializeObject();
	var name_flag = nameEmpty(post.name);
	var mail_flag = mailEmpty(post.mail);
	if(name_flag && mail_flag){
			var SignUpObject = Parse.Object.extend("SignUps");
			var signUp = new SignUpObject();
			signUp.save({name: post.name, email: post.mail}).then(
				function success(object) {
          $('#SignInForm').addClass("success");
				},
				function error(object) {
					// Ken: Please handle the error more gracefully
					alert('Oops, an error has occurred.  Please try again later')
				}
			);
	}else{
		$('#SignInForm').removeClass("success");
	}
	return false;
});

function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 

