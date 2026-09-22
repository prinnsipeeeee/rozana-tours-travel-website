<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>@yield('title', 'Admin') · Rozana Tours</title>
    <style>
        :root { color-scheme: light; --navy:#002b5b; --navy-2:#001e3d; --blue:#0084d6; --orange:#ff7a00; --ink:#172033; --muted:#667085; --line:#e4e7ec; --bg:#f5f7fb; }
        * { box-sizing:border-box; }
        body { margin:0; font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:var(--ink); background:var(--bg); font-size:16px; }
        a { color:inherit; text-decoration:none; }
        button,input,textarea,select { font:inherit; }
        .shell { min-height:100vh; display:grid; grid-template-columns:250px 1fr; }
        .sidebar { background:linear-gradient(180deg,var(--navy-2),var(--navy)); color:#fff; padding:28px 18px; position:sticky; top:0; height:100vh; }
        .brand { display:flex; gap:11px; align-items:center; font-weight:850; font-size:18px; padding:0 10px 26px; }
        .brand-mark { display:grid; place-items:center; width:38px; height:38px; border-radius:12px; background:var(--orange); box-shadow:0 8px 24px #ff7a0040; }
        .nav-label { color:#9cb2ca; font-size:12px; text-transform:uppercase; letter-spacing:.11em; font-weight:800; padding:14px 12px 7px; }
        .nav a { display:flex; align-items:center; gap:10px; padding:11px 12px; margin:3px 0; border-radius:11px; color:#dce7f2; font-size:14px; font-weight:650; }
        .nav a:hover,.nav a.active { background:#ffffff14; color:#fff; }
        .nav .dot { width:7px; height:7px; border-radius:999px; background:#5f7893; }
        .nav a.active .dot { background:var(--orange); }
        .logout { position:absolute; left:18px; right:18px; bottom:24px; }
        .logout button { width:100%; border:1px solid #ffffff24; background:#ffffff0d; color:#fff; border-radius:11px; padding:11px; cursor:pointer; }
        main { min-width:0; }
        .topbar { height:72px; padding:0 36px; display:flex; align-items:center; justify-content:space-between; background:#fff; border-bottom:1px solid var(--line); }
        .topbar strong { color:var(--navy); }
        .topbar span { color:var(--muted); font-size:14px; }
        .content { max-width:1180px; margin:0 auto; padding:34px 36px 60px; }
        .page-head { display:flex; justify-content:space-between; gap:20px; align-items:flex-start; margin-bottom:26px; }
        h1 { margin:0; color:var(--navy); font-size:30px; line-height:1.2; }
        .lead { margin:7px 0 0; color:var(--muted); font-size:15px; }
        .button { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:42px; padding:10px 16px; border:0; border-radius:11px; background:var(--orange); color:#fff; font-weight:750; cursor:pointer; box-shadow:0 6px 18px #ff7a0026; }
        .button.secondary { background:#fff; color:var(--navy); border:1px solid var(--line); box-shadow:none; }
        .button.danger { background:#fff; color:#b42318; border:1px solid #f5c2c0; box-shadow:none; }
        .button.small { min-height:36px; padding:7px 12px; font-size:14px; }
        .card { background:#fff; border:1px solid var(--line); border-radius:18px; box-shadow:0 8px 30px #152b4a0a; }
        .card-pad { padding:24px; }
        .stats { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .stat { padding:24px; }
        .stat .number { font-size:38px; font-weight:850; color:var(--navy); }
        .stat .label { color:var(--muted); margin-top:5px; }
        .quick { margin-top:22px; display:grid; grid-template-columns:1fr 1fr; gap:18px; }
        .quick .card { padding:24px; }
        .quick h2 { margin:0 0 7px; color:var(--navy); font-size:19px; }
        .quick p { margin:0 0 20px; color:var(--muted); line-height:1.6; }
        .table-wrap { overflow-x:auto; }
        table { width:100%; border-collapse:collapse; }
        th,td { padding:15px 18px; text-align:left; border-bottom:1px solid var(--line); }
        th { color:var(--muted); font-size:12px; text-transform:uppercase; letter-spacing:.06em; }
        tr:last-child td { border-bottom:0; }
        .record-title { font-weight:750; color:var(--navy); }
        .record-sub { color:var(--muted); font-size:13px; margin-top:3px; text-transform:capitalize; }
        .status { display:inline-flex; padding:5px 9px; border-radius:999px; font-size:12px; font-weight:750; background:#ecfdf3; color:#027a48; }
        .status.hidden { background:#f2f4f7; color:#667085; }
        .actions { display:flex; justify-content:flex-end; gap:8px; }
        .flash { padding:13px 16px; margin-bottom:20px; border-radius:12px; background:#ecfdf3; color:#027a48; border:1px solid #abefc6; }
        .errors { padding:14px 18px; margin-bottom:20px; border-radius:12px; background:#fff1f0; color:#b42318; border:1px solid #f5c2c0; }
        .errors ul { margin:7px 0 0; padding-left:20px; }
        .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .field.full { grid-column:1/-1; }
        label { display:block; margin-bottom:7px; color:#344054; font-size:14px; font-weight:700; }
        input[type=text],input[type=email],input[type=url],input[type=number],input[type=password],textarea,select { width:100%; border:1px solid #d0d5dd; border-radius:10px; padding:11px 13px; background:#fff; color:var(--ink); outline:none; }
        input:focus,textarea:focus,select:focus { border-color:var(--blue); box-shadow:0 0 0 3px #0084d61c; }
        textarea { min-height:120px; resize:vertical; line-height:1.55; }
        .check { display:flex; align-items:center; gap:10px; padding-top:28px; }
        .check input { width:18px; height:18px; accent-color:var(--orange); }
        .check label { margin:0; }
        .form-actions { grid-column:1/-1; display:flex; justify-content:flex-end; gap:10px; padding-top:10px; border-top:1px solid var(--line); }
        .empty { padding:50px 24px; text-align:center; color:var(--muted); }
        @media (max-width:800px) {
            .shell { grid-template-columns:1fr; }
            .sidebar { height:auto; position:static; padding:18px; }
            .brand { padding-bottom:12px; }
            .nav { display:flex; gap:5px; overflow-x:auto; }
            .nav-label,.logout { display:none; }
            .nav a { white-space:nowrap; }
            .topbar { padding:0 20px; }
            .content { padding:26px 18px 50px; }
            .stats,.quick,.form-grid { grid-template-columns:1fr; }
            .field.full,.form-actions { grid-column:1; }
            .page-head { align-items:stretch; flex-direction:column; }
        }
    </style>
</head>
<body>
<div class="shell">
    <aside class="sidebar">
        <a class="brand" href="{{ route('admin.dashboard') }}"><span class="brand-mark">R</span><span>Rozana Admin</span></a>
        <div class="nav-label">Content</div>
        <nav class="nav">
            <a class="{{ request()->routeIs('admin.dashboard') ? 'active' : '' }}" href="{{ route('admin.dashboard') }}"><span class="dot"></span>Overview</a>
            <a class="{{ request()->is('admin/visas*') ? 'active' : '' }}" href="{{ route('admin.resources.index', 'visas') }}"><span class="dot"></span>Visas</a>
            <a class="{{ request()->is('admin/tour-packages*') ? 'active' : '' }}" href="{{ route('admin.resources.index', 'tour-packages') }}"><span class="dot"></span>Tour packages</a>
            <a class="{{ request()->is('admin/umrah-packages*') ? 'active' : '' }}" href="{{ route('admin.resources.index', 'umrah-packages') }}"><span class="dot"></span>Umrah packages</a>
            <a class="{{ request()->routeIs('admin.settings.*') ? 'active' : '' }}" href="{{ route('admin.settings.edit') }}"><span class="dot"></span>Site settings</a>
        </nav>
        <form class="logout" method="post" action="{{ route('admin.logout') }}">@csrf<button type="submit">Sign out</button></form>
    </aside>
    <main>
        <header class="topbar"><strong>@yield('title', 'Admin')</strong><span>{{ auth()->user()->name }}</span></header>
        <div class="content">
            @if(session('status'))<div class="flash">{{ session('status') }}</div>@endif
            @if($errors->any())<div class="errors"><strong>Please correct the following:</strong><ul>@foreach($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div>@endif
            @yield('content')
        </div>
    </main>
</div>
</body>
</html>
