import {Request, Response} from 'express';
import AuthenticatedRequest from "../types/AuthenticatedRequest";
import Board from "../models/Board";
import User from "../models/User";

export const getAllBoards = async (req: Request, res: Response) => {
	try {
		const boards = await Board.find({});
		res.send(boards);
	} catch (e) {
		res.status(500).send(e);
	}
}

export const createBoard = async (req: AuthenticatedRequest, res: Response) => {
	const {title} = req.body;
	const auth0Id = req.user?.auth0Id;


	if (!title) {
		res.status(400).send("Please provide a title");
	}

	try {
		const board = new Board({title, auth0Id});
		await board.save();
		res.send(board);
	} catch (e) {
		res.status(500).send(e);
	}
}

export const updateBoardTitle = async (req: Request, res: Response) => {
	const {_id, title} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an _id to update your task")
	}

	try {
		const board = await Board.updateOne({_id: _id,}, {$set: {title: title}})
		if (board.acknowledged) {
			res.status(200).send(board.acknowledged);
		} else {
			res.status(500).send("Task wasn't able to be completed");
		}
	} catch(e) {
		res.status(500).send(e);
	}
}

export const deleteBoard = async (req: Request, res: Response) => {
	const {_id} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an id to delete your task");
	}

	try {
		const board = await Board.deleteOne({_id: _id});
		if (board.acknowledged) {
			res.status(200).send(board.acknowledged);
		} else {
			res.status(500).send("Task wasn't able to be completed");
		}
	} catch (e) {
		res.status(500).send(e);
	}
}