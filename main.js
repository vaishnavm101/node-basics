import express from "express"
import userRouter from "./routers/users.js"
import adminRouter from "./routers/admin.js"
import { connectToDb } from "./db.js"

connectToDb()

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type,token")
    next()
})

// we'use using cors npm package...
// app.use(cors({origin: "http://localhost:5173"}))


app.use(express.json())
app.use("/user", userRouter)
app.use("/admin", adminRouter)

app.listen(8000, () => console.log("server started at port 8000"))