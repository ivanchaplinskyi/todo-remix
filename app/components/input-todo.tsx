import { json, ActionFunction, redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { createTodo } from "~/utils/todo.server";
import { GetUserId } from "~/utils/types.server";
import { getUser } from "~/utils/auth.server";
import { useState } from "react";

export const actionTodo: ActionFunction = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const newTodo = form.get("todo") as string | null;
  if (!newTodo) {
    return json({ message: "Please provide a todo" }, { status: 400 });
  }

  const userId: GetUserId | null = await getUser(request);

  if (!userId) {
    return json({ message: "User not found" }, { status: 404 });
  }

  await createTodo(newTodo, userId.id);
  return redirect(`/home`);
};

export function InputTodo() {
  const [todo, setTodo] = useState('');

  const handleTodo = (event: React.ChangeEvent<HTMLInputElement>) => setTodo(event.target.value);

  return (
    <form method="post">
      <input type="text" name="todo" value={todo} onChange={handleTodo} />
      <button disabled={!todo} type="submit">Submit</button>
    </form>
  );
}
