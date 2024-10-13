<?php

namespace App\Formatters;

class EventFormatter
{
    private static $keyMap = [
        'name' => 'name',
        'title' => 'name',
        'age_restriction' => 'age_restriction',
        'location' => 'location',
    ];

    public static function prepare(array $events): array
    {
        return array_map(function($event) {

            $event = self::handleCoordinates($event);

            return array_reduce(array_keys(self::$keyMap), function($formattedEvent, $oldKey) use ($event) {
                if (isset($event[$oldKey])) {
                    $formattedEvent[self::$keyMap[$oldKey]] = $event[$oldKey];
                }
                return $formattedEvent;
            }, []);
        }, $events);
    }

   
     private static function handleCoordinates(array $event): array
     {
         if (isset($event['location']['coordinates'])) {
            $event['location']['coordinates'] = $event['location']['coordinates'];
         } elseif (isset($event['location']['coords'])) {
            $event['location']['coordinates'] = $event['location']['coords'];
         }
 
         return $event;
     }
}