@extends('admin.layout')
@section('title', __($config['label']))
@section('content')
<div class="page-head"><div><div class="eyebrow">{{ __('admin.resources.library') }}</div><h1>{{ __($config['label']) }}</h1><p class="lead">{{ __('admin.resources.intro') }}</p></div><a class="button" href="{{ route('admin.resources.create', $resource) }}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>{{ __('admin.common.add', ['resource' => __($config['singular'])]) }}</a></div>
<div class="card table-card">
<div class="table-meta"><strong>{{ __('admin.resources.all', ['resource' => __($config['label'])]) }}</strong><span>{{ trans_choice('admin.resources.item_count', $records->count(), ['count' => $records->count()]) }}</span></div>
<div class="table-wrap">
@if($records->isEmpty())<div class="empty"><span class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6"/></svg></span><strong>{{ __('admin.resources.empty_title') }}</strong><span>{{ __('admin.resources.empty_description') }}</span></div>@else
<table><thead><tr><th>{{ __('admin.resources.item') }}</th><th>{{ __('admin.resources.order') }}</th><th>{{ __('admin.resources.visibility') }}</th><th></th></tr></thead><tbody>
@foreach($records as $record)<tr><td><div class="record-cell"><span class="record-avatar">{{ Str::substr($record->{$config['title']}, 0, 1) }}</span><span><span class="record-title">{{ $record->{$config['title']} }}</span><span class="record-sub">{{ $record->{$config['secondary']} }}</span></span></div></td><td><span class="order-chip">{{ $record->sort_order }}</span></td><td><span class="status {{ $record->active ? '' : 'hidden' }}">{{ $record->active ? __('admin.common.visible') : __('admin.common.hidden') }}</span></td><td><div class="actions"><a class="button secondary small" href="{{ route('admin.resources.edit', [$resource, $record]) }}">{{ __('admin.common.edit') }}</a><form method="post" action="{{ route('admin.resources.destroy', [$resource, $record]) }}" onsubmit='return confirm(@js(__('admin.resources.delete_confirmation')))'>@csrf @method('DELETE')<button class="button danger small" type="submit">{{ __('admin.common.delete') }}</button></form></div></td></tr>@endforeach
</tbody></table>@endif
</div>
</div>
@endsection
