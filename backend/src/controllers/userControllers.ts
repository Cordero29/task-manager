import {Request, Response} from 'express';
import AuthenticatedRequest from "../types/AuthenticatedRequest";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

const ISSUER = process.env.ISSUER;
const AUTH0MANAGEMENTAPI = process.env.AUTH0MANAGEMENTAPI;

export const addUserToDB = (req: AuthenticatedRequest, res: Response) => {


	console.log("Add User Request Body: ", req.body)

	res.status(200).send("OK");
}

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
	const auth0Id = req.user?.auth0Id;
	console.log("AUTH0 ID", auth0Id);
	const token = AUTH0MANAGEMENTAPI as string;
	try {
		const response = await fetch(`${ISSUER}api/v2/users/${auth0Id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		if (response.status === 204) {
			console.log("DELETE RESPONSE",)

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

