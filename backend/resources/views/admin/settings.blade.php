@extends('admin.layout')
@section('title', __('admin.settings.title'))
@section('content')
<div class="page-head"><div><div class="eyebrow">{{ __('admin.settings.eyebrow') }}</div><h1>{{ __('admin.settings.title') }}</h1><p class="lead">{{ __('admin.settings.intro') }}</p></div></div>
@php
    $groups = [
        ['title' => 'admin.settings.business', 'description' => 'admin.settings.business_description', 'keys' => ['site_name', 'whatsapp_number', 'phone_primary', 'phone_secondary', 'email', 'address']],
        ['title' => 'admin.settings.hero', 'description' => 'admin.settings.hero_description', 'keys' => ['hero_badge', 'hero_title', 'hero_highlight', 'hero_description']],
        ['title' => 'admin.settings.headings', 'description' => 'admin.settings.headings_description', 'keys' => ['visa_heading', 'visa_description', 'packages_heading', 'packages_description']],
    ];
@endphp
<form class="card form-card" method="post" action="{{ route('admin.settings.update') }}">@csrf @method('PUT')
@foreach($groups as $group)
<section class="form-section"><div class="form-section-head"><h2>{{ __($group['title']) }}</h2><p>{{ __($group['description']) }}</p></div><div class="form-grid">
@foreach($group['keys'] as $key)
    @php($field = $fields[$key])
    <div class="field {{ $field['type'] === 'textarea' ? 'full' : '' }}"><label for="{{ $key }}">{{ __($field['label']) }}</label>
    @if($field['type'] === 'textarea')<textarea id="{{ $key }}" name="{{ $key }}">{{ old($key, $settings[$key] ?? '') }}</textarea>
    @else<input id="{{ $key }}" type="{{ $field['type'] }}" name="{{ $key }}" value="{{ old($key, $settings[$key] ?? '') }}">@endif</div>
@endforeach
</div></section>
@endforeach
<div class="form-actions"><button class="button" type="submit">{{ __('admin.settings.save') }}</button></div>
</form>
@endsection
