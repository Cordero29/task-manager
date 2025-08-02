"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const columnControllers_1 = require("../controllers/columnControllers");
const router = express_1.default.Router();
router.get("/get-all", columnControllers_1.getAllColumns);
router.get("/get-all-by-board-id", columnControllers_1.getAllColumnsByBoardId);
router.post("/create", columnControllers_1.createColumn);
router.patch("/update-title", columnControllers_1.updateColumnTitle);
router.delete("/delete", columnControllers_1.deleteColumn);
exports.default = router;
//# sourceMappingURL=columnRoutes.js.map