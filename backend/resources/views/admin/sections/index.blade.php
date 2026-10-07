@extends('admin.layout')
@section('title', __('admin.sections.title'))
@section('content')
<div class="page-head"><div><div class="eyebrow">{{ __('admin.sections.eyebrow') }}</div><h1>{{ __('admin.sections.title') }}</h1><p class="lead">{{ __('admin.sections.lead') }}</p></div><button class="button" id="section-add" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>{{ __('admin.common.add', ['resource' => __('admin.sections.singular')]) }}</button></div>
<div class="card table-card">
<div class="table-meta"><strong>{{ __('admin.resources.all', ['resource' => __('admin.sections.title')]) }}</strong><span id="section-count">{{ trans_choice('admin.resources.item_count', $sections->count(), ['count' => $sections->count()]) }}</span><p class="field-help" id="section-feedback" role="status"></p></div>
<div class="table-wrap">
@if($sections->isEmpty())<div class="empty"><span class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg></span><strong>{{ __('admin.resources.empty_title') }}</strong><span>{{ __('admin.resources.empty_description') }}</span></div>@else
<table><thead><tr><th>{{ __('admin.categories.column_name') }}</th><th>{{ __('admin.sections.column_categories') }}</th><th>{{ __('admin.sections.column_items') }}</th><th>{{ __('admin.resources.order') }}</th><th>{{ __('admin.resources.visibility') }}</th><th></th></tr></thead><tbody id="section-rows">
@foreach($sections as $section)<tr data-id="{{ $section->id }}"><td><div class="record-cell"><span class="record-avatar">{{ Str::substr($section->name_en, 0, 1) }}</span><span><span class="record-title">{{ $section->name_en }}</span><span class="record-sub">{{ $section->slug }} · {{ $section->name_ar }}</span></span></div></td><td><span class="order-chip">{{ $section->categories_count }}</span></td><td><span class="order-chip">{{ $section->items_count }}</span></td><td><span class="order-chip section-sort-order">{{ $section->sort_order }}</span></td><td><span class="status section-status {{ $section->active ? '' : 'hidden' }}">{{ $section->active ? __('admin.common.visible') : __('admin.common.hidden') }}</span></td><td><div class="actions"><a class="button secondary small" href="{{ route('admin.sections.show', $section) }}">{{ __('admin.sections.open') }}</a><button class="button secondary small section-edit" type="button">{{ __('admin.common.edit') }}</button><button class="button danger small section-delete" type="button">{{ __('admin.common.delete') }}</button></div></td></tr>@endforeach
</tbody></table>@endif
</div>
</div>

<dialog id="section-add-dialog">
    <form class="category-dialog-card section-ajax-form" method="post" action="{{ route('admin.sections.store') }}" data-mode="add">
        @csrf
        <div class="category-dialog-head"><h2>{{ __('admin.common.add', ['resource' => __('admin.sections.singular')]) }}</h2></div>
        <div class="category-dialog-body">
            <p class="category-dialog-error"></p>
            <div class="field full"><label for="new-section-slug">{{ __('admin.fields.slug') }} <span class="required">*</span></label><input id="new-section-slug" name="slug" type="text" required></div>
            <div class="field"><label for="new-section-name-en">{{ __('admin.fields.name_en') }} <span class="required">*</span></label><input id="new-section-name-en" name="name_en" type="text" required></div>
            <div class="field"><label for="new-section-name-ar">{{ __('admin.fields.name_ar') }} <span class="required">*</span></label><input id="new-section-name-ar" name="name_ar" type="text" required></div>
            <div class="field"><label for="new-section-order">{{ __('admin.fields.sort_order') }}</label><input id="new-section-order" name="sort_order" type="number" min="0" value="0"></div>
            <div class="field check"><input id="new-section-active" name="active" type="checkbox" value="1" checked><label for="new-section-active">{{ __('admin.fields.active') }}</label></div>
        </div>
        <div class="category-dialog-actions"><button class="button secondary dialog-close" type="button">{{ __('admin.common.close') }}</button><button class="button" type="submit">{{ __('admin.common.create_item') }}</button></div>
    </form>
</dialog>

<dialog id="section-edit-dialog">
    <form class="category-dialog-card section-ajax-form" method="post" action="" data-mode="edit">
        @csrf @method('PUT')
        <div class="category-dialog-head"><h2>{{ __('admin.sections.edit_section') }}</h2></div>
        <div class="category-dialog-body">
            <p class="category-dialog-error"></p>
            <div class="field full"><label for="edit-section-slug">{{ __('admin.fields.slug') }} <span class="required">*</span></label><input id="edit-section-slug" name="slug" type="text" required></div>
            <div class="field"><label for="edit-section-name-en">{{ __('admin.fields.name_en') }} <span class="required">*</span></label><input id="edit-section-name-en" name="name_en" type="text" required></div>
            <div class="field"><label for="edit-section-name-ar">{{ __('admin.fields.name_ar') }} <span class="required">*</span></label><input id="edit-section-name-ar" name="name_ar" type="text" required></div>
            <div class="field"><label for="edit-section-badge-en">{{ __('admin.fields.badge_en') }}</label><input id="edit-section-badge-en" name="badge_en" type="text"></div>
            <div class="field"><label for="edit-section-badge-ar">{{ __('admin.fields.badge_ar') }}</label><input id="edit-section-badge-ar" name="badge_ar" type="text"></div>
            <div class="field"><label for="edit-section-heading-en">{{ __('admin.fields.heading_en') }}</label><input id="edit-section-heading-en" name="heading_en" type="text"></div>
            <div class="field"><label for="edit-section-heading-ar">{{ __('admin.fields.heading_ar') }}</label><input id="edit-section-heading-ar" name="heading_ar" type="text"></div>
            <div class="field"><label for="edit-section-highlight-en">{{ __('admin.fields.highlight_en') }}</label><input id="edit-section-highlight-en" name="highlight_en" type="text"></div>
            <div class="field"><label for="edit-section-highlight-ar">{{ __('admin.fields.highlight_ar') }}</label><input id="edit-section-highlight-ar" name="highlight_ar" type="text"></div>
            <div class="field full"><label for="edit-section-description-en">{{ __('admin.fields.description') }}</label><textarea id="edit-section-description-en" name="description_en" style="min-height:84px"></textarea></div>
            <div class="field full"><label for="edit-section-description-ar">{{ __('admin.fields.description_ar') }}</label><textarea id="edit-section-description-ar" name="description_ar" style="min-height:84px"></textarea></div>
            <div class="field"><label for="edit-section-order">{{ __('admin.fields.sort_order') }}</label><input id="edit-section-order" name="sort_order" type="number" min="0"></div>
            <div class="field check"><input id="edit-section-active" name="active" type="checkbox" value="1"><label for="edit-section-active">{{ __('admin.fields.active') }}</label></div>
        </div>
        <div class="category-dialog-actions"><button class="button secondary dialog-close" type="button">{{ __('admin.common.close') }}</button><button class="button" type="submit">{{ __('admin.common.save_changes') }}</button></div>
    </form>
</dialog>

<script>
(() => {
    const feedback = document.getElementById('section-feedback');
    const addDialog = document.getElementById('section-add-dialog');
    const editDialog = document.getElementById('section-edit-dialog');
    const rowsBody = document.getElementById('section-rows');
    const sectionBaseUrl = @js(url('/admin/sections'));
    const csrfToken = @js(csrf_token());
    const sections = new Map(@js($sections->map(fn($section) => [$section->id, $section])->all()));

    const setFeedback = (message, error = false) => {
        feedback.textContent = message;
        feedback.classList.toggle('error', error);
    };
    const errorMessage = async (response) => {
        const payload = await response.json().catch(() => ({}));
        if (payload.errors) return Object.values(payload.errors).flat().join(' ');
        return payload.message || @js(__('admin.resources.category_request_failed'));
    };
    const reloadSoon = () => window.setTimeout(() => window.location.reload(), 350);

    document.getElementById('section-add').addEventListener('click', () => addDialog.showModal());
    rowsBody?.addEventListener('click', async (event) => {
        const row = event.target.closest('tr[data-id]');
        if (!row) return;
        const section = sections.get(Number(row.dataset.id));
        if (!section) return;

        if (event.target.closest('.section-edit')) {
            const form = editDialog.querySelector('form');
            form.action = `${sectionBaseUrl}/${section.id}`;
            ['slug', 'name_en', 'name_ar', 'badge_en', 'badge_ar', 'heading_en', 'heading_ar', 'highlight_en', 'highlight_ar', 'description_en', 'description_ar', 'sort_order'].forEach((name) => { form.elements[name].value = section[name] ?? ''; });
            form.elements.active.checked = Boolean(section.active);
            editDialog.showModal();
            return;
        }

        if (event.target.closest('.section-delete')) {
            if (!window.confirm(@js(__('admin.resources.delete_confirmation')))) return;
            const response = await fetch(`${sectionBaseUrl}/${section.id}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            });
            if (!response.ok) {
                setFeedback(await errorMessage(response), true);
                return;
            }
            setFeedback(@js(__('admin.flash.deleted', ['resource' => __('admin.sections.singular')])));
            reloadSoon();
        }
    });
    document.querySelectorAll('.dialog-close').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
    document.querySelectorAll('.section-ajax-form').forEach((form) => form.addEventListener('submit', async (event) => {
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
        form.closest('dialog').close();
        setFeedback(@js(__('admin.flash.created', ['resource' => __('admin.sections.singular')])));
        reloadSoon();
    }));
})();
</script>
@endsection
