# Pathwisse / Fanout — Production Deployment & Operations Guide

This guide covers everything required to deploy, operate, scale, and maintain the platform in **Production**.

---

## 🏗️ 1. Architecture Overview

```
                      Internet / CDN (Cloudflare / CloudFront)
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   ▼                                           ▼
      [Option A: Serverless / Edge]              [Option B: Container / Node]
          • Vercel Edge Network                     • Docker (Nginx Alpine)
          • Cloudflare Pages                        • Node.js (server.prod.js)
          • Netlify CDN                             • AWS ECS / GCP Cloud Run / VPS
                   │                                           │
                   └─────────────────────┬─────────────────────┘
                                         ▼
                     Static Assets (Immutable 1-Year Cache)
                                         +
                    SPA Dynamic Fallback (No-Cache index.html)
                                         +
                              Mock / Backend APIs
```

---

## 🚀 2. Deployment Options

### Option A: Zero-Config Cloud (Vercel) — *Fastest*

The repository includes pre-configured [`vercel.json`](vercel.json) with client-side SPA route rewrites and security/cache headers.

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy to production:
   ```bash
   vercel --prod
   ```
3. Or link your GitHub repository (**[MahammadWahab540/fanout-clone](https://github.com/MahammadWahab540/fanout-clone)**) in the Vercel Dashboard for automated continuous deployment on every `git push`.

---

### Option B: Docker Containerization (`docker-compose`)

The repository includes an optimized multi-stage [`Dockerfile`](Dockerfile) based on `nginx:alpine` and a ready-to-run [`docker-compose.yml`](docker-compose.yml).

1. Build and start the container:
   ```bash
   docker compose up -d --build
   ```
2. Check container status & health:
   ```bash
   docker ps
   # Health status will show: healthy
   ```
3. Test locally:
   ```bash
   curl -I http://localhost/
   ```
4. Stop container:
   ```bash
   docker compose down
   ```

---

### Option C: Production Node Server (`server.prod.js`)

For environments without Docker (e.g. EC2, DigitalOcean Droplet, Railway, Render, Fly.io):

1. Start the production server:
   ```bash
   npm run prod
   # or: PORT=8080 NODE_ENV=production node server.prod.js
   ```

2. Features included out of the box:
   - **Gzip Compression** with `zlib`.
   - **Immutable Caching** for fingerprinted assets (`Cache-Control: public, max-age=31536000, immutable`).
   - **Stale-Proof HTML**: `index.html` uses `no-cache, must-revalidate` so visitors get new deployments instantly.
   - **Healthcheck Endpoint**: `/healthz` and `/health` for AWS ALBs, Kubernetes liveness probes, or Uptime monitors.
   - **Graceful Shutdown**: Handles `SIGTERM` and `SIGINT` with connection draining.

3. Process Management with **PM2** (Recommended for standalone Linux VPS):
   ```bash
   npm install -g pm2
   pm2 start server.prod.js --name fanout -i max
   pm2 save
   pm2 startup
   ```

---

### Option D: Cloudflare Pages

1. Push your repository to GitHub.
2. In the Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Set:
   - **Build command**: Leave blank (static files already prepared)
   - **Build output directory**: `.` (root)
4. Cloudflare automatically picks up the included [`_headers`](_headers) file for 1-year immutable caching on `/assets/*` and security headers.

---

## 🔒 3. Production Security & Cache Headers

The following headers are automatically configured across all deployment methods:

| Header | Production Value | Purpose |
|---|---|---|
| `Cache-Control` (`/assets/*`) | `public, max-age=31536000, immutable` | Instant asset load from browser cache |
| `Cache-Control` (`/index.html`) | `no-cache, no-store, must-revalidate` | Guarantees instant deployment visibility |
| `X-Content-Type-Options` | `nosniff` | Blocks MIME-type sniffing attacks |
| `X-Frame-Options` | `SAMEORIGIN` | Protects against Clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Protects privacy on outbound links |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restricts privileged browser APIs |

---

## 🩺 4. Health Checks & Monitoring

The production server exposes a dedicated healthcheck endpoint:

```bash
curl http://localhost:3000/healthz
```

**Response Payload**:
```json
{
  "status": "healthy",
  "uptime": 1420.5,
  "timestamp": 1794915735139,
  "memoryUsage": {
    "rss": 53985280,
    "heapTotal": 7331840,
    "heapUsed": 5771176
  }
}
```

Configure your uptime monitoring service (e.g. BetterStack, Datadog, Pingdom, AWS Route53 Health Checks) to ping `/healthz` every 30 seconds.

---

## ⚡ 5. Production Checklist

- [x] Static assets compiled and verified (600+ chunks, fonts, webps).
- [x] ProofOS design system tokens integrated with light/dark contrast verification.
- [x] Gzip/Brotli compression enabled.
- [x] Immutable cache headers set for hashed assets.
- [x] `index.html` configured with anti-caching headers for zero-downtime rollouts.
- [x] Client-side SPA routing fallback enabled for all deep routes (`/ai`, `/system`, `/ml-math`, `/inference-eng`, `/labs`, `/pricing`).
- [x] Dockerfile and Docker Compose configured and verified.
- [x] Cloud configs (`vercel.json`, `netlify.toml`, `_headers`) prepared.
- [x] Healthcheck endpoint (`/healthz`) verified.
