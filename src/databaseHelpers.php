<?php 
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
function getScoreWithPlayerAndField($connect){
    $quere = "SELECT 
    S.score, S.timestamp, U.name AS user_name, F.width, F.height, F.speed
    FROM Scores AS S
    JOIN Users AS U ON S.player_id = U.user_id
    JOIN Field_configs AS F ON S.field_confog_id = F.config_id;";
    $answ = mysqli_query($connect, $quere);
    $arr = array();
    while($curr = mysqli_fetch_assoc($answ)){
        $arr[] = $curr;
    }
    return $arr;
}
?>