@extends('admin.layout')
@section('title', $config['label'])
@section('content')
<div class="page-head"><div><div class="eyebrow">Content library</div><h1>{{ $config['label'] }}</h1><p class="lead">Add, edit, hide, or remove items shown on the website.</p></div><a class="button" href="{{ route('admin.resources.create', $resource) }}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>Add {{ strtolower($config['singular']) }}</a></div>
<div class="card table-card">
<div class="table-meta"><strong>All {{ strtolower($config['label']) }}</strong><span>{{ $records->count() }} {{ Str::plural('item', $records->count()) }}</span></div>
<div class="table-wrap">
@if($records->isEmpty())<div class="empty"><span class="empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6"/></svg></span><strong>No items yet</strong><span>Add the first one to get started.</span></div>@else
<table><thead><tr><th>Item</th><th>Order</th><th>Visibility</th><th></th></tr></thead><tbody>
@foreach($records as $record)<tr><td><div class="record-cell"><span class="record-avatar">{{ substr($record->{$config['title']}, 0, 1) }}</span><span><span class="record-title">{{ $record->{$config['title']} }}</span><span class="record-sub">{{ $record->{$config['secondary']} }}</span></span></div></td><td><span class="order-chip">{{ $record->sort_order }}</span></td><td><span class="status {{ $record->active ? '' : 'hidden' }}">{{ $record->active ? 'Visible' : 'Hidden' }}</span></td><td><div class="actions"><a class="button secondary small" href="{{ route('admin.resources.edit', [$resource, $record]) }}">Edit</a><form method="post" action="{{ route('admin.resources.destroy', [$resource, $record]) }}" onsubmit="return confirm('Delete this item?')">@csrf @method('DELETE')<button class="button danger small" type="submit">Delete</button></form></div></td></tr>@endforeach
</tbody></table>@endif
</div>
</div>
@endsection
