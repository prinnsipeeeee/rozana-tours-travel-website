@extends('admin.layout')
@section('title', 'Overview')
@section('content')
<div class="page-head"><div><h1>Website overview</h1><p class="lead">Manage the offers and information shown on the landing page.</p></div></div>
<div class="stats">@foreach($counts as $label => $count)<div class="card stat"><div class="number">{{ $count }}</div><div class="label">{{ $label }}</div></div>@endforeach</div>
<div class="quick">
    <section class="card"><h2>Update general information</h2><p>Change contact details and landing-page headings from one place.</p><a class="button secondary" href="{{ route('admin.settings.edit') }}">Open site settings</a></section>
    <section class="card"><h2>Add a new offer</h2><p>Publish a visa, tour package, or Umrah package without editing code.</p><a class="button" href="{{ route('admin.resources.create', 'tour-packages') }}">Add tour package</a></section>
</div>
@endsection
