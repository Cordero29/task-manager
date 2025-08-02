import express from 'express';
import {
	getAllBoards,
	createBoard,
	updateBoardTitle,
	deleteBoard,
} from "../controllers/boardControllers";
import checkJwt from "../middleware/auth/checkJwt";
import ensureUser from "../middleware/auth/ensureUser";

const router = express.Router();

router.get("/get-all", getAllBoards);

router.post("/create", checkJwt, ensureUser, createBoard);

router.patch("/update-title", updateBoardTitle);

router.delete("/delete", deleteBoard);

export default router