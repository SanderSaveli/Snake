<?php
require_once __DIR__ . '/validationHelpers.php';
$username = $_POST["username"];
$userPassword = $_POST['password'];
ClearValidation();
if(empty($username)){
    SetValidationError("name", "Empty Username");
    redirect("/pages/login.php");
}
if(empty($userPassword)){
    SetValidationError("password", "Empty Password");
    redirect("/pages/login.php");
}

require_once '../src/connection.php';
$quere = "SELECT * FROM Users WHERE name = '$username'";
$user = mysqli_query($connect, $quere);
$user = $user->fetch_array();
$salt = $user['sault'];
if(password_verify($userPassword . $salt, $user['password_hash'])){
    $_SESSION["user"]["name"] = $username; 
    redirect("/index.php");
}
else{
    SetValidationError("password", "Incorrect username or password");
    redirect("/pages/login.php");
}
?>