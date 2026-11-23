# Rozana Travels — Deployment Commands

Production deploy of `main` to https://rozanatravels.com on **Hostinger shared hosting** (no Docker, no root).

> **2026-11-23 — host changed again.** The site moved off the hstgr VPS
> (`root@187.127.100.178`, no longer used) to shared hosting:
> `ssh -p 65002 u805024096@178.16.135.22`.
>
> What changed with the move:
> - Repo is cloned **directly into the domain document root**:
>   `~/domains/rozanatravels.com/public_html` — the root `.htaccess` routes
>   `/api` + `/admin` to `backend/public/index.php` and everything else to the
>   SPA (`backend/public/index.html`). Same pattern as the other Laravel sites
>   on this account (e.g. `sys.yaramay.online`), extended for the SPA.
> - Database is now **SQLite** (`backend/database/database.sqlite`).
> - No nginx/PHP-FPM/systemd — Apache + per-domain PHP (set 8.3 in hPanel).
> - The host's own GitHub SSH key (user `dondex`) can read the repo, so
>   `git clone`/`git pull` work over SSH with no agent forwarding.
> - Frontend is built on the host (Node v20.19.0 at `~/node/bin`) and copied
>   into `backend/public/`.

## 1. Connect & inspect the server

```bash
ssh -p 65002 u805024096@178.16.135.22
cd ~/domains/rozanatravels.com/public_html
git status --short --branch   # .env and database/*.sqlite are untracked — leave them
git log --oneline -3
```

## 2. Pull latest code

```bash
cd ~/domains/rozanatravels.com/public_html
git pull --ff-only origin main
```

## 3. Backend (composer, migration, caches)

```bash
cd ~/domains/rozanatravels.com/public_html/backend
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

> Note: `php artisan queue:cache` does not exist in this Laravel version — skip it.

## 4. Frontend (install locked deps + build on the host)

```bash
cd ~/domains/rozanatravels.com/public_html/frontend
export PATH="$HOME/node/bin:$PATH"
npm ci
# RAYON_NUM_THREADS is required on this host: the default 64-thread pool
# fails to spawn (EAGAIN) and the build crashes in rolldown/rayon.
RAYON_NUM_THREADS=4 VITE_API_URL=https://rozanatravels.com npm run build
```

## 5. Publish the build into the Laravel public directory

```bash
cd ~/domains/rozanatravels.com/public_html
rm -rf backend/public/assets
cp -a frontend/dist/index.html frontend/dist/assets backend/public/
# favicon/icons live in frontend/public and land in dist/ automatically:
cp -a frontend/dist/favicon.svg frontend/dist/icons.svg backend/public/ 2>/dev/null || true
```

## 6. Permissions

```bash
chmod -R 775 ~/domains/rozanatravels.com/public_html/backend/storage \
             ~/domains/rozanatravels.com/public_html/backend/bootstrap/cache
```

(Usually a no-op on this host — PHP runs as the account user.)

## 7. Verification (non-visual HTTP checks)

```bash
curl -sS -o /dev/null -w "%{http_code}" https://rozanatravels.com/
curl -sS -o /dev/null -w "%{http_code}" https://rozanatravels.com/admin/login
curl -sS https://rozanatravels.com/api/v1/content   # expect JSON with visaCategories
curl -sS -o /dev/null -w "%{http_code}" https://rozanatravels.com/.env   # expect 403
```

## First deploy on a fresh host (reference — already done 2026-11-23)

```bash
cd ~/domains/rozanatravels.com
git clone git@github.com:prinnsipeeeee/rozana-tours-travel-website.git public_html
cd public_html/backend
composer install --no-dev --optimize-autoloader
# write .env (APP_ENV=production, APP_DEBUG=false, APP_URL=https://rozanatravels.com,
#   DB_CONNECTION=sqlite, DB_DATABASE=<abs path to database/database.sqlite>)
php artisan key:generate
touch database/database.sqlite
php artisan migrate --force --seed
php artisan storage:link
php artisan tinker   # create the admin User (name/email/password)
```
