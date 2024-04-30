import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);
authRouter.get("/logout", authMiddleware, AuthController.logout);
authRouter.get("/profile", authMiddleware, AuthController.profile);
authRouter.put("/update", authMiddleware, AuthController.updateUser);
authRouter.delete("/delete", authMiddleware, AuthController.deleteUser);

export default authRouter;
