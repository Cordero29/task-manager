"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boardControllers_1 = require("../controllers/boardControllers");
const checkJwt_1 = __importDefault(require("../middleware/auth/checkJwt"));
const ensureUser_1 = require("../middleware/auth/ensureUser");
const router = express_1.default.Router();
router.get("/get-all", boardControllers_1.getAllBoards);
router.post("/create", checkJwt_1.default, ensureUser_1.ensureUser, boardControllers_1.createBoard);
router.patch("/update-title", boardControllers_1.updateBoardTitle);
router.delete("/delete", boardControllers_1.deleteBoard);
exports.default = router;
//# sourceMappingURL=boardRoutes.js.map