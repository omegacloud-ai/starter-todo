import { Todo } from "../../shared/types";

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch("/api/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export async function addTodo(text: string): Promise<Todo> {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to add todo");
  }
  return res.json();
}

export async function toggleTodo(id: number, completed: boolean): Promise<Todo> {
  const res = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to update todo");
  }
  return res.json();
}

export async function deleteTodo(id: number): Promise<void> {
  const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to delete todo");
  }
}
