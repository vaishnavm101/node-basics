import express from "express"
import { v2 as cloudinary } from 'cloudinary';
import { configDotenv } from "dotenv";
import multer from "multer";
import ProductModel from "../models/Product.js";
configDotenv()

const router = express.Router()


cloudinary.config({
    cloud_name: 'dkugszhzc', 
    api_key: '672339581791326', 
    api_secret: process.env.CLOUD_SECRET // Click 'View API Keys' above to copy your API secret
});

const multerObj = multer({
    storage: multer.diskStorage({})
})


router.post("/add-product", multerObj.single("photo"), async (req, res) => {

    // Here we will get the file.....
    // Then we will just upload the file to cloudinary...
    const name = req.body.name
    const result = await cloudinary.uploader.upload(req.file.path)
    // console.log("name: ", name)
    // console.log("Result: ", result)

    if(!result){
        return res.json({msg:"Error"})
    }

    const product = await ProductModel.create({
        name: name,
        imageUrl: result.secure_url
    })

    if(product){
        return res.json({product})
    }
})

export default router