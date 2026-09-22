<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
    <title>Admin sign in · Rozana Tours</title>
    <style>
        *{box-sizing:border-box} body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 75% 20%,#0084d62c,transparent 30%),linear-gradient(145deg,#001e3d,#003b7a);font:16px Inter,system-ui,sans-serif;color:#172033}.panel{width:min(440px,100%);background:#fff;border-radius:24px;padding:34px;box-shadow:0 28px 80px #00132666}.mark{display:grid;place-items:center;width:48px;height:48px;border-radius:15px;background:#ff7a00;color:#fff;font-weight:900;font-size:22px;box-shadow:0 10px 25px #ff7a0044}h1{margin:22px 0 7px;color:#002b5b;font-size:28px}p{margin:0 0 26px;color:#667085;line-height:1.55}label{display:block;margin:0 0 7px;font-size:14px;font-weight:750;color:#344054}input[type=email],input[type=password]{width:100%;padding:12px 13px;border:1px solid #d0d5dd;border-radius:10px;font:inherit;margin-bottom:18px;outline:none}input:focus{border-color:#0084d6;box-shadow:0 0 0 3px #0084d61c}.remember{display:flex;align-items:center;gap:9px;margin-bottom:20px;color:#475467;font-size:14px}.remember input{width:17px;height:17px;accent-color:#ff7a00}.remember label{margin:0}button{width:100%;border:0;border-radius:11px;padding:13px;background:#ff7a00;color:#fff;font:750 16px Inter,system-ui;cursor:pointer;box-shadow:0 8px 22px #ff7a0033}.errors{background:#fff1f0;border:1px solid #f5c2c0;color:#b42318;border-radius:10px;padding:11px 13px;margin-bottom:18px;font-size:14px}
    </style>
</head>
<body><form class="panel" method="post" action="{{ route('admin.login.store') }}">@csrf
    <div class="mark">R</div><h1>Welcome back</h1><p>Sign in to update the Rozana Tours website.</p>
    @if($errors->any())<div class="errors">{{ $errors->first() }}</div>@endif
    <label for="email">Email address</label><input id="email" type="email" name="email" value="{{ old('email') }}" autocomplete="email" required autofocus>
    <label for="password">Password</label><input id="password" type="password" name="password" autocomplete="current-password" required>
    <div class="remember"><input id="remember" type="checkbox" name="remember" value="1"><label for="remember">Keep me signed in</label></div>
    <button type="submit">Sign in</button>
</form></body></html>
