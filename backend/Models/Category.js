import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
   sections: [{ 
    type: String, 
    enum: ["sweet-story", "mini-bites", "occasion","addon"], 
    required: true 
  }],
  image: { type: String }, // for category banner/icon
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
