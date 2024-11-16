// Auth using Stateful tokens
// Statefull Auth:

const express = require("express")
const app = express()

app.use(express.json())

const users = []

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const token = crypto.randomUUID()
    users.push({ username, password, token })
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
        const token = foundUser.token
        return res.json({ token })
    }
    return res.json({ msg: "Invalid credentials" })
})

app.get("/profile", (req, res) => {
    const token = req.headers.token
    const foundUser = users.find((user) => {
        if (user.token === token) {
            return user
        }
    })
    if (foundUser) {
        return res.json({ foundUser })
    }
    return res.json({ msg: "Invalid credentials" })

})


app.listen(3000, () => console.log("server started on port 3000"))
