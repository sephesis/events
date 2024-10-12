<?php

namespace App\DTO;

use Spatie\DataTransferObject\Attributes\MapFrom;
use Spatie\DataTransferObject\DataTransferObject;

class Event extends DataTransferObject
{
    public int $id;

    public string $name;

    public \DateTime $startsAt;

    public string $url;

    public string $imgUrl;

    public array $location;

    public array $categories;

}