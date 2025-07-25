import {Request, Response} from 'express';
import Column from "../models/Column";

export const getAllColumns = async (req: Request, res: Response) => {
	try {
		const columns = await Column.find({});
		res.send(columns);
	} catch (e) {
		res.status(500).send(e);
	}
}

export const getAllColumnsByBoardId = async (req: Request, res: Response) => {
	const {boardId} = req.body;
	if (!boardId) {
		res.status(400).send("Please provide a boardId")
	}

	try {
		const columns = await Column.find({boardId});
		res.send(columns);
	} catch (e) {
		res.status(500).send(e);
	}
}

export const createColumn = async (req: Request, res: Response) => {
	const {title, boardId} = req.body;
	if (!title) {
		res.status(400).send("Please provide a title");
	}

	try {
		const column = new Column({title: title, boardId: boardId});
		await column.save();
		res.send(column);
	} catch (e) {
		res.status(500).send(e);
	}
}

export const updateColumnTitle = async (req: Request, res: Response) => {
	const {_id, title} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an _id to update your task")
	}

	try {
		const column = await Column.updateOne({_id: _id,}, {$set: {title: title}})
		if (column.acknowledged) {
			res.status(200).send(column.acknowledged);
		} else {
			res.status(500).send("Task wasn't able to be completed");
		}
	} catch(e) {
		res.status(500).send(e);
	}
}

export const deleteColumn = async (req: Request, res: Response) => {
	const {_id} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an id to delete your task");
	}

	try {
		const column = await Column.deleteOne({_id: _id});
		if (column.acknowledged) {
			res.status(200).send(column.acknowledged);
		} else {
			res.status(500).send("Task wasn't able to be completed");
		}
	} catch (e) {
		res.status(500).send(e);
	}
}