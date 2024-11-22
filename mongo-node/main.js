const { connectToDb, StudentCollection } = require("./db")
const express = require("express")
const { notesRouter } = require("./routers/notes")
const { userRouter } = require("./routers/users")

const app = express()
connectToDb()

app.use(express.json())
app.use("/notes", notesRouter)
app.use("/users", userRouter)


app.get("/", async (req, res) => {
    const students = await StudentCollection.find()
    return res.json({ students })
})


app.post("/", async (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const result = await StudentCollection.create({
        name: name,
        age: age
    })
    return res.json({ result })
})

app.listen(3000, () => console.log("server started a port 3000"))


