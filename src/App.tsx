import { getTodos } from "@/api/todos";
import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoItem } from "@/components/TodoItem";
import { useEffect, useState } from "react";
import { Todo } from "../shared/types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setTodos(await getTodos());
      setError(null);
    } catch {
      setError("Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="app-shell">
      <div className="app-container">
        <div className="app-header">
          <span className="type-caption block text-inverse-ink/80">
            OmegaCloud
          </span>
          <h1 className="mt-md type-display-xl text-inverse-ink">
            Tasks
          </h1>
        </div>

        <div className="task-panel">
          <AddTodoForm
            onTodoAdded={(todo) => setTodos((prev) => [todo, ...prev])}
          />

          {loading ? (
            <p className="type-caption text-ink/50 py-md">
              Loading…
            </p>
          ) : error ? (
            <div className="py-md">
              <p className="type-body-sm text-danger">
                {error}
              </p>
              <button
                onClick={fetchTodos}
                className="mt-sm type-link text-ink underline underline-offset-2"
              >
                Retry
              </button>
            </div>
          ) : todos.length === 0 ? (
            <p className="type-caption text-ink/50 py-md">
              No tasks yet
            </p>
          ) : (
            <div className="todo-list">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggled={(updated) =>
                    setTodos((prev) =>
                      prev.map((t) => (t.id === updated.id ? updated : t)),
                    )
                  }
                  onDeleted={(id) =>
                    setTodos((prev) => prev.filter((t) => t.id !== id))
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
