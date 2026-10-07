@extends('admin.layout')
@section('title', $record ? __('admin.sections.edit_item') : __('admin.sections.add_item'))
@section('content')
<div class="page-head"><div><div class="eyebrow"><a href="{{ route('admin.sections.show', $section) }}" style="color:inherit">{{ $section->name_en }}</a></div><h1>{{ $record ? __('admin.sections.edit_item') : __('admin.sections.add_item') }}</h1><p class="lead">{!! __('admin.resources.form_intro', ['mark' => '<span class="required">*</span>']) !!}</p></div></div>
<form class="card form-card" method="post" action="{{ $record ? route('admin.sections.items.update', [$section, $record]) : route('admin.sections.items.store', $section) }}">@csrf @if($record) @method('PUT') @endif
<section class="form-section"><div class="form-section-head"><h2>{{ __('admin.resources.content_details') }}</h2><p>{{ __('admin.sections.item_hint') }}</p></div><div class="form-grid">
    <div class="field"><label for="slug">{{ __('admin.fields.slug') }} <span class="required">*</span></label><input id="slug" type="text" name="slug" value="{{ old('slug', $record?->slug) }}" required></div>
    <div class="field"><label for="category">{{ __('admin.fields.category') }}</label><select id="category" name="category"><option value="">—</option>@foreach($categoryOptions as $optionValue => $optionLabel)<option value="{{ $optionValue }}" @selected(old('category', $record?->category) === $optionValue)>{{ $optionLabel }}</option>@endforeach</select></div>
    <div class="field"><label for="title_en">{{ __('admin.fields.title_en') }} <span class="required">*</span></label><input id="title_en" type="text" name="title_en" value="{{ old('title_en', $record?->title_en) }}" required></div>
    <div class="field"><label for="title_ar">{{ __('admin.fields.title_ar') }}</label><input id="title_ar" type="text" name="title_ar" value="{{ old('title_ar', $record?->title_ar) }}"></div>
    <div class="field full"><label for="image_url">{{ __('admin.fields.image_url') }}</label><input id="image_url" type="text" name="image_url" value="{{ old('image_url', $record?->image_url) }}"></div>
    <div class="field"><label for="price">{{ __('admin.fields.price') }}</label><input id="price" type="text" name="price" value="{{ old('price', $record?->price) }}"></div>
    <div class="field"><label for="sort_order">{{ __('admin.fields.sort_order') }}</label><input id="sort_order" type="number" name="sort_order" min="0" value="{{ old('sort_order', $record?->sort_order ?? 0) }}"></div>
</div></section>
<section class="form-section"><div class="form-section-head"><h2>{{ __('admin.sections.specs_title') }}</h2><p>{{ __('admin.sections.specs_hint') }}</p></div><div class="form-grid">
    <div class="field"><label for="spec1_label_en">{{ __('admin.fields.spec1_label_en') }}</label><input id="spec1_label_en" type="text" name="spec1_label_en" value="{{ old('spec1_label_en', $record?->spec1_label_en) }}"></div>
    <div class="field"><label for="spec1_value_en">{{ __('admin.fields.spec1_value_en') }}</label><input id="spec1_value_en" type="text" name="spec1_value_en" value="{{ old('spec1_value_en', $record?->spec1_value_en) }}"></div>
    <div class="field"><label for="spec1_label_ar">{{ __('admin.fields.spec1_label_ar') }}</label><input id="spec1_label_ar" type="text" name="spec1_label_ar" value="{{ old('spec1_label_ar', $record?->spec1_label_ar) }}"></div>
    <div class="field"><label for="spec1_value_ar">{{ __('admin.fields.spec1_value_ar') }}</label><input id="spec1_value_ar" type="text" name="spec1_value_ar" value="{{ old('spec1_value_ar', $record?->spec1_value_ar) }}"></div>
    <div class="field"><label for="spec2_label_en">{{ __('admin.fields.spec2_label_en') }}</label><input id="spec2_label_en" type="text" name="spec2_label_en" value="{{ old('spec2_label_en', $record?->spec2_label_en) }}"></div>
    <div class="field"><label for="spec2_value_en">{{ __('admin.fields.spec2_value_en') }}</label><input id="spec2_value_en" type="text" name="spec2_value_en" value="{{ old('spec2_value_en', $record?->spec2_value_en) }}"></div>
    <div class="field"><label for="spec2_label_ar">{{ __('admin.fields.spec2_label_ar') }}</label><input id="spec2_label_ar" type="text" name="spec2_label_ar" value="{{ old('spec2_label_ar', $record?->spec2_label_ar) }}"></div>
    <div class="field"><label for="spec2_value_ar">{{ __('admin.fields.spec2_value_ar') }}</label><input id="spec2_value_ar" type="text" name="spec2_value_ar" value="{{ old('spec2_value_ar', $record?->spec2_value_ar) }}"></div>
</div></section>
<section class="form-section"><div class="form-section-head"><h2>{{ __('admin.sections.descriptions_title') }}</h2><p>{{ __('admin.sections.descriptions_hint') }}</p></div><div class="form-grid">
    <div class="field full"><label for="description_en">{{ __('admin.fields.description') }}</label><textarea id="description_en" name="description_en">{{ old('description_en', $record?->description_en) }}</textarea></div>
    <div class="field full"><label for="description_ar">{{ __('admin.fields.description_ar') }}</label><textarea id="description_ar" name="description_ar">{{ old('description_ar', $record?->description_ar) }}</textarea></div>
    <div class="field full"><label for="bullets">{{ __('admin.fields.bullets') }}</label><textarea id="bullets" name="bullets" style="min-height:96px">{{ old('bullets', $record ? implode("\n", $record->bullets_en ?? []) : '') }}</textarea></div>
    <div class="field full"><label for="bullets_ar">{{ __('admin.fields.bullets_ar') }}</label><textarea id="bullets_ar" name="bullets_ar" style="min-height:96px">{{ old('bullets_ar', $record ? implode("\n", $record->bullets_ar ?? []) : '') }}</textarea></div>
</div></section>
<section class="form-section"><div class="form-grid">
    <div class="field check"><input id="popular" type="checkbox" name="popular" value="1" @checked(old('popular', $record?->popular ?? false))><label for="popular">{{ __('admin.fields.popular') }}</label></div>
    <div class="field check"><input id="active" type="checkbox" name="active" value="1" @checked(old('active', $record?->active ?? true))><label for="active">{{ __('admin.fields.active') }}</label></div>
</div></section>
<div class="form-actions"><a class="button secondary" href="{{ route('admin.sections.show', $section) }}">{{ __('admin.common.cancel') }}</a><button class="button" type="submit">{{ $record ? __('admin.common.save_changes') : __('admin.common.create_item') }}</button></div>
</form>
@endsection
