import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String,
    created: { type: Date, default: new Date() }
})

const AdminModel = mongoose.model("admin", AdminSchema)

export default AdminModel