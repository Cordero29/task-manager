import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const URI = process.env.MONGO_URI;

const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}${URI}`;

const connectDb = async () => {
	try {
		await mongoose.connect(MONGO_URI as string);
		console.log('MongoDB connected successfully.');
	} catch(e) {
		console.error(`MongoDB Connection Failed: ${e}`);
	}
};

export default connectDb;
