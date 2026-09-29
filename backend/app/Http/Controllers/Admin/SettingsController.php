<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SaveSettingsRequest;
use App\Models\SiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class SettingsController extends Controller
{
    public const FIELDS = [
        'site_name' => ['label' => 'admin.settings.fields.site_name', 'type' => 'text'],
        'whatsapp_number' => ['label' => 'admin.settings.fields.whatsapp_number', 'type' => 'text'],
        'phone_primary' => ['label' => 'admin.settings.fields.phone_primary', 'type' => 'text'],
        'phone_secondary' => ['label' => 'admin.settings.fields.phone_secondary', 'type' => 'text'],
        'email' => ['label' => 'admin.settings.fields.email', 'type' => 'email'],
        'address' => ['label' => 'admin.settings.fields.address', 'type' => 'textarea'],
        'hero_badge' => ['label' => 'admin.settings.fields.hero_badge', 'type' => 'text'],
        'hero_title' => ['label' => 'admin.settings.fields.hero_title', 'type' => 'text'],
        'hero_highlight' => ['label' => 'admin.settings.fields.hero_highlight', 'type' => 'text'],
        'hero_description' => ['label' => 'admin.settings.fields.hero_description', 'type' => 'textarea'],
        'visa_heading' => ['label' => 'admin.settings.fields.visa_heading', 'type' => 'text'],
        'visa_description' => ['label' => 'admin.settings.fields.visa_description', 'type' => 'textarea'],
        'packages_heading' => ['label' => 'admin.settings.fields.packages_heading', 'type' => 'text'],
        'packages_description' => ['label' => 'admin.settings.fields.packages_description', 'type' => 'textarea'],
    ];

    public function edit(): View
    {
        return view('admin.settings', [
            'fields' => self::FIELDS,
            'settings' => SiteSetting::allAsArray(),
        ]);
    }

    public function update(SaveSettingsRequest $request): RedirectResponse
    {
        foreach ($request->validated() as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        return back()->with('status', __('admin.flash.settings_saved'));
    }
}
