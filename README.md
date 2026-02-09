# Tasks - Your Daily Goal Tracker

A simple and clean web application to help you keep track of your daily tasks and goals. Stay organized and never forget what needs to be done!

## What is this app?

Tasks is a straightforward task management tool that lets you:

- **Add new tasks** - Quickly jot down things you need to do
- **Mark tasks as complete** - Check off items when you're done
- **Delete tasks** - Remove tasks you no longer need

Everything is saved automatically, so your tasks are always there when you come back.

## Features

**Simple and Clean Design** - Focus on what matters without distractions  
**Easy Task Management** - Add, complete, and remove tasks with just a few clicks  
**Automatic Saving** - Your tasks are saved instantly, no need to click save  
**Responsive Layout** - Works great on your computer, tablet, or phone

## Technical Overview

Tasks is a full-stack TypeScript app with a Vite + React client and an Express API server backed by SQLite.

## Tech Stack

- React 19 + Vite 7 (client)
- Express 5 + TypeScript (server)
- SQLite via `better-sqlite3`
- Tailwind CSS v4 + PostCSS

## Architecture

- Client in `src/` built with Vite and React.
- Server in `server/` built with TypeScript and Express.
- Shared types in `shared/` used by both client and server.
- Vite dev server proxies `/api` requests to the Express server.

## API Endpoints

- `GET /api/todos` - list todos (newest first)
- `POST /api/todos` - create todo (body: `{ "text": string }`)
- `PATCH /api/todos/:id` - update completion (body: `{ "completed": boolean }`)
- `DELETE /api/todos/:id` - delete todo

Validation rules:
- `text` is required, trimmed, and limited to 100 characters on the server.
- `id` must be a positive integer.

## Data Model

SQLite table `todos`:
- `id` integer primary key
- `text` string (required)
- `completed` integer (0/1)
- `created_at` datetime (default current timestamp)

Database file defaults to `data.db` in the project root.

## Configuration

- `SQLITE_DATABASE_DB` - optional path to the SQLite database file
- Client dev server: `http://localhost:3000`
- API server: `http://localhost:3001`
- Module alias: `@` maps to `src/`

## Scripts

- `pnpm run dev` - run client and server concurrently
- `pnpm run dev:client` - Vite dev server
- `pnpm run dev:server` - Express server with `tsx watch`
- `pnpm run build` - build client + server
- `pnpm run start` - start compiled server from `dist/server/index.js`
- `pnpm run lint` - run ESLint

## How to Use

1. **Add a Task**: Type what you need to do in the input box at the top and click "Add"
2. **Complete a Task**: Click the checkbox next to any task to mark it as done (it will appear crossed out)
3. **Delete a Task**: Click the trash icon on the right side of any task to remove it

That's it! It's that simple to stay organized and on top of your daily goals.
