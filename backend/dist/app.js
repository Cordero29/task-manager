"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Routes imports
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const columnRoutes_1 = __importDefault(require("./routes/columnRoutes"));
const boardRoutes_1 = __importDefault(require("./routes/boardRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use("/task", taskRoutes_1.default);
app.use("/column", columnRoutes_1.default);
app.use("/board", boardRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map