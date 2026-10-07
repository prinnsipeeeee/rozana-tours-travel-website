@extends('admin.layout')
@section('title', $section->name_en)
@section('content')
<div class="page-head"><div><div class="eyebrow"><a href="{{ route('admin.sections.index') }}" style="color:inherit">{{ __('admin.sections.title') }}</a></div><h1>{{ $section->name_en }}</h1><p class="lead">{{ __('admin.sections.show_lead', ['anchor' => '#'.$section->slug]) }}</p></div><a class="button" href="{{ route('admin.sections.items.create', $section) }}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>{{ __('admin.sections.add_item') }}</a></div>

<div class="section-title"><h2>{{ __('admin.sections.categories_title') }}</h2><button class="button secondary small" id="category-add" type="button">{{ __('admin.resources.add_category') }}</button></div>
<div class="card table-card">
<div class="table-meta"><strong>{{ __('admin.resources.all', ['resource' => __('admin.sections.categories_title')]) }}</strong><span>{{ trans_choice('admin.resources.item_count', $categories->count(), ['count' => $categories->count()]) }}</span><p class="field-help" id="category-feedback" role="status"></p></div>
<div class="table-wrap">
@if($categories->isEmpty())<div class="empty"><span class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M20 12l-8 8-9-9V4h7l10 8Z"/><path d="M7 7h.01"/></svg></span><strong>{{ __('admin.resources.empty_title') }}</strong><span>{{ __('admin.resources.empty_description') }}</span></div>@else
<table><thead><tr><th>{{ __('admin.categories.column_name') }}</th><th>{{ __('admin.sections.column_items') }}</th><th>{{ __('admin.resources.order') }}</th><th>{{ __('admin.resources.visibility') }}</th><th></th></tr></thead><tbody id="category-rows">
@foreach($categories as $category)<tr data-id="{{ $category->id }}"><td><div class="record-cell"><span class="record-avatar">{{ Str::substr($category->name_en, 0, 1) }}</span><span><span class="record-title">{{ $category->name_en }}</span><span class="record-sub">{{ $category->slug }} · {{ $category->name_ar }}</span></span></div></td><td><span class="order-chip">{{ $category->items_count }}</span></td><td><span class="order-chip category-sort-order">{{ $category->sort_order }}</span></td><td><span class="status category-status {{ $category->active ? '' : 'hidden' }}">{{ $category->active ? __('admin.common.visible') : __('admin.common.hidden') }}</span></td><td><div class="actions"><button class="button secondary small category-edit" type="button">{{ __('admin.common.edit') }}</button><button class="button danger small category-delete" type="button">{{ __('admin.common.delete') }}</button></div></td></tr>@endforeach
</tbody></table>@endif
</div>
</div>

<div class="section-title"><h2>{{ __('admin.sections.items_title') }}</h2><span>{{ trans_choice('admin.resources.item_count', $items->count(), ['count' => $items->count()]) }}</span></div>
<div class="card table-card">
<div class="table-wrap">
@if($items->isEmpty())<div class="empty"><span class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6"/></svg></span><strong>{{ __('admin.resources.empty_title') }}</strong><span>{{ __('admin.resources.empty_description') }}</span></div>@else
<table><thead><tr><th>{{ __('admin.sections.column_item') }}</th><th>{{ __('admin.fields.category') }}</th><th>{{ __('admin.fields.price') }}</th><th>{{ __('admin.resources.order') }}</th><th>{{ __('admin.resources.visibility') }}</th><th></th></tr></thead><tbody>
@foreach($items as $item)<tr><td><div class="record-cell"><span class="record-avatar">{{ Str::substr($item->title_en, 0, 1) }}</span><span><span class="record-title">{{ $item->title_en }}</span><span class="record-sub">{{ $item->slug }}</span></span></div></td><td><span class="record-sub">{{ $item->category ?: '—' }}</span></td><td><span class="record-sub">{{ $item->price ?: '—' }}</span></td><td><span class="order-chip">{{ $item->sort_order }}</span></td><td><span class="status {{ $item->active ? '' : 'hidden' }}">{{ $item->active ? __('admin.common.visible') : __('admin.common.hidden') }}</span></td><td><div class="actions"><a class="button secondary small" href="{{ route('admin.sections.items.edit', [$section, $item]) }}">{{ __('admin.common.edit') }}</a><form method="post" action="{{ route('admin.sections.items.destroy', [$section, $item]) }}" onsubmit='return confirm(@js(__('admin.resources.delete_confirmation')))'>@csrf @method('DELETE')<button class="button danger small" type="submit">{{ __('admin.common.delete') }}</button></form></div></td></tr>@endforeach
</tbody></table>@endif
</div>
</div>

<dialog id="category-add-dialog">
    <form class="category-dialog-card category-ajax-form" method="post" action="{{ route('admin.sections.categories.store', $section) }}" data-mode="add">
        @csrf
        <div class="category-dialog-head"><h2>{{ __('admin.resources.add_category') }}</h2></div>
        <div class="category-dialog-body">
            <p class="category-dialog-error"></p>
            <div class="field full"><label for="new-category-slug">{{ __('admin.fields.slug') }} <span class="required">*</span></label><input id="new-category-slug" name="slug" type="text" required></div>
            <div class="field"><label for="new-category-name-en">{{ __('admin.fields.name_en') }} <span class="required">*</span></label><input id="new-category-name-en" name="name_en" type="text" required></div>
            <div class="field"><label for="new-category-name-ar">{{ __('admin.fields.name_ar') }} <span class="required">*</span></label><input id="new-category-name-ar" name="name_ar" type="text" required></div>
            <div class="field"><label for="new-category-order">{{ __('admin.fields.sort_order') }}</label><input id="new-category-order" name="sort_order" type="number" min="0" value="0"></div>
            <div class="field check"><input id="new-category-active" name="active" type="checkbox" value="1" checked><label for="new-category-active">{{ __('admin.fields.active') }}</label></div>
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
    const feedback = document.getElementById('category-feedback');
    const addDialog = document.getElementById('category-add-dialog');
    const editDialog = document.getElementById('category-edit-dialog');
    const rowsBody = document.getElementById('category-rows');
    const categoryBaseUrl = @js(url("/admin/sections/{$section->id}/categories"));
    const csrfToken = @js(csrf_token());
    const categories = new Map(@js($categories->map(fn($category) => [$category->id, $category])->all()));

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

    document.getElementById('category-add').addEventListener('click', () => addDialog.showModal());
    rowsBody?.addEventListener('click', async (event) => {
        const row = event.target.closest('tr[data-id]');
        if (!row) return;
        const category = categories.get(Number(row.dataset.id));
        if (!category) return;

        if (event.target.closest('.category-edit')) {
            const form = editDialog.querySelector('form');
            form.action = `${categoryBaseUrl}/${category.id}`;
            form.elements.slug.value = category.slug;
            form.elements.name_en.value = category.name_en;
            form.elements.name_ar.value = category.name_ar;
            form.elements.sort_order.value = category.sort_order;
            form.elements.active.checked = Boolean(category.active);
            editDialog.showModal();
            return;
        }

        if (event.target.closest('.category-delete')) {
            if (!window.confirm(@js(__('admin.resources.category_delete_confirmation')))) return;
            const response = await fetch(`${categoryBaseUrl}/${category.id}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrfToken },
            });
            if (!response.ok) {
                setFeedback(await errorMessage(response), true);
                return;
            }
            setFeedback(@js(__('admin.resources.category_deleted')));
            reloadSoon();
        }
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
        form.closest('dialog').close();
        setFeedback(@js(__('admin.resources.category_saved')));
        reloadSoon();
    }));
})();
</script>
@endsection
