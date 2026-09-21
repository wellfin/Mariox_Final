# Deploying a test server on AWS (IP only)

**`www.marioxsoftware.com` stays live where it is. Nothing in this guide changes its DNS, SSL or hosting.**

This sets up a separate **test copy** of the site on an AWS EC2 instance that you open by its IP address:

```text
http://<ELASTIC_IP>   ──▶  Nginx :80  ──▶  next start :9601 (PM2)
```

Once testing is done, [Going live on AWS later](#going-live-on-aws-later) explains how to switch the domain over.

> The site needs a running Node server, not static S3 hosting: `/[serviceCity]` uses `getServerSideProps` and `/api/contact` is an API route.

---

## 1. Launch the EC2 instance

In the AWS console, region **ap-south-1 (Mumbai)**:

| Setting | Value |
| --- | --- |
| AMI | Ubuntu Server 24.04 LTS |
| Instance type | `t3.small` (2 GB RAM) minimum; `next build` can run out of memory on `t3.micro` |
| Storage | 20 GB gp3 |
| Key pair | Create or pick one and keep the `.pem` file safe |
| Security group | Inbound **22** from *My IP* only; **80** from *My IP* (or your office/testers' IPs). Do not open 9601. |

Limiting port 80 to your own IPs keeps the test site private, so the public and Google can't reach it.

Then go to **EC2 → Elastic IPs → Allocate** and associate the address with the instance. The test URL is `http://<ELASTIC_IP>`, and it stays the same across reboots.

**Skip DNS entirely.** Do not add or change any record for marioxsoftware.com.

## 2. Install Node, PM2, Nginx

```bash
ssh -i mariox.pem ubuntu@<ELASTIC_IP>

sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx
sudo npm install -g pm2

node -v   # must be >= 18.18 for Next 15; v20 recommended

# Swap so `next build` doesn't get killed on small instances
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## 3. Upload the code with FileZilla

### 3a. Create the folder on the server

Still in the SSH session, create the folder and give the `ubuntu` user ownership so FileZilla can write to it:

```bash
sudo mkdir -p /var/www/mariox
sudo chown -R ubuntu:ubuntu /var/www/mariox
```

### 3b. Connect FileZilla to EC2

EC2 has no password login, so FileZilla signs in with your `.pem` key over **SFTP**.

1. **File → Site Manager → New site**, name it `Mariox AWS test`.
2. Fill in:

   | Field | Value |
   | --- | --- |
   | Protocol | **SFTP - SSH File Transfer Protocol** |
   | Host | `<ELASTIC_IP>` |
   | Port | `22` |
   | Logon Type | **Key file** |
   | User | `ubuntu` |
   | Key file | browse to `mariox.pem` (change the file filter to *All files*). If FileZilla asks to convert it to `.ppk`, click **Yes** and save it. |

3. **Connect**. The first time, accept the host key prompt.
4. In the right-hand (remote) pane, go to `/var/www/mariox`.

If it won't connect, check that the security group allows port **22** from your current IP.

### 3c. Upload the project files

In the left-hand (local) pane, open `C:\parveen\mariox-code\Mariox_Final`, select **only these** files and folders, and drag them into `/var/www/mariox`:

| Upload | Do NOT upload |
| --- | --- |
| `src/` | `node_modules/` (huge; the server installs its own) |
| `public/` | `.next/` (the server builds its own) |
| `package.json` | `.env` (your local secrets; the server gets its own file in step 4) |
| `package-lock.json` | `scraps/`, `uploads/` |
| `next.config.mjs` | `*.html`, `*.dc.html`, `support.js`, `image-slot.js`, `.thumbnail`, `.image-slots.state.json` (design reference files) |
| `jsconfig.json` | |
| `.eslintrc.json` | |
| `.env.example` | |

Wait until the **Queued files** tab at the bottom is empty and **Failed transfers** shows `0`. `public/` has many sitemap files, so this can take a few minutes.

> Dot-files such as `.eslintrc.json`, `.env.example` and later `.env.production` can be hidden in the **remote** pane. To see them, turn on **Server → Force showing hidden files**.

Check on the server over SSH:

```bash
ls -la /var/www/mariox     # should list src, public, package.json, next.config.mjs ...
```

## 4. Environment variables for the test server

```bash
cd /var/www/mariox
cp .env.example .env.production
nano .env.production
chmod 600 .env.production
```

```env
# Keep this as the LIVE domain, not the IP. Canonical/OG tags then point to the
# live site, so the test copy never competes with it in Google.
NEXT_PUBLIC_SITE_URL=https://www.marioxsoftware.com

NEXT_PUBLIC_BASE_API_URL=...            # same as live is fine (read-only city pages)
NEXT_PUBLIC_BASE_INQUIRES_API_URL=...   # use a test/staging backend if you have one (see below)
API_URL=...

SMTP_HOST=...
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=...
SMTP_PASS=...
FROM_EMAIL=...
TO_EMAIL=you@yourdomain.com             # a test inbox, NOT the sales inbox
```

> `NEXT_PUBLIC_*` and `API_URL` are **baked in at build time**. After changing them, run `npm run build` again; a restart is not enough.

### The test server talks to real services

These go to the **same real services the live site uses**, so be careful what you test:

| What | Effect of a test enquiry | What to do |
| --- | --- | --- |
| `/api/contact` emails | Team mail goes to `TO_EMAIL`; the acknowledgement mail goes to whatever address is typed in the form | Set `TO_EMAIL` to a test inbox; submit forms with your own email |
| `NEXT_PUBLIC_BASE_INQUIRES_API_URL` | Creates a real enquiry record in the backend | Point to a staging backend, or delete test entries afterwards |
| Google Ads conversion (`AW-11065360955`, hard-coded in `ContactForm.jsx`) | Every successful test enquiry counts as a **real ad conversion** | Keep test submissions to a minimum, or exclude your IP in Google Ads |
| GTM / GA4 | Test page views appear in analytics | Add your IP to GA4 → Data filters → Internal traffic |

## 5. Build and start

```bash
cd /var/www/mariox
npm ci
npm run build
pm2 start npm --name mariox -- start     # runs `next start -p 9601`
pm2 save
pm2 startup systemd                      # run the command it prints, so the app starts on boot
```

Check: `curl -I http://127.0.0.1:9601` returns `200`.

> Keep it to **one** process (the PM2 default). The contact form's rate limiter in `src/pages/api/contact.js` keeps its counts in memory, so cluster mode (`-i max`) would give each process its own separate count.

## 6. Nginx on the IP (HTTP)

There's no domain, so no Let's Encrypt certificate. The test site runs on plain **http://** and the browser will show "Not secure", which is expected.

Create `/etc/nginx/sites-available/mariox`:

```nginx
server {
    listen 80 default_server;
    server_name _;                       # answers on the bare IP

    client_max_body_size 10m;

    # Test server: tell search engines never to index it
    add_header X-Robots-Tag "noindex, nofollow" always;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:9601;
        add_header Cache-Control "public, max-age=31536000, immutable";
        add_header X-Robots-Tag "noindex, nofollow" always;
    }

    location / {
        proxy_pass http://127.0.0.1:9601;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;   # contact API rate limit uses this
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/mariox /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

Open **`http://<ELASTIC_IP>`** in the browser.

**Optional password protection** (for testers outside your IP range):

```bash
sudo apt install -y apache2-utils
sudo htpasswd -c /etc/nginx/.htpasswd tester
```

Add inside `location / { ... }`:

```nginx
auth_basic "Mariox test";
auth_basic_user_file /etc/nginx/.htpasswd;
```

Then run `sudo nginx -t && sudo systemctl reload nginx`.

## 7. Test checklist

- [ ] `http://<ELASTIC_IP>` loads the home page
- [ ] `/services/<slug>`, `/industries/<slug>`, `/case-study/<slug>` load
- [ ] An SEO city page (`/<serviceCity>`) loads, which confirms `NEXT_PUBLIC_BASE_API_URL`
- [ ] Redirects: `/work` → `/case-study`, `/company` → `/about`
- [ ] Contact form: mail arrives at the **test** `TO_EMAIL`
- [ ] Images from `mariox-website.s3.ap-south-1.amazonaws.com` render
- [ ] `curl -I http://<ELASTIC_IP>` shows `X-Robots-Tag: noindex, nofollow`
- [ ] Page source: `<link rel="canonical">` points to `https://www.marioxsoftware.com/...`

Navigation links are relative, so you stay on the IP while clicking around. The only exception is the footer's "marioxsoftware.com" link, which takes you to the live site. Canonical/OG tags point to the live domain on purpose.

---

## Updating the test server

1. In FileZilla, connect to `Mariox AWS test` and drag the changed files/folders (usually `src/` and/or `public/`) into `/var/www/mariox`. When asked about existing files, choose **Overwrite**, tick **Always use this action**, then **OK**.
2. Then over SSH:

   ```bash
   ssh -i mariox.pem ubuntu@<ELASTIC_IP>
   cd /var/www/mariox
   npm ci                     # only needed if package.json / package-lock.json changed
   npm run build && pm2 restart mariox
   ```

If the build fails, the previous version keeps running.

> FileZilla only **adds and overwrites**; it never deletes. If you **deleted or renamed** a file locally, also delete the old one on the server (right-click → Delete in the remote pane). Otherwise the stale page stays in the build. For a clean upload, delete `/var/www/mariox/src` on the server and upload `src/` again.

## Useful commands

| Task | Command |
| --- | --- |
| App logs | `pm2 logs mariox` |
| Status / memory | `pm2 status`, `pm2 monit` |
| Restart | `pm2 restart mariox` |
| Nginx logs | `/var/log/nginx/access.log`, `/var/log/nginx/error.log` |

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Browser can't connect to the IP | Port 80 not open for your IP in the security group, or your IP changed |
| `502 Bad Gateway` | App not running; check `pm2 status` / `pm2 logs mariox` |
| Build killed / out of memory | Add swap (step 2) or use a bigger instance |
| City pages error | `NEXT_PUBLIC_BASE_API_URL` wrong; fix it, then **rebuild** |
| Contact form fails | SMTP settings wrong. AWS blocks port 25, so use 465/587. See `pm2 logs mariox` |
| Env change does nothing | `NEXT_PUBLIC_*` / `API_URL` need `npm run build` |

## Stopping costs

When you're not testing, go to **EC2 → Instance state → Stop**. A stopped instance isn't billed for compute, only for its disk, and the Elastic IP keeps the same address. **Terminate** it and **release** the Elastic IP when you're completely done; an unattached Elastic IP is still billed.

---

## Going live on AWS later

Do this only when you decide to move `www.marioxsoftware.com` off its current host:

1. In the security group, open **80** and **443** to `0.0.0.0/0`.
2. In `/etc/nginx/sites-available/mariox`, set `server_name marioxsoftware.com www.marioxsoftware.com;`, **remove** the `X-Robots-Tag` lines and any `auth_basic` lines, then reload Nginx.
3. Set `TO_EMAIL` (and the enquiry backend) back to production values, then `npm run build && pm2 restart mariox`.
4. At your DNS provider, first lower the TTL, then change the **A records** for `marioxsoftware.com` and `www` to the Elastic IP.
5. Once `nslookup www.marioxsoftware.com` returns the Elastic IP:

   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d marioxsoftware.com -d www.marioxsoftware.com --redirect
   ```

6. Keep the old host running for a day or two while DNS propagates, then shut it down.
