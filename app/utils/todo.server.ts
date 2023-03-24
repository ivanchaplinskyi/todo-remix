import { prisma } from "./prisma.server";

export async function createTodo(todo: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: "pubupcreed@gmail.com",
    },
    select: {
      id: true,
    },
  });
  //   const addTodo = await prisma.todo.create({
  await prisma.todo.create({
    data: {
      taskName: todo,
      userId: user.id,
    },
  });

  //   return { id: addTodo.id }
}

// export async function createTodo(todo: string) {
// //   const addTodo =
// return await prisma.user.create({
//     data: {
//       email: "pubupcreed23@gmail.com",
//       password: "pubupcreed23@gmail.com",
//     //   password: "$2a$10$byJtNZw6sMqWhE4pI4Sugub3Z7/XgyTGWSlZBOcQGbZT3.4E1nngS",
//       profile: {
//         firstName: 'Ivan',
//         lastName: 'Chaplinskyi',
//       },
//       todos: {
//         create: {
//           taskName: todo,
//         },
//       },
//     },
//   });

//     // return { addTodo };
// }
