<?php

namespace App\Tools\Web;

class Json
{
    /**
     * @param array $data
     * @return string
     */
    public static function encode(array $data): string
    {
        return json_encode($data);
    }

    /**
     * @param string $data
     * @return array
     */
    public static function decode(string $data): array 
    {
        return json_decode($data, true);
    }
}