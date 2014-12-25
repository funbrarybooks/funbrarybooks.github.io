function nameEmpty(name)
{
	/* 名字空白驗証 */
	if(name.trim() == ''){
		$('input[name=name]').attr("placeholder","請輸入您的姓名");
		$('input[name=name]').addClass("error");
		return false;
	}else{
		$('input[name=name]').attr("placeholder","姓名");
		$('input[name=name]').removeClass("error");
		return true;
	}
}

function mailEmpty(mail)
{
	/* Mail空白驗証 */
	if(mail.trim() == ''){
		$('input[name=mail]').attr("placeholder","請輸入您的Email");
		$('input[name=mail]').addClass("error");
		return false;
	}else{
		$('input[name=mail]').attr("placeholder","Email");
		$('input[name=mail]').removeClass("error");

		if(validateEmail(mail)){
			$('input[name=mail]').removeClass("error");
			$('#mail_message').css("display","none");
			return true;
		}else{
			$('#mail_message').css("display","block");
			$('input[name=mail]').addClass("error");
			return false;
		}

	}
}