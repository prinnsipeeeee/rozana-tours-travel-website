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
        'site_name' => ['label' => 'Site name', 'type' => 'text'],
        'whatsapp_number' => ['label' => 'WhatsApp number (digits only)', 'type' => 'text'],
        'phone_primary' => ['label' => 'Primary phone', 'type' => 'text'],
        'phone_secondary' => ['label' => 'Secondary phone', 'type' => 'text'],
        'email' => ['label' => 'Email address', 'type' => 'email'],
        'address' => ['label' => 'Office address', 'type' => 'textarea'],
        'hero_badge' => ['label' => 'Hero badge', 'type' => 'text'],
        'hero_title' => ['label' => 'Hero title', 'type' => 'text'],
        'hero_highlight' => ['label' => 'Hero highlighted text', 'type' => 'text'],
        'hero_description' => ['label' => 'Hero description', 'type' => 'textarea'],
        'visa_heading' => ['label' => 'Visa section heading', 'type' => 'text'],
        'visa_description' => ['label' => 'Visa section description', 'type' => 'textarea'],
        'packages_heading' => ['label' => 'Tour packages heading', 'type' => 'text'],
        'packages_description' => ['label' => 'Tour packages description', 'type' => 'textarea'],
        'umrah_heading' => ['label' => 'Umrah section heading', 'type' => 'text'],
        'umrah_description' => ['label' => 'Umrah section description', 'type' => 'textarea'],
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

        return back()->with('status', 'Site settings saved.');
    }
}
