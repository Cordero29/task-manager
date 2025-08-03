import {Response, NextFunction} from "express";
import AuthenticatedRequest from "../../types/AuthenticatedRequest";
import User from "../../models/User";
import UserInfo from "../../types/UserInfo";
import dotenv from "dotenv";

dotenv.config();

const ISSUER = process.env.ISSUER;

const ensureUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const authToken = req.get('Authorization');
	const url = ISSUER as string;

	try {
		const response = await fetch(`${url}userinfo`, {
			headers: {
				Authorization: `${authToken}`
			}
		});

		const body = await response.json() as UserInfo;
		const {sub, email, username} = body;

		if (!sub) return res.status(401).send("No Auth0 ID");

		let user = await User.findOne({auth0Id: sub});

		// Create on first hit (auto onboarding)
		if (!user) {
			user = await User.create({auth0Id: sub, email, username});
			console.log("✅ New user created:", user);
		}

		req.user = user;
		next();

	} catch (e) {
		console.error(e);
		res.status(500).send(e);
	}
};

export default ensureUser;
