import { prisma } from "./prisma.server";

export async function createTodo(todo: string) {
  const addTodo = await prisma.todo.create({
    data: {
      taskName: todo,
    },
  });

  return { id: addTodo.id }
}
