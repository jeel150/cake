import express from "express";
import multer from "multer";
import cloudinary from "../Config/cloudinary.js";
import { Readable } from "stream";

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload endpoint
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert buffer to stream for Cloudinary
    const stream = Readable.from(req.file.buffer);

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "products" }, // ✅ Optional: organize uploads
      (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Upload to Cloudinary failed", error });
        }
        res.json({ url: result.secure_url });
      }
    );

    stream.pipe(uploadStream);
  } catch (error) {
    res.status(500).json({ message: "Error uploading file", error });
  }
});

export default router;
