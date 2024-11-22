const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    userId: mongoose.Schema.Types.ObjectId
})

// mongoose.pluralize(null) removes the pluralizing "s" effect on models
const NotesModel = mongoose.model("note", NoteSchema)

module.exports = {
    "NotesModel":  NotesModel
}