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
        <div class="field {{ in_array($field['type'], ['textarea','lines','itinerary'], true) ? 'full' : '' }}">
            <label for="{{ $name }}">{{ __($field['label']) }}@if($field['required'] ?? false) <span class="required">*</span>@endif</label>
            @if(in_array($field['type'], ['textarea','lines','itinerary'], true))
                <textarea id="{{ $name }}" name="{{ $name }}" @required($field['required'] ?? false)>{{ $value }}</textarea>
            @elseif($field['type'] === 'select')
                <select id="{{ $name }}" name="{{ $name }}" @required($field['required'] ?? false)>@foreach($field['options'] as $optionValue => $optionLabel)<option value="{{ $optionValue }}" @selected($value === $optionValue)>{{ __($optionLabel) }}</option>@endforeach</select>
                @if(in_array($resource, ['tour-packages', 'visas'], true) && $name === 'category')
                    <div class="category-actions">
                        <button class="button secondary" id="category-add" type="button">{{ __('admin.resources.add_category') }}</button>
                        <button class="button secondary" id="category-edit" type="button">{{ __('admin.resources.edit_category') }}</button>
                        <button class="button danger" id="category-delete" type="button">{{ __('admin.resources.delete_category') }}</button>
                    </div>
                    <p class="field-help" id="category-feedback" role="status"></p>
                @endif
            @else
                <input id="{{ $name }}" type="{{ $field['type'] }}" name="{{ $name }}" value="{{ $field['type'] === 'file' ? '' : $value }}" step="{{ $field['step'] ?? '' }}" @required(($field['required'] ?? false) && $field['type'] !== 'file')>
            @endif
        </div>
    @endif
@endforeach
</div></section>
<div class="form-actions"><a class="button secondary" href="{{ route('admin.resources.index', $resource) }}">{{ __('admin.common.cancel') }}</a><button class="button" type="submit">{{ $record ? __('admin.common.save_changes') : __('admin.common.create_item') }}</button></div>
</form>

@if(in_array($resource, ['tour-packages', 'visas'], true))
<dialog id="category-add-dialog">
    <form class="category-dialog-card category-ajax-form" method="post" action="{{ $resource === 'visas' ? route('admin.visa-categories.store') : route('admin.categories.store') }}" data-mode="add">
        @csrf
        <div class="category-dialog-head"><h2>{{ __('admin.resources.add_category') }}</h2></div>
        <div class="category-dialog-body">
            <p class="category-dialog-error"></p>
            <div class="field full"><label for="new-category-slug">{{ __('admin.fields.slug') }} <span class="required">*</span></label><input id="new-category-slug" name="slug" type="text" required></div>
            <div class="field"><label for="new-category-name-en">{{ __('admin.fields.name_en') }} <span class="required">*</span></label><input id="new-category-name-en" name="name_en" type="text" required></div>
            <div class="field"><label for="new-category-name-ar">{{ __('admin.fields.name_ar') }} <span class="required">*</span></label><input id="new-category-name-ar" name="name_ar" type="text" required></div>
            <input name="active" type="hidden" value="1">
            <input name="sort_order" type="hidden" value="0">
        </div>
        <div class="category-dialog-actions"><button class="button secondary dialog-close" type="button">{{ __('admin.common.close') }}</button><button class="button" type="submit">{{ __('admin.resources.save_category') }}</button></div>
    </form>
</dialog>

<dialog id="category-edit-dialog">
    <form class="category-dialog-card category-ajax-form" method="post" action="" data-mode="edit">
        @csrf @method('PUT')
        <div class="category-dialog-head"><h2>{{ __('admin.resources.edit_category') }}</h2></div>
        <div class="category-dialog-body">
            <p class="category-dialog-error"></p>
            <div class="field full"><label for="edit-category-slug">{{ __('admin.fields.slug') }} <span class="required">*</span></label><input id="edit-category-slug" name="slug" type="text" required></div>
            <div class="field"><label for="edit-category-name-en">{{ __('admin.fields.name_en') }} <span class="required">*</span></label><input id="edit-category-name-en" name="name_en" type="text" required></div>
            <div class="field"><label for="edit-category-name-ar">{{ __('admin.fields.name_ar') }} <span class="required">*</span></label><input id="edit-category-name-ar" name="name_ar" type="text" required></div>
            <div class="field"><label for="edit-category-order">{{ __('admin.fields.sort_order') }}</label><input id="edit-category-order" name="sort_order" type="number" min="0"></div>
            <div class="field check"><input id="edit-category-active" name="active" type="checkbox" value="1"><label for="edit-category-active">{{ __('admin.fields.active') }}</label></div>
        </div>
        <div class="category-dialog-actions"><button class="button secondary dialog-close" type="button">{{ __('admin.common.close') }}</button><button class="button" type="submit">{{ __('admin.resources.save_category') }}</button></div>
    </form>
</dialog>

<script>
(() => {
    const select = document.getElementById('category');
    const feedback = document.getElementById('category-feedback');
    const addDialog = document.getElementById('category-add-dialog');
    const editDialog = document.getElementById('category-edit-dialog');
    const editButton = document.getElementById('category-edit');
    const deleteButton = document.getElementById('category-delete');
    const categoryBaseUrl = @js(url($resource === 'visas' ? '/admin/visa-categories' : '/admin/tour-package-categories'));
    const csrfToken = @js(csrf_token());
    const isArabic = document.documentElement.lang === 'ar';
    const categories = new Map(Object.entries(@js(isset($config['category_records']) ? $config['category_records']->keyBy('slug') : [])));

    const setFeedback = (message, error = false) => {
        feedback.textContent = message;
        feedback.classList.toggle('error', error);
    };
    const syncButtons = () => {
        const disabled = !select.value || !categories.has(select.value);
        editButton.disabled = disabled;
        deleteButton.disabled = disabled;
    };
    const errorMessage = async (response) => {
        const payload = await response.json().catch(() => ({}));
        if (payload.errors) return Object.values(payload.errors).flat().join(' ');
        return payload.message || @js(__('admin.resources.category_request_failed'));
    };
    const upsertOption = (category, previousSlug = null) => {
        const oldSlug = previousSlug || category.slug;
        let option = [...select.options].find((item) => item.value === oldSlug);
        if (!option) {
            option = document.createElement('option');
            select.add(option);
        }
        if (previousSlug && previousSlug !== category.slug) categories.delete(previousSlug);
        categories.set(category.slug, category);
        option.value = category.slug;
        option.textContent = isArabic ? category.name_ar : category.name_en;
        select.value = category.slug;
        syncButtons();
    };

    document.getElementById('category-add').addEventListener('click', () => addDialog.showModal());
    editButton.addEventListener('click', () => {
        const category = categories.get(select.value);
        if (!category) return;
        const form = editDialog.querySelector('form');
        form.action = `${categoryBaseUrl}/${category.id}`;
        form.dataset.originalSlug = category.slug;
        form.elements.slug.value = category.slug;
        form.elements.name_en.value = category.name_en;
        form.elements.name_ar.value = category.name_ar;
        form.elements.sort_order.value = category.sort_order;
        form.elements.active.checked = Boolean(category.active);
        editDialog.showModal();
    });
    deleteButton.addEventListener('click', async () => {
        const category = categories.get(select.value);
        if (!category || !window.confirm(@js(__('admin.resources.category_delete_confirmation')))) return;
        const response = await fetch(`${categoryBaseUrl}/${category.id}`, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken },
        });
        if (!response.ok) {
            setFeedback(await errorMessage(response), true);
            return;
        }
        categories.delete(category.slug);
        [...select.options].find((item) => item.value === category.slug)?.remove();
        syncButtons();
        setFeedback(@js(__('admin.resources.category_deleted')));
    });
    document.querySelectorAll('.dialog-close').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
    document.querySelectorAll('.category-ajax-form').forEach((form) => form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const error = form.querySelector('.category-dialog-error');
        error.classList.remove('visible');
        const response = await fetch(form.action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(form),
        });
        if (!response.ok) {
            error.textContent = await errorMessage(response);
            error.classList.add('visible');
            return;
        }
        const payload = await response.json();
        upsertOption(payload.category, form.dataset.originalSlug || null);
        form.closest('dialog').close();
        if (form.dataset.mode === 'add') form.reset();
        setFeedback(@js(__('admin.resources.category_saved')));
    }));
    select.addEventListener('change', syncButtons);
    syncButtons();
})();
</script>
@endif
@endsection
