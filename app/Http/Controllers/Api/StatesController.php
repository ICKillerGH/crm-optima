<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Location;
use Illuminate\Http\Request;

class StatesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('perPage', 10);

        $states = Location::state()->paginate($perPage);

        return response()->json($states);
    }
}
