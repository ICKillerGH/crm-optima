<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class CreateClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'rut' => 'required|max:100',
            'email' => 'required|max:100|email',
            'name' => 'required|max:255',
            'primaryPhone' => 'required|max:50',
            'secondaryPhone' => 'required|max:50',
            'category' => 'required|max:255',
            'website' => 'nullable|max:255',
            'address' => 'required|max:255',
            'contactName' => 'required|max:100',
            'type' => 'required|max:255',
            'stateId' => 'required|exists:locations,id',
            'cityId' => 'required|exists:locations,id',
        ];
    }
}
