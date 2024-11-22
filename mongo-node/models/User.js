const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    name: String
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = {
    "UserModel":UserModel
}

