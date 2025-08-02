"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskControllers_1 = require("../controllers/taskControllers");
const router = express_1.default.Router();
router.get("/get-all", taskControllers_1.getAllTask);
router.get("/get-one", taskControllers_1.getOneTask);
router.post('/create', taskControllers_1.createTask);
router.patch("/update-task-placement", taskControllers_1.updateTaskColumn);
router.patch('/update-title', taskControllers_1.updateTaskTitle);
router.patch('/update-priority', taskControllers_1.updateTaskPriority);
router.delete("/delete", taskControllers_1.deleteTask);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map