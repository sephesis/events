<?php

namespace App\Formatters;

class TextFormatter
{
    public static function format($string)
    {
       return trim($string);
    }
}