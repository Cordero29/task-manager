"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColumn = exports.updateColumnTitle = exports.createColumn = exports.getAllColumnsByBoardId = exports.getAllColumns = void 0;
const Column_1 = __importDefault(require("../models/Column"));
const getAllColumns = async (req, res) => {
    try {
        const columns = await Column_1.default.find({});
        res.send(columns);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getAllColumns = getAllColumns;
const getAllColumnsByBoardId = async (req, res) => {
    const { boardId } = req.body;
    if (!boardId) {
        res.status(400).send("Please provide a boardId");
    }
    try {
        const columns = await Column_1.default.find({ boardId });
        res.send(columns);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getAllColumnsByBoardId = getAllColumnsByBoardId;
const createColumn = async (req, res) => {
    const { title, boardId } = req.body;
    if (!title) {
        res.status(400).send("Please provide a title");
    }
    try {
        const column = new Column_1.default({ title: title, boardId: boardId });
        await column.save();
        res.send(column);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.createColumn = createColumn;
const updateColumnTitle = async (req, res) => {
    const { _id, title } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an _id to update your task");
    }
    try {
        const column = await Column_1.default.updateOne({ _id: _id, }, { $set: { title: title } });
        if (column.acknowledged) {
            res.status(200).send(column.acknowledged);
        }
        else {
            res.status(500).send("Task wasn't able to be completed");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.updateColumnTitle = updateColumnTitle;
const deleteColumn = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an id to delete your task");
    }
    try {
        const column = await Column_1.default.deleteOne({ _id: _id });
        if (column.acknowledged) {
            res.status(200).send(column.acknowledged);
        }
        else {
            res.status(500).send("Task wasn't able to be completed");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.deleteColumn = deleteColumn;
//# sourceMappingURL=columnControllers.js.map