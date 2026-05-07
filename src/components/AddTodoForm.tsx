import { addTodo } from "@/api/todos";
import { useRef, useState } from "react";
import { Todo } from "../../shared/types";

interface Props {
  onTodoAdded: (todo: Todo) => void;
}

export function AddTodoForm({ onTodoAdded }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const text = (formData.get("text") as string)?.trim();
    if (!text) return;

    setSubmitting(true);
    try {
      const todo = await addTodo(text);
      onTodoAdded(todo);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add todo");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mb-lg">
      <div className="todo-form-row">
        <input
          type="text"
          name="text"
          placeholder="What needs to be done?"
          maxLength={100}
          className="text-input min-w-0 flex-1 placeholder:text-ink/40 focus:outline-none focus:ring-1 focus:ring-ink/40"
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="button-primary transition-opacity disabled:opacity-40 whitespace-nowrap"
        >
          {submitting ? "Adding…" : "Add task"}
        </button>
      </div>
      {error && (
        <p className="mt-xs type-body-sm text-danger">{error}</p>
      )}
    </form>
  );
}
