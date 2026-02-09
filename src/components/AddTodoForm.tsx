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
    <form ref={formRef} onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          name="text"
          placeholder="What needs to be done?"
          maxLength={100}
          className="w-full p-4 pr-16 rounded-xl border-none shadow-sm bg-surface text-lg focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary hover:bg-primary-hover disabled:bg-primary-muted text-primary-foreground font-medium rounded-lg transition-colors"
        >
          {submitting ? "..." : "Add"}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </form>
  );
}
