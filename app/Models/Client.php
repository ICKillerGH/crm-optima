<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    public function nextActivity()
    {
        return $this->hasOne(Activity::class)->latest('date');
    }
}
