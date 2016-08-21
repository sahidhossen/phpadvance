<?php 

$array = array("cow","Dog","Horse",array(1,2,4,5));

echo $array[3][1];
echo '<br/>'; 
// print_r($array);

?>
<pre>
	<?php print_r($array); ?>
</pre>
<?php 
$array[2] = "banana";
$array[4] = "Bread";

?> 
<pre>
	<?php print_r($array); ?>
</pre> 

<?php 
$books = array(
			'book1' => "Programing C",
			'book2'=>"C++",
			"book3"=>'Java',
			'book4'=>"Objective C" 
			);

$totalBooks = count($books); 

echo "You have total ".$totalBooks." Books <br/>";
echo $books['book3'];

echo '<br/>'; 

echo current($books);
next($books); 
echo '<br/>'; 

echo current($books);
echo '<br/>'; 
next($books); 
echo '<br/>'; 

echo current($books);
echo '<br/>'; 
next($books); 
echo '<br/>'; 
echo current($books);
echo '<br/> - '; 

next($books); 
echo '<br/>'; 
echo current($books);
echo '<br/>'; 
// echo end($books);
echo '<br/> <hr/>'; 



 $books = array(
			'book1' => "Programing C",
			'book2'=>"C++",
			"book3"=>'Java',
			'book4'=>"Objective C",
			'number'=>1254212 
			);

//Same as foreach loop
 while ($book = current($books)) {
 	echo $book."<br/>"; 
 	next($books);
 }

echo "<br/>"; 

foreach( $books as $key=>$book ){
	echo $key."=>".$book." ";
}


$keys = array_keys($books); 
print_r($keys);
echo "<br/>"; 


echo (array_key_exists('number', $books)) ? $books['number'] : '';

echo '<br/> <br/>';
echo '<h3> Implode Function </h3>';

$implode = implode(', ', $books); 

echo $implode;
$string = "banan, apple, coconat,,Orange"; 
$explode = explode(',', $string);
$explode = array_filter($explode);
?> 

<pre>
	<?php print_r($explode); ?>
</pre> 