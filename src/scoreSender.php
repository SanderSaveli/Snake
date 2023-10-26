<?php
require_once '../src/connection.php';
require_once '../src/databaseHelpers.php';
session_start();

if (!$connect) {
    die("Ошибка подключения: " . mysqli_connect_error());
}
if(isset($_POST['type']) && isset($_SESSION["user"]["name"])){
    if($_POST['type'] === "all"){
        $result = getScoreWithPlayerAndField($connect);
    }
    else{
        $result = getUserScores($connect, $_SESSION["user"]["name"]);
    }
}
else{
    //$result = getScoreWithPlayerAndField($connect);
}

if ($result) {
    header('Content-Type: application/json');
    echo json_encode($result);
} else {
    echo "Ошибка: " . mysqli_error($connect);
}
?>
