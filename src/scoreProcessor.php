<?php
require_once '../src/connection.php';
require_once '../src/databaseHelpers.php';
session_start();

$responseData = array(
    'message' => "Тук тук епта!"
);
// Проверяем, был ли отправлен POST-запрос
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(isset($_POST['score'])){
        if(isset($_SESSION["user"]["name"])){
            $score = $_POST['score'];
            $height = $_POST["fieldHeight"];
            $width = $_POST["fieldWidth"];
            $speed = $_POST["speed"];
            $name = $_SESSION["user"]["name"];
            $fieldConfig = getOrCreateFieldConfig($width, $height, $speed, $connect);
            $user = getUser($name, $connect);
            addScore($user["user_id"], $fieldConfig["config_id"], $score, $connect);
            $responseData['message'] = "All complete!";
        }   
        else{
            $responseData['message'] = "No User!";
        }
    }
    else{
        $responseData['message'] = "No Score!";
    }
}
else{
    $responseData['message'] = "Incorrect Type!";
}
// Преобразуем массив данных в формат JSON
$responseJson = json_encode($responseData);
// Устанавливаем заголовок, чтобы сообщить клиенту, что это JSON-ответ
header('Content-Type: application/json');
// Отправляем JSON-ответ клиенту
echo $responseJson;
?>