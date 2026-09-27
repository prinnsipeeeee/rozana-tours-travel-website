@extends('admin.layout')
@section('title', $record ? __('admin.common.edit').' '.__($config['singular']) : __('admin.common.add', ['resource' => __($config['singular'])]))
@section('content')
<div class="page-head"><div><div class="eyebrow">{{ __($config['label']) }}</div><h1>{{ $record ? __('admin.common.edit').' '.__($config['singular']) : __('admin.common.add', ['resource' => __($config['singular'])]) }}</h1><p class="lead">{!! __('admin.resources.form_intro', ['mark' => '<span class="required">*</span>']) !!}</p></div></div>
<form class="card form-card" method="post" enctype="multipart/form-data" action="{{ $record ? route('admin.resources.update', [$resource, $record]) : route('admin.resources.store', $resource) }}">@csrf @if($record) @method('PUT') @endif
<section class="form-section"><div class="form-section-head"><h2>{{ __('admin.resources.content_details') }}</h2><p>{{ __('admin.resources.content_hint') }}</p></div><div class="form-grid">
@foreach($config['fields'] as $name => $field)
    @php
        $stored = $record?->{$name};
        if (in_array($field['type'], ['lines'], true) && is_array($stored)) $stored = implode("\n", $stored);
        if ($field['type'] === 'itinerary' && is_array($stored)) $stored = collect($stored)->map(fn($row) => ($row['day'] ?? '').' | '.($row['detail'] ?? ''))->implode("\n");
        $value = old($name, $stored ?? ($name === 'active' ? true : ''));
    @endphp
    @if($field['type'] === 'checkbox')
        <div class="field check"><input id="{{ $name }}" type="checkbox" name="{{ $name }}" value="1" @checked((bool)$value)><label for="{{ $name }}">{{ __($field['label']) }}</label></div>
    @else
        <div class="field {{ in_array($field['type'], ['textarea','lines','itinerary'], true) ? 'full' : '' }}"><label for="{{ $name }}">{{ __($field['label']) }}@if($field['required'] ?? false) <span class="required">*</span>@endif</label>
        @if(in_array($field['type'], ['textarea','lines','itinerary'], true))<textarea id="{{ $name }}" name="{{ $name }}" @required($field['required'] ?? false)>{{ $value }}</textarea>
        @elseif($field['type'] === 'select')<select id="{{ $name }}" name="{{ $name }}" @required($field['required'] ?? false)>@foreach($field['options'] as $optionValue => $optionLabel)<option value="{{ $optionValue }}" @selected($value === $optionValue)>{{ __($optionLabel) }}</option>@endforeach</select>
        @else<input id="{{ $name }}" type="{{ $field['type'] }}" name="{{ $name }}" value="{{ $field['type'] === 'file' ? '' : $value }}" step="{{ $field['step'] ?? '' }}" @required(($field['required'] ?? false) && $field['type'] !== 'file')>@endif</div>
    @endif
@endforeach
</div></section>
<div class="form-actions"><a class="button secondary" href="{{ route('admin.resources.index', $resource) }}">{{ __('admin.common.cancel') }}</a><button class="button" type="submit">{{ $record ? __('admin.common.save_changes') : __('admin.common.create_item') }}</button></div>
</form>
@endsection
