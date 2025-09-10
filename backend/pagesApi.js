// server/pagesApi.js
import express from "express"
import fs from "fs"
import path from "path"

const router = express.Router()
const pagesDir = path.join(process.cwd(), "src/pages")

// ✅ Delete a page file
router.delete("/:filename", (req, res) => {
  try {
    const filePath = path.join(pagesDir, req.params.filename)

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
      return res.json({ success: true, message: "Page deleted" })
    } else {
      return res.status(404).json({ success: false, message: "File not found" })
    }
  } catch (err) {
    console.error("Error deleting file:", err)
    res.status(500).json({ success: false, message: "Failed to delete file" })
  }
})

export default router
