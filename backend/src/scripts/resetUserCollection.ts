import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const URI = process.env.MONGO_URI;

const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}${URI}`;

const reset = async () => {
	try {
		await mongoose.connect(MONGO_URI as string);

		// @ts-ignore
		const collection = mongoose.connection.db.collection("users");

		// OPTION A: Drop the collection (WARNING: deletes all user data)
		await collection.drop();
		console.log("Users collection dropped.");

		// OPTION B: Drop just the email index
		// await collection.dropIndex("email_1");
		// console.log("Dropped 'email_1' index from users collection.");

		await mongoose.disconnect();
	} catch (error) {
		console.error("Error resetting users collection:", error);
	}
};

(() => reset())();
