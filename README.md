# VROLBD — Premier Overseas Recruitment & Global Talent Architecture

> A cinematic, enterprise-grade frontend for VROLBD (a top-tier overseas recruitment agency). Built with a strict Server-First, feature-modular architecture on a Turborepo + pnpm monorepo.

This repository contains the **VROLBD web portal** (`apps/web`) plus the shared internal tooling packages (`@repo/ui`, `@repo/eslint-config`, `@repo/typescript-config`).

---

## Table of Contents

- [Project Overview](#project-overview)
- [Monorepo Structure](#monorepo-structure)
- [Technology Stack](#technology-stack)
- [Design System](#design-system)
- [Architecture & Conventions](#architecture--conventions)
- [Feature Map](#feature-map)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Data Layer & Backend Status](#data-layer--backend-status)
- [Known Gaps & Technical Debt](#known-gaps--technical-debt)
- [Documentation Map](#documentation-map)

---

## Project Overview

VROLBD is a corporate "avant-garde" recruitment portal. The current implementation is a **single-page marketing + requisition experience** (`apps/web/app/page.tsx`) composed of:

1. **Hero** with an interactive, pan/zoom-able SVG world map showing global talent corridors (DHAKA HQ → GCC / Asia / EU destinations) with animated flight arcs.
2. **Enterprise capability bento grid** (biometric vetting, express e-visa, ILO/BMET compliance).
3. **Live requisitions section** powered by TanStack Query with full async lifecycle (loading / error / empty / refetch / success).
4. **B2B manpower gateway** CTA.
5. **Application modal** with React Hook Form + Zod validation and a mutation lifecycle.

> **Important:** There is currently **no real backend**. All data is mocked inside feature `api/` modules (`fetchJobs`, `submitApplication`) with artificial latency. See [Data Layer & Backend Status](#data-layer--backend-status).

---

## Monorepo Structure

```
vrobd/
├── apps/
│   └── web/                  # Next.js 16 App Router app — the VROLBD product frontend
│       ├── app/              # Route segments: layout, page, error, loading, not-found, globals.css
│       ├── src/
│       │   ├── components/   # Cross-feature UI: ui/icon, common/async-boundary, common/error-boundary
│       │   ├── features/     # Business logic, split per domain (see Feature Map)
│       │   ├── lib/          # query-keys.ts, utils.ts (cn)
│       │   ├── providers/    # query-provider.tsx (TanStack QueryClient)
│       │   └── stores/       # Zustand UI store
│       └── public/
├── packages/
│   ├── ui/                   # @repo/ui — shared component lib (currently create-turbo stubs)
│   ├── eslint-config/        # @repo/eslint-config — shared flat ESLint configs
│   └── typescript-config/    # @repo/typescript-config — shared tsconfig bases
├── turbo.json
├── pnpm-workspace.yaml
└── package.json              # Root turbo scripts
```

> **Note on `@repo/ui`:** The package ships the default Turborepo starter components (`Button`, `Card`, `Code`, `icon`) and is **not consumed by `apps/web`**. The web app defines its own `src/components/ui/icon.tsx`. Treat `@repo/ui` as legacy/unused until intentionally adopted. See [Known Gaps](#known-gaps--technical-debt).

---

## Technology Stack

| Concern | Technology | Notes |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router) | `apps/web` only; `next@16.3.0` |
| UI Library | **React 19** | `react@19.2`, `react-dom@19.2` |
| Language | **TypeScript 5.9** (strict) | Shared configs in `@repo/typescript-config` |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`) | Design tokens defined in `app/globals.css` |
| Server State | **TanStack Query v5** | `useQuery`, `useMutation`, query key factories |
| Client State | **Zustand v5** | Small focused store: `src/stores/ui.store.ts` |
| Forms & Validation | **React Hook Form v7 + Zod v4** | `zodResolver` bound forms |
| Animation | **Framer Motion v13** | World map arcs, tooltips, transitions |
| Icons | **Google Material Symbols** | Loaded via CDN `<link>` in `app/layout.tsx`; rendered by `Icon` component |
| Maps / Geo | **d3-geo**, **topojson-client**, **react-simple-maps** | World map rendering in `features/home` |
| Class utils | **clsx + tailwind-merge** | `cn()` in `src/lib/utils.ts` |

> **Spec vs. reality:** The internal engineering spec (`skill.md` / `AGENTS.md`) also references **shadcn/ui + Radix UI** and **GSAP**. These are **not installed** in the current codebase. Framer Motion is the only animation lib present. Do not assume shadcn/Radix/GSAP exist until they are added.

---

## Design System

All visual tokens are CSS variables defined in `apps/web/app/globals.css` and should be referenced consistently.

### Core Palette

| Token | Value | Usage |
| --- | --- | --- |
| `--navy-bg` | `#0A192F` | Page background |
| `--navy-surface` | `#0F2B48` | Cards / inputs |
| `--navy-elevated` | `#173B61` | Hover / elevated surfaces |
| `--gold-primary` | `#C5A059` | Primary accent (CTAs, highlights) |
| `--gold-light` | `#E2CB8F` | Gradient highlight |
| `--gold-dark` | `#8C6A2B` | Gradient shadow |
| `--foreground` | `#F1F5F9` | Primary text |
| `--muted-foreground` | `#94A3B8` | Secondary text |

### Utility Classes (in `globals.css`)

- `.glass-panel` — frosted navy panel with gold-tinted border (used for header/footer/modals).
- `.glass-card` / `.glass-card-hover` — surface cards with hover lift + gold glow.
- `.gold-gradient-text` / `.gold-gradient-bg` — champagne-gold gradient text/background.
- `.gold-glow` — gold box-shadow accent.
- Custom gold-tinted scrollbar.

### Typography

- **Outfit** (display / headings) and **Plus Jakarta Sans** (body) via Google Fonts.
- **Material Symbols Outlined** for all iconography (no inline SVGs, no `lucide-react`, no `react-icons`).

### Aesthetic Directives

The intended vibe is "Corporate Avant-Garde": expensive, trustworthy, industrial-strength yet ultra-modern. Prefer scroll-telling, asymmetric bento grids, kinetic typography, and magnetic micro-interactions over generic block layouts.

---

## Architecture & Conventions

These rules are **non-negotiable** for this codebase. They are adapted from the project's engineering spec and enforced via lint/typecheck.

### 1. Server-First Paradigm

- Default to **Server Components**. Use `"use client"` only when interaction, hooks, or browser APIs are required, and keep the client boundary as small as possible.
- The only current `"use client"` entry points: providers, stores, interactive components (world map, jobs section, application modal, async/error boundaries), and `app/error.tsx`.

### 2. State Ownership Golden Rule

| State type | Use |
| --- | --- |
| Backend / API data | **TanStack Query** (`useQuery`, `useMutation`) |
| Global UI / client state | **Zustand** (`src/stores/ui.store.ts`) |
| Local temporary state | `useState` |
| URL / shareable state | Search Params |
| Form state | **React Hook Form + Zod** |

- **Never duplicate API data into Zustand.** Zustand is for UI state (sidebar, active tab, modal), not server data.
- Use **selectors** when reading Zustand state to avoid unnecessary re-renders (see `selectSidebarOpen`, `selectModal`, etc.).

### 3. Icons

Only use the shared `<Icon name="..." />` component (Material Symbols). Never install `lucide-react`, `react-icons`, or inline raw SVGs.

```tsx
import { Icon } from "@/components/ui/icon";
<Icon name="dashboard" size={20} className="text-[#C5A059]" fill />
```

### 4. Data Fetching

Never use `useEffect()` + `fetch()`. Use server-first fetching or TanStack Query.

### 5. Feature-Based Structure

Business logic lives in `src/features/<feature>/` with this layout:

```
features/<feature>/
├── api/         # Data access (mock or real). Returns typed promises.
├── schemas/     # Zod schemas → inferred types
├── types/       # Explicit TS interfaces: re-export schema types + props/results
├── hooks/       # TanStack Query / mutation hooks + complex state logic
├── components/  # Feature-specific UI (kept presentational where possible)
└── data/        # Static data / constants (e.g. country maps, corridors)
```

**Type placement (Golden Rule):** every explicit interface/type lives in `types/*.types.ts`. Zod schemas in `schemas/` produce inferred types; the matching `types/` file **re-exports** those inferred types and additionally declares explicit interfaces (component props, API result shapes, view models). UI components import types from `types/`, never redefine them inline.

Current features: `home`, `jobs`, `applications`.

### 6. Async Lifecycle & Mutations

Every async feature must explicitly handle: **initial loading, success, empty, background refetching, error, and mutation pending**. Prevent duplicate submissions (disable submit while `mutation.isPending`).

### 7. Error Handling (Layered)

Three layers, outermost wins:
1. **Error Boundary** (`src/components/common/error-boundary.tsx`) — catches render-time component errors.
2. **Route Error** (`app/error.tsx`) — catches route segment errors.
3. **Query Error** — handled inside `AsyncBoundary` (`src/components/common/async-boundary.tsx`) with a retry action.

Never expose raw stack traces or backend exceptions to the UI. Log sanitized messages to telemetry/console only.

### 8. Query Key Factories

Define query keys in `src/lib/query-keys.ts` following `[resource, 'list'|'detail', params]`:

```ts
export const jobKeys = {
  all: ["jobs"],
  lists: () => [...jobKeys.all, "list"],
  list: (filters) => [...jobKeys.lists(), filters],
  detail: (id) => [...jobKeys.all, "detail", id],
};
```

---

## Feature Map

### `features/home`
- `components/hero-section.tsx` — headline, credibility matrix, CTAs.
- `components/interactive-world-map.tsx` — **presentational** SVG world map. Renders countries, flight arcs, HQ anchor, destination nodes, tooltip, and corridor chips. All pan/zoom/projection/state lives in `useWorldMap` — this component only consumes the hook's return value.
- `hooks/use-world-map.ts` — owns all map state, d3-geo projection, TopoJSON path generation, flight-arc math, and pan/zoom/drag/wheel handlers. Returns a single typed `UseWorldMapReturn` object.
- `types/corridor.types.ts` — `DestinationCorridor`, `HoveredCountryInfo`, `CountryPathItem`, `DestinationPoint`, `OriginPoint`.
- `data/corridors.data.ts` — `DESTINATIONS` (the 8 global corridors) + `DHAKA_COORDINATES` origin.
- `data/world-110m.json` — TopoJSON world atlas.
- `data/country-names.ts` — ISO 3166-1 numeric → country name map for the atlas.

### `features/jobs`
- `api/jobs.api.ts` — `MOCK_JOBS` + `fetchJobs(filter)` with simulated latency & filtering.
- `schemas/job.schema.ts` — `JobSchema`, `JobFilterSchema` (Zod).
- `types/job.types.ts` — re-exports `Job`, `JobFilter`; declares `JobFilterParams`.
- `hooks/use-jobs.ts` — `useQuery({ queryKey: jobKeys.list(filters), queryFn: () => fetchJobs(filters) })`.
- `components/jobs-interactive-section.tsx` — search + category/country filters + grid, wrapped in `AsyncBoundary`. Opens `ApplicationModal`.

### `features/applications`
- `api/application.api.ts` — `submitApplication(data)` mock returning a dossier/tracking result (typed via `ApplicationSubmissionResult` from `types/`).
- `schemas/application.schema.ts` — `ApplicationFormSchema` (Zod, RHF-bound).
- `types/application.types.ts` — re-exports `ApplicationFormData`; declares `ApplicationSubmissionResult` and `ApplicationModalProps`.
- `hooks/use-submit-application.ts` — `useMutation` that invalidates `applicationKeys` on success.
- `components/application-modal.tsx` — RHF form, Zod validation, pending/error/success states. Consumes `ApplicationModalProps` and renders `ApplicationSubmissionResult` on success.

### Cross-cutting (`src/`)
- `components/ui/icon.tsx` — Material Symbols renderer.
- `components/common/async-boundary.tsx` — generic async state wrapper.
- `components/common/error-boundary.tsx` — React error boundary.
- `providers/query-provider.tsx` — `QueryClient` provider (SSR-safe singleton pattern).
- `stores/ui.store.ts` — Zustand UI store + selectors.
- `lib/query-keys.ts` — query key factories (`jobKeys`, `applicationKeys`, `candidateKeys`).
- `lib/utils.ts` — `cn()` helper.

### App Router (`apps/web/app/`)
- `layout.tsx` — fonts, `QueryProvider`, `<body>` theme.
- `page.tsx` — homepage composition.
- `error.tsx`, `loading.tsx`, `not-found.tsx` — route-level resilience UX.
- `globals.css` — Tailwind import + design tokens + glassmorphism utilities.

---

## Getting Started

### Prerequisites
- **Node.js** `>= 18`
- **pnpm** `9.x` (enforced via `packageManager` field)
- Git

### Install

```sh
# from repo root
pnpm install
```

> The repo uses **pnpm workspaces**. Run all commands from the repo root unless targeting a single package.

### Run the dev server

```sh
pnpm dev
# opens apps/web on http://localhost:3000
```

To run a single app:
```sh
pnpm dev --filter=web
```

### Build

```sh
pnpm build          # turbo: builds all packages + apps
pnpm build --filter=web
```

---

## Scripts

### Root (`package.json`)
| Script | Command |
| --- | --- |
| `pnpm dev` | Run all dev servers (turbo, persistent) |
| `pnpm build` | Build all packages & apps |
| `pnpm lint` | Lint all packages & apps |
| `pnpm check-types` | Type-check all packages & apps |
| `pnpm format` | Prettier write over `**/*.{ts,tsx,md}` |

### `apps/web`
| Script | Command |
| --- | --- |
| `pnpm dev --filter=web` | `next dev --port 3000` |
| `pnpm build --filter=web` | `next build` |
| `pnpm start --filter=web` | `next start` |
| `pnpm lint --filter=web` | `eslint --max-warnings 0` (warnings are errors) |
| `pnpm check-types --filter=web` | `next typegen && tsc --noEmit` |

### `packages/ui`
| Script | Command |
| --- | --- |
| `generate:component` | `turbo gen react-component` (Turborepo generator) |
| `lint` / `check-types` | ESLint / `tsc --noEmit` |

---

## Data Layer & Backend Status

- **The frontend currently mocks all data.** `fetchJobs` and `submitApplication` are local mock functions with `setTimeout` latency. This is intentional: the **real backend lives in a separate repository** and is out of scope for this frontend repo.
- **Integration boundary:** the `features/*/api/*.ts` modules are the contract between this app and the future backend. When the backend repo is ready, replace the mock function bodies with `fetch`/SDK calls — keep the existing function signatures and Zod-inferred return types so the hooks and UI require no changes.
- `candidateKeys` exists in `query-keys.ts` but **no candidate feature** is implemented yet (reserved for future use).
- No environment variables are required today. When wiring the external backend, create `.env.local` (git-ignored) and reference vars via Next.js server-side env handling. Do **not** commit secrets.

---

## Known Gaps & Technical Debt

1. **`@repo/ui` is reserved for future shared components.** It currently contains the create-turbo starter stubs (`Button`, `Card`, `Code`) and is not yet imported by `apps/web`. It is intentionally kept and will be adopted as the shared component source later — do not remove it.
2. **Spec/stack drift.** `skill.md` / `AGENTS.md` reference shadcn/ui, Radix UI, and GSAP — none are installed. Framer Motion is the real animation solution. Update the spec or install the libs.
3. **Agent docs are intentionally git-ignored.** `AGENTS.md`, `skill.md`, and `.agents/` are excluded by `.gitignore` by design (they are local AI-agent instructions, not part of the shipped repo). Human contributors rely on `README.md` + `CONTRIBUTING.md`, which already capture the same rules.
4. **No tests / no CI.** There is no test runner or pipeline configured. Add Vitest/Playwright + a CI workflow before production scaling.
5. **No pagination/server-side filtering** for jobs beyond in-memory mock filtering. The spec requires server-side search/filter/sort/pagination via URL params for large datasets — not yet applicable to mock data.
6. **`world-110m.json` duplication.** It exists both in `apps/web/public` and `apps/web/src/features/home/data`. The import used by the map is the `src/features/home/data` copy.

---

## Documentation Map

- **`README.md`** (this file) — project overview, stack, conventions, feature map, setup.
- **`CONTRIBUTING.md`** — how to contribute, branching, PR process, code-style checklist, and the golden rules.
- **`AGENTS.md` / `skill.md` / `.agents/`** — AI-agent instructions (local only, git-ignored). Human contributors should rely on `README.md` + `CONTRIBUTING.md`.

---

## License

Internal / proprietary. See repository owners for usage rights.
