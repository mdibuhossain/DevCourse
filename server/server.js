import cors from "cors";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import courseRouter from "./routes/course.route.js";
import walletRouter from "./routes/wallet.route.js";
import couponRouter from "./routes/coupon.route.js";
import transactionRouter from "./routes/transaction.route.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("DevCourse server is ready");
});

app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);
app.use("/api/wallets", walletRouter);
app.use("/api/coupons", couponRouter);
app.use("/api/transactions", transactionRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`DevCourse server is running on port ${PORT}`);
});
