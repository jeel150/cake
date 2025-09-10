import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String },
    stock: { type: Number, default: 0 },
    weight: { type: String },
    customWeight: { type: String },
    eggType: { type: String, enum: ["egg", "eggless"], default: "egg" }
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError in dev
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
