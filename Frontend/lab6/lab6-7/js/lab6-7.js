$(document).ready(function(){
	$('.error').hide();
	$('.userid').blur(function(){
		var data = $('.userid').val();

		var len = data.length;

		if(len < 1){
			$('.userid').next().show();
			$('.password').attr('disabled', true);
			$('.verpassword').attr('disabled', true);
		}
		else{
			$('.userid').next().hide();
			$('.password').removeAttr('disabled');
			$('.verpassword').removeAttr('disabled');
		}
	});

	$('.password').blur(function(){
		var data = $('.password').val();

		var len = data.length;

		if(len < 1){
			$('.password').next().show();
			$('.verpassword').attr('disabled', true);
		}
		else{
			$('.password').next().hide();
			$('.verpassword').removeAttr('disabled');
		}
	});

	$('.verpassword').blur(function(){
		if($('.password').val() !== $('.verpassword').val()){
			$('.verpassword').next().show();
			$('.error').show().text('Las contrasenas no concuerdan')
		}
		else{
			$('.password').next().hide();
		}
	});

	$('.password').focus(function(){
		var data = $('.userid').val();

		var len = data.length;

		if(len < 1){
			$('.userid').focus();
		}
	});	

	$('.verpassword').focus(function(){
		var data = $('.userid').val();

		var len = data.length;

		if(len < 1){
			$('.userid').focus();
		}
	});	
});