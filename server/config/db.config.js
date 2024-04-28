import { PrismaClient, RoleType } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
});

async function main() {
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        username: "admin",
      },
    });
    if (!findUser) {
      const user = await prisma.user.create({
        data: {
          name: "Super Admin Siddik",
          username: "admin",
          password: "admin",
          role: RoleType.ADMIN,
        },
      });
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error(error);
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
