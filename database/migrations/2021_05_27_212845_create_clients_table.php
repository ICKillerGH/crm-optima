<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('rut', 100)->unique();
            $table->string('email', 100);
            $table->string('name');
            $table->string('primary_phone', 50);
            $table->string('secondary_phone', 50);
            $table->string('category');
            $table->string('website');
            $table->string('address');
            $table->string('contact_name', 100);
            $table->string('type');
            $table->foreignId('state_id')->constrained('locations');
            $table->foreignId('city_id')->constrained('locations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
