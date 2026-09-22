<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>@yield('title', 'Admin') · Rozana Tours</title>
    <style>
        :root { color-scheme:light; --navy-950:#071a2f; --navy-900:#0b2748; --navy-800:#12365f; --blue-600:#087fbd; --blue-100:#dff3ff; --orange-600:#e9650a; --orange-500:#f47a1f; --orange-100:#fff0e5; --ink:#16253a; --muted:#66758b; --line:#dde5ee; --line-soft:#edf1f5; --bg:#f3f6fa; --success:#147a52; --danger:#b42318; --shadow:0 18px 55px rgba(22,37,58,.07); }
        * { box-sizing:border-box; }
        html { min-width:320px; background:var(--bg); }
        body { margin:0; font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:var(--ink); background:var(--bg); font-size:16px; line-height:1.5; }
        a { color:inherit; text-decoration:none; }
        button,input,textarea,select { font:inherit; }
        button,a { -webkit-tap-highlight-color:transparent; }
        svg { display:block; }
        .shell { min-height:100vh; display:grid; grid-template-columns:272px minmax(0,1fr); }
        .sidebar { position:sticky; top:0; height:100vh; display:flex; flex-direction:column; padding:26px 18px 20px; color:#fff; background:linear-gradient(165deg,var(--navy-950) 0%,var(--navy-900) 58%,#103f6c 100%); overflow:hidden; }
        .sidebar::after { content:""; position:absolute; width:260px; height:260px; left:-120px; bottom:-130px; border:46px solid rgba(255,255,255,.025); border-radius:50%; pointer-events:none; }
        .brand { position:relative; z-index:1; display:flex; gap:12px; align-items:center; padding:2px 9px 28px; }
        .brand-mark { display:grid; place-items:center; width:43px; height:43px; border-radius:14px; color:#fff; background:linear-gradient(145deg,#ff933f,var(--orange-600)); box-shadow:0 12px 28px rgba(233,101,10,.32); }
        .brand-copy { display:flex; flex-direction:column; line-height:1.15; }
        .brand-copy strong { font-size:17px; letter-spacing:.01em; }
        .brand-copy small { margin-top:4px; color:#9fb7d0; font-size:12px; font-weight:650; letter-spacing:.04em; }
        .nav-label { padding:12px 12px 8px; color:#7895b2; font-size:12px; text-transform:uppercase; letter-spacing:.13em; font-weight:800; }
        .nav { position:relative; z-index:1; display:grid; gap:4px; }
        .nav a { position:relative; display:flex; align-items:center; gap:12px; min-height:46px; padding:11px 12px; border-radius:12px; color:#bfd0e2; font-size:14px; font-weight:700; transition:background .18s ease,color .18s ease,transform .18s ease; }
        .nav a:hover { color:#fff; background:rgba(255,255,255,.075); transform:translateX(2px); }
        .nav a.active { color:#fff; background:rgba(255,255,255,.11); box-shadow:inset 0 0 0 1px rgba(255,255,255,.055); }
        .nav a.active::before { content:""; position:absolute; left:-6px; width:3px; height:22px; border-radius:99px; background:var(--orange-500); box-shadow:0 0 14px rgba(244,122,31,.7); }
        .nav-icon { width:19px; height:19px; flex:0 0 auto; }
        .sidebar-footer { position:relative; z-index:1; margin-top:auto; }
        .account-card { display:flex; align-items:center; gap:10px; margin:18px 4px 10px; padding:12px; border-radius:14px; background:rgba(255,255,255,.065); border:1px solid rgba(255,255,255,.07); }
        .avatar { display:grid; place-items:center; width:36px; height:36px; flex:0 0 auto; border-radius:11px; color:var(--navy-950); background:#fff; font-size:13px; font-weight:850; }
        .account-copy { min-width:0; display:flex; flex-direction:column; }
        .account-copy strong { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:13px; }
        .account-copy small { color:#91aac3; font-size:12px; }
        .logout button { width:100%; display:flex; align-items:center; justify-content:center; gap:9px; min-height:42px; border:1px solid rgba(255,255,255,.11); background:rgba(255,255,255,.04); color:#c8d6e5; border-radius:12px; font-size:14px; font-weight:700; cursor:pointer; transition:.18s ease; }
        .logout button:hover { color:#fff; background:rgba(255,255,255,.09); }
        main { min-width:0; }
        .topbar { height:76px; padding:0 40px; display:flex; align-items:center; justify-content:space-between; gap:20px; background:rgba(255,255,255,.86); border-bottom:1px solid rgba(221,229,238,.9); backdrop-filter:blur(16px); }
        .topbar-title { display:flex; align-items:center; gap:10px; color:var(--muted); font-size:14px; font-weight:650; }
        .topbar-title strong { color:var(--navy-900); font-size:15px; }
        .topbar-divider { width:1px; height:18px; background:var(--line); }
        .topbar-action { display:inline-flex; align-items:center; gap:9px; color:var(--muted); font-size:13px; font-weight:650; }
        .live-indicator { width:8px; height:8px; border-radius:50%; background:#26a269; box-shadow:0 0 0 4px #def7e9; }
        .content { max-width:1240px; margin:0 auto; padding:38px 40px 64px; }
        .page-head { display:flex; justify-content:space-between; gap:24px; align-items:flex-end; margin-bottom:26px; }
        .eyebrow { display:flex; align-items:center; gap:8px; margin-bottom:8px; color:var(--orange-600); font-size:12px; line-height:1; text-transform:uppercase; letter-spacing:.13em; font-weight:850; }
        .eyebrow::before { content:""; width:18px; height:2px; border-radius:99px; background:var(--orange-500); }
        h1 { margin:0; color:var(--navy-900); font-size:clamp(27px,3vw,34px); line-height:1.15; letter-spacing:-.035em; }
        .lead { max-width:680px; margin:8px 0 0; color:var(--muted); font-size:15px; }
        .button { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:44px; padding:10px 17px; border:1px solid transparent; border-radius:12px; background:linear-gradient(145deg,var(--orange-500),var(--orange-600)); color:#fff; font-weight:780; cursor:pointer; box-shadow:0 8px 22px rgba(233,101,10,.2); transition:transform .18s ease,box-shadow .18s ease,background .18s ease; }
        .button:hover { transform:translateY(-1px); box-shadow:0 12px 26px rgba(233,101,10,.26); }
        .button:focus-visible,.nav a:focus-visible,.logout button:focus-visible { outline:3px solid rgba(8,127,189,.23); outline-offset:2px; }
        .button.secondary { background:#fff; color:var(--navy-900); border-color:var(--line); box-shadow:0 4px 12px rgba(22,37,58,.035); }
        .button.secondary:hover { border-color:#becbd9; box-shadow:0 8px 18px rgba(22,37,58,.07); }
        .button.danger { background:#fff; color:var(--danger); border-color:#f2c6c2; box-shadow:none; }
        .button.danger:hover { background:#fff5f4; }
        .button.small { min-height:36px; padding:7px 12px; font-size:13px; border-radius:10px; }
        .button svg { width:17px; height:17px; }
        .card { background:#fff; border:1px solid rgba(221,229,238,.92); border-radius:19px; box-shadow:var(--shadow); }
        .card-pad { padding:28px; }
        .stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
        .stat { position:relative; overflow:hidden; display:flex; align-items:center; gap:18px; padding:24px; }
        .stat::after { content:""; position:absolute; top:0; right:0; width:76px; height:4px; border-radius:0 0 0 99px; background:var(--accent,var(--orange-500)); }
        .stat:nth-child(2) { --accent:#087fbd; }
        .stat:nth-child(3) { --accent:#7057c7; }
        .stat-icon { display:grid; place-items:center; width:50px; height:50px; flex:0 0 auto; border-radius:15px; color:var(--accent,var(--orange-500)); background:color-mix(in srgb,var(--accent,var(--orange-500)) 11%,white); }
        .stat-icon svg { width:23px; height:23px; }
        .stat .number { color:var(--navy-900); font-size:34px; line-height:1; font-weight:850; letter-spacing:-.04em; }
        .stat .label { margin-top:6px; color:var(--muted); font-size:14px; font-weight:650; }
        .section-title { display:flex; align-items:center; justify-content:space-between; gap:16px; margin:31px 0 14px; }
        .section-title h2 { margin:0; color:var(--navy-900); font-size:18px; letter-spacing:-.02em; }
        .section-title span { color:var(--muted); font-size:13px; }
        .quick { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
        .quick .card { position:relative; overflow:hidden; padding:25px; }
        .quick-icon { display:grid; place-items:center; width:42px; height:42px; margin-bottom:19px; border-radius:13px; color:var(--blue-600); background:var(--blue-100); }
        .quick .card:last-child .quick-icon { color:var(--orange-600); background:var(--orange-100); }
        .quick-icon svg { width:21px; height:21px; }
        .quick h3 { margin:0 0 7px; color:var(--navy-900); font-size:18px; letter-spacing:-.02em; }
        .quick p { margin:0 0 20px; color:var(--muted); font-size:14px; line-height:1.65; }
        .table-card { overflow:hidden; }
        .table-meta { display:flex; align-items:center; justify-content:space-between; gap:14px; padding:17px 20px; border-bottom:1px solid var(--line-soft); }
        .table-meta strong { color:var(--navy-900); font-size:14px; }
        .table-meta span { color:var(--muted); font-size:13px; }
        .table-wrap { overflow-x:auto; }
        table { width:100%; border-collapse:collapse; }
        th,td { padding:16px 20px; text-align:left; border-bottom:1px solid var(--line-soft); }
        th { color:#78879a; background:#fbfcfe; font-size:12px; text-transform:uppercase; letter-spacing:.075em; font-weight:800; }
        tbody tr { transition:background .15s ease; }
        tbody tr:hover { background:#fafcff; }
        tr:last-child td { border-bottom:0; }
        .record-cell { display:flex; align-items:center; gap:12px; min-width:230px; }
        .record-avatar { display:grid; place-items:center; width:39px; height:39px; flex:0 0 auto; border-radius:12px; color:var(--blue-600); background:var(--blue-100); font-size:14px; font-weight:850; text-transform:uppercase; }
        .record-title { display:block; color:var(--navy-900); font-weight:760; }
        .record-sub { display:block; margin-top:3px; color:var(--muted); font-size:13px; text-transform:capitalize; }
        .order-chip { display:inline-grid; place-items:center; min-width:31px; height:28px; padding:0 8px; border-radius:8px; color:#526175; background:#f1f4f8; font-size:13px; font-weight:750; }
        .status { display:inline-flex; align-items:center; gap:7px; padding:6px 10px; border-radius:999px; color:var(--success); background:#e9f8f1; font-size:12px; font-weight:800; }
        .status::before { content:""; width:6px; height:6px; border-radius:50%; background:currentColor; }
        .status.hidden { color:#697586; background:#f0f2f5; }
        .actions { display:flex; justify-content:flex-end; gap:8px; }
        .flash,.errors { position:relative; padding:14px 17px 14px 46px; margin-bottom:22px; border-radius:13px; font-size:14px; font-weight:650; }
        .flash::before,.errors::before { position:absolute; left:17px; top:13px; display:grid; place-items:center; width:21px; height:21px; border-radius:50%; color:#fff; font-size:13px; }
        .flash { color:#116c49; background:#ebfaf3; border:1px solid #b8ead2; }
        .flash::before { content:"✓"; background:#23a36c; }
        .errors { color:var(--danger); background:#fff4f3; border:1px solid #f5c2c0; }
        .errors::before { content:"!"; background:#d14343; }
        .errors ul { margin:7px 0 0; padding-left:20px; font-weight:500; }
        .form-card { overflow:hidden; }
        .form-section { padding:26px 28px; border-bottom:1px solid var(--line-soft); }
        .form-section:last-of-type { border-bottom:0; }
        .form-section-head { margin-bottom:21px; }
        .form-section-head h2 { margin:0; color:var(--navy-900); font-size:17px; letter-spacing:-.015em; }
        .form-section-head p { margin:4px 0 0; color:var(--muted); font-size:13px; }
        .form-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:21px; }
        .field.full { grid-column:1/-1; }
        label { display:block; margin-bottom:8px; color:#33445a; font-size:14px; font-weight:750; }
        .required { color:var(--orange-600); }
        input[type=text],input[type=email],input[type=url],input[type=number],input[type=password],input[type=file],textarea,select { width:100%; min-height:45px; border:1px solid #cfd9e5; border-radius:11px; padding:11px 13px; background:#fff; color:var(--ink); outline:none; transition:border-color .15s ease,box-shadow .15s ease,background .15s ease; }
        input[type=file] { padding:8px 10px; color:var(--muted); font-size:14px; }
        input[type=file]::file-selector-button { margin-right:11px; padding:6px 10px; border:0; border-radius:8px; color:var(--navy-900); background:#edf3f8; font:700 13px inherit; cursor:pointer; }
        input:focus,textarea:focus,select:focus { border-color:var(--blue-600); box-shadow:0 0 0 4px rgba(8,127,189,.1); }
        textarea { min-height:126px; resize:vertical; line-height:1.6; }
        .check { align-self:end; display:flex; align-items:center; gap:11px; min-height:45px; padding:11px 13px; border:1px solid var(--line); border-radius:11px; background:#f9fbfd; }
        .check input { width:19px; height:19px; flex:0 0 auto; accent-color:var(--orange-500); }
        .check label { margin:0; cursor:pointer; }
        .form-actions { display:flex; justify-content:flex-end; gap:10px; padding:19px 28px; background:#fbfcfe; }
        .empty { padding:62px 24px; text-align:center; }
        .empty-icon { display:grid; place-items:center; width:52px; height:52px; margin:0 auto 15px; border-radius:16px; color:var(--blue-600); background:var(--blue-100); }
        .empty-icon svg { width:24px; height:24px; }
        .empty strong { display:block; color:var(--navy-900); }
        .empty span { display:block; margin-top:4px; color:var(--muted); font-size:14px; }
        @media (max-width:900px) {
            .shell { grid-template-columns:1fr; }
            .sidebar { position:relative; height:auto; min-height:0; padding:15px 18px 13px; }
            .sidebar::after,.nav-label,.sidebar-footer { display:none; }
            .brand { padding:0 2px 13px; }
            .brand-mark { width:38px; height:38px; border-radius:12px; }
            .brand-copy small { display:none; }
            .nav { display:flex; gap:6px; overflow-x:auto; padding-bottom:2px; scrollbar-width:none; }
            .nav::-webkit-scrollbar { display:none; }
            .nav a { min-height:41px; padding:9px 12px; white-space:nowrap; }
            .nav a:hover { transform:none; }
            .nav a.active::before { left:12px; right:12px; bottom:-2px; width:auto; height:2px; }
            .topbar { height:65px; padding:0 22px; }
            .content { padding:30px 22px 52px; }
        }
        @media (max-width:720px) {
            .topbar-action { display:none; }
            .topbar { justify-content:flex-start; }
            .content { padding:26px 16px 46px; }
            .page-head { align-items:stretch; flex-direction:column; }
            .page-head > .button { width:100%; }
            .stats,.quick,.form-grid { grid-template-columns:1fr; }
            .field.full { grid-column:1; }
            .card-pad,.form-section { padding:21px 18px; }
            .form-actions { padding:16px 18px; }
            .form-actions .button { flex:1; }
            th,td { padding:14px 16px; }
            .actions { min-width:145px; }
        }
        @media (prefers-reduced-motion:reduce) { *,*::before,*::after { scroll-behavior:auto!important; transition-duration:.01ms!important; animation-duration:.01ms!important; } }
    </style>
</head>
<body>
<div class="shell">
    <aside class="sidebar">
        <a class="brand" href="{{ route('admin.dashboard') }}">
            <span class="brand-mark" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 9.5 14.5"/><path d="m22 2-8 20-4.5-7.5L2 10l20-8Z"/></svg></span>
            <span class="brand-copy"><strong>Rozana Tours</strong><small>Content studio</small></span>
        </a>
        <div class="nav-label">Workspace</div>
        <nav class="nav" aria-label="Admin navigation">
            <a class="{{ request()->routeIs('admin.dashboard') ? 'active' : '' }}" href="{{ route('admin.dashboard') }}"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>Overview</a>
            <a class="{{ request()->is('admin/visas*') ? 'active' : '' }}" href="{{ route('admin.resources.index', 'visas') }}"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 10h16M4 16h16"/></svg>Visas</a>
            <a class="{{ request()->is('admin/tour-packages*') ? 'active' : '' }}" href="{{ route('admin.resources.index', 'tour-packages') }}"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 19h16"/><path d="m5 16 4.5-5 3 3L17 8l2 8"/><circle cx="8" cy="6" r="2"/></svg>Tour packages</a>
            <a class="{{ request()->is('admin/umrah-packages*') ? 'active' : '' }}" href="{{ route('admin.resources.index', 'umrah-packages') }}"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M6 20V9l6-5 6 5v11"/><path d="M4 20h16M9 20v-6h6v6M9 10h6"/></svg>Umrah packages</a>
            <a class="{{ request()->routeIs('admin.settings.*') ? 'active' : '' }}" href="{{ route('admin.settings.edit') }}"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>Site settings</a>
        </nav>
        <div class="sidebar-footer">
            <div class="account-card"><span class="avatar">{{ strtoupper(substr(auth()->user()->name, 0, 2)) }}</span><span class="account-copy"><strong>{{ auth()->user()->name }}</strong><small>Administrator</small></span></div>
            <form class="logout" method="post" action="{{ route('admin.logout') }}">@csrf<button type="submit"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/></svg>Sign out</button></form>
        </div>
    </aside>
    <main>
        <header class="topbar"><div class="topbar-title"><span>Admin</span><span class="topbar-divider"></span><strong>@yield('title', 'Overview')</strong></div><span class="topbar-action"><span class="live-indicator"></span>Website content is live</span></header>
        <div class="content">
            @if(session('status'))<div class="flash" role="status">{{ session('status') }}</div>@endif
            @if($errors->any())<div class="errors" role="alert"><strong>Please correct the following:</strong><ul>@foreach($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul></div>@endif
            @yield('content')
        </div>
    </main>
</div>
</body>
</html>
