<?php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['email' => 'admin@admin.com']);
        Location::create(['name' => 'Carabobo']);
        Location::create(['name' => 'Valencia', 'parent_id' => 1]);
    }
}
