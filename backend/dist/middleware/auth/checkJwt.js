"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWKSURI = process.env.JWKSURI;
const CLIENTID = process.env.CLIENTID;
const ISSUER = process.env.ISSUER;
const checkJwt = (0, express_jwt_1.expressjwt)({
    secret: jwks_rsa_1.default.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: JWKSURI,
    }),
    audience: CLIENTID,
    issuer: ISSUER,
    algorithms: ["RS256"],
});
exports.default = checkJwt;
//# sourceMappingURL=checkJwt.js.map