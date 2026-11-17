# Fanout.sh Complete Web Application Clone & Reverse-Engineering

This repository contains an authentic, 1:1 reverse-engineered clone of [fanout.sh](https://fanout.sh/), the interactive technical learning platform for AI researchers, systems engineers, and ML practitioners created by Suraj Gaud.

---

## ⚡ Quick Start

### 1. Start the Local Server
Run the built-in zero-dependency Node.js server:

```bash
npm start
# or:
node server.js
```

### 2. Open in Your Browser
Open:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🎯 What's Included

Every single page, interactive widget, and curriculum section is cloned identically to the live platform:

### 1. Interactive Modules & Catalogs
- **AI Research Course & Roadmap (`/ai`, `/ai/overview`)**: Math foundations, attention architectures, pre-training scaling laws, SFT, RLHF, and DPO.
- **System Design In Depth (`/system`, `/system/overview`)**: LSM-trees vs B-trees, append-only logs, distributed consensus (Raft/Paxos), caching, sharding, and real-world architectures (Discord, Stripe, ScyllaDB).
- **ML Mathematics (`/ml-math`, `/ml-math/overview`)**: Vector spaces, linear transformations, eigendecomposition, SVD, Hessians, probability densities, and information theory.
- **Inference Engineering (`/inference-eng`)**: Memory-bandwidth bottlenecks, KV cache arithmetic, PagedAttention, continuous batching, quantization (AWQ/GPTQ), and FlashAttention-2.
- **Interactive Labs (`/labs`)**: Browser-based labs simulating real-world engineering challenges.
- **Math Decoder (`/math-decoder`, `/labs/math-decoder`)**: Complete mathematical notation library translating notation into intuition, LaTeX commands, and research context.
- **Knowledge Topography (`/knowledge-graph`)**: Interactive visual map linking foundational concepts across ML and systems.
- **Daily Papers & Archive (`/daily`)**: Curated reading lists and deconstructions of pivotal AI and systems papers.
- **Roadmaps (`/roadmaps`)**: Sequenced tracks for Full-Stack AI, ML Systems, and Infrastructure.
- **Pricing & Membership (`/pricing`)**: Multi-currency pricing plans (Monthly, Annual, Lifetime).

### 2. Assets & Typography
- Over 530 production asset chunks downloaded and locally mirrored in `assets/`:
  - **Fonts**: `Overused Grotesk` (Light, Regular, Medium, SemiBold, Bold, Black), `IBM Plex Mono` (Thin, Light, Regular, Medium), `Departure Mono`, and full `KaTeX` math fonts.
  - **Icons**: Complete `Phosphor` icon webfonts (Regular, Fill, Bold) and brand SVGs.
  - **Styles**: Full Tailwind CSS and brand design system stylesheets (`brand-q-gmNaul.css`, `index-DCAXL5XB.css`).

### 3. Server Capabilities (`server.js`)
- Full SPA client-side routing support for all sub-paths (`/ai/*`, `/system/*`, `/ml-math/*`, `/labs/*`, etc.).
- Robust MIME type handling for modern web formats (`.woff2`, `.woff`, `.ttf`, `.webmanifest`, `.svg`, etc.).
- Embedded mock API responders for `/api/checkout` (pricing quotes), `/api/newsletter`, and analytics tracking so that interactive flows work smoothly without external network dependencies.

---

## 📁 Repository Structure

```text
├── index.html            # Main production entrypoint (Vite + React SPA)
├── index.mock.html       # Standalone single-file recreation for quick previews
├── server.js             # High-performance Node.js SPA & asset server
├── package.json          # Package configuration and scripts
├── assets/               # 530+ production JS chunks, CSS, fonts, and icons
├── fanout_llms_full.txt  # Complete technical content and course syllabus export
└── README.md             # Project documentation
```
