<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CreateClientActivityRequest;
use App\Http\Requests\Api\UpdateClientActivityRequest;
use App\Models\Activity;
use App\Models\Client;

class ClientsActivitiesController extends Controller
{
    public function store(CreateClientActivityRequest $request, Client $client)
    {
        $activity = $client->activities()->create($request->data());

        return $activity;
    }

    public function update(UpdateClientActivityRequest $request, Client $client, Activity $activity)
    {
        $activity->update($request->data());

        return $activity;
    }

    public function delete(Client $client, Activity $activity)
    {
        $activity->delete();

        return $activity;
    }
}
