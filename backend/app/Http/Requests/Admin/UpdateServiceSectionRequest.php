<?php

namespace App\Http\Requests\Admin;

use App\Models\Service;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateServiceSectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
        /** @var Service $service */
        $service = $this->route('service');

        return [
            'title_en' => ['required', 'string', 'max:255'],
            'title_ar' => ['required', 'string', 'max:255'],
            'subtitle_en' => ['required', 'string', 'max:255'],
            'subtitle_ar' => ['required', 'string', 'max:255'],
            'href' => ['required', 'string', 'max:255', 'starts_with:#'],
            'icon' => ['required', Rule::in(['visa', 'embassy', 'translation', 'license'])],
            'active' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            ...$this->contentRules(config("service_sections.{$service->slug}", [])),
        ];
    }

    /** @return array<string, array<int, string>> */
    private function contentRules(mixed $schema, string $path = 'content'): array
    {
        if (is_bool($schema)) {
            return [$path => ['nullable', 'boolean']];
        }

        if (! is_array($schema)) {
            return [$path => ['required', 'string', 'max:10000']];
        }

        if (array_is_list($schema)) {
            if ($schema === [] || ! is_array($schema[0])) {
                return [$path => ['nullable', 'string', 'max:20000']];
            }

            $rules = [$path => ['required', 'array', 'max:100']];
            foreach ($schema[0] as $key => $value) {
                $rules = [...$rules, ...$this->contentRules($value, "{$path}.*.{$key}")];
            }

            return $rules;
        }

        $rules = [$path => ['required', 'array:'.implode(',', array_keys($schema))]];
        foreach ($schema as $key => $value) {
            $rules = [...$rules, ...$this->contentRules($value, "{$path}.{$key}")];
        }

        return $rules;
    }
}
