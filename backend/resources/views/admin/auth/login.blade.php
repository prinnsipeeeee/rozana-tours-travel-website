<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
    <title>Admin sign in · Rozana Tours</title>
    <style>
        :root { color-scheme:light; --navy:#0b2748; --navy-deep:#071a2f; --orange:#ef7118; --ink:#16253a; --muted:#69778a; --line:#d7e0e9; }
        * { box-sizing:border-box; }
        body { margin:0; min-width:320px; min-height:100vh; display:grid; place-items:center; padding:28px; background:#edf2f7; font:16px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:var(--ink); }
        .login-shell { width:min(960px,100%); min-height:590px; display:grid; grid-template-columns:1.05fr .95fr; overflow:hidden; border:1px solid rgba(215,224,233,.85); border-radius:26px; background:#fff; box-shadow:0 30px 90px rgba(7,26,47,.16); }
        .brand-panel { position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between; padding:45px; color:#fff; background:linear-gradient(145deg,var(--navy-deep),var(--navy) 64%,#124875); }
        .brand-panel::before { content:""; position:absolute; inset:0; opacity:.11; background-image:linear-gradient(rgba(255,255,255,.32) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.32) 1px,transparent 1px); background-size:44px 44px; mask-image:linear-gradient(to bottom right,#000,transparent 80%); }
        .brand-panel::after { content:""; position:absolute; width:340px; height:340px; right:-190px; bottom:-170px; border:58px solid rgba(255,255,255,.055); border-radius:50%; }
        .brand,.brand-message { position:relative; z-index:1; }
        .brand { display:flex; align-items:center; gap:12px; font-size:18px; font-weight:800; }
        .mark { display:grid; place-items:center; width:44px; height:44px; border-radius:14px; color:#fff; background:linear-gradient(145deg,#ff9546,#e9650a); box-shadow:0 12px 28px rgba(233,101,10,.32); }
        .brand-message span { display:inline-flex; align-items:center; gap:8px; margin-bottom:17px; color:#9ed3ef; font-size:12px; text-transform:uppercase; letter-spacing:.13em; font-weight:850; }
        .brand-message span::before { content:""; width:20px; height:2px; background:#ef7118; }
        .brand-message h2 { max-width:380px; margin:0; font-size:clamp(28px,4vw,40px); line-height:1.16; letter-spacing:-.04em; }
        .brand-message p { max-width:390px; margin:18px 0 0; color:#b7c9dc; line-height:1.7; }
        .form-panel { display:flex; align-items:center; padding:52px; }
        form { width:100%; }
        .lock { display:grid; place-items:center; width:46px; height:46px; margin-bottom:23px; border-radius:14px; color:#087fbd; background:#e3f4fd; }
        .lock svg { width:22px; height:22px; }
        h1 { margin:0; color:var(--navy); font-size:30px; line-height:1.2; letter-spacing:-.035em; }
        .intro { margin:9px 0 29px; color:var(--muted); }
        label { display:block; margin:0 0 8px; color:#34455a; font-size:14px; font-weight:750; }
        input[type=email],input[type=password] { width:100%; min-height:47px; padding:11px 13px; border:1px solid var(--line); border-radius:11px; background:#fff; color:var(--ink); font:inherit; margin-bottom:19px; outline:none; transition:.15s ease; }
        input:focus { border-color:#087fbd; box-shadow:0 0 0 4px rgba(8,127,189,.1); }
        .remember { display:flex; align-items:center; gap:10px; margin:1px 0 23px; color:#526175; font-size:14px; }
        .remember input { width:18px; height:18px; accent-color:var(--orange); }
        .remember label { margin:0; cursor:pointer; }
        button { width:100%; min-height:48px; border:0; border-radius:12px; padding:12px; color:#fff; background:linear-gradient(145deg,#f47a1f,#e9650a); font:780 15px Inter,system-ui,sans-serif; cursor:pointer; box-shadow:0 10px 24px rgba(233,101,10,.23); transition:transform .18s ease,box-shadow .18s ease; }
        button:hover { transform:translateY(-1px); box-shadow:0 14px 29px rgba(233,101,10,.28); }
        button:focus-visible { outline:3px solid rgba(8,127,189,.22); outline-offset:2px; }
        .errors { position:relative; margin-bottom:21px; padding:12px 14px 12px 42px; border:1px solid #f2c6c2; border-radius:11px; color:#b42318; background:#fff4f3; font-size:14px; font-weight:650; }
        .errors::before { content:"!"; position:absolute; left:14px; top:11px; display:grid; place-items:center; width:20px; height:20px; border-radius:50%; color:#fff; background:#d14343; }
        .security-note { display:flex; align-items:center; justify-content:center; gap:7px; margin:21px 0 0; color:#8793a3; font-size:12px; }
        @media (max-width:760px) { body { padding:17px; } .login-shell { min-height:0; grid-template-columns:1fr; } .brand-panel { min-height:220px; padding:30px; } .brand-message h2 { font-size:28px; } .brand-message p { display:none; } .form-panel { padding:35px 28px 38px; } }
        @media (prefers-reduced-motion:reduce) { * { transition-duration:.01ms!important; } }
    </style>
</head>
<body>
<main class="login-shell">
    <section class="brand-panel">
        <div class="brand"><span class="mark"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 9.5 14.5"/><path d="m22 2-8 20-4.5-7.5L2 10l20-8Z"/></svg></span>Rozana Tours</div>
        <div class="brand-message"><span>Content studio</span><h2>Your travel website, all in one place.</h2><p>Manage offers, packages, and the information your travelers rely on.</p></div>
    </section>
    <section class="form-panel">
        <form method="post" action="{{ route('admin.login.store') }}">@csrf
            <span class="lock" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span>
            <h1>Welcome back</h1><p class="intro">Sign in to manage the Rozana Tours website.</p>
            @if($errors->any())<div class="errors" role="alert">{{ $errors->first() }}</div>@endif
            <label for="email">Email address</label><input id="email" type="email" name="email" value="{{ old('email') }}" autocomplete="email" required autofocus>
            <label for="password">Password</label><input id="password" type="password" name="password" autocomplete="current-password" required>
            <div class="remember"><input id="remember" type="checkbox" name="remember" value="1"><label for="remember">Keep me signed in</label></div>
            <button type="submit">Sign in to your dashboard</button>
            <p class="security-note"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>Secure administrator access</p>
        </form>
    </section>
</main>
</body>
</html>
