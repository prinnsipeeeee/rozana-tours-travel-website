@extends('admin.layout')
@section('title', 'Site settings')
@section('content')
<div class="page-head"><div><div class="eyebrow">Website preferences</div><h1>Site settings</h1><p class="lead">Manage contact information and the key messages visitors see across the landing page.</p></div></div>
@php
    $groups = [
        ['title' => 'Business details', 'description' => 'The contact information travelers use to reach your team.', 'keys' => ['site_name', 'whatsapp_number', 'phone_primary', 'phone_secondary', 'email', 'address']],
        ['title' => 'Hero section', 'description' => 'The main message visitors see when they arrive.', 'keys' => ['hero_badge', 'hero_title', 'hero_highlight', 'hero_description']],
        ['title' => 'Section headings', 'description' => 'Short introductions for your main travel services.', 'keys' => ['visa_heading', 'visa_description', 'packages_heading', 'packages_description', 'umrah_heading', 'umrah_description']],
    ];
@endphp
<form class="card form-card" method="post" action="{{ route('admin.settings.update') }}">@csrf @method('PUT')
@foreach($groups as $group)
<section class="form-section"><div class="form-section-head"><h2>{{ $group['title'] }}</h2><p>{{ $group['description'] }}</p></div><div class="form-grid">
@foreach($group['keys'] as $key)
    @php($field = $fields[$key])
    <div class="field {{ $field['type'] === 'textarea' ? 'full' : '' }}"><label for="{{ $key }}">{{ $field['label'] }}</label>
    @if($field['type'] === 'textarea')<textarea id="{{ $key }}" name="{{ $key }}">{{ old($key, $settings[$key] ?? '') }}</textarea>
    @else<input id="{{ $key }}" type="{{ $field['type'] }}" name="{{ $key }}" value="{{ old($key, $settings[$key] ?? '') }}">@endif</div>
@endforeach
</div></section>
@endforeach
<div class="form-actions"><button class="button" type="submit">Save settings</button></div>
</form>
@endsection
