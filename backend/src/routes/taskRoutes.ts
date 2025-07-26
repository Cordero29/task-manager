import express from "express";
import {
	getAllTask,
	getOneTask,
	createTask,
	updateTaskColumn,
	updateTaskTitle,
	updateTaskPriority,
	deleteTask,
} from "../controllers/taskControllers";

const router = express.Router();

router.get("/get-all", getAllTask);

router.get("/get-one", getOneTask);

router.post('/create', createTask);

router.patch("/update-task-placement", updateTaskColumn);

router.patch('/update-title', updateTaskTitle);

router.patch('/update-priority', updateTaskPriority);

router.delete("/delete", deleteTask);

export default router;
