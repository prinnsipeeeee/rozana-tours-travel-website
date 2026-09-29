@extends('admin.layout')
@section('title', __('admin.services.edit_title', ['service' => app()->getLocale() === 'ar' ? $service->title_ar : $service->title_en]))
@section('content')
@php($formContent = old('content', $content))
<div class="page-head"><div><div class="eyebrow">{{ __('admin.resources.services') }}</div><h1>{{ __('admin.services.edit_title', ['service' => app()->getLocale() === 'ar' ? $service->title_ar : $service->title_en]) }}</h1><p class="lead">{{ __('admin.services.edit_intro') }}</p></div>@if($service->slug === 'visa')<a class="button secondary" href="{{ route('admin.resources.index', 'visas') }}">{{ __('admin.services.manage_visa_items') }}</a>@endif</div>
<form class="card form-card" method="post" action="{{ route('admin.services.update', $service) }}">@csrf @method('PUT')
<section class="form-section"><div class="form-section-head"><h2>{{ __('admin.services.menu_content') }}</h2><p>{{ __('admin.services.menu_description') }}</p></div><div class="form-grid">
@foreach(['title_en', 'title_ar', 'subtitle_en', 'subtitle_ar', 'href'] as $field)
    <div class="field"><label for="{{ $field }}">{{ __('admin.fields.'.$field) }} <span class="required">*</span></label><input id="{{ $field }}" name="{{ $field }}" type="text" value="{{ old($field, $service->{$field}) }}" required></div>
@endforeach
<div class="field"><label for="icon">{{ __('admin.fields.icon') }}</label><select id="icon" name="icon">@foreach(['visa', 'embassy', 'translation', 'license'] as $icon)<option value="{{ $icon }}" @selected(old('icon', $service->icon) === $icon)>{{ __('admin.service_icons.'.$icon) }}</option>@endforeach</select></div>
<div class="field"><label for="sort_order">{{ __('admin.fields.sort_order') }}</label><input id="sort_order" name="sort_order" type="number" min="0" value="{{ old('sort_order', $service->sort_order) }}"></div>
<div class="field check"><input type="hidden" name="active" value="0"><input id="active" name="active" type="checkbox" value="1" @checked((bool) old('active', $service->active))><label for="active">{{ __('admin.fields.active') }}</label></div>
</div></section>
<section class="form-section"><div class="form-section-head"><h2>{{ __('admin.services.section_content') }}</h2><p>{{ __('admin.services.section_description') }}</p></div><div class="content-editor">
@foreach($formContent as $key => $value)
    @include('admin.services.field', ['fieldKey' => $key, 'value' => $value, 'name' => 'content['.$key.']', 'depth' => 0])
@endforeach
</div></section>
<div class="form-actions"><a class="button secondary" href="{{ route('admin.services.index') }}">{{ __('admin.common.cancel') }}</a><button class="button" type="submit">{{ __('admin.common.save_changes') }}</button></div>
</form>
@endsection
