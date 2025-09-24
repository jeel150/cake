import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  colors: { type: Object },
  isActive: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Theme", themeSchema);
