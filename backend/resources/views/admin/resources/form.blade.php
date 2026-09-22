@extends('admin.layout')
@section('title', ($record ? 'Edit ' : 'Add ').strtolower($config['singular']))
@section('content')
<div class="page-head"><div><div class="eyebrow">{{ $config['label'] }}</div><h1>{{ $record ? 'Edit' : 'Add' }} {{ strtolower($config['singular']) }}</h1><p class="lead">Provide the details travelers will see on the website. Fields marked with <span class="required">*</span> are required.</p></div></div>
<form class="card form-card" method="post" enctype="multipart/form-data" action="{{ $record ? route('admin.resources.update', [$resource, $record]) : route('admin.resources.store', $resource) }}">@csrf @if($record) @method('PUT') @endif
<section class="form-section"><div class="form-section-head"><h2>Content details</h2><p>Keep titles clear and descriptions concise for travelers.</p></div><div class="form-grid">
@foreach($config['fields'] as $name => $field)
    @php
        $stored = $record?->{$name};
        if (in_array($field['type'], ['lines'], true) && is_array($stored)) $stored = implode("\n", $stored);
        if ($field['type'] === 'itinerary' && is_array($stored)) $stored = collect($stored)->map(fn($row) => ($row['day'] ?? '').' | '.($row['detail'] ?? ''))->implode("\n");
        $value = old($name, $stored ?? ($name === 'active' ? true : ''));
    @endphp
    @if($field['type'] === 'checkbox')
        <div class="field check"><input id="{{ $name }}" type="checkbox" name="{{ $name }}" value="1" @checked((bool)$value)><label for="{{ $name }}">{{ $field['label'] }}</label></div>
    @else
        <div class="field {{ in_array($field['type'], ['textarea','lines','itinerary'], true) ? 'full' : '' }}"><label for="{{ $name }}">{{ $field['label'] }}@if($field['required'] ?? false) <span class="required">*</span>@endif</label>
        @if(in_array($field['type'], ['textarea','lines','itinerary'], true))<textarea id="{{ $name }}" name="{{ $name }}" @required($field['required'] ?? false)>{{ $value }}</textarea>
        @elseif($field['type'] === 'select')<select id="{{ $name }}" name="{{ $name }}" @required($field['required'] ?? false)>@foreach($field['options'] as $optionValue => $optionLabel)<option value="{{ $optionValue }}" @selected($value === $optionValue)>{{ $optionLabel }}</option>@endforeach</select>
        @else<input id="{{ $name }}" type="{{ $field['type'] }}" name="{{ $name }}" value="{{ $field['type'] === 'file' ? '' : $value }}" step="{{ $field['step'] ?? '' }}" @required(($field['required'] ?? false) && $field['type'] !== 'file')>@endif</div>
    @endif
@endforeach
</div></section>
<div class="form-actions"><a class="button secondary" href="{{ route('admin.resources.index', $resource) }}">Cancel</a><button class="button" type="submit">{{ $record ? 'Save changes' : 'Create item' }}</button></div>
</form>
@endsection
