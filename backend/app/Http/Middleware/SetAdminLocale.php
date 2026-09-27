<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetAdminLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->session()->get('admin_locale', config('app.admin_locale'));

        if (! in_array($locale, ['ar', 'en'], true)) {
            $locale = 'ar';
        }

        App::setLocale($locale);

        return $next($request);
    }
}
