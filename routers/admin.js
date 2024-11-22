import express from "express"
import AdminModel from "../models/Admin.js"
import jwt from "jsonwebtoken"
const JWT_ADMIN_SECRET = "JWETLKJSLKJFJ(*#$*98028394___920382"

const router = express.Router()


router.post("/register", async (req, res) => {

    // validation of email, password, name goes here...
    try {
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        const admin = await AdminModel.create({
            email: email,
            password: password,
            name: name,
        })
        return res.json({ admin })

    } catch (err) {
        return res.json({ msg: "Error in admin registration" })
    }
})

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const admin = await AdminModel.findOne({ email: email, password: password })
        if (!admin) {
            return res.json({ msg: "Invalid credentials" })
        }
        const token = jwt.sign({ email: email }, JWT_ADMIN_SECRET)
        return res.json({ token })

    } catch (error) {

    }
})




export default router