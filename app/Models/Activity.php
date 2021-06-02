<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $appends = [
        'event_data',
    ];

    public function getEventDataAttribute()
    {
        return [
            'title' => $this->action,
            'start' => $this->date,
            'extendedProps' => $this->setAppends([])->toArray(),
        ];
    }
}
