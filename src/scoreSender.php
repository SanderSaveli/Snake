<?php
require_once '../src/connection.php';
require_once '../src/databaseHelpers.php';

if (!$connect) {
    die("Ошибка подключения: " . mysqli_connect_error());
}
$responseData = array(
    'message' => "Тук тук епта!"
);
// Выполняем SQL-запрос
$result = getScoreWithPlayerAndField($connect);

// Проверяем, был ли запрос успешным
if ($result) {
    header('Content-Type: application/json');
    // Выводим результат как JSON
    echo json_encode($result);
} else {
    // Обработка ошибки запроса
    echo "Ошибка: " . mysqli_error($connect);
}
$responseJson = json_encode($responseData);
// Устанавливаем заголовок, чтобы сообщить клиенту, что это JSON-ответ
header('Content-Type: application/json');
// Отправляем JSON-ответ клиенту
//echo $responseJson;
?>
