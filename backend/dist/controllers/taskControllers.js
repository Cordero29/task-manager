"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTaskPriority = exports.updateTaskTitle = exports.updateTaskColumn = exports.createTask = exports.getOneTask = exports.getAllTask = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getAllTask = async (req, res) => {
    try {
        const task = await Task_1.default.find({});
        res.send({ task });
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getAllTask = getAllTask;
const getOneTask = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an _id.");
    }
    try {
        const task = await Task_1.default.findById(_id);
        if (!task) {
            res.status(404).send("Task does not exist");
        }
        else {
            res.send(task);
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getOneTask = getOneTask;
const createTask = async (req, res) => {
    const { title, priority, columnId } = req.body;
    if (!title) {
        res.status(400).send("Please provide a title");
    }
    try {
        const task = new Task_1.default({ title, priority, columnId });
        await task.save();
        res.send(task);
    }
    catch (e) {
        res.status(400).send(e);
    }
};
exports.createTask = createTask;
const updateTaskColumn = async (req, res) => {
    const { _id, columnId } = req.body;
    if (!_id && !columnId) {
        res.status(400).send("Please provide all required ids");
    }
    try {
        const task = await Task_1.default.updateOne({ _id: _id }, { $set: { columnId: columnId } });
        if (task.acknowledged) {
            res.status(200).send(task.acknowledged);
        }
        else {
            res.status(500).send("Task wasn't able to be completed");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.updateTaskColumn = updateTaskColumn;
const updateTaskTitle = async (req, res) => {
    const { _id, title } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an _id to update your task");
    }
    try {
        const task = await Task_1.default.updateOne({ _id: _id }, { $set: { title: title } });
        if (!task.modifiedCount) {
            res.status(404).send("Task _id does not exist");
        }
        res.status(200).send(task.acknowledged);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.updateTaskTitle = updateTaskTitle;
const updateTaskPriority = async (req, res) => {
    const { _id, priority } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an _id to update your task");
    }
    try {
        const task = await Task_1.default.updateOne({ _id: _id }, { $set: { priority: priority } });
        if (!task.modifiedCount) {
            res.status(404).send("Task _id does not exist");
        }
        res.status(500).send("Task wasn't able to be completed");
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.updateTaskPriority = updateTaskPriority;
const deleteTask = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an id to delete your task");
    }
    try {
        const task = await Task_1.default.deleteOne({ _id: _id });
        if (!task.deletedCount) {
            res.status(404).send("Task _id does not exist");
        }
        res.status(200).send(task.acknowledged);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskControllers.js.map