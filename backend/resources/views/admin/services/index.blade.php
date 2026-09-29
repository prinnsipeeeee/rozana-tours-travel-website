@extends('admin.layout')
@section('title', __('admin.resources.services'))
@section('content')
<div class="page-head"><div><div class="eyebrow">{{ __('admin.resources.library') }}</div><h1>{{ __('admin.resources.services') }}</h1><p class="lead">{{ __('admin.services.intro') }}</p></div></div>
<div class="service-sections">
@foreach($services as $service)
    <section class="card service-section-card">
        <div class="service-section-icon">{{ Str::upper(Str::substr($service->title_en, 0, 1)) }}</div>
        <div class="service-section-copy"><span class="status {{ $service->active ? '' : 'hidden' }}">{{ $service->active ? __('admin.common.visible') : __('admin.common.hidden') }}</span><h2>{{ app()->getLocale() === 'ar' ? $service->title_ar : $service->title_en }}</h2><p>{{ app()->getLocale() === 'ar' ? $service->subtitle_ar : $service->subtitle_en }}</p></div>
        <div class="service-section-actions">
            @if($service->slug === 'visa')<a class="button secondary small" href="{{ route('admin.resources.index', 'visas') }}">{{ __('admin.services.manage_visa_items') }}</a>@endif
            <a class="button small" href="{{ route('admin.services.edit', $service) }}">{{ __('admin.services.edit_section') }}</a>
        </div>
    </section>
@endforeach
</div>
@endsection
