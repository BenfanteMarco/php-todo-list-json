<?php 

$tasksArray = file_get_contents('robe.json');
$tasksArrayList = json_decode($tasksArray, true);

if (isset($_POST['item'])) {

    $todoItem = [
        'task' => $_POST['item'],
        'done' => false,
    ];

    array_push($tasksArrayList, $todoItem);

    file_put_contents('tasks.json', json_encode($tasksArrayList));
}

header('Content-type: application/json');
echo json_encode($tasksArrayList);
?>