# Contributing to VROLBD

Thank you for contributing to the VROLBD platform. This document is the **human-facing source of truth** for how we build and ship this codebase. (AI-agent instructions live in `AGENTS.md` / `skill.md`, but those files are git-ignored and may not exist on a fresh clone — so everything you need is here.)

If you remember nothing else: **this is an enterprise, Server-First, feature-modular codebase with strict state-ownership rules. Follow the Golden Rules below.**

---

## Table of Contents

- [Quick Start](#quick-start)
- [Repository Workflow](#repository-workflow)
- [The Golden Rules (Must Follow)](#the-golden-rules-must-follow)
- [How to Add a Feature](#how-to-add-a-feature)
- [Coding Standards](#coding-standards)
- [Async & Data Requirements](#async--data-requirements)
- [Pull Request Checklist](#pull-request-checklist)
- [Before You Ask for Review](#before-you-ask-for-review)

---

## Quick Start

```sh
# 1. Prerequisites: Node >= 18, pnpm 9.x
# 2. Install dependencies (repo root)
pnpm install

# 3. Create a branch (see workflow)
git checkout -b feat/<short-description>

# 4. Run the app
pnpm dev --filter=web

# 5. Keep quality gates green while you work
pnpm lint --filter=web
pnpm check-types --filter=web
```

---

## Repository Workflow

We use a **Turborepo + pnpm monorepo**. All work happens in feature branches and is merged via Pull Request into `main`.

1. **Sync** — `git checkout main && git pull --ff-only`.
2. **Branch** — use a descriptive prefix:
   - `feat/` — new feature
   - `fix/` — bug fix
   - `chore/` — tooling, deps, cleanup
   - `docs/` — documentation
   - `refactor/` — non-behavioral restructuring
3. **Commit** — write clear, imperative commit messages (`Add jobs filter by category`, not `stuff`). Keep commits focused.
4. **Keep green** — run lint + typecheck locally before pushing.
5. **Open a PR** — target `main`. Fill the PR description: what changed, why, how to test, and any backend/spec implications.
6. **Review** — at least one approving review. Address all blocking comments.

> **Conventional note:** Do not force-push to `main`, do not commit secrets (`.env*`, `*.pem`), and do not bypass lint with `--no-verify`.

---

## The Golden Rules (Must Follow)

These are enforced by code review. Violations are blocking.

1. **Server-First.** Default to Server Components. Add `"use client"` only when you truly need interactivity/hooks/browser APIs, and keep that boundary minimal.
2. **State ownership is fixed:**
   - Backend/API data → **TanStack Query** (`useQuery` / `useMutation`).
   - Global UI state → **Zustand** (small focused stores, use selectors).
   - Local ephemeral state → `useState`.
   - Shareable/URL state → Search Params.
   - Form state → **React Hook Form + Zod**.
   - **Never copy API data into Zustand.** Server data stays in the query cache.
3. **Icons only via `<Icon name="..." />`** (Material Symbols). No `lucide-react`, no `react-icons`, no hand-rolled inline SVGs.
4. **No `useEffect` + `fetch`.** Use server fetching or TanStack Query.
5. **Feature-based structure.** Put domain logic in `src/features/<feature>/{api,components,hooks,schemas}`. Don't dump components into a global folder.
6. **Full async lifecycle.** Every async surface must handle: initial loading, success, empty, background refetching, error, and mutation-pending. Disable submit buttons while a mutation is pending to prevent double submission.
7. **Layered error handling.** Error Boundary → Route `error.tsx` → Query error (inside `AsyncBoundary`). Never surface raw stack traces or backend exceptions to users.
8. **Query key factories.** Define keys in `src/lib/query-keys.ts` as `[resource, 'list'|'detail', params]`. Never inline raw string arrays in hooks.

---

## How to Add a Feature

Example: adding a `candidates` feature.

1. **Create the folder structure:**
   ```
   src/features/candidates/
   ├── api/candidates.api.ts          # typed async functions (mock or real)
   ├── schemas/candidate.schema.ts    # Zod schema → inferred type
   ├── types/candidate.types.ts       # re-export inferred type + props/result interfaces
   ├── hooks/use-candidates.ts        # useQuery with candidatesKeys.list(...)
   ├── components/candidates-table.tsx # presentational UI
   └── data/candidates.data.ts        # static seeds/constants (if needed)
   ```
2. **Add query keys** to `src/lib/query-keys.ts` (e.g. `candidateKeys`).
3. **Write the schema first** — define the data contract with Zod; infer the TypeScript type from it.
4. **Declare explicit types in `types/`** — re-export the Zod-inferred type and add any explicit interfaces (component props, API result shapes, view models). UI/hooks import types from `types/`, never inline.
5. **Implement the API function** returning the Zod-inferred type (swap the mock body for a real call later without touching hooks/UI).
6. **Wire the hook** with `useQuery({ queryKey: candidateKeys.list(filters), queryFn: () => fetchCandidates(filters) })`. Keep heavy state/projection logic in the hook; keep the component presentational.
7. **Render inside `AsyncBoundary`** to get loading/error/empty/refetch UX for free.
8. **For writes**, add a `useMutation` hook that invalidates the relevant query keys on success.

> Reuse existing primitives: `AsyncBoundary`, `ErrorBoundary`, `Icon`, `cn`, Zustand `useUIStore` selectors, and the design tokens in `globals.css`.

---

## Coding Standards

- **TypeScript strict mode is on.** No `any` unless absolutely unavoidable (and then comment why). `noUncheckedIndexedAccess` is enabled — guard array/object access.
- **Formatting:** Prettier is the formatter (`pnpm format`). ESLint runs with `--max-warnings 0` — **warnings fail the build.** Fix lint before pushing.
- **Imports:** Use the `@/*` path alias (maps to `src/*` and `app/*`) for app code. Use `@repo/*` for workspace packages.
- **Naming:** `kebab-case` for files, `PascalCase` for components, `camelCase` for functions/vars, `SCREAMING_SNAKE` for constants.
- **Styling:** Tailwind utility classes with the project's navy/gold tokens and glassmorphism utilities. Avoid introducing new hex colors outside the token system; prefer `var(--navy-*)` / `var(--gold-*)`.
- **Accessibility:** Provide `aria-label` on icon-only buttons, maintain focus states, and keep keyboard operability.
- **No console noise in production paths** beyond sanitized error logging.

---

## Async & Data Requirements

A component is only "complete" when it handles **all** states:

| State | Requirement |
| --- | --- |
| Initial loading | Skeleton or branded spinner (`AsyncBoundary` default) |
| Success | Render data |
| Empty | Friendly empty state (`AsyncBoundary` default) |
| Background refetching | Non-blocking "Updating" indicator (`isRefetching`) |
| Error | User-safe message + Retry action (no raw errors) |
| Mutation pending | Disabled submit + spinner, no double submit |
| Responsive / a11y | Works mobile→desktop, keyboard accessible |

Forms must use `react-hook-form` + `zodResolver(schema)`. Show field-level validation errors and a top-level error banner on mutation failure.

---

## Pull Request Checklist

Before requesting review, confirm:

- [ ] Branch is up to date with `main` and conflicts resolved.
- [ ] `pnpm lint --filter=web` passes with **0 warnings**.
- [ ] `pnpm check-types --filter=web` passes.
- [ ] New feature follows the `src/features/<feature>/{api,schemas,hooks,components}` layout.
- [ ] Server Components by default; `"use client"` used only where necessary.
- [ ] All icons use `<Icon name="..." />`.
- [ ] Data fetched via TanStack Query (no `useEffect`+`fetch`).
- [ ] Full async lifecycle handled (loading/empty/error/refetch/pending).
- [ ] Errors are user-safe; no stack traces exposed.
- [ ] New query keys added to `src/lib/query-keys.ts`.
- [ ] Design tokens/glassmorphism reused; no stray colors.
- [ ] No secrets committed; no `.env*` changes without review.
- [ ] PR description explains **what** and **why**, plus how to test.

---

## Before You Ask for Review

Run the full quality gate from the repo root:

```sh
pnpm lint
pnpm check-types
pnpm build
```

If any step fails, fix it locally — do not rely on CI to catch it for you.

---

## Questions?

- Architecture/spec questions: see `README.md` (Feature Map + Architecture sections).
- Agent/automation context: `AGENTS.md` / `skill.md` (local only).
- Reach the maintainers via the repository owners list.

Welcome aboard — build it like an enterprise, ship it like art.
