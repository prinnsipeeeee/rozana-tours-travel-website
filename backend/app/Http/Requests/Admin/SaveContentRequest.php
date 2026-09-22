<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SaveContentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $resource = $this->route('resource');
        $record = $this->route('record');
        $table = match ($resource) {
            'visas' => 'visas',
            'tour-packages' => 'tour_packages',
            'umrah-packages' => 'umrah_packages',
            default => abort(404),
        };

        $common = [
            'slug' => ['required', 'string', 'max:255', Rule::unique($table, 'slug')->ignore($record)],
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'duration' => ['sometimes', 'required', 'string', 'max:255'],
            'price' => ['required', 'string', 'max:255'],
            'rating' => ['nullable', 'numeric', 'between:0,5'],
            'popular' => ['nullable', 'boolean'],
            'active' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'inclusions' => ['sometimes', 'required', 'string', 'max:10000'],
        ];

        return match ($resource) {
            'visas' => [
                ...$common,
                'country' => ['required', 'string', 'max:255'],
                'flag_url' => ['nullable', 'url', 'max:2000'],
                'category' => ['required', Rule::in(['europe', 'americas', 'asia'])],
                'processing_time' => ['required', 'string', 'max:255'],
                'validity' => ['required', 'string', 'max:255'],
                'description' => ['required', 'string', 'max:10000'],
                'requirements' => ['required', 'string', 'max:10000'],
            ],
            'tour-packages' => [
                ...$common,
                'location' => ['required', 'string', 'max:255'],
                'flag_url' => ['nullable', 'url', 'max:2000'],
                'category' => ['required', Rule::in(['tropical', 'europe', 'arabian'])],
                'reviews' => ['nullable', 'integer', 'min:0'],
                'image_url' => ['nullable', 'string', 'max:2000'],
                'image_file' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
                'itinerary' => ['required', 'string', 'max:10000'],
            ],
            'umrah-packages' => [
                ...$common,
                'makkah_hotel' => ['required', 'string', 'max:255'],
                'madinah_hotel' => ['required', 'string', 'max:255'],
                'transport' => ['required', 'string', 'max:255'],
            ],
        };
    }
}
