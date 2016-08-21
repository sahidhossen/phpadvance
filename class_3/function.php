<?php 

$uri = $_SERVER['REQUEST_URI']; 
$url = current(array_filter(explode('/', $uri)));

function helloWorld( ){
	return "Hello World This is my first function";
}


$myResult = 12;

function sum( $argument1, $argument2,$method=''){

	if($method == '-'){
		$result = $argument1 - $argument2; 
	}else{ 
		$result = $argument1 + $argument2;
	} 
	return $result; 
}
 

$result = sum(20,20); 

echo ($result) ? "Your Summetion is ". $result : 'Your result is empty';

echo '<hr>'; 

function p_print($value){
	echo '<pre>'; 
	print_r($value); 
	echo '</pre>';
}

function calculation(){
	$listOfArg = func_get_args(); 
	 
	if(count($listOfArg)>0){  
		foreach ($listOfArg as $arg) {
		 	if($arg=='a')
		 } 
	}


}


calculation('a','b','c','d'); 

 ?> 
 