import express from "express"
import ProductModel from "../models/Product.js"
import multer from "multer"
import { v2 as cloudinary } from 'cloudinary';
import { configDotenv } from "dotenv";
configDotenv()

const router = express.Router()

cloudinary.config({
    cloud_name: 'dkugszhzc',
    api_key: '672339581791326',
    api_secret: process.env.CLOUD_SECRET// Click 'View API Keys' above to copy your API secret
});

const multerObj = multer({
    storage: multer.diskStorage({})
})

router.post("/add-product", multerObj.single("photo"), async (req, res) => {
    // Check here whether the user is admin or not????
    console.log("Adding product")

    const result = await cloudinary.uploader.upload(req.file.path)
    // If only true proceed...
    const name = req.body.name
    const price = req.body.price
    const imageUrl = result.secure_url


    const product = await ProductModel.create({
        name, price, imageUrl
    })

    return res.json({ product })

    // upload the img to cloud storage...
    //  after done... take the url and store it to the database...

    // Handling media files... in nodejs...
    // multer...






})

router.get("/", (req, res) => {
    // check if user is authenticated or not?
    // If yes, then return all the products....

})



export default router