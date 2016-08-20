$(function(){


	function cal(a,b){

		return a+b;
	}

	
 	var calculation = {
 		status : "ss", 
 		name:'karim',
 		nikName:"Hossen",
 		modal:'.modal',
 		Target:'.openModal',

 		cal : function(a,b){

 			console.log(this.status);
 			if(this.status=='sum'){ 
 			console.log(a+b)
	 		}else{
	 			console.log(a-b)
	 			
	 		}
			console.log(this);
 		}, 
 		open : function(){

 				var Modal = this.modal;
 			$(this.Target).click(function(){
 				 
 				// $(Modal).slideDown();
 				$(Modal).fadeIn().stop().animate({
 					'top':'10%',
 					'opacity':1
 				})

 			})
 		}

 	}


 	// console.log(calculation.name+' '+calculation.nikName); 

  // 	calculation.nikName='Islam'; 

 	// console.log(calculation.name+' '+calculation.nikName); 

 	// calculation.cal(6,5); 
 	calculation.open();
	//console.log(c1al(45,20));


})