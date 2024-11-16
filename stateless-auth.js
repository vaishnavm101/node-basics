const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())

const users = []
const JWT_SECRET = "JWT_SECRET~~" // This should be kept secret...

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    users.push({ username, password })
    return res.json({ msg: "User registered successfully" })
})

app.get("/", (req, res) => {
    res.json({ users })
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const foundUser = users.find((user) => {
        if (user.username === username && user.password === password) {
            return user
        }
    })
    if (foundUser) {
        const token = jwt.sign({ username: foundUser.username }, JWT_SECRET, { expiresIn: "1m" })
        return res.json({ token })
    }
    return res.json({ msg: "Invalid credentials" })
})

app.get("/profile", (req, res) => {
    const token = req.headers.token
    try {
        // Stateless authentication of tokens...
        const data = jwt.verify(token, JWT_SECRET)
        return res.json({ data })
    } catch (error) {
        // Invalid token... jwt.verify throws and exception incase of failure in validating token
        return res.status(401).json({ msg: "Invalid token" })
    }
})


app.listen(3000, () => console.log("server started on port 3000"))
