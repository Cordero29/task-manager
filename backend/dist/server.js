"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("./db/mongoose"));
const node_http_1 = require("node:http");
// Connection to MongoDB
(async () => {
    await (0, mongoose_1.default)();
})();
const server = (0, node_http_1.createServer)(app_1.default);
server.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
//# sourceMappingURL=server.js.map