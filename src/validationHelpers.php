<?php
session_start();

function ClearValidation(){
    $_SESSION['validation'] = [];
}
function redirect(string $path){
    header("Location: $path");
    die();
}

function GeneratePasswordHash(string $userPassword, string $salt){
    $combinedPassword = $userPassword . $salt;
    return password_hash($combinedPassword, PASSWORD_BCRYPT);
}

function SetValidationError(string $fieldName, string $massage){
    $_SESSION['validation'][$fieldName] = $massage;
}

function HasValidationError(string $fieldName) : bool{  
    return isset($_SESSION['validation'][$fieldName]);
}
function GetValidationErrorAtribute(string $fieldName){
    echo isset($_SESSION['validation'][$fieldName]) ? 'aria-invalid="true"' : "";
}
function GetValidationErrorMassage(string $fieldName){
    echo $_SESSION['validation'][$fieldName] ?? "";
}
?>