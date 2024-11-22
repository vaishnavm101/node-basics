import express from "express"
import userRouter from "./routers/users.js"
import adminRouter from "./routers/admin.js"
import { connectToDb } from "./db.js"

connectToDb()

const app = express()

app.use(express.json())
app.use("/user", userRouter)
app.use("/admin", adminRouter)

app.listen(8000, () => console.log("server started at port 8000"))