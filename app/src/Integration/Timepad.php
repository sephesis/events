<?php

namespace App\Integration;

use App\Tools\HTTPClient\HTTPClient;

class Timepad
{
    private const TOKEN = '7784e77912482f252d49f01394472bfeb4df9345';

    private const API_URL = 'https://api.timepad.ru/v1/';

    private const ENDPOINTS = [
        'events' => 'events.json',
    ];


    public static function get($url)
    {
        $client = new HTTPClient(self::API_URL, 5.0);

        $headers = [
            'Authorization' => 'Bearer ' . self::TOKEN,
            'Accept'        => 'application/json',
        ];

        $query = [
            'cities' => 'Москва,Санкт-Петербург',
            'fields' => 'location',
            'sort' => '+starts_at'
        ];

        $info = $client->get($query, $headers, self::ENDPOINTS['events']);

        if ($info["total"] > 0) {
            echo '<pre>';
            var_dump($info); die;
        }
    }

}