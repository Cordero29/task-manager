"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.updateBoardTitle = exports.createBoard = exports.getAllBoards = void 0;
const Board_1 = __importDefault(require("../models/Board"));
const getAllBoards = async (req, res) => {
    try {
        const boards = await Board_1.default.find({});
        res.send(boards);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.getAllBoards = getAllBoards;
const createBoard = async (req, res) => {
    const { title } = req.body;
    // @ts-ignore
    const { _id } = req.user;
    if (!title) {
        res.status(400).send("Please provide a title");
    }
    try {
        const board = new Board_1.default({ title, _id });
        await board.save();
        res.send(board);
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.createBoard = createBoard;
const updateBoardTitle = async (req, res) => {
    const { _id, title } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an _id to update your task");
    }
    try {
        const board = await Board_1.default.updateOne({ _id: _id, }, { $set: { title: title } });
        if (board.acknowledged) {
            res.status(200).send(board.acknowledged);
        }
        else {
            res.status(500).send("Task wasn't able to be completed");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.updateBoardTitle = updateBoardTitle;
const deleteBoard = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
        res.status(400).send("Please provide an id to delete your task");
    }
    try {
        const board = await Board_1.default.deleteOne({ _id: _id });
        if (board.acknowledged) {
            res.status(200).send(board.acknowledged);
        }
        else {
            res.status(500).send("Task wasn't able to be completed");
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
};
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=boardControllers.js.map