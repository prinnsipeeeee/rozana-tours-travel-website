<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateServiceSectionRequest;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ServiceSectionController extends Controller
{
    public function index(): View
    {
        return view('admin.services.index', [
            'services' => Service::query()
                ->whereIn('slug', array_keys(config('service_sections')))
                ->orderBy('sort_order')
                ->get(),
        ]);
    }

    public function edit(Service $service): View
    {
        abort_unless(array_key_exists($service->slug, config('service_sections')), 404);

        return view('admin.services.edit', [
            'service' => $service,
            'content' => $service->resolvedContent(),
        ]);
    }

    public function update(UpdateServiceSectionRequest $request, Service $service): RedirectResponse
    {
        abort_unless(array_key_exists($service->slug, config('service_sections')), 404);

        $validated = $request->validated();
        $validated['active'] = $request->boolean('active');
        $validated['sort_order'] ??= 0;
        $validated['content'] = $this->normalizeContent(
            $validated['content'],
            config("service_sections.{$service->slug}", []),
        );

        $service->update($validated);

        return back()->with('status', __('admin.flash.updated', ['resource' => __('admin.resources.service')]));
    }

    private function normalizeContent(mixed $submitted, mixed $schema): mixed
    {
        if (is_bool($schema)) {
            return filter_var($submitted, FILTER_VALIDATE_BOOLEAN);
        }

        if (! is_array($schema)) {
            return trim((string) $submitted);
        }

        if (array_is_list($schema)) {
            if ($schema === []) {
                return [];
            }

            if (! is_array($schema[0])) {
                $lines = is_array($submitted) ? $submitted : preg_split('/\r\n|\r|\n/', (string) $submitted);

                return collect($lines)->map(fn (mixed $line): string => trim((string) $line))->filter()->values()->all();
            }

            return collect(is_array($submitted) ? $submitted : [])
                ->filter(fn (mixed $item): bool => is_array($item))
                ->map(fn (array $item): array => $this->normalizeContent($item, $schema[0]))
                ->values()
                ->all();
        }

        return collect($schema)->mapWithKeys(fn (mixed $value, string $key): array => [
            $key => $this->normalizeContent(is_array($submitted) ? ($submitted[$key] ?? $value) : $value, $value),
        ])->all();
    }
}
