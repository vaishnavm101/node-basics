import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    imageUrl: String
})
const ProductModel = mongoose.model("product", ProductSchema)
export default ProductModel