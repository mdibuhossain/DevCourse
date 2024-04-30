import bcrypt from "bcryptjs/dist/bcrypt.js";
import prisma from "../config/db.config.js";
import { encryptPass } from "../utils/utils.js";
import jwt from "jsonwebtoken";

export class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const findUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!findUser) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      if (!bcrypt.compareSync(password, findUser.password)) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign(
        { id: findUser.id, email: findUser.email, role: findUser.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      res.status(200).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async register(req, res) {
    try {
      const payload = req.body;
      const findUser = await prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });
      if (findUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const newWallet = await prisma.wallet.create({
        data: {
          balance: 0,
        },
      });
      payload.password = encryptPass(payload.password);
      const newUser = await prisma.user.create({
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          walletId: newWallet.id,
        },
      });
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email, role: newUser.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      res.status(201).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async logout(req, res) {
    try {
      res.clearCookie("jwt");
      res.status(200).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async profile(req, res) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.user.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          wallet: {
            select: {
              id: true,
              balance: true,
            },
          },
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
