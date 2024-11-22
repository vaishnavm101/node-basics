import express from "express"
import ProductModel from "../models/Product.js"


const router = express.Router()

router.post("/add-product", (req, res) => {
    // Check here whether the user is admin or not????

    // If only true proceed...

    
})

router.get("/", (req, res) => {
    // check if user is authenticated or not?
    // If yes, then return all the products....
    
})



export default router