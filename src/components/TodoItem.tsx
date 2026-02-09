import { deleteTodo, toggleTodo } from "@/api/todos";
import { clsx } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
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
    <div
      className={twMerge(
        "flex items-center justify-between p-4 mb-3 bg-surface rounded-xl shadow-sm border border-border transition-all hover:shadow-md relative",
        todo.completed && "bg-surface-muted"
      )}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={handleToggle}
          disabled={pending}
          className="w-5 h-5 text-primary rounded focus:ring-primary border-border cursor-pointer"
        />
        <span
          className={clsx(
            "text-lg text-foreground transition-all",
            todo.completed && "text-muted-foreground line-through"
          )}
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={handleDelete}
        disabled={pending}
        className="text-muted-foreground hover:text-danger transition-colors p-2 rounded-full hover:bg-danger-muted"
        aria-label="Delete todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      {error && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-danger-muted text-danger text-xs rounded-b-xl">
          {error}
        </div>
      )}
    </div>
  );
}
