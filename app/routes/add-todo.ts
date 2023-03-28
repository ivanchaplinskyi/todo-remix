import { ActionFunction, ActionArgs, json, redirect } from "@remix-run/node";
import { getUser } from "~/utils/auth.server";
import { createTodo } from "~/utils/todo.server";
import { GetUserId } from "~/utils/types.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
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