import express from "express";
import {
	getAllColumns,
	getAllColumnsByBoardId,
	createColumn,
	updateColumnTitle,
	deleteColumn,
} from "../controllers/columnControllers";

const router = express.Router();

router.get("/get-all", getAllColumns);

router.get("/get-all-by-board-id", getAllColumnsByBoardId);

router.post("/create", createColumn);

router.patch("/update-title", updateColumnTitle)

router.delete("/delete", deleteColumn)

export default router;