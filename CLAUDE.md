# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev (client + server):** `pnpm run dev`
- **Dev client only:** `pnpm run dev:client` (Vite on port 3000)
- **Dev server only:** `pnpm run dev:server` (Express on port 3001, tsx watch)
- **Build:** `pnpm run build` (Vite client build + tsc server build to dist/)
- **Start production:** `pnpm run start` (runs dist/server/index.js)
- **Lint:** `pnpm run lint`

Package manager is **pnpm** (v10.29.2).

## Architecture

Full-stack TypeScript app: React 19 client + Express 5 server + SQLite (better-sqlite3).

```
src/           → React client (Vite, Tailwind CSS 4)
server/        → Express API server
shared/        → Shared TypeScript types (imported by both client and server)
```

### Client-Server Communication

- Vite dev server proxies `/api/*` requests to `http://localhost:3001`
- Client API functions live in `src/api/todos.ts` — thin fetch wrappers over REST endpoints
- Server routes in `server/routes/todos.ts` — standard CRUD: GET/POST/PATCH/DELETE on `/api/todos`

### Database

SQLite with a single `todos` table. Schema auto-created in `server/db.ts`. DB path configurable via `SQLITE_DATABASE_DB` env var (defaults to `data.db` in project root).

### TypeScript Configuration

Three separate tsconfig files:

- `tsconfig.json` — client (ES2020, react-jsx, path alias `@/*` → `src/*`)
- `tsconfig.server.json` — server (ES2022, includes `server/` and `shared/`)
- `tsconfig.node.json` — build tooling

### Styling

Tailwind CSS 4 with PostCSS. Custom CSS variables for theming defined in `src/index.css` `:root`. Uses `clsx` + `tailwind-merge` for className composition.
