import {Response} from 'express';
import AuthenticatedRequest from "../types/AuthenticatedRequest";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

const ISSUER = process.env.ISSUER;
const AUTH0MANAGEMENTAPI = process.env.AUTH0MANAGEMENTAPI;

// This route is only use in Auth0 when user is created, hits this endpoint in Custom Actions to add User to MongoDB.
export const addUserToDB = async (req: AuthenticatedRequest, res: Response) => {
	const {email, username, auth0Id} = req.body;

	if (!auth0Id) return res.status(401).send("No Auth0 ID");

	try {
		let user = await User.findOne({auth0Id});

		if (!user) {
			user = await User.create({auth0Id, email, username});
			console.log("✅ New user created:", user);
			res.sendStatus(201);
		} else {
			res.status(200).json({ message: 'User already exists', user });
		}
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'Internal server error' });
	}
}

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
	const auth0Id = req.user?.auth0Id;
	const token = AUTH0MANAGEMENTAPI as string;

	try {
		const response = await fetch(`${ISSUER}api/v2/users/${auth0Id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		if (response.status === 204) {
			const user = await User.deleteOne({auth0Id});
			if (user.acknowledged) {
				res.status(200).send(user.acknowledged);
			} else {
				res.status(500).send("Task wasn't able to be completed");
			}
		}
	} catch (e) {
		console.error(e);
	}
}

