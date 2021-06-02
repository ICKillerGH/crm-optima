<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

class CreateClientActivityRequest extends FormRequest
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
            'contact' => 'required|max:255',
            'action' => 'required|max:255',
            'comment' => 'required|max:255',
            'date' => 'required|date_format:Y-m-d',
            'time' => 'required|date_format:H:i',
        ];
    }

    public function data()
    {
        return array_merge(Arr::except($this->validated(), 'time'), [
            'date' => sprintf('%s %s', $this->date, $this->time),
        ]);
    }
}
