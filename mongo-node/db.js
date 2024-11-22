const mongoose = require("mongoose")

async function connectToDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/db1")
        console.log("connected to db")
    } catch (err) {
        console.log("Error: ", err)
    }
}



const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    age: Number
})

const StudentCollection = mongoose.model("student", StudentSchema)


module.exports = {
    "connectToDb": connectToDb,
    "StudentCollection": StudentCollection
}