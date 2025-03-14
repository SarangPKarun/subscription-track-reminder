import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI) {
    throw new Error("DB_URI not defined in the environment variables .env.<production/development>.local");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`Connected to the database in in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Failed to connect to the database \n", error);
        process.exit(1);
    } 
}

export default connectToDatabase;