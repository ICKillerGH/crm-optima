<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CreateClientRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ClientsController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('perPage', 10);

        $clients = Client::paginate($perPage);

        return response()->json($clients);
    }

    public function create(CreateClientRequest $request)
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
        return $client;
    }
}
