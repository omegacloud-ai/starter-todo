import { deleteTodo, toggleTodo } from "@/api/todos";
import { clsx } from "clsx";
import { useState } from "react";
import { Todo } from "../../shared/types";

interface Props {
  todo: Todo;
  onToggled: (todo: Todo) => void;
  onDeleted: (id: number) => void;
}

export function TodoItem({ todo, onToggled, onDeleted }: Props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setPending(true);
    try {
      const updated = await toggleTodo(todo.id, e.target.checked);
      onToggled(updated);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update");
      e.target.checked = !!todo.completed;
    } finally {
      setPending(false);
    }
  };

  const handleDelete = async () => {
    setError(null);
    setPending(true);
    try {
      await deleteTodo(todo.id);
      onDeleted(todo.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete");
      setPending(false);
    }
  };

  return (
    <div>
      <div className="todo-item-card">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={!!todo.completed}
          onChange={handleToggle}
          disabled={pending}
          className="todo-checkbox"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={clsx(
            "todo-item-text type-body text-ink",
            todo.completed && "line-through opacity-40"
          )}
        >
          {todo.text}
        </label>
        <button
          onClick={handleDelete}
          disabled={pending}
          className="button-icon-circular flex items-center justify-center text-ink/40 hover:text-ink hover:bg-ink/10 transition-colors flex-shrink-0"
          aria-label="Delete todo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {error && (
        <p className="px-lg py-xs type-error text-danger">{error}</p>
      )}
    </div>
  );
}
