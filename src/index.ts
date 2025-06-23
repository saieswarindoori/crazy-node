import express, { Request, Response } from "express";
import dotenv from "dotenv";
import useRoutes from "./routes/useRouts";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/users", useRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with .env!");
});
app.listen(PORT, () => {
  console.log("app-started succusssfully");
});
