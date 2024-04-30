import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../config/db.config.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  const token = req.cookies["jwt"];
  console.log(token);
  if (token === null || token === undefined) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const findUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    if (!findUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = findUser;
    next();
  });
};
