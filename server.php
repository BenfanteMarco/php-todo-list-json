<?php 

$tasksArray = file_get_contents('robe.json');
header('Content-Type: application/json');
echo $tasksArray;

?>