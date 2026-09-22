@extends('admin.layout')
@section('title', 'Site settings')
@section('content')
<div class="page-head"><div><h1>Site settings</h1><p class="lead">Contact information and key landing-page messages.</p></div></div>
<form class="card card-pad form-grid" method="post" action="{{ route('admin.settings.update') }}">@csrf @method('PUT')
@foreach($fields as $key => $field)
    <div class="field {{ $field['type'] === 'textarea' ? 'full' : '' }}"><label for="{{ $key }}">{{ $field['label'] }}</label>
    @if($field['type'] === 'textarea')<textarea id="{{ $key }}" name="{{ $key }}">{{ old($key, $settings[$key] ?? '') }}</textarea>
    @else<input id="{{ $key }}" type="{{ $field['type'] }}" name="{{ $key }}" value="{{ old($key, $settings[$key] ?? '') }}">@endif</div>
@endforeach
<div class="form-actions"><button class="button" type="submit">Save settings</button></div>
</form>
@endsection
