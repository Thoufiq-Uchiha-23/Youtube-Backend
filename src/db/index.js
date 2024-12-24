import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = aysnc () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("MONGODB connection error", error)
    }
}