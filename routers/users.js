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
        console.log("error: ", err)
        return res.json({ msg: "Error in user registration" })
    }
})

// router.post("/login", async (req, res) => {
//     try {
//         const email = req.body.email
//         const password = req.body.password
//         const admin = await UserModel.findOne({ email: email, password: password })
//         if (!admin) {
//             return res.json({ msg: "Invalid credentials" })
//         }
//         const token = jwt.sign({ email: email }, JWT_SECRET_USER)
//         res.cookie("authToken", token, {
//             httpOnly: true,
//             secure: false,
//             maxAge: 1000 * 60 * 60 * 24
//         })
//         return res.json({ msg: "Login Successfully!" })
//         // return res.json({ token })

//     } catch (error) {
//         console.log("Error: ", error)
//         return res.json({ msg: error })
//     }
// })


router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const admin = await UserModel.findOne({ email: email, password: password })
        if (!admin) {
            return res.json({ msg: "Invalid credentials" })
        }
        const token = jwt.sign({ email: email }, JWT_SECRET_USER)
        res.cookie("authToken", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
            secure: false
        })
        return res.json({ msg: "Login Successfully!" })
        // return res.json({ token })

    } catch (error) {
        console.log("Error: ", error)
        return res.json({ msg: error })
    }
})

const auth = (req, res, next) => {
    console.log(req.cookies)
    if (req.cookies) {
        const token = req.cookies.authToken
        // Verify the token 
        // If value call next()
        try {
            const data = jwt.verify(token, JWT_SECRET)
            req.email = data.email
            next()
        } catch (err) {
            return res.json({ result: false, msg: "Invalid user" })
        }
    }
    else {
        return res.json({ result: false, msg: "Invalid user" })
    }
}

router.get("/", auth, (req, res) => {

    res.send("Ok response")
})

export default router