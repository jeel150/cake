import express from "express";
import {
  getAllThemes,
  getActiveTheme,
  getThemeById,
  createTheme,
  updateTheme,
  deleteTheme,
  resetTheme
} from "../Controller/themeController.js";

const router = express.Router();

router.get("/", getAllThemes);
router.get("/active", getActiveTheme);
router.get("/:id", getThemeById);
router.post("/", createTheme);
router.put("/:id", updateTheme);
router.delete("/:id", deleteTheme);
router.patch("/reset", resetTheme);

export default router;
