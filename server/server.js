import cors from "cors";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`DevCourse server is running on port ${PORT}`);
});
