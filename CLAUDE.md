# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev (client + server):** `pnpm run dev`
- **Dev client only:** `pnpm run dev:client` (Vite on port 3000)
- **Dev server only:** `pnpm run dev:server` (Express on port 3003, tsx watch)
- **Build:** `pnpm run build` (Vite client build + tsc server build to dist/)
- **Start production:** `pnpm run start` (runs dist/server/index.js)
- **Lint:** `pnpm run lint`

Package manager is **pnpm** (v10.29.2).

IMPORTANT: Ports are wired into infrastructure middleware. Changing ports are prohibited.

## Documentation

Two specification files govern this project. Treat them as sources of truth and keep them aligned with the running app.

### README.md — user-facing specification

- **Audience:** non-technical users (product owners, stakeholders, end users).
- **Content:** user stories, workflows, features, and behavior described in plain language — what the app does and how people use it.
- **Exclude:** implementation details (frameworks, APIs, file paths, database schema, env vars, scripts).
- **Maintenance:** owned by the user. Do not update `README.md` unless the user explicitly confirms after you surface a mismatch (see Post-turn checks below).

### TECH.md — technical specification

- **Audience:** developers and agents working in this repo.
- **Content:** technical overview, architecture decisions, APIs, data models, configuration, patterns, and how the system is built.
- **Maintenance:** owned by the agent. Do not expect the user to edit `TECH.md`. When architecture, APIs, stack, or implementation details change, update `TECH.md` in the same work — without asking for permission.
- **Detail level:** `TECH.md` is the canonical place for technical depth; prefer updating it over duplicating long technical sections elsewhere.

### Post-turn checks (required)

AFTER every coding turn (not in the middle) — especially after meaningful feature, API, or architecture changes — verify the app matches `README.md` and `TECH.md`:

1. **README.md**
   - If new behavior contradicts `README.md`, or the live app differs from what `README.md` describes, **ask the user** whether to update the specification.
   - Update `README.md` only after the user confirms. Keep language non-technical.

2. **TECH.md**
   - If new behavior contradicts `TECH.md`, or the codebase differs from what `TECH.md` describes, **update `TECH.md` automatically** in the same session (no user confirmation required).
   - `TECH.md` must stay accurate; treat drift as a bug to fix immediately.

For stack, architecture, and API details while coding, read **`TECH.md`** first.
