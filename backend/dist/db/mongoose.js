"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const URI = process.env.MONGO_URI;
const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}${URI}`;
const connectDb = async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log('MongoDB connected successfully.');
    }
    catch (e) {
        console.error(`MongoDB Connection Failed: ${e}`);
    }
};
exports.default = connectDb;
//# sourceMappingURL=mongoose.js.map