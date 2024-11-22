import express from "express"
import UserModel from "../models/User.js"
import jwt from "jsonwebtoken"

const router = express.Router()
const JWT_SECRET_USER = "JLK#@$JKLKJSDFJLK923978472"


router.post("/register", async (req, res) => {
    // validation of email, password, name goes here...
    try {
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        const user = await UserModel.create({
            email: email,
            password: password,
            name: name,
        })
        return res.json({ user })

    } catch (err) {
        return res.json({ msg: "Error in user registration" })
    }
})

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const admin = await UserModel.findOne({ email: email, password: password })
        if (!admin) {
            return res.json({ msg: "Invalid credentials" })
        }
        const token = jwt.sign({ email: email }, JWT_SECRET_USER)
        return res.json({ token })

    } catch (error) {
        console.log("Error: ", error)
        return res.json({ msg: error })
    }
})

export default router