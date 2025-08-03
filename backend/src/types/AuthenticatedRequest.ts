import {Request} from "express";
import User from "../models/User";
import {InferSchemaType} from "mongoose"

type UserType = InferSchemaType<typeof User.schema>;

type AuthenticatedRequest = Request & {
	user?: UserType;
}

export default AuthenticatedRequest;