import express from "express";
import taskRouter from "./routes/task";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));

app.use("/task", taskRouter);

export default app;
