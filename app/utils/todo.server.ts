import type { TodoItem } from "./types.server";
import { prisma } from "./prisma.server";

export const createTodo = async (todo: TodoItem) => {
  const newTodo = await prisma.todo.create({
    data: {
      taskName: todo.taskName,
    },
  });

  return { taskName: todo.taskName }
};
