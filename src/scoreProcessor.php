<?php
require_once '../src/connection.php';
session_start();
function getUser(string $name, $connect){
    $quere = "SELECT * FROM `Users` WHERE name = '$name'";
    $answ = mysqli_query($connect, $quere);
    return mysqli_fetch_assoc($answ);
}

function createFieldConfig($width, $height, $speed, $connect){
    $quere = "INSERT INTO Field_configs (width, height, speed) VALUES ('$width', '$height', '$speed')";
    mysqli_query($connect, $quere);
}

function getFieldConfig($width, $height, $speed, $connect){
    $quere = "SELECT * FROM `Field_configs` WHERE speed = '$speed' AND width = '$width' AND height = '$height'";
    $answ = mysqli_query($connect, $quere);
    return mysqli_fetch_assoc($answ);
}

function getOrCreateFieldConfig($width, $height, $speed, $connect){
    $fieldConfig = getFieldConfig($width, $height, $speed, $connect);
    if($fieldConfig == 0){
        createFieldConfig($width, $height, $speed, $connect);
        $fieldConfig = getFieldConfig($width, $height, $speed, $connect);
    }
    return $fieldConfig;
}
function addScore($userID, $fieldConfigID, $score, $connect){
    $quere = "INSERT INTO Scores (player_id, field_confog_id, score, timestamp) VALUES ('$userID', '$fieldConfigID', '$score', NOW())";
    mysqli_query($connect, $quere);
}
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