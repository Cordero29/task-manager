import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

const JWKSURI= process.env.JWKSURI;
const AUDIENCE = process.env.AUDIENCE;
const ISSUER = process.env.ISSUER;

const checkJwt = expressjwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: JWKSURI as string,
	}) as any,
	audience: AUDIENCE as string,
	issuer: ISSUER as string,
	algorithms: ["RS256"],
});

export default checkJwt;
