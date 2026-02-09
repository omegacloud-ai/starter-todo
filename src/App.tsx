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
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative">
        <img
          src="/desk.jpg"
          alt="Desk workspace"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Tasks</h1>
          <p className="text-muted-foreground">Keep track of your daily goals</p>
        </header>

        <AddTodoForm onTodoAdded={(todo) => setTodos((prev) => [todo, ...prev])} />

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-danger">
            <p>{error}</p>
            <button
              onClick={fetchTodos}
              className="mt-4 text-primary hover:text-primary-hover"
            >
              Retry
            </button>
          </div>
        ) : todos.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No tasks yet. Add one above!
          </div>
        ) : (
          <div className="space-y-1">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggled={(updated) => setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))}
                onDeleted={(id) => setTodos((prev) => prev.filter((t) => t.id !== id))}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
