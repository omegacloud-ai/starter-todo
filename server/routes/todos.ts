import { Request, Response, Router } from "express";
import { Todo } from "../../shared/types.js";
import db from "../db.js";

const router = Router();

const MAX_TEXT_LENGTH = 100;

// GET /api/todos
router.get("/", (_req: Request, res: Response) => {
  try {
    const todos = db.prepare("SELECT * FROM todos ORDER BY created_at DESC").all() as Todo[];
    res.json(todos);
  } catch (error) {
    console.error("Failed to get todos:", error);
    res.status(500).json({ error: "Failed to get todos" });
  }
});

// POST /api/todos
router.post("/", (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== "string") {
      res.status(400).json({ error: "Invalid input" });
      return;
    }

    const trimmed = text.trim();
    if (!trimmed) {
      res.status(400).json({ error: "Text cannot be empty" });
      return;
    }
    if (trimmed.length > MAX_TEXT_LENGTH) {
      res.status(400).json({ error: `Text must be less than ${MAX_TEXT_LENGTH} characters` });
      return;
    }

    const result = db.prepare("INSERT INTO todos (text) VALUES (?)").run(trimmed);
    const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(result.lastInsertRowid) as Todo;
    res.status(201).json(todo);
  } catch (error) {
    console.error("Failed to add todo:", error);
    res.status(500).json({ error: "Failed to add todo" });
  }
});

// PATCH /api/todos/:id
router.patch("/:id", (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: "Invalid todo ID" });
      return;
    }

    const { completed } = req.body;
    const result = db.prepare("UPDATE todos SET completed = ? WHERE id = ?").run(completed ? 1 : 0, id);

    if (result.changes === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id) as Todo;
    res.json(todo);
  } catch (error) {
    console.error("Failed to toggle todo:", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
});

// DELETE /api/todos/:id
router.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: "Invalid todo ID" });
      return;
    }

    const result = db.prepare("DELETE FROM todos WHERE id = ?").run(id);
    if (result.changes === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error("Failed to delete todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

export default router;
