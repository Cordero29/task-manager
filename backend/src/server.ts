import app from "./app";
import config from "./config/config";
import connectDb from './db/mongoose';
import { createServer } from "node:http";

// Connection to MongoDB
(async () => {
  await connectDb()
})()

const server = createServer(app);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
