import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/db0")
        console.log("db connected")

    } catch (err) {
        console.log("Error: ", err)
    }
}
