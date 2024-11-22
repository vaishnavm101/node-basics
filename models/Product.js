import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number
})
const ProductModel = mongoose.model("product", ProductSchema)
export default ProductModel