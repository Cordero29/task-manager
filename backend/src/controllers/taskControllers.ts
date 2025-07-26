import {Request, Response} from "express";
import Task from '../models/Task';

export const getAllTask = async (req: Request, res: Response) => {
	try {
		const task = await Task.find({});
		res.send({task});
	} catch (e) {
		res.status(500).send(e);
	}
}

export const getOneTask = async (req: Request, res: Response) => {
	const {_id} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an _id.");
	}
	try {
		const task = await Task.findById(_id);
		if (!task) {
			res.status(404).send("Task does not exist");
		} else {
			res.send(task);
		}
	} catch (e) {
		res.status(500).send(e);
	}
}

export const createTask = async (req: Request, res: Response) => {
	const {title, priority, columnId} = req.body;
	if (!title) {
		res.status(400).send("Please provide a title");
	}
	try {
		const task = new Task({title, priority, columnId});
		await task.save();
		res.send(task);
	} catch (e) {
		res.status(400).send(e);
	}
}

export const updateTaskColumn = async (req: Request, res: Response) => {
	const {_id, columnId} = req.body;
	if (!_id && !columnId) {
		res.status(400).send("Please provide all required ids");
	}

	try {
		const task = await Task.updateOne({_id: _id}, {$set: {columnId: columnId}});

		if (task.acknowledged) {
			res.status(200).send(task.acknowledged);
		} else {
			res.status(500).send("Task wasn't able to be completed");
		}
	} catch (e) {
		res.status(500).send(e);
	}
}

export const updateTaskTitle = async (req: Request, res: Response) => {
	const {_id, title} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an _id to update your task")
	}

	try {
		const task = await Task.updateOne({_id: _id}, {$set: {title: title}})

		if (!task.modifiedCount) {
			res.status(404).send("Task _id does not exist")
		}

		res.status(200).send(task.acknowledged);
	} catch (e) {
		res.status(500).send(e);
	}
}

export const updateTaskPriority = async (req: Request, res: Response) => {
	const {_id, priority} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an _id to update your task")
	}

	try {
		const task = await Task.updateOne({_id: _id}, {$set: {priority: priority}})

		if (!task.modifiedCount) {
			res.status(404).send("Task _id does not exist")
		}

		res.status(500).send("Task wasn't able to be completed");

	} catch (e) {
		res.status(500).send(e);
	}
}

export const deleteTask = async (req: Request, res: Response) => {
	const {_id} = req.body;
	if (!_id) {
		res.status(400).send("Please provide an id to delete your task");
	}

	try {
		const task = await Task.deleteOne({_id: _id});

		if (!task.deletedCount) {
			res.status(404).send("Task _id does not exist");
		}

		res.status(200).send(task.acknowledged);

	} catch (e) {
		res.status(500).send(e);
	}
}