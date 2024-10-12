<?php

namespace App;

class Api
{
    protected $params = [];

    public function __construct($params)
    {
        if (!$params) {
            return;
        }
        $this->params = $params;
    }

    public function search()
    {

    }
}