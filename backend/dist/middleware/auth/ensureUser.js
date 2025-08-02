"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUser = void 0;
const User_1 = __importDefault(require("../../models/User"));
const ensureUser = async (req, res, next) => {
    const auth0Id = req.auth?.sub;
    const email = req.auth?.email;
    const name = req.auth?.name;
    const userInfo = req.auth;
    console.log("USER ->", userInfo);
    if (!auth0Id)
        return res.status(401).send("No Auth0 ID");
    let user = await User_1.default.findOne({ auth0Id });
    // Create on first hit (auto onboarding)
    if (!user) {
        user = await User_1.default.create({ auth0Id, email, name });
        console.log("✅ New user created:", name);
    }
    req.user = user;
    next();
};
exports.ensureUser = ensureUser;
//# sourceMappingURL=ensureUser.js.map