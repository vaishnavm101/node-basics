import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String,
    products: [{ type: mongoose.Schema.ObjectId }],
    created: { type: Date, default: new Date() }
})

const UserModel = mongoose.model("user", UserSchema)

export default UserModel