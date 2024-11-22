const express = require("express")
const { UserModel } = require("../models/User")
const jwt = require("jsonwebtoken")

const router = express.Router()

const JWT_SECRET = "JWT_SECRET_#$@$kjljksdfJLJ"


// register, login

router.post("/register", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const user = await UserModel.create({
        email: email,
        password: password,
        name: name
    })
    return res.json({ user })
})

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await UserModel.findOne({ email: email, password: password })
        if (!user) {
            return res.json({ msg: "Invalid credetials" })
        }
        const token = jwt.sign({ email: email }, JWT_SECRET)
        return res.json({ token })
    } catch (err) {
        res.json({ msg: "Invalid credetials" })
    }
})


module.exports = {
    "userRouter": router
}