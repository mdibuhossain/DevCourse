import { PrismaClient, RoleType } from "@prisma/client";
import { encryptPass } from "../utils/utils.js";

const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
});

async function main() {
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: "admin@admin.com",
      },
    });
    if (!findUser) {
      const newWallet = await prisma.wallet.create({
        data: {
          balance: 0,
        },
      });
      const user = await prisma.user.create({
        data: {
          name: "Super Admin Siddik",
          email: "admin@admin.com",
          password: encryptPass("admin"),
          role: RoleType.ADMIN,
          walletId: newWallet.id,
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
