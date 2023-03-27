import { prisma } from "./prisma.server";

export async function createTodo(todo: string, getUserId: string) {
  await prisma.todo.create({
    data: {
      taskName: todo,
      userId: getUserId,
    },
  });
}
