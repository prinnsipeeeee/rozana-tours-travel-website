<?php

namespace App\Http\Requests\Admin;

use App\Models\SiteSetting;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class SaveSettingsRequest extends FormRequest
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
        return collect(SiteSetting::EDITABLE_KEYS)->mapWithKeys(fn (string $key): array => [
            $key => ['nullable', $key === 'email' ? 'email' : 'string', 'max:2000'],
        ])->all();
    }
}
