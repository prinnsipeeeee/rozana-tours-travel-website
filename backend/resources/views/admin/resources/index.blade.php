@extends('admin.layout')
@section('title', $config['label'])
@section('content')
<div class="page-head"><div><h1>{{ $config['label'] }}</h1><p class="lead">Add, edit, hide, or remove items shown on the website.</p></div><a class="button" href="{{ route('admin.resources.create', $resource) }}">Add {{ strtolower($config['singular']) }}</a></div>
<div class="card table-wrap">
@if($records->isEmpty())<div class="empty">No items yet. Add the first one to get started.</div>@else
<table><thead><tr><th>Item</th><th>Order</th><th>Visibility</th><th></th></tr></thead><tbody>
@foreach($records as $record)<tr><td><div class="record-title">{{ $record->{$config['title']} }}</div><div class="record-sub">{{ $record->{$config['secondary']} }}</div></td><td>{{ $record->sort_order }}</td><td><span class="status {{ $record->active ? '' : 'hidden' }}">{{ $record->active ? 'Visible' : 'Hidden' }}</span></td><td><div class="actions"><a class="button secondary small" href="{{ route('admin.resources.edit', [$resource, $record]) }}">Edit</a><form method="post" action="{{ route('admin.resources.destroy', [$resource, $record]) }}" onsubmit="return confirm('Delete this item?')">@csrf @method('DELETE')<button class="button danger small" type="submit">Delete</button></form></div></td></tr>@endforeach
</tbody></table>@endif
</div>
@endsection
