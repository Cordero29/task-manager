import express from "express";
import cors from "cors";

// Routes imports
import taskRouter from "./routes/taskRoutes";
import columnRouter from "./routes/columnRoutes";
import boardRouter from './routes/boardRoutes';
import userRouter from './routes/userRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.send("Hi")
})

// Routes
app.use("/task", taskRouter);
app.use("/column", columnRouter)
app.use("/board", boardRouter)
app.use("/user", userRouter)


export default app;
