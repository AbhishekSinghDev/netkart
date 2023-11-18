import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: "" },
  image: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  in_stock: { type: Boolean, required: true },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
