<?php

namespace App\Formatters;

use DateTime;

class DateFormatter
{
    public static function format($date)
    {
        return new DateTime($date);
    }
}