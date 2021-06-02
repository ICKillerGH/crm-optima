<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CreateClientRequest;
use App\Http\Requests\Api\UpdateClientRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ClientsController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('perPage', 10);

        $clients = Client::with(['nextActivity'])->paginate($perPage);

        return response()->json($clients);
    }

    public function store(CreateClientRequest $request)
    {
        $client = Client::create([
            'rut' => $request->input('rut'),
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'primary_phone' => $request->input('primaryPhone'),
            'secondary_phone' => $request->input('secondaryPhone'),
            'category' => $request->input('category'),
            'website' => $request->input('website'),
            'address' => $request->input('address'),
            'contact_name' => $request->input('contactName'),
            'type' => $request->input('type'),
            'state_id' => $request->input('stateId'),
            'city_id' => $request->input('cityId'),
        ]);

        return response()->json($client);
    }

    public function show(Client $client)
    {
        $client->load('activities');

        return $client;
    }

    public function update(UpdateClientRequest $request, Client $client)
    {
        $client->update([
            'rut' => $request->input('rut'),
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'primary_phone' => $request->input('primaryPhone'),
            'secondary_phone' => $request->input('secondaryPhone'),
            'category' => $request->input('category'),
            'website' => $request->input('website'),
            'address' => $request->input('address'),
            'contact_name' => $request->input('contactName'),
            'type' => $request->input('type'),
            'state_id' => $request->input('stateId'),
            'city_id' => $request->input('cityId'),
        ]);

        return response()->json($client);
    }

    public function delete(Client $client)
    {
        $client->delete();

        return $client;
    }
}
