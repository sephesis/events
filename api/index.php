<?php
header("Access-Control-Allow-Origin: *"); // Разрешить все домены

require __DIR__. '/../vendor/autoload.php';

use App\Tools\Web\Json;
use App\Integration\Timepad;
use App\Integration\KudaGo;

// Обработка preflight-запросов
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204); // Возвращаем статус 204 No Content
    exit;
}

KudaGo::get('');


echo Json::encode(array("message" => "Hello World!")); die;
// Ваш код обработки запроса здесь
?>