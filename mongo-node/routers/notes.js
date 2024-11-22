const express = require("express")
const NoteModel = require("../models/Note")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "JWT_SECRET_#$@$kjljksdfJLJ"

const router = express.Router()


router.get("/", (req, res) => {

    /*

    we will get a token here....
    we need to figure out firt... wheather that token is valid or not???
    if valid then....
    we need to get all the notes of THAT user ONLY....
    */


    const token = req.header("token")


    try {
        const data = jwt.verify(token, JWT_SECRET)
        return res.json(data)

        const email = data.email
        

    } catch (err) {
        return res.json({ msg: "Invalid credentials" })
    }
})




module.exports = {
    "notesRouter": router
}
