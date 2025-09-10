import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  toggleUser,
} from "../Controller/userController.js";

const router = express.Router();

router.get("/", getUsers);             // GET all users
router.post("/", createUser);          // POST create user
router.put("/:id", updateUser);        // PUT update user
router.patch("/:id/toggle", toggleUser); // PATCH block/unblock

export default router;
