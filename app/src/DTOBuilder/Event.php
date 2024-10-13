<?php

namespace App\DTOBuilder;

use App\DTO\Event as EventDTO;

use App\Formatters\DateFormatter;
use App\Formatters\TextFormatter;

class Event
{

    public function build(array $data)
    {
        return new EventDTO(
            [
                'id' => $data['id'],
                'name' => TextFormatter::format($data['name']),
                'url' => $data['url'],
                'startsAt' => DateFormatter::format($data['starts_at']),
                'imgUrl' => $data['poster_image']['default_url'] ?? '',
                'location' => $data['location'] ?? [],
                'categories' => $data['categories'] ?? [],
                'featured' => true,
            ]

        );
    }

    public function buildList($events)
    {
        $builder = [];

        foreach ($events as $event) {
            $builder[] = $this->build($event);
        }

        return $builder;
    }
}
