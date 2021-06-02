<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;

class CitiesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('perPage', 10);

        $cities = Location::query()
            ->city()
            ->when($request->query('stateId'), fn($query, $id) => $query->stateId($id))
            ->paginate($perPage);

        return response()->json($cities);
    }
}
