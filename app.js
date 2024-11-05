const express = require('express');

const app = express()

app.use(express.json())
// Returns an middleware function... which kinda looks like this..
// (req, res, next) => {
// Reading the body...
// adding the body inside req.body....
// calling the next()
// }

// app.use((req, res, next) => {
//     console.log("use function")
//     next()
// })
// app.get("/profile", (req, res) => {
//     res.send("Profile endpoint")
// })

// app.use("/", (req, res, next) => {
//     console.log("use function")
//     next()
// })

// app.get("/test/one", (req, res) => {
//     console.log("final middleware")
//     res.send("Base endpoint")
// })



const users = []

app.get("/", (req, res) => {
    res.json({ users })
})

app.post("/register", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const token = crypto.randomUUID()
    users.push({ username, password, token })
    res.json({ msg: "User added successfully" })
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
        return res.json({ "token": foundUser.token })
    }
    return res.json({ msg: "User not found" })
})

// Only logged in users/authenticated users should be able to access it...
app.post("/profile", (req, res) => {
    const token = req.headers.token
    const foundUser = users.find((user) => {
        if (user.token === token) {
            return user
        }
    })
    if (foundUser) {
        return res.json({ msg: foundUser })
    }
    return res.json({ err: "Unauthenticated user" })
})


app.listen(3000, () => console.log("server started at port 3000"))