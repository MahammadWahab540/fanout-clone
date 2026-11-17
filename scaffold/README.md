# Pathwisse ProofOS & Fanout Scaffold

A complete, modular React + TypeScript + Vite + Tailwind CSS starter codebase built according to the **Pathwisse ProofOS v1.0 specification (`design.md`)**.

---

## 📁 Directory Structure

\`\`\`
scaffold/
├── index.html                   # HTML entry point with Geist font preloads
├── package.json                 # React 18, TypeScript, Vite, Tailwind
├── vite.config.ts               # Vite configuration with @ path alias
├── tsconfig.json                # Strict TypeScript configuration
├── tailwind.config.js           # Tailwind theme extending ProofOS semantic tokens
│
├── src/
│   ├── main.tsx                 # Application mount & CSS imports
│   ├── App.tsx                  # Example reference screen with RuledSection & Capabilities
│   │
│   ├── tokens/                  # Design System Foundation (§2, §3)
│   │   ├── tokens.css           # Semantic tokens (Light & Dark theme palettes)
│   │   └── base.css             # Typography scale, 8px grid utilities, reset
│   │
│   ├── ds/                      # Design System Components (§4)
│   │   ├── ProofCell.tsx        # Atomic 24px mark with 5 visual states & progress fill
│   │   ├── Button.tsx           # Tactile commit button with 2px collapsing edge
│   │   ├── Surface.tsx          # Card surface with authentic verified Notch
│   │   ├── RuledSection.tsx     # Swiss ruled section header with monospace index
│   │   └── index.ts             # Component barrel export
│   │
│   └── domain/                  # Types & Data Contracts (§10)
│       └── types.ts             # Capability, Stage, Evidence, and Task interfaces
\`\`\`

---

## 🚀 Quick Start

1. Navigate to the scaffold directory:
   \`\`\`bash
   cd scaffold
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
   Opens on **\`http://localhost:3000\`** with instant Hot Module Replacement (HMR).

4. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`
