import {
  LoaderFunction,
  json,
  ActionFunction,
  redirect,
} from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import type { ActionArgs } from "@remix-run/node";
import { createTodo } from "~/utils/todo.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const newTodo = form.get("todo") as string | null;
  if (!newTodo) {
    return json({ message: "Please provide a todo" }, { status: 400 });
  }
  const todo = await createTodo(newTodo);
  return redirect(`/home`);
};

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="text-center p-6 bg-gray-300">
        {/* <form action="/logout" method="post">
          <button
            type="submit"
            className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
          >
            Sign Out
          </button>
        </form> */}
        <h2>new todo</h2>
        <form method="post">
          <input type="text" name="todo" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
