const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.send("Note / router")
})




module.exports = {
    "notesRouter": router
}
