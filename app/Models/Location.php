<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function scopeState($query)
    {
        return $query->whereNull('parent_id');
    }

    public function scopeCity($query)
    {
        return $query->whereNotNull('parent_id');
    }
}
