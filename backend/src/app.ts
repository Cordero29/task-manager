import express from "express";
import cors from "cors";

// Routes imports
import taskRouter from "./routes/taskRoutes";
import columnRouter from "./routes/columnRoutes";
import boardRouter from './routes/boardRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/task", taskRouter);
app.use("/column", columnRouter)
app.use("/board", boardRouter)

export default app;
