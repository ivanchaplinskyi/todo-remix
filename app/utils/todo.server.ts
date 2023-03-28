import { prisma } from "./prisma.server";

export async function createTodo(taskName: string, userId: string) {
  await prisma.todo.create({ data: { taskName,  userId }});
}
