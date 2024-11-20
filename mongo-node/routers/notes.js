const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.send("Note / router")
})

router.get("/test", (req, res) => {
    res.send("Note /test  router")
})

module.exports = {
    "notesRouter": router
}
