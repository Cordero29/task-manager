import express from 'express';
import {
	getAllBoards,
	createBoard,
	updateBoardTitle,
	deleteBoard,
} from "../controllers/boardControllers";

const router = express.Router();

router.get("/get-all", getAllBoards);

router.post("/create", createBoard);

router.patch("/update-title", updateBoardTitle);

router.delete("/delete", deleteBoard);

export default router