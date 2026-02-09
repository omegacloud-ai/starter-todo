import Database from "better-sqlite3";
import path from "path";

const dbPath = process.env.SQLITE_DATABASE_DB || path.join(process.cwd(), "data.db");

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    completed INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log("Database initialized at", dbPath);

export default db;
