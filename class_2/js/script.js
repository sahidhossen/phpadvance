$(function(){
 	
	// animation
	
	/*$(".animate").click(function(e){
		e.preventDefault();
		$(".background-animation").animate({
			'bottom':'100px',
			'opacity':1
		},500,function(){
			// alert("Your animation completed");
			$(this).css("background",'red');
		})
	})

*/ 

	$(".animate").click(function(e){
		e.preventDefault(); 

		var TargetElement = $(".background-animation"); 

		TargetElement.slideDown().animate({
			'bottom':'100px'
		});
 
	})


	function validateEmail(email) 
		{
		    var re = /\S+@\S+\.\S+/;
		    return re.test(email);
		}


	$("#signupForm").on('submit', function(e){
		e.preventDefault();

		var UserName = $(this).find("input[name=userName]");
		var emailID = $(this).find('input[name=emailID]');
		var password = $(this).find('input[type=password]');
		 	
		 	

		var MessageBox = $(".error");  
		
		var message = '';

		 if(UserName.val().length<5){
		 	UserName.parents('.form-group').addClass('has-error');
		 	message +='<p class="alert alert-warning"> User Name Invalid </p>';
		 }else {
		 	UserName.parents('.form-group').removeClass('has-error');
		 }

		  if(!validateEmail(emailID.val())){
		 	message +='<p class="alert alert-warning"> Correct Your Email ID </p>';
		 }

		  if( password.val().length<6 ){
		 	message +='<p class="alert alert-warning"> Password is minimum 6 character </p>';
		 }

 
		 	if(message.length>0){
		 		MessageBox.html(message);
		 	}else {
		 		MessageBox.htlm('');
		 	}
		// return false;
	})

})