// routes/authRoutes.js
import express from "express";
import { registerUser, loginUser ,verifyToken} from "../Controller/authController.js";

const router = express.Router();


router.post("/register", (req, res) => {
  req.body.role = "user";
  registerUser(req, res);
});
router.post("/login", loginUser);


router.post("/admin/register", (req, res) => {
  req.body.role = "admin";
  registerUser(req, res);
});
router.post("/admin/login", loginUser);
router.get("/verify", verifyToken);

export default router;
