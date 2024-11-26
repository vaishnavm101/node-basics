import express from "express"
import userRouter from "./routers/users.js"
import adminRouter from "./routers/admin.js"
import productRouter from "./routers/products2.js"
import { connectToDb } from "./db.js"
import cookieParser from "cookie-parser"

connectToDb()

const app = express()

// Valid way too
// app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
})

// we'use using cors npm package...
// app.use(cors({origin: "http://localhost:5173"}))


app.use(express.json())
app.use(cookieParser())
app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/products", productRouter)

app.listen(8000, () => console.log("server started at port 8000"))