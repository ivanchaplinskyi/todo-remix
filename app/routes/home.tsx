import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import type { ActionArgs, ActionFunction } from "@remix-run/node";
import { actionTodo, InputTodo } from "~/components/input-todo";
import { Form } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }: ActionArgs) => {
  await requireUserId(request);
  return null;
};

export const action: ActionFunction = actionTodo;

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="text-center p-6 bg-gray-300">
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
          >
            Sign Out
          </button>
        </Form>
        <h2>new todo</h2>
        <InputTodo />
      </div>
    </div>
  );
}
